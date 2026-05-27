import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { ErpHero } from "./components/hero";
import { ErpModules } from "./components/modules";
import { ErpExamples } from "./components/examples";
import { ErpImpact } from "./components/impact";
import { WhatYouGet } from "./components/what-you-get";
import { ErpProcess } from "./components/process";
import { ErpPricing } from "./components/pricing";
import { ErpFaq } from "./components/faq";
import { ErpCta } from "./components/cta";
import { RelatedServices } from "../components/related-services";

export const metadata: Metadata = {
  title: "ERP & Dashboards — Paneles de gestión a medida",
  description:
    "Sistemas de gestión interna a medida: inventario, facturación, reportes, métricas en tiempo real, CRM. Todo en un solo panel diseñado para tu negocio.",
  openGraph: {
    title: "ERP & Dashboards — Gestión a medida | Martín Coll",
    description:
      "Paneles de gestión, ERPs y dashboards a medida. Tu negocio, en un solo lugar.",
    images: [{ url: "/og/erp-dashboards.png", width: 1200, height: 630, alt: "ERP & Dashboards — Gestión a medida | Martín Coll" }],
  },
};

const faqItems = [
  {
    q: "¿Por qué un ERP a medida en vez de usar uno genérico?",
    a: "Los ERPs genéricos (SAP, Odoo, etc.) te obligan a adaptar tu negocio al software. Un sistema a medida se adapta a tu operación exacta — sin módulos que no usás, sin workarounds, sin licencias mensuales crecientes. Y es tuyo para siempre.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Un dashboard de métricas puede estar en 2–4 semanas. Un ERP con 3–5 módulos tarda entre 6 y 12 semanas. Entregamos módulo por módulo, así que podés empezar a usar el sistema antes de que esté 100% terminado.",
  },
  {
    q: "¿Pueden migrar mis datos desde planillas de Excel?",
    a: "Sí. Importamos datos desde Excel, CSV, bases de datos anteriores o cualquier formato que tengas. Limpiamos, validamos y cargamos todo en el nuevo sistema.",
  },
  {
    q: "¿Funciona con facturación electrónica AFIP/ARCA?",
    a: "Sí. Integramos con los web services de AFIP/ARCA para generar facturas electrónicas (A, B, C), notas de crédito y débito con CAE automático.",
  },
  {
    q: "¿Mi equipo va a poder usarlo sin ser técnico?",
    a: "Sí. Diseñamos interfaces simples pensadas para usuarios no técnicos. Incluimos una sesión de capacitación y documentación de uso con capturas de pantalla paso a paso.",
  },
  {
    q: "¿Puedo agregar módulos nuevos en el futuro?",
    a: "Sí. El sistema se diseña modular desde el inicio. Podés arrancar con ventas e inventario, y después agregar CRM, finanzas o lo que necesites sin reescribir nada.",
  },
];

const relatedItems = [
  { label: "Desarrollo Web", href: "/desarrollo-web", desc: "Landing pages, plataformas SaaS, ERPs y dashboards." },
  { label: "Bases de Datos", href: "/bases-de-datos", desc: "Diseño, optimización y migración de bases de datos." },
  { label: "Sistemas Backend", href: "/sistemas-backend", desc: "APIs, bases de datos, colas de trabajo e integraciones." },
];

export default function ErpDashboardsPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="ERP & Dashboards — Paneles de gestión a medida"
            description="Sistemas de gestión interna a medida: inventario, facturación, reportes, métricas en tiempo real, CRM. Todo en un solo panel diseñado para tu negocio."
            url={`${baseUrl}/erp-dashboards`}
          />
          <FaqJsonLd items={faqItems} />
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
          <RelatedServices items={relatedItems} />
          <div className="divider" />
          <ErpCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
