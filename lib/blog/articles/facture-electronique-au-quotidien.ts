import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "facture-electronique-au-quotidien",
  title: "Facture électronique au quotidien : recevoir, refuser, changer de plateforme",
  seoTitle: "Facture électronique : comment ça marche au quotidien",
  description:
    "Comment fonctionne une facture électronique : réception, statuts, refus, changement de plateforme et coût. Les réponses aux questions pratiques.",
  category: "Facturation électronique",
  keyword: "facture électronique comment ça marche",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  intro: [
    "Une facture électronique suit un circuit simple : elle est émise au format structuré, transmise par la plateforme agréée de l'émetteur, puis reçue par la plateforme agréée du destinataire. Le quotidien consiste ensuite à recevoir, contrôler, classer et transmettre à son expert-comptable. Un statut indique à chaque étape où en est la facture.",
    "Cet article répond aux questions pratiques : que faire d'une facture reçue, peut-on la refuser, peut-on changer de plateforme, et combien cela coûte-t-il. Le cadre d'ensemble est sur la page [facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "Recevoir une facture : le parcours en quatre temps",
      steps: [
        "La facture arrive sur votre plateforme agréée, au format structuré : Factur-X, UBL ou CII.",
        "Vous la contrôlez : bon destinataire, montant, mentions, correspondance avec la commande ou le devis.",
        "Si elle est conforme, vous la payez et vous la pointez, comme aujourd'hui.",
        "Vous la classez au bon endroit et la transmettez à votre expert-comptable avec le dossier de la période.",
      ],
    },
    {
      heading: "Les statuts : ce que signifient les messages",
      list: [
        "Déposée : la facture a été enregistrée et transmise par la plateforme de l'émetteur.",
        "Rejetée : la plateforme l'écarte parce qu'elle n'est pas conforme sur le plan technique. Elle n'arrive pas au destinataire.",
        "Refusée : c'est le destinataire qui la refuse, parce que son contenu pose problème.",
        "Encaissée : le paiement est constaté. Cette information sert aussi à l'e-reporting des paiements.",
      ],
      paragraphs: [
        "Ces statuts sont gérés par les plateformes. Vous n'avez pas à les calculer, mais à les suivre.",
      ],
    },
    {
      heading: "Rejeter ou refuser : deux situations à distinguer",
      paragraphs: [
        "Une facture rejetée échoue sur le plan technique : elle ne respecte pas le format, et la plateforme l'écarte. Une facture refusée est écartée par le destinataire, parce que son contenu est erroné : mauvais destinataire, prestation non commandée, montant incorrect.",
        "Dans les deux cas, la solution passe par votre fournisseur, pour obtenir une facture corrigée. Notez la date et le motif du refus, afin de le retrouver facilement.",
      ],
    },
    {
      heading: "Changer de plateforme sans rupture",
      paragraphs: [
        "Vous pouvez changer de plateforme à tout moment. Avant de basculer, prévenez votre expert-comptable, créez une facture test, exportez-la et vérifiez qu'elle est bien importée chez lui. Votre inscription à l'annuaire passe alors par la nouvelle plateforme : contrôlez-la après le changement.",
        "Gardez accessible l'historique de vos factures reçues pendant la bascule, et notez la date à laquelle le changement prend effet.",
      ],
    },
    {
      heading: "Combien cela coûte : une question de fonctions",
      paragraphs: [
        "Le coût dépend de la plateforme choisie, de votre volume et des fonctions utilisées. Des offres gratuites existent pour les besoins simples, mais les fonctions avancées sont souvent payantes. Cet article n'affiche aucun prix : comparez les offres sur la [liste officielle des plateformes agréées](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees), et lisez les limites de celle que vous retenez.",
        "Le détail des offres gratuites figure dans [l'article sur les plateformes agréées gratuites](/blog/plateforme-agreee-gratuite).",
      ],
    },
    {
      heading: "Les réflexes du quotidien",
      list: [
        "Une fois par semaine : ouvrir la plateforme, traiter les nouvelles factures reçues et les classer.",
        "Une fois par mois : transmettre à votre comptable le dossier du mois, avec les factures reçues et émises.",
        "À chaque nouveau fournisseur : demander s'il émet par une plateforme agréée, et sous quel format.",
      ],
    },
  ],
  faq: [
    {
      question: "Peut-on refuser une facture électronique ?",
      answer:
        "Oui. Le destinataire peut refuser une facture dont le contenu pose problème. Il faut alors en parler au fournisseur, pour obtenir une facture corrigée.",
    },
    {
      question: "Peut-on changer de plateforme agréée ?",
      answer:
        "Oui, à tout moment. Préparez la bascule avec une facture test, prévenez votre expert-comptable et contrôlez votre inscription à l'annuaire après le changement.",
    },
    {
      question: "Mon fournisseur et moi devons-nous utiliser la même plateforme ?",
      answer:
        "Non. La plateforme peut être différente de celle de votre fournisseur ou de celle de votre client. Le choix vous appartient.",
    },
    {
      question: "Combien coûte la facturation électronique ?",
      answer:
        "Cela dépend de la plateforme, de votre volume et des fonctions utilisées. Des offres gratuites existent pour les besoins simples ; les fonctions avancées sont souvent payantes. Comparez sur la liste officielle, sans prendre de prix pour acquis.",
    },
  ],
  sources: [
    {
      label: "impots.gouv.fr : facturation électronique et plateformes agréées (liste officielle)",
      url: "https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees",
    },
    {
      label: "impots.gouv.fr : Je découvre la facturation électronique",
      url: "https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique",
    },
  ],
  related: [
    "choisir-plateforme-facturation-agreee",
    "plateforme-agreee-gratuite",
    "gerer-factures-fournisseurs",
  ],
};
