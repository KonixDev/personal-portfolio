import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ErpHero } from "./components/hero";
import { ErpModules } from "./components/modules";
import { ErpExamples } from "./components/examples";
import { ErpImpact } from "./components/impact";
import { WhatYouGet } from "./components/what-you-get";
import { ErpProcess } from "./components/process";
import { ErpPricing } from "./components/pricing";
import { ErpFaq } from "./components/faq";
import { ErpCta } from "./components/cta";

export const metadata: Metadata = {
  title: "ERP & Dashboards — Paneles de gestión a medida",
  description:
    "Sistemas de gestión interna a medida: inventario, facturación, reportes, métricas en tiempo real, CRM. Todo en un solo panel diseñado para tu negocio.",
  openGraph: {
    title: "ERP & Dashboards — Gestión a medida | Martín Coll",
    description:
      "Paneles de gestión, ERPs y dashboards a medida. Tu negocio, en un solo lugar.",
  },
};

export default function ErpDashboardsPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <ErpHero />
          <div className="divider" />
          <ErpModules />
          <div className="divider" />
          <ErpExamples />
          <div className="divider" />
          <ErpImpact />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <ErpProcess />
          <div className="divider" />
          <ErpPricing />
          <div className="divider" />
          <ErpFaq />
          <div className="divider" />
          <ErpCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
