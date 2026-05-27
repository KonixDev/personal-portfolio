"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tasks = [
  {
    title: "Creamos tu cuenta de developer",
    desc: "Si no tenés cuenta en Google Play o App Store Connect, te guiamos paso a paso para crearla. La cuenta queda a tu nombre.",
  },
  {
    title: "Diseñamos los assets",
    desc: "Ícono de app, splash screen, screenshots para todos los tamaños de pantalla, feature graphic y app preview video.",
  },
  {
    title: "Escribimos la ficha de tienda",
    desc: "Título, descripción corta, descripción larga, keywords, categoría y clasificación de contenido. Optimizado para búsqueda.",
  },
  {
    title: "Configuramos compliance",
    desc: "Política de privacidad, declaración de permisos, privacy labels (Apple), data safety (Google), age rating.",
  },
  {
    title: "Subimos y enviamos a revisión",
    desc: "Compilamos el build final, lo firmamos y lo enviamos. Monitoreamos la revisión y resolvemos cualquier rechazo.",
  },
  {
    title: "Resolvemos rechazos",
    desc: "Si la tienda rechaza tu app, analizamos el motivo, hacemos los cambios y reenviamos. Incluido sin costo extra.",
  },
];

export function WhatWeDo() {
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
        Qué hacemos por vos.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Todo el proceso, de principio a fin. Vos solo aprobás.
      </motion.p>

      {/* Stepper layout */}
      <div className="mt-16 w-full max-w-[640px]">
        {tasks.map((task, i) => (
          <motion.div
            key={task.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="relative flex gap-6 pb-8 last:pb-0"
          >
            {i < tasks.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[var(--color-border)]" />
            )}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-inverse)] text-[13px] font-bold text-[var(--color-text-inverse)]">
              {i + 1}
            </div>
            <div className="pt-1.5">
              <h3 className="text-[16px] font-semibold tracking-tight">{task.title}</h3>
              <p className="mt-1 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{task.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
