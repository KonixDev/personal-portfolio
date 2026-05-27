"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Una landing page puede estar en 1–2 semanas. Una plataforma completa con usuarios, pagos y panel admin tarda entre 4 y 8 semanas. Todo depende del alcance, que definimos juntos en la primera llamada.",
  },
  {
    q: "¿Puedo actualizar el contenido yo mismo?",
    a: "Sí. Si tu proyecto lo requiere, incluimos un panel de administración donde podés editar textos, imágenes, productos o lo que necesites sin tocar código.",
  },
  {
    q: "¿Queda optimizado para Google?",
    a: "Sí. Todos los proyectos incluyen SEO técnico: meta tags, structured data, sitemap, robots.txt, y optimización de Core Web Vitals. Tu sitio va a cargar rápido y aparecer bien en buscadores.",
  },
  {
    q: "¿Funciona bien en celulares?",
    a: "Sí. Diseñamos mobile-first. Tu sitio va a funcionar perfecto en celulares, tablets y desktop. No es una versión recortada — es un diseño pensado para cada pantalla.",
  },
  {
    q: "¿Puedo conectarlo con otras herramientas?",
    a: "Sí. Integramos con MercadoPago, Stripe, WhatsApp, Google Analytics, email marketing (Mailchimp, Resend), CRMs, y cualquier servicio que tenga una API. Si tu herramienta tiene integración, la conectamos.",
  },
  {
    q: "¿Qué pasa si necesito cambios después de la entrega?",
    a: "Errores en los primeros 30 días se corrigen sin costo. Para mejoras o funcionalidades nuevas, ofrecemos mantenimiento mensual sin contrato. También podés contratar a cualquier desarrollador — el código es tuyo.",
  },
];

export function WebFaq() {
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
