import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  "slug": "factur-x-ubl-cii-explication-simple",
  "title": "Factur-X, UBL, CII : ce que ces formats veulent dire pour votre entreprise",
  "description": "Ces mots techniques cachent une réalité simple : vos factures doivent pouvoir être lues et traitées correctement.",
  "category": "Facturation électronique",
  "keyword": "Factur-X c'est quoi",
  "datePublished": "2026-06-12",
  "dateModified": "2026-07-01",
  "intro": [
    "Les trois noms Factur-X, UBL et CII désignent des façons différentes de structurer l'information dans une facture électronique afin qu'un ordinateur puisse la lire automatiquement. Pour vous, le vrai sujet n'est pas le sigle technique mais le résultat : une facture qu'on peut traiter sans perte de temps ni erreur de recopie."
  ],
  "sections": [
    {
      "heading": "Pourquoi une facture a besoin d'une structure",
      "paragraphs": [
        "Une facture papier, un PDF simple ou une image : un humain peut lire facilement le montant, la date, le fournisseur. Mais un ordinateur doit recevoir l'information de manière ordonnée, prévisible. Si le montant se trouve parfois à gauche, parfois à droite, parfois caché dans un texte, la machine ne saura pas où le chercher. Un format structuré, c'est un contrat : le montant est toujours au même endroit, la date de facturation aussi, le numéro de TVA également. Cela permet à votre logiciel de comptabilité d'importer directement, sans recopie manuelle.",
        "En France, le format attendu est Factur-X, un format qui vient de la norme européenne. UBL et CII sont d'autres formats, acceptés en Europe mais moins courants chez nous. Ce qui compte : votre outil de facturation doit pouvoir émettre dans le format attendu, et vos fournisseurs doivent pouvoir recevoir le vôtre."
      ]
    },
    {
      "heading": "L'impact réel pour vous : temps et erreurs",
      "paragraphs": [
        "Prenez deux scénarios. Dans le premier, vous recevez une facture fournisseur en Factur-X ; votre logiciel de gestion l'importe en quelques secondes. La date, le montant, la référence fournisseur vont directement aux bons emplacements. Dans le second, une facture fournisseur en PDF : votre assistant doit recopier les trois informations clés à la main, ce qui introduit un risque d'erreur et consomme dix minutes de travail par facture.",
        "Pour un service ou un petit commerce recevant 30 factures par mois, c'est déjà 5 heures mensuelles de travail en moins si tout est structuré. Plus important : zéro risque de confondre 152 euros et 125 euros à cause d'une mauvaise lecture."
      ]
    },
    {
      "heading": "Comment vérifier que votre outil gère les bons formats",
      "steps": [
        "Demandez à votre prestataire de facturation : « Pouvez-vous émettre en Factur-X ? » (la réponse doit être oui pour 2026)",
        "Posez aussi : « Pouvez-vous recevoir et importer des factures au format Factur-X ? » (parfois c'est non, c'est un défaut)",
        "Demandez une démonstration concise de chacun de ces deux flux pour être certain",
        "Testez avec une vraie facture ou un fichier de test avant la date limite"
      ]
    },
    {
      "heading": "Ce qu'il faut éviter à tout prix",
      "list": [
        "Supposer que parce qu'un logiciel « gère les formats » il peut les émettre ET les recevoir. Vérifiez les deux.",
        "Ignorer le sujet jusqu'à août 2026 en pensant que c'est un détail technique. Ce n'est pas technique pour vous, c'est organisationnel.",
        "Accepter qu'un fournisseur continue d'envoyer un PDF sans structure sous prétexte qu'il ne sait pas faire. Une demande polite et une explication des bénéfices pour lui aussi peuvent changer les choses."
      ]
    }
  ],
  "faq": [
    {
      "question": "Si mon outil de facturation gère Factur-X, suis-je automatiquement en conformité ?",
      "answer": "Presque. Vous êtes en conformité technique, mais vérifiez auprès de votre expert-comptable que le flux de réception fonctionne bien avec sa méthode. Testez une facture avant septembre 2026."
    },
    {
      "question": "Que faire si un de mes trois plus importants fournisseurs ne peut pas passer à Factur-X en 2026 ?",
      "answer": "Continuez à recevoir ses PDF classiques pendant qu'il effectue la transition. Vous pouvez aussi lui demander aimablement quand il prévoit de passer au format structuré. Beaucoup avancent progressivement, pas tous au même rythme."
    }
  ]
};
