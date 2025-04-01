"use client";

import { ReactNode, useEffect } from "react";
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
  const isAdmin = isTokenAdmin();
  const isAuthenticated = isTokenValid();
  const shouldRender = isAdmin && isAuthenticated;

  useEffect(() => {
    if (redirect && !shouldRender) {
      globalThis.location.href = "/";
    }
  }, [redirect, shouldRender, router]);

  return shouldRender ? <>{children}</> : null;
}
