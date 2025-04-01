import React from "react";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Splash from "../../components/Splash/Splash.tsx";
import Logout from "../../components/Users/Logout/Logout.tsx";
import ContentBody from "../../components/ContentBody/ContentBody.tsx";

export default function LogoutPage() {
  return (
    <>
      <Navigation />
      <Splash title="Log out" />
      <ContentBody>
        <Logout />
      </ContentBody>
      <Footer />
    </>
  );
}
