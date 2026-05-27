import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FooterReveal } from "../components/footer-reveal";
import { ServiceJsonLd, FaqJsonLd } from "../components/json-ld";
import { baseUrl } from "../sitemap";
import { BackendHero } from "./components/hero";
import { Problems } from "./components/problems";
import { BackendServices } from "./components/services";
import { BackendExamples } from "./components/examples";
import { WhatYouGet } from "./components/what-you-get";
import { BackendStack } from "./components/tech-stack";
import { BackendPricing } from "./components/pricing";
import { BackendFaq } from "./components/faq";
import { BackendCta } from "./components/cta";

export const metadata: Metadata = {
  title: "Sistemas Backend — APIs, bases de datos e infraestructura",
  description:
    "Desarrollo backend: APIs REST y GraphQL, bases de datos, microservicios, integraciones, colas de trabajo y infraestructura escalable. Node.js, PostgreSQL, Redis.",
  openGraph: {
    title: "Sistemas Backend — APIs e infraestructura | Martín Coll",
    description:
      "APIs, bases de datos, microservicios e infraestructura. El motor invisible que hace funcionar tu producto.",
  },
};

const faqItems = [
  {
    q: "¿Puedo conectar el backend con mi app o web existente?",
    a: "Sí. Diseñamos APIs que se integran con cualquier frontend: web, mobile, desktop, o incluso otros sistemas. La API viene documentada con OpenAPI/Swagger para que la integración sea directa.",
  },
  {
    q: "¿Qué pasa si mi sistema necesita escalar?",
    a: "Diseñamos pensando en escalabilidad desde el día uno: cache con Redis, colas para procesos pesados, y una arquitectura que permite agregar servidores sin reescribir código. Si ya tenés un sistema que no escala, lo optimizamos.",
  },
  {
    q: "¿Incluyen base de datos?",
    a: "Sí. Diseñamos el esquema, las migraciones, los índices y las relaciones. Usamos PostgreSQL como default pero nos adaptamos a lo que ya tengas. Incluimos backups y estrategia de recuperación.",
  },
  {
    q: "¿Puedo seguir desarrollando el backend internamente después?",
    a: "Sí. El código es tuyo, documentado, tipado y con tests. Cualquier desarrollador Node.js/TypeScript puede continuarlo. No hay dependencias propietarias ni vendor lock-in.",
  },
  {
    q: "¿Trabajan con sistemas legacy?",
    a: "Sí. Podemos migrar tu sistema viejo a una arquitectura moderna por etapas, sin tirar todo abajo. También optimizamos sistemas existentes: queries lentas, cuellos de botella, falta de monitoreo.",
  },
  {
    q: "¿Qué diferencia hay entre el plan API y el Sistema Completo?",
    a: "El plan API te da el backend básico: endpoints, base de datos, autenticación y deploy. El Sistema Completo agrega colas de trabajo, integraciones con terceros, monitoreo, tests automatizados y CI/CD — todo lo que necesitás para producción real con usuarios.",
  },
];

export default function SistemasBackendPage() {
  return (
    <FooterReveal
      main={
        <>
          <ServiceJsonLd
            name="Sistemas Backend — APIs, bases de datos e infraestructura"
            description="Desarrollo backend: APIs REST y GraphQL, bases de datos, microservicios, integraciones, colas de trabajo y infraestructura escalable. Node.js, PostgreSQL, Redis."
            url={`${baseUrl}/sistemas-backend`}
          />
          <FaqJsonLd items={faqItems} />
          <Header />
          <BackendHero />
          <div className="divider" />
          <Problems />
          <div className="divider" />
          <BackendServices />
          <div className="divider" />
          <BackendExamples />
          <div className="divider" />
          <WhatYouGet />
          <div className="divider" />
          <BackendStack />
          <div className="divider" />
          <BackendPricing />
          <div className="divider" />
          <BackendFaq />
          <div className="divider" />
          <BackendCta />
        </>
      }
      footer={<Footer />}
    />
  );
}
