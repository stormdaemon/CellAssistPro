import type { MetadataRoute } from "next";
import { SEO, SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const priorities: Record<string, number> = {
    "/": 1,
    "/mes-offres": 0.9,
    "/contact": 0.9,
    "/a-propos": 0.7,
    "/cas-concrets": 0.7,
    "/ressources": 0.7,
    "/mentions-legales": 0.3,
    "/politique-confidentialite": 0.3,
  };

  return Object.values(SEO).map((page) => ({
    url: `${SITE.baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: priorities[page.path] ?? 0.5,
  }));
}
