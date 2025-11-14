import Link from "next/link";
import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <header className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
          MERN · Full‑Stack Developer
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">
          Martín Alejandro Coll
        </h1>
        <p className="max-w-xl text-sm md:text-base text-neutral-400">
          Full‑stack MERN developer con más de 6 años de experiencia construyendo APIs
          REST, microservicios y productos web escalables. Especializado en Node.js,
          integraciones B2B/B2C y optimización de rendimiento en producción.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/files/2025_v2_Martin_Coll_CV_Full_Stack_Developer.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/20"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            Descargar CV
          </Link>
          <span className="text-[0.7rem] text-neutral-500 font-mono">
            Argentina · Remoto · Inglés B1/B2
          </span>
        </div>
      </header>

      {/* Sobre mí + Stack */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)]">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold tracking-tight text-neutral-100">
            Sobre mí
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Soy un desarrollador <span className="text-neutral-100">MERN Full Stack</span> con foco en backend
            y arquitectura. Trabajo con APIs REST, microservicios y sistemas orientados
            a eventos, priorizando escalabilidad, seguridad y calidad de código bajo
            metodologías ágiles como Scrum y Kanban.
          </p>
          <p className="text-sm leading-relaxed text-neutral-400">
            Tengo experiencia integrando plataformas de terceros (HBO Max, Disney+, Prime,
            IAPs móviles, CRMs y herramientas de marketing), optimizando bases de datos
            MongoDB y desplegando en entornos con Kubernetes, Docker, Railway y VPS Linux.
          </p>
        </div>

        <aside className="space-y-4 rounded-xl border border-white/5 bg-black/30 px-4 py-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Tech Stack principal
          </h3>
          <dl className="space-y-3 text-xs text-neutral-300">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-neutral-400">Backend</dt>
              <dd className="text-right">
                Node.js, Express.js, REST APIs, Microservicios, Event‑Driven, JWT, Swagger
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-neutral-400">Frontend</dt>
              <dd className="text-right">
                React.js, Next.js, JavaScript, TypeScript
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-neutral-400">Data & Cache</dt>
              <dd className="text-right">
                MongoDB, Redis, SQL básico
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-neutral-400">DevOps</dt>
              <dd className="text-right">
                Docker, Nginx, Railway, Coolify, AWS S3/MinIO, VPS Ubuntu
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-neutral-400">Testing</dt>
              <dd className="text-right">
                Mocha, Chai, Sinon, Supertest, Cypress
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Experiencia */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight text-neutral-100">
          Experiencia relevante
        </h2>
        <ol className="space-y-4 text-sm text-neutral-300">
          <li className="relative rounded-xl border border-white/5 bg-black/30 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-neutral-50">
                Full Stack MERN · Toolbox
              </p>
              <span className="text-[0.68rem] font-mono text-neutral-500">
                Feb 2024 — Oct 2025
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Desarrollo de APIs REST con Node.js/Express para flujos B2C, B2B y B2B2C,
              integrando plataformas como HBO Max, Disney+, Universal+, Prime Video,
              VTR, Claro, Teatrix y Fanatiz, además de tiendas IAP (Google Play, Apple Store,
              Roku) y CRMs.
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Arquitectura de microservicios, optimización de MongoDB, manejo de entornos
              Dev/Staging/Prod y despliegues sobre Kubernetes/Docker con monitoreo en Kibana,
              Elasticsearch, New Relic y Zabbix.
            </p>
            <p className="mt-1 text-[0.7rem] text-neutral-500 font-mono">
              Node.js · Express · MongoDB · Microservicios · Kubernetes · REST APIs
            </p>
          </li>

          <li className="relative rounded-xl border border-white/5 bg-black/30 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-neutral-50">
                Full Stack MERN · Venedicto Team
              </p>
              <span className="text-[0.68rem] font-mono text-neutral-500">
                Ene 2023 — Feb 2024
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Integración de Redis como caché de alta velocidad, control de acceso basado
              en roles (RBAC), paginación server‑side optimizada y despliegues en Railway
              con foco en seguridad (CORS, rate‑limiting, cifrado completo de solicitudes).
            </p>
            <p className="mt-1 text-[0.7rem] text-neutral-500 font-mono">
              Node.js · Express · Redis · Railway · Seguridad · RBAC
            </p>
          </li>

          <li className="relative rounded-xl border border-white/5 bg-black/30 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-neutral-50">
                Full Stack MERN · Soluciones Digitales
              </p>
              <span className="text-[0.68rem] font-mono text-neutral-500">
                Ene 2020 — Ene 2023
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Rediseño de sistema en MongoDB (200k+ documentos) con mejoras de 33% en tiempos
              de respuesta, reducción de infraestructura (5 → 3 servidores) con Nginx y load
              balancing, implementación de un backend escalable en Node.js/Express y un panel
              administrativo con Next.js y React.
            </p>
            <p className="mt-1 text-[0.7rem] text-neutral-500 font-mono">
              Next.js · React · Node.js · MongoDB · Nginx · CDN
            </p>
          </li>
        </ol>
      </section>

      {/* Side projects */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight text-neutral-100">
          Side projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-neutral-300">
          <article className="rounded-xl border border-white/5 bg-black/30 p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-neutral-50 font-medium text-sm">Renwo AI</h3>
              <a
                href="https://renwo.com.ar"
                target="_blank"
                rel="noreferrer"
                className="text-[0.7rem] text-emerald-300 hover:text-emerald-200"
              >
                renwo.com.ar
              </a>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Plataforma multi‑tool de IA para marketing digital UGC: flujos con GPT para guiones,
              Nano Banana para first frame y Google VEO 3.1 para video final. Backend en Node.js,
              Express, Mercado Pago y despliegue con Coolify/Docker y Next.js en el front.
            </p>
          </article>

          <article className="rounded-xl border border-white/5 bg-black/30 p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-neutral-50 font-medium text-sm">KairoAI</h3>
              <a
                href="https://kairoai.com.ar"
                target="_blank"
                rel="noreferrer"
                className="text-[0.7rem] text-emerald-300 hover:text-emerald-200"
              >
                kairoai.com.ar
              </a>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Plataforma de asistentes RAG vía WhatsApp usando un backend event‑driven con Node.js,
              Express y MongoDB. Integra OpenAI para embeddings, Qdrant como DB de vectores y Gemini
              para análisis de conversaciones a través de WAHA (open‑source).
            </p>
          </article>
        </div>
      </section>

      {/* Blog */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold tracking-tight text-neutral-100">
            Últimos artículos
          </h2>
          <Link
            href="/blog"
            className="text-[0.7rem] text-neutral-500 hover:text-neutral-300 transition"
          >
            Ver todos →
          </Link>
        </div>
        <BlogPosts />
      </section>
    </section>
  );
}
