"use client";

import React from "react";
import { useEffect, useState } from "react";
import { fetchProfa } from "../../../api/profa.ts";
import "./ProfaList.css";
import AdminProtectedRoute from "../../ProtectedRoute/AdminProtectedRoute.tsx";
import Link from "next/link";
import { ProfaThumb } from "../../SingularDetails/Profa/Profa.tsx";

export default function ProfaList() {
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [profa, setProfa] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfa() {
      setLoading(true);
      try {
        const result = await fetchProfa(offset);
        if (result instanceof Error) {
          setError(result.message);
        } else {
          setProfa(result);
          setError("");
        }
      } catch (err) {
        setError((err as Error).message);
      }
      setLoading(false);
    }
    loadProfa();
  }, [offset]);

  useEffect(() => {
    console.log(profa);
  }, [profa]);

  function prevPage() {
    setOffset(offset - 5);
  }

  function nextPage() {
    setOffset(offset + 5);
  }

  return (
    <div className="profa-list-container">
      <AdminProtectedRoute>
        <Link href="/prufutimi/add">Bæta við prufutíma</Link>
      </AdminProtectedRoute>
      <ul className="profa-list-list">
        {!loading ? (
          error ? (
            <p>{error}</p>
          ) : (
            profa.data.map((prof, index) => (
              <li key={index}>
                <Link
                  href={{
                    pathname: `/prufutimi/${prof.id}`,
                    query: { prufutimi: JSON.stringify(prof) },
                  }}
                >
                  <ProfaThumb prufutimi={prof} />
                </Link>
              </li>
            ))
          )
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <div className="profa-list-button-container">
        <button
          className="profa-list-button"
          onClick={prevPage}
          disabled={!profa || offset - 5 < 0}
        >
          ←
        </button>
        <button
          className="profa-list-button"
          onClick={nextPage}
          disabled={!profa || offset + 5 > profa.total}
        >
          →
        </button>
      </div>
    </div>
  );
}
