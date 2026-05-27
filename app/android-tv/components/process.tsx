"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    name: "Definimos la experiencia",
    desc: "Qué contenido va a mostrar tu app, cómo se navega con el control remoto, y qué modelo de negocio tiene (suscripción, gratis con ads, pago único).",
    meta: "Gratis · 30 min",
  },
  {
    n: "02",
    name: "Diseño Leanback",
    desc: "Wireframes específicos para TV: carousels, detalle de contenido, reproductor, búsqueda y settings. Todo pensado para D-pad.",
    meta: "48 horas",
  },
  {
    n: "03",
    name: "Desarrollo",
    desc: "Avances semanales que probás en tu TV o emulador. Reproductor, catálogo, suscripciones — todo integrado por etapas.",
    meta: "6 — 12 semanas",
  },
  {
    n: "04",
    name: "Publicación",
    desc: "Subimos tu app a Google Play en la categoría Android TV. Screenshots en formato TV, banner, descripción — todo listo.",
    meta: "En Play Store",
  },
];

export function TvProcess() {
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
        De la idea a la pantalla.
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
