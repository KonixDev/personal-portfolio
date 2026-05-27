"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Necesito una auditoría si mi sistema es pequeño?",
    a: "Sí. El 43% de los ciberataques apuntan a PyMEs precisamente porque asumen que nadie las va a atacar. Un security scan básico puede revelarte problemas críticos en horas.",
  },
  {
    q: "¿Van a romper algo durante el pentesting?",
    a: "No. Trabajamos en ambientes controlados y coordinamos todo con vos antes de ejecutar pruebas. Si hay riesgo de afectar un servicio en producción, lo hacemos en un entorno de prueba o en horarios de bajo tráfico.",
  },
  {
    q: "¿Qué recibo al final?",
    a: "Dos documentos: un reporte ejecutivo (sin jerga, para que cualquier persona entienda los riesgos) y un reporte técnico detallado (con evidencia, reproducción paso a paso, severidad CVSS y remediación específica para cada hallazgo).",
  },
  {
    q: "¿Pueden corregir las vulnerabilidades que encuentren?",
    a: "Sí. Podemos encargarnos de la remediación o entregarte el reporte para que tu equipo lo haga internamente. En ambos casos, hacemos un re-test gratuito para verificar que todo quedó cerrado.",
  },
  {
    q: "¿Firman acuerdo de confidencialidad?",
    a: "Sí, siempre. Firmamos NDA antes de empezar cualquier trabajo. Todo lo que encontramos queda estrictamente entre nosotros.",
  },
  {
    q: "¿Sirve para cumplir con normativas?",
    a: "Sí. Nuestros reportes están alineados con OWASP, y te ayudamos a cumplir con requisitos de ISO 27001, PCI-DSS o la normativa que aplique a tu industria.",
  },
];

export function SecurityFaq() {
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
        Preguntas frecuentes.
      </motion.h2>

      <div className="mt-16 w-full max-w-[720px]">
        {faqs.map((item, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
            className="group border-b border-[var(--color-border)] py-6 [&[open]>summary>.chevron]:rotate-45"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <span className="text-[17px] font-semibold tracking-tight text-[var(--color-text)]">{item.q}</span>
              <span className="chevron shrink-0 text-[20px] leading-none text-[var(--color-text-tertiary)] transition-transform duration-300">+</span>
            </summary>
            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
