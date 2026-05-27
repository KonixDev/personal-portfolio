"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function SeoHero() {
  return (
    <section className="grid place-items-center px-5 pt-[120px] pb-12 md:px-6 md:pt-[180px] md:pb-20">
      <div className="grid place-items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex h-[86px] w-[86px] items-center justify-center rounded-[21px] bg-[var(--color-bg-inverse)]"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="20" cy="20" r="10" stroke="#fff" strokeWidth="2" fill="none" />
            <path d="M27 27l8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 20h8M20 16v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-showcase mt-6 max-w-[800px] text-center md:mt-8"
        >
          Que te encuentren los que te buscan.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-body mt-6 max-w-[540px] text-center"
        >
          SEO técnico, optimización local (GEO) y estrategia de contenido.
          Aparecé primero en Google cuando tus clientes buscan lo que vendés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
        >
          <a
            href={waLink("Hola Martín, necesito mejorar mi posicionamiento en Google.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Mejorar mi SEO
          </a>
          <a href="#diferencia" className="btn-secondary">
            SEO vs GEO
            <span className="ml-2">↓</span>
          </a>
        </motion.div>
      </div>

      {/* Google search mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="mt-16 w-full max-w-[600px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]"
      >
        {/* Search bar */}
        <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] px-4 py-2.5">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-[var(--color-text-tertiary)]">
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[14px] text-[var(--color-text)]">desarrollo de apps mobile buenos aires</span>
        </div>

        {/* Results */}
        <div className="mt-5 space-y-5">
          {/* First result - highlighted */}
          <div className="rounded-xl bg-[var(--color-bg-secondary)] p-4">
            <div className="text-[12px] text-[var(--color-text-tertiary)]">martincoll.dev</div>
            <div className="mt-1 text-[16px] font-semibold text-[#1a0dab]">Martín Coll — Apps Mobile a medida</div>
            <div className="mt-1 text-[13px] leading-[1.5] text-[var(--color-text-secondary)]">Desarrollo de apps iOS, Android y Android TV. De la idea al lanzamiento en semanas. Precio fijo...</div>
          </div>
          {/* Other results - faded */}
          {[1, 2].map((i) => (
            <div key={i} className="px-4 opacity-40">
              <div className="h-2.5 w-32 rounded bg-[var(--color-bg-tertiary)]" />
              <div className="mt-2 h-3 w-48 rounded bg-[var(--color-bg-tertiary)]" />
              <div className="mt-2 h-2.5 w-full rounded bg-[var(--color-bg-tertiary)]" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
