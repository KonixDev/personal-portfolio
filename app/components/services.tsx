"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
const categories = [
  {
    tab: "Mobile & TV",
    heading: "Apps que tus usuarios quieren abrir.",
    desc: "iOS, Android y Android TV. Nativas o cross-platform. Publicación en Play Store y App Store incluida.",
    items: ["Apps Mobile", "Android TV", "Play Store & App Store"],
    visual: MobileVisual,
  },
  {
    tab: "Web & Backend",
    heading: "Sistemas que escalan con tu negocio.",
    desc: "Desde landing pages hasta ERPs complejos. APIs, bases de datos, dashboards, integraciones.",
    items: ["Desarrollo Web", "Sistemas Backend", "Base de Datos", "ERP & Dashboards"],
    visual: WebVisual,
  },
  {
    tab: "Seguridad & Optimización",
    heading: "Tu sistema, más rápido y más seguro.",
    desc: "Auditorías de seguridad, optimización de rendimiento, posicionamiento en buscadores, y rediseño de arquitectura.",
    items: ["Ciberseguridad", "Optimización de Sistemas", "SEO & GEO", "Rediseño Web"],
    visual: SecurityVisual,
  },
] as const;

export function Services() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const cat = categories[active];
  const Visual = cat.visual;

  return (
    <section id="servicios" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Todo lo que necesitás, en un solo lugar.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10 flex items-center gap-2 rounded-full bg-[var(--color-bg-secondary)] p-1"
      >
        {categories.map((c, i) => (
          <button
            key={c.tab}
            onClick={() => setActive(i)}
            className={
              "rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all " +
              (active === i
                ? "bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]")
            }
          >
            {c.tab}
          </button>
        ))}
      </motion.div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2"
      >
        <div>
          <h3 className="text-title">{cat.heading}</h3>
          <p className="text-body-sm mt-4 max-w-[440px]">{cat.desc}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[var(--color-bg-secondary)] px-4 py-2 text-[13px] font-medium text-[var(--color-text)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Visual />
        </div>
      </motion.div>
    </section>
  );
}

function MobileVisual() {
  return (
    <div className="relative flex gap-4">
      <PhoneMockup label="iOS App" color="#6366F1">
        <div className="space-y-3 p-4">
          <div className="h-3 w-20 rounded bg-white/20" />
          <div className="h-24 rounded-xl bg-white/10" />
          <div className="h-3 w-16 rounded bg-white/15" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 rounded-lg bg-white/10" />
            <div className="h-14 rounded-lg bg-white/10" />
          </div>
        </div>
      </PhoneMockup>
      <PhoneMockup label="Android" color="#22C55E" offset>
        <div className="space-y-3 p-4">
          <div className="h-3 w-24 rounded bg-white/20" />
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-full bg-white/15" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 w-full rounded bg-white/15" />
              <div className="h-2.5 w-3/4 rounded bg-white/10" />
            </div>
          </div>
          <div className="h-20 rounded-xl bg-white/10" />
          <div className="h-10 rounded-lg bg-white/20" />
        </div>
      </PhoneMockup>
    </div>
  );
}

function PhoneMockup({ label, color, children, offset = false }: { label: string; color: string; children: React.ReactNode; offset?: boolean }) {
  return (
    <div className={"w-[160px] rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-1.5 " + (offset ? "mt-8" : "")}>
      <div className="overflow-hidden rounded-[22px]" style={{ background: color }}>
        <div className="flex items-center justify-center py-2">
          <div className="h-1.5 w-12 rounded-full bg-white/30" />
        </div>
        {children}
        <div className="flex items-center justify-center py-3">
          <span className="text-[10px] font-medium text-white/50">{label}</span>
        </div>
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="ml-4 h-5 flex-1 rounded bg-[var(--color-bg-tertiary)]" />
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-[var(--color-bg-inverse)]" />
          <div className="h-3 w-24 rounded bg-[var(--color-bg-tertiary)]" />
          <div className="ml-auto h-3 w-16 rounded bg-[var(--color-bg-tertiary)]" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2 rounded-xl bg-white p-3">
              <div className="h-16 rounded-lg bg-[var(--color-bg-secondary)]" />
              <div className="h-2 w-full rounded bg-[var(--color-bg-tertiary)]" />
              <div className="h-2 w-2/3 rounded bg-[var(--color-bg-tertiary)]" />
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="h-20 flex-1 rounded-xl bg-white" />
          <div className="h-20 w-1/3 rounded-xl bg-[var(--color-bg-inverse)]" />
        </div>
      </div>
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="w-full max-w-[400px] space-y-3">
      {[
        { label: "OWASP Top 10", status: "Passed", color: "#22C55E" },
        { label: "SQL Injection", status: "0 vulnerabilities", color: "#22C55E" },
        { label: "XSS Protection", status: "Passed", color: "#22C55E" },
        { label: "Performance Score", status: "96 / 100", color: "#3B82F6" },
        { label: "Core Web Vitals", status: "All green", color: "#22C55E" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4"
        >
          <span className="text-[14px] font-medium text-[var(--color-text)]">{item.label}</span>
          <span className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: item.color }}>
            <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
