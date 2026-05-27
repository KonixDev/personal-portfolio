"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "¿Puedo conectar el backend con mi app o web existente?",
    a: "Sí. Diseñamos APIs que se integran con cualquier frontend: web, mobile, desktop, o incluso otros sistemas. La API viene documentada con OpenAPI/Swagger para que la integración sea directa.",
  },
  {
    q: "¿Qué pasa si mi sistema necesita escalar?",
    a: "Diseñamos pensando en escalabilidad desde el día uno: cache con Redis, colas para procesos pesados, y una arquitectura que permite agregar servidores sin reescribir código. Si ya tenés un sistema que no escala, lo optimizamos.",
  },
  {
    q: "¿Incluyen base de datos?",
    a: "Sí. Diseñamos el esquema, las migraciones, los índices y las relaciones. Usamos PostgreSQL como default pero nos adaptamos a lo que ya tengas. Incluimos backups y estrategia de recuperación.",
  },
  {
    q: "¿Puedo seguir desarrollando el backend internamente después?",
    a: "Sí. El código es tuyo, documentado, tipado y con tests. Cualquier desarrollador Node.js/TypeScript puede continuarlo. No hay dependencias propietarias ni vendor lock-in.",
  },
  {
    q: "¿Trabajan con sistemas legacy?",
    a: "Sí. Podemos migrar tu sistema viejo a una arquitectura moderna por etapas, sin tirar todo abajo. También optimizamos sistemas existentes: queries lentas, cuellos de botella, falta de monitoreo.",
  },
  {
    q: "¿Qué diferencia hay entre el plan API y el Sistema Completo?",
    a: "El plan API te da el backend básico: endpoints, base de datos, autenticación y deploy. El Sistema Completo agrega colas de trabajo, integraciones con terceros, monitoreo, tests automatizados y CI/CD — todo lo que necesitás para producción real con usuarios.",
  },
];

export function BackendFaq() {
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
