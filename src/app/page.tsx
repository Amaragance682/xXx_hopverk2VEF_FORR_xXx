import React from "react";
import Navigation from "../components/Navigation/Navigation.tsx";
import Showreel from "../components/Showreel/Showreel.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Lorem from "../components/Lorem/Lorem.tsx";
import ContentBody from "../components/ContentBody/ContentBody.tsx";

export default function Home() {
  return (
    <>
      <Showreel />
      <Navigation />
      <ContentBody>
        <Lorem />
      </ContentBody>
      <Footer />
    </>
  );
}
