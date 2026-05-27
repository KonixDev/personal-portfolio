import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { WebHero } from "./components/hero";
import { WebTypes } from "./components/web-types";
import { WebExamples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { WebStack } from "./components/tech-stack";
import { WebProcess } from "./components/process";
import { WebPricing } from "./components/pricing";
import { WebFaq } from "./components/faq";
import { WebCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Desarrollo Web — Sitios, plataformas y sistemas a medida",
  description:
    "Desarrollo web profesional: landing pages, plataformas SaaS, ERPs, dashboards, e-commerce. Next.js, React, Node.js. Precio fijo, código tuyo.",
  openGraph: {
    title: "Desarrollo Web — Sitios, plataformas y sistemas | Martín Coll",
    description:
      "Sitios web, plataformas SaaS, ERPs y dashboards. De la idea al lanzamiento en semanas. Precio fijo, código tuyo.",
  },
};

export default function DesarrolloWebPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <WebHero />
          <div className="divider" />
          <WebTypes />
          <div className="divider" />
          <WebExamples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <WebStack />
          <div className="divider" />
          <WebProcess />
          <div className="divider" />
          <WebPricing />
          <div className="divider" />
          <WebFaq />
          <div className="divider" />
          <WebCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
