"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const metrics = [
  { label: "Response time", value: "4.2s", status: "critical" },
  { label: "Error rate", value: "12.3%", status: "warning" },
  { label: "DB queries", value: "847/req", status: "critical" },
  { label: "Memory usage", value: "89%", status: "warning" },
  { label: "Monthly cost", value: "$2,400", status: "warning" },
  { label: "Uptime (30d)", value: "96.2%", status: "ok" },
];

const statusColor = { critical: "#EF4444", warning: "#F59E0B", ok: "#22C55E" };

export function OptHero() {
  return (
    <section className="grid place-items-center px-5 pt-[120px] pb-12 md:px-6 md:pt-[180px] md:pb-20">
      <div className="grid place-items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex h-[86px] w-[86px] items-center justify-center rounded-[21px] bg-[var(--color-bg-inverse)]"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M22 8v6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 30v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            <path d="M8 22h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            <path d="M30 22h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            <circle cx="22" cy="22" r="8" stroke="#22C55E" strokeWidth="2" fill="none" />
            <circle cx="22" cy="22" r="3" fill="#22C55E" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-showcase mt-6 max-w-[800px] text-center md:mt-8"
        >
          Tu sistema, funcionando como debería.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-body mt-6 max-w-[540px] text-center"
        >
          Optimización de velocidad, bases de datos, infraestructura y costos.
          Sin reconstruir desde cero.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
        >
          <a
            href={waLink("Hola Martín, necesito optimizar mi sistema.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar diagnóstico
          </a>
          <a href="#sintomas" className="btn-secondary">
            ¿Mi sistema tiene problemas?
            <span className="ml-2">↓</span>
          </a>
        </motion.div>
      </div>

      {/* Diagnostic dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="mt-16 w-full max-w-[700px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-inverse)] p-6 md:p-8"
      >
        <div className="mb-5 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#EF4444]" />
          <span className="font-mono text-[12px] text-white/40">system-diagnostic · live</span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-white/5 px-4 py-3">
              <div className="text-[11px] text-white/35">{m.label}</div>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-mono text-[18px] font-semibold text-white">{m.value}</span>
                <span className="h-2 w-2 rounded-full" style={{ background: statusColor[m.status as keyof typeof statusColor] }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
