"use client";

import "./MoveList.css";
import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchMoves } from "../../../api/laera.ts";
import { MoveThumb } from "../../SingularDetails/Move/Move.tsx";
import AdminProtectedRoute from "../../ProtectedRoute/AdminProtectedRoute.tsx";
import Link from "next/link";

export default function MoveList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [moves, setMoves] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(4);
  const [hasMore, setHasMore] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastMoveRef = useCallback(
    (node: HTMLElement | null) => {
      console.log("GAMING");
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prevOffset) => prevOffset + limit);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  useEffect(() => {
    async function loadMoves() {
      setLoading(true);
      try {
        const result = await fetchMoves(offset, limit);
        console.log(result);
        if (result instanceof Error) {
          setError(result.message);
        } else {
          setMoves((prevMoves) => prevMoves.concat(result.data));
          setHasMore(result.meta.hasNext);
          setLimit(result.limit);
          setError("");
        }
      } catch (err) {
        setError((err as Error).message);
      }
      setLoading(false);
    }
    loadMoves();
  }, [offset]);

  return (
    <div className="move-list-root">
      <AdminProtectedRoute>
        <Link href="laera/add">Bæta við</Link>
      </AdminProtectedRoute>
      {error ? (
        <p>{error}</p>
      ) : moves ? (
        <div className="move-list-container">
          {moves.map((move, index) => (
            <MoveThumb
              ref={index === moves.length - 1 ? lastMoveRef : null}
              key={index}
              move={move}
            />
          ))}
        </div>
      ) : null}
      {loading ? <p>Loading...</p> : null}
    </div>
  );
}
