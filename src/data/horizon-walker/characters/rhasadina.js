// Rhasadina Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawRhasadinaData = {
  // Basic Character Information
  name: 'Rhasadina',
  image: 'Rhasadina', // Character image filename without extension
  rarity: 'A', // EX, SS, S, A, B
  cost: 3, // Deployment cost
  tags: [
    'Support',
    'Fairy',
    'Magic User',
    'Healer',
    'RNG Effects',
    'Dimensional Shift',
    'Team Buffer',
    'DoT',
    'Survival Support',
    'Crossroads',
    'Mystical',
    'Random Effects',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '8',
    intelligence: '11',
    vitality: '12',
    agility: '10',

    // Key Stats
    meleeAtk: '76',
    rangedAtk: '89',
    magicAtk: '140',
    maxHp: '704',
    spd: '79',
    startingAp: '114',
    apRecovery: '105',
    accuracy: '102',
    evade: '153',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',

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
    'A mysterious fairy fascinated by crossroads who decided to assist Luise after meeting her, bringing unique dimensional abilities and random magical effects.',

  // Character Profile
  profile: {
    age: 'Unknown',
    racial: 'Fairy',
    homeland: 'Unknown',
    height: '30cm',
    birthday: 'Unknown',
    bwhRatio: '-',
  },

  // Character Story
  story:
    'Of all the choices she could make, it was the crossroads that fascinated her most. During a conversation with Luise, whom she met by chance, she realized that her own crossroads had arrived. She decided to assist Luise with her work, trying to follow her own path, and eventually, upon meeting the Human God, she became certain that her journey would no longer diverge.',

  // Unique Traits
  uniqueTraits: {
    friendshipWithLuise: {
      name: 'Friendship with Luise',
      description:
        'Activates the Level 1 passive skill [Friendship with Luise]. [Friendship with Luise]: If deployed with Luise, focuses more, increasing AP Recovery by 5%.',
    },
    fairyDust: {
      name: 'Fairy Dust',
      description:
        "Activates the Level 1 passive skill [Fairy Dust]. [Fairy Dust]: Uses the mystical dust from the fairy's wings to recover nearby allies. At the start of own turn, there is a 30% chance to heal the HP of allies within a 5m radius, based on own Magic ATK.",
    },
    fairy: {
      name: 'Fairy',
      description: 'Strength -1, Vitality -1, Evade 15%',
    },
    interested: {
      name: 'Interested',
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    fruitThrow: {
      name: 'Fruit Throw',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '57%',
      },
      description:
        "Pulls out a fruit(?) from a mysterious fruit pouch and throws it to attack. Deals Crush DMG equal to 57% of magic ATK and applies the [Fruit Fragment] effect for 3R. [Fruit Fragment]: At the start of each round, inflicts Pierce DMG equal to 30% of the caster's magic ATK.",
    },
    aspectShift: {
      name: 'Aspect Shift',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 2,
      description:
        'Moves to the dimensional backside, isolating oneself from the world. Grants the [Aspect Shift] effect until the next turn. [Aspect Shift]: Cannot be targeted by enemies and is immune to all attacks, but cannot perform any responses.',
    },
    finalFortune: {
      name: 'Final Fortune',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When an ally takes damage that would lead to incapacitation, there is a 40% chance to allow them to survive with 1 HP. This effect can activate only once per Vanguard.',
    },
    gameSpice: {
      name: 'Game Spice',
      level: '2/2',
      type: 'Skill',
      apCost: 90,
      cooldown: 0,
      description:
        'With fairy magic, brings about a powerful effect on the battlefield. One of the following five effects is activated at random: ① recovers all allies by 180% of own magic ATK. ② Deals additional Immaterial DMG equal to 300% of own magic ATK to all enemies. ③ Grants all allies an increase in All ATK by 45% for 2 rounds. ④ Grants all allies 45 AP. ⑤ nothing happens.',
    },
  },

  // Weapon - Not yet released in game
  weapon: null,
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawRhasadinaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const rhasadinaData = sanitizeCharacterData(rawRhasadinaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Friendship\s+with\s+Luise|Fairy\s+Dust|Fruit\s+Fragment|Aspect\s+Shift|Final\s+Fortune|Game\s+Spice|dimensional\s+backside|crossroads|fairy\s+magic|mystical\s+dust|incapacitation)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:crossroads|Luise|Human\s+God|fairy\s+magic|mysterious\s+fruit\s+pouch|dimensional\s+backside|isolating\s+oneself|incapacitation|survive\s+with\s+1\s+HP|powerful\s+effect|battlefield|random|mystical\s+dust|fairy's\s+wings|conversation|journey|diverge)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|All\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility)\b/gi,
};

// Export sanitized highlighting patterns
export const rhasadinaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const rhasadinaSEO = {
  title: 'Rhasadina - Horizon Walker Character Guide',
  description:
    'Complete guide for Rhasadina, an A rarity Fairy Support character in Horizon Walker. Mysterious fairy with dimensional abilities, random effects, and team survival support.',
  keywords: [
    'Rhasadina',
    'Horizon Walker',
    'A rarity',
    'support',
    'fairy',
    'magic user',
    'healer',
    'dimensional shift',
    'random effects',
    'team survival',
    'crossroads',
    'Luise friendship',
    'guide',
    'stats',
    'build',
  ],
};
