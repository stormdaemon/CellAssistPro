import { OffersData } from '../types/offers';

/**
 * Offers data for each sector
 * Typed constants following TypeScript best practices
 */
export const OFFERS_DATA: OffersData = {
  artisans: {
    label: "Artisans",
    oneShots: [
      {
        title: "Documents professionnels, bien rangés et sécurisés",
        price: "350 €",
        description: "Des dossiers organisés pour partir sur de bonnes bases, avec un système efficace de classement.",
        features: ["Des dossiers organisés pour partir sur de bonnes bases", "Rangement automatique de vos documents : factures, devis, contrats"]
      },
      {
        title: "Suivi et relances automatiques des devis",
        price: "350 €",
        description: "Vos devis sont suivis et relancés automatiquement, sans que vous ayez à y penser.",
        features: ["Vos devis sont suivis et relancés automatiquement, sans que vous ayez à y penser"]
      }
    ],
    subs: [
      { level: "Bronze", type: "Assurance", price: "180 €", desc: "Suivi régulier et ajustements de votre organisation.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/bronze-removebg-preview_frs2el.png" },
      { level: "Argent", type: "Adaptation", price: "350 €", desc: "Ajustement de vos outils au fil de l'évolution de votre activité.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/argent-removebg-preview_pxb5qh.png" },
      { level: "Or", type: "Création", price: "500 €", desc: "Mise en place de nouvelles méthodes pour gagner du temps", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/or-removebg-preview_ij2kde.png" },
      { level: "Platine", type: "Délégation Totale", price: "750 €", desc: "Gestion complète de l'administratif.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367652/platine-removebg-preview_gmmq8i.png" }
    ]
  },
  'bien-etre': {
    label: "Bien-être",
    oneShots: [
      {
        title: "Gestion RDV Zéro Oubli",
        price: "300 €",
        description: "Un système de prise de rendez-vous fiable qui élimine les oublis et sécurise votre planning.",
        features: ["Synchronisation agenda", "Rappels SMS/Email automatiques", "Des RDV mieux honorés grâce à un suivi simple et doux pour éviter les oublis"]
      },
      {
        title: "Accompagner vos clients dans la durée",
        price: "400 €",
        description: "Une communication automatisée et humaine pour rester présent(e) dans l'esprit de vos clients, sans y penser au quotidien.",
        features: ["Emails après séance", "Offres de renouvellement", "Newsletter automatisée"]
      }
    ],
    subs: [
      { level: "Bronze", type: "Assurance", price: "150 €", desc: "Suivi régulier et ajustements de votre organisation.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/bronze-removebg-preview_frs2el.png" },
      { level: "Argent", type: "Adaptation", price: "300 €", desc: "Ajustement de vos outils au fil de l'évolution de votre activité.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/argent-removebg-preview_pxb5qh.png" },
      { level: "Or", type: "Création", price: "450 €", desc: "Mise en place de nouvelles méthodes pour gagner du temps", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/or-removebg-preview_ij2kde.png" },
      { level: "Platine", type: "Délégation Totale", price: "650 €", desc: "Gestion du flux total et pilotage.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367652/platine-removebg-preview_gmmq8i.png" }
    ]
  },
  tech: {
    label: "Tech & Consulting",
    oneShots: [
      {
        title: "Pipeline Facturation Sécurisé",
        price: "450 €",
        description: "Un circuit de facturation clair et automatisé pour éviter les oublis, sécuriser votre trésorerie et garder une vision précise de vos encaissements.",
        features: ["Déclenchement auto des factures", "Suivi des paiements", "Tableau de bord tréso"]
      },
      {
        title: "Gestion de Projet Simplifiée",
        price: "450 €",
        description: "Une organisation de projet centralisée pour suivre vos missions, vos priorités et vos livrables sans dispersion ni surcharge mentale.",
        features: ["Interconnexion (Jira/Trello/Notion)", "Notifications intelligentes", "Suivi client auto"]
      }
    ],
    subs: [
      { level: "Bronze", type: "Assurance", price: "220 €", desc: "Suivi régulier et ajustements de votre organisation.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/bronze-removebg-preview_frs2el.png" },
      { level: "Argent", type: "Adaptation", price: "400 €", desc: "Ajustement de vos outils au fil de l'évolution de votre activité.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/argent-removebg-preview_pxb5qh.png" },
      { level: "Or", type: "Création", price: "650 €", desc: "Mise en place de nouvelles méthodes pour gagner du temps", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/or-removebg-preview_ij2kde.png" },
      { level: "Platine", type: "Délégation Totale", price: "950 €", desc: "Gestion déléguée et pilotage quotidien.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367652/platine-removebg-preview_gmmq8i.png" }
    ]
  }
};
