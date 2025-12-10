// Stella Sora Characters Database
// This file contains character data and metadata for the Stella Sora wiki
// All character stats are based on maximum level

import { amberData } from './characters/amber.js';
import { chitoseData } from './characters/chitose.js';
import { chixiaData } from './characters/chixia.js';
import { floraData } from './characters/flora.js';
import { freesiaData } from './characters/freesia.js';
import { fuyukaData } from './characters/fuyuka.js';
import { gerieData } from './characters/gerie.js';
import { jinglinData } from './characters/jinglin.js';
import { kasimiraData } from './characters/kasimira.js';
import { minovaData } from './characters/minova.js';
import { mistiqueData } from './characters/mistique.js';
import { nanohaData } from './characters/nanoha.js';
import { nazukaData } from './characters/nazuka.js';
import { nazunaData } from './characters/nazuna.js';
import { shiaData } from './characters/shia.js';
import { tiliaData } from './characters/tilia.js';

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
      name: 'Umbra',
      color: '#6B46C1',
      description: 'Umbra element characters wield shadow and dark magic',
    },
    {
      name: 'Ignis',
      color: '#DC2626',
      description: 'Ignis element characters command fire and flame',
    },
    {
      name: 'Terra',
      color: '#8B4513',
      description: 'Terra element characters command earth and stone',
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
    {
      name: 'Support',
      description:
        'Characters who enhance team performance through buffs, healing, and tactical abilities',
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
export const STELLA_SORA_CHARACTERS = [
  amberData,
  chitoseData,
  chixiaData,
  floraData,
  freesiaData,
  fuyukaData,
  gerieData,
  jinglinData,
  kasimiraData,
  minovaData,
  mistiqueData,
  nanohaData,
  nazukaData,
  nazunaData,
  shiaData,
  tiliaData,
];

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
