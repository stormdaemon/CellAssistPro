import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/blog";
import { SEO, SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Dates réelles : `lastModified` de chaque page fixe, `dateModified` de chaque article.
  // `changefreq` et `priority` ne sont pas utilisés par Google : ils sont omis.
  const latestArticle = blogArticles.reduce(
    (latest, article) => (article.dateModified > latest ? article.dateModified : latest),
    "",
  );

  const pages = Object.values(SEO).map((page) => ({
    url: `${SITE.baseUrl}${page.path}`,
    lastModified:
      page.path === "/blog" && latestArticle > page.lastModified ? latestArticle : page.lastModified,
  }));

  const articles = blogArticles.map((article) => ({
    url: `${SITE.baseUrl}/blog/${article.slug}`,
    lastModified: article.dateModified,
    // Sitemap d'images : la couverture de l'article, pour Google Images.
    ...(article.image ? { images: [`${SITE.baseUrl}${article.image.src}`] } : {}),
  }));

  return [...pages, ...articles];
}
