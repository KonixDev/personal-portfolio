"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Pierdo el posicionamiento en Google si rediseño?",
    a: "No. Configuramos redirecciones 301 de cada URL vieja a la nueva, mantenemos la estructura de meta tags y mejoramos el SEO técnico. En la mayoría de los casos, el posicionamiento mejora después del rediseño porque el sitio carga más rápido y está mejor estructurado.",
  },
  {
    q: "¿Mi sitio actual sigue funcionando durante el rediseño?",
    a: "Sí. Construimos el nuevo sitio en un entorno separado. Tu sitio actual sigue online sin interrupciones hasta que el nuevo esté listo y aprobado por vos. El switch se hace en minutos.",
  },
  {
    q: "¿Puedo mantener mi dominio actual?",
    a: "Sí, siempre. El rediseño se publica en tu mismo dominio. Solo cambiamos a dónde apunta — el proceso es transparente para tus usuarios.",
  },
  {
    q: "¿Cuánto tarda un rediseño?",
    a: "Un refresh visual puede estar en 1–3 semanas. Un rediseño completo con nueva estructura, migración de contenido y SEO tarda 3–6 semanas. Migraciones de plataforma varían según la complejidad.",
  },
  {
    q: "¿Qué pasa con mi contenido actual?",
    a: "Lo migramos todo: textos, imágenes, productos, artículos de blog. Si el contenido necesita mejoras, te lo señalamos. No se pierde nada.",
  },
  {
    q: "¿Puedo editar el nuevo sitio yo mismo?",
    a: "Sí. Incluimos un panel de administración donde podés editar textos, imágenes y contenido sin tocar código. Te enseñamos a usarlo en una sesión de 30 minutos.",
  },
];

export function RedesignFaq() {
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
