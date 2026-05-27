"use client";

import { waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function BackendHero() {
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
            <rect x="8" y="6" width="28" height="8" rx="2" stroke="#fff" strokeWidth="1.8" fill="none" />
            <rect x="8" y="18" width="28" height="8" rx="2" stroke="#fff" strokeWidth="1.8" fill="none" />
            <rect x="8" y="30" width="28" height="8" rx="2" stroke="#fff" strokeWidth="1.8" fill="none" />
            <circle cx="13" cy="10" r="1.5" fill="#22C55E" />
            <circle cx="13" cy="22" r="1.5" fill="#F59E0B" />
            <circle cx="13" cy="34" r="1.5" fill="#3B82F6" />
            <path d="M30 10h2M30 22h2M30 34h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-showcase mt-6 max-w-[800px] text-center md:mt-8"
        >
          El motor que hace funcionar tu producto.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-body mt-6 max-w-[540px] text-center"
        >
          APIs, bases de datos, colas de trabajo, integraciones y la infraestructura
          que mantiene todo funcionando. Lo que tus usuarios no ven pero necesitan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
        >
          <a
            href={waLink("Hola Martín, necesito desarrollar un sistema backend.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Empezar mi proyecto
          </a>
          <a href="#servicios" className="btn-secondary">
            Ver servicios
            <span className="ml-2">↓</span>
          </a>
        </motion.div>
      </div>

      {/* Architecture diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="mt-16 w-full max-w-[800px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 md:p-10"
      >
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0">
          {["Cliente", "API Gateway", "Servicios", "Base de datos"].map((label, i) => (
            <div key={label} className="flex items-center gap-3 md:gap-0">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[var(--color-text)]">
                  {[ClientIcon, ApiIcon, ServiceIcon, DbIcon][i]()}
                </div>
                <span className="text-[12px] font-medium text-[var(--color-text-secondary)]">{label}</span>
              </div>
              {i < 3 && (
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="mx-2 hidden text-[var(--color-text-tertiary)] md:block">
                  <path d="M0 6h32m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ClientIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M12 18h.01" /></svg>;
}
function ApiIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h16M12 4v16" strokeLinecap="round" /><circle cx="12" cy="12" r="3" /></svg>;
}
function ServiceIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
}
function DbIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></svg>;
}
