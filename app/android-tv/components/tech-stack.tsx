"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stacks = [
  {
    label: "App TV",
    desc: "La app que corre en el televisor. Optimizada para control remoto y pantalla grande.",
    techs: [
      { name: "Kotlin", slug: "kotlin", color: "#7F52FF" },
      { name: "Jetpack Compose", slug: "jetpackcompose", color: "#4285F4" },
      { name: "ExoPlayer", slug: "android", color: "#34A853" },
    ],
  },
  {
    label: "App Companion",
    desc: "La app mobile que controla la TV. Búsqueda, teclado, cola de reproducción.",
    techs: [
      { name: "React Native", slug: "react", color: "#61DAFB" },
      { name: "Expo", slug: "expo", color: "#000020" },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    ],
  },
  {
    label: "Backend & CMS",
    desc: "El servidor que gestiona contenido, usuarios, suscripciones y streaming.",
    techs: [
      { name: "Node.js", slug: "nodedotjs", color: "#339933" },
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
      { name: "Redis", slug: "redis", color: "#DC382D" },
      { name: "Cloudflare", slug: "cloudflare", color: "#F38020" },
    ],
  },
];

export function TvStack() {
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
