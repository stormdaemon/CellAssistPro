"use client";

/**
 * Diagnostic Modal - BEM Component
 * Block: diagnostic-modal
 * Modal displayed when user clicks "Réserver mon diagnostic offert" in footer
 */
import { useEffect } from "react";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
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
      className="diagnostic-modal__overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagnostic-modal-title"
    >
      <div
        className="diagnostic-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="diagnostic-modal__close"
          aria-label="Fermer la modale"
        >
          <svg className="diagnostic-modal__close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <h3 id="diagnostic-modal-title" className="diagnostic-modal__title">
          Ce diagnostic est fait pour vous si :
        </h3>

        <div className="diagnostic-modal__body">
          <ul className="diagnostic-modal__checklist">
            <li className="diagnostic-modal__checklist-item">
              Vous perdez du temps sur des tâches administratives répétitives (devis, relances, mails, organisation…)
            </li>
            <li className="diagnostic-modal__checklist-item">
              Votre organisation ne suit plus le rythme de votre activité, et cela vous fatigue mentalement
            </li>
            <li className="diagnostic-modal__checklist-item">
              Vous cherchez une solution structurée et durable (pas juste quelqu'un qui exécute des tâches)
            </li>
          </ul>
        </div>

        <div className="diagnostic-modal__actions">
          <a
            href="https://calendly.com/celassistpro/15min"
            target="_blank"
            rel="noreferrer"
            className="diagnostic-modal__cta diagnostic-modal__cta--primary"
          >
            Continuer vers le diagnostic
          </a>
          <button
            onClick={onClose}
            className="diagnostic-modal__cta diagnostic-modal__cta--secondary"
          >
            Revenir à la page
          </button>
        </div>
      </div>
    </div>
  );
}
