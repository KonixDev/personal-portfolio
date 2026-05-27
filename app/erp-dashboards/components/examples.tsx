"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const examples = [
  {
    name: "ERP para comercio",
    desc: "Ventas, inventario multi-depósito, facturación electrónica AFIP, caja registradora y reportes de rentabilidad.",
    tags: ["Facturación", "Inventario", "Multi-sucursal"],
    color: "#06B6D4",
  },
  {
    name: "Dashboard de operaciones",
    desc: "KPIs en tiempo real, métricas de equipo, pipeline de proyectos y alertas configurables para directivos.",
    tags: ["Real-time", "KPIs", "Alertas", "Exportable"],
    color: "#8B5CF6",
  },
  {
    name: "Sistema de distribución",
    desc: "Red de distribuidores, precios por nivel, pedidos mayoristas, logística y comisiones automáticas.",
    tags: ["B2B", "Logística", "Comisiones", "Multi-nivel"],
    color: "#22C55E",
  },
  {
    name: "Panel para clínicas",
    desc: "Turnos, historias clínicas, facturación a obras sociales, stock de insumos y reportes por profesional.",
    tags: ["Turnos", "HC", "Facturación", "Reportes"],
    color: "#F59E0B",
  },
];

export function ErpExamples() {
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
        Ejemplos por industria.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Cada negocio tiene su lógica. Construimos el sistema que se adapta a la tuya.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-2">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <div className="h-2 w-10 rounded-full" style={{ background: ex.color }} />
            <h3 className="text-[18px] font-semibold tracking-tight">{ex.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{ex.desc}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {ex.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
