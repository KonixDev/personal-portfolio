"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stacks = [
  {
    label: "Cross-platform",
    desc: "Una base de código, todas las plataformas. Ideal para llegar a iOS y Android al mismo tiempo.",
    techs: [
      { name: "React Native", slug: "react", color: "#61DAFB" },
      { name: "Expo", slug: "expo", color: "#000020" },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    ],
  },
  {
    label: "Nativo",
    desc: "Máximo rendimiento y acceso total al hardware. Para apps que necesitan exprimir cada frame.",
    techs: [
      { name: "Kotlin", slug: "kotlin", color: "#7F52FF" },
      { name: "Swift", slug: "swift", color: "#F05138" },
      { name: "Jetpack Compose", slug: "jetpackcompose", color: "#4285F4" },
    ],
  },
  {
    label: "Backend & Infra",
    desc: "El servidor que mantiene tu app funcionando. APIs, base de datos, almacenamiento, notificaciones.",
    techs: [
      { name: "Node.js", slug: "nodedotjs", color: "#339933" },
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
      { name: "Firebase", slug: "firebase", color: "#DD2C00" },
      { name: "Railway", slug: "railway", color: "#0B0D0E" },
    ],
  },
];

export function TechStack() {
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
        Tecnologías que usamos.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Elegimos la herramienta correcta para cada proyecto. Nativo cuando hace falta, cross-platform cuando conviene.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-3">
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-7"
          >
            <div>
              <h3 className="text-[18px] font-semibold tracking-tight">{stack.label}</h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">{stack.desc}</p>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              {stack.techs.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                    <Image
                      src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-[14px] font-medium text-[var(--color-text)]">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
