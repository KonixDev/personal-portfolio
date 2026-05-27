"use client";

import Image from "next/image";

type MarqueeItem = { name: string; slug: string; color: string };

const row1: MarqueeItem[] = [
  { name: "Next.js", slug: "nextdotjs", color: "#000" },
  { name: "React Native", slug: "react", color: "#61DAFB" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
  { name: "Node.js", slug: "nodedotjs", color: "#339933" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "Prisma", slug: "prisma", color: "#2D3748" },
  { name: "Railway", slug: "railway", color: "#0B0D0E" },
  { name: "Stripe", slug: "stripe", color: "#635BFF" },
  { name: "Vercel", slug: "vercel", color: "#000" },
];

const row2: MarqueeItem[] = [
  { name: "Expo", slug: "expo", color: "#000020" },
  { name: "Redis", slug: "redis", color: "#DC382D" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "GitHub", slug: "github", color: "#181717" },
  { name: "Figma", slug: "figma", color: "#F24E1E" },
  { name: "Sentry", slug: "sentry", color: "#362D59" },
  { name: "Supabase", slug: "supabase", color: "#3ECF8E" },
  { name: "Firebase", slug: "firebase", color: "#DD2C00" },
  { name: "Cloudflare", slug: "cloudflare", color: "#F38020" },
  { name: "Grafana", slug: "grafana", color: "#F46800" },
];

const row3: MarqueeItem[] = [
  { name: "Anthropic", slug: "anthropic", color: "#191919" },
  { name: "MercadoPago", slug: "mercadopago", color: "#009EE3" },
  { name: "Resend", slug: "resend", color: "#000" },
  { name: "Kotlin", slug: "kotlin", color: "#7F52FF" },
  { name: "Swift", slug: "swift", color: "#F05138" },
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "Bun", slug: "bun", color: "#000" },
  { name: "Go", slug: "go", color: "#00ADD8" },
  { name: "Turborepo", slug: "turborepo", color: "#EF4444" },
  { name: "Linux", slug: "linux", color: "#FCC624" },
];

function LogoIcon({ slug, color, name }: { slug: string; color: string; name: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-xl bg-white md:rounded-2xl"
      style={{ width: "clamp(40px, 5vw, 64px)", height: "clamp(40px, 5vw, 64px)" }}
    >
      <Image
        src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`}
        alt={`${name} logo`}
        width={32}
        height={32}
        className="h-[50%] w-[50%] object-contain"
        unoptimized
      />
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 80 }: { items: MarqueeItem[]; direction?: "left" | "right"; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="flex shrink-0"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div className="flex gap-x-6 pr-6 md:gap-x-10 md:pr-10">
          {doubled.map((item, i) => (
            <div key={`${item.name}-${i}`} className="flex items-center gap-x-3 md:gap-x-4">
              <LogoIcon slug={item.slug} color={item.color} name={item.name} />
              <p className="whitespace-nowrap text-[clamp(18px,2.5vw,28px)] font-semibold tracking-tight text-[var(--color-text)]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex shrink-0"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div className="flex gap-x-6 pr-6 md:gap-x-10 md:pr-10">
          {doubled.map((item, i) => (
            <div key={`${item.name}-dup-${i}`} className="flex items-center gap-x-3 md:gap-x-4">
              <LogoIcon slug={item.slug} color={item.color} name={item.name} />
              <p className="whitespace-nowrap text-[clamp(18px,2.5vw,28px)] font-semibold tracking-tight text-[var(--color-text)]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div className="flex flex-col gap-4 md:gap-6">
        <MarqueeRow items={row1} direction="left" speed={80} />
        <MarqueeRow items={row2} direction="right" speed={90} />
        <MarqueeRow items={row3} direction="left" speed={75} />
      </div>
    </section>
  );
}
