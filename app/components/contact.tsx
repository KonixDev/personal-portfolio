import { site, waLink } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="hairline-b">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-rule)] bg-[var(--color-card)] px-8 py-16 text-center lg:px-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(31, 169, 86, 0.10), transparent 60%), radial-gradient(ellipse 30% 30% at 90% 100%, rgba(42, 76, 220, 0.08), transparent 60%)",
            }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule-bright)] bg-[var(--color-paper)] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
              <span className="text-[var(--color-amber)]">★</span>{" "}
              {site.availability}
            </span>

            <h2 className="headline mt-8 text-[clamp(36px,5vw,60px)] leading-[1.02]">
              ¿Hablamos esta semana?
            </h2>

            <p className="mx-auto mt-6 max-w-[56ch] text-[16px] leading-[1.55] text-[var(--color-muted)]">
              Una llamada de 30 minutos por WhatsApp. Sin slides, sin
              formularios eternos. Si encajamos, te paso la propuesta en 48 hs.{" "}
              <strong className="text-[var(--color-ink)] font-semibold">
                Si no, te recomiendo a alguien que sí.
              </strong>
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={waLink(
                  "Hola Martín, quiero agendar una llamada para conversar un proyecto."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                style={{ padding: "18px 32px", fontSize: "17px" }}
              >
                Hablemos por WhatsApp
              </a>
              <span className="text-[14px] text-[var(--color-muted)]">
                o mandame mail a{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-[var(--color-accent)] underline decoration-[var(--color-accent-soft)] decoration-1 underline-offset-4 hover:decoration-[var(--color-accent)]"
                >
                  {site.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
