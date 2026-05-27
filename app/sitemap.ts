import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const baseUrl = "https://martincoll.dev";

const verticals = [
  "apps-mobile",
  "desarrollo-web",
  "sistemas-backend",
  "android-tv",
  "ciberseguridad",
  "seo-geo",
  "rediseno-web",
  "bases-de-datos",
  "optimizacion-sistemas",
  "erp-dashboards",
  "publicacion-stores",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...verticals.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
