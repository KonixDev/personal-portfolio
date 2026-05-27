"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Necesitan acceso a mi código y servidores?",
    a: "Sí, necesitamos acceso de lectura al código y a las métricas de infraestructura para hacer el diagnóstico. Todo bajo NDA. Para la implementación necesitamos acceso de escritura, que podemos hacer por PR reviews si preferís controlar cada cambio.",
  },
  {
    q: "¿Pueden optimizar sin reescribir todo?",
    a: "Sí, esa es la idea. No tiramos tu sistema y empezamos de cero. Identificamos los cuellos de botella específicos y los solucionamos quirúrgicamente. La mayoría de las mejoras más grandes vienen de indexar bien la base de datos y agregar cache — no de reescribir.",
  },
  {
    q: "¿Cuánta mejora puedo esperar?",
    a: "Depende de qué tan mal esté. Sistemas con queries sin índices suelen mejorar 10-50x en tiempo de respuesta. Costos de infraestructura se reducen 40-70% en promedio. Te damos números reales en el diagnóstico antes de comprometernos.",
  },
  {
    q: "¿Qué pasa si la optimización no mejora nada?",
    a: "El diagnóstico siempre entrega valor — sabés exactamente dónde están los problemas. Si las optimizaciones propuestas no logran mejoras medibles, no te cobramos la implementación. Medimos todo con antes y después.",
  },
  {
    q: "¿Trabajan con cualquier stack tecnológico?",
    a: "Trabajamos principalmente con Node.js, Python, PostgreSQL, MySQL, Redis y servicios cloud (AWS, GCP, Railway, Vercel). Si tu stack es diferente, evaluamos caso por caso en la primera llamada.",
  },
  {
    q: "¿Pueden ayudar con costos de AWS/GCP que se fueron de las manos?",
    a: "Sí. Revisamos cada servicio, identificamos recursos sobredimensionados, instancias que deberían ser spot/reserved, almacenamiento sin usar y tráfico que se puede cachear. Típicamente reducimos entre 40-70% sin perder performance.",
  },
];

export function OptFaq() {
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
