"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function RedesignHero() {
  return (
    <section className="px-5 pt-[120px] pb-12 md:px-12 md:pt-[180px] md:pb-20 lg:px-[116px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-secondary)] px-4 py-2 text-[13px] font-medium text-[var(--color-text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
            No empezamos de cero si no hace falta
          </div>
          <h1 className="text-showcase max-w-[520px]">
            Tu sitio actual, transformado.
          </h1>
          <p className="text-body mt-6 max-w-[440px]">
            Rediseño visual, mejor velocidad, SEO optimizado y más conversión.
            Mantenemos lo que funciona, mejoramos lo que no.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hola Martín, necesito rediseñar mi sitio web.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quiero rediseñar mi sitio
            </a>
            <a href="#senales" className="btn-secondary">
              ¿Lo necesito?
              <span className="ml-2">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Before → After visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Before */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
              <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-wider text-[#EF4444]">Antes</span>
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-[var(--color-bg-tertiary)]" />
                <div className="h-20 rounded-lg bg-[var(--color-bg-tertiary)]" />
                <div className="h-3 w-3/4 rounded bg-[var(--color-bg-tertiary)]" />
                <div className="h-3 w-1/2 rounded bg-[var(--color-bg-tertiary)]" />
                <div className="h-8 w-24 rounded bg-[var(--color-bg-tertiary)]" />
                <div className="flex gap-2">
                  <div className="h-12 flex-1 rounded bg-[var(--color-bg-tertiary)]" />
                  <div className="h-12 flex-1 rounded bg-[var(--color-bg-tertiary)]" />
                </div>
              </div>
            </div>
            {/* After */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)]">
              <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-wider text-[#22C55E]">Después</span>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded bg-[var(--color-bg-inverse)]" />
                  <div className="h-3 w-20 rounded bg-[var(--color-bg-inverse)]" />
                </div>
                <div className="h-20 rounded-lg bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)]" />
                <div className="h-4 w-full rounded bg-[var(--color-bg-inverse)]" />
                <div className="h-3 w-2/3 rounded bg-[var(--color-text-tertiary)]" />
                <div className="h-8 w-28 rounded-full bg-[var(--color-bg-inverse)]" />
                <div className="flex gap-2">
                  <div className="h-12 flex-1 rounded-xl bg-[var(--color-bg-secondary)]" />
                  <div className="h-12 flex-1 rounded-xl bg-[var(--color-bg-secondary)]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
