"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RelatedService = { label: string; href: string; desc: string };

export function RelatedServices({ items }: { items: RelatedService[] }) {
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
        Servicios relacionados.
      </motion.h2>

      <div className="mt-12 grid w-full max-w-[1000px] grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
            className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-12px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold tracking-tight text-[var(--color-text)]">
                {item.label}
              </h3>
              <span className="text-[13px] text-[var(--color-text-tertiary)] opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </div>
            <p className="text-[13px] leading-[1.5] text-[var(--color-text-secondary)]">
              {item.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
