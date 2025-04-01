"use client";

import React from "react";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Splash from "../../components/Splash/Splash.tsx";
import NamskeidList from "../../components/PagedLists/NamskeidList/NamskeidList.tsx";
import ContentBody from "../../components/ContentBody/ContentBody.tsx";

export default function NamskeidListPage() {
  return (
    <>
      <Navigation />
      <Splash title="namskeid" />
      <ContentBody>
        <NamskeidList />
      </ContentBody>
      <Footer />
    </>
  );
}
