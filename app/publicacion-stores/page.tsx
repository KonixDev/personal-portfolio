import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { StoreHero } from "./components/hero";
import { BothStores } from "./components/both-stores";
import { WhatWeDo } from "./components/what-we-do";
import { StoreRequirements } from "./components/requirements";
import { WhatYouGet } from "./components/what-you-get";
import { StoreProcess } from "./components/process";
import { StorePricing } from "./components/pricing";
import { StoreFaq } from "./components/faq";
import { StoreCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Publicación en Stores — Play Store y App Store",
  description:
    "Subimos tu app a Google Play Store y Apple App Store. Nos encargamos de todo: assets, screenshots, descripción, compliance y proceso de aprobación.",
  openGraph: {
    title: "Publicación en Play Store y App Store | Martín Coll",
    description:
      "Tu app publicada y lista para descargar. Nos encargamos de todo el proceso.",
  },
};

const faqItems = [
  {
    q: "¿Necesito tener una cuenta de developer?",
    a: "Sí, pero si no la tenés, te ayudamos a crearla. Google Play cobra $25 USD (pago único) y Apple cobra $99 USD/año. La cuenta queda a tu nombre — nosotros solo la usamos para subir tu app.",
  },
  {
    q: "¿Cuánto tarda en aprobarse mi app?",
    a: "Google Play suele aprobar en 1–3 días. App Store puede tardar entre 1–7 días y es más estricta. Si hay un rechazo, lo resolvemos y reenviamos sin costo extra.",
  },
  {
    q: "¿Qué pasa si la tienda rechaza mi app?",
    a: "Analizamos el motivo del rechazo, hacemos los cambios necesarios y reenviamos. Esto está incluido en el servicio — no te cobramos extra por rechazos.",
  },
  {
    q: "¿Pueden publicar una app que no desarrollaron ustedes?",
    a: "Sí. Si ya tenés la app desarrollada, nos encargamos de todo el proceso de publicación: assets, ficha, compliance y envío. Solo necesitamos el código fuente o el build compilado.",
  },
  {
    q: "¿La publicación incluye actualizaciones futuras?",
    a: "El servicio cubre la primera publicación. Para actualizaciones futuras, te dejamos una guía de cómo hacerlo, o podés contratarnos para gestionar cada update.",
  },
  {
    q: "¿Qué es ASO y por qué importa?",
    a: "App Store Optimization es como el SEO pero para tiendas de apps. Optimizamos título, keywords, screenshots y descripción para que tu app aparezca cuando la gente busca lo que vos ofrecés. Más visibilidad = más descargas orgánicas.",
  },
];

export default function PublicacionStoresPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Publicación en Stores — Play Store y App Store"
            description="Subimos tu app a Google Play Store y Apple App Store. Nos encargamos de todo: assets, screenshots, descripción, compliance y proceso de aprobación."
            url={`${baseUrl}/publicacion-stores`}
          />
          <FaqJsonLd items={faqItems} />
          <Header />
          <StoreHero />
          <div className="divider" />
          <BothStores />
          <div className="divider" />
          <WhatWeDo />
          <div className="divider" />
          <StoreRequirements />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <StoreProcess />
          <div className="divider" />
          <StorePricing />
          <div className="divider" />
          <StoreFaq />
          <div className="divider" />
          <StoreCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
