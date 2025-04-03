import React from "react";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import AddMove from "../../../components/Add/Move/AddMove.tsx";

export default function AddMovePage() {
  return (
    <>
      <Navigation />
      <Splash title="Læra" />
      <ContentBody>
        <AddMove />
      </ContentBody>
      <Footer />
    </>
  );
}
