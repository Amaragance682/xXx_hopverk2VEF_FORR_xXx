import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import EditProfa from "../../../components/Edit/Profa/EditProfa.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import React from "react";

export default function EditNamskeidPage({ searchParams }) {
  const profa = searchParams.profa
    ? JSON.parse(decodeURIComponent(searchParams.profa))
    : null;

  return (
    <>
      <Navigation />
      <Splash title="Breyta námskeiði" />
      <ContentBody>
        <EditProfa profa={profa} />
      </ContentBody>
      <Footer />
    </>
  );
}
