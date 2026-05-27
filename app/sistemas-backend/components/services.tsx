"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    name: "APIs REST & GraphQL",
    desc: "Endpoints seguros, documentados y versionados. Autenticación, rate limiting, validación y manejo de errores consistente.",
    number: "01",
  },
  {
    name: "Bases de datos",
    desc: "Diseño de esquemas, migraciones, optimización de queries, índices y estrategias de backup. PostgreSQL, MySQL, MongoDB.",
    number: "02",
  },
  {
    name: "Colas y procesos en segundo plano",
    desc: "Tareas pesadas que no bloquean al usuario: envío de emails, procesamiento de archivos, sincronizaciones, reportes.",
    number: "03",
  },
  {
    name: "Integraciones",
    desc: "Conectamos tu sistema con lo que necesites: pasarelas de pago, CRMs, ERPs, WhatsApp, email, servicios de terceros.",
    number: "04",
  },
  {
    name: "Infraestructura y escalabilidad",
    desc: "Configuración de servidores, contenedores, CI/CD, auto-scaling, balanceo de carga. Tu sistema listo para crecer.",
    number: "05",
  },
  {
    name: "Migración y optimización",
    desc: "Migramos tu sistema legacy a una arquitectura moderna. Optimizamos lo que ya tenés sin reconstruir desde cero.",
    number: "06",
  },
];

export function BackendServices() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Qué construimos.
      </motion.h2>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <span className="shrink-0 text-[36px] font-bold leading-none tracking-tight text-[var(--color-bg-tertiary)]">
              {s.number}
            </span>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
