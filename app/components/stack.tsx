"use client";

import { projects } from "@/lib/site-config";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";


const positions = [
  { x: 6, y: 12 },
  { x: 70, y: 10 },
  { x: 3, y: 40 },
  { x: 75, y: 46 },
  { x: 10, y: 74 },
  { x: 68, y: 78 },
];

export function Stack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const counterOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.65, 0.8], [0, 1, 1, 0]);
  const counterScale = useTransform(scrollYProgress, [0.1, 0.25, 0.65, 0.8], [0.95, 1, 1, 0.95]);
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.65], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-[180vh] md:h-[250vh]">
      <div className="sticky top-0 grid h-screen place-items-center overflow-hidden">
        {projects.map((project, i) => {
          const pos = positions[i];
          return (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute transition-transform hover:scale-105"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              title={project.name}
            >
              <Image
                src={project.icon}
                alt={project.name}
                width={80}
                height={80}
                className="h-10 w-10 object-contain md:h-14 md:w-14 lg:h-20 lg:w-20"
                unoptimized
              />
            </motion.a>
          );
        })}

        <motion.div
          style={{ opacity: counterOpacity, scale: counterScale }}
          className="relative z-10 grid place-items-center gap-y-8 text-center"
        >
          <p className="text-[16px] font-semibold tracking-tight text-[var(--color-text-secondary)] md:text-[20px]">
            Productos propios en producción
          </p>

          <div className="flex flex-col items-center gap-3">
            <AnimatedCounter label="productos live" end={6} scrollProgress={scrollYProgress} range={[0.15, 0.35]} />
            <AnimatedCounter label="usuarios activos" end={2400} suffix="+" scrollProgress={scrollYProgress} range={[0.2, 0.4]} />
            <AnimatedCounter label="commits en el último año" end={12000} suffix="+" scrollProgress={scrollYProgress} range={[0.25, 0.45]} />
          </div>

          <div className="mt-4 h-[3px] w-48 overflow-hidden rounded-full bg-[var(--color-bg-tertiary)]">
            <motion.div
              className="h-full rounded-full bg-[var(--color-text)]"
              style={{ width: progressWidth }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedCounter({
  label,
  end,
  suffix = "",
  scrollProgress,
  range,
}: {
  label: string;
  end: number;
  suffix?: string;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const [display, setDisplay] = useState(0);
  const raw = useTransform(scrollProgress, range, [0, end]);

  useMotionValueEvent(raw, "change", (v) => {
    setDisplay(Math.round(v));
  });

  return (
    <div className="flex items-baseline gap-3">
      <span className="text-showcase tabular-nums">
        {display.toLocaleString("es-AR")}
      </span>
      {suffix && <span className="text-showcase tabular-nums">{suffix}</span>}
      <span className="text-body-sm hidden md:inline">{label}</span>
    </div>
  );
}
