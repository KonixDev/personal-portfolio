import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { MobileHero } from "./components/hero";
import { Platforms } from "./components/platforms";
import { Examples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { TechStack } from "./components/tech-stack";
import { MobileProcess } from "./components/process";
import { MobilePricing } from "./components/pricing";
import { MobileFaq } from "./components/faq";
import { MobileCta } from "./components/cta";
import { RelatedServices } from "../components/related-services";

export const metadata: Metadata = {
  title: "Apps Mobile — iOS, Android & Android TV",
  description:
    "Desarrollo de apps mobile nativas y cross-platform. iOS, Android, Android TV. React Native, Kotlin, Swift. Publicación en Play Store y App Store incluida.",
  openGraph: {
    title: "Apps Mobile — iOS, Android & Android TV | Martín Coll",
    description:
      "Apps mobile nativas y cross-platform. De la idea a la tienda en semanas. Precio fijo, código tuyo.",
    images: [{ url: "/og/apps-mobile.png", width: 1200, height: 630, alt: "Apps Mobile — iOS, Android & Android TV | Martín Coll" }],
  },
};

const faqItems = [
  {
    q: "¿Nativo o cross-platform? ¿Cuál me conviene?",
    a: "Si necesitás estar en iOS y Android con un presupuesto acotado, cross-platform (React Native) es la mejor opción — una base de código, dos plataformas. Si tu app requiere máximo rendimiento, acceso profundo al hardware (cámara, sensores, Bluetooth), o es un juego, nativo (Kotlin/Swift) es el camino. Te asesoramos en la primera llamada.",
  },
  {
    q: "¿Cuánto tarda en aprobarse una app en las tiendas?",
    a: "Google Play suele aprobar en 1–3 días. App Store tarda entre 1–7 días y es más estricta con las guidelines. Nosotros nos encargamos de cumplir todos los requisitos de ambas tiendas para evitar rechazos.",
  },
  {
    q: "¿Necesito una cuenta de desarrollador?",
    a: "Sí, pero si no la tenés, te ayudamos a crearla. Google Play cobra $25 USD (pago único) y Apple cobra $99 USD/año. La app se publica bajo tu nombre y tu cuenta.",
  },
  {
    q: "¿Puedo actualizar la app después sin depender de ustedes?",
    a: "Sí. El código es tuyo, la cuenta de la tienda es tuya. Te entregamos documentación para que cualquier desarrollador pueda continuar. Si querés que sigamos nosotros, ofrecemos mantenimiento mensual.",
  },
  {
    q: "¿Incluyen el diseño de la app?",
    a: "Sí. Diseñamos todas las pantallas, la navegación, los íconos y los assets para las tiendas. No necesitás traer un diseñador aparte.",
  },
  {
    q: "¿Hacen apps para Android TV?",
    a: "Sí. Desarrollamos apps de streaming, canales de TV en vivo, y entretenimiento para Android TV. Con soporte para control remoto, Leanback UI, y Chromecast.",
  },
];

const relatedItems = [
  { label: "Android TV", href: "/android-tv", desc: "Apps de streaming, canales en vivo y entretenimiento." },
  { label: "Publicación en Stores", href: "/publicacion-stores", desc: "Tu app en Play Store y App Store." },
  { label: "Desarrollo Web", href: "/desarrollo-web", desc: "Landing pages, plataformas SaaS, ERPs y dashboards." },
];

export default function AppsMobilePage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Apps Mobile — iOS, Android & Android TV"
            description="Desarrollo de apps mobile nativas y cross-platform. iOS, Android, Android TV. React Native, Kotlin, Swift. Publicación en Play Store y App Store incluida."
            url={`${baseUrl}/apps-mobile`}
          />
          <FaqJsonLd items={faqItems} />
          <Header />
          <MobileHero />
          <div className="divider" />
          <Platforms />
          <div className="divider" />
          <Examples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <TechStack />
          <div className="divider" />
          <MobileProcess />
          <div className="divider" />
          <MobilePricing />
          <div className="divider" />
          <MobileFaq />
          <div className="divider" />
          <RelatedServices items={relatedItems} />
          <div className="divider" />
          <MobileCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
