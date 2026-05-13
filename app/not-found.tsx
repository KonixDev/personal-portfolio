import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-md">
        <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-[var(--color-muted)] mb-6">
          404 · página no encontrada
        </div>
        <h1 className="text-[clamp(36px,4vw,52px)] leading-[1.05] tracking-[-0.035em] font-semibold mb-6">
          Eso no existe acá.
        </h1>
        <p className="text-[15px] leading-[1.55] text-[var(--color-muted)] mb-8">
          La URL que buscabas no está. Si veniste por un link viejo, perdón —
          el sitio cambió de personalidad recientemente.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-card)] px-5 py-2.5 text-[14px] font-medium text-[var(--color-ink)] transition hover:border-[var(--color-ink)]"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
