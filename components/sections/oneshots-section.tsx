/**
 * One-Shots Section - BEM Component
 * Block: oneshots
 * Elements: oneshots__header, oneshots__grid, oneshots__card, oneshots__card-title, oneshots__card-features, oneshots__card-cta
 */
"use client";

import { useState } from "react";
import { OneShotOffer } from '@/lib/types/offers';
import { MissionDetailModal } from "@/components/ui/mission-detail-modal";

interface OneShotsSectionProps {
  oneShots: OneShotOffer[];
}

export function OneShotsSection({ oneShots }: OneShotsSectionProps) {
  const [selectedMission, setSelectedMission] = useState<OneShotOffer | null>(null);

  const handleViewDetails = (mission: OneShotOffer) => {
    setSelectedMission(mission);
  };

  return (
    <>
      <section className="oneshots">
        <div className="oneshots__header">
          <h2 className="oneshots__title">Solutions &quot;Clés en Main&quot;</h2>
          <p className="oneshots__subtitle">Interventions ciblées pour structurer et automatiser votre activité.</p>
        </div>

        <div className="oneshots__grid">
          {/* One-shot cards */}
          {oneShots.map((offer, index) => (
            <div key={index} className="oneshots__card">
              <h3 className="oneshots__card-title">{offer.title}</h3>
              <ul className="oneshots__card-features">
                {offer.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="oneshots__feature">
                    <svg className="oneshots__feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="oneshots__card-cta"
                onClick={() => handleViewDetails(offer)}
              >
                Voir le détail & le tarif
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedMission && (
        <MissionDetailModal
          isOpen={!!selectedMission}
          onClose={() => setSelectedMission(null)}
          mission={selectedMission}
        />
      )}
    </>
  );
}
