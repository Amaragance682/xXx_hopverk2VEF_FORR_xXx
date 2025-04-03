"use client";

import React from "react";
import { useEffect, useState } from "react";
import { fetchNamskeid } from "../../../api/namskeid.ts";
import "./NamskeidList.css";
import Link from "next/link";
import AdminProtectedRoute from "../../ProtectedRoute/AdminProtectedRoute.tsx";
import { NamskeidThumb } from "../../SingularDetails/Namskeid/Namskeid.tsx";

export default function NamskeidList() {
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [namskeid, setNamskeid] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNamskeid() {
      setLoading(true);
      try {
        const result = await fetchNamskeid(offset);
        if (result instanceof Error) {
          setError(result.message);
        } else {
          setNamskeid(result);
          setError("");
        }
      } catch (err) {
        setError((err as Error).message);
      }
      setLoading(false);
    }
    loadNamskeid();
  }, [offset]);

  function prevPage() {
    setOffset(offset - 5);
  }

  function nextPage() {
    setOffset(offset + 5);
  }

  return (
    <div className="namskeid-list-container">
      <AdminProtectedRoute>
        <Link href="/namskeid/add">Bæta við námskeiði</Link>
      </AdminProtectedRoute>
      <ul className="namskeid-list-list">
        {!loading ? (
          error ? (
            <p>{error}</p>
          ) : (
            namskeid.data.map((nam, index) => (
              <li key={index}>
                <Link
                  href={{
                    pathname: `/namskeid/${nam.id}`,
                    query: { namskeid: JSON.stringify(nam) },
                  }}
                >
                  <NamskeidThumb namskeid={nam} />
                </Link>
              </li>
            ))
          )
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <div className="namskeid-list-button-container">
        <button
          className="namskeid-list-button"
          onClick={prevPage}
          disabled={!namskeid || offset - 5 < 0}
        >
          ←
        </button>
        <button
          className="namskeid-list-button"
          onClick={nextPage}
          disabled={!namskeid || offset + 5 >= namskeid.total}
        >
          →
        </button>
      </div>
    </div>
  );
}
