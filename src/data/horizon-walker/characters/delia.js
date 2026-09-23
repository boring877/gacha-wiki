// Delia Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
 validateCharacterData,
 sanitizeCharacterData,
 sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawDeliaData = {
 // Basic Character Information
 name: 'Delia',
 image: 'Delia', // Character image filename without extension
 rarity: 'A', // EX, SS, S, A, B
 cost: 6, // Deployment cost
 tags: [
  'Mage',
  'Support',
  'Spacemancer',
  'Magic User',
  'Team Buffer',
  'Debuffer',
  'Teleportation',
  'Area Damage',
  'CRIT Support',
  'Successor of the Stars',
  'Heat Damage',
  'Starlight Magic',
 ], // Character role tags

 // Character Stats (Level 60)
 stats: {
  // Basic Stats
  strength: '5',
  technic: '7',
  intelligence: '30',
  vitality: '13',
  agility: '13',

  // Key Stats
  meleeAtk: '76',
  rangedAtk: '102',
  magicAtk: '332',
  maxHp: '832',
  spd: '81',
  startingAp: '117',
  apRecovery: '112',
  accuracy: '102',
  evade: '166',
  critRate: '10',
  critDmg: '150',

  // Attribute Boost
  slashBoost: '0',
  pierceBoost: '0',
  crushBoost: '0',
  heatBoost: '3',
  coldBoost: '3',
  electricBoost: '3',
  immaterialBoost: '3',
  poisonBoost: '3',

  // Attribute Defense
  slashDef: '0',
  pierceDef: '0',
  crushDef: '0',
  heatDef: '0',
  coldDef: '0',
  electricDef: '0',
  immaterialDef: '0',
  poisonDef: '0',
  blockRate: '0',
 },

 // Character Description
 description:
  'A 12-year-old spacemancer from the Successors of the Stars, working part-time as a Vanguard assistant while pursuing her dream of attending university.',

 // Character Profile
 profile: {
  age: '12',
  racial: 'Human (Noctis Nebula)',
  homeland: 'The Empire, Laventa',
  height: '99cm',
  birthday: 'March 3rd',
  bwhRatio: '-',
 },

 // Character Story
 story:
  "Delia was born into a group of spacemancers known as the Successors of the Stars. During the Rift Crisis, Delia was separated from her parents and survived thanks to Kalina's help. Later, she followed Maximilia to Earth, and now resides in an orphanage established for those from Noctis Nebula. However, Delia is well aware that the orphanage can only provide the bare minimum for living, and that one day, when she grows up, she will have to leave and live on her own. She also understands that achieving her goal of attending university will require a significant amount of money. Understanding all of this, Delia uses her spacemancy to take on various part-time jobs. It was then that Yeon Chae-young approached her, offering her an internship as a part-time Vanguard assistant. Delia accepted under the condition that she could keep her other jobs, and now she waits for the Human God while working her internship.",

 // Unique Traits
 uniqueTraits: {
  growingSprout: {
   name: 'Growing Sprout',
   description: 'Formation Cost -2, Intelligence -6',
  },
  marlon: {
   name: 'Marlon',
   description: 'Strength 1, Technic 1, Intelligence 1',
  },
  interested: {
   name: 'Interested',
   description: 'Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving. Special trait with no listed characteristics.',
  },
 },

 // Skills and Passive
 skills: {
  summonEnergy: {
   gameKey: 'SummonEnergy',
   icon: 'UI_SkillIcon_SummonEnergy',
   name: 'Summon Energy',
   level: '10/10',
   type: 'Skill',
   apCost: 60,
   cooldown: 0,
   damage: {
    type: 'Magic ATK',
    value: '152%',
   },
   description:
    'Releases pure energy in the form of a heat ray to attack. Deals Heat DMG equal to 152% of magic ATK to enemies within a 1m by 7m rectangular area. This skill cannot be used for a Weakness Attack.',
  },
  spatialShift: {
   gameKey: 'SpaceWarp',
   icon: 'UI_SkillIcon_SpaceWarp',
   name: 'Spatial Shift',
   level: '10/10',
   type: 'Skill',
   apCost: 30,
   cooldown: 1,
   description:
    'Crosses through space-time to reach the desired location. Teleports to a specified location within a radius of 18m.',
  },
  starlightGaze: {
   gameKey: 'SummonStarlight',
   icon: 'UI_SkillIcon_SummonStarlight',
   name: 'Starlight Gaze',
   level: '10/10',
   type: 'Skill',
   apCost: 60,
   cooldown: 2,
   description:
    'Starlight shines upon the enemy. Applies the [Starlight Gaze] effect to the enemy and grants the [Aurora] effect to the user 3 times. - [Starlight Gaze]: Reduces All ATK by {20,22,24,26,28,30,32,34,36,38}% and generates a 7m circular [Starlight] area that tracks the target. - [Aurora]: While possessing this effect, allies attacking enemies with the [Starlight Gaze] effect inside the [Starlight] area will be supported by [Delayed Aurora]. Delayed Aurora Deals Heat DMG equal to {80,88,96,104,112,120,128,136,144,152}% of magic ATK to enemies with the [Starlight Gaze] effect within a 1m by 7m rectangular area. Recovers the HP of all allies within the [Starlight] area by {20,22,24,26,28,30,32,34,36,38}% of magic ATK. Consumes one [Aurora] effect. This skill cannot be used for a Weakness Attack.',
  },
  warpedStarlight: {
   gameKey: 'DistortedStarlight',
   icon: 'UI_SkillIcon_DistortedStarlight',
   name: 'Warped Starlight',
   level: '10/10',
   type: 'Passive',
   apCost: 0,
   cooldown: 0,
   description:
    'Distorted starlight illuminates the battlefield, twisting possibilities to forcibly turn the tide in favor. At the start of each round, increases the CRIT rate of all allies by {10,11,12,13,14,15,16,17,18,19}% for 1R. At the start of each round, decreases the CRIT rate of all enemies by {10,11,12,13,14,15,16,17,18,19}% for 1R.',
  },
  castStarlightShower: {
   gameKey: 'CastingStarlightShower',
   icon: 'UI_SkillIcon_CastingStarlightShower',
   name: 'Cast: Starlight Shower',
   level: '10/10',
   type: 'Skill',
   apCost: 80,
   cooldown: 0,
   description:
    "Prepares a grand spell. During casting, movement, evasion, and response are not possible, and own Aggro Adjustment increases. On the next turn, gains 100 AP to activate the 'Starlight Shower' skill. Alternatively, can prepare the spell once more in the same manner. In this case, on the following turn, gains 200 AP to activate the 'Starlight Shower - Ultimate' skill. Starlight Shower Calls forth starlight to attack enemies. Deals Immaterial DMG equal to {130,143,156,169,182,195,208,221,234,247}% of magic ATK to all enemies within a 5m radius. Starlight Shower - Ultimate Calls forth even more starlight to attack enemies. Deals Immaterial DMG equal to {380,418,456,494,532,570,608,646,684,722}% of magic ATK to all enemies within a 7m radius.",
  },
 },

 // Weapon - Not yet released in game
 weapon: null,
 rarityStages: {
  'EX': {
   strength: 5,
   technic: 7,
   intelligence: 23,
   vitality: 11,
   agility: 11,
   maxHp: 704,
   meleeAtk: 76,
   rangedAtk: 102,
   magicAtk: 239,
   evade: 140,
   apRecovery: 107,
   startingAp: 112
  },
  'EX 1': {
   strength: 5,
   technic: 7,
   intelligence: 25,
   vitality: 11,
   agility: 11,
   maxHp: 704,
   meleeAtk: 76,
   rangedAtk: 102,
   magicAtk: 266,
   evade: 140,
   apRecovery: 107,
   startingAp: 112
  },
  'EX 2': {
   strength: 5,
   technic: 7,
   intelligence: 26,
   vitality: 11,
   agility: 11,
   maxHp: 704,
   meleeAtk: 76,
   rangedAtk: 102,
   magicAtk: 279,
   evade: 140,
   apRecovery: 107,
   startingAp: 112
  },
  'EX 3': {
   strength: 5,
   technic: 7,
   intelligence: 26,
   vitality: 11,
   agility: 13,
   maxHp: 704,
   meleeAtk: 76,
   rangedAtk: 102,
   magicAtk: 279,
   evade: 166,
   apRecovery: 112,
   startingAp: 117
  },
  'EX 4': {
   strength: 5,
   technic: 7,
   intelligence: 26,
   vitality: 13,
   agility: 13,
   maxHp: 832,
   meleeAtk: 76,
   rangedAtk: 102,
   magicAtk: 279,
   evade: 166,
   apRecovery: 112,
   startingAp: 117
  },
  'EX 5': {
   strength: 5,
   technic: 7,
   intelligence: 28,
   vitality: 13,
   agility: 13,
   maxHp: 832,
   meleeAtk: 76,
   rangedAtk: 102,
   magicAtk: 306,
   evade: 166,
   apRecovery: 112,
   startingAp: 117
  },
  'EX 6': {
   strength: 5,
   technic: 7,
   intelligence: 30,
   vitality: 13,
   agility: 13,
   maxHp: 832,
   meleeAtk: 76,
   rangedAtk: 102,
   magicAtk: 332,
   evade: 166,
   apRecovery: 112,
   startingAp: 117
  },
 },
 heroId: 36,

  rarityStages: {
    'EX': {
      strength: 5,
      technic: 7,
      intelligence: 23,
      vitality: 11,
      agility: 11,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 239,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 1': {
      strength: 5,
      technic: 7,
      intelligence: 25,
      vitality: 11,
      agility: 11,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 266,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 2': {
      strength: 5,
      technic: 7,
      intelligence: 26,
      vitality: 11,
      agility: 11,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 279,
      evade: 140,
      apRecovery: 107,
      startingAp: 112
    },
    'EX 3': {
      strength: 5,
      technic: 7,
      intelligence: 26,
      vitality: 11,
      agility: 13,
      maxHp: 704,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 279,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
    'EX 4': {
      strength: 5,
      technic: 7,
      intelligence: 26,
      vitality: 13,
      agility: 13,
      maxHp: 832,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 279,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
    'EX 5': {
      strength: 5,
      technic: 7,
      intelligence: 28,
      vitality: 13,
      agility: 13,
      maxHp: 832,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 306,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
    'EX 6': {
      strength: 5,
      technic: 7,
      intelligence: 30,
      vitality: 13,
      agility: 13,
      maxHp: 832,
      meleeAtk: 76,
      rangedAtk: 102,
      magicAtk: 332,
      evade: 166,
      apRecovery: 112,
      startingAp: 117
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawDeliaData);
if (!validation.isValid) {
 throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const deliaData = sanitizeCharacterData(rawDeliaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
 damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
 effects: /\[([^[\]]{1,150})]/g,
 buffsDebuffs:
  /\b(?:Growing\s+Sprout|Starlight\s+Gaze|Aurora|Delayed\s+Aurora|Warped\s+Starlight|Starlight\s+Shower|Sad\s+Ending|spacemancer|successor\s+of\s+the\s+stars|starlight|teleports)\b/gi,
 percentages: /\b(\d{1,3}%)\b/g,
 statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
 keywords:
  /\b(?:Successors\s+of\s+the\s+Stars|Rift\s+Crisis|Noctis\s+Nebula|Maximilia|Kalina|Yeon\s+Chae-young|The\s+Empire|Laventa|orphanage|university|part-time\s+jobs|internship|Vanguard\s+assistant|Human\s+God|spacemancy|space-time|battlefield|grand\s+spell)\b/gi,
 attributes:
  /\b(?:AP|Melee\s+ATK|Magic\s+ATK|Ranged\s+ATK|All\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|Accuracy|HP|Max\s+HP|Formation\s+Cost|AP\s+Recovery|Intelligence|Strength|Technic|Aggro\s+Adjustment)\b/gi,
};

// Export sanitized highlighting patterns
export const deliaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const deliaSEO = {
 title: 'Delia - Horizon Walker Character Guide',
 description:
  'Complete guide for Delia, an A rarity Spacemancer character in Horizon Walker. Young spacemancer with starlight magic, teleportation abilities, and team support skills.',
 keywords: [
  'Delia',
  'Horizon Walker',
  'A rarity',
  'mage',
  'spacemancer',
  'support',
  'starlight magic',
  'teleportation',
  'team buffer',
  'CRIT support',
  'Successors of the Stars',
  'heat damage',
  'guide',
  'stats',
  'build',
 ],
};
