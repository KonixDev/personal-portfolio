"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Qué motor de base de datos me recomiendan?",
    a: "PostgreSQL para la mayoría de los casos — es el más versátil, robusto y tiene las mejores features para SaaS y multi-tenant. Si ya usás MySQL o MongoDB y funciona, no te vamos a forzar a migrar. Elegimos la herramienta que mejor resuelve tu problema, no la que está de moda.",
  },
  {
    q: "¿Pueden optimizar mi base sin cambiar el código de mi aplicación?",
    a: "En muchos casos sí. Los índices, la configuración del motor, el connection pooling y el cache se pueden mejorar sin tocar el código. Si hay queries que necesitan reescribirse, te lo indicamos en el reporte y coordinamos con tu equipo.",
  },
  {
    q: "¿Cuánto puede mejorar la performance?",
    a: "Bases de datos sin índices optimizados suelen mejorar entre 10x y 100x en queries específicas. El impacto real depende de tu caso — te damos números concretos en el diagnóstico antes de comprometernos con nada.",
  },
  {
    q: "¿La migración tiene riesgo de perder datos?",
    a: "No si se hace bien. Nuestro proceso incluye: migración a un entorno de prueba primero, verificación de integridad registro por registro, plan de rollback, y cutover con zero downtime. Si algo no cuadra, revertimos.",
  },
  {
    q: "¿Incluyen backups?",
    a: "Sí. Configuramos backups automáticos diarios con retención configurable, verificación periódica de que los backups son restaurables, y point-in-time recovery si tu motor lo soporta.",
  },
  {
    q: "¿Pueden trabajar con mi DBA o equipo interno?",
    a: "Sí. Podemos hacer el trabajo completo o funcionar como consultores que analizan, recomiendan y tu equipo implementa. Nos adaptamos a tu forma de trabajar.",
  },
];

export function DbFaq() {
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
        Preguntas frecuentes.
      </motion.h2>

      <div className="mt-16 w-full max-w-[720px]">
        {faqs.map((item, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
            className="group border-b border-[var(--color-border)] py-6 [&[open]>summary>.chevron]:rotate-45"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <span className="text-[17px] font-semibold tracking-tight text-[var(--color-text)]">{item.q}</span>
              <span className="chevron shrink-0 text-[20px] leading-none text-[var(--color-text-tertiary)] transition-transform duration-300">+</span>
            </summary>
            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
