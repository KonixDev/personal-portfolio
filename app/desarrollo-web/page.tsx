import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { WebHero } from "./components/hero";
import { WebTypes } from "./components/web-types";
import { WebExamples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { WebStack } from "./components/tech-stack";
import { WebProcess } from "./components/process";
import { WebPricing } from "./components/pricing";
import { WebFaq } from "./components/faq";
import { WebCta } from "./components/cta";
import { RelatedServices } from "../components/related-services";

export const metadata: Metadata = {
  title: "Desarrollo Web — Sitios, plataformas y sistemas a medida",
  description:
    "Desarrollo web profesional: landing pages, plataformas SaaS, ERPs, dashboards, e-commerce. Next.js, React, Node.js. Precio fijo, código tuyo.",
  openGraph: {
    title: "Desarrollo Web — Sitios, plataformas y sistemas | Martín Coll",
    description:
      "Sitios web, plataformas SaaS, ERPs y dashboards. De la idea al lanzamiento en semanas. Precio fijo, código tuyo.",
    images: [{ url: "/og/desarrollo-web.png", width: 1200, height: 630, alt: "Desarrollo Web — Sitios, plataformas y sistemas | Martín Coll" }],
  },
};

const faqItems = [
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Una landing page puede estar en 1–2 semanas. Una plataforma completa con usuarios, pagos y panel admin tarda entre 4 y 8 semanas. Todo depende del alcance, que definimos juntos en la primera llamada.",
  },
  {
    q: "¿Puedo actualizar el contenido yo mismo?",
    a: "Sí. Si tu proyecto lo requiere, incluimos un panel de administración donde podés editar textos, imágenes, productos o lo que necesites sin tocar código.",
  },
  {
    q: "¿Queda optimizado para Google?",
    a: "Sí. Todos los proyectos incluyen SEO técnico: meta tags, structured data, sitemap, robots.txt, y optimización de Core Web Vitals. Tu sitio va a cargar rápido y aparecer bien en buscadores.",
  },
  {
    q: "¿Funciona bien en celulares?",
    a: "Sí. Diseñamos mobile-first. Tu sitio va a funcionar perfecto en celulares, tablets y desktop. No es una versión recortada — es un diseño pensado para cada pantalla.",
  },
  {
    q: "¿Puedo conectarlo con otras herramientas?",
    a: "Sí. Integramos con MercadoPago, Stripe, WhatsApp, Google Analytics, email marketing (Mailchimp, Resend), CRMs, y cualquier servicio que tenga una API. Si tu herramienta tiene integración, la conectamos.",
  },
  {
    q: "¿Qué pasa si necesito cambios después de la entrega?",
    a: "Errores en los primeros 30 días se corrigen sin costo. Para mejoras o funcionalidades nuevas, ofrecemos mantenimiento mensual sin contrato. También podés contratar a cualquier desarrollador — el código es tuyo.",
  },
];

const relatedItems = [
  { label: "Sistemas Backend", href: "/sistemas-backend", desc: "APIs, bases de datos, colas de trabajo e integraciones." },
  { label: "SEO & GEO", href: "/seo-geo", desc: "Posicionamiento en Google y búsquedas de IA." },
  { label: "Rediseño Web", href: "/rediseno-web", desc: "Tu sitio actual, transformado. Mejor diseño y velocidad." },
];

export default function DesarrolloWebPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Desarrollo Web — Sitios, plataformas y sistemas a medida"
            description="Desarrollo web profesional: landing pages, plataformas SaaS, ERPs, dashboards, e-commerce. Next.js, React, Node.js. Precio fijo, código tuyo."
            url={`${baseUrl}/desarrollo-web`}
          />
          <FaqJsonLd items={faqItems} />
          <Header />
          <WebHero />
          <div className="divider" />
          <WebTypes />
          <div className="divider" />
          <WebExamples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <WebStack />
          <div className="divider" />
          <WebProcess />
          <div className="divider" />
          <WebPricing />
          <div className="divider" />
          <WebFaq />
          <div className="divider" />
          <RelatedServices items={relatedItems} />
          <div className="divider" />
          <WebCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
