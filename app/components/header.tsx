"use client";

import Link from "next/link";
import { site, waLink } from "@/lib/site-config";
import { motion } from "framer-motion";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="nav-pill flex h-[60px] items-center gap-x-6 px-6 py-2"
      >
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-2 text-[16px] font-medium tracking-tight text-[var(--color-text)]"
        >
          <LogoMark />
          <span className="font-semibold">{site.brand}</span>
          <span className="text-[var(--color-text-tertiary)]">.dev</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
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

        <a
          href={waLink("Hola Martín, vi tu sitio y quiero hablar de un proyecto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary ml-2 hidden h-[40px] px-4 text-[14px] md:inline-flex"
        >
          Contacto
        </a>
      </motion.nav>
    </div>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="8" fill="#141414" />
      <text
        x="14"
        y="19"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="15"
        fontWeight="700"
        fill="#fff"
      >
        M
      </text>
    </svg>
  );
}
