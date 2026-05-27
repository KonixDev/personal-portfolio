"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function DbHero() {
  return (
    <section className="px-5 pt-[120px] pb-12 md:px-12 md:pt-[180px] md:pb-20 lg:px-[116px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-secondary)] px-4 py-2 text-[13px] font-medium text-[var(--color-text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[#4169E1]" />
            PostgreSQL · MySQL · MongoDB · Redis
          </div>
          <h1 className="text-showcase max-w-[520px]">
            Datos bien organizados, consultas que vuelan.
          </h1>
          <p className="text-body mt-6 max-w-[440px]">
            Diseño de esquemas, optimización de queries, migración entre motores y configuración de infraestructura de datos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hola Martín, necesito ayuda con mi base de datos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consultar sobre mi DB
            </a>
            <a href="#cuando" className="btn-secondary">
              ¿Necesito ayuda?
              <span className="ml-2">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Schema visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-inverse)] p-8">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#EF4444]" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B]" />
              <div className="h-3 w-3 rounded-full bg-[#22C55E]" />
              <span className="ml-3 font-mono text-[12px] text-white/40">schema.sql</span>
            </div>
            <div className="space-y-1.5 font-mono text-[13px] leading-[1.9]">
              <p className="text-white/35">-- users table</p>
              <p className="text-[#4169E1]">CREATE TABLE <span className="text-white">users</span> (</p>
              <p className="pl-4 text-white/70">id      <span className="text-[#22C55E]">UUID</span> PRIMARY KEY,</p>
              <p className="pl-4 text-white/70">email   <span className="text-[#22C55E]">TEXT</span> UNIQUE NOT NULL,</p>
              <p className="pl-4 text-white/70">org_id  <span className="text-[#22C55E]">UUID</span> REFERENCES orgs(id)</p>
              <p className="text-[#4169E1]">);</p>
              <p className="mt-2 text-white/35">-- index for fast lookups</p>
              <p className="text-[#F59E0B]">CREATE INDEX <span className="text-white/70">idx_users_org</span></p>
              <p className="pl-4 text-[#F59E0B]">ON <span className="text-white/70">users(org_id)</span>;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
