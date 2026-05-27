"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  { metric: "Tiempo de respuesta", before: "4.2s", after: "280ms", improvement: "15x más rápido", barBefore: 85, barAfter: 6 },
  { metric: "Costo mensual de infra", before: "$2,400", after: "$680", improvement: "72% menos", barBefore: 100, barAfter: 28 },
  { metric: "Error rate", before: "12.3%", after: "0.1%", improvement: "99% menos errores", barBefore: 60, barAfter: 2 },
  { metric: "Queries por request", before: "847", after: "12", improvement: "70x menos queries", barBefore: 95, barAfter: 3 },
  { metric: "Lighthouse score", before: "34", after: "96", improvement: "De rojo a verde", barBefore: 34, barAfter: 96 },
];

export function Results() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-12 md:py-24 lg:px-[116px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[clamp(36px,4vw,56px)] font-[650] leading-[1] tracking-[-0.6px]"
        >
          Resultados típicos.
        </motion.h2>

        <div className="mt-14 space-y-8">
          {results.map((r, i) => (
            <motion.div
              key={r.metric}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className="mb-3 flex items-end justify-between">
                <span className="text-[15px] font-medium text-white/70">{r.metric}</span>
                <span className="text-[13px] font-semibold text-[#22C55E]">{r.improvement}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex items-center gap-3">
                    <span className="w-14 shrink-0 text-right font-mono text-[13px] text-white/40">{r.before}</span>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-[#EF4444]"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${r.barBefore}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-14 shrink-0 text-right font-mono text-[13px] text-white">{r.after}</span>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-[#22C55E]"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${r.barAfter}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
