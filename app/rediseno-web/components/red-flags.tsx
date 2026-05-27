"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const flags = [
  "Tu sitio tarda más de 3 segundos en cargar",
  "Se ve mal en celulares",
  "No aparece en Google para lo que vendés",
  "Los visitantes se van sin contactarte",
  "El diseño parece de hace 5 años",
  "No podés editar el contenido vos mismo",
  "Tus competidores tienen mejor presencia online",
  "Querés sumar funcionalidades y no se puede",
];

export function RedFlags() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="senales" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Señales de que necesitás un rediseño.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Si te identificás con 2 o más, es momento de actuar.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[800px] grid-cols-1 gap-0 md:grid-cols-2">
        {flags.map((flag, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            className={
              "flex items-center gap-4 px-6 py-5 " +
              (i < flags.length - 2 ? "border-b " : "") +
              (i % 2 === 0 ? "md:border-r " : "") +
              "border-[var(--color-border)]"
            }
          >
            <span className="shrink-0 text-[18px] text-[#EF4444]">✗</span>
            <span className="text-[15px] leading-[1.45] text-[var(--color-text)]">{flag}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
