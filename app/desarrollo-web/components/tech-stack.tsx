"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stacks = [
  {
    label: "Frontend",
    desc: "Interfaces rápidas, interactivas y optimizadas para buscadores.",
    techs: [
      { name: "Next.js", slug: "nextdotjs", color: "#000" },
      { name: "React", slug: "react", color: "#61DAFB" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    ],
  },
  {
    label: "Backend & API",
    desc: "Servidores seguros, APIs robustas y bases de datos escalables.",
    techs: [
      { name: "Node.js", slug: "nodedotjs", color: "#339933" },
      { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
      { name: "Prisma", slug: "prisma", color: "#2D3748" },
      { name: "Redis", slug: "redis", color: "#DC382D" },
    ],
  },
  {
    label: "Infraestructura",
    desc: "Publicación, monitoreo y escalabilidad sin complicaciones.",
    techs: [
      { name: "Vercel", slug: "vercel", color: "#000" },
      { name: "Railway", slug: "railway", color: "#0B0D0E" },
      { name: "Docker", slug: "docker", color: "#2496ED" },
      { name: "Cloudflare", slug: "cloudflare", color: "#F38020" },
    ],
  },
];

export function WebStack() {
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
        Stack moderno, probado en producción. Open-source, sin vendor lock-in.
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
