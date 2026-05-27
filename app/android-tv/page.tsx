import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { TvHero } from "./components/hero";
import { TvUseCases } from "./components/use-cases";
import { TvFeatures } from "./components/features";
import { WhatYouGet } from "./components/what-you-get";
import { TvStack } from "./components/tech-stack";
import { TvProcess } from "./components/process";
import { TvPricing } from "./components/pricing";
import { TvFaq } from "./components/faq";
import { TvCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Android TV — Apps de streaming, canales y entretenimiento",
  description:
    "Desarrollo de apps para Android TV: streaming, canales en vivo, catálogos de contenido, suscripciones. Leanback UI, control remoto, Chromecast.",
  openGraph: {
    title: "Android TV — Streaming y entretenimiento | Martín Coll",
    description:
      "Apps para Android TV: streaming, canales en vivo, entretenimiento. De la idea a la pantalla grande.",
  },
};

export default function AndroidTvPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <TvHero />
          <div className="divider" />
          <TvUseCases />
          <div className="divider" />
          <TvFeatures />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <TvStack />
          <div className="divider" />
          <TvProcess />
          <div className="divider" />
          <TvPricing />
          <div className="divider" />
          <TvFaq />
          <div className="divider" />
          <TvCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
