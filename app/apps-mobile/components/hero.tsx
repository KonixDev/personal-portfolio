"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileHero() {
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
            <rect x="10" y="4" width="24" height="36" rx="4" stroke="#fff" strokeWidth="2" fill="none" />
            <circle cx="22" cy="35" r="1.5" fill="#fff" />
            <rect x="14" y="8" width="16" height="20" rx="1" fill="#fff" opacity="0.2" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-showcase mt-6 max-w-[800px] text-center md:mt-8"
        >
          Tu app, en las manos de tus usuarios.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-body mt-6 max-w-[540px] text-center"
        >
          Desarrollo de apps para iOS, Android y Android TV.
          <br />
          Nativas o cross-platform. Publicación en tiendas incluida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
        >
          <a
            href={waLink("Hola Martín, quiero desarrollar una app mobile.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Empezar mi app
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
