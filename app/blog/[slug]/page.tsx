import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { JsonLd } from "@/components/site/json-ld";
import { blogArticles, getBlogArticle, type BlogArticle } from "@/lib/blog-data";
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

const updatedAt = "2026-06-11";
const updatedAtLabel = "11 juin 2026";

function getRelatedArticles(article: BlogArticle) {
  const sameCategory = blogArticles.filter(
    (candidate) => candidate.category === article.category && candidate.slug !== article.slug,
  );
  const fallback = blogArticles.filter((candidate) => candidate.slug !== article.slug);

  return [...sameCategory, ...fallback.filter((candidate) => candidate.category !== article.category)].slice(0, 4);
}

function articleJsonLd(article: BlogArticle, relatedArticles: BlogArticle[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    articleSection: article.category,
    keywords: article.keyword,
    inLanguage: "fr-FR",
    datePublished: updatedAt,
    dateModified: updatedAt,
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
        url: `${SITE.baseUrl}/images/logos/celassistpro-flame-transparent.png`,
      },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/${article.slug}`,
    about: article.keyword,
    isPartOf: {
      "@type": "Blog",
      name: "Blog CelAssistPro",
      url: `${SITE.baseUrl}/blog`,
    },
    relatedLink: relatedArticles.map((related) => `${SITE.baseUrl}/blog/${related.slug}`),
  };
}

function faqJsonLd(article: BlogArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  const image = "/images/celine/01-celine-hero-accueil-sourire.jpg";

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
      images: [{ url: image, width: 1024, height: 1024, alt: "Céline Bardan, fondatrice de CelAssistPro" }],
      locale: "fr_FR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
    },
  };
}

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
      <JsonLd data={articleJsonLd(article, relatedArticles)} />
      <JsonLd data={faqJsonLd(article)} />

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
              <span>Mis à jour le {updatedAtLabel}</span>
              <span>Par {SITE.founder}</span>
              <span>5 min de lecture</span>
            </div>
          </div>
        </header>

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
              <p>{article.answer}</p>
              <p>
                Le sujet "{article.keyword}" devient concret quand il est relié à votre semaine :
                vos demandes clients, vos factures, vos pièces, vos échéances et le temps que vous
                récupérez vraiment.
              </p>
            </section>

            <section className="article-tile">
              <h2>Pourquoi ce sujet pèse vite dans une TPE</h2>
              {article.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="article-tile article-tile--cream">
              <h2>Un exemple concret</h2>
              <p>{article.example}</p>
            </section>

            <section className="article-tile">
              <h2>Les signes que le sujet devient urgent</h2>
              <ul>
                {article.signals.map((signal) => (
                  <li key={signal}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="article-tile article-tile--violet">
              <h2>Par où commencer sans perdre une semaine</h2>
              <ol>
                {article.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="article-tile">
              <h2>Les erreurs à éviter</h2>
              <ul>
                {article.mistakes.map((mistake) => (
                  <li key={mistake}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>

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

            <section className="article-tile article-tile--wide article-tile--accent">
              <h2>Le bon moment pour se faire accompagner</h2>
              <p>
                Le bon moment n'est pas seulement celui où tout déborde. C'est souvent celui où vous
                voyez que la même difficulté revient chaque semaine. À ce stade, une mission courte
                peut remettre de l'ordre, et un accompagnement régulier peut ensuite maintenir le
                cap sans alourdir votre quotidien.
              </p>
              <p>
                Vous pouvez commencer par un <Link href="/diagnostic">auto-diagnostic gratuit</Link>,
                comparer les <Link href="/mes-offres">formules d'accompagnement</Link>, ou réserver
                directement 15 minutes pour poser votre situation.
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
