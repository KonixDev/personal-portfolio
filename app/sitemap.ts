import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

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
  const posts = getAllPosts();

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
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
