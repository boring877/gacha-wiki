// Silver and Blood - Gift Database Helper
// This file provides gift data and helper functions for the gift database page

import AFFINITY_DATA from './affinity_data.js';

// Camp number to class/prefix mapping
export const CAMP_INFO = {
  0: { name: 'Universal', class: 'universal', color: '#6b7280' },
  1: { name: 'Ancestral', class: 'ancestral', color: '#3b82f6' },
  2: { name: 'Tempus Church', class: 'church', color: '#eab308' },
  3: { name: 'Bloodborn', class: 'bloodborn', color: '#dc2626' },
  4: { name: 'Kingdom', class: 'kingdom', color: '#059669' },
  5: { name: 'Otherworldly', class: 'otherworldly', color: '#8b5cf6' },
};

// Get all gifts from affinity data
export const gifts = AFFINITY_DATA.gifts;

// Get all camps
export const camps = AFFINITY_DATA.camps;

// Get camp class name for styling
export function getCampClass(campNumber) {
  return CAMP_INFO[campNumber]?.class || 'universal';
}

// Get camp color
export function getCampColor(campNumber) {
  return CAMP_INFO[campNumber]?.color || '#6b7280';
}

// Get icon filename key based on camp and rarity
// Rarity 2 = suffix 1, Rarity 3 = suffix 2, Rarity 4 = suffix 3
export function getGiftIconKey(campNumber, rarity) {
  const campClass = getCampClass(campNumber);
  const suffix = rarity - 1;
  return `${campClass}_${suffix}`;
}

// Get gifts by camp
export function getGiftsByCamp(campNumber) {
  return gifts.filter(g => g.camp === campNumber);
}

// Get gifts by rarity
export function getGiftsByRarity(rarity) {
  return gifts.filter(g => g.rarity === rarity);
}

// Get summary statistics
export function getGiftStats() {
  return {
    total: gifts.length,
    byRarity: {
      2: gifts.filter(g => g.rarity === 2).length,
      3: gifts.filter(g => g.rarity === 3).length,
      4: gifts.filter(g => g.rarity === 4).length,
    },
    byCamp: Object.fromEntries(
      Object.entries(camps).map(([key, name]) => [
        name,
        gifts.filter(g => g.camp === parseInt(key)).length
      ])
    ),
  };
}

// Export default for convenience
export default {
  gifts,
  camps,
  CAMP_INFO,
  getCampClass,
  getCampColor,
  getGiftIconKey,
  getGiftsByCamp,
  getGiftsByRarity,
  getGiftStats,
};
