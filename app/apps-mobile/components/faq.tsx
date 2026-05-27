"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Nativo o cross-platform? ¿Cuál me conviene?",
    a: "Si necesitás estar en iOS y Android con un presupuesto acotado, cross-platform (React Native) es la mejor opción — una base de código, dos plataformas. Si tu app requiere máximo rendimiento, acceso profundo al hardware (cámara, sensores, Bluetooth), o es un juego, nativo (Kotlin/Swift) es el camino. Te asesoramos en la primera llamada.",
  },
  {
    q: "¿Cuánto tarda en aprobarse una app en las tiendas?",
    a: "Google Play suele aprobar en 1–3 días. App Store tarda entre 1–7 días y es más estricta con las guidelines. Nosotros nos encargamos de cumplir todos los requisitos de ambas tiendas para evitar rechazos.",
  },
  {
    q: "¿Necesito una cuenta de desarrollador?",
    a: "Sí, pero si no la tenés, te ayudamos a crearla. Google Play cobra $25 USD (pago único) y Apple cobra $99 USD/año. La app se publica bajo tu nombre y tu cuenta.",
  },
  {
    q: "¿Puedo actualizar la app después sin depender de ustedes?",
    a: "Sí. El código es tuyo, la cuenta de la tienda es tuya. Te entregamos documentación para que cualquier desarrollador pueda continuar. Si querés que sigamos nosotros, ofrecemos mantenimiento mensual.",
  },
  {
    q: "¿Incluyen el diseño de la app?",
    a: "Sí. Diseñamos todas las pantallas, la navegación, los íconos y los assets para las tiendas. No necesitás traer un diseñador aparte.",
  },
  {
    q: "¿Hacen apps para Android TV?",
    a: "Sí. Desarrollamos apps de streaming, canales de TV en vivo, y entretenimiento para Android TV. Con soporte para control remoto, Leanback UI, y Chromecast.",
  },
];

export function MobileFaq() {
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
              <span className="text-[17px] font-semibold tracking-tight text-[var(--color-text)]">
                {item.q}
              </span>
              <span className="chevron shrink-0 text-[20px] leading-none text-[var(--color-text-tertiary)] transition-transform duration-300">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
              {item.a}
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
