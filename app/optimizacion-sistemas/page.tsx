import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { OptHero } from "./components/hero";
import { Symptoms } from "./components/symptoms";
import { WhatWeOptimize } from "./components/what-we-optimize";
import { Results } from "./components/results";
import { WhatYouGet } from "./components/what-you-get";
import { OptProcess } from "./components/process";
import { OptPricing } from "./components/pricing";
import { OptFaq } from "./components/faq";
import { OptCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Optimización de Sistemas — Más rápido, más estable, más barato",
  description:
    "Optimización de sistemas existentes: performance, bases de datos, infraestructura, costos de servidor. Tu sistema actual, funcionando como debería.",
  openGraph: {
    title: "Optimización de Sistemas | Martín Coll",
    description:
      "Tu sistema actual, funcionando como debería. Velocidad, estabilidad y costos optimizados.",
  },
};

export default function OptimizacionPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <OptHero />
          <div className="divider" />
          <Symptoms />
          <div className="divider" />
          <WhatWeOptimize />
          <div className="divider" />
          <Results />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <OptProcess />
          <div className="divider" />
          <OptPricing />
          <div className="divider" />
          <OptFaq />
          <div className="divider" />
          <OptCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
