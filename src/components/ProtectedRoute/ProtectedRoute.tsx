"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isTokenValid } from "../../lib/auth.ts";
import React from "react";

export default function ProtectedRoute({
  children,
  redirect = false,
  inverted = false,
}: {
  children: ReactNode;
  redirect?: boolean;
  inverted?: boolean;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuthenticated(isTokenValid());
  }, []);

  useEffect(() => {
    if (redirect && isAuthenticated !== null && !isAuthenticated) {
      globalThis.location.href = inverted ? "/" : "/login";
    }
  }, [redirect, isAuthenticated, router, inverted]);

  if (isAuthenticated === null) return null;

  const shouldRender = inverted ? !isAuthenticated : isAuthenticated;
  return shouldRender ? <>{children}</> : null;
}
