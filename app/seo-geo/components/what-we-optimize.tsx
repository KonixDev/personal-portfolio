"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    name: "SEO Técnico",
    desc: "Meta tags, canonical URLs, sitemap, robots.txt, hreflang, schema markup. La base que Google necesita para entender tu sitio.",
    score: "Fundación",
    color: "#3B82F6",
  },
  {
    name: "Core Web Vitals",
    desc: "LCP, FID, CLS. Las métricas que Google usa para rankear. Optimizamos velocidad, interactividad y estabilidad visual.",
    score: "Performance",
    color: "#22C55E",
  },
  {
    name: "Contenido y Keywords",
    desc: "Investigación de palabras clave, optimización de títulos, descripciones y contenido. Lo que buscan tus clientes, en tu sitio.",
    score: "Relevancia",
    color: "#F59E0B",
  },
  {
    name: "SEO Local / GEO",
    desc: "Google Business Profile, reseñas, citaciones NAP, directorios locales. Para que te encuentren los que están cerca.",
    score: "Ubicación",
    color: "#EF4444",
  },
  {
    name: "Optimización para IA",
    desc: "Structured data, contenido conversacional, FAQ schema. Para que ChatGPT, Gemini y Perplexity recomienden tu negocio.",
    score: "Futuro",
    color: "#8B5CF6",
  },
  {
    name: "Análisis y métricas",
    desc: "Google Search Console, Analytics, rank tracking. Medimos todo: posiciones, clics, impresiones y conversiones.",
    score: "Datos",
    color: "#06B6D4",
  },
];

export function WhatWeOptimize() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Qué optimizamos.
      </motion.h2>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: `${a.color}12`, color: a.color }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: a.color }} />
                {a.score}
              </span>
            </div>
            <h3 className="text-[17px] font-semibold tracking-tight">{a.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
