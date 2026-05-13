import Link from "next/link";
import { site, waLink } from "@/lib/site-config";

const navItems = [
  { key: "trabajos", label: "Trabajos", href: "#work" },
  { key: "servicios", label: "Servicios", href: "#services" },
  { key: "proceso", label: "Proceso", href: "#process" },
  { key: "nosotros", label: "Sobre mí", href: "#about" },
  { key: "faq", label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 hairline-b bg-[var(--color-paper)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-12">
        <Link href="#top" className="flex items-baseline gap-2 select-none">
          <span className="text-[15px] font-medium tracking-tight">
            <span className="text-[var(--color-accent)]">★</span> {site.name}
          </span>
          <span className="serif-italic text-[15px] text-[var(--color-muted)]">
            studio
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Hola Martín, vi tu landing y quiero hablar de un proyecto")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-wa)] px-4 py-2 text-[13px] font-medium text-white shadow-[0_4px_12px_-4px_rgba(31,169,86,0.45)] transition hover:bg-[var(--color-wa-hover)]"
        >
          Hablemos
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
