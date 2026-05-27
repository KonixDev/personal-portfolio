"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Por qué un ERP a medida en vez de usar uno genérico?",
    a: "Los ERPs genéricos (SAP, Odoo, etc.) te obligan a adaptar tu negocio al software. Un sistema a medida se adapta a tu operación exacta — sin módulos que no usás, sin workarounds, sin licencias mensuales crecientes. Y es tuyo para siempre.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Un dashboard de métricas puede estar en 2–4 semanas. Un ERP con 3–5 módulos tarda entre 6 y 12 semanas. Entregamos módulo por módulo, así que podés empezar a usar el sistema antes de que esté 100% terminado.",
  },
  {
    q: "¿Pueden migrar mis datos desde planillas de Excel?",
    a: "Sí. Importamos datos desde Excel, CSV, bases de datos anteriores o cualquier formato que tengas. Limpiamos, validamos y cargamos todo en el nuevo sistema.",
  },
  {
    q: "¿Funciona con facturación electrónica AFIP/ARCA?",
    a: "Sí. Integramos con los web services de AFIP/ARCA para generar facturas electrónicas (A, B, C), notas de crédito y débito con CAE automático.",
  },
  {
    q: "¿Mi equipo va a poder usarlo sin ser técnico?",
    a: "Sí. Diseñamos interfaces simples pensadas para usuarios no técnicos. Incluimos una sesión de capacitación y documentación de uso con capturas de pantalla paso a paso.",
  },
  {
    q: "¿Puedo agregar módulos nuevos en el futuro?",
    a: "Sí. El sistema se diseña modular desde el inicio. Podés arrancar con ventas e inventario, y después agregar CRM, finanzas o lo que necesites sin reescribir nada.",
  },
];

export function ErpFaq() {
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
