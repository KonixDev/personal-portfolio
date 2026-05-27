import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { SeoHero } from "./components/hero";
import { SeoVsGeo } from "./components/seo-vs-geo";
import { WhatWeOptimize } from "./components/what-we-optimize";
import { SeoResults } from "./components/results";
import { WhatYouGet } from "./components/what-you-get";
import { SeoProcess } from "./components/process";
import { SeoPricing } from "./components/pricing";
import { SeoFaq } from "./components/faq";
import { SeoCta } from "./components/cta";

export const metadata: Metadata = {
  title: "SEO & GEO — Que te encuentren los que te buscan",
  description:
    "Optimización SEO técnico y local (GEO). Posicionamiento en Google, Core Web Vitals, structured data, Google Business Profile y estrategia de contenido.",
  openGraph: {
    title: "SEO & GEO — Posicionamiento en buscadores | Martín Coll",
    description:
      "Que te encuentren los que te buscan. SEO técnico, local y de contenido.",
  },
};

export default function SeoGeoPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <SeoHero />
          <div className="divider" />
          <SeoVsGeo />
          <div className="divider" />
          <WhatWeOptimize />
          <div className="divider" />
          <SeoResults />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <SeoProcess />
          <div className="divider" />
          <SeoPricing />
          <div className="divider" />
          <SeoFaq />
          <div className="divider" />
          <SeoCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
