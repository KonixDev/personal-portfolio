"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const examples = [
  {
    name: "API de Pagos",
    desc: "Procesamiento de cobros con múltiples proveedores, reintentos automáticos, webhooks y conciliación de transacciones.",
    tags: ["Stripe", "MercadoPago", "Webhooks", "Idempotency"],
    color: "#6366F1",
  },
  {
    name: "Sistema de Notificaciones",
    desc: "Push, email, SMS y WhatsApp desde un solo sistema. Templates, scheduling, segmentación y métricas de entrega.",
    tags: ["BullMQ", "Redis", "Templates", "Multi-channel"],
    color: "#22C55E",
  },
  {
    name: "Motor de Búsqueda",
    desc: "Búsqueda full-text con filtros, facetas, autocompletado y ranking personalizado sobre catálogos grandes.",
    tags: ["Elasticsearch", "PostgreSQL FTS", "Ranking"],
    color: "#F59E0B",
  },
  {
    name: "Plataforma Multi-tenant",
    desc: "Arquitectura donde cada organización tiene sus datos aislados, roles, configuración propia y facturación independiente.",
    tags: ["Row-level security", "Roles", "Billing", "Isolation"],
    color: "#3B82F6",
  },
];

export function BackendExamples() {
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
        Ejemplos concretos.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Sistemas que ya construimos o que podemos armar para vos.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-6"
          >
            <div className="h-2 w-10 rounded-full" style={{ background: ex.color }} />
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
