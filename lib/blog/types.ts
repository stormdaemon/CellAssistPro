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

export type BlogArticle = {
  slug: string;
  title: string;
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
};

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
  ].join(" ");

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
