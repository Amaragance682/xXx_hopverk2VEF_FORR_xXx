import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import AddProfa from "../../../components/Add/Profa/AddProfa.tsx";
import React from "react";

export default function AddProfaPage() {
  return (
    <>
      <Navigation />
      <Splash title="Bæta við prufutíma" />
      <ContentBody>
        <AddProfa />
      </ContentBody>
      <Footer />
    </>
  );
}
