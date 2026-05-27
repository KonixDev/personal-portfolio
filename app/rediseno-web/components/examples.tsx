"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const examples = [
  {
    name: "Sitio institucional",
    desc: "Tu empresa merece una presencia online que refleje la calidad de tu trabajo. Rediseñamos la identidad digital completa.",
    tags: ["Branding", "SEO", "Responsive", "CMS"],
  },
  {
    name: "E-commerce",
    desc: "Tienda que carga lento = ventas perdidas. Mejoramos velocidad, experiencia de compra y checkout.",
    tags: ["Performance", "UX", "Checkout", "Mobile"],
  },
  {
    name: "Landing de producto",
    desc: "Convertí visitantes en clientes. Diseño enfocado en conversión, con copy claro y CTAs estratégicos.",
    tags: ["Conversión", "A/B Testing", "Analytics", "SEO"],
  },
  {
    name: "Portal o plataforma",
    desc: "Interfaces complejas que se volvieron difíciles de usar. Simplificamos la experiencia sin perder funcionalidad.",
    tags: ["UX Research", "Simplificación", "Dashboard", "Roles"],
  },
];

export function RedesignExamples() {
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
        Qué rediseñamos.
      </motion.h2>

      <div className="mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-2">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <h3 className="text-[18px] font-semibold tracking-tight">{ex.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{ex.desc}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {ex.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
