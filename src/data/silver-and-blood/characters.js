// Silver and Blood Characters Database
// This file contains character data and metadata for the Silver and Blood wiki

// Game Mechanics Reference
export const gameInfo = {
  rarities: ['SSR', 'SR', 'R'],
  classes: [
    { name: 'Warrior', description: 'Powerful melee fighters with high durability' },
    { name: 'Assassin', description: 'Swift attackers specializing in critical strikes' },
    { name: 'Defender', description: 'Protective units with high defensive capabilities' },
    { name: 'Marksman', description: 'Ranged attackers with precision strikes' },
    { name: 'Sorcerer', description: 'Magic users dealing elemental damage' },
    { name: 'Enchanter', description: 'Support units with buffs and healing abilities' }
  ],
  factions: [
    { name: 'Kingdom', description: 'Noble houses defending traditional order' },
    { name: 'Ancestors', description: 'Ancient beings with forgotten wisdom' },
    { name: 'Church', description: 'Holy order wielding divine power' },
    { name: 'Bloodborn', description: 'Those who embraced forbidden blood magic' }
  ],
  equipmentTypes: [
    { name: 'Light', description: 'Attack-focused gear with high offensive stats' },
    { name: 'Medium', description: 'It fits medium equipment, offering balanced attributes.' },
    { name: 'Heavy', description: 'Survival-focused gear with maximum protection' }
  ],
  moonPhases: [
    { name: 'New Moon', effect: 'Ultimate Bloodsoul Cost -1, +25% DMG' },
    { name: 'Crescent Moon', effect: 'Ultimate Bloodsoul Cost -1, +25% DMG' },
    { name: 'Full Moon', effect: 'Activate Moon Phase: Full Moon by using Ultimate in battle. While Blood Moon is active, all Vassals gains Ultimate Bloodsoul Cost -1 and 25% more DMG.' }
  ],
  attackTypes: [
    { name: 'P.DMG', description: 'DMG dealt through physical means like swords and bows. Increasing P. DEF reduces DMG taken from this type.' },
    { name: 'M.DMG', description: 'Magical damage through blood formulas and alchemy. Reduced by M.DEF.' }
  ],
  skillTypes: [
    { name: 'Normal Attack', description: 'Basic attack skill that generates Bloodsoul' },
    { name: 'Special', description: 'Enhanced ability with moderate Bloodsoul cost' },
    { name: 'Passive', description: 'Always-active ability that provides constant effects' },
    { name: 'Ultimate', description: 'Most powerful skill that activates Moon Phase effects' }
  ],
  stats: [
    'HP', 'ATK', 'P.DEF', 'M.DEF', 'ATK SPD', 'Bloodsoul Recovery',
    'CRIT Rate', 'CRIT DMG Increase', 'All DMG Bonus', 'All DMG Reduction',
    'P.DMG Bonus', 'M.DMG Bonus', 'Received Healing Bonus', 'Blood Power'
  ]
};

// Import individual character files
import { transcendentHati } from './characters/transcendent-hati.js';
import { transcendentAmi } from './characters/transcendent-ami.js';

// Characters array - Add new characters here
export const characters = [
  transcendentHati,
  transcendentAmi,
  // Add more characters as they are created
];

// Utility functions for character management
export function getCharacterById(id) {
  return characters.find(character => character.id === id);
}

export function getCharactersByRarity(rarity) {
  return characters.filter(character => character.rarity === rarity);
}

export function getCharactersByClass(className) {
  return characters.filter(character => character.class === className);
}

export function getCharactersByFaction(faction) {
  return characters.filter(character => character.faction === faction);
}

export function getCharactersByMoonPhase(moonPhase) {
  return characters.filter(character => character.moonPhase === moonPhase);
}

export function getCharactersByAttackType(attackType) {
  return characters.filter(character => character.attackType === attackType);
}

// Character count by category
export function getCharacterStats() {
  return {
    total: characters.length,
    byRarity: gameInfo.rarities.reduce((acc, rarity) => {
      acc[rarity] = getCharactersByRarity(rarity).length;
      return acc;
    }, {}),
    byClass: gameInfo.classes.reduce((acc, cls) => {
      acc[cls.name] = getCharactersByClass(cls.name).length;
      return acc;
    }, {}),
    byFaction: gameInfo.factions.reduce((acc, faction) => {
      acc[faction.name] = getCharactersByFaction(faction.name).length;
      return acc;
    }, {})
  };
}

// Legacy exports for compatibility
export const SILVER_AND_BLOOD_CHARACTERS = characters;
export const CHARACTERS_BY_SLUG = new Map(
  characters.map(char => [char.id, char])
); 