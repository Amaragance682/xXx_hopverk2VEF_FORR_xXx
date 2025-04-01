"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.tsx";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 w-full p-20 z-50 bg-linear-to-b from-black/70 to-black/0">
      <div className="flex justify-between md:items-center gap-20 text-white">
        <ul className="flex justify-start md:items-center gap-20 text-white">
          <li className="flex items-center" key="logo">
            <img src="navLogo.png" alt="Logo" className="h-6 object-center" />
          </li>
          {[
            { href: "/", label: "FORSÍÐA" },
            { href: "/prufutimi", label: "SKOÐA PRUFUTÍMA" },
            { href: "/namskeid", label: "SKOÐA NÁMSKEIÐ" },
          ].map(({ href, label }, index) => (
            <li className="" key={index}>
              <Link
                href={href}
                className={`${
                  pathname === href ? "text-alpha-beige" : "text-alpha-beige/60"
                } hover:text-alpha-beige
								transition ease-in-out duration-200
								p-4 text-lg
							`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <ProtectedRoute inverted={true}>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </ProtectedRoute>
          <ProtectedRoute>
            <Link href="/logout">Logout</Link>
          </ProtectedRoute>
        </div>
      </div>
    </nav>
  );
}
