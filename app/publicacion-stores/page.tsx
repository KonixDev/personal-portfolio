import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { StoreHero } from "./components/hero";
import { BothStores } from "./components/both-stores";
import { WhatWeDo } from "./components/what-we-do";
import { StoreRequirements } from "./components/requirements";
import { WhatYouGet } from "./components/what-you-get";
import { StoreProcess } from "./components/process";
import { StorePricing } from "./components/pricing";
import { StoreFaq } from "./components/faq";
import { StoreCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Publicación en Stores — Play Store y App Store",
  description:
    "Subimos tu app a Google Play Store y Apple App Store. Nos encargamos de todo: assets, screenshots, descripción, compliance y proceso de aprobación.",
  openGraph: {
    title: "Publicación en Play Store y App Store | Martín Coll",
    description:
      "Tu app publicada y lista para descargar. Nos encargamos de todo el proceso.",
  },
};

export default function PublicacionStoresPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <StoreHero />
          <div className="divider" />
          <BothStores />
          <div className="divider" />
          <WhatWeDo />
          <div className="divider" />
          <StoreRequirements />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <StoreProcess />
          <div className="divider" />
          <StorePricing />
          <div className="divider" />
          <StoreFaq />
          <div className="divider" />
          <StoreCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
