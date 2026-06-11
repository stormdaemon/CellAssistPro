import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarCheck, CheckCircle2 } from "lucide-react";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { JsonLd } from "@/components/site/json-ld";
import { blogArticles, getBlogArticle } from "@/lib/blog-data";
import { SITE } from "@/lib/site-data";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | CelAssistPro`,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          author: {
            "@type": "Person",
            name: SITE.founder,
          },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
          },
          mainEntityOfPage: `${SITE.baseUrl}/blog/${article.slug}`,
        }}
      />

      <article className="blog-article">
        <div className="container blog-article__hero">
          <Link className="blog-back" href="/blog">
            <ArrowLeft aria-hidden="true" /> Retour au blog
          </Link>
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>

        <div className="container blog-article__layout">
          <aside className="article-aside">
            <CalendarCheck aria-hidden="true" />
            <p>Besoin de faire le point sur votre propre situation ?</p>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              Diagnostic gratuit — 15 min
            </a>
          </aside>

          <div className="article-body">
            <section>
              <h2>La réponse courte</h2>
              <p>{article.answer}</p>
            </section>

            <section>
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

            <section>
              <h2>Par où commencer simplement</h2>
              <ol>
                {article.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2>Le bon moment pour se faire accompagner</h2>
              <p>
                Le bon moment n'est pas seulement celui où tout déborde. C'est souvent celui où vous
                voyez que la même difficulté revient chaque semaine. À ce stade, une mission courte
                peut remettre de l'ordre, et un accompagnement régulier peut ensuite maintenir le
                cap sans alourdir votre quotidien.
              </p>
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
