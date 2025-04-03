"use client";

import React from "react";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute.tsx";
import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import { Profa } from "../../../components/SingularDetails/Profa/Profa.tsx";
import { Suspense } from "react";

export default function ProfaSingular() {
  return (
    <>
      <ProtectedRoute redirect={true}>
        <Navigation />
        <Splash title="Skrá í prufutíma" />
        <ContentBody>
          <Suspense>
            <Profa />
          </Suspense>
        </ContentBody>
        <Footer />
      </ProtectedRoute>
    </>
  );
}
