import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { JsonLd } from "@/components/site/json-ld";
import {
  blogArticles,
  formatArticleDate,
  getBlogArticle,
  readingMinutes,
  type BlogArticle,
} from "@/lib/blog";
import { SITE } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/structured-data";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

function getRelatedArticles(article: BlogArticle) {
  const sameCategory = blogArticles.filter(
    (candidate) => candidate.category === article.category && candidate.slug !== article.slug,
  );
  const fallback = blogArticles.filter((candidate) => candidate.slug !== article.slug);

  return [...sameCategory, ...fallback.filter((candidate) => candidate.category !== article.category)].slice(0, 4);
}

function articleJsonLd(article: BlogArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    articleSection: article.category,
    keywords: article.keyword,
    inLanguage: "fr-FR",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "Directrice des opérations externalisée",
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.baseUrl}/images/logos/celassistpro-flame-240.png`,
      },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/${article.slug}`,
    isPartOf: {
      "@type": "Blog",
      name: "Blog CelAssistPro",
      url: `${SITE.baseUrl}/blog`,
    },
  };
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  const image = article.image
    ? { url: article.image.src, alt: article.image.alt }
    : {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "CelAssistPro — Céline Bardan, votre bras droit stratégique",
      };

  return {
    title: `${article.title} | CelAssistPro`,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      siteName: SITE.name,
      images: [image],
      locale: "fr_FR",
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [SITE.founder],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image.url],
    },
  };
}

const tileVariants = ["", " article-tile--cream", "", " article-tile--violet", ""];

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(article.title, `/blog/${article.slug}`)} />
      <JsonLd data={articleJsonLd(article)} />

      <article className="blog-article">
        <header className="blog-article__hero">
          <div className="container">
            <Link className="blog-back" href="/blog">
              <ArrowLeft aria-hidden="true" /> Retour au blog
            </Link>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="blog-article__meta">
              <span>Mis à jour le {formatArticleDate(article.dateModified)}</span>
              <span>Par {SITE.founder}</span>
              <span>{readingMinutes(article)} min de lecture</span>
            </div>
          </div>
        </header>

        {article.image ? (
          <div className="container">
            <figure className="article-cover">
              <div className="article-cover__media">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  sizes="(min-width: 1160px) 1120px, 100vw"
                />
              </div>
              {article.image.credit ? <figcaption>{article.image.credit}</figcaption> : null}
            </figure>
          </div>
        ) : null}

        <div className="container blog-article__layout">
          <aside className="article-aside">
            <CalendarCheck aria-hidden="true" />
            <p>Besoin de faire le point sur votre propre situation ?</p>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              Diagnostic gratuit — 15 min
            </a>
          </aside>

          <div className="article-body">
            <section className="article-tile article-tile--wide article-lead">
              <h2>À retenir</h2>
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            {article.sections.map((section, index) => (
              <section
                className={`article-tile${tileVariants[index % tileVariants.length]}`}
                key={section.heading}
              >
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>
                        <CheckCircle2 aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.steps ? (
                  <ol>
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                ) : null}
              </section>
            ))}

            {article.faq && article.faq.length > 0 ? (
              <section className="article-tile">
                <h2>Questions fréquentes</h2>
                <div className="article-faq">
                  {article.faq.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="article-tile article-tile--wide article-tile--accent">
              <h2>Et pour votre entreprise ?</h2>
              <p>
                Vous pouvez situer votre propre gestion en 5 minutes avec l'
                <Link href="/diagnostic">auto-diagnostic gratuit</Link>, comparer les{" "}
                <Link href="/mes-offres">formules d'accompagnement</Link>, ou réserver directement
                15 minutes pour poser votre situation.
              </p>
            </section>

            <section className="article-tile article-tile--wide">
              <h2>À lire aussi</h2>
              <ul className="article-related">
                {relatedArticles.map((related) => (
                  <li key={related.slug}>
                    <Link href={`/blog/${related.slug}`}>
                      {related.title} <ArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="container">
        <LeadMagnet />
      </div>
    </main>
  );
}
