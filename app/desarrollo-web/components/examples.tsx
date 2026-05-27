"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const examples = [
  {
    name: "Plataforma de Gestión",
    type: "SaaS · Multi-tenant",
    desc: "Sistema con múltiples organizaciones, permisos por rol, dashboard con métricas en tiempo real, y API para integraciones externas.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Multi-tenant"],
    color: "#6366F1",
  },
  {
    name: "E-commerce Headless",
    type: "Tienda online",
    desc: "Catálogo de productos, carrito, checkout con MercadoPago y tarjeta, panel de pedidos, gestión de inventario y envíos.",
    tags: ["Next.js", "Stripe", "MercadoPago", "CMS"],
    color: "#EF4444",
  },
  {
    name: "Portal de Clientes",
    type: "Dashboard · B2B",
    desc: "Panel donde tus clientes ven sus facturas, descargan reportes, abren tickets de soporte y gestionan su cuenta.",
    tags: ["React", "Node.js", "PDF Export", "Auth"],
    color: "#22C55E",
  },
  {
    name: "Landing de Conversión",
    type: "Marketing · SEO",
    desc: "Página de venta de alta velocidad con formulario de contacto, integración CRM, analytics y A/B testing listo.",
    tags: ["Next.js", "SEO", "Analytics", "Forms"],
    color: "#F59E0B",
  },
  {
    name: "Plataforma Educativa",
    type: "SaaS · Contenido",
    desc: "Cursos online con video, progreso del alumno, certificados, pagos recurrentes y panel de instructor.",
    tags: ["Next.js", "Video", "Pagos", "Roles"],
    color: "#3B82F6",
  },
  {
    name: "Sistema de Reservas",
    type: "Marketplace · Booking",
    desc: "Calendario de disponibilidad, reservas online, pagos anticipados, notificaciones automáticas y panel de administración.",
    tags: ["React", "Calendar", "Pagos", "Email"],
    color: "#8B5CF6",
  },
];

export function WebExamples() {
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
        Ejemplos del tipo de proyectos web que desarrollamos. Si tu idea no está acá, escribinos.
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
              <div className="h-2 w-10 rounded-full" style={{ background: ex.color }} />
              <span className="text-[12px] font-medium text-[var(--color-text-tertiary)]">{ex.type}</span>
            </div>
            <h3 className="text-[18px] font-semibold tracking-tight">{ex.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{ex.desc}</p>
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
