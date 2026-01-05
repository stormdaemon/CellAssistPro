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
        title: "Système Drive Sécurisé",
        price: "350 €",
        description: "Organisation complète des dossiers avec accès mobile depuis le chantier et sécurisation de toutes vos données sensibles.",
        features: ["Organisation complète des dossiers", "Accès mobile chantier", "Sécurisation des données"]
      },
      {
        title: "Conversion Devis Automatisée",
        price: "350 €",
        description: "Un système de relances automatiques et signature électronique pour maximiser votre taux de conversion et sécuriser votre commercial.",
        features: ["Relances automatiques", "Signature électronique", "Suivi commercial"]
      }
    ],
    subs: [
      { level: "Bronze", type: "Assurance", price: "180 €", desc: "Maintenance des systèmes et petits ajustements.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/bronze-removebg-preview_frs2el.png" },
      { level: "Argent", type: "Adaptation", price: "350 €", desc: "Ajustement des outils selon l'évolution de votre activité.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/argent-removebg-preview_pxb5qh.png" },
      { level: "Or", type: "Création", price: "500 €", desc: "Création de nouveaux processus automatisés.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/or-removebg-preview_ij2kde.png" },
      { level: "Platine", type: "Délégation Totale", price: "750 €", desc: "Gestion complète de l'administratif.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367652/platine-removebg-preview_gmmq8i.png" }
    ]
  },
  'bien-etre': {
    label: "Bien-être",
    oneShots: [
      {
        title: "Gestion RDV Zéro Oubli",
        price: "300 €",
        description: "Un système de prise de rendez-vous fiable qui élimine les oublis, réduit les annulations et sécurise votre planning.",
        features: ["Synchronisation agenda", "Rappels SMS/Email automatiques", "Réduction des No-Shows"]
      },
      {
        title: "Séquenceur Fidélisation",
        price: "400 €",
        description: "Une communication automatisée et humaine pour rester présent(e) dans l'esprit de vos clients, sans y penser au quotidien.",
        features: ["Emails après séance", "Offres de renouvellement", "Newsletter automatisée"]
      }
    ],
    subs: [
      { level: "Bronze", type: "Assurance", price: "150 €", desc: "Garantie agenda sécurisé et zéro bug.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/bronze-removebg-preview_frs2el.png" },
      { level: "Argent", type: "Adaptation", price: "300 €", desc: "Mise à jour des offres et séquences emails.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/argent-removebg-preview_pxb5qh.png" },
      { level: "Or", type: "Création", price: "450 €", desc: "Croissance clientèle et nouveaux tunnels.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/or-removebg-preview_ij2kde.png" },
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
      { level: "Bronze", type: "Assurance", price: "220 €", desc: "Surveillance proactive du pipeline et API.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/bronze-removebg-preview_frs2el.png" },
      { level: "Argent", type: "Adaptation", price: "400 €", desc: "Adaptabilité de la stack technique.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/argent-removebg-preview_pxb5qh.png" },
      { level: "Or", type: "Création", price: "650 €", desc: "Intégrations complexes et nouveaux outils.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367653/or-removebg-preview_ij2kde.png" },
      { level: "Platine", type: "Délégation Totale", price: "950 €", desc: "Gestion déléguée et pilotage quotidien.", badge: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767367652/platine-removebg-preview_gmmq8i.png" }
    ]
  }
};
