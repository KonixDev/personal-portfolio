"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { title: "Reporte ejecutivo", desc: "Resumen claro para directivos: qué encontramos, qué riesgo representa, qué hay que hacer. Sin jerga técnica." },
  { title: "Reporte técnico detallado", desc: "Cada vulnerabilidad documentada con evidencia, pasos de reproducción, severidad (CVSS) y remediación específica." },
  { title: "Acuerdo de confidencialidad", desc: "Todo lo que encontramos queda entre nosotros. Firmamos NDA antes de empezar." },
];

const checklist = [
  { title: "Pruebas automatizadas y manuales", desc: "No dependemos solo de herramientas — un analista revisa manualmente cada hallazgo." },
  { title: "Re-test incluido", desc: "Después de que corrijas (o corrijamos), verificamos que las vulnerabilidades estén efectivamente cerradas." },
  { title: "Priorización por riesgo real", desc: "No te damos una lista de 200 items. Priorizamos por impacto real en tu negocio." },
  { title: "Cumplimiento normativo", desc: "Te ayudamos a cumplir con estándares como OWASP, ISO 27001, PCI-DSS según tu industria." },
  { title: "Soporte post-auditoría", desc: "30 días para consultas sobre el reporte y la remediación. Sin costo adicional." },
];

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0">
      <path d="M11 2L3 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" fill="#22c55e" opacity="0.12" />
      <path d="M8 11l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatYouGet() {
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
        Qué recibís.
      </motion.h2>

      <div className="mt-12 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
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
            <h3 className="text-[18px] font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid w-full max-w-[1100px] grid-cols-1 gap-x-16 gap-y-5 rounded-2xl border border-[var(--color-border)] bg-white px-5 py-6 md:grid-cols-2 md:px-12 md:py-10">
        {checklist.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
            className="flex gap-3"
          >
            <div className="mt-0.5"><ShieldIcon /></div>
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
