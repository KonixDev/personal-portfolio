"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const symptoms = [
  { text: "Las páginas tardan más de 3 segundos en cargar", severity: "critical" },
  { text: "La base de datos consume cada vez más recursos", severity: "critical" },
  { text: "Los servidores cuestan más de lo que deberían", severity: "warning" },
  { text: "Hay errores 500 intermitentes que no podés reproducir", severity: "critical" },
  { text: "El sistema se cae cuando hay picos de tráfico", severity: "critical" },
  { text: "Las tareas en segundo plano se acumulan sin procesar", severity: "warning" },
  { text: "No hay monitoreo — te enterás de los problemas por tus usuarios", severity: "warning" },
  { text: "Cada deploy nuevo rompe algo que antes funcionaba", severity: "warning" },
];

const colors = { critical: "#EF4444", warning: "#F59E0B" };

export function Symptoms() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sintomas" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        ¿Tu sistema tiene estos síntomas?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Si reconocés 2 o más, necesitás una optimización.
      </motion.p>

      <div className="mt-16 w-full max-w-[700px] space-y-0">
        {symptoms.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            className={"flex items-center gap-4 py-4 " + (i < symptoms.length - 1 ? "border-b border-[var(--color-border)]" : "")}
          >
            <span
              className="inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase"
              style={{ background: `${colors[s.severity as keyof typeof colors]}15`, color: colors[s.severity as keyof typeof colors] }}
            >
              {s.severity === "critical" ? "Crítico" : "Alerta"}
            </span>
            <span className="text-[15px] leading-[1.45] text-[var(--color-text)]">{s.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
