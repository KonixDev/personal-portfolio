"use client";

import Link from "next/link";
import { site, waLink } from "@/lib/site-config";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "Apps Mobile", href: "/apps-mobile" },
  { label: "Desarrollo Web", href: "/desarrollo-web" },
  { label: "Sistemas Backend", href: "/sistemas-backend" },
  { label: "Android TV", href: "/android-tv" },
  { label: "Ciberseguridad", href: "/ciberseguridad" },
  { label: "SEO & GEO", href: "/seo-geo" },
  { label: "Rediseño Web", href: "/rediseno-web" },
  { label: "Bases de Datos", href: "/bases-de-datos" },
  { label: "Optimización de Sistemas", href: "/optimizacion-sistemas" },
  { label: "ERP & Dashboards", href: "/erp-dashboards" },
  { label: "Publicación en Stores", href: "/publicacion-stores" },
];

const navItems = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <>
      <div className="fixed top-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-[600px] -translate-x-1/2 md:top-6 md:max-w-none md:w-auto">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="nav-pill flex h-[52px] items-center justify-between gap-x-4 px-4 md:h-[60px] md:gap-x-6 md:px-6"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1.5 text-[15px] font-medium tracking-tight text-[var(--color-text)] md:gap-2 md:text-[16px]"
          >
            <LogoMark />
            <span className="font-semibold">{site.brand}</span>
            <span className="text-[var(--color-text-tertiary)]">.dev</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-[16px] font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-text-secondary)]"
              >
                Servicios
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className={"transition-transform duration-200 " + (dropdownOpen ? "rotate-180" : "")}
                >
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full mt-3 w-[280px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-2 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)]"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    {serviceLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex rounded-xl px-3.5 py-2.5 text-[14px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-secondary)]"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-text-secondary)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-black/5 md:hidden"
              aria-label="Menú"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {mobileOpen ? (
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                )}
              </svg>
            </button>

            <a
              href={waLink("Hola Martín, vi tu sitio y quiero hablar de un proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden h-[36px] px-3.5 text-[13px] md:inline-flex md:h-[40px] md:px-4 md:text-[14px]"
            >
              Contacto
            </a>
          </div>
        </motion.nav>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white md:hidden"
          >
            <div className="flex min-h-full flex-col px-6 pt-[76px] pb-8">
              <span className="mb-2 text-[12px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Servicios
              </span>
              <div className="flex flex-col">
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="border-b border-[var(--color-border)] py-3.5 text-[17px] font-semibold text-[var(--color-text)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <span className="mb-2 mt-8 text-[12px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Navegación
              </span>
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="border-b border-[var(--color-border)] py-3.5 text-[17px] font-semibold text-[var(--color-text)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={waLink("Hola Martín, vi tu sitio y quiero hablar de un proyecto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Contacto por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="8" fill="#141414" />
      <text x="14" y="19" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="15" fontWeight="700" fill="#fff">M</text>
    </svg>
  );
}
