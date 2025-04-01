"use client";

import { ReactNode, useEffect } from "react";
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
  const isAuthenticated = isTokenValid();
  const shouldRender = inverted ? !isAuthenticated : isAuthenticated;

  useEffect(() => {
    if (redirect && !shouldRender) {
      globalThis.location.href = inverted ? "/" : "/login";
    }
  }, [redirect, shouldRender, router, inverted]);

  return shouldRender ? <>{children}</> : null;
}
