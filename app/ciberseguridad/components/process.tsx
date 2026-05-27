"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    name: "Alcance",
    desc: "Definimos qué sistemas, aplicaciones o infraestructura vamos a auditar. Firmamos acuerdo de confidencialidad.",
    meta: "Día 1",
  },
  {
    n: "02",
    name: "Análisis",
    desc: "Ejecutamos pruebas automatizadas y manuales. Buscamos vulnerabilidades, configuraciones inseguras y vectores de ataque.",
    meta: "1 — 2 semanas",
  },
  {
    n: "03",
    name: "Reporte",
    desc: "Entregamos un informe detallado con cada hallazgo, su severidad, evidencia y pasos concretos de remediación.",
    meta: "Documento completo",
  },
  {
    n: "04",
    name: "Remediación",
    desc: "Si querés, corregimos las vulnerabilidades encontradas. Si preferís hacerlo internamente, el reporte tiene todo lo necesario.",
    meta: "Opcional",
  },
];

export function SecurityProcess() {
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

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-0 md:grid-cols-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className={
              "relative flex flex-col gap-4 p-8 " +
              "border-[var(--color-border)] " +
              (i < 2 ? "border-b " : "") +
              (i % 2 === 0 ? "md:border-r " : "")
            }
          >
            <div className="flex items-center justify-between">
              <span className="text-[48px] font-bold leading-none tracking-tight text-[var(--color-bg-tertiary)]">
                {step.n}
              </span>
              <span className="inline-flex items-center rounded-full bg-[var(--color-bg-secondary)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]">
                {step.meta}
              </span>
            </div>
            <h3 className="text-[20px] font-semibold tracking-tight">{step.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
