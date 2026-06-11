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

const categoryGuides: Record<
  string,
  {
    context: string;
    example: string;
    mistakes: string[];
  }
> = {
  "SEO local Charente": {
    context:
      "Pour une entreprise locale, la gestion ne se joue pas seulement dans les outils. Elle se joue dans la capacité à répondre vite, retrouver les bons documents, garder un suivi propre et rassurer les clients comme les partenaires. En Charente, cette proximité compte aussi : le dirigeant a souvent besoin d'une personne capable de comprendre le terrain, puis de maintenir le suivi à distance sans lourdeur.",
    example:
      "Un dirigeant qui reçoit une demande de devis, une facture fournisseur et une relance client dans la même journée peut vite perdre le fil. Avec un circuit simple, chaque demande a une place, une échéance et une prochaine action. Le bureau ne dépend plus de la mémoire du soir.",
    mistakes: [
      "Attendre que tout déborde avant de remettre l'organisation au propre.",
      "Multiplier les outils sans avoir clarifié le circuit de départ.",
      "Confier des tâches sans définir le résultat attendu et le rythme de suivi.",
    ],
  },
  "Automatisation & IA": {
    context:
      "L'automatisation devient utile quand elle repose sur un processus déjà compris. Dans une TPE, l'objectif n'est pas de remplacer le jugement humain, mais d'enlever les répétitions : copier les mêmes informations, relancer à la main, classer toujours les mêmes pièces ou reformuler des messages identiques.",
    example:
      "Une boîte mail peut rester humaine tout en étant mieux organisée : accusés de réception, tri des demandes, rappels de pièces manquantes, modèles de réponses et contrôle final. Le client est rassuré, le dirigeant garde la main, et la journée respire davantage.",
    mistakes: [
      "Automatiser une tâche mal définie.",
      "Choisir l'outil avant d'avoir décrit le besoin réel.",
      "Laisser tourner une automatisation sans contrôle ni documentation.",
    ],
  },
  "Facturation électronique": {
    context:
      "La facturation électronique demande surtout de la méthode. Avant de penser plateforme, format ou calendrier, une TPE doit savoir comment elle crée ses factures, comment elle les reçoit, où elles sont classées, qui les vérifie et comment les règlements sont suivis.",
    example:
      "Une facture conforme mais introuvable reste un problème. Un circuit propre relie le devis, la facture, le paiement, la relance et la pièce transmise au comptable. C'est ce fil qui évite les oublis et les corrections de dernière minute.",
    mistakes: [
      "Penser qu'un PDF envoyé par email suffit à régler le sujet.",
      "Attendre l'échéance réglementaire pour nettoyer ses modèles.",
      "Choisir une solution trop lourde pour le volume réel de l'entreprise.",
    ],
  },
  "Pré-comptabilité": {
    context:
      "La pré-comptabilité n'est pas de la comptabilité à la place du cabinet. C'est le travail de préparation qui évite les pièces manquantes, les relances, les recherches de justificatifs et les transmissions dans l'urgence.",
    example:
      "Quand les factures d'achat, les ventes, les règlements et les justificatifs sont rangés au fil de l'eau, le comptable reçoit un dossier clair. Le dirigeant passe moins de temps à reconstituer le mois et garde une meilleure visibilité sur sa trésorerie.",
    mistakes: [
      "Tout garder pour la fin du mois ou la clôture.",
      "Mélanger factures, devis, tickets et relevés sans règle commune.",
      "Confondre classement documentaire et suivi réel des règlements.",
    ],
  },
  "Délégation": {
    context:
      "Déléguer ne veut pas dire perdre le contrôle. Une bonne délégation commence par un périmètre clair, des accès maîtrisés, un rythme de retour simple et une personne capable de signaler ce qui bloque avant que cela devienne urgent.",
    example:
      "Un dirigeant peut garder la décision commerciale tout en confiant la préparation des devis, les relances, le classement et le suivi des pièces. Il valide ce qui compte, sans porter chaque micro-tâche.",
    mistakes: [
      "Déléguer tout d'un coup sans prioriser.",
      "Ne pas prévoir de point de suivi.",
      "Mesurer seulement le coût horaire au lieu de regarder le temps réellement libéré.",
    ],
  },
  "Métiers": {
    context:
      "Chaque métier a ses propres contraintes : chantiers, rendez-vous, dossiers clients, suivi fournisseurs, confidentialité, saisonnalité. L'administratif doit donc s'adapter au quotidien réel, pas l'inverse.",
    example:
      "Un artisan, un courtier, un consultant ou un praticien n'ont pas le même rythme, mais le besoin est souvent le même : répondre plus vite, suivre les documents, éviter les oublis et garder du temps pour le cœur de métier.",
    mistakes: [
      "Copier une organisation pensée pour une autre activité.",
      "Laisser les tâches administratives envahir les soirs et les week-ends.",
      "Traiter chaque demande comme une urgence isolée.",
    ],
  },
  "Organisation TPE": {
    context:
      "L'organisation d'une TPE doit rester simple, visible et tenable. Le bon système n'est pas celui qui impressionne, c'est celui que l'on utilise vraiment quand l'activité accélère.",
    example:
      "Un tableau de suivi, un calendrier d'échéances et un classement clair peuvent déjà changer la semaine. Ensuite seulement, on peut automatiser ou déléguer ce qui revient régulièrement.",
    mistakes: [
      "Ajouter des outils sans supprimer les doublons.",
      "Garder les échéances dans la tête du dirigeant.",
      "Reporter la structuration sous prétexte que l'entreprise est encore petite.",
    ],
  },
};

