"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    name: "Diseño de esquemas",
    desc: "Modelado de datos normalizado, relaciones claras, constraints correctos y convenciones consistentes. Un esquema que crece con tu negocio.",
  },
  {
    name: "Optimización de queries",
    desc: "Profiling de consultas lentas, reescritura de queries, creación de índices y estrategias de cache. De segundos a milisegundos.",
  },
  {
    name: "Migración entre motores",
    desc: "De MySQL a PostgreSQL, de MongoDB a relacional, o cualquier combinación. Mapeo de datos, scripts de migración y verificación completa.",
  },
  {
    name: "Réplicas y alta disponibilidad",
    desc: "Read replicas para distribuir carga, failover automático, connection pooling con PgBouncer. Tu base siempre disponible.",
  },
  {
    name: "Backups y recuperación",
    desc: "Backups automáticos, verificados y con restauración probada. Point-in-time recovery para volver a cualquier momento.",
  },
  {
    name: "Seguridad de datos",
    desc: "Row-level security, encriptación, auditoría de accesos y cumplimiento de normativas. Tus datos protegidos.",
  },
];

export function DbServices() {
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
        Qué hacemos con tu base.
      </motion.h2>

      {/* List layout with left border accent */}
      <div className="mt-16 w-full max-w-[800px] space-y-0">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
            className="flex gap-5 border-l-2 border-[var(--color-border)] py-6 pl-6 transition-colors hover:border-[#4169E1]"
          >
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
