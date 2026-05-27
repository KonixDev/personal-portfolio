import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { BackendHero } from "./components/hero";
import { Problems } from "./components/problems";
import { BackendServices } from "./components/services";
import { BackendExamples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { BackendStack } from "./components/tech-stack";
import { BackendPricing } from "./components/pricing";
import { BackendFaq } from "./components/faq";
import { BackendCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Sistemas Backend — APIs, bases de datos e infraestructura",
  description:
    "Desarrollo backend: APIs REST y GraphQL, bases de datos, microservicios, integraciones, colas de trabajo y infraestructura escalable. Node.js, PostgreSQL, Redis.",
  openGraph: {
    title: "Sistemas Backend — APIs e infraestructura | Martín Coll",
    description:
      "APIs, bases de datos, microservicios e infraestructura. El motor invisible que hace funcionar tu producto.",
  },
};

export default function SistemasBackendPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <BackendHero />
          <div className="divider" />
          <Problems />
          <div className="divider" />
          <BackendServices />
          <div className="divider" />
          <BackendExamples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <BackendStack />
          <div className="divider" />
          <BackendPricing />
          <div className="divider" />
          <BackendFaq />
          <div className="divider" />
          <BackendCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