function getCategoryGuide(article: BlogArticle) {
  return categoryGuides[article.category] ?? categoryGuides["Organisation TPE"];
}

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
    mainEntity: [
      {
        "@type": "Question",
        name: `Quand faut-il agir sur le sujet "${article.keyword}" ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: article.signals[0],
        },
      },
      {
        "@type": "Question",
        name: "Par quoi commencer sans se compliquer la vie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: article.steps[0],
        },
      },
    ],
  };
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

  const guide = getCategoryGuide(article);
  const relatedArticles = getRelatedArticles(article);

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd(article.title, `/blog/${article.slug}`)} />
      <JsonLd data={articleJsonLd(article, relatedArticles)} />
      <JsonLd data={faqJsonLd(article)} />

      <article className="blog-article">
        <div className="container blog-article__hero">
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

        <div className="container blog-article__layout">
          <aside className="article-aside">
            <CalendarCheck aria-hidden="true" />
            <p>Besoin de faire le point sur votre propre situation ?</p>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              Diagnostic gratuit — 15 min
            </a>
          </aside>

          <div className="article-body">
            <section className="article-lead">
              <h2>À retenir</h2>
              <p>{article.answer}</p>
              <p>
                Le sujet "{article.keyword}" devient concret quand il est relié à votre semaine :
                vos demandes clients, vos factures, vos pièces, vos échéances et le temps que vous
                récupérez vraiment.
              </p>
            </section>

            <section>
              <h2>Pourquoi ce sujet pèse vite dans une TPE</h2>
              <p>{guide.context}</p>
              <p>
                La bonne méthode consiste à partir de votre fonctionnement réel, puis à poser un
                cadre suffisamment simple pour être tenu dans la durée. C'est ce qui permet de
                déléguer, automatiser ou remettre de l'ordre sans créer une nouvelle charge mentale.
              </p>
            </section>

            <section>
              <h2>Un exemple concret</h2>
              <p>{guide.example}</p>
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
              <h2>Par où commencer sans perdre une semaine</h2>
              <ol>
                {article.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2>Les erreurs à éviter</h2>
              <ul>
                {guide.mistakes.map((mistake) => (
                  <li key={mistake}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Le bon moment pour se faire accompagner</h2>
              <p>
                Le bon moment n'est pas seulement celui où tout déborde. C'est souvent celui où vous
                voyez que la même difficulté revient chaque semaine. À ce stade, une mission courte
                peut remettre de l'ordre, et un accompagnement régulier peut ensuite maintenir le
                cap sans alourdir votre quotidien.
              </p>
              <p>
                Vous pouvez commencer par un <Link href="/ressources">auto-diagnostic gratuit</Link>,
                comparer les <Link href="/mes-offres">formules d'accompagnement</Link>, ou réserver
                directement 15 minutes pour poser votre situation.
              </p>
            </section>

            <section>
              <h2>Questions fréquentes</h2>
              <div className="article-faq">
                <details>
                  <summary>Est-ce que ce sujet concerne aussi une toute petite entreprise ?</summary>
                  <p>
                    Oui, justement. Plus l'entreprise est petite, plus chaque heure perdue pèse vite
                    sur la production, les clients et les soirées du dirigeant.
                  </p>
                </details>
                <details>
                  <summary>Faut-il forcément changer tous ses outils ?</summary>
                  <p>
                    Non. La priorité est de comprendre ce qui bloque. Un outil peut aider, mais il
                    arrive souvent après la clarification du circuit.
                  </p>
                </details>
              </div>
            </section>

            <section>
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
