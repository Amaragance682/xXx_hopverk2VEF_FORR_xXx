"use client";

import React from "react";
import { useState } from "react";
import "./Namskeid.css";
import AdminProtectedRoute from "../../ProtectedRoute/AdminProtectedRoute.tsx";
import Link from "next/link";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute.tsx";
import { signToNamskeid } from "../../../api/namskeid.ts";
import { ErrorType } from "../../../types/error.ts";
import { NamskeidType } from "../../../types/namskeid.ts";
import { useSearchParams } from "next/navigation";

export function Namskeid() {
  const searchParams = useSearchParams();

  const namskeidOrNull = searchParams.get("namskeid");
  const namskeid = namskeidOrNull
    ? JSON.parse(decodeURIComponent(namskeidOrNull))
    : null;

  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signUpHandler() {
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

export function NamskeidThumb({ namskeid }: { namskeid: NamskeidType }) {
  return (
    <div className="nam-thumb-container">
      <h2>{namskeid.name}</h2>
      <p>{namskeid.level}</p>
      <p>{namskeid.start_date}</p>
      <p>{namskeid.end_date}</p>
    </div>
  );
}
