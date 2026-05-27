"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Código fuente tuyo", desc: "Repositorio en tu cuenta. Sin dependencias ocultas, sin ataduras." },
  { title: "Publicación en tiendas", desc: "Subimos tu app a Play Store y App Store. Íconos, screenshots, proceso de aprobación — todo incluido." },
  { title: "Diseño UI/UX", desc: "Diseño de interfaces pensado para mobile. Navegación intuitiva, componentes nativos, modo oscuro." },
  { title: "Notificaciones push", desc: "Sistema de notificaciones configurado para mantener a tus usuarios activos." },
  { title: "Pagos integrados", desc: "MercadoPago, Stripe, compras in-app. Lo que necesite tu modelo de negocio." },
  { title: "Analytics y métricas", desc: "Sabé cuántos usuarios tenés, qué hacen y dónde se van. Datos reales desde el día uno." },
  { title: "Soporte post-lanzamiento", desc: "30 días de corrección de errores sin costo. Mantenimiento mensual opcional." },
  { title: "Actualizaciones OTA", desc: "Actualizaciones instantáneas sin pasar por la tienda para cambios de contenido y fixes urgentes." },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#22c55e" opacity="0.12" />
      <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
        Qué incluye tu app.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Todo esto viene incluido. Sin extras ni sorpresas.
      </motion.p>

      <div className="mt-12 grid w-full max-w-[900px] grid-cols-1 gap-x-16 gap-y-6 md:mt-16 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
            className="flex gap-3"
          >
            <div className="mt-0.5">
              <CheckIcon />
            </div>
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
