import {
  CommercyMockup,
  TradesMockup,
  PendiMockup,
  UseDeployMockup,
} from "./mockups";
import type { ComponentType } from "react";

type Item = {
  id: string;
  year: string;
  name: string;
  kind: string;
  desc: string;
  stack: string[];
  accent: string;
  accentSoft: string;
  Mockup: ComponentType<{ accent: string; accentSoft: string }>;
};

const items: Item[] = [
  {
    id: "01",
    year: "2024",
    name: "Commercy",
    kind: "E-commerce headless",
    desc: "Plataforma de comercio multi-tienda con catálogo, checkout y panel administrativo. Node + Postgres.",
    stack: ["Node", "Postgres", "Next.js"],
    accent: "var(--color-coral)",
    accentSoft: "var(--color-coral-soft)",
    Mockup: CommercyMockup,
  },
  {
    id: "02",
    year: "2025",
    name: "Trades Platform",
    kind: "Marketplace B2B",
    desc: "Conecta oficios independientes con propiedades en gestión. Bun + Next.js, multi-tenant.",
    stack: ["Bun", "Next.js", "Multi-tenant"],
    accent: "var(--color-forest)",
    accentSoft: "var(--color-forest-soft)",
    Mockup: TradesMockup,
  },
  {
    id: "03",
    year: "2025",
    name: "Pendi.app",
    kind: "Project management SaaS",
    desc: "Gestión de proyectos, sprints y tareas para equipos pequeños. Multi-tenant, MCP integrado.",
    stack: ["Next.js", "Prisma", "MCP"],
    accent: "var(--color-violet)",
    accentSoft: "var(--color-violet-soft)",
    Mockup: PendiMockup,
  },
  {
    id: "04",
    year: "2026",
    name: "useDeploy",
    kind: "SaaS boilerplate",
    desc: "Open-source. Bun + Express + Prisma + Next.js. La base sobre la que construyo producto.",
    stack: ["Bun", "Express", "DDD", "OSS"],
    accent: "var(--color-accent)",
    accentSoft: "var(--color-accent-soft)",
    Mockup: UseDeployMockup,
  },
];

export function Work() {
  return (
    <section id="work" className="hairline-b">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="label-mono">02 · Trabajos</div>
            <h2 className="headline mt-6 text-[clamp(34px,4vw,52px)]">
              Producto en producción.
              <br />
              <span className="serif-italic text-[var(--color-accent)]">
                Real.
              </span>
            </h2>
            <p className="mt-6 max-w-[24ch] text-[14px] leading-[1.55] text-[var(--color-muted)]">
              Cuatro productos propios, no casos de clientes inventados. Si
              dudás de si una persona puede entregar, esta sección es la
              respuesta.
            </p>
          </div>

          <div className="lg:col-span-9">
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {items.map((item) => {
                const Mockup = item.Mockup;
                return (
                  <li
                    key={item.id}
                    className="group relative flex flex-col overflow-hidden rounded-sm border border-[var(--color-rule)] bg-[var(--color-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-22px_rgba(20,20,20,0.18)]"
                  >
                    <div
                      className="relative aspect-[16/10] overflow-hidden"
                      style={{
                        background: `linear-gradient(160deg, ${item.accentSoft} 0%, var(--color-paper-2) 100%)`,
                      }}
                    >
                      <Mockup
                        accent={item.accent}
                        accentSoft={item.accentSoft}
                      />
                      <span
                        className="absolute top-3 left-3 rounded-full bg-[var(--color-paper)]/95 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] uppercase backdrop-blur-sm"
                        style={{ color: item.accent }}
                      >
                        ● {item.id} · {item.year}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3 p-6">
                      <header className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[24px] font-medium tracking-[-0.025em]">
                          {item.name}
                        </h3>
                        <span
                          className="serif-italic text-[15px]"
                          style={{ color: item.accent }}
                        >
                          {item.kind}
                        </span>
                      </header>

                      <p className="text-[13.5px] leading-[1.55] text-[var(--color-muted)]">
                        {item.desc}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-[var(--color-rule)] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.04em] text-[var(--color-muted)]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-6 right-6 font-mono text-[12px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      style={{ color: item.accent }}
                    >
                      →
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
