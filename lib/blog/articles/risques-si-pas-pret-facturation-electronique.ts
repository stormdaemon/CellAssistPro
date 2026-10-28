import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "risques-si-pas-pret-facturation-electronique",
  title: "Sanctions de la facturation électronique : montants, mise en demeure et tolérance",
  seoTitle: "Facturation électronique sanction : montants et tolérance",
  description:
    "Sanctions de la facturation électronique : 50 € par facture non électronique, 500 € par e-reporting manquant, mise en demeure, plafonds annuels.",
  category: "Facturation électronique",
  keyword: "facturation électronique sanction",
  datePublished: "2026-06-12",
  dateModified: "2026-10-28",
  image: {
    src: "/images/blog/risques-si-pas-pret-facturation-electronique.jpg",
    alt: "Deux personnes analysant des graphiques financiers sur un ordinateur portable",
    credit: "Photo : Pexels",
  },
  intro: [
    "Les sanctions de la facturation électronique sont fixées par la loi de finances pour 2026 : 50 € par facture non émise électroniquement, plafonnés à 15 000 € par année civile, et 500 € par transmission d'e-reporting manquante. Une entreprise qui ne dispose pas de plateforme agréée pour recevoir ses factures reçoit d'abord une mise en demeure. Une première infraction régularisée à temps n'est pas sanctionnée d'une amende.",
    "Ces montants, vérifiés le 28 octobre 2026, s'appliquent une fois l'obligation entrée en vigueur pour votre entreprise. Ils complètent le calendrier présenté dans le [guide de la facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "Émettre : 50 € par facture non électronique",
      paragraphs: [
        "La loi n° 2026-103 du 19 février 2026 de finances pour 2026 (article 123) porte à 50 € l'amende par facture non émise électroniquement, contre 15 € auparavant. Le plafond est fixé à 15 000 € par année civile. L'amende ne peut être due qu'à partir du moment où l'obligation d'émettre s'applique à votre entreprise : pour une PME, une TPE ou une micro-entreprise, c'est au plus tard le 1er septembre 2027.",
        "Le point officiel est publié sur [Service-Public Entreprendre](https://entreprendre.service-public.gouv.fr/actualites/A18802). Le calendrier d'émission est expliqué dans [l'article sur les dates à retenir](/blog/calendrier-facturation-electronique).",
      ],
    },
    {
      heading: "E-reporting : 500 € par transmission manquante",
      paragraphs: [
        "L'e-reporting couvre les opérations qui ne passent pas par la facture électronique entre entreprises : ventes à des particuliers, opérations internationales, données de paiement de certaines prestations de services. Une transmission manquante coûte 500 € (au lieu de 250 €), dans la limite de 15 000 € par an.",
        "Le champ exact de l'e-reporting et ses échéances sont expliqués dans [l'article sur l'e-reporting](/blog/e-reporting-definition-calendrier).",
      ],
    },
    {
      heading: "Réception : une progression en quatre temps",
      paragraphs: [
        "L'absence de plateforme agréée pour recevoir les factures ne donne pas lieu, d'emblée, à une amende. Le dispositif avance par étapes :",
      ],
      steps: [
        "Une mise en demeure de se conformer, dans un délai de trois mois.",
        "À défaut de régularisation, une amende de 500 €.",
        "Une nouvelle mise en demeure, assortie à nouveau d'un délai de trois mois.",
        "Puis une amende de 1 000 €, et 1 000 € tous les trois mois tant que le manquement persiste.",
      ],
    },
    {
      heading: "La première infraction : la tolérance à connaître",
      paragraphs: [
        "Il s'agit d'une première infraction lorsqu'aucun manquement n'a été constaté pendant l'année en cours ni pendant les trois années précédentes. Pour une première infraction, aucune amende n'est due si elle est régularisée spontanément, ou dans les 30 jours suivant la première demande de l'administration.",
        "Cette tolérance n'annule pas l'obligation : elle évite seulement l'amende quand la situation est corrigée à temps. Le bon réflexe est donc de réagir dès le premier courrier.",
      ],
    },
    {
      heading: "Les coûts qui ne figurent pas dans les textes",
      paragraphs: [
        "Les amendes ne disent pas tout. Une facture reçue hors circuit doit être ressaisie, retrouvée, puis relancée auprès du fournisseur. Une facture non conforme peut être rejetée par la plateforme ou refusée par votre client, ce qui retarde le paiement. Ces coûts ne se chiffrent pas dans les textes, mais ils pèsent sur votre trésorerie et sur le temps de votre expert-comptable.",
      ],
    },
    {
      heading: "Ce qui vous protège",
      list: [
        "Une plateforme agréée choisie et inscrite à l'annuaire, pour recevoir sans interruption.",
        "Des factures au format Factur-X, UBL ou CII pour émettre, à partir de l'échéance qui vous concerne.",
        "Un modèle de facture dont les mentions obligatoires ont été validées par votre expert-comptable.",
        "Une réponse rapide à toute mise en demeure ou à toute demande de l'administration.",
      ],
    },
  ],
  faq: [
    {
      question: "Si je ne suis pas prêt en septembre 2026, est-ce que je reçois une amende tout de suite ?",
      answer:
        "Non. Pour la réception, la première étape est une mise en demeure de se conformer dans un délai de trois mois. L'amende de 500 € n'intervient qu'à défaut de régularisation. Une première infraction régularisée spontanément, ou dans les 30 jours suivant la première demande, n'est pas sanctionnée.",
    },
    {
      question: "Combien risque-t-on par facture non électronique ?",
      answer:
        "50 € par facture non émise électroniquement, dans la limite de 15 000 € par année civile, à compter du moment où l'obligation d'émettre s'applique à l'entreprise.",
    },
    {
      question: "Mon expert-comptable peut-il éviter les sanctions à ma place ?",
      answer:
        "La réception et l'émission des factures relèvent de votre entreprise. Votre expert-comptable peut vous aider à organiser le circuit. Ce qu'il prend en charge concrètement doit être précisé par écrit entre vous.",
    },
  ],
  sources: [
    {
      label: "Service-Public Entreprendre : sanctions de la facturation électronique (20/02/2026)",
      url: "https://entreprendre.service-public.gouv.fr/actualites/A18802",
    },
    {
      label: "Service-Public Entreprendre : mentions obligatoires d'une facture",
      url: "https://entreprendre.service-public.gouv.fr/vosdroits/F31808",
    },
    {
      label: "impots.gouv.fr : Je découvre la facturation électronique",
      url: "https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique",
    },
  ],
  related: [
    "calendrier-facturation-electronique",
    "e-reporting-definition-calendrier",
    "facturation-electronique-expert-comptable-qui-fait-quoi",
  ],
};
