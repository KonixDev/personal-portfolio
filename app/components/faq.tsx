const items = [
  {
    q: "¿Una sola persona realmente puede entregar un SaaS serio?",
    a: "Hace cuatro años que entrego — Pendi, Trades, Commercy y useDeploy son evidencia. Si la cantidad de horas-humanas fuera el problema, una agencia de 20 personas siempre ganaría. Lo que pasa es que en una agencia, 15 de esas 20 horas son coordinación, sales y junior code review. Acá esas 15 horas no existen — sólo está la persona que escribe el código.",
  },
  {
    q: "¿Por qué $5-10k y no $50k de agencia o $1k de freelance?",
    a: "Las agencias tradicionales cobran por coordinación, no por código. Cuentan PMs, designers, juniors y account managers en el precio. Los freelances baratos no tienen proceso, ni stack, ni accountability — cobran por hora porque no pueden comprometerse a un outcome. El medio que ofrezco: precio fijo, scope cerrado, una sola persona responsable. Pagás por el producto, no por el organigrama.",
  },
  {
    q: "¿Qué pasa después del handoff?",
    a: "El código es tuyo, vive en tu cuenta de GitHub. La documentación es tuya. El deploy es tuyo. Si querés que sigamos iterando, ofrezco retainer mensual sin contrato anual. Si no, te dejo todo en orden y un README útil. No hay vendor lock-in porque el stack es público (useDeploy).",
  },
  {
    q: "¿Hay garantía?",
    a: "Sí. Bugs en los primeros 30 días post-deploy se arreglan sin cargo, contra el scope acordado. Eso incluye cualquier defecto en lo que firmamos. No incluye cambios de requirements (eso es trabajo nuevo) ni issues de terceros (Stripe cambió su API, por ejemplo). Pago: 50/50 — si la primera mitad no te convence, no seguís pagando.",
  },
  {
    q: "¿En qué timezone trabajás?",
    a: "UTC-3 (Argentina). Overlap razonable con US East (3-4 horas) y Europa (4-5 horas). Trabajo async-first: standup diario por texto, demo semanal por video. Si necesitás overlap dedicado con US West o APAC, lo conversamos.",
  },
  {
    q: "¿Cómo se factura?",
    a: "50% al firmar, 50% al deploy a producción. O por hito en proyectos más grandes. Acepto USD a banco AR, USDT (red TRC20 / ERC20), Wise, Mercury, Stripe Atlas. Factura electrónica AR si la necesitás.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="hairline-b bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="label-mono">06 · FAQ</div>
            <h2 className="headline mt-6 text-[clamp(34px,4vw,52px)]">
              Las dudas que ya escuchamos
              <br />
              <span className="serif-italic text-[var(--color-accent)]">
                (varias veces).
              </span>
            </h2>
            <p className="mt-6 max-w-[28ch] text-[14px] leading-[1.55] text-[var(--color-muted)]">
              Si la tuya no está, escribime por WhatsApp — respondo en menos de
              24 hs hábiles.
            </p>
          </div>

          <ul className="flex flex-col lg:col-span-8">
            {items.map((item, i) => (
              <li key={i}>
                <details
                  className="group hairline-t py-6 [&[open]>summary>.chev]:rotate-90 [&[open]>summary>.chev]:text-[var(--color-accent)]"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
                        0{i + 1}
                      </span>
                      <span className="text-[18px] font-medium tracking-[-0.015em] text-[var(--color-ink)]">
                        {item.q}
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className="chev serif-italic shrink-0 text-[24px] leading-none text-[var(--color-muted)] transition-all duration-300"
                    >
                      →
                    </span>
                  </summary>
                  <div className="mt-4 grid grid-cols-[56px_1fr] gap-5 pr-12">
                    <span
                      aria-hidden
                      className="font-mono text-[10px] text-transparent"
                    >
                      00
                    </span>
                    <p className="max-w-[64ch] text-[15px] leading-[1.65] text-[var(--color-muted)]">
                      {item.a}
                    </p>
                  </div>
                </details>
              </li>
            ))}

            <li className="hairline-t mt-2" aria-hidden />
          </ul>
        </div>
      </div>
    </section>
  );
}
