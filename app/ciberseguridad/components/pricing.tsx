"use client";

import { waLink } from "@/lib/site-config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    key: "scan",
    name: "Security Scan",
    price: "Desde $800",
    desc: "Análisis automatizado + revisión manual rápida. Ideal para saber dónde estás parado.",
    includes: [
      "OWASP Top 10 básico",
      "Escaneo de configuración SSL/DNS",
      "Revisión de headers HTTP",
      "Reporte con priorización",
    ],
    timeline: "3 — 5 días",
    wa: "Hola Martín, quiero un security scan de mi sistema.",
  },
  {
    key: "audit",
    name: "Auditoría Completa",
    price: "Desde $2.500",
    desc: "Pentesting manual + análisis de infraestructura + revisión de código. El paquete completo.",
    includes: [
      "Pentesting de aplicación (web/API/mobile)",
      "Revisión de infraestructura",
      "Análisis de código fuente",
      "Reporte ejecutivo + técnico",
      "Re-test incluido",
    ],
    timeline: "2 — 3 semanas",
    featured: true,
    wa: "Hola Martín, necesito una auditoría de seguridad completa.",
  },
  {
    key: "continuous",
    name: "Seguridad Continua",
    price: "Desde $1.200/mes",
    desc: "Monitoreo permanente, auditorías periódicas y respuesta a incidentes. Para sistemas críticos.",
    includes: [
      "Monitoreo continuo de vulnerabilidades",
      "Auditoría trimestral completa",
      "Alertas en tiempo real",
      "Soporte prioritario ante incidentes",
      "Asesoría en cumplimiento normativo",
    ],
    timeline: "Mensual",
    wa: "Hola Martín, me interesa seguridad continua para mi sistema.",
  },
];

export function SecurityPricing() {
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
        Planes y precios.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Desde un escaneo rápido hasta protección continua. El alcance exacto lo definimos juntos.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-3">
        {tiers.map((tier, i) => {
          const isFeat = "featured" in tier && tier.featured;
          return (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className={
                "relative flex min-h-[480px] flex-col gap-6 rounded-2xl border px-6 py-8 md:min-h-[560px] md:px-8 md:py-10 " +
                (isFeat
                  ? "border-[var(--color-bg-inverse)] bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]"
                  : "border-[var(--color-border)] bg-white")
              }
            >
              {isFeat && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#EF4444] px-3 py-1 text-[11px] font-semibold text-white">
                  Más completo
                </span>
              )}
              <div>
                <span className={"text-[12px] font-semibold uppercase tracking-wider " + (isFeat ? "text-white/50" : "text-[var(--color-text-tertiary)]")}>
                  {tier.price}
                </span>
                <h3 className={"mt-2 text-[28px] font-bold tracking-tight " + (isFeat ? "text-white" : "text-[var(--color-text)]")}>
                  {tier.name}
                </h3>
                <p className={"mt-2 text-[14px] leading-[1.6] " + (isFeat ? "text-white/60" : "text-[var(--color-text-secondary)]")}>
                  {tier.desc}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {tier.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[13.5px]">
                    <span className={"mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full " + (isFeat ? "bg-[#EF4444]" : "bg-[var(--color-text-tertiary)]")} />
                    <span className={isFeat ? "text-white/80" : "text-[var(--color-text-secondary)]"}>{line}</span>
                  </li>
                ))}
              </ul>
              <div className={"mt-auto flex items-center justify-between border-t pt-5 " + (isFeat ? "border-white/10" : "border-[var(--color-border)]")}>
                <span className={"text-[12px] font-medium " + (isFeat ? "text-white/40" : "text-[var(--color-text-tertiary)]")}>
                  {tier.timeline}
                </span>
                <a
                  href={waLink(tier.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isFeat
                      ? "btn-primary bg-white text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] h-[38px] px-4 text-[13px]"
                      : "btn-primary h-[38px] px-4 text-[13px]"
                  }
                >
                  Empezar →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-8 text-compact text-center">
        Precios en USD (USDT) o pesos argentinos equivalentes · Pago 50/50 o por etapa
      </p>
    </section>
  );
}
