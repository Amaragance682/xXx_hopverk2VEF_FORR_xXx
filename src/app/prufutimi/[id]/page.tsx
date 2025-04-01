import React from "react";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute.tsx";
import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import { Profa } from "../../../components/SingularDetails/Profa/Profa.tsx";

export default function ProfaSingular({ params, searchParams }) {
  const prufutimi = searchParams.prufutimi
    ? JSON.parse(decodeURIComponent(searchParams.prufutimi))
    : null;

  return (
    <>
      <ProtectedRoute redirect={true}>
        <Navigation />
        <Splash title="Skrá í prufutíma" />
        <ContentBody>
          <Profa profa={prufutimi} />
        </ContentBody>
        <Footer />
      </ProtectedRoute>
    </>
  );
}
