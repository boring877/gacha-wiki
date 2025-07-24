// Character data type definitions for both games
// This file provides type safety and better IntelliSense

export interface BaseCharacter {
  id: number;
  name: string;
  slug: string;
  detailUrl: string;
  image: string;
  rarity: 'SSR' | 'SR' | 'R';
}

// Zone Nova specific character interface
export interface ZoneNovaCharacter extends BaseCharacter {
  element: 'Fire' | 'Wind' | 'Holy' | 'Chaos' | 'Ice';
  class: 'Guardian' | 'Warrior' | 'Rogue' | 'Mage' | 'Buffer' | 'Debuffer' | 'Healer'; // Determines memory compatibility and gameplay mechanics
  role: 'Tank' | 'DPS' | 'Buffer' | 'Debuffer' | 'Healer'; // Functional role description
  stats: {
    hp: number;
    attack: number;
    defense: number;
    energyRecovery: number;
    critRate: number;
    critDmg: number;
  };
}

// Silver and Blood specific character interface
export interface SilverBloodCharacter extends BaseCharacter {
  class: 'Warrior' | 'Assassin' | 'Defender' | 'Marksman' | 'Sorcerer' | 'Enchanter';
  faction: 'Kingdom' | 'Ancestors' | 'Church' | 'Bloodborn';
  equipment: 'Light' | 'Medium' | 'Heavy';
  moonPhase?: 'New Moon' | 'Crescent Moon' | 'Full Moon';
  stats: {
    hp: number;
    attack: number;
    physicalDefense: number;
    magicalDefense: number;
    attackSpeed: number;
    bloodsoulRecovery: number;
    critRate: number;
    critDamage: number;
    allDamageBonus: number;
    allDamageReduction: number;
    physicalDamageBonus: number;
    magicalDamageBonus: number;
    healingBonus: number;
    bloodPower: number;
  };
  skills: CharacterSkill[];
}

// Character skill interface
export interface CharacterSkill {
  name: string;
  type: 'Normal Attack' | 'Special' | 'Passive' | 'Ultimate';
  description: string;
  cooldown?: number;
  bloodsoulCost?: number;
  damage?: {
    type: 'P.DMG' | 'M.DMG';
    multiplier: number;
    scaling?: string;
  };
  effects?: SkillEffect[];
}

// Skill effect interface
export interface SkillEffect {
  type: 'buff' | 'debuff' | 'heal' | 'damage' | 'special';
  description: string;
  duration?: number;
  value?: number;
  target?: 'self' | 'ally' | 'enemy' | 'all';
}

// Memory card interface for Zone Nova
export interface ZoneNovaMemory {
  id: number;
  name: string;
  slug: string;
  rarity: 'SSR' | 'SR' | 'R';
  type: 'Attack' | 'Defense' | 'Support' | 'Special';
  image: string;
  detailUrl: string;
  description: string;
  stats: {
    primary: {
      stat: string;
      value: number;
    };
    secondary?: {
      stat: string;
      value: number;
    };
  };
  skillEffect?: string;
  recommendedFor?: string[];
}

// Game metadata interfaces
export interface GameInfo {
  rarities: string[];
  classes?: Array<{
    name: string;
    description: string;
  }>;
  factions?: Array<{
    name: string;
    description: string;
  }>;
  elements?: string[];
  roles?: string[];
  equipmentTypes?: Array<{
    name: string;
    description: string;
  }>;
  stats: string[];
}

// Update/News interface
export interface GameUpdate {
  id: string;
  title: string;
  slug: string;
  type: 'maintenance' | 'announcement' | 'event' | 'patch';
  date: string;
  content: string;
  image?: string;
  tags?: string[];
  status?: 'active' | 'completed' | 'upcoming';
}

// Rift/Dungeon interface for Zone Nova
export interface ZoneNovaRift {
  id: number;
  name: string;
  slug: string;
  tide: number;
  difficulty: 'Normal' | 'Hard' | 'Nightmare';
  recommendedLevel: number;
  rewards: Array<{
    item: string;
    quantity: number;
    dropRate: number;
  }>;
  enemies: Array<{
    name: string;
    level: number;
    hp: number;
    abilities?: string[];
  }>;
  strategy?: string;
  detailUrl: string;
}

// Redeem code interface
export interface RedeemCode {
  code: string;
  rewards: string[];
  expiration?: string;
  status: 'active' | 'expired' | 'limited';
  description?: string;
}

// SEO metadata interface
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}
