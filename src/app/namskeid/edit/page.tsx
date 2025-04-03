"use client";

import ContentBody from "../../../components/ContentBody/ContentBody.tsx";
import EditNamskeid from "../../../components/Edit/Namskeid/EditNamskeid.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import Navigation from "../../../components/Navigation/Navigation.tsx";
import Splash from "../../../components/Splash/Splash.tsx";
import React from "react";
import { Suspense } from "react";

export default function EditNamskeidPage() {
  return (
    <>
      <Navigation />
      <Splash title="Breyta námskeiði" />
      <ContentBody>
        <Suspense>
          <EditNamskeid />
        </Suspense>
      </ContentBody>
      <Footer />
    </>
  );
}
