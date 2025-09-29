// TypeScript interfaces for Horizon Walker Character data
export interface CharacterStats {
  strength: string;
  technic: string;
  intelligence: string;
  vitality: string;
  agility: string;
  meleeAtk: string;
  rangedAtk: string;
  magicAtk: string;
  maxHp: string;
  spd: string;
  startingAp: string;
  apRecovery: string;
  accuracy: string;
  evade: string;
  critRate: string;
  critDmg: string;
  slashBoost: string;
  pierceBoost: string;
  crushBoost: string;
  heatBoost: string;
  coldBoost: string;
  electricBoost: string;
  immaterialBoost: string;
  poisonBoost: string;
  slashDef: string;
  pierceDef: string;
  crushDef: string;
  heatDef: string;
  coldDef: string;
  electricDef: string;
  immaterialDef: string;
  poisonDef: string;
  blockRate: string;
}

export interface CharacterProfile {
  age: string;
  racial: string;
  homeland: string;
  height: string;
  birthday: string;
  bwhRatio: string;
}

export interface CharacterWeapon {
  name: string;
  type: string;
  rarity: string;
  image: string;
  stats: Record<string, string>;
  uniqueSkills?: Record<string, WeaponSkill>;
  signatureSkill?: WeaponSkill;
}

export interface WeaponSkill {
  name: string;
  type: string;
  description: string;
  note?: string;
}

export interface CharacterUniqueTrait {
  name: string;
  description: string;
}

export interface CharacterSkill {
  name: string;
  level: string;
  type: string;
  apCost: number;
  cooldown: number;
  damage?: {
    type: string;
    value: string;
  };
  description: string;
}

export interface CharacterGift {
  id: string;
  name: string;
  image: string;
  totalPoints: number;
  affection: number;
}

export interface GiftBoxGift {
  id: string;
  name: string;
  rarity: string;
  image: string;
  points: {
    min: number;
    max: number;
  };
}

export interface CharacterGiftData {
  id: string;
  name: string;
  image: string;
  favorites: CharacterGift[];
  likes: CharacterGift[];
}

export interface GiftBoxInfo {
  box: {
    id: string;
    name: string;
    image: string;
    gifts: GiftBoxGift[];
  };
  cost: number;
  pulls: number;
}

export interface HighlightPatterns {
  damage?: RegExp;
  effects?: RegExp;
  buffsDebuffs?: RegExp;
  percentages?: RegExp;
  statChanges?: RegExp;
  keywords?: RegExp;
  attributes?: RegExp;
}

export interface CharacterData {
  name: string;
  image: string;
  rarity: string;
  cost: number;
  tags: string[];
  stats: CharacterStats;
  description: string;
  weapon: CharacterWeapon;
  profile: CharacterProfile;
  story: string;
  uniqueTraits: Record<string, CharacterUniqueTrait>;
  skills: Record<string, CharacterSkill>;
  highlightPatterns?: HighlightPatterns;
}

export interface GiftCategory {
  title: string;
  description: string;
  gifts: CharacterGift[];
  showHighValue?: boolean;
  className?: string;
}
