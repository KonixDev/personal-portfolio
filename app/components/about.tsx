import { site } from "@/lib/site-config";

function AvatarMark({ initials }: { initials: string }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="avatar-glow" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="var(--color-paper-warm)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-paper)" stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#avatar-glow)" />
      <g
        stroke="var(--color-ink)"
        strokeWidth="0.7"
        fill="none"
        transform="translate(100 100)"
      >
        <circle r="64" />
        <circle r="48" cx="-12" cy="-8" />
        <circle r="48" cx="12" cy="-8" />
        <circle r="48" cy="14" />
      </g>
      <circle cx="100" cy="92" r="5" fill="var(--color-accent)" />
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontStyle="italic"
        fontSize="44"
        fill="var(--color-ink)"
        letterSpacing="-0.04em"
      >
        {initials}
      </text>
      <g transform="translate(160 175)">
        <text
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
          fontSize="7"
          fill="var(--color-muted)"
          letterSpacing="0.18em"
        >
          ★ FOUNDER · 2026
        </text>
      </g>
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="hairline-b">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="label-mono">05 · Quién está detrás</div>
            <div className="mt-8 aspect-square w-full max-w-[320px] overflow-hidden rounded-sm border border-[var(--color-rule)]">
              <AvatarMark initials="M" />
            </div>
          </div>

          <div className="flex flex-col lg:col-span-8">
            <h2 className="headline text-[clamp(34px,4.2vw,58px)]">
              Hola, soy Martín.
              <br />
              <span className="serif-italic text-[var(--color-accent)]">
                Una persona, un criterio.
              </span>
            </h2>

            <div className="mt-10 grid max-w-[58ch] grid-cols-1 gap-5 text-[16px] leading-[1.65] text-[var(--color-muted)]">
              <p>
                <strong className="text-[var(--color-ink)] font-semibold">
                  Diez años escribiendo software de producción.
                </strong>{" "}
                Antes en producto, e-commerce y plataformas internas. Hoy
                construyo SaaS solo — o con un equipo chico cuando hace falta —
                en mi propio stack.
              </p>
              <p>
                <strong className="text-[var(--color-ink)] font-semibold">
                  Cuando firmás conmigo, soy yo el que escribe el código.
                </strong>{" "}
                No te paso a un junior la semana siguiente. No hay account
                managers, no hay decks, no hay <em>&ldquo;alguien de mi equipo te
                contactará&rdquo;</em>. Soy yo, semanal, hasta el deploy.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[18px] font-medium tracking-[-0.015em]">
                  {site.name}
                </div>
                <div className="serif-italic text-[16px] text-[var(--color-muted)]">
                  Fundador · Engineer · {site.location}
                </div>
              </div>

              <ul className="flex flex-wrap gap-3 font-mono text-[10.5px] tracking-[0.14em] uppercase">
                {[
                  { label: "GitHub", href: site.socials.github },
                  { label: "X / Twitter", href: site.socials.x },
                  { label: "LinkedIn", href: site.socials.linkedin },
                  { label: "Email", href: `mailto:${site.email}` },
                ].map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
