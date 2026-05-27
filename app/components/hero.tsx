"use client";

import { waLink, projects } from "@/lib/site-config";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const trustedLogos = [
  "Next.js", "React Native", "TypeScript", "Tailwind", "Node.js",
  "PostgreSQL", "Prisma", "Railway",
];

export function Hero() {
  return (
    <section id="top" className="grid place-items-center px-5 pt-[120px] pb-12 md:px-6 md:pt-[180px] md:pb-20">
      <div className="grid place-items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <RotatingLogo />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-showcase mt-6 max-w-[800px] text-center md:mt-8"
        >
          Software a medida, potenciado por IA.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-body mt-6 max-w-[540px] text-center"
        >
          Apps mobile, web, backend, Android TV y más.
          <br />
          De la idea al lanzamiento en semanas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:mt-8"
        >
          <a
            href={waLink("Hola Martín, quiero empezar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Empezar un proyecto
          </a>
          <a href="#proyectos" className="btn-secondary">
            Ver proyectos
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 grid place-items-center gap-4"
      >
        <p className="text-compact">Construido con</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {trustedLogos.map((name) => (
            <span
              key={name}
              className="text-[15px] font-semibold text-[var(--color-text)] opacity-40"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function RotatingLogo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[86px] w-[86px]">
      {/* Shadow cards behind — stack effect */}
      <div className="absolute -top-3.5 left-1/2 h-[86px] w-[67px] -translate-x-1/2 rounded-[15px] bg-[#ddd]" />
      <div className="absolute -top-[7px] left-1/2 h-[86px] w-[77px] -translate-x-1/2 rounded-[17px] bg-[#b0b0b0]" />

      {/* Active icon */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={projects[index].name}
          initial={{ opacity: 1, scale: 0.82, y: -14, zIndex: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0, zIndex: 2 }}
          exit={{ opacity: 0, scale: 0.9, y: 30, zIndex: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Image
            src={projects[index].icon}
            alt={projects[index].name}
            width={86}
            height={86}
            className="h-[86px] w-[86px] rounded-[21px] object-contain shadow-[0_6px_20px_-6px_rgba(0,0,0,0.15)]"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
