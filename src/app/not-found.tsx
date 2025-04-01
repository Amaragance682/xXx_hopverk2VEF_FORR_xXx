import ContentBody from "../components/ContentBody/ContentBody.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Navigation from "../components/Navigation/Navigation.tsx";
import Splash from "../components/Splash/Splash.tsx";
import React from "react";
import RootLayout from "./layout.tsx";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <Splash title="404" />
      <ContentBody>
        <div>
          <h1>The page you were looking for does not exist</h1>
        </div>
      </ContentBody>
      <Footer />
    </>
  );
}
