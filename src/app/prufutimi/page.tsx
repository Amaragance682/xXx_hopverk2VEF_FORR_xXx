import React from "react";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Splash from "../../components/Splash/Splash.tsx";
import ProfaList from "../../components/PagedLists/ProfaList/ProfaList.tsx";
import ContentBody from "../../components/ContentBody/ContentBody.tsx";

export default function Prufutimi() {
  return (
    <>
      <Navigation />
      <Splash title="profa" />
      <ContentBody>
        <ProfaList />
      </ContentBody>
      <Footer />
    </>
  );
}
