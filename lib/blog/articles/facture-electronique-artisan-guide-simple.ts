import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  "slug": "facture-electronique-artisan-guide-simple",
  "title": "Facture électronique pour les artisans : le guide simple, sans jargon",
  "description": "Un artisan doit surtout savoir créer, recevoir, classer et suivre ses factures sans perdre de temps.",
  "category": "Facturation électronique",
  "keyword": "facture électronique artisan",
  "datePublished": "2026-06-12",
  "dateModified": "2026-07-01",
  "intro": [
    "Pour un artisan du bâtiment, de la mécanique ou de l'électricité, la facture est le pont entre le travail effectué et l'argent reçu. La facturation électronique n'est pas une complication de plus : c'est une occasion de clarifier ce pont avant que la réforme ne vous l'impose."
  ],
  "sections": [
    {
      "heading": "Le circuit artisanal classique : il faut l'améliorer",
      "paragraphs": [
        "Vous finissez une intervention en fin de journée. Vous écrivez une facture sur place, parfois sur papier, parfois vous vous promettez de le faire le soir. Le client veut un email, donc vous créez une version PDF. Vous la rangez quelque part sur votre ordinateur. Trois jours plus tard, votre expert-comptable demande où est cette facture. Vous la cherchez, vous la retrouvez ou pas. Parallèlement, vous recevez des factures de vos fournisseurs (matériaux, fournitures) par email, par courrier, parfois en main propre à la livraison. Trois canaux différents, trois habitudes différentes. Ce circuit marche, mais c'est usant.",
        "La facturation électronique impose une légère amélioration. Au lieu de gérer plusieurs formats et plusieurs emplacements, vous aurez un système unique d'émission (créer la facture) et un point central de réception (où arrivent les factures fournisseurs). C'est plus léger, plus traçable."
      ]
    },
    {
      "heading": "Deux tâches à maîtriser",
      "paragraphs": [
        "Tâche 1 : Créer et envoyer une facture client. Elle doit contenir vos coordonnées, celles du client, la date, la description du travail, le prix HT et TTC, votre numéro de TVA (si applicable). Vous faites cela probablement déjà, mais peut-être pas toujours au même format. À partir de septembre 2027, pour vos clients professionnels français, vous devrez utiliser un format standard (Factur-X, UBL ou CII) transmis via une plateforme de dématérialisation partenaire agréée.",
        "Tâche 2 : Recevoir et ranger une facture fournisseur. Elle arrive par email, par courrier, ou parfois vous la notez sur papier quand le livreur se présente. Vous devez la classer et la transmettre à votre comptable. Avant septembre 2026, c'est souvent du PDF classique. À partir de cette date, beaucoup d'entre elles arriveront au format électronique structuré, que vous pourrez importer automatiquement."
      ]
    },
    {
      "heading": "Trois confusions à clarifier",
      "list": [
        "Facture et devis : ce ne sont pas la même chose. Le devis est une proposition, la facture est une demande de paiement. Ne pas les mélanger dans votre système de classement.",
        "Facture papier et facture électronique : l'électronique, c'est un fichier structuré qui peut être lu par les ordinateurs. Un PDF simple ressemble à une image, moins riche techniquement, mais encore accepté à titre transitoire. Le format Factur-X, lui, se présente comme un PDF à l'écran tout en contenant des données exploitables par les logiciels.",
        "Votre responsabilité et celle du comptable : vous devez émettre une facture propre, complète, légale. Le comptable doit la traiter correctement. Vous n'êtes pas comptable, vous n'avez pas à connaître les codes comptables. Vous devez juste être soigneux dans ce que vous transmettez."
      ]
    },
    {
      "heading": "Votre action concrète aujourd'hui",
      "paragraphs": [
        "Premier geste : prenez une facture que vous avez créée récemment. Vérifiez qu'elle contient tous les éléments légaux (date, numéro de facture unique, SIRET ou numéro TVA du client, montants HT/TTC). Demandez à votre comptable de la valider en deux minutes. C'est rapide et vous indique si votre modèle est bon.",
        "Deuxième geste : définissez où vous rangez actuellement les factures fournisseurs. Un dossier sur le bureau ? Un email sans structure ? Proposez à votre comptable ou assistante un point d'arrivée clair : un dossier numérisé « Factures Fournisseurs 2026 », avec des sous-dossiers par mois, par exemple.",
        "Troisième geste : testez un outil de facturation adapté aux artisans — il en existe de gratuits ou peu coûteux — pour émettre votre prochaine facture au bon format. Regardez le résultat. Si cela vous convient et que le client ne voit pas de différence, vous êtes prêt pour la transition."
      ]
    }
  ],
  "faq": [
    {
      "question": "Passer à la facturation électronique va me faire perdre du temps ?",
      "answer": "Non, l'inverse à long terme. Certes, le changement d'outil prend un jour ou deux de mise en place. Mais une fois habitué, vous gagnez du temps : pas de reformatage, pas de recherche du bon fichier, les factures fournisseurs importées automatiquement. À un mois d'utilisation, vous récupérez de la fluidité."
    },
    {
      "question": "Mes clients vont-ils refuser de recevoir une facture au nouveau format ?",
      "answer": "Non, quasiment jamais. Pour eux, une facture au format Factur-X s'affiche comme un PDF normal. Ils ne voient pas de différence. C'est votre outil, via la plateforme de dématérialisation partenaire choisie, qui travaille en arrière-plan. Les dirigeants et petites entreprises reçoivent de plus en plus de factures structurées sans même le remarquer."
    },
    {
      "question": "Dois-je absolument numériser les factures papier que je reçois ?",
      "answer": "Non, pas si vous pouvez les ranger physiquement de manière organisée (par mois, par exemple) et les transmettre à votre comptable à la demande. Mais numériser (scanner + classement numérique) rend les choses plus rapides et plus traçables."
    }
  ]
};
