"use client";

import { site, waLink } from "@/lib/site-config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" ref={ref} className="grid place-items-center px-6 pt-20 pb-8 md:px-12 md:pt-24 md:pb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        ¿Empezamos?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[440px] text-center"
      >
        Una llamada de 30 minutos. Sin compromiso.
        Si encajamos, te pasamos la propuesta en 48hs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href={waLink("Hola Martín, quiero agendar una llamada para conversar un proyecto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Hablemos por WhatsApp
        </a>
        <a href={`mailto:${site.email}`} className="btn-secondary">
          {site.email}
        </a>
      </motion.div>
    </section>
  );
}
