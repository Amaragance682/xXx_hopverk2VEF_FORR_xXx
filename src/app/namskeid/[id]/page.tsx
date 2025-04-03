"use client";

import React from "react";
import { Namskeid } from "../../../components/SingularDetails/Namskeid/Namskeid.tsx";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute.tsx";
import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import { Suspense } from "react";

export default function NamskeidSingular() {
  return (
    <>
      <ProtectedRoute redirect={true}>
        <Navigation />
        <Splash title="Skrá á námskeið" />
        <ContentBody>
          <Suspense>
            <Namskeid />
          </Suspense>
        </ContentBody>
        <Footer />
      </ProtectedRoute>
    </>
  );
}
