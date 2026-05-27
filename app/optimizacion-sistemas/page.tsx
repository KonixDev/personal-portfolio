import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { OptHero } from "./components/hero";
import { Symptoms } from "./components/symptoms";
import { WhatWeOptimize } from "./components/what-we-optimize";
import { Results } from "./components/results";
import { WhatYouGet } from "./components/what-you-get";
import { OptProcess } from "./components/process";
import { OptPricing } from "./components/pricing";
import { OptFaq } from "./components/faq";
import { OptCta } from "./components/cta";
import { RelatedServices } from "../components/related-services";

export const metadata: Metadata = {
  title: "Optimización de Sistemas — Más rápido, más estable, más barato",
  description:
    "Optimización de sistemas existentes: performance, bases de datos, infraestructura, costos de servidor. Tu sistema actual, funcionando como debería.",
  openGraph: {
    title: "Optimización de Sistemas | Martín Coll",
    description:
      "Tu sistema actual, funcionando como debería. Velocidad, estabilidad y costos optimizados.",
  },
};

const faqItems = [
  {
    q: "¿Necesitan acceso a mi código y servidores?",
    a: "Sí, necesitamos acceso de lectura al código y a las métricas de infraestructura para hacer el diagnóstico. Todo bajo NDA. Para la implementación necesitamos acceso de escritura, que podemos hacer por PR reviews si preferís controlar cada cambio.",
  },
  {
    q: "¿Pueden optimizar sin reescribir todo?",
    a: "Sí, esa es la idea. No tiramos tu sistema y empezamos de cero. Identificamos los cuellos de botella específicos y los solucionamos quirúrgicamente. La mayoría de las mejoras más grandes vienen de indexar bien la base de datos y agregar cache — no de reescribir.",
  },
  {
    q: "¿Cuánta mejora puedo esperar?",
    a: "Depende de qué tan mal esté. Sistemas con queries sin índices suelen mejorar 10-50x en tiempo de respuesta. Costos de infraestructura se reducen 40-70% en promedio. Te damos números reales en el diagnóstico antes de comprometernos.",
  },
  {
    q: "¿Qué pasa si la optimización no mejora nada?",
    a: "El diagnóstico siempre entrega valor — sabés exactamente dónde están los problemas. Si las optimizaciones propuestas no logran mejoras medibles, no te cobramos la implementación. Medimos todo con antes y después.",
  },
  {
    q: "¿Trabajan con cualquier stack tecnológico?",
    a: "Trabajamos principalmente con Node.js, Python, PostgreSQL, MySQL, Redis y servicios cloud (AWS, GCP, Railway, Vercel). Si tu stack es diferente, evaluamos caso por caso en la primera llamada.",
  },
  {
    q: "¿Pueden ayudar con costos de AWS/GCP que se fueron de las manos?",
    a: "Sí. Revisamos cada servicio, identificamos recursos sobredimensionados, instancias que deberían ser spot/reserved, almacenamiento sin usar y tráfico que se puede cachear. Típicamente reducimos entre 40-70% sin perder performance.",
  },
];

const relatedItems = [
  { label: "Ciberseguridad", href: "/ciberseguridad", desc: "Auditorías, pentesting y protección de infraestructura." },
  { label: "Bases de Datos", href: "/bases-de-datos", desc: "Diseño, optimización y migración de bases de datos." },
  { label: "Sistemas Backend", href: "/sistemas-backend", desc: "APIs, bases de datos, colas de trabajo e integraciones." },
];

export default function OptimizacionPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Optimización de Sistemas — Más rápido, más estable, más barato"
            description="Optimización de sistemas existentes: performance, bases de datos, infraestructura, costos de servidor. Tu sistema actual, funcionando como debería."
            url={`${baseUrl}/optimizacion-sistemas`}
          />
          <FaqJsonLd items={faqItems} />
          <Header />
          <OptHero />
          <div className="divider" />
          <Symptoms />
          <div className="divider" />
          <WhatWeOptimize />
          <div className="divider" />
          <Results />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <OptProcess />
          <div className="divider" />
          <OptPricing />
          <div className="divider" />
          <OptFaq />
          <div className="divider" />
          <RelatedServices items={relatedItems} />
          <div className="divider" />
          <OptCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
