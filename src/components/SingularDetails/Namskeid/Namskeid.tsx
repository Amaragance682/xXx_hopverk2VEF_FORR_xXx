"use client";

import React from "react";
import { useState } from "react";
import "./Namskeid.css";
import AdminProtectedRoute from "../../ProtectedRoute/AdminProtectedRoute.tsx";
import Link from "next/link";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute.tsx";
import { signToNamskeid } from "../../../api/namskeid.ts";

export function Namskeid({ namskeid }) {
  const [errors, setErrors] = useState([]);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signUpHandler(e: React.MouseEvent) {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) return;
    const res = await signToNamskeid(namskeid.id, token);

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
      <div className="namskeid-container">
        <AdminProtectedRoute>
          <Link
            href={{
              pathname: `/namskeid/edit`,
              query: { namskeid: JSON.stringify(namskeid) },
            }}
          >
            Breyta námskeiði
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
        {!namskeid ? (
          <p>Eitthvað fór úrskeiðis við að ná í námskeiðið.</p>
        ) : signed ? (
          <p>Skráning tókst!</p>
        ) : (
          <>
            <div className="namskeid-information">
              <div>
                <h2>{namskeid.name}</h2>
                <p>{namskeid.level}</p>
              </div>
              <p>{namskeid.description}</p>
              <div>
                <p>{namskeid.start_date}</p>
                <p>{namskeid.end_date}</p>
              </div>
            </div>
            {!loading ? (
              <div className="namskeid-button-container">
                <button
                  className="namskeid-sign-button"
                  onClick={signUpHandler}
                  disabled={!namskeid}
                >
                  Skrá mig á námskeiðið
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

export function NamskeidThumb({ namskeid }) {
  return (
    <div className="nam-thumb-container">
      <h2>{namskeid.name}</h2>
      <p>{namskeid.level}</p>
      <p>{namskeid.start_date}</p>
      <p>{namskeid.end_date}</p>
    </div>
  );
}
