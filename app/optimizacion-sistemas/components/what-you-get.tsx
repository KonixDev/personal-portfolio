"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Diagnóstico completo", desc: "Reporte detallado de cada cuello de botella, su impacto y la solución recomendada." },
  { title: "Implementación de mejoras", desc: "No solo te decimos qué cambiar — lo hacemos. Cada optimización probada en staging antes de producción." },
  { title: "Monitoreo configurado", desc: "Dashboards, alertas y métricas para que veas la mejora en tiempo real y detectes problemas futuros." },
  { title: "Cero downtime", desc: "Todas las optimizaciones se aplican sin interrumpir el servicio. Tus usuarios no se enteran." },
  { title: "Documentación de cambios", desc: "Cada cambio documentado: qué se hizo, por qué, y cómo mantenerlo. Tu equipo puede continuar." },
  { title: "Re-test y verificación", desc: "Después de cada cambio, medimos de nuevo. Si no mejora, revertimos y probamos otra cosa." },
];

function SpeedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#22C55E" opacity="0.12" />
      <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
        Qué recibís.
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
            <div className="mt-0.5"><SpeedIcon /></div>
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
