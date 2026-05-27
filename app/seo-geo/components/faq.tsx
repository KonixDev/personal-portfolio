"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Cuánto tarda en verse resultados de SEO?",
    a: "Las mejoras técnicas (velocidad, meta tags, structured data) se reflejan en semanas. El posicionamiento por keywords puede tardar 2–6 meses dependiendo de la competencia. Te damos métricas claras desde el día uno para que veas el progreso.",
  },
  {
    q: "¿Qué es GEO y por qué me importa?",
    a: "GEO (Generative Engine Optimization) es la optimización para que tu negocio aparezca cuando la gente usa ChatGPT, Gemini, Perplexity u otros asistentes de IA para buscar servicios. También incluye búsquedas locales tipo 'cerca de mí'. Es el futuro del posicionamiento y ya está pasando.",
  },
  {
    q: "¿Necesito tener un blog para hacer SEO?",
    a: "No necesariamente. El SEO técnico y la optimización de tus páginas existentes pueden dar resultados enormes sin un blog. Si tu industria tiene volumen de búsqueda informacional, un blog ayuda, pero no es obligatorio. Te asesoramos según tu caso.",
  },
  {
    q: "¿Puedo hacer SEO si mi sitio fue hecho por otra persona?",
    a: "Sí. Podemos optimizar cualquier sitio existente. Si el sitio tiene limitaciones técnicas serias (ej: hecho en Wix sin acceso a código), te lo indicamos y buscamos la mejor solución dentro de lo posible.",
  },
  {
    q: "¿Cómo miden los resultados?",
    a: "Con datos reales: Google Search Console (posiciones, clics, impresiones), Google Analytics (tráfico, comportamiento), Lighthouse (performance), y herramientas de rank tracking. Te entregamos un reporte mensual con todo.",
  },
  {
    q: "¿Hacen link building?",
    a: "Sí, pero de forma orgánica y ética. Nada de compra de links ni técnicas que Google penalice. Trabajamos con directorios relevantes, menciones en medios, guest posting y estrategias de contenido que generan links naturalmente.",
  },
];

export function SeoFaq() {
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
