"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const scores = [
  { label: "Lighthouse Performance", before: 34, after: 96, color: "#22C55E" },
  { label: "Lighthouse SEO", before: 52, after: 100, color: "#3B82F6" },
  { label: "Lighthouse Accessibility", before: 68, after: 98, color: "#8B5CF6" },
  { label: "Lighthouse Best Practices", before: 60, after: 95, color: "#F59E0B" },
];

function ScoreCircle({ score, color, size = 80 }: { score: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`${color}15`} strokeWidth="4" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="4" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[18px] font-bold" style={{ color }}>{score}</span>
    </div>
  );
}

export function SeoResults() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-12 md:py-24 lg:px-[116px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[clamp(36px,4vw,56px)] font-[650] leading-[1] tracking-[-0.6px]"
        >
          Resultados que medimos.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-[20px] font-[440] leading-[1.3] text-white/55"
        >
          Scores reales de Lighthouse. Antes y después de optimizar.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {scores.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white/5 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-white/30">Antes</span>
                  <span className="mt-1 text-[20px] font-bold text-white/30">{s.before}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/20">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <ScoreCircle score={s.after} color={s.color} size={64} />
              </div>
              <span className="text-center text-[12px] font-medium text-white/50">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
