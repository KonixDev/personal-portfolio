"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const platforms = [
  {
    name: "iOS (iPhone & iPad)",
    desc: "Apps nativas con Swift o cross-platform con React Native. Publicación en App Store incluida.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M22.5 16.8c0-3.2 2.6-4.7 2.7-4.8-1.5-2.2-3.8-2.5-4.6-2.5-2-.2-3.8 1.2-4.8 1.2s-2.5-1.1-4.1-1.1c-2.1 0-4 1.2-5.1 3.1-2.2 3.8-.6 9.4 1.5 12.5 1 1.5 2.3 3.1 3.9 3.1 1.6-.1 2.2-1 4.1-1s2.4 1 4.1 1 2.7-1.5 3.7-3c1.2-1.7 1.6-3.3 1.7-3.4-.1 0-3.1-1.3-3.1-4.9zM19.6 7.4c.8-1 1.4-2.5 1.3-3.9-1.2 0-2.7.8-3.6 1.8-.8.9-1.5 2.3-1.3 3.7 1.4.1 2.8-.7 3.6-1.6z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Android (Phone & Tablet)",
    desc: "Apps con Kotlin nativo o React Native. Publicación en Play Store incluida.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 14v8a1 1 0 002 0v-8a1 1 0 00-2 0zm22 0v8a1 1 0 002 0v-8a1 1 0 00-2 0zM7 12.5v11a1.5 1.5 0 001.5 1.5h2v3.5a1.5 1.5 0 003 0V25h5v3.5a1.5 1.5 0 003 0V25h2a1.5 1.5 0 001.5-1.5v-11H7zm14.7-5.6l1.8-2.3a.4.4 0 00-.6-.5l-1.9 2.4A9.3 9.3 0 0016 5.5a9.3 9.3 0 00-5 1.5l-1.9-2.4a.4.4 0 00-.6.5l1.8 2.3A7.5 7.5 0 007 12h18a7.5 7.5 0 00-3.3-5.1zM12 10a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Android TV",
    desc: "Apps de streaming, canales de TV, entretenimiento. Control remoto, Leanback UI, Chromecast.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 22v4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 12l4 4m0-4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
];

export function Platforms() {
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
        Todas las plataformas.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Una app o las tres. Vos elegís dónde estar.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-3">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-bg-secondary)] text-[var(--color-text)]">
              {p.icon}
            </div>
            <h3 className="text-[18px] font-semibold tracking-tight">{p.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
