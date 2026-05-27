import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { RedesignHero } from "./components/hero";
import { RedFlags } from "./components/red-flags";
import { WhatWeImprove } from "./components/what-we-improve";
import { RedesignExamples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { RedesignProcess } from "./components/process";
import { RedesignPricing } from "./components/pricing";
import { RedesignFaq } from "./components/faq";
import { RedesignCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Rediseño Web — Transformá tu sitio en una máquina de conversión",
  description:
    "Rediseño web profesional: mejoramos diseño, velocidad, SEO y conversión. Tu sitio actual, transformado. Sin empezar de cero si no hace falta.",
  openGraph: {
    title: "Rediseño Web — Transformá tu sitio | Martín Coll",
    description:
      "Rediseño web: mejor diseño, más velocidad, mejor SEO, más conversión. Transformamos lo que ya tenés.",
  },
};

const faqItems = [
  {
    q: "¿Pierdo el posicionamiento en Google si rediseño?",
    a: "No. Configuramos redirecciones 301 de cada URL vieja a la nueva, mantenemos la estructura de meta tags y mejoramos el SEO técnico. En la mayoría de los casos, el posicionamiento mejora después del rediseño porque el sitio carga más rápido y está mejor estructurado.",
  },
  {
    q: "¿Mi sitio actual sigue funcionando durante el rediseño?",
    a: "Sí. Construimos el nuevo sitio en un entorno separado. Tu sitio actual sigue online sin interrupciones hasta que el nuevo esté listo y aprobado por vos. El switch se hace en minutos.",
  },
  {
    q: "¿Puedo mantener mi dominio actual?",
    a: "Sí, siempre. El rediseño se publica en tu mismo dominio. Solo cambiamos a dónde apunta — el proceso es transparente para tus usuarios.",
  },
  {
    q: "¿Cuánto tarda un rediseño?",
    a: "Un refresh visual puede estar en 1–3 semanas. Un rediseño completo con nueva estructura, migración de contenido y SEO tarda 3–6 semanas. Migraciones de plataforma varían según la complejidad.",
  },
  {
    q: "¿Qué pasa con mi contenido actual?",
    a: "Lo migramos todo: textos, imágenes, productos, artículos de blog. Si el contenido necesita mejoras, te lo señalamos. No se pierde nada.",
  },
  {
    q: "¿Puedo editar el nuevo sitio yo mismo?",
    a: "Sí. Incluimos un panel de administración donde podés editar textos, imágenes y contenido sin tocar código. Te enseñamos a usarlo en una sesión de 30 minutos.",
  },
];

export default function RedesignPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Rediseño Web — Transformá tu sitio en una máquina de conversión"
            description="Rediseño web profesional: mejoramos diseño, velocidad, SEO y conversión. Tu sitio actual, transformado. Sin empezar de cero si no hace falta."
            url={`${baseUrl}/rediseno-web`}
          />
          <FaqJsonLd items={faqItems} />
          <Header />
          <RedesignHero />
          <div className="divider" />
          <RedFlags />
          <div className="divider" />
          <WhatWeImprove />
          <div className="divider" />
          <RedesignExamples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <RedesignProcess />
          <div className="divider" />
          <RedesignPricing />
          <div className="divider" />
          <RedesignFaq />
          <div className="divider" />
          <RedesignCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
