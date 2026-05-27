import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { DbHero } from "./components/hero";
import { DbWhen } from "./components/when";
import { DbServices } from "./components/services";
import { DbEngines } from "./components/engines";
import { WhatYouGet } from "./components/what-you-get";
import { DbProcess } from "./components/process";
import { DbPricing } from "./components/pricing";
import { DbFaq } from "./components/faq";
import { DbCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Bases de Datos — Diseño, optimización y migración",
  description:
    "Diseño de esquemas, optimización de queries, migración entre motores, configuración de réplicas y backups. PostgreSQL, MySQL, MongoDB, Redis.",
  openGraph: {
    title: "Bases de Datos — Diseño, optimización y migración | Martín Coll",
    description:
      "Tu base de datos, diseñada para escalar. Esquemas, queries, índices, migraciones y backups.",
  },
};

export default function BaseDeDatosPage() {
  return (
    <FooterReveal
      main={
        <>
          <Header />
          <DbHero />
          <div className="divider" />
          <DbWhen />
          <div className="divider" />
          <DbServices />
          <div className="divider" />
          <DbEngines />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <DbProcess />
          <div className="divider" />
          <DbPricing />
          <div className="divider" />
          <DbFaq />
          <div className="divider" />
          <DbCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
