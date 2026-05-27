import { site } from "@/lib/site-config";

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Apps Mobile", href: "#servicios" },
      { label: "Desarrollo Web", href: "#servicios" },
      { label: "Sistemas Backend", href: "#servicios" },
      { label: "Ciberseguridad", href: "#servicios" },
      { label: "Android TV", href: "#servicios" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Proyectos", href: "#proyectos" },
      { label: "Proceso", href: "#proceso" },
      { label: "Pricing", href: "#servicios" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Conectar",
    links: [
      { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
      { label: "Email", href: `mailto:${site.email}` },
      { label: "GitHub", href: site.socials.github },
      { label: "X (Twitter)", href: site.socials.x },
      { label: "LinkedIn", href: site.socials.linkedin },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]">
      <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-8 md:px-12 lg:px-[116px] lg:pt-[104px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#fff" />
                <text x="14" y="19" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="15" fontWeight="700" fill="#141414">M</text>
              </svg>
              <span className="text-[15px] font-semibold">{site.brand}.dev</span>
            </div>
            <p className="mt-4 max-w-[200px] text-[14px] leading-[1.6] text-white/50">
              Software a medida, potenciado por IA. {site.location}.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[14px] font-semibold text-white/40">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[14px] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <span className="text-[13px] text-white/30">
            © {site.brand}.dev {year}. Todos los derechos reservados.
          </span>
          <div className="flex gap-6">
            <a href={`mailto:${site.email}`} className="text-[13px] text-white/30 hover:text-white/60">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
