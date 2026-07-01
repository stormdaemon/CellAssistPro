import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/blog";
import { SEO, SITE } from "@/lib/site-data";

// À mettre à jour lors d'une évolution réelle du contenu des pages fixes.
const PAGES_LAST_MODIFIED = "2026-07-01";

export default function sitemap(): MetadataRoute.Sitemap {
  const priorities: Record<string, number> = {
    "/": 1,
    "/mes-offres": 0.9,
    "/contact": 0.9,
    "/a-propos": 0.7,
    "/cas-concrets": 0.7,
    "/diagnostic": 0.7,
    "/blog": 0.8,
    "/mentions-legales": 0.3,
    "/politique-confidentialite": 0.3,
  };

  const pages = Object.values(SEO).map((page) => ({
    url: `${SITE.baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: PAGES_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: priorities[page.path] ?? 0.5,
  }));

  const articles = blogArticles.map((article) => ({
    url: `${SITE.baseUrl}/blog/${article.slug}`,
    lastModified: article.dateModified,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...pages, ...articles];
}
