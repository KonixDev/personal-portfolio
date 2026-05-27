"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Sistema a medida", desc: "No es un software genérico. Cada pantalla, cada campo y cada reporte están diseñados para tu operación." },
  { title: "Multi-usuario con permisos", desc: "Cada persona ve lo que necesita. Roles configurables: admin, vendedor, contador, depósito, gerencia." },
  { title: "Reportes exportables", desc: "PDF, Excel, CSV. Reportes automáticos por email o disponibles en el dashboard en tiempo real." },
  { title: "Responsive", desc: "Accedé desde la computadora, tablet o celular. Tu panel funciona en cualquier pantalla." },
  { title: "Integraciones incluidas", desc: "AFIP/ARCA, bancos, MercadoPago, email, WhatsApp — lo que tu negocio necesite conectar." },
  { title: "Soporte post-lanzamiento", desc: "30 días de corrección de errores. Mantenimiento mensual opcional para mejoras continuas." },
];

function DashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#06B6D4" opacity="0.12" />
      <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
        Qué incluye tu sistema.
      </motion.h2>

      <div className="mt-12 grid w-full max-w-[900px] grid-cols-1 gap-x-16 gap-y-6 md:mt-16 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
            className="flex gap-3"
          >
            <div className="mt-0.5"><DashIcon /></div>
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
