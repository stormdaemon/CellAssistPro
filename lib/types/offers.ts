/**
 * Type definitions for CelAssistPro offers and services
 */

export type Sector = 'artisans' | 'bien-etre' | 'tech';

export interface OneShotOffer {
  title: string;
  price: string;
  features: string[];
}

export interface PackOffer {
  title: string;
  price: string;
  economy: string;
  features: string[];
}

export interface SubscriptionOffer {
  level: 'Bronze' | 'Argent' | 'Or' | 'Platine';
  type: string;
  price: string;
  desc: string;
  badge: string;
}

export interface SectorData {
  label: string;
  oneShots: OneShotOffer[];
  pack: PackOffer;
  subs: SubscriptionOffer[];
}

export interface OffersData {
  [key: string]: SectorData;
}

export interface FAQItem {
  question: string;
  answer: string;
}
