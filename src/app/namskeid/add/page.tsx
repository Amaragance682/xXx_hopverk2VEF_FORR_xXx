import AddNamskeid from "../../../components/Add/Namskeid/AddNamskeid.tsx";
import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import React from "react";

export default function AddNamskeidPage() {
  return (
    <>
      <Navigation />
      <Splash title="Bæta við námskeiði" />
      <ContentBody>
        <AddNamskeid />
      </ContentBody>
      <Footer />
    </>
  );
}
