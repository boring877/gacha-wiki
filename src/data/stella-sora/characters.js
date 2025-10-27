// Stella Sora Characters Database
// This file contains character data and metadata for the Stella Sora wiki
// All character stats are based on maximum level

import { chitoseData } from './characters/chitose.js';

// Game Mechanics Reference
export const gameInfo = {
  rarities: ['SSR', 'SR', 'R'],
  elements: [
    { name: 'Fire', color: '#DC2626', description: 'Fire element characters deal burning damage' },
    {
      name: 'Water',
      color: '#0891B2',
      description: 'Water element characters control flow and healing',
    },
    {
      name: 'Wind',
      color: '#10B981',
      description: 'Wind element characters excel in speed and evasion',
    },
    { name: 'Earth', color: '#92400E', description: 'Earth element characters have high defense' },
    {
      name: 'Light',
      color: '#F9FAFB',
      description: 'Light element characters provide support and buffs',
    },
    {
      name: 'Dark',
      color: '#374151',
      description: 'Dark element characters specialize in debuffs',
    },
    {
      name: 'Aqua',
      color: '#0EA5E9',
      description: 'Aqua element characters command water and flow',
    },
  ],
  roles: [
    { name: 'DPS', description: 'High damage output characters focused on dealing damage' },
    { name: 'Tank', description: 'High survivability characters that protect allies' },
    { name: 'Healer', description: 'Characters that restore health and provide recovery' },
    { name: 'Support', description: 'Utility characters that provide various team benefits' },
    { name: 'Buffer', description: 'Characters that enhance ally stats and abilities' },
    { name: 'Vanguard', description: 'Front-line warriors who lead the charge' },
  ],
  weapons: [
    { name: 'Sword', description: 'Balanced melee weapon' },
    { name: 'Staff', description: 'Magic-focused weapon' },
    { name: 'Bow', description: 'Ranged physical weapon' },
    { name: 'Dagger', description: 'Fast melee weapon' },
    { name: 'Shield', description: 'Defensive weapon' },
  ],
  tableStats: ['HP', 'ATK', 'DEF', 'Crit Rate', 'Crit DMG'],
  get tags() {
    const allTags = STELLA_SORA_CHARACTERS.flatMap(char => char.tags || []);
    return [...new Set(allTags)].sort();
  },
};

// Character array - sorted alphabetically by name
export const STELLA_SORA_CHARACTERS = [chitoseData];

// Utility functions
export function getCharacterById(id) {
  return STELLA_SORA_CHARACTERS.find(char => char.id === id);
}

export function getCharacterBySlug(slug) {
  return STELLA_SORA_CHARACTERS.find(char => char.slug === slug);
}

export function getCharactersByRarity(rarity) {
  return STELLA_SORA_CHARACTERS.filter(char => char.rarity === rarity);
}

export function getCharactersByElement(element) {
  return STELLA_SORA_CHARACTERS.filter(char => char.element === element);
}

export function getCharactersByRole(role) {
  return STELLA_SORA_CHARACTERS.filter(char => char.role === role);
}

// Export all characters as default for easy importing
export default STELLA_SORA_CHARACTERS;
