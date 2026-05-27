"use client";

import { projects } from "@/lib/site-config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Productos propios en producción.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        No son mockups. Cada uno tiene usuarios reales, pagos procesados y código en producción.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="card group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[1.91/1] w-full overflow-hidden bg-[var(--color-bg-secondary)]">
              <Image
                src={project.og}
                alt={`${project.name} — ${project.desc}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-1.5 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-semibold tracking-tight text-[var(--color-text)]">
                  {project.name}
                </h3>
                <span className="text-[13px] text-[var(--color-text-tertiary)] opacity-0 transition-opacity group-hover:opacity-100">
                  Visitar →
                </span>
              </div>
              <p className="text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                {project.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
