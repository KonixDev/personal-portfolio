import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
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

const faqItems = [
  {
    q: "¿Cuánto tarda en verse resultados de SEO?",
    a: "Las mejoras técnicas (velocidad, meta tags, structured data) se reflejan en semanas. El posicionamiento por keywords puede tardar 2–6 meses dependiendo de la competencia. Te damos métricas claras desde el día uno para que veas el progreso.",
  },
  {
    q: "¿Qué es GEO y por qué me importa?",
    a: "GEO (Generative Engine Optimization) es la optimización para que tu negocio aparezca cuando la gente usa ChatGPT, Gemini, Perplexity u otros asistentes de IA para buscar servicios. También incluye búsquedas locales tipo 'cerca de mí'. Es el futuro del posicionamiento y ya está pasando.",
  },
  {
    q: "¿Necesito tener un blog para hacer SEO?",
    a: "No necesariamente. El SEO técnico y la optimización de tus páginas existentes pueden dar resultados enormes sin un blog. Si tu industria tiene volumen de búsqueda informacional, un blog ayuda, pero no es obligatorio. Te asesoramos según tu caso.",
  },
  {
    q: "¿Puedo hacer SEO si mi sitio fue hecho por otra persona?",
    a: "Sí. Podemos optimizar cualquier sitio existente. Si el sitio tiene limitaciones técnicas serias (ej: hecho en Wix sin acceso a código), te lo indicamos y buscamos la mejor solución dentro de lo posible.",
  },
  {
    q: "¿Cómo miden los resultados?",
    a: "Con datos reales: Google Search Console (posiciones, clics, impresiones), Google Analytics (tráfico, comportamiento), Lighthouse (performance), y herramientas de rank tracking. Te entregamos un reporte mensual con todo.",
  },
  {
    q: "¿Hacen link building?",
    a: "Sí, pero de forma orgánica y ética. Nada de compra de links ni técnicas que Google penalice. Trabajamos con directorios relevantes, menciones en medios, guest posting y estrategias de contenido que generan links naturalmente.",
  },
];

export default function SeoGeoPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="SEO & GEO — Que te encuentren los que te buscan"
            description="Optimización SEO técnico y local (GEO). Posicionamiento en Google, Core Web Vitals, structured data, Google Business Profile y estrategia de contenido."
            url={`${baseUrl}/seo-geo`}
          />
          <FaqJsonLd items={faqItems} />
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
