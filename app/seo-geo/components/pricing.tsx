"use client";

import { waLink } from "@/lib/site-config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    key: "auditoria",
    name: "Auditoría SEO",
    price: "Desde $600",
    desc: "Análisis completo de tu sitio con reporte de errores, oportunidades y plan de acción priorizado.",
    includes: [
      "Auditoría técnica completa",
      "Análisis de keywords y competencia",
      "Core Web Vitals report",
      "Reporte con priorización",
      "Plan de acción ejecutable",
    ],
    timeline: "3 — 5 días",
    wa: "Hola Martín, necesito una auditoría SEO de mi sitio.",
  },
  {
    key: "optimizacion",
    name: "SEO + GEO Completo",
    price: "Desde $2.000",
    desc: "Auditoría + implementación de todas las optimizaciones técnicas, de contenido y locales.",
    includes: [
      "Todo lo de la auditoría",
      "Optimización técnica implementada",
      "Core Web Vitals optimizados",
      "Google Business Profile configurado",
      "Contenido optimizado con keywords",
      "Schema markup y structured data",
      "Monitoreo con Search Console",
    ],
    timeline: "3 — 6 semanas",
    featured: true,
    wa: "Hola Martín, necesito optimizar SEO y GEO de mi sitio.",
  },
  {
    key: "continuo",
    name: "SEO Continuo",
    price: "Desde $800/mes",
    desc: "Optimización y monitoreo mensual. Nuevas keywords, contenido, link building y reportes.",
    includes: [
      "Monitoreo de posiciones semanal",
      "Optimización de contenido mensual",
      "Nuevas oportunidades de keywords",
      "Link building y autoridad",
      "Reporte mensual con métricas",
      "Soporte prioritario",
    ],
    timeline: "Mensual",
    wa: "Hola Martín, me interesa SEO continuo para mi sitio.",
  },
];

export function SeoPricing() {
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
        Desde una auditoría hasta posicionamiento continuo.
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
                <span className="absolute -top-3 left-6 rounded-full bg-[#3B82F6] px-3 py-1 text-[11px] font-semibold text-white">
                  Más completo
                </span>
              )}
              <div>
                <span className={"text-[12px] font-semibold uppercase tracking-wider " + (isFeat ? "text-white/50" : "text-[var(--color-text-tertiary)]")}>{tier.price}</span>
                <h3 className={"mt-2 text-[28px] font-bold tracking-tight " + (isFeat ? "text-white" : "text-[var(--color-text)]")}>{tier.name}</h3>
                <p className={"mt-2 text-[14px] leading-[1.6] " + (isFeat ? "text-white/60" : "text-[var(--color-text-secondary)]")}>{tier.desc}</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {tier.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[13.5px]">
                    <span className={"mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full " + (isFeat ? "bg-[#3B82F6]" : "bg-[var(--color-text-tertiary)]")} />
                    <span className={isFeat ? "text-white/80" : "text-[var(--color-text-secondary)]"}>{line}</span>
                  </li>
                ))}
              </ul>
              <div className={"mt-auto flex items-center justify-between border-t pt-5 " + (isFeat ? "border-white/10" : "border-[var(--color-border)]")}>
                <span className={"text-[12px] font-medium " + (isFeat ? "text-white/40" : "text-[var(--color-text-tertiary)]")}>{tier.timeline}</span>
                <a href={waLink(tier.wa)} target="_blank" rel="noopener noreferrer" className={isFeat ? "btn-primary bg-white text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] h-[38px] px-4 text-[13px]" : "btn-primary h-[38px] px-4 text-[13px]"}>
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
