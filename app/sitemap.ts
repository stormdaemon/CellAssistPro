import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/blog-data";
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
    "/blog": 0.8,
    "/mentions-legales": 0.3,
    "/politique-confidentialite": 0.3,
  };

  const pages = Object.values(SEO).map((page) => ({
    url: `${SITE.baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priorities[page.path] ?? 0.5,
  }));

  const articles = blogArticles.map((article) => ({
    url: `${SITE.baseUrl}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...pages, ...articles];
}
