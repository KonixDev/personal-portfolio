const items = [
  "Next.js",
  "Bun",
  "Prisma",
  "Postgres",
  "TypeScript",
  "Tailwind",
  "Resend",
  "Stripe",
  "Vercel",
  "Neon",
  "Sentry",
  "Playwright",
];

export function Stack() {
  const sequence = [...items, ...items];

  return (
    <section className="hairline-b overflow-hidden bg-[var(--color-paper-warm)]/35">
      <div className="mx-auto flex max-w-[1280px] items-center gap-10 px-6 py-7 lg:px-12">
        <span className="hidden shrink-0 font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted)] md:inline">
          Stack ·{" "}
          <span className="serif-italic text-[var(--color-ink)]">probado</span>
        </span>

        <div className="relative flex-1 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-paper)] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-paper)] to-transparent"
          />

          <ul className="marquee-track flex w-max items-center gap-10">
            {sequence.map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="flex items-center gap-10 font-mono text-[12px] tracking-[0.18em] uppercase text-[var(--color-ink)]"
              >
                {name}
                <span
                  aria-hidden
                  className="serif-italic text-[18px] text-[var(--color-accent)]"
                >
                  ✦
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
