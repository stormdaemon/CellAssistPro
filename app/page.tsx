"use client";

/**
 * Home Page - CelAssistPro Landing Page
 *
 * Main page assembling all sections with client-side state management
 * for sector selection and modal interactions.
 */
import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectorSelector } from "@/components/sections/sector-selector";
import { StatsCounterSection } from "@/components/sections/stats-counter-section";
import { OneShotsSection } from "@/components/sections/oneshots-section";
import { SubscriptionsSection } from "@/components/sections/subscriptions-section";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Modal } from "@/components/ui/modal";
import { OFFERS_DATA } from "@/lib/data/offers";
import type { Sector } from "@/lib/types/offers";

const FAQ_DATA = [
  {
    question: "Quelle est la différence entre une assistante classique et un Co-pilote ?",
    answer: "Une assistante classique exécute les tâches qu'on lui demande. Moi, je vous aide à organiser, simplifier et structurer votre quotidien pour que votre activité soit plus claire, même sans intervention constante de ma part."
  },
  {
    question: "Comment garantissez-vous la sécurité de mes données ?",
    answer: "C'est ma priorité absolue. Accord de confidentialité signé, outils sécurisés, accès partagés sans divulgation de mots de passe."
  },
  {
    question: "Je suis déjà débordé, combien de temps l'installation va-t-il me prendre ?",
    answer: "Moins d'une heure. Après notre premier diagnostic, je prends le relais. Vous n'avez qu'à me donner les accès nécessaires, et je m'occupe de la restructuration. Mon objectif est de vous faire gagner du temps dès la première semaine, pas de vous en faire perdre."
  }
];

export default function HomePage() {
  const [currentSector, setCurrentSector] = useState<Sector>('artisans');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSectorChange = (sector: Sector) => {
    setCurrentSector(sector);
  };

  const sectorData = OFFERS_DATA[currentSector];

  return (
    <main className="min-h-screen bg-gray-50 text-[#414140]">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Counter Section */}
      <StatsCounterSection />

      {/* Sector Selector */}
      <SectorSelector
        onSectorChange={handleSectorChange}
        currentSector={currentSector}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 space-y-32">
        {/* One-Shots Section */}
        <OneShotsSection
          oneShots={sectorData.oneShots}
        />

        {/* Subscriptions Section */}
        <SubscriptionsSection subs={sectorData.subs} />
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={FAQ_DATA} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <FooterSection />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <p>Information complémentaire sur la prestation sélectionnée.</p>
        <p className="mt-4">
          Cette prestation comprend une analyse complète de vos besoins,
          une mise en place personnalisée et un suivi dédié.
        </p>
      </Modal>
    </main>
  );
}
