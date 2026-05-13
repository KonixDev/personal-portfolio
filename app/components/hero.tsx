import { site, waLink } from "@/lib/site-config";

const copy = {
  availability: site.availability,
  statementBefore: "Construyo software de producción para founders que",
  statementItalic: "no improvisan.",
  weeks: "4 a 10 semanas",
  subBefore:
    "SaaS, MVPs y plataformas web en ",
  subAfter:
    ". Stack open-source que mantengo activamente — sin lock-in, sin sorpresas, sin intermediarios entre vos y la persona que escribe el código.",
  cta: "Empezar un proyecto",
  secondary: "Ver trabajos",
  next: "sigue: lo que ya está en producción",
  scrollHint: "↓ scroll",
};

const stats = [
  { value: "04", label: "productos en producción" },
  { value: "2022", label: "construyendo solo · est." },
  { value: "4–10", italic: "sem.", label: "de idea a deploy" },
  { value: "100", italic: "%", label: "en plazo · precio fijo" },
];

export function Hero() {
  return (
    <section id="top" className="paper-grain relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(42, 76, 220, 0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 5% 100%, rgba(212, 152, 38, 0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[980px] px-6 pt-24 pb-24 text-center lg:px-8 lg:pt-32 lg:pb-28">
        <div
          className="enter-fade mb-9 inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-card)] px-3.5 py-1.5"
          style={{ ["--enter-delay" as string]: "80ms" }}
        >
          <span
            aria-hidden
            className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-wa)]"
            style={{ boxShadow: "0 0 0 3px rgba(31, 169, 86, 0.18)" }}
          />
          <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
            {copy.availability}
          </span>
        </div>

        <h1
          className="enter mx-auto mb-10 max-w-[20ch] text-[clamp(36px,5.6vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em]"
          style={{ ["--enter-delay" as string]: "180ms" }}
        >
          {copy.statementBefore}{" "}
          <span className="serif-italic font-normal text-[var(--color-accent)]">
            {copy.statementItalic}
          </span>
        </h1>

        <p
          className="enter mx-auto mb-11 max-w-[58ch] text-[clamp(16px,1.55vw,19px)] leading-[1.55] text-[var(--color-muted)]"
          style={{ ["--enter-delay" as string]: "360ms" }}
        >
          {copy.subBefore}
          <strong className="font-semibold text-[var(--color-ink)]">
            {copy.weeks}
          </strong>
          {copy.subAfter}
        </p>

        <div
          className="enter inline-flex flex-wrap items-center justify-center gap-4 lg:gap-5"
          style={{ ["--enter-delay" as string]: "520ms" }}
        >
          <a
            href={waLink(
              "Hola Martín, quiero empezar un proyecto. Te cuento la idea por acá."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            {copy.cta}
          </a>
          <a href="#work" className="btn-ghost-pill">
            {copy.secondary}
            <span className="arr">↓</span>
          </a>
        </div>
      </div>

      <div
        className="enter-fade hairline-t hairline-b"
        style={{ ["--enter-delay" as string]: "780ms" }}
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-8 gap-y-8 px-6 py-9 lg:grid-cols-4 lg:gap-x-12 lg:px-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="text-[clamp(28px,3.2vw,40px)] font-semibold leading-none tracking-[-0.025em]">
                {s.value}
                {s.italic && (
                  <span className="serif-italic ml-0.5 text-[0.72em] font-normal text-[var(--color-accent)]">
                    {s.italic}
                  </span>
                )}
              </div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-7 lg:px-12">
        <span className="serif-italic text-[14px] text-[var(--color-muted-soft)]">
          — {copy.next}
        </span>
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-muted)]">
          {copy.scrollHint}
        </span>
      </div>
    </section>
  );
}
