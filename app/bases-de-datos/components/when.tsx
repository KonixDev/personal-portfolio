"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const scenarios = [
  {
    title: "Estás empezando un proyecto",
    desc: "Necesitás un esquema bien diseñado desde el inicio para no tener que reestructurar después.",
    icon: "🆕",
  },
  {
    title: "Tu base creció y todo se volvió lento",
    desc: "Queries que antes tardaban milisegundos ahora tardan segundos. Índices inexistentes o mal diseñados.",
    icon: "🐌",
  },
  {
    title: "Querés migrar de motor",
    desc: "De MySQL a PostgreSQL, de MongoDB a relacional, o viceversa. Sin perder datos ni romper tu sistema.",
    icon: "🔄",
  },
  {
    title: "No tenés backups confiables",
    desc: "Si tu base se corrompe mañana, ¿podés recuperar todo? Configuramos backups automáticos y verificados.",
    icon: "💾",
  },
  {
    title: "Necesitás alta disponibilidad",
    desc: "Réplicas de lectura, failover automático, conexiones pooled. Tu base siempre disponible.",
    icon: "⚡",
  },
  {
    title: "Los costos se fueron de las manos",
    desc: "Instancias sobredimensionadas, almacenamiento sin limpiar, queries que consumen todo. Lo optimizamos.",
    icon: "💰",
  },
];

export function DbWhen() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cuando" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        ¿Cuándo necesitás ayuda?
      </motion.h2>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {scenarios.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6"
          >
            <span className="text-[28px]">{s.icon}</span>
            <h3 className="text-[17px] font-semibold tracking-tight">{s.title}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
