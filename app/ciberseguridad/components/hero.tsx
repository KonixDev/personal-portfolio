"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function SecurityHero() {
  return (
    <section className="px-5 pt-[120px] pb-12 md:px-12 md:pt-[180px] md:pb-20 lg:px-[116px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-secondary)] px-4 py-2 text-[13px] font-medium text-[var(--color-text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
            Seguridad ofensiva y defensiva
          </div>
          <h1 className="text-showcase max-w-[520px]">
            Encontramos las fallas antes que los atacantes.
          </h1>
          <p className="text-body mt-6 max-w-[440px]">
            Auditorías de seguridad, pruebas de penetración y protección de infraestructura.
            Sabé exactamente dónde están tus puntos débiles.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hola Martín, necesito una auditoría de seguridad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar auditoría
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
              <span className="ml-2">↓</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-inverse)] p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#EF4444]" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B]" />
              <div className="h-3 w-3 rounded-full bg-[#22C55E]" />
              <span className="ml-3 text-[12px] font-mono text-white/40">security-audit.sh</span>
            </div>
            <div className="space-y-2 font-mono text-[13px] leading-[1.8]">
              <p className="text-white/40">$ scan --target sistema.com</p>
              <p className="text-[#22C55E]">✓ SSL/TLS configuration</p>
              <p className="text-[#22C55E]">✓ HTTP security headers</p>
              <p className="text-[#F59E0B]">⚠ CORS policy too permissive</p>
              <p className="text-[#EF4444]">✗ SQL injection in /api/users</p>
              <p className="text-[#EF4444]">✗ XSS reflected in search param</p>
              <p className="text-white/40 mt-4">Found 2 critical, 1 warning, 2 passed</p>
              <p className="text-white/40">Generating report...</p>
              <p className="text-[#22C55E]">✓ Report saved to audit-report.pdf</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
