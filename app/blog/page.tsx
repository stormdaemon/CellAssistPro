import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import {
  blogArticles,
  blogCategories,
  formatArticleDate,
  getBlogArticle,
  readingMinutes,
  type BlogArticle,
} from "@/lib/blog";
import { blogJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("blog");

const categoryAnchor = (category: string) => category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "et");

/** Articles piliers mis à la une (repli : les premiers articles si l'un manque). */
const FEATURED_SLUGS = [
  "calendrier-facturation-electronique",
  "tarif-assistante-administrative-independante-facteurs",
  "relance-facture-impayee",
];

function featuredArticles(): BlogArticle[] {
  const picked = FEATURED_SLUGS.map((slug) => getBlogArticle(slug)).filter(
    (article): article is BlogArticle => article !== undefined,
  );
  const fallback = blogArticles.filter((article) => !FEATURED_SLUGS.includes(article.slug));

  return [...picked, ...fallback].slice(0, 3);
}

export default function BlogPage() {
  const [headline, ...secondary] = featuredArticles();

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Blog", "/blog")} />
      <JsonLd data={blogJsonLd()} />

      <PageHero
        eyebrow="Blog de CelAssistPro"
        title="Gestion administrative des TPE et artisans : conseils pratiques"
      >
        <p>
          Facturation électronique, relances, pré-comptabilité, délégation et automatisation :
          des repères simples pour dirigeants de TPE qui veulent récupérer du temps sans perdre le
          contrôle. Pour la réforme en cours, commencez par le{" "}
          <Link href="/facturation-electronique">guide de la facturation électronique</Link>.
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
              <h2>
                <Link className="bento-tile__link" href={`/blog/${headline.slug}`}>
                  {headline.title}
                </Link>
              </h2>
              <p>{headline.description}</p>
              <span className="bento-tile__more" aria-hidden="true">
                Lire l'article <ArrowRight />
              </span>
            </article>
            {secondary.map((article) => (
              <article className="bento-tile bento-tile--cream" key={article.slug}>
                <p className="eyebrow">{article.category}</p>
                <h3>
                  <Link className="bento-tile__link" href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p>{article.description}</p>
                <span className="bento-tile__more" aria-hidden="true">
                  Lire l'article <ArrowRight />
                </span>
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
                        <p className="eyebrow">
                          {formatArticleDate(article.dateModified)} · {readingMinutes(article)} min
                        </p>
                        <h3>
                          <Link className="bento-tile__link" href={`/blog/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>
                        <p>{article.description}</p>
                        <span className="bento-tile__more" aria-hidden="true">
                          Lire l'article <ArrowRight />
                        </span>
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
