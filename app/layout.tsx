import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { baseUrl } from "./sitemap";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Martín Coll — Construyo SaaS de producción",
    template: "%s | Martín Coll",
  },
  description:
    "Estudio de software para founders que no improvisan. SaaS, MVPs y plataformas web en 4 a 10 semanas. Stack open-source — sin lock-in, sin sorpresas, sin intermediarios.",
  openGraph: {
    title: "Martín Coll — Construyo SaaS de producción",
    description:
      "Estudio de software para founders que no improvisan. SaaS, MVPs y plataformas web en 4 a 10 semanas.",
    url: baseUrl,
    siteName: "Martín Coll",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={cx(
        GeistSans.variable,
        GeistMono.variable,
        instrumentSerif.variable
      )}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
