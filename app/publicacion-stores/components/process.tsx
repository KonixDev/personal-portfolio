"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    name: "Nos mandás tu app",
    desc: "El código fuente o el build compilado. Si la app la hicimos nosotros, este paso ya está resuelto.",
    meta: "Día 1",
  },
  {
    n: "02",
    name: "Preparamos todo",
    desc: "Diseñamos assets, escribimos la ficha, configuramos compliance y firmamos el build. Te lo mostramos para aprobación.",
    meta: "2 — 3 días",
  },
  {
    n: "03",
    name: "Enviamos a revisión",
    desc: "Subimos a Play Store y/o App Store. Monitoreamos el proceso y resolvemos cualquier observación de la tienda.",
    meta: "1 — 7 días",
  },
  {
    n: "04",
    name: "¡Publicada!",
    desc: "Tu app disponible para descargar. Te entregamos guía de mantenimiento y soporte por 30 días.",
    meta: "Lista",
  },
];

export function StoreProcess() {
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
        De tu código a la tienda.
      </motion.h2>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-0 md:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className={
              "relative flex flex-col gap-4 p-6 md:p-8 " +
              (i < steps.length - 1 ? "border-b md:border-b-0 md:border-r" : "") +
              " border-[var(--color-border)]"
            }
          >
            <span className="text-[40px] font-bold leading-none tracking-tight text-[var(--color-bg-tertiary)]">
              {step.n}
            </span>
            <h3 className="text-[18px] font-semibold tracking-tight">{step.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{step.desc}</p>
            <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-bg-secondary)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]">
              {step.meta}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
