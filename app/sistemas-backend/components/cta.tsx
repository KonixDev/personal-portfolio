"use client";

import { waLink } from "@/lib/site-config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BackendCta() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="grid place-items-center px-5 pt-14 pb-12 md:px-12 md:pt-24 md:pb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        ¿Necesitás un backend sólido?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[440px] text-center"
      >
        Una llamada de 30 minutos. Te contamos qué arquitectura necesita tu proyecto y en cuánto tiempo lo tenés funcionando.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
      >
        <a
          href={waLink("Hola Martín, necesito desarrollar un sistema backend.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Hablemos por WhatsApp
        </a>
        <a href="/" className="btn-secondary">
          Ver todos los servicios
        </a>
      </motion.div>
    </section>
  );
}
