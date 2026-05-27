"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿En qué dispositivos funciona?",
    a: "En cualquier Smart TV con Android TV o Google TV: Sony, TCL, Xiaomi, Nvidia Shield, Chromecast con Google TV, y más. También en TV boxes genéricos con Android.",
  },
  {
    q: "¿Necesito una app mobile además de la de TV?",
    a: "Depende del proyecto. Para una plataforma de streaming completa, sí recomendamos una app companion mobile que sirva como control remoto, buscador y segundo pantalla. Para un canal simple de TV en vivo, no es necesario.",
  },
  {
    q: "¿Cómo funciona el streaming en vivo?",
    a: "Usamos protocolos HLS o DASH que se adaptan a la velocidad de internet del usuario. Podés transmitir desde un encoder (OBS, vMix) o desde tu infraestructura actual. Configuramos todo para que la latencia sea mínima.",
  },
  {
    q: "¿Puedo monetizar con suscripciones?",
    a: "Sí. Integramos Google Play Billing para suscripciones mensuales, anuales, o compras únicas. También podemos implementar modelos freemium (gratis con ads + premium sin ads).",
  },
  {
    q: "¿Cuánto tarda en desarrollarse?",
    a: "Un canal simple o app de contenido: 6–8 semanas. Una plataforma de streaming completa con app companion: 10–14 semanas. Proyectos custom varían según la complejidad.",
  },
  {
    q: "¿También publican en Fire TV (Amazon)?",
    a: "Fire TV usa Android como base, así que en la mayoría de los casos la misma app funciona en ambas plataformas con ajustes menores. Lo incluimos si lo necesitás.",
  },
];

export function TvFaq() {
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
