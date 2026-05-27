"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Necesito tener una cuenta de developer?",
    a: "Sí, pero si no la tenés, te ayudamos a crearla. Google Play cobra $25 USD (pago único) y Apple cobra $99 USD/año. La cuenta queda a tu nombre — nosotros solo la usamos para subir tu app.",
  },
  {
    q: "¿Cuánto tarda en aprobarse mi app?",
    a: "Google Play suele aprobar en 1–3 días. App Store puede tardar entre 1–7 días y es más estricta. Si hay un rechazo, lo resolvemos y reenviamos sin costo extra.",
  },
  {
    q: "¿Qué pasa si la tienda rechaza mi app?",
    a: "Analizamos el motivo del rechazo, hacemos los cambios necesarios y reenviamos. Esto está incluido en el servicio — no te cobramos extra por rechazos.",
  },
  {
    q: "¿Pueden publicar una app que no desarrollaron ustedes?",
    a: "Sí. Si ya tenés la app desarrollada, nos encargamos de todo el proceso de publicación: assets, ficha, compliance y envío. Solo necesitamos el código fuente o el build compilado.",
  },
  {
    q: "¿La publicación incluye actualizaciones futuras?",
    a: "El servicio cubre la primera publicación. Para actualizaciones futuras, te dejamos una guía de cómo hacerlo, o podés contratarnos para gestionar cada update.",
  },
  {
    q: "¿Qué es ASO y por qué importa?",
    a: "App Store Optimization es como el SEO pero para tiendas de apps. Optimizamos título, keywords, screenshots y descripción para que tu app aparezca cuando la gente busca lo que vos ofrecés. Más visibilidad = más descargas orgánicas.",
  },
];

export function StoreFaq() {
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
