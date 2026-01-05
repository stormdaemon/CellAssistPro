"use client";

/**
 * Mission Detail Modal - BEM Component
 * Block: mission-modal
 * Modal for displaying one-shot mission details
 */
import { useEffect } from "react";
import { OneShotOffer } from "@/lib/types/offers";

interface MissionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  mission: OneShotOffer;
}

export function MissionDetailModal({ isOpen, onClose, mission }: MissionDetailModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="mission-modal__overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mission-modal-title"
    >
      <div
        className="mission-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="mission-modal__close"
          aria-label="Fermer la modale"
        >
          <svg className="mission-modal__close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <h3 id="mission-modal-title" className="mission-modal__title">
          {mission.title}
        </h3>

        <div className="mission-modal__body">
          <p className="mission-modal__description">
            {mission.description}
          </p>

          <ul className="mission-modal__features">
            {mission.features.map((feature, idx) => (
              <li key={idx} className="mission-modal__feature">
                <svg className="mission-modal__feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p className="mission-modal__price">
            Prix : {mission.price}
          </p>

          <p className="mission-modal__note">
            Cette mission constitue souvent la première étape d'une structuration plus globale.
          </p>
        </div>

        <button onClick={onClose} className="mission-modal__cta">
          Revenir au diagnostic
        </button>
      </div>
    </div>
  );
}
