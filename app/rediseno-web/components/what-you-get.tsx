"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Auditoría del sitio actual", desc: "Analizamos velocidad, SEO, usabilidad y conversión antes de tocar una línea de código." },
  { title: "Diseño nuevo a medida", desc: "No usamos templates. Diseñamos desde cero según tu marca, tus usuarios y tus objetivos." },
  { title: "Migración de contenido", desc: "Trasladamos todo tu contenido actual al nuevo sitio. Textos, imágenes, productos — sin perder nada." },
  { title: "Redirecciones SEO", desc: "Mantenemos el posicionamiento que ya tenés. Cada URL vieja redirige a la nueva sin perder autoridad." },
  { title: "Velocidad garantizada", desc: "Lighthouse 90+ en todas las métricas. Tu sitio nuevo carga en menos de 2 segundos." },
  { title: "Panel de administración", desc: "Editá contenido, imágenes y páginas sin necesidad de un desarrollador." },
  { title: "Responsive perfecto", desc: "Diseñado mobile-first. Funciona impecable en celular, tablet y desktop." },
  { title: "30 días de soporte", desc: "Bugs y ajustes menores corregidos sin costo después del lanzamiento." },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#F59E0B" opacity="0.12" />
      <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatYouGet() {
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
        Qué incluye el rediseño.
      </motion.h2>

      <div className="mt-12 grid w-full max-w-[900px] grid-cols-1 gap-x-16 gap-y-6 md:mt-16 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
            className="flex gap-3"
          >
            <div className="mt-0.5"><CheckIcon /></div>
            <div>
              <h4 className="text-[15px] font-semibold text-[var(--color-text)]">{item.title}</h4>
              <p className="mt-0.5 text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
