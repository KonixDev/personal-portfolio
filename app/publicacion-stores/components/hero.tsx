"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function StoreHero() {
  return (
    <section className="grid place-items-center px-5 pt-[120px] pb-12 md:px-6 md:pt-[180px] md:pb-20">
      <div className="grid place-items-center text-center">
        {/* Two store icons side by side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-4"
        >
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[var(--color-bg-inverse)]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 4l2.5 14h15L26 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 4h4M26 4h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              <path d="M10 22l-1 6h14l-1-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              <circle cx="16" cy="14" r="4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <path d="M14.5 14l1 1 2.5-2.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-[28px] font-bold text-[var(--color-bg-tertiary)]">+</div>
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[var(--color-bg-secondary)]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M22.5 16.8c0-3.2 2.6-4.7 2.7-4.8-1.5-2.2-3.8-2.5-4.6-2.5-2-.2-3.8 1.2-4.8 1.2s-2.5-1.1-4.1-1.1c-2.1 0-4 1.2-5.1 3.1-2.2 3.8-.6 9.4 1.5 12.5 1 1.5 2.3 3.1 3.9 3.1 1.6-.1 2.2-1 4.1-1s2.4 1 4.1 1 2.7-1.5 3.7-3c1.2-1.7 1.6-3.3 1.7-3.4-.1 0-3.1-1.3-3.1-4.9z" fill="#141414" opacity="0.8" />
              <path d="M19.6 7.4c.8-1 1.4-2.5 1.3-3.9-1.2 0-2.7.8-3.6 1.8-.8.9-1.5 2.3-1.3 3.7 1.4.1 2.8-.7 3.6-1.6z" fill="#141414" opacity="0.8" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-showcase mt-6 max-w-[800px] text-center md:mt-8"
        >
          Tu app, lista para descargar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-body mt-6 max-w-[540px] text-center"
        >
          Nos encargamos de todo el proceso de publicación en Play Store y App Store.
          Íconos, screenshots, descripción, compliance y aprobación.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
        >
          <a
            href={waLink("Hola Martín, necesito publicar mi app en las tiendas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Publicar mi app
          </a>
          <a href="#tiendas" className="btn-secondary">
            Ver qué incluye
            <span className="ml-2">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
