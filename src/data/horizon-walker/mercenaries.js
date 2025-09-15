/**
 * ═══════════════════════════════════════════════════════════════════════
 *                    HORIZON WALKER MERCENARIES DATABASE
 *        Mercenaries used for general traits or limited useability
 * ═══════════════════════════════════════════════════════════════════════
 */

// Import mercenary data
import { puppyStepperMercenary } from './mercenaries/puppy-stepper.js';

// Main mercenaries database array
export const HORIZON_WALKER_MERCENARIES = [puppyStepperMercenary];

// Utility functions
export const getMercenaryBySlug = slug => {
  return HORIZON_WALKER_MERCENARIES.find(mercenary => mercenary.slug === slug);
};

export const getMercenaryById = id => {
  return HORIZON_WALKER_MERCENARIES.find(mercenary => mercenary.id === id);
};

export const getMercenariesByRarity = rarity => {
  return HORIZON_WALKER_MERCENARIES.filter(mercenary => mercenary.rarity === rarity);
};

// Game information for mercenaries
export const mercenaryGameInfo = {
  name: 'Horizon Walker Mercenaries',
  description: 'Mercenaries with general traits or limited useability',
  maxLevel: 50,
  rarities: ['EX', 'SS', 'S', 'A', 'B'],
};

// Get counts and statistics
export const getMercenaryStats = () => {
  const stats = {
    total: HORIZON_WALKER_MERCENARIES.length,
    byRarity: {},
    byClass: {},
    byUseability: {},
    byElement: {},
    byFaction: {},
  };

  HORIZON_WALKER_MERCENARIES.forEach(mercenary => {
    // Count by rarity
    stats.byRarity[mercenary.rarity] = (stats.byRarity[mercenary.rarity] || 0) + 1;

    // Count by class
    stats.byClass[mercenary.class] = (stats.byClass[mercenary.class] || 0) + 1;

    // Count by useability
    stats.byUseability[mercenary.useability] = (stats.byUseability[mercenary.useability] || 0) + 1;

    // Count by element
    stats.byElement[mercenary.element] = (stats.byElement[mercenary.element] || 0) + 1;

    // Count by faction
    stats.byFaction[mercenary.faction] = (stats.byFaction[mercenary.faction] || 0) + 1;
  });

  return stats;
};

// SEO and metadata
export const mercenariesPageData = {
  title: 'Horizon Walker Mercenaries Database - Complete Guide 2025 | GachaWiki',
  description:
    'Complete database of Horizon Walker mercenaries with general traits and limited useability. Browse stats, skills, and detailed information for all mercenaries.',
  sections: [
    {
      id: 'mercenaries-database',
      title: 'Mercenaries Database',
      description: 'Browse all available mercenaries with filtering and search capabilities',
    },
    {
      id: 'mercenary-guides',
      title: 'Mercenary Guides',
      description: 'Individual guides for each mercenary with detailed information',
    },
  ],
};
