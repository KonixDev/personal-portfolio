"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const kpis = [
  { metric: "Tiempo en tareas manuales", before: "12 hs/semana", after: "2 hs/semana", improvement: "80% menos", color: "#22C55E" },
  { metric: "Errores de facturación", before: "8%", after: "0.5%", improvement: "94% menos", color: "#3B82F6" },
  { metric: "Tiempo para generar reportes", before: "2 días", after: "1 click", improvement: "Instantáneo", color: "#06B6D4" },
  { metric: "Visibilidad del negocio", before: "Planillas dispersas", after: "Dashboard en tiempo real", improvement: "100% visible", color: "#8B5CF6" },
];

export function ErpImpact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto max-w-[1100px] px-5 py-14 md:px-12 md:py-24 lg:px-[116px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[clamp(36px,4vw,56px)] font-[650] leading-[1] tracking-[-0.6px]"
        >
          El impacto de un buen sistema.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.metric}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="rounded-2xl bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-medium text-white/70">{kpi.metric}</span>
                <span className="text-[13px] font-semibold" style={{ color: kpi.color }}>{kpi.improvement}</span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-[11px] text-white/30">Antes</div>
                  <div className="mt-1 text-[16px] text-white/50">{kpi.before}</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-white/20">
                  <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex-1 text-right">
                  <div className="text-[11px] text-white/30">Después</div>
                  <div className="mt-1 text-[16px] font-semibold text-white">{kpi.after}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
