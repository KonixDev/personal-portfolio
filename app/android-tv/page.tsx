import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { TvHero } from "./components/hero";
import { TvUseCases } from "./components/use-cases";
import { TvFeatures } from "./components/features";
import { WhatYouGet } from "./components/what-you-get";
import { TvStack } from "./components/tech-stack";
import { TvProcess } from "./components/process";
import { TvPricing } from "./components/pricing";
import { TvFaq } from "./components/faq";
import { TvCta } from "./components/cta";
import { RelatedServices } from "../components/related-services";

export const metadata: Metadata = {
  title: "Android TV — Apps de streaming, canales y entretenimiento",
  description:
    "Desarrollo de apps para Android TV: streaming, canales en vivo, catálogos de contenido, suscripciones. Leanback UI, control remoto, Chromecast.",
  openGraph: {
    title: "Android TV — Streaming y entretenimiento | Martín Coll",
    description:
      "Apps para Android TV: streaming, canales en vivo, entretenimiento. De la idea a la pantalla grande.",
  },
};

const faqItems = [
  {
    q: "¿En qué dispositivos funciona?",
    a: "En cualquier Smart TV con Android TV o Google TV: Sony, TCL, Xiaomi, Nvidia Shield, Chromecast con Google TV, y más. También en TV boxes genéricos con Android.",
  },
  {
    q: "¿Necesito una app mobile además de la de TV?",
    a: "Depende del proyecto. Para una plataforma de streaming completa, sí recomendamos una app companion mobile que sirva como control remoto, buscador y segundo pantalla. Para un canal simple de TV en vivo, no es necesario.",
  },
  {
    q: "¿Cómo funciona el streaming en vivo?",
    a: "Usamos protocolos HLS o DASH que se adaptan a la velocidad de internet del usuario. Podés transmitir desde un encoder (OBS, vMix) o desde tu infraestructura actual. Configuramos todo para que la latencia sea mínima.",
  },
  {
    q: "¿Puedo monetizar con suscripciones?",
    a: "Sí. Integramos Google Play Billing para suscripciones mensuales, anuales, o compras únicas. También podemos implementar modelos freemium (gratis con ads + premium sin ads).",
  },
  {
    q: "¿Cuánto tarda en desarrollarse?",
    a: "Un canal simple o app de contenido: 6–8 semanas. Una plataforma de streaming completa con app companion: 10–14 semanas. Proyectos custom varían según la complejidad.",
  },
  {
    q: "¿También publican en Fire TV (Amazon)?",
    a: "Fire TV usa Android como base, así que en la mayoría de los casos la misma app funciona en ambas plataformas con ajustes menores. Lo incluimos si lo necesitás.",
  },
];

const relatedItems = [
  { label: "Apps Mobile", href: "/apps-mobile", desc: "iOS, Android y Android TV. Nativas o cross-platform." },
  { label: "Publicación en Stores", href: "/publicacion-stores", desc: "Tu app en Play Store y App Store." },
  { label: "Sistemas Backend", href: "/sistemas-backend", desc: "APIs, bases de datos, colas de trabajo e integraciones." },
];

export default function AndroidTvPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Android TV — Apps de streaming, canales y entretenimiento"
            description="Desarrollo de apps para Android TV: streaming, canales en vivo, catálogos de contenido, suscripciones. Leanback UI, control remoto, Chromecast."
            url={`${baseUrl}/android-tv`}
          />
          <FaqJsonLd items={faqItems} />
          <Header />
          <TvHero />
          <div className="divider" />
          <TvUseCases />
          <div className="divider" />
          <TvFeatures />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <TvStack />
          <div className="divider" />
          <TvProcess />
          <div className="divider" />
          <TvPricing />
          <div className="divider" />
          <TvFaq />
          <div className="divider" />
          <RelatedServices items={relatedItems} />
          <div className="divider" />
          <TvCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
