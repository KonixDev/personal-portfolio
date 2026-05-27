import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { baseUrl } from "./sitemap";
import { SmoothScroll } from "./components/smooth-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Martín Coll — Software a medida, potenciado por IA",
    template: "%s | Martín Coll",
  },
  description:
    "Desarrollo mobile, web, backend, Android TV, ciberseguridad y más. De la idea al deploy en semanas. Precio fijo, código tuyo, potenciado por IA.",
  keywords: [
    "desarrollo software",
    "desarrollo mobile",
    "desarrollo web",
    "backend",
    "Android TV",
    "ciberseguridad",
    "app store",
    "play store",
    "Buenos Aires",
    "Argentina",
    "software a medida",
    "IA",
    "inteligencia artificial",
  ],
  authors: [{ name: "Martín Coll" }],
  creator: "Martín Coll",
  openGraph: {
    title: "Martín Coll — Software a medida, potenciado por IA",
    description:
      "Apps mobile, sistemas backend, web, ciberseguridad y más. De la idea al deploy en semanas.",
    url: baseUrl,
    siteName: "Martín Coll",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Martín Coll — Software a medida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Coll — Software a medida, potenciado por IA",
    description:
      "Apps mobile, sistemas backend, web, ciberseguridad y más. De la idea al deploy en semanas.",
    creator: "@renwo_app",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
