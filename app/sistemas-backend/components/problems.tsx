"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  { before: "Tu sistema se cae cuando hay muchos usuarios", after: "Infraestructura que escala automáticamente con la demanda" },
  { before: "Las consultas a la base de datos tardan segundos", after: "Queries optimizadas, índices correctos, cache donde hace falta" },
  { before: "No podés integrar con otros servicios", after: "APIs documentadas y conectores para cualquier plataforma" },
  { before: "No sabés qué está pasando en producción", after: "Logs, métricas, alertas y dashboards de monitoreo" },
];

export function Problems() {
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
        Problemas que resolvemos.
      </motion.h2>

      <div className="mt-16 w-full max-w-[900px]">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className={"grid grid-cols-1 gap-4 py-7 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 " + (i < problems.length - 1 ? "border-b border-[var(--color-border)]" : "")}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-[16px] text-[#EF4444]">✗</span>
              <p className="text-[15px] leading-[1.5] text-[var(--color-text-secondary)]">{p.before}</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hidden shrink-0 text-[var(--color-text-tertiary)] md:block">
              <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-[16px] text-[#22C55E]">✓</span>
              <p className="text-[15px] font-medium leading-[1.5] text-[var(--color-text)]">{p.after}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
