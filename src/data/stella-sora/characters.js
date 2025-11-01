// Stella Sora Characters Database
// This file contains character data and metadata for the Stella Sora wiki
// All character stats are based on maximum level

import { chitoseData } from './characters/chitose.js';
import { shiaData } from './characters/shia.js';
import { nanohaData } from './characters/nanoha.js';
import { freesiaData } from './characters/freesia.js';

// Game Mechanics Reference
export const gameInfo = {
  rarities: ['5-Star', '4-Star', '3-Star'],
  elements: [
    {
      name: 'Aqua',
      color: '#0EA5E9',
      description: 'Aqua element characters command water and flow',
    },
    {
      name: 'Lux',
      color: '#FFD700',
      description: 'Lux element characters harness radiant light energy',
    },
    {
      name: 'Ventus',
      color: '#10B981',
      description: 'Ventus element characters wield wind and flower ninjutsu',
    },
  ],
  roles: [
    { name: 'Vanguard', description: 'Front-line warriors who lead the charge' },
    {
      name: 'Versatile',
      description: 'Flexible characters who can adapt to various combat situations',
    },
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
export const STELLA_SORA_CHARACTERS = [chitoseData, freesiaData, nanohaData, shiaData];

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
