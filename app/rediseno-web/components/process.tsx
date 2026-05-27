"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    name: "Auditoría",
    desc: "Analizamos tu sitio actual: velocidad, SEO, usabilidad, conversión. Identificamos exactamente qué hay que mejorar y qué se puede mantener.",
    meta: "Gratis · 30 min",
  },
  {
    n: "02",
    name: "Propuesta de diseño",
    desc: "Te mostramos wireframes del nuevo diseño, mapa del sitio y plan de migración. Precio fijo, alcance cerrado.",
    meta: "48 horas",
  },
  {
    n: "03",
    name: "Rediseño",
    desc: "Construimos el nuevo sitio en paralelo al actual. Avances semanales visibles. Tu sitio viejo sigue funcionando hasta que el nuevo esté listo.",
    meta: "2 — 6 semanas",
  },
  {
    n: "04",
    name: "Migración y lanzamiento",
    desc: "Migramos contenido, configuramos redirecciones SEO, verificamos todo y hacemos el switch. Cero tiempo fuera de servicio.",
    meta: "Zero downtime",
  },
];

export function RedesignProcess() {
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
        Cómo lo hacemos.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Tu sitio actual sigue funcionando mientras construimos el nuevo.
      </motion.p>

      {/* Vertical timeline layout */}
      <div className="mt-16 w-full max-w-[640px]">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            {/* Timeline line */}
            {i < steps.length - 1 && (
              <div className="absolute left-[23px] top-12 bottom-0 w-px bg-[var(--color-border)]" />
            )}
            {/* Number circle */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-inverse)] text-[14px] font-bold text-[var(--color-text-inverse)]">
              {step.n}
            </div>
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-3">
                <h3 className="text-[18px] font-semibold tracking-tight">{step.name}</h3>
                <span className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]">
                  {step.meta}
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
