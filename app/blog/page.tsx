import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { blogArticles, blogCategories } from "@/lib/blog-data";

export const metadata: Metadata = pageMetadata("blog");

const categoryAnchor = (category: string) => category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "et");

export default function BlogPage() {
  const [headline, ...secondary] = blogArticles.slice(0, 3);

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
        <div className="container blog-flow">
          <nav className="blog-topic-nav" aria-label="Catégories du blog">
            {blogCategories.map((category) => (
              <a href={`#${categoryAnchor(category)}`} key={category}>
                {category}
              </a>
            ))}
          </nav>

          <div className="bento bento--featured" aria-label="À la une">
            <article className="bento-tile bento-tile--hero">
              <p className="eyebrow">
                <Sparkles aria-hidden="true" /> À la une — {headline.category}
              </p>
              <h2>{headline.title}</h2>
              <p>{headline.description}</p>
              <Link href={`/blog/${headline.slug}`}>
                Lire l'article <ArrowRight aria-hidden="true" />
              </Link>
            </article>
            {secondary.map((article) => (
              <article className="bento-tile bento-tile--cream" key={article.slug}>
                <p className="eyebrow">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link href={`/blog/${article.slug}`}>
                  Lire l'article <ArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="blog-list">
            {blogCategories.map((category) => {
              const articles = blogArticles.filter((article) => article.category === category);

              return (
                <section id={categoryAnchor(category)} key={category}>
                  <header className="blog-list__heading">
                    <h2>{category}</h2>
                    <p>
                      {articles.length} article{articles.length > 1 ? "s" : ""}
                    </p>
                  </header>
                  <div className="bento">
                    {articles.map((article, index) => (
                      <article
                        className={index % 5 === 0 ? "bento-tile bento-tile--wide" : "bento-tile"}
                        key={article.slug}
                      >
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
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
