import React from "react";
import Login from "../../components/Users/Login/Login.tsx";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Splash from "../../components/Splash/Splash.tsx";
import ContentBody from "../../components/ContentBody/ContentBody.tsx";

export default function LoginPage() {
  return (
    <>
      <Navigation />
      <Splash title="Log in" />
      <ContentBody>
        <Login />
      </ContentBody>
      <Footer />
    </>
  );
}
