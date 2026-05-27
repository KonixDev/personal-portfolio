"use client";

import { waLink } from "@/lib/site-config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    key: "una",
    name: "Una tienda",
    price: "Desde $500",
    desc: "Publicación en Play Store o App Store. Assets, ficha, compliance y manejo de rechazos incluido.",
    includes: [
      "Play Store o App Store",
      "Ícono y screenshots diseñados",
      "Ficha de tienda optimizada",
      "Compliance configurado",
      "Manejo de rechazos",
    ],
    timeline: "3 — 7 días",
    wa: "Hola Martín, necesito publicar mi app en una tienda.",
  },
  {
    key: "ambas",
    name: "Ambas tiendas",
    price: "Desde $800",
    desc: "Publicación en Play Store y App Store. El paquete completo para estar en ambas plataformas.",
    includes: [
      "Play Store + App Store",
      "Assets para ambas plataformas",
      "Fichas optimizadas (español + inglés)",
      "Compliance de ambas tiendas",
      "ASO básico incluido",
      "Manejo de rechazos en ambas",
    ],
    timeline: "5 — 10 días",
    featured: true,
    wa: "Hola Martín, necesito publicar mi app en ambas tiendas.",
  },
  {
    key: "premium",
    name: "Publicación + ASO",
    price: "Desde $1.500",
    desc: "Publicación completa más optimización avanzada para maximizar descargas orgánicas.",
    includes: [
      "Todo lo de ambas tiendas",
      "Keyword research profundo",
      "A/B testing de screenshots",
      "Localización multi-idioma",
      "Análisis de competencia",
      "Reporte mensual de métricas",
    ],
    timeline: "1 — 2 semanas",
    wa: "Hola Martín, quiero publicar mi app con ASO premium.",
  },
];

export function StorePricing() {
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
        Precio fijo. Si la app la desarrollamos nosotros, la publicación ya está incluida.
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
                <span className="absolute -top-3 left-6 rounded-full bg-[#34A853] px-3 py-1 text-[11px] font-semibold text-white">
                  Más elegido
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
                    <span className={"mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full " + (isFeat ? "bg-[#34A853]" : "bg-[var(--color-text-tertiary)]")} />
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
        Precios en USD (USDT) o pesos argentinos equivalentes · No incluye el costo de la cuenta de developer
      </p>
    </section>
  );
}
