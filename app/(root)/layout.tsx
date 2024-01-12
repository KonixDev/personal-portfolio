import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/shared/sections/Header";
import { cn } from "../../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Martín Coll FullStack Developer Portfolio",
  description:
    "This is my personal portfolio, where i show my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background font-sans antialiased`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
