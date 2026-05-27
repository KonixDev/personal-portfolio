"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";

export function FooterReveal({
  main,
  footer,
}: {
  main: React.ReactNode;
  footer: React.ReactNode;
}) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerH, setFooterH] = useState(500);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useLayoutEffect(() => {
    if (!footerRef.current || isMobile) return;
    const measure = () => {
      const h = footerRef.current?.offsetHeight ?? 500;
      setFooterH(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isMobile]);

  if (isMobile) {
    return (
      <>
        <div className="min-h-screen bg-[var(--color-bg)]">{main}</div>
        <div>{footer}</div>
      </>
    );
  }

  return (
    <div className="relative bg-[var(--color-bg-inverse)]">
      <div
        className="relative z-10 rounded-b-[32px] bg-[var(--color-bg)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
        style={{ marginBottom: footerH }}
      >
        {main}
      </div>
      <div ref={footerRef} className="fixed bottom-0 left-0 right-0 z-0">
        {footer}
      </div>
    </div>
  );
}
