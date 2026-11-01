import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Coche, Mots, Stylo } from "@/components/papeterie/objets";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { JsonLd } from "@/components/site/json-ld";
import { RichText } from "@/components/site/rich-text";
import {
  blogArticles,
  formatArticleDate,
  getBlogArticle,
  readingMinutes,
  type BlogArticle,
} from "@/lib/blog";
import { commercialLinksFor } from "@/lib/blog/commercial-links";
import { CTA, SITE } from "@/lib/site-data";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { fr } from "@/lib/typo";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BRAND_SUFFIX = " | CelAssistPro";
const MAX_TITLE_LENGTH = 60;

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

/**
 * « À lire aussi » : d'abord la sélection éditoriale (`related`), puis une rotation dans la
 * catégorie (les articles qui suivent celui-ci), pour qu'aucun article ne reste sans lien
 * venant d'un autre article.
 */
function getRelatedArticles(article: BlogArticle) {
  const picked = (article.related ?? [])
    .map((slug) => getBlogArticle(slug))
    .filter((candidate): candidate is BlogArticle => candidate !== undefined);

  const sameCategory = blogArticles.filter((candidate) => candidate.category === article.category);
  const position = sameCategory.findIndex((candidate) => candidate.slug === article.slug);
  const rotation = sameCategory.map(
    (_, offset) => sameCategory[(position + offset + 1) % sameCategory.length],
  );
  const otherCategories = blogArticles.filter((candidate) => candidate.category !== article.category);

  return [...picked, ...rotation, ...otherCategories]
    .filter(
      (candidate, index, list) =>
        candidate.slug !== article.slug &&
        list.findIndex((other) => other.slug === candidate.slug) === index,
    )
    .slice(0, 4);
}

/** Titre de la balise <title> : 60 caractères au plus, marque ajoutée seulement si elle tient. */
function metaTitle(article: BlogArticle) {
  const base = article.seoTitle ?? article.title;
  return `${base}${BRAND_SUFFIX}`.length <= MAX_TITLE_LENGTH ? `${base}${BRAND_SUFFIX}` : base;
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
    title: metaTitle(article),
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

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const commercialLinks = commercialLinksFor(article);
  const wasUpdated = article.dateModified !== article.datePublished;

  return (
    <main data-chemise="ciel">
      <JsonLd
        data={breadcrumbJsonLd(article.title, `/blog/${article.slug}`, {
          label: "Blog",
          path: "/blog",
        })}
      />
      <JsonLd data={articleJsonLd(article)} />

      <article className="blog-article">
        <header className="blog-article__hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <ol>
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li aria-current="page">{fr(article.title)}</li>
              </ol>
            </nav>
            <p className="eyebrow">{fr(article.category)}</p>
            <h1>
              <Mots>{article.title}</Mots>
            </h1>
            <p>{fr(article.description)}</p>
            <div className="blog-article__meta">
              <span>Publié le {formatArticleDate(article.datePublished)}</span>
              {wasUpdated ? <span>Mis à jour le {formatArticleDate(article.dateModified)}</span> : null}
              <span>
                Par <Link href="/a-propos">{SITE.founder}</Link>
              </span>
              <span>{readingMinutes(article)} min de lecture</span>
            </div>
          </div>
        </header>

        {article.image ? (
          <div className="container">
            <figure className="article-cover">
              <div className="article-cover__media">
                {/* Élément le plus grand au-dessus de la ligne de flottaison : chargé en priorité. */}
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1020px) 980px, 100vw"
                />
              </div>
              {article.image.credit ? <figcaption>{fr(article.image.credit)}</figcaption> : null}
            </figure>
          </div>
        ) : null}

        <div className="container blog-article__layout">
          <aside className="article-aside" data-attrapable="">
            <p>Besoin de faire le point sur votre propre situation&nbsp;?</p>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              {CTA.primary}
            </a>
          </aside>

          <div className="article-body" data-defile="traverse">
            <Stylo className="article-stylo" />
            <section className="article-tile article-lead">
              <h2>À retenir</h2>
              {article.intro.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </section>

            {article.sections.map((section) => (
              <section className="article-tile" key={section.heading}>
                <h2>{fr(section.heading)}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>
                        <Coche />
                        <span>
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.steps ? (
                  <ol>
                    {section.steps.map((step) => (
                      <li key={step}>
                        <RichText text={step} />
                      </li>
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
                      <summary>{fr(item.question)}</summary>
                      <p>
                        <RichText text={item.answer} />
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            {article.sources && article.sources.length > 0 ? (
              <section className="article-tile">
                <h2>Sources</h2>
                <ul className="article-sources">
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} rel="noopener" target="_blank">
                        {fr(source.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="article-tile article-author">
              <h2>Qui écrit&nbsp;?</h2>
              <div className="article-author__ligne">
                <Image
                  alt=""
                  className="article-author__photo"
                  height={148}
                  sizes="74px"
                  src="/images/celine/02-celine-avatar-google-linkedin.jpg"
                  width={148}
                />
                <div>
                  <p>
                    <Link href="/a-propos">{SITE.founder}</Link>, assistante administrative indépendante
                    basée à Champagne-Vigny, en Charente, fondatrice de CelAssistPro. Trente ans
                    d’administratif et de pré-comptabilité, et depuis 2017&nbsp;la gestion administrative
                    d’une entreprise du bâtiment&nbsp;: les méthodes décrites ici sont celles qu’elle applique
                    chaque semaine.
                  </p>
                  <span aria-hidden="true" className="article-author__signature">
                    Céline
                  </span>
                </div>
              </div>
            </section>

            <section className="article-tile article-tile--accent">
              <h2>Et pour votre entreprise&nbsp;?</h2>
              <p>
                Selon l’endroit où vous en êtes, la suite logique n’est pas la même. Voici les
                pistes les plus utiles pour aller plus loin&nbsp;:
              </p>
              <ul>
                {commercialLinks.map((link) => (
                  <li key={link.href}>
                    <Coche />
                    <span>
                      <Link href={link.href}>{fr(link.label)}</Link>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="article-tile">
              <h2>À lire aussi</h2>
              <ul className="article-related">
                {relatedArticles.map((related) => (
                  <li key={related.slug}>
                    <Link href={`/blog/${related.slug}`}>
                      {fr(related.title)} <ArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <LeadMagnet />
    </main>
  );
}
