import React from "react";
import { Namskeid } from "../../../components/SingularDetails/Namskeid/Namskeid.tsx";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute.tsx";
import ContentBody from "../../../components/ContentBody/ContentBody.tsx";

export default function NamskeidSingular({ params, searchParams }) {
  const namskeid = searchParams.namskeid
    ? JSON.parse(decodeURIComponent(searchParams.namskeid))
    : null;

  return (
    <>
      <ProtectedRoute redirect={true}>
        <Navigation />
        <Splash title="Skrá á námskeið" />
        <ContentBody>
          <Namskeid namskeid={namskeid} />
        </ContentBody>
        <Footer />
      </ProtectedRoute>
    </>
  );
}
