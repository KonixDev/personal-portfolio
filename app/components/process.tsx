import { IconCall, IconProposal, IconBuild, IconHandoff } from "./mockups";

const steps = [
  {
    n: "01",
    name: "Call inicial",
    desc: "30 minutos. Entendemos el problema, no la lista de features. Si no encajamos, te recomiendo a alguien que sí.",
    meta: "Gratis · 30 min",
    Icon: IconCall,
    accent: "var(--color-coral)",
  },
  {
    n: "02",
    name: "Propuesta",
    desc: "Scope cerrado, precio fijo, plan de entrega por hitos. Te lo mando en 48 hs.",
    meta: "48 horas",
    Icon: IconProposal,
    accent: "var(--color-amber)",
  },
  {
    n: "03",
    name: "Build",
    desc: "Demo semanal en producción. Acceso al staging cuando quieras. Sin PowerPoints — sólo código corriendo.",
    meta: "2 — 10 semanas",
    Icon: IconBuild,
    accent: "var(--color-accent)",
  },
  {
    n: "04",
    name: "Handoff",
    desc: "Código tuyo, docs tuyas, deploy tuyo. Soporte opcional con retainer.",
    meta: "Tu equipo, tu producto",
    Icon: IconHandoff,
    accent: "var(--color-forest)",
  },
];

export function Process() {
  return (
    <section id="process" className="hairline-b">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="label-mono">04 · Cómo trabajo</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="headline text-[clamp(34px,4vw,56px)]">
              Cuatro pasos.{" "}
              <span className="serif-italic text-[var(--color-accent)]">
                Sin reuniones inútiles.
              </span>
            </h2>
          </div>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.Icon;
            return (
              <li
                key={step.n}
                className="group relative flex flex-col gap-5 bg-[var(--color-paper)] p-8 transition-colors duration-300 hover:bg-[var(--color-card)]"
              >
                <div className="flex items-start justify-between">
                  <div
                    style={{ color: step.accent }}
                    className="transition-transform duration-300 group-hover:-rotate-3"
                  >
                    <Icon />
                  </div>
                  <span
                    className="font-mono text-[28px] font-light tracking-[-0.03em]"
                    style={{ color: step.accent }}
                  >
                    {step.n}
                  </span>
                </div>
                <h3 className="text-[22px] font-medium tracking-[-0.02em]">
                  {step.name}
                </h3>
                <p className="text-[13.5px] leading-[1.55] text-[var(--color-muted)]">
                  {step.desc}
                </p>
                <div
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase"
                  style={{ borderColor: step.accent, color: step.accent }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: step.accent }}
                  />
                  {step.meta}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
