"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    name: "Diagnóstico",
    desc: "Analizamos tu sistema completo: performance, queries, infraestructura, costos y monitoreo. Identificamos cada cuello de botella.",
    meta: "1 — 3 días",
  },
  {
    n: "02",
    name: "Plan de acción",
    desc: "Te presentamos cada problema con su impacto, la solución propuesta y el orden de prioridad. Precio fijo por etapa.",
    meta: "48 horas",
  },
  {
    n: "03",
    name: "Optimización",
    desc: "Implementamos las mejoras de mayor impacto primero. Cada cambio medido con antes y después. Zero downtime.",
    meta: "1 — 4 semanas",
  },
  {
    n: "04",
    name: "Verificación",
    desc: "Re-test completo. Te entregamos un reporte con las métricas de antes vs después y la configuración de monitoreo.",
    meta: "Métricas reales",
  },
];

export function OptProcess() {
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
        Cómo trabajamos.
      </motion.h2>

      {/* Horizontal steps with connecting line */}
      <div className="relative mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-0 md:grid-cols-4">
        <div className="absolute top-6 right-8 left-8 hidden h-px bg-[var(--color-border)] md:block" />
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="relative flex flex-col gap-4 p-6 md:p-8"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-bg)] font-mono text-[14px] font-bold text-[var(--color-text)] ring-1 ring-[var(--color-border)]">
              {step.n}
            </div>
            <h3 className="text-[18px] font-semibold tracking-tight">{step.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{step.desc}</p>
            <span className="mt-auto inline-flex w-fit items-center rounded-full bg-[var(--color-bg-secondary)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]">
              {step.meta}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
