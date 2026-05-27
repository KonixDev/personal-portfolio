"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SeoVsGeo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferencia" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        SEO vs GEO.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Dos estrategias complementarias. Hacemos las dos.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl border border-[var(--color-border)] bg-white p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F612]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="#3B82F6" strokeWidth="1.8" fill="none" />
                <path d="M10 3v14M3 10h14" stroke="#3B82F6" strokeWidth="1.2" opacity="0.4" />
              </svg>
            </div>
            <h3 className="text-[20px] font-semibold tracking-tight">SEO</h3>
          </div>
          <p className="text-[14px] font-medium text-[var(--color-text)]">Search Engine Optimization</p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
            Optimización para que tu sitio aparezca en los resultados de Google cuando alguien busca lo que ofrecés. Funciona a nivel global o nacional.
          </p>
          <ul className="mt-5 space-y-2.5">
            {["Meta tags y structured data", "Velocidad de carga (Core Web Vitals)", "Contenido optimizado con keywords", "Link building y autoridad", "Sitemap y robots.txt"].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-[var(--color-text-secondary)]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl border border-[var(--color-border)] bg-white p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E12]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="#22C55E" strokeWidth="1.8" fill="none" />
                <circle cx="10" cy="10" r="2.5" fill="#22C55E" />
                <circle cx="10" cy="10" r="4.5" stroke="#22C55E" strokeWidth="1" strokeDasharray="2 2" fill="none" />
              </svg>
            </div>
            <h3 className="text-[20px] font-semibold tracking-tight">GEO</h3>
          </div>
          <p className="text-[14px] font-medium text-[var(--color-text)]">Generative Engine Optimization</p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
            Optimización para que tu negocio aparezca en respuestas de IA (ChatGPT, Gemini, Perplexity) y en búsquedas locales &ldquo;cerca de mí&rdquo;.
          </p>
          <ul className="mt-5 space-y-2.5">
            {["Google Business Profile optimizado", "Datos estructurados para IA", "Reseñas y reputación online", "Citaciones en directorios locales", "Contenido optimizado para respuestas de IA"].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-[var(--color-text-secondary)]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22C55E]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
