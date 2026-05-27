"use client";

import { included } from "@/lib/site-config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = included.slice(0, 3);
const rest = included.slice(3);

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0">
      <circle cx="11" cy="11" r="11" fill="#22c55e" opacity="0.12" />
      <path d="M7 11.5L9.5 14L15 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Included() {
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
        Todo lo que incluye.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Cada proyecto viene con todo esto. Sin extras, sin letra chica.
      </motion.p>

      {/* Top 3 highlights — large cards */}
      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-8"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#22c55e12]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 10.5L8.5 13L14 7" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold tracking-tight text-[var(--color-text)]">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Remaining items — compact checklist in 2 columns */}
      <div className="mt-8 grid w-full max-w-[1100px] grid-cols-1 gap-x-12 gap-y-5 rounded-2xl border border-[var(--color-border)] bg-white px-8 py-8 md:grid-cols-2 md:px-12 md:py-10">
        {rest.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
            className="flex gap-3"
          >
            <CheckIcon />
            <div>
              <h4 className="text-[15px] font-semibold text-[var(--color-text)]">{item.title}</h4>
              <p className="mt-0.5 text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
