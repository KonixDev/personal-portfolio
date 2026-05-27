"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const types = [
  {
    name: "Landing Pages",
    desc: "Páginas de venta y captación de leads. Ultra rápidas, optimizadas para conversión y posicionamiento en Google.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="2" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Plataformas SaaS",
    desc: "Sistemas multi-usuario con suscripciones, panel admin, roles, invitaciones y cobros recurrentes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 8V6a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
        <path d="M16 20v3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "ERPs & Dashboards",
    desc: "Paneles de gestión interna: inventario, facturación, reportes, métricas en tiempo real, integraciones.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="17" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="4" y="17" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="17" y="17" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    desc: "Tiendas online con catálogo, carrito, pagos, gestión de pedidos y conexión con tu sistema de inventario.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 6h3l3 14h12l3-10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="14" cy="24" r="2" fill="currentColor" />
        <circle cx="22" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export function WebTypes() {
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
        Qué tipo de web necesitás.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Desde una página simple hasta un sistema complejo. Vos elegís el alcance.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {types.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-bg-secondary)] text-[var(--color-text)]">
              {t.icon}
            </div>
            <h3 className="text-[18px] font-semibold tracking-tight">{t.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
