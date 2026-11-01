import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Intercalaires } from "@/components/papeterie/intercalaires";
import { Tampon } from "@/components/papeterie/objets";
import { SceneTiroir } from "@/components/papeterie/scenes";
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
import { fr } from "@/lib/typo";

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

type FicheProps = {
  article: BlogArticle;
  /** Ce qui précède le titre : la rubrique à la une, la date dans les tiroirs. */
  repere: string;
  sizes: string;
  titre?: "h2" | "h3";
  une?: boolean;
};

/** Une fiche du tiroir : la photo scotchée, la date tapée à la machine, le titre. */
function Fiche({ article, repere, sizes, titre: Titre = "h3", une = false }: FicheProps) {
  return (
    <article className="fiche-blog">
      <div className="fiche-blog__photo">
        {article.image ? <Image src={article.image.src} alt="" fill sizes={sizes} /> : null}
      </div>
      {une ? <Tampon className="fiche-blog__une">À la une</Tampon> : null}
      <p className="fiche-blog__date">{fr(repere)}</p>
      <Titre>
        <Link className="fiche-blog__lien" href={`/blog/${article.slug}`}>
          {fr(article.title)}
        </Link>
      </Titre>
      <p>{fr(article.description)}</p>
    </article>
  );
}

export default function BlogPage() {
  const [headline, ...secondary] = featuredArticles();

  return (
    <main data-chemise="ciel">
      <JsonLd data={breadcrumbJsonLd("Blog", "/blog")} />
      <JsonLd data={blogJsonLd()} />

      <PageHero
        objet={<SceneTiroir rubriques={blogCategories} />}
        eyebrow="Blog de CelAssistPro"
        title="Gestion administrative des TPE et artisans : conseils pratiques"
      >
        <p>
          Facturation électronique, relances, pré-comptabilité, délégation et automatisation&nbsp;:
          des repères simples pour dirigeants de TPE qui veulent récupérer du temps sans perdre le
          contrôle. Pour la réforme en cours, commencez par le{" "}
          <Link href="/facturation-electronique">guide de la facturation électronique</Link>.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container blog-flow">
          <Intercalaires
            rubriques={blogCategories.map((category) => ({
              ancre: categoryAnchor(category),
              libelle: category,
            }))}
          />

          <div className="blog-une" role="group" aria-label="À la une">
            <Fiche
              article={headline}
              repere={headline.category}
              sizes="(min-width: 900px) 700px, 100vw"
              titre="h2"
              une
            />
            {secondary.map((article) => (
              <Fiche
                article={article}
                key={article.slug}
                repere={article.category}
                sizes="(min-width: 900px) 420px, 100vw"
              />
            ))}
          </div>

          <div className="blog-list">
            {blogCategories.map((category) => {
              const articles = blogArticles.filter((article) => article.category === category);

              return (
                <section id={categoryAnchor(category)} key={category}>
                  <header className="blog-list__heading">
                    <div className="porte-etiquette">
                      <h2>{fr(category)}</h2>
                      <p>
                        {articles.length} article{articles.length > 1 ? "s" : ""}
                      </p>
                    </div>
                    <span aria-hidden="true" className="tiroir__poignee" />
                  </header>
                  <div className="fiches-blog">
                    {articles.map((article) => (
                      <Fiche
                        article={article}
                        key={article.slug}
                        repere={`${formatArticleDate(article.dateModified)} · ${readingMinutes(article)} min`}
                        sizes="(min-width: 1180px) 280px, (min-width: 620px) 45vw, 100vw"
                      />
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
