import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
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

const faqItems = [
  {
    q: "¿Qué motor de base de datos me recomiendan?",
    a: "PostgreSQL para la mayoría de los casos — es el más versátil, robusto y tiene las mejores features para SaaS y multi-tenant. Si ya usás MySQL o MongoDB y funciona, no te vamos a forzar a migrar. Elegimos la herramienta que mejor resuelve tu problema, no la que está de moda.",
  },
  {
    q: "¿Pueden optimizar mi base sin cambiar el código de mi aplicación?",
    a: "En muchos casos sí. Los índices, la configuración del motor, el connection pooling y el cache se pueden mejorar sin tocar el código. Si hay queries que necesitan reescribirse, te lo indicamos en el reporte y coordinamos con tu equipo.",
  },
  {
    q: "¿Cuánto puede mejorar la performance?",
    a: "Bases de datos sin índices optimizados suelen mejorar entre 10x y 100x en queries específicas. El impacto real depende de tu caso — te damos números concretos en el diagnóstico antes de comprometernos con nada.",
  },
  {
    q: "¿La migración tiene riesgo de perder datos?",
    a: "No si se hace bien. Nuestro proceso incluye: migración a un entorno de prueba primero, verificación de integridad registro por registro, plan de rollback, y cutover con zero downtime. Si algo no cuadra, revertimos.",
  },
  {
    q: "¿Incluyen backups?",
    a: "Sí. Configuramos backups automáticos diarios con retención configurable, verificación periódica de que los backups son restaurables, y point-in-time recovery si tu motor lo soporta.",
  },
  {
    q: "¿Pueden trabajar con mi DBA o equipo interno?",
    a: "Sí. Podemos hacer el trabajo completo o funcionar como consultores que analizan, recomiendan y tu equipo implementa. Nos adaptamos a tu forma de trabajar.",
  },
];

export default function BaseDeDatosPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Bases de Datos — Diseño, optimización y migración"
            description="Diseño de esquemas, optimización de queries, migración entre motores, configuración de réplicas y backups. PostgreSQL, MySQL, MongoDB, Redis."
            url={`${baseUrl}/bases-de-datos`}
          />
          <FaqJsonLd items={faqItems} />
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
