import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "facturation-electronique-qui-est-concerne",
  title: "Facturation électronique obligatoire pour qui ? Qui est concerné, statut par statut",
  seoTitle: "Facturation électronique obligatoire pour qui en 2026-2027",
  description:
    "Qui doit recevoir et émettre des factures électroniques : entreprises assujetties à la TVA, micro-entrepreneurs, professions libérales, exclusions.",
  category: "Facturation électronique",
  keyword: "facturation électronique obligatoire pour qui",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  intro: [
    "La facturation électronique est obligatoire pour toutes les entreprises assujetties à la TVA et établies en France, quelle que soit leur taille. Les micro-entrepreneurs en franchise en base de TVA sont concernés, et les professions libérales le sont pour les opérations soumises à la TVA. Les entreprises non assujetties restent en dehors du dispositif, et certaines opérations relèvent de l'e-reporting plutôt que de la facture électronique.",
    "Cet article répond à une question simple : êtes-vous concerné, et à quelle date ? Le cadre complet figure dans le [guide de la facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "Les entreprises assujetties à la TVA",
      paragraphs: [
        "Toutes les entreprises assujetties à la TVA et établies en France doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026. Leur taille ne change rien à la réception. Pour l'émission, elle compte : les grandes entreprises et les ETI émettent depuis le 1er septembre 2026, les PME, les TPE et les micro-entreprises au plus tard le 1er septembre 2027. Le cadre officiel figure sur [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique).",
        "Les dates précises sont récapitulées dans l'article sur le [calendrier de la facturation électronique](/blog/calendrier-facturation-electronique).",
      ],
    },
    {
      heading: "Micro-entrepreneurs et franchise en base de TVA",
      paragraphs: [
        "La franchise en base dispense de facturer la TVA, mais elle ne sort pas de la réforme. Un micro-entrepreneur en franchise doit pouvoir recevoir des factures électroniques depuis le 1er septembre 2026, et émettre au plus tard le 1er septembre 2027. La mention « TVA non applicable, art. 293 B du code général des impôts » reste à porter sur ses factures.",
        "Pour les mentions et les échéances propres aux micro-entrepreneurs, voir [l'article dédié](/blog/facturation-electronique-micro-entrepreneur).",
      ],
    },
    {
      heading: "Professions libérales : tout dépend des opérations soumises à la TVA",
      paragraphs: [
        "Les professions libérales ne sont pas toutes soumises à la TVA, et leur situation dépend de la nature de leurs prestations. Les soins dispensés par les professionnels de santé, dont les kinésithérapeutes, sont en principe exonérés de TVA (article 261 du code général des impôts).",
        "Lorsqu'une profession libérale réalise des opérations soumises à la TVA, le calendrier s'applique à ces factures-là. Votre expert-comptable confirme le périmètre exact de votre situation.",
      ],
    },
    {
      heading: "Entreprises non assujetties et opérations hors champ",
      list: [
        "Une entreprise non assujettie à la TVA n'entre pas dans le dispositif de réception et d'émission de la réforme.",
        "Les ventes à des particuliers ne se traitent pas comme des factures électroniques entre entreprises : elles relèvent de l'e-reporting.",
        "Les opérations internationales, comme les exportations ou les échanges intracommunautaires de biens, relèvent elles aussi de l'e-reporting.",
        "Les factures adressées au secteur public passent par le portail public Chorus Pro, qui reste en place pour elles.",
      ],
    },
    {
      heading: "Trois questions pour savoir si vous êtes concerné",
      steps: [
        "Êtes-vous assujetti à la TVA, y compris en franchise en base ? Si oui, vous devez pouvoir recevoir des factures électroniques depuis le 1er septembre 2026.",
        "Vos ventes vont-elles à des entreprises assujetties (facture électronique), ou à des particuliers et à l'étranger (e-reporting) ?",
        "Quelle est la taille de votre entreprise ? Les grandes entreprises et les ETI émettent depuis le 1er septembre 2026 ; les PME, les TPE et les micro-entreprises au plus tard le 1er septembre 2027.",
      ],
    },
  ],
  faq: [
    {
      question: "Un micro-entrepreneur en franchise de TVA est-il concerné ?",
      answer:
        "Oui, pour la réception, dès le 1er septembre 2026. Pour l'émission, l'échéance est au plus tard le 1er septembre 2027.",
    },
    {
      question: "Une profession libérale doit-elle passer à la facturation électronique ?",
      answer:
        "Seulement pour les opérations soumises à la TVA. Les soins de nombreux professionnels de santé sont en principe exonérés ; votre expert-comptable confirme votre périmètre.",
    },
    {
      question: "Et si je ne suis pas assujetti à la TVA ?",
      answer:
        "La réforme ne vous impose pas d'émettre ni de recevoir des factures électroniques. Vérifiez toutefois votre régime de TVA avec votre expert-comptable.",
    },
    {
      question: "Les ventes à des particuliers sont-elles concernées ?",
      answer:
        "Pas par la facture électronique entre entreprises. Elles relèvent de l'e-reporting, dont le détail figure dans [l'article sur l'e-reporting](/blog/e-reporting-definition-calendrier).",
    },
  ],
  sources: [
    {
      label: "impots.gouv.fr : Je découvre la facturation électronique",
      url: "https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique",
    },
    {
      label: "FAQ de la DGFiP « Je découvre la facturation électronique » (PDF)",
      url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/faq---fe_je-decouvre-la-facturation-electronique.pdf",
    },
  ],
  related: [
    "calendrier-facturation-electronique",
    "e-reporting-definition-calendrier",
    "facturation-electronique-micro-entrepreneur",
  ],
};
