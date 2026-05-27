import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { MobileHero } from "./components/hero";
import { Platforms } from "./components/platforms";
import { Examples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { TechStack } from "./components/tech-stack";
import { MobileProcess } from "./components/process";
import { MobilePricing } from "./components/pricing";
import { MobileFaq } from "./components/faq";
import { MobileCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Apps Mobile — iOS, Android & Android TV",
  description:
    "Desarrollo de apps mobile nativas y cross-platform. iOS, Android, Android TV. React Native, Kotlin, Swift. Publicación en Play Store y App Store incluida.",
  openGraph: {
    title: "Apps Mobile — iOS, Android & Android TV | Martín Coll",
    description:
      "Apps mobile nativas y cross-platform. De la idea a la tienda en semanas. Precio fijo, código tuyo.",
  },
};

export default function AppsMobilePage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <MobileHero />
          <div className="divider" />
          <Platforms />
          <div className="divider" />
          <Examples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <TechStack />
          <div className="divider" />
          <MobileProcess />
          <div className="divider" />
          <MobilePricing />
          <div className="divider" />
          <MobileFaq />
          <div className="divider" />
          <MobileCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
