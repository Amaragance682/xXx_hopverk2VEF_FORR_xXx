"use client";

import "./Navigation.css";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.tsx";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav-nav">
      <div className="nav-container">
        <ul className="nav-ul">
          <li className="nav-logo-container" key="logo">
            <img src="navLogo.png" alt="Logo" className="nav-logo" />
          </li>
          {[
            { href: "/", label: "FORSÍÐA" },
            { href: "/prufutimi", label: "SKOÐA PRUFUTÍMA" },
            { href: "/namskeid", label: "SKOÐA NÁMSKEIÐ" },
            { href: "/laera", label: "LÆRA" },
          ].map(({ href, label }, index) => (
            <li className="" key={index}>
              <Link
                href={href}
                className={`${
                  pathname === href ? "nav-link-current" : "nav-link"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right-container">
          <ProtectedRoute inverted={true}>
            <Link
              href="/login"
              className={`${
                pathname === "/login" ? "nav-link-current" : "nav-link"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={`${
                pathname === "/register" ? "nav-link-current" : "nav-link"
              }`}
            >
              Register
            </Link>
          </ProtectedRoute>
          <ProtectedRoute>
            <Link
              href="/logout"
              className={`${
                pathname === "/logout" ? "nav-link-current" : "nav-link"
              }`}
            >
              Logout
            </Link>
          </ProtectedRoute>
        </div>
      </div>
    </nav>
  );
}
