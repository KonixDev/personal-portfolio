"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    name: "Auditoría OWASP Top 10",
    desc: "Revisamos tu aplicación contra las 10 vulnerabilidades más críticas: inyección SQL, XSS, autenticación rota, exposición de datos, y más.",
    severity: "Crítico",
    color: "#EF4444",
  },
  {
    name: "Pentesting de aplicación",
    desc: "Pruebas de penetración simulando ataques reales contra tu sistema web, API o app mobile. Reporte detallado con evidencia y pasos de remediación.",
    severity: "Alto",
    color: "#F59E0B",
  },
  {
    name: "Revisión de infraestructura",
    desc: "Auditoría de tu configuración de servidores, bases de datos, DNS, SSL, firewalls y políticas de acceso. Encontramos puertas abiertas.",
    severity: "Alto",
    color: "#F59E0B",
  },
  {
    name: "Hardening de sistemas",
    desc: "Configuración segura de servidores, bases de datos, APIs y servicios en la nube. Cerramos las vulnerabilidades que encontramos.",
    severity: "Prevención",
    color: "#22C55E",
  },
  {
    name: "Revisión de código",
    desc: "Análisis estático y manual de tu código fuente buscando patrones inseguros, secretos expuestos, dependencias vulnerables y lógica defectuosa.",
    severity: "Medio",
    color: "#3B82F6",
  },
  {
    name: "Plan de respuesta a incidentes",
    desc: "Protocolo documentado para saber exactamente qué hacer cuando algo sale mal: quién actúa, qué se cierra, cómo se comunica, cómo se recupera.",
    severity: "Prevención",
    color: "#22C55E",
  },
];

export function SecurityServices() {
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
        Qué analizamos.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Desde una revisión rápida hasta una auditoría completa con pruebas de penetración.
      </motion.p>

      {/* Horizontal scrollable list on mobile, 2-col grid on desktop */}
      <div className="mt-16 w-full max-w-[1100px]">
        <div className="grid grid-cols-1 gap-0">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              className={
                "flex flex-col gap-3 px-0 py-6 md:flex-row md:items-start md:gap-8 " +
                (i < services.length - 1 ? "border-b border-[var(--color-border)]" : "")
              }
            >
              <div className="flex shrink-0 items-center gap-3 md:w-[240px]">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                  {s.severity}
                </span>
                <h3 className="text-[16px] font-semibold tracking-tight md:hidden">{s.name}</h3>
              </div>
              <div className="flex-1">
                <h3 className="hidden text-[17px] font-semibold tracking-tight md:block">{s.name}</h3>
                <p className="mt-1 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
