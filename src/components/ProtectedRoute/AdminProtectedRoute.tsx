"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isTokenAdmin, isTokenValid } from "../../lib/auth.ts";
import React from "react";

export default function AdminProtectedRoute({
  children,
  redirect = false,
}: {
  children: ReactNode;
  redirect?: boolean;
}) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuthenticated(isTokenValid());
    setIsAdmin(isTokenAdmin());
  }, []);

  useEffect(() => {
    if (
      redirect &&
      isAdmin !== null &&
      isAuthenticated !== null &&
      !isAdmin &&
      !isAuthenticated
    ) {
      globalThis.location.href = "/";
    }
  }, [redirect, isAdmin, isAuthenticated, router]);

  if (isAdmin === null || isAuthenticated === null) return null;

  const shouldRender = isAdmin && isAuthenticated;

  return shouldRender ? <>{children}</> : null;
}
