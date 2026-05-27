"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ErpHero() {
  return (
    <section className="px-5 pt-[120px] pb-12 md:px-12 md:pt-[180px] md:pb-20 lg:px-[116px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-secondary)] px-4 py-2 text-[13px] font-medium text-[var(--color-text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
            Gestión interna · Reportes · Métricas
          </div>
          <h1 className="text-showcase max-w-[520px]">
            Tu negocio entero, en un solo panel.
          </h1>
          <p className="text-body mt-6 max-w-[440px]">
            ERPs, dashboards y sistemas de gestión diseñados a medida.
            Inventario, facturación, CRM, reportes y métricas en tiempo real.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hola Martín, necesito un ERP o dashboard a medida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Empezar mi proyecto
            </a>
            <a href="#modulos" className="btn-secondary">
              Ver módulos
              <span className="ml-2">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="hidden lg:block"
        >
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="ml-4 h-5 flex-1 rounded bg-[var(--color-bg-secondary)]" />
            </div>
            <div className="flex">
              {/* Sidebar */}
              <div className="w-[140px] shrink-0 border-r border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 space-y-3">
                <div className="h-6 w-20 rounded bg-[var(--color-bg-tertiary)]" />
                <div className="space-y-2">
                  {["Dashboard", "Ventas", "Inventario", "Clientes", "Reportes"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded bg-[var(--color-bg-tertiary)]" />
                      <span className="text-[10px] text-[var(--color-text-tertiary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Main area */}
              <div className="flex-1 p-5 space-y-4">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Ventas hoy", value: "$12,450", color: "#22C55E" },
                    { label: "Pedidos", value: "34", color: "#3B82F6" },
                    { label: "Stock bajo", value: "7", color: "#EF4444" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-lg bg-[var(--color-bg-secondary)] p-2.5">
                      <div className="text-[8px] text-[var(--color-text-tertiary)]">{kpi.label}</div>
                      <div className="mt-0.5 text-[14px] font-bold" style={{ color: kpi.color }}>{kpi.value}</div>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="h-24 rounded-lg bg-[var(--color-bg-secondary)] p-3">
                  <div className="flex h-full items-end gap-1.5">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-[#06B6D4]" style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }} />
                    ))}
                  </div>
                </div>
                {/* Table rows */}
                <div className="space-y-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 rounded bg-[var(--color-bg-secondary)] px-3 py-2">
                      <div className="h-2 w-12 rounded bg-[var(--color-bg-tertiary)]" />
                      <div className="h-2 flex-1 rounded bg-[var(--color-bg-tertiary)]" />
                      <div className="h-2 w-16 rounded bg-[var(--color-bg-tertiary)]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
