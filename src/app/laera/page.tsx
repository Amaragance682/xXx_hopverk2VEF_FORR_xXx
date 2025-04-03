import React from "react";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Splash from "../../components/Splash/Splash.tsx";
import ContentBody from "../../components/ContentBody/ContentBody.tsx";
import MoveList from "../../components/PagedLists/MoveList/MoveList.tsx";

export default function LaeraListPage() {
  return (
    <>
      <Navigation />
      <Splash title="Læra" />
      <ContentBody>
        <MoveList />
      </ContentBody>
      <Footer />
    </>
  );
}
