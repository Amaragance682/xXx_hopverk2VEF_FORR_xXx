import React from "react";
import Register from "../../components/Users/Register/Register.tsx";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Splash from "../../components/Splash/Splash.tsx";
import ContentBody from "../../components/ContentBody/ContentBody.tsx";

export default function RegisterPage() {
  return (
    <>
      <Navigation />
      <Splash title="Register" />
      <ContentBody>
        <Register />
      </ContentBody>
      <Footer />
    </>
  );
}
