"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    metric: "Velocidad",
    before: "6+ segundos de carga",
    after: "Menos de 2 segundos",
    color: "#22C55E",
  },
  {
    metric: "SEO",
    before: "Invisible en Google",
    after: "Primeras páginas de resultados",
    color: "#3B82F6",
  },
  {
    metric: "Conversión",
    before: "Visitantes que se van",
    after: "Contactos y ventas reales",
    color: "#F59E0B",
  },
  {
    metric: "Mobile",
    before: "Se ve roto en celulares",
    after: "Diseño adaptativo perfecto",
    color: "#8B5CF6",
  },
  {
    metric: "Diseño",
    before: "Aspecto desactualizado",
    after: "Visual moderno y profesional",
    color: "#EF4444",
  },
  {
    metric: "Mantenimiento",
    before: "Necesitás un dev para cada cambio",
    after: "Panel admin para editar vos mismo",
    color: "#06B6D4",
  },
];

export function WhatWeImprove() {
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
        Qué mejoramos.
      </motion.h2>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, i) => (
          <motion.div
            key={a.metric}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: a.color }} />
              <span className="text-[14px] font-semibold" style={{ color: a.color }}>{a.metric}</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[14px] text-[#EF4444]">✗</span>
                <span className="text-[14px] leading-[1.5] text-[var(--color-text-secondary)]">{a.before}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[14px] text-[#22C55E]">✓</span>
                <span className="text-[14px] font-medium leading-[1.5] text-[var(--color-text)]">{a.after}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
