"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    name: "Plataforma de Streaming",
    desc: "Tu propio Netflix. Catálogo de películas, series o contenido educativo con suscripciones, perfiles y reproducción adaptativa.",
    color: "#6366F1",
    tags: ["Catálogo", "Suscripciones", "Perfiles", "HLS/DASH"],
  },
  {
    name: "Canal de TV en Vivo",
    desc: "Transmití tu canal en vivo directo a Smart TVs. Programación (EPG), archivo bajo demanda, notificaciones y chat en vivo.",
    color: "#EF4444",
    tags: ["Live Streaming", "EPG", "VOD", "Notificaciones"],
  },
  {
    name: "App de Fitness / Wellness",
    desc: "Rutinas en video, seguimiento de progreso, temporizadores y planes personalizados en la pantalla del living.",
    color: "#22C55E",
    tags: ["Video", "Progreso", "Planes", "Temporizador"],
  },
  {
    name: "Karaoke / Música",
    desc: "Letras sincronizadas, biblioteca de canciones, modo fiesta con cola de temas y control desde el celular.",
    color: "#F59E0B",
    tags: ["Sync", "Biblioteca", "Control remoto", "Social"],
  },
  {
    name: "Digital Signage",
    desc: "Cartelería digital para locales, restaurantes y oficinas. Contenido administrado remotamente, playlists y horarios.",
    color: "#3B82F6",
    tags: ["CMS remoto", "Playlists", "Scheduling", "Multi-pantalla"],
  },
  {
    name: "Juegos Casual",
    desc: "Trivia, quiz, juegos de mesa o experiencias interactivas diseñadas para control remoto y pantalla grande.",
    color: "#8B5CF6",
    tags: ["D-pad input", "Multiplayer", "Leaderboard"],
  },
];

export function TvUseCases() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casos" ref={ref} className="section-padding grid place-items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-feature text-center"
      >
        Para qué se usa.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body mt-4 max-w-[520px] text-center"
      >
        Android TV no es solo streaming. Estos son los tipos de apps que podemos construir.
      </motion.p>

      <div className="mt-16 grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div className="h-2 w-10 rounded-full" style={{ background: c.color }} />
            </div>
            <h3 className="text-[18px] font-semibold tracking-tight">{c.name}</h3>
            <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">{c.desc}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {c.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
