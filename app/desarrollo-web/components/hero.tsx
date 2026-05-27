"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function WebHero() {
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
            <rect x="6" y="8" width="32" height="22" rx="3" stroke="#fff" strokeWidth="2" fill="none" />
            <path d="M14 34h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 30v4" stroke="#fff" strokeWidth="2" />
            <path d="M16 16l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            <path d="M24 24h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-showcase mt-6 max-w-[800px] text-center md:mt-8"
        >
          Tu sistema web, hecho a medida.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-body mt-6 max-w-[540px] text-center"
        >
          Landing pages, plataformas SaaS, ERPs, dashboards y e-commerce.
          <br />
          Rápido, seguro y optimizado para buscadores.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
        >
          <a
            href={waLink("Hola Martín, quiero desarrollar un sistema web.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Empezar mi proyecto
          </a>
          <a href="#ejemplos" className="btn-secondary">
            Ver ejemplos
            <span className="ml-2">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
