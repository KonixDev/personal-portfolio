"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reqs = [
  { item: "Ícono de app (1024x1024)", covered: true },
  { item: "Screenshots para cada tamaño de pantalla", covered: true },
  { item: "Feature graphic / App Preview", covered: true },
  { item: "Descripción optimizada para ASO", covered: true },
  { item: "Política de privacidad publicada", covered: true },
  { item: "Clasificación de contenido / Age rating", covered: true },
  { item: "Privacy labels (Apple)", covered: true },
  { item: "Data safety section (Google)", covered: true },
  { item: "Certificado de firma del build", covered: true },
  { item: "Cumplimiento de guidelines de cada tienda", covered: true },
  { item: "Cuenta de developer configurada", covered: true },
  { item: "Resolución de rechazos", covered: true },
];

export function StoreRequirements() {
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
          Checklist completo.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-[20px] font-[440] leading-[1.3] text-white/55"
        >
          Todo lo que las tiendas piden. Cubierto por nosotros.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2">
          {reqs.map((r, i) => (
            <motion.div
              key={r.item}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.03 }}
              className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3.5"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                <circle cx="9" cy="9" r="9" fill="#22C55E" opacity="0.2" />
                <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[14px] text-white/75">{r.item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
