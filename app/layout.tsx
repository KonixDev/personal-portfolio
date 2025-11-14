import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Martín Coll FullStack Developer Portfolio",
    template: "%s | Martín Coll FullStack Developer Portfolio",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Martín Coll FullStack Developer Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "Martín Coll FullStack Developer Portfolio",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      lang="en"
      className={cx(
        "dark bg-black text-default",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased bg-background text-foreground">
        <div className="relative min-h-screen overflow-hidden">
          {/* background grid / dots */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08)_0,transparent_55%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04)_0,transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 opacity-[0.18] bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_0)] bg-size-[18px_18px]"
          />

          <main className="relative mx-4 mt-8 lg:mx-auto max-w-3xl flex-auto min-w-0 flex flex-col px-2 md:px-0">
            <Navbar />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <div className="mt-6 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md shadow-[0_0_120px_rgba(0,0,0,0.6)]">
                <div className="border-b border-white/5 px-5 py-3 text-sm text-neutral-400 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]" />
                    <span className="font-mono uppercase tracking-[0.18em] text-[0.68rem] text-neutral-400">
                      Martín Coll · Full‑Stack
                    </span>
                  </span>
                  <span className="hidden sm:inline text-xs text-neutral-500 font-mono">
                    martincoll.dev
                  </span>
                </div>
                <div className="px-5 py-6 md:px-7 md:py-7">
                  {children}
                </div>
              </div>
            </ThemeProvider>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
