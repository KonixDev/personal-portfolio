export function Manifesto() {
  return (
    <section className="hairline-b bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-[1280px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div
              className="label-mono"
              style={{ color: "var(--color-muted-soft)" }}
            >
              Manifesto · 01
            </div>
            <div className="mt-6 h-px w-12 bg-[var(--color-paper)]/60" />
            <p className="mt-6 max-w-[22ch] font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted-soft)]">
              Por qué&nbsp;hago lo que&nbsp;hago.
            </p>
          </div>

          <blockquote className="lg:col-span-9">
            <p className="headline text-[clamp(28px,4vw,52px)] leading-[1.1] text-[var(--color-paper)]">
              Las agencias venden{" "}
              <span className="serif-italic text-[var(--color-amber)]">
                slides
              </span>
              .
              <br />
              Los freelancers venden{" "}
              <span className="serif-italic text-[var(--color-amber)]">
                horas
              </span>
              .
              <br />
              Yo vendo{" "}
              <span className="serif-italic text-[var(--color-amber)]">
                producto
              </span>{" "}
              en producción —
              <br />
              <span className="text-[var(--color-muted-soft)]">
                deploy en tu dominio,
              </span>
              <br />
              <span className="text-[var(--color-muted-soft)]">
                código en tu repo,
              </span>
              <br />
              <span className="text-[var(--color-muted-soft)]">
                usuarios en tu base de datos.
              </span>
            </p>

            <footer className="mt-12 flex items-end justify-between border-t border-white/10 pt-6">
              <div className="serif-italic text-[18px] text-[var(--color-paper)]">
                — Martín Coll
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted-soft)]">
                Fundador · Operating principle
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
