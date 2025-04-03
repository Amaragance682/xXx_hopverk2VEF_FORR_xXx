"use client";

import React from "react";
import { useState } from "react";
import { login } from "../../../api/auth.ts";
import "./Login.css";
import { useRouter } from "next/navigation";
import { ErrorType } from "../../../types/error.ts";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const data = await login(username, password);

    if (data.errors) {
      setErrors(data.errors);
      setLoading(false);
    } else {
      setErrors([]);
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "tokenExpiry",
          String(Date.now() + data.expiresIn * 1000),
        );
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      router.push("/");
    }
  }

  return (
    <div className="login-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
      {errors && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>
              <p>{error.msg}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
