"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Navegación con control remoto",
    desc: "Interfaz Leanback diseñada para D-pad. Focus management, animaciones de selección y navegación intuitiva sin mouse ni touch.",
  },
  {
    title: "Reproductor avanzado",
    desc: "HLS y DASH adaptativo, múltiples calidades, subtítulos, audio dual, picture-in-picture y reanudación desde donde dejaste.",
  },
  {
    title: "Chromecast y AirPlay",
    desc: "Enviá contenido desde el celular a la TV. Integración nativa con Google Cast y protocolo AirPlay.",
  },
  {
    title: "Suscripciones y pagos",
    desc: "Google Play Billing, planes mensuales/anuales, período de prueba, gestión de suscripciones y restauración de compras.",
  },
  {
    title: "App companion mobile",
    desc: "App mobile que funciona como segundo control: búsqueda por voz, teclado, cola de reproducción y configuración.",
  },
  {
    title: "Notificaciones y recomendaciones",
    desc: "Canal de recomendaciones en el home de Android TV, notificaciones de contenido nuevo y sugerencias personalizadas.",
  },
];

export function TvFeatures() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Funcionalidades clave.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Lo que diferencia una app de TV profesional de un prototipo.
      </motion.p>

      {/* Alternating left-right large feature rows */}
      <div className="mt-16 w-full max-w-[1000px] space-y-0">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className={"flex items-start gap-6 py-7 " + (i < features.length - 1 ? "border-b border-[var(--color-border)]" : "")}
          >
            <span className="mt-1 shrink-0 text-[28px] font-bold leading-none tracking-tight text-[var(--color-bg-tertiary)]">
              0{i + 1}
            </span>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
