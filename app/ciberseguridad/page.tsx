import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { SecurityHero } from "./components/hero";
import { ThreatStats } from "./components/threat-stats";
import { SecurityServices } from "./components/services";
import { SecurityProcess } from "./components/process";
import { WhatYouGet } from "./components/what-you-get";
import { SecurityPricing } from "./components/pricing";
import { SecurityFaq } from "./components/faq";
import { SecurityCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Ciberseguridad — Auditorías, pentesting y protección",
  description:
    "Análisis de seguridad, pentesting, auditorías OWASP, protección de infraestructura y hardening de sistemas. Encontramos las vulnerabilidades antes que los atacantes.",
  openGraph: {
    title: "Ciberseguridad — Auditorías y pentesting | Martín Coll",
    description:
      "Auditorías de seguridad, pentesting y hardening. Protegé tu sistema antes de que sea tarde.",
  },
};

export default function CiberseguridadPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <SecurityHero />
          <ThreatStats />
          <div className="divider" />
          <SecurityServices />
          <div className="divider" />
          <SecurityProcess />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <SecurityPricing />
          <div className="divider" />
          <SecurityFaq />
          <div className="divider" />
          <SecurityCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
