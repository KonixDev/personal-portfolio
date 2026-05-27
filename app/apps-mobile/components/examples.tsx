"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const examples = [
  {
    name: "App de Streaming",
    type: "Android TV + Mobile",
    desc: "Plataforma tipo Netflix con catálogo, reproductor, perfiles de usuario, búsqueda y suscripciones. Compatible con control remoto y Chromecast.",
    tags: ["React Native", "Android TV", "Video Player", "Suscripciones"],
    color: "#6366F1",
  },
  {
    name: "Canal de TV en vivo",
    type: "Android TV + Mobile",
    desc: "App dedicada para un canal de televisión con streaming en vivo, programación, notificaciones y archivo de contenido bajo demanda.",
    tags: ["Kotlin", "HLS Streaming", "Push Notifications", "EPG"],
    color: "#EF4444",
  },
  {
    name: "App E-commerce",
    type: "iOS + Android",
    desc: "Tienda mobile con catálogo, carrito, pagos integrados (MercadoPago, tarjeta), seguimiento de pedidos y notificaciones push.",
    tags: ["React Native", "Pagos", "Push", "GPS Tracking"],
    color: "#22C55E",
  },
  {
    name: "App de Gestión",
    type: "iOS + Android",
    desc: "Panel mobile para gestionar equipos, tareas, clientes y cobros. Sincronización offline, reportes y dashboard con métricas en tiempo real.",
    tags: ["React Native", "Offline-first", "Dashboard", "API REST"],
    color: "#F59E0B",
  },
  {
    name: "App de Delivery",
    type: "iOS + Android",
    desc: "Plataforma con app para clientes, repartidores y panel admin. Seguimiento en tiempo real, pagos y sistema de calificaciones.",
    tags: ["React Native", "Maps", "Real-time", "Multi-app"],
    color: "#3B82F6",
  },
  {
    name: "App de Reservas",
    type: "iOS + Android",
    desc: "Sistema de turnos y reservas con calendario, recordatorios automáticos, pagos anticipados y perfil de profesional.",
    tags: ["Swift", "Calendar", "Pagos", "Notificaciones"],
    color: "#8B5CF6",
  },
];

export function Examples() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ejemplos" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Qué podemos construir.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Estos son ejemplos del tipo de apps que desarrollamos. Si tu idea no está en la lista, escribinos — seguro podemos hacerla.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div
                className="h-2 w-10 rounded-full"
                style={{ background: ex.color }}
              />
              <span className="text-[12px] font-medium text-[var(--color-text-tertiary)]">
                {ex.type}
              </span>
            </div>
            <h3 className="text-[18px] font-semibold tracking-tight">{ex.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
              {ex.desc}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {ex.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
                >
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
