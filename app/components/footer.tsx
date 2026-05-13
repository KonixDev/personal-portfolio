import { site } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-paper-2)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <div className="text-[28px] tracking-[-0.025em] leading-none font-medium">
            <span className="text-[var(--color-accent)]">★</span> {site.name}
            <span className="serif-italic ml-2 text-[var(--color-muted)]">
              studio
            </span>
          </div>
          <p className="mt-3 text-[12.5px] text-[var(--color-muted)]">
            Construyo SaaS de producción. {site.location}.
          </p>
        </div>

        <div className="flex flex-col items-start gap-1 font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted)] lg:items-end">
          <span>
            © {year} {site.name}
          </span>
          <span>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-[var(--color-ink)]"
            >
              {site.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
