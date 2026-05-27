"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const engines = [
  {
    name: "PostgreSQL",
    slug: "postgresql",
    color: "#4169E1",
    desc: "Nuestra recomendación por defecto. Robusto, extensible, con JSON, full-text search y row-level security.",
    best: "SaaS, ERPs, multi-tenant, datos complejos",
  },
  {
    name: "MySQL",
    slug: "mysql",
    color: "#4479A1",
    desc: "El clásico. Rápido, estable y con un ecosistema enorme. Ideal si ya lo estás usando.",
    best: "E-commerce, WordPress, sistemas legacy",
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    color: "#47A248",
    desc: "Base documental. Flexible para datos que cambian de estructura frecuentemente.",
    best: "CMS, IoT, logs, datos no estructurados",
  },
  {
    name: "Redis",
    slug: "redis",
    color: "#DC382D",
    desc: "Cache y datos en memoria. Ultra rápido para sesiones, colas, rate limiting y datos temporales.",
    best: "Cache, sesiones, colas, real-time",
  },
];

export function DbEngines() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto max-w-[1100px] px-5 py-14 md:px-12 md:py-24 lg:px-[116px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[clamp(36px,4vw,56px)] font-[650] leading-[1] tracking-[-0.6px]"
        >
          Motores que manejamos.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {engines.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="rounded-2xl bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Image
                    src={`https://cdn.simpleicons.org/${e.slug}/${e.color.replace("#", "")}`}
                    alt={e.name}
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-[18px] font-semibold">{e.name}</h3>
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-white/55">{e.desc}</p>
              <p className="mt-3 text-[12px] font-medium text-white/35">
                Ideal para: <span className="text-white/55">{e.best}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
