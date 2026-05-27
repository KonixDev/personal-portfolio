"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stores = [
  {
    name: "Google Play Store",
    platform: "Android",
    color: "#34A853",
    timeline: "1 — 3 días de revisión",
    cost: "$25 USD (único)",
    details: [
      "App Bundle (AAB) optimizado",
      "Ficha de tienda en español e inglés",
      "Screenshots para phone y tablet",
      "Feature graphic (1024x500)",
      "Clasificación de contenido",
      "Política de privacidad",
    ],
  },
  {
    name: "Apple App Store",
    platform: "iOS",
    color: "#000",
    timeline: "1 — 7 días de revisión",
    cost: "$99 USD / año",
    details: [
      "Build firmado con certificado",
      "Screenshots para todos los tamaños",
      "App Preview video (opcional)",
      "Metadata y keywords optimizados",
      "App Review Guidelines compliance",
      "Política de privacidad + privacy labels",
    ],
  },
];

export function BothStores() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tiendas" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Dos tiendas. Un solo proceso.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Publicamos en una o en ambas. Vos elegís.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">
        {stores.map((store, i) => (
          <motion.div
            key={store.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-[20px] font-semibold tracking-tight">{store.name}</h3>
                <span className="text-[13px] text-[var(--color-text-secondary)]">{store.platform}</span>
              </div>
              <div className="h-3 w-3 rounded-full" style={{ background: store.color }} />
            </div>

            <div className="mb-5 flex gap-4">
              <div className="rounded-lg bg-[var(--color-bg-secondary)] px-3 py-1.5">
                <div className="text-[10px] text-[var(--color-text-tertiary)]">Revisión</div>
                <div className="text-[13px] font-medium">{store.timeline}</div>
              </div>
              <div className="rounded-lg bg-[var(--color-bg-secondary)] px-3 py-1.5">
                <div className="text-[10px] text-[var(--color-text-tertiary)]">Cuenta</div>
                <div className="text-[13px] font-medium">{store.cost}</div>
              </div>
            </div>

            <ul className="space-y-2.5">
              {store.details.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[13.5px]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: store.color }} />
                  <span className="text-[var(--color-text-secondary)]">{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
