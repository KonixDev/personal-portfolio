"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    number: "01",
    name: "Queries y base de datos",
    desc: "Identificamos queries lentas, agregamos índices, reestructuramos esquemas y configuramos cache. La base de datos deja de ser el cuello de botella.",
  },
  {
    number: "02",
    name: "Tiempo de respuesta de API",
    desc: "Perfilamos cada endpoint, eliminamos N+1 queries, implementamos cache con Redis y optimizamos serialización. De segundos a milisegundos.",
  },
  {
    number: "03",
    name: "Infraestructura y costos",
    desc: "Rightsizing de servidores, auto-scaling, optimización de contenedores y revisión de servicios pagos. Pagás solo lo que necesitás.",
  },
  {
    number: "04",
    name: "Frontend y Core Web Vitals",
    desc: "Lazy loading, code splitting, optimización de imágenes, eliminación de JavaScript bloqueante. Lighthouse 90+ garantizado.",
  },
  {
    number: "05",
    name: "Procesos en segundo plano",
    desc: "Colas de trabajo que se acumulan, jobs que fallan silenciosamente, sincronizaciones lentas. Los ponemos en orden con reintentos y monitoreo.",
  },
  {
    number: "06",
    name: "Monitoreo y observabilidad",
    desc: "Si no medís, no podés mejorar. Configuramos logs, métricas, alertas y dashboards para que sepas qué pasa en todo momento.",
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

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2">
        {areas.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <span className="shrink-0 text-[36px] font-bold leading-none tracking-tight text-[var(--color-bg-tertiary)]">
              {a.number}
            </span>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight">{a.name}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
