import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const baseUrl = "https://martincoll.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ];
}
