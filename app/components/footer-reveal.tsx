"use client";

import { useLayoutEffect, useRef, useState } from "react";

export function FooterReveal({
  main,
  footer,
}: {
  main: React.ReactNode;
  footer: React.ReactNode;
}) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerH, setFooterH] = useState(500);

  useLayoutEffect(() => {
    if (!footerRef.current) return;
    const measure = () => {
      const h = footerRef.current?.offsetHeight ?? 500;
      setFooterH(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

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
