"use client";

/**
 * Sector Selector - BEM Component
 * Block: sector-selector
 * Elements: sector-selector__button, sector-selector__icon, sector-selector__label
 * Modifiers: sector-selector__button--active
 */
import { useState } from "react";

type Sector = 'artisans' | 'bien-etre' | 'tech';

interface SectorSelectorProps {
  onSectorChange: (sector: Sector) => void;
  currentSector: Sector;
}

export function SectorSelector({ onSectorChange, currentSector }: SectorSelectorProps) {
  const sectors = [
    {
      id: 'artisans' as Sector,
      label: 'Artisans',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      id: 'bien-etre' as Sector,
      label: 'Bien-être',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      )
    },
    {
      id: 'tech' as Sector,
      label: 'Tech',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      )
    }
  ];

  return (
    <div className="sector-selector">
      <div className="sector-selector__hint">
        <span className="sector-selector__hint-text">Cliquez sur votre activité</span>
        <svg className="sector-selector__hint-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
      <div className="sector-selector__container">
        {sectors.map((sector) => (
          <button
            key={sector.id}
            onClick={() => onSectorChange(sector.id)}
            className={`sector-selector__button ${
              currentSector === sector.id ? 'sector-selector__button--active' : ''
            }`}
            aria-label={`Secteur ${sector.label}`}
            aria-pressed={currentSector === sector.id}
          >
            <span className="sector-selector__icon">{sector.icon}</span>
            <span className="sector-selector__label">{sector.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
