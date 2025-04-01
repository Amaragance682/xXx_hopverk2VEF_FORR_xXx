"use client";

import React from "react";
import "./Logout.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleLogout() {
    setLoading(true);

    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("user");
    }

    router.push("/");
  }

  return (
    <div className="logout-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Are you sure you want to log out?</h2>
          <button onClick={handleLogout}>yes</button>
        </>
      )}
    </div>
  );
}
