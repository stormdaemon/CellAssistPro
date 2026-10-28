export type BlogSection = {
  heading: string;
  /** Paragraphes de prose. */
  paragraphs?: string[];
  /** Liste à puces, rendue après les paragraphes. */
  list?: string[];
  /** Liste numérotée (étapes), rendue après les paragraphes. */
  steps?: string[];
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogImage = {
  /** Chemin public, ex. /images/blog/mon-slug.jpg */
  src: string;
  alt: string;
  /** Crédit photo, ex. "Photo : Prénom Nom / Pexels" */
  credit?: string;
};

/** Source citée en fin d'article (texte officiel en priorité). */
export type BlogSource = {
  label: string;
  url: string;
};

/**
 * Les textes (intro, paragraphes, listes, étapes, réponses de FAQ) acceptent des liens au
 * format `[ancre descriptive](/chemin)` ou `[ancre](https://…)`, rendus par `RichText`.
 */
export type BlogArticle = {
  slug: string;
  title: string;
  /** Balise <title> (60 caractères au plus, sans le nom de la marque). À défaut : `title`. */
  seoTitle?: string;
  description: string;
  category: string;
  keyword: string;
  /** Date ISO (AAAA-MM-JJ) de première publication. */
  datePublished: string;
  /** Date ISO (AAAA-MM-JJ) de dernière mise à jour réelle. */
  dateModified: string;
  /** 1 à 2 paragraphes qui répondent directement à la question du titre. */
  intro: string[];
  sections: BlogSection[];
  faq?: BlogFaqItem[];
  image?: BlogImage;
  /** Sources consultées, affichées en fin d'article. */
  sources?: BlogSource[];
  /** Slugs proposés dans « À lire aussi » (sinon : rotation dans la catégorie). */
  related?: string[];
};

/** Retire la syntaxe des liens `[ancre](url)` pour ne garder que l'ancre. */
export function stripLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}

const WORDS_PER_MINUTE = 220;

export function readingMinutes(article: BlogArticle): number {
  const text = [
    ...article.intro,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.list ?? []),
      ...(section.steps ?? []),
    ]),
    ...(article.faq ?? []).flatMap((item) => [item.question, item.answer]),
  ]
    .map(stripLinks)
    .join(" ");

  return Math.max(1, Math.round(text.split(/\s+/).length / WORDS_PER_MINUTE));
}

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatArticleDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T12:00:00Z`));
}
