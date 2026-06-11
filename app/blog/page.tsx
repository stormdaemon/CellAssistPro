import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, SearchCheck } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { blogArticles, blogCategories } from "@/lib/blog-data";

export const metadata: Metadata = pageMetadata("blog");

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog gestion administrative TPE"
        title="Conseils concrets pour reprendre la main sur votre gestion"
      >
        <p>
          Organisation, pré-comptabilité, facturation électronique, délégation et automatisation :
          des repères simples pour dirigeants de TPE qui veulent récupérer du temps sans perdre le
          contrôle.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container blog-hub">
          <aside className="blog-sidebar" aria-label="Thèmes du blog">
            <SearchCheck aria-hidden="true" />
            <h2>Thèmes</h2>
            <div>
              {blogCategories.map((category) => (
                <a href={`#${category.toLowerCase().replaceAll(" ", "-")}`} key={category}>
                  {category}
                </a>
              ))}
            </div>
          </aside>

          <div className="blog-list">
            {blogCategories.map((category) => (
              <section id={category.toLowerCase().replaceAll(" ", "-")} key={category}>
                <h2>{category}</h2>
                <div className="blog-card-grid">
                  {blogArticles
                    .filter((article) => article.category === category)
                    .map((article) => (
                      <article className="blog-card" key={article.slug}>
                        <BookOpen aria-hidden="true" />
                        <p className="eyebrow">{article.keyword}</p>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <Link href={`/blog/${article.slug}`}>
                          Lire l'article <ArrowRight aria-hidden="true" />
                        </Link>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
