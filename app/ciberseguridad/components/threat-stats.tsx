"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "43%", label: "de ataques apuntan a PyMEs" },
  { value: "287", label: "días promedio para detectar una brecha" },
  { value: "$4.5M", label: "costo promedio de un data breach" },
  { value: "95%", label: "de brechas son por error humano o configuración" },
];

export function ThreatStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-14 md:grid-cols-4 md:gap-12 md:px-12 md:py-20 lg:px-[116px]">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="flex flex-col gap-2"
          >
            <span className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight">{s.value}</span>
            <span className="text-[13px] leading-[1.4] text-white/50">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
