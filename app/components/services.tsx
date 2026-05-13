import { waLink } from "@/lib/site-config";

type Tier = {
  key: "mvp" | "saas" | "custom";
  name: string;
  price: string;
  priceItalic?: string;
  italic: string;
  lede: string;
  includes: string[];
  timeline: string;
  featured?: boolean;
  waMessage: string;
};

const tiers: Tier[] = [
  {
    key: "mvp",
    name: "Sprint MVP",
    price: "Desde $2.500",
    italic: "validar rápido",
    lede: "Para founders que necesitan algo real en manos de usuarios antes que perfecto en una demo.",
    includes: [
      "Landing + autenticación",
      "1 feature núcleo, end-to-end",
      "Deploy a producción, dominio propio",
      "2 semanas de soporte post-launch",
    ],
    timeline: "2 — 3 semanas",
    waMessage: "Hola Martín, quiero arrancar un Sprint MVP.",
  },
  {
    key: "saas",
    name: "Build SaaS",
    price: "Desde $5.000",
    italic: "producto real",
    lede: "El boilerplate hecho a medida. Multi-usuario, pagos, dashboard administrativo, todo desde día uno.",
    includes: [
      "3 a 5 features núcleo",
      "Pagos (Stripe, MercadoPago, LemonSqueezy)",
      "Multi-tenant, roles, invitaciones",
      "Observability + tests + docs",
    ],
    timeline: "4 — 8 semanas",
    featured: true,
    waMessage: "Hola Martín, quiero construir un SaaS.",
  },
  {
    key: "custom",
    name: "Custom",
    price: "A medida",
    priceItalic: "A medida",
    italic: "conversemos",
    lede: "Integraciones, equipos extendidos, discovery profundo, productos enterprise con compliance.",
    includes: [
      "Discovery + arquitectura",
      "Retainer mensual",
      "Equipo extendido (1 a 3 devs)",
      "Migraciones, integraciones, scale",
    ],
    timeline: "Variable",
    waMessage: "Hola Martín, tengo un proyecto Custom que conversar.",
  },
];

export function Services() {
  return (
    <section id="services" className="hairline-b bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="label-mono">03 · Servicios</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="headline text-[clamp(34px,4vw,56px)]">
              Tres formas de empezar.{" "}
              <span className="serif-italic text-[var(--color-accent)]">
                Vos elegís el alcance.
              </span>
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.55] text-[var(--color-muted)]">
              Scope cerrado, precio fijo, plan de entrega por hito. El precio
              se ajusta a la complejidad — te confirmo el número exacto después
              de la primera llamada.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {tiers.map((tier, i) => {
            const isFeat = tier.featured;
            return (
              <li
                key={tier.key}
                className={
                  "relative flex flex-col gap-6 bg-[var(--color-card)] p-8 lg:p-10 " +
                  "border border-[var(--color-rule)] " +
                  (i > 0 ? "md:border-l-0 " : "") +
                  (isFeat
                    ? "md:bg-[var(--color-ink)] md:text-[var(--color-paper)]"
                    : "")
                }
              >
                {isFeat && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[var(--color-accent)] px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase text-white">
                    ★ Más elegido
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <span
                    className={
                      "font-mono text-[10.5px] tracking-[0.14em] uppercase " +
                      (isFeat
                        ? "text-[var(--color-muted-soft)]"
                        : "text-[var(--color-muted)]")
                    }
                  >
                    {tier.price}
                  </span>
                  <span
                    className={
                      "font-mono text-[10.5px] tracking-[0.14em] uppercase " +
                      (isFeat
                        ? "text-[var(--color-muted-soft)]"
                        : "text-[var(--color-muted)]")
                    }
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  className={
                    "text-[36px] leading-none font-medium tracking-[-0.035em] " +
                    (isFeat
                      ? "text-[var(--color-paper)]"
                      : "text-[var(--color-ink)]")
                  }
                >
                  {tier.name}
                  <span className="serif-italic ml-2 text-[24px] text-[var(--color-accent)]">
                    {tier.italic}
                  </span>
                </h3>

                <p
                  className={
                    "max-w-[36ch] text-[14px] leading-[1.55] " +
                    (isFeat
                      ? "text-[var(--color-muted-soft)]"
                      : "text-[var(--color-muted)]")
                  }
                >
                  {tier.lede}
                </p>

                <ul
                  className={
                    "mt-2 flex flex-col gap-2.5 text-[13.5px] " +
                    (isFeat
                      ? "text-[var(--color-paper)]"
                      : "text-[var(--color-ink-soft)]")
                  }
                >
                  {tier.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-px w-3 shrink-0 bg-[var(--color-muted-soft)]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={
                    "mt-auto flex items-end justify-between border-t pt-5 " +
                    (isFeat
                      ? "border-[#222]"
                      : "border-[var(--color-rule)]")
                  }
                >
                  <span
                    className={
                      "font-mono text-[10.5px] tracking-[0.14em] uppercase " +
                      (isFeat
                        ? "text-[var(--color-muted-soft)]"
                        : "text-[var(--color-muted)]")
                    }
                  >
                    {tier.timeline}
                  </span>
                  <a
                    href={waLink(tier.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "font-mono text-[12px] " +
                      (isFeat
                        ? "text-[var(--color-paper)] hover:text-[var(--color-accent-bright)]"
                        : "text-[var(--color-ink)] hover:text-[var(--color-accent)]")
                    }
                  >
                    Empezar →
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
          Precios en USD · Pago 50/50 o por hito · Sin sorpresas
        </p>
      </div>
    </section>
  );
}
