"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    name: "Definimos tu app",
    desc: "Llamada de 30 min gratis. Entendemos qué necesitás, en qué plataformas, y qué problema resuelve tu app.",
    meta: "Gratis · 30 min",
  },
  {
    n: "02",
    name: "Diseño y propuesta",
    desc: "Wireframes, flujo de navegación, y propuesta con alcance cerrado y precio fijo. En 48 horas.",
    meta: "48 horas",
  },
  {
    n: "03",
    name: "Desarrollo",
    desc: "Avances semanales que podés probar en tu celular. Versiones de prueba instalables desde el primer sprint.",
    meta: "4 — 10 semanas",
  },
  {
    n: "04",
    name: "Publicación",
    desc: "Subimos tu app a Play Store, App Store o ambas. Íconos, screenshots, descripción — todo listo para que tus usuarios la descarguen.",
    meta: "Publicada en tiendas",
  },
];

export function MobileProcess() {
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
        De la idea a la tienda.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Cuatro pasos. Sin reuniones innecesarias.
      </motion.p>

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
