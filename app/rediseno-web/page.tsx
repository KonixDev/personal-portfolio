import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { RedesignHero } from "./components/hero";
import { RedFlags } from "./components/red-flags";
import { WhatWeImprove } from "./components/what-we-improve";
import { RedesignExamples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { RedesignProcess } from "./components/process";
import { RedesignPricing } from "./components/pricing";
import { RedesignFaq } from "./components/faq";
import { RedesignCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Rediseño Web — Transformá tu sitio en una máquina de conversión",
  description:
    "Rediseño web profesional: mejoramos diseño, velocidad, SEO y conversión. Tu sitio actual, transformado. Sin empezar de cero si no hace falta.",
  openGraph: {
    title: "Rediseño Web — Transformá tu sitio | Martín Coll",
    description:
      "Rediseño web: mejor diseño, más velocidad, mejor SEO, más conversión. Transformamos lo que ya tenés.",
  },
};

export default function RedesignPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <RedesignHero />
          <div className="divider" />
          <RedFlags />
          <div className="divider" />
          <WhatWeImprove />
          <div className="divider" />
          <RedesignExamples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <RedesignProcess />
          <div className="divider" />
          <RedesignPricing />
          <div className="divider" />
          <RedesignFaq />
          <div className="divider" />
          <RedesignCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
