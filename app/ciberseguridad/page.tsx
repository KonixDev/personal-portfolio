import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { SecurityHero } from "./components/hero";
import { ThreatStats } from "./components/threat-stats";
import { SecurityServices } from "./components/services";
import { SecurityProcess } from "./components/process";
import { WhatYouGet } from "./components/what-you-get";
import { SecurityPricing } from "./components/pricing";
import { SecurityFaq } from "./components/faq";
import { SecurityCta } from "./components/cta";
import { RelatedServices } from "../components/related-services";

export const metadata: Metadata = {
  title: "Ciberseguridad — Auditorías, pentesting y protección",
  description:
    "Análisis de seguridad, pentesting, auditorías OWASP, protección de infraestructura y hardening de sistemas. Encontramos las vulnerabilidades antes que los atacantes.",
  openGraph: {
    title: "Ciberseguridad — Auditorías y pentesting | Martín Coll",
    description:
      "Auditorías de seguridad, pentesting y hardening. Protegé tu sistema antes de que sea tarde.",
    images: [{ url: "/og/ciberseguridad.png", width: 1200, height: 630, alt: "Ciberseguridad — Auditorías y pentesting | Martín Coll" }],
  },
};

const faqItems = [
  {
    q: "¿Necesito una auditoría si mi sistema es pequeño?",
    a: "Sí. El 43% de los ciberataques apuntan a PyMEs precisamente porque asumen que nadie las va a atacar. Un security scan básico puede revelarte problemas críticos en horas.",
  },
  {
    q: "¿Van a romper algo durante el pentesting?",
    a: "No. Trabajamos en ambientes controlados y coordinamos todo con vos antes de ejecutar pruebas. Si hay riesgo de afectar un servicio en producción, lo hacemos en un entorno de prueba o en horarios de bajo tráfico.",
  },
  {
    q: "¿Qué recibo al final?",
    a: "Dos documentos: un reporte ejecutivo (sin jerga, para que cualquier persona entienda los riesgos) y un reporte técnico detallado (con evidencia, reproducción paso a paso, severidad CVSS y remediación específica para cada hallazgo).",
  },
  {
    q: "¿Pueden corregir las vulnerabilidades que encuentren?",
    a: "Sí. Podemos encargarnos de la remediación o entregarte el reporte para que tu equipo lo haga internamente. En ambos casos, hacemos un re-test gratuito para verificar que todo quedó cerrado.",
  },
  {
    q: "¿Firman acuerdo de confidencialidad?",
    a: "Sí, siempre. Firmamos NDA antes de empezar cualquier trabajo. Todo lo que encontramos queda estrictamente entre nosotros.",
  },
  {
    q: "¿Sirve para cumplir con normativas?",
    a: "Sí. Nuestros reportes están alineados con OWASP, y te ayudamos a cumplir con requisitos de ISO 27001, PCI-DSS o la normativa que aplique a tu industria.",
  },
];

const relatedItems = [
  { label: "Optimización de Sistemas", href: "/optimizacion-sistemas", desc: "Más rápido, más estable, más barato." },
  { label: "Sistemas Backend", href: "/sistemas-backend", desc: "APIs, bases de datos, colas de trabajo e integraciones." },
  { label: "Bases de Datos", href: "/bases-de-datos", desc: "Diseño, optimización y migración de bases de datos." },
];

export default function CiberseguridadPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Ciberseguridad — Auditorías, pentesting y protección"
            description="Análisis de seguridad, pentesting, auditorías OWASP, protección de infraestructura y hardening de sistemas. Encontramos las vulnerabilidades antes que los atacantes."
            url={`${baseUrl}/ciberseguridad`}
          />
          <FaqJsonLd items={faqItems} />
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
          <RelatedServices items={relatedItems} />
          <div className="divider" />
          <SecurityCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
