"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const modules = [
  { name: "Ventas y facturación", desc: "Cotizaciones, órdenes, facturas electrónicas y cuentas por cobrar. Todo conectado.", icon: "📊" },
  { name: "Inventario", desc: "Stock en tiempo real, múltiples depósitos, alertas de stock bajo y movimientos auditados.", icon: "📦" },
  { name: "CRM", desc: "Clientes, leads, pipeline de ventas, seguimiento de oportunidades y tareas asignadas.", icon: "👥" },
  { name: "Compras y proveedores", desc: "Órdenes de compra, cuentas por pagar, comparación de proveedores y aprobaciones.", icon: "🛒" },
  { name: "Reportes y métricas", desc: "Dashboards en tiempo real, reportes exportables, KPIs configurables y alertas automáticas.", icon: "📈" },
  { name: "Recursos humanos", desc: "Empleados, asistencia, vacaciones, liquidación de sueldos y organigrama.", icon: "🏢" },
  { name: "Finanzas", desc: "Flujo de caja, conciliación bancaria, presupuestos y proyecciones financieras.", icon: "💰" },
  { name: "Integraciones", desc: "MercadoPago, bancos, AFIP/ARCA, email marketing, WhatsApp y APIs de terceros.", icon: "🔌" },
];

export function ErpModules() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modulos" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Módulos disponibles.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Elegí los que necesitás. Cada módulo se integra con los demás.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5"
          >
            <span className="text-[24px]">{m.icon}</span>
            <h3 className="text-[15px] font-semibold tracking-tight">{m.name}</h3>
            <p className="text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
