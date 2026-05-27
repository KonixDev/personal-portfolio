"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const techs = [
  { name: "Node.js", slug: "nodedotjs", color: "#339933" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "Redis", slug: "redis", color: "#DC382D" },
  { name: "Prisma", slug: "prisma", color: "#2D3748" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Railway", slug: "railway", color: "#0B0D0E" },
  { name: "Sentry", slug: "sentry", color: "#362D59" },
  { name: "BullMQ", slug: "bull", color: "#E1363C" },
  { name: "Grafana", slug: "grafana", color: "#F46800" },
];

export function BackendStack() {
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
        Stack probado en producción.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[480px] text-center"
      >
        Herramientas open-source que ya están corriendo en nuestros propios productos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
              <Image
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`}
                alt={tech.name}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
