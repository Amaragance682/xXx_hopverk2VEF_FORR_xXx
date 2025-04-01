"use client";

import React from "react";
import { useState } from "react";
import "./Profa.css";
import AdminProtectedRoute from "../../ProtectedRoute/AdminProtectedRoute.tsx";
import Link from "next/link";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute.tsx";
import { signToProfa } from "../../../api/profa.ts";

export function Profa({ profa }) {
  const [errors, setErrors] = useState([]);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signUpHandler(e: React.MouseEvent) {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) return;
    const res = await signToProfa(profa.id, token);

    if (res.errors) {
      setErrors(res.errors);
      setSigned(false);
    } else {
      setErrors([]);
      setSigned(true);
    }

    setLoading(false);
  }

  return (
    <ProtectedRoute redirect={true}>
      <div className="profa-container">
        <AdminProtectedRoute>
          <Link
            href={{
              pathname: `/prufutimi/edit`,
              query: { profa: JSON.stringify(profa) },
            }}
          >
            Breyta prufutíma
          </Link>
        </AdminProtectedRoute>
        {errors && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>
                <p>{error.msg}</p>
              </li>
            ))}
          </ul>
        )}
        {!profa ? (
          <p>Eitthvað fór úrskeiðis við að ná í prufutímann.</p>
        ) : signed ? (
          <p>Skráning tókst!</p>
        ) : (
          <>
            <div className="profa-information">
              <div>
                <h2>{profa.date}</h2>
                <p>{profa.ages}</p>
              </div>
              <div>
                <p>
                  {profa.duration.days ? `${profa.duration.days} days ` : ""}
                  {profa.duration.hours ? `${profa.duration.hours} hours ` : ""}
                  {profa.duration.minutes
                    ? `${profa.duration.minutes} minutes`
                    : ""}
                </p>
                <p>{profa.capacity}</p>
              </div>
            </div>
            {!loading ? (
              <div className="profa-button-container">
                <button
                  className="profa-sign-button"
                  onClick={signUpHandler}
                  disabled={!profa}
                >
                  Skrá mig í prufutímann
                </button>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}

export function ProfaThumb({ prufutimi }) {
  return (
    <div className="prof-thumb-container">
      <h2>{prufutimi.date}</h2>
      <p>{prufutimi.ages}</p>
      <p>{prufutimi.capacity}</p>
    </div>
  );
}
