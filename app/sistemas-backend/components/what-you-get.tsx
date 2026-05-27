"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Código documentado", desc: "Repositorio limpio, tipado, con tests y documentación para que cualquier equipo lo continúe." },
  { title: "API documentada", desc: "Endpoints con documentación interactiva (OpenAPI/Swagger). Tu equipo o tus clientes pueden integrar sin fricción." },
  { title: "Monitoreo configurado", desc: "Logs estructurados, métricas de performance, alertas ante errores. Sabés qué pasa en tiempo real." },
  { title: "Tests automatizados", desc: "Suite de tests que verifica que todo funciona antes de cada cambio. Menos bugs, más confianza." },
  { title: "CI/CD configurado", desc: "Cada cambio se testea y publica automáticamente. Sin procesos manuales ni riesgo de errores." },
  { title: "Infraestructura como código", desc: "Servidores, bases de datos y servicios configurados de forma reproducible. Nada de configuraciones manuales que se pierden." },
];

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#3B82F6" opacity="0.12" />
      <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
        Qué incluye tu backend.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        No solo código — un sistema completo listo para producción.
      </motion.p>

      <div className="mt-12 grid w-full max-w-[1000px] grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
            className="flex gap-3"
          >
            <div className="mt-0.5"><GearIcon /></div>
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
