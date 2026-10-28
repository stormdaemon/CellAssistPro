import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "e-reporting-definition-calendrier",
  title: "E-reporting : définition, opérations concernées et calendrier",
  seoTitle: "E-reporting c'est quoi ? Définition et calendrier",
  description:
    "E-reporting : transmission des ventes aux particuliers, des opérations internationales et des paiements. Calendrier et cas des artisans.",
  category: "Facturation électronique",
  keyword: "e-reporting c'est quoi",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  intro: [
    "L'e-reporting est la transmission à l'administration fiscale des données d'opérations qui ne passent pas par la facture électronique entre entreprises : ventes à des particuliers, opérations internationales et données de paiement de certaines prestations de services. Il concerne les grandes entreprises et les ETI depuis le 1er septembre 2026, et les PME, les TPE et les micro-entreprises au plus tard le 1er septembre 2027.",
    "Pour un artisan qui vend aussi à des particuliers, la question est très concrète. La facture adressée à un particulier n'entre pas dans la facturation électronique entre entreprises, mais la vente peut relever de l'e-reporting. Le cadre général est sur la page [facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "Les trois familles d'opérations concernées",
      list: [
        "Les ventes à des particuliers : la facture reste remise à votre client comme aujourd'hui, mais les données de la vente doivent être transmises à l'administration.",
        "Les opérations internationales : exportations et échanges intracommunautaires de biens.",
        "Les données de paiement des prestations de services dont la TVA est exigible à l'encaissement, faute d'option pour les débits.",
      ],
    },
    {
      heading: "Ce que l'e-reporting ne remplace pas",
      paragraphs: [
        "L'e-reporting ne remplace pas la facture. Pour une vente à un particulier, la facture reste établie et remise selon les usages habituels. C'est l'information sur l'opération qui est transmise à l'administration.",
        "Il ne dispense pas non plus des autres obligations de la réforme, comme la réception des factures de vos fournisseurs par une plateforme agréée.",
      ],
    },
    {
      heading: "Le calendrier suit la taille de l'entreprise",
      paragraphs: [
        "Comme pour l'émission, les dates dépendent de la taille de l'entreprise. Les grandes entreprises et les ETI sont concernées depuis le 1er septembre 2026. Les PME, les TPE et les micro-entreprises ont jusqu'au 1er septembre 2027 au plus tard, et peuvent anticiper.",
        "Le détail des échéances, avec les autres dates de la réforme, figure dans le [calendrier de la facturation électronique](/blog/calendrier-facturation-electronique).",
      ],
    },
    {
      heading: "Le cas de l'artisan qui vend à des particuliers",
      paragraphs: [
        "Un artisan intervient souvent à la fois chez des particuliers et chez des professionnels. Prenons un exemple fictif : un plombier réalise une réparation chez un particulier, puis facture une entreprise de nettoyage assujettie à la TVA. La réparation vendue au particulier relève de l'e-reporting ; la facture adressée à l'entreprise de nettoyage relève de la facturation électronique entre entreprises.",
        "Reste la question du régime de TVA sur les paiements : si la TVA de vos prestations est exigible à l'encaissement, les données de paiement sont à transmettre aussi. Cette question se tranche avec votre expert-comptable.",
      ],
    },
    {
      heading: "Les sanctions liées à l'e-reporting",
      paragraphs: [
        "Une transmission d'e-reporting manquante coûte 500 € (au lieu de 250 € auparavant), dans la limite de 15 000 € par an, selon la loi de finances pour 2026. Service-Public Entreprendre [publie le point officiel](https://entreprendre.service-public.gouv.fr/actualites/A18802).",
        "Le détail des sanctions figure dans [l'article sur les sanctions de la facturation électronique](/blog/risques-si-pas-pret-facturation-electronique).",
      ],
    },
    {
      heading: "Ce qu'il faut faire dès maintenant",
      steps: [
        "Repérer vos ventes à des particuliers, vos opérations à l'étranger et vos prestations de services encaissées.",
        "Demander à votre expert-comptable quel régime de TVA s'applique à vos paiements.",
        "Demander à votre outil de facturation ou à votre plateforme agréée comment se fait la transmission de ces données.",
        "Si vous êtes une PME, une TPE ou une micro-entreprise, noter l'échéance du 1er septembre 2027 et anticiper.",
      ],
    },
  ],
  faq: [
    {
      question: "Qui doit faire de l'e-reporting ?",
      answer:
        "Les entreprises assujetties à la TVA qui réalisent des ventes à des particuliers, des opérations internationales ou des prestations de services dont la TVA est exigible à l'encaissement. Le calendrier dépend de la taille de l'entreprise.",
    },
    {
      question: "L'e-reporting remplace-t-il la facture électronique ?",
      answer:
        "Non. Il couvre les données des opérations que la facture électronique entre entreprises ne couvre pas. Il ne dispense pas de la réception des factures de vos fournisseurs.",
    },
    {
      question: "Un micro-entrepreneur qui vend à des particuliers est-il concerné ?",
      answer:
        "En principe oui, s'il est assujetti à la TVA, franchise comprise, pour ses ventes à des particuliers. L'échéance est au plus tard le 1er septembre 2027. Vérifiez ce point avec votre expert-comptable.",
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
    {
      label: "Service-Public Entreprendre : sanctions de la facturation électronique (20/02/2026)",
      url: "https://entreprendre.service-public.gouv.fr/actualites/A18802",
    },
  ],
  related: [
    "calendrier-facturation-electronique",
    "facturation-electronique-qui-est-concerne",
    "risques-si-pas-pret-facturation-electronique",
  ],
};
