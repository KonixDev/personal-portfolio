"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function TvHero() {
  return (
    <section className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto grid max-w-[1200px] place-items-center px-5 pt-[140px] pb-16 text-center md:px-12 md:pt-[200px] md:pb-24 lg:px-[116px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex h-[86px] w-[86px] items-center justify-center rounded-[21px] bg-white/10 backdrop-blur-sm"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <rect x="4" y="8" width="36" height="22" rx="3" stroke="#fff" strokeWidth="2" fill="none" />
            <path d="M16 34h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 30v4" stroke="#fff" strokeWidth="2" />
            <path d="M14 16l6 4-6 4z" fill="#fff" opacity="0.8" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 text-[clamp(48px,5.6vw,80px)] font-[650] leading-[1] tracking-[-0.6px] md:mt-8"
        >
          Tu contenido en la pantalla grande.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-6 max-w-[540px] text-[20px] font-[440] leading-[1.3] text-white/55"
        >
          Apps de streaming, canales de TV en vivo, y entretenimiento para Android TV.
          Control remoto, Chromecast y experiencia de sala de estar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={waLink("Hola Martín, quiero desarrollar una app para Android TV.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[44px] items-center justify-center rounded-full bg-white px-5 text-[16px] font-semibold text-[var(--color-text)] transition hover:bg-white/90"
          >
            Empezar mi app TV
          </a>
          <a href="#casos" className="inline-flex h-[44px] items-center justify-center rounded-full px-5 text-[16px] font-semibold text-white/70 ring-1 ring-white/20 transition hover:bg-white/5">
            Ver casos de uso
            <span className="ml-2">↓</span>
          </a>
        </motion.div>

        {/* TV Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-16 w-full max-w-[700px]"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-video p-6 md:p-10">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-white/20" />
                    <div className="h-3 w-20 rounded bg-white/15" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-12 rounded bg-white/10" />
                    <div className="h-3 w-12 rounded bg-white/10" />
                    <div className="h-3 w-12 rounded bg-white/20" />
                  </div>
                </div>
                <div>
                  <div className="h-4 w-48 rounded bg-white/25" />
                  <div className="mt-2 h-3 w-32 rounded bg-white/10" />
                  <div className="mt-4 flex gap-3">
                    <div className="h-8 w-20 rounded-lg bg-white/20" />
                    <div className="h-8 w-20 rounded-lg bg-white/10" />
                  </div>
                </div>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-20 w-14 rounded-lg bg-white/10 md:h-24 md:w-[72px]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-1 h-3 w-20 rounded-b-lg bg-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
