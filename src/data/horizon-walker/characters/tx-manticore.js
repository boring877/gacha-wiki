// TX - Manticore Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawTxManticoreData = {
  // Basic Character Information
  name: 'TX - Manticore',
  image: 'TX_Manticore', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 8, // Deployment cost
  tags: [
    'Tank',
    'Ranged Attacker',
    'AI',
    'Machine',
    'Pierce Damage',
    'Crush Damage',
    'Heat Damage',
    'Area Damage',
    'Support Attack',
    'Counterattack',
    'Debuffer',
    'High Defense',
    'Autonomous Demolisher',
    'Battlefield Control',
    'Detection',
    'Bombardment',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '10',
    technic: '18',
    intelligence: '9',
    vitality: '25',
    agility: '12',

    // Key Stats
    meleeAtk: '128',
    rangedAtk: '230',
    magicAtk: '115',
    maxHp: '1600',
    spd: '87',
    startingAp: '118',
    apRecovery: '113',
    accuracy: '106',
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
    slashDef: '200',
    pierceDef: '250',
    crushDef: '200',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '-50',
    poisonDef: '0',
    blockRate: '200',
  },

  // Character Description
  description:
    'An autonomous demolisher tank equipped with high firepower and detection capabilities, known to turn the tide of battle when deployed on critical fronts.',

  // Character Profile
  profile: {
    age: '-',
    racial: 'AI',
    homeland: '-',
    height: '-',
    birthday: '-',
    bwhRatio: '-',
  },

  // Character Story
  story:
    "The 'TX - Manticore' is equipped with high firepower and detection capabilities on the battlefield, allowing it to effectively intercept the enemy's core forces. This Manticore, which both the enemy and allies refer to with awe, is known to be a key weapon that can turn the tide of battle when it appears on certain fronts. It is the final form of the autonomous demolisher tank model that can be produced with current technology, stationed across multiple fronts to effectively suppress the enemy's frontline.",

  // Unique Traits
  uniqueTraits: {
    steelRetribution: {
      name: 'Steel Retribution',
      description:
        'Activate the Level 1 Passive Skill [Area Suppression]. [Area Suppression]: Increases Aggro Adjustment by 80 and automatically performs counterattacks. Every 2 counterattacks, a [Reactive Electrofield] shield is acquired. [Reactive Electrofield]: Grants a shield equal to 24% of base maximum HP.',
    },
    steelFrame: {
      name: 'Steel Frame',
      description:
        'Activates the Level 1 Active Skill [Solid Impact]. [Solid Impact]: Consumes 25 AP. Can be used once during battle. If the skill is used within 2 rounds after the start of the combat without falling into an incapacitated state, recovers 25 AP. Leaps to the designated location and deals Crush DMG equal to 120% of Melee ATK to enemies within 2.5m, pushing them back significantly. Slash DEF 50, Pierce DEF 50, Crush DEF 50',
    },
    machine: {
      name: 'Machine',
      description: 'Slash DEF 150, Pierce DEF 150, Crush DEF 150',
    },
  },

  // Skills and Passive
  skills: {
    designatedFire: {
      name: 'Designated Fire',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '114%',
      },
      description:
        "Fires machine gun at the enemy. Deals Pierce DMG equal to 114% of Ranged ATK to the enemies hit by the attack. After the basic attack, performs a Support Attack with the 'Detection Shot' skill on a random enemy, dealing Pierce DMG equal to 35% of Ranged ATK.",
    },
    tacticalClearing: {
      name: 'Tactical Clearing',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'During combat, CRIT rate increases by 57%. Applies the [Tactical Target] effect to enemies hit by own Support Attacks and counterattacks, lasting for 2R. [Tactical Target]: When an ally attacks the target of the effect, increases ACC by 19% temporarily.',
    },
    openFire: {
      name: 'Open Fire',
      level: '10/10',
      type: 'Skill',
      apCost: 80,
      cooldown: 5,
      damage: {
        type: 'Ranged ATK',
        value: '162%',
      },
      description:
        'Fires all machine guns to suppress the frontlines. Deals Pierce DMG equal to 162% of Ranged ATK to enemies within a 60° fan range of 9m in front. Temporarily increases CRIT rate by 24% when the skill is used.',
    },
    airspaceRadar: {
      name: 'Airspace Radar',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When allies, excluding self, are attacked by enemies, there is a 45% chance to perform a Support Attack. If any of the attacked enemies have the [Tactical Target] effect, the chance to perform a Support Attack increases to 100%. If the Support Attack is successful through this skill, there is a 40% chance to reduce the cooldown of the 'Open Fire' skill by 1R.",
    },
    delayedBombardment: {
      name: 'Delayed Bombardment',
      level: '10/10',
      type: 'Skill',
      apCost: 65,
      cooldown: 2,
      description:
        'Fires guided missile into the air. Creates a circular [Guided Target] area with a 4m radius at the designated location. [Guided Target]: At the start of each round, the area is bombarded by guided missile, dealing the following damage to enemies within the area. This additional damage scales with CRIT DMG. Additional Pierce DMG equal to 152% of Ranged ATK, Additional Crush DMG equal to 152% of Ranged ATK, Additional Heat DMG equal to 152% of Ranged ATK',
    },
    detectionShot: {
      name: 'Detection Shot',
      level: 'Support',
      type: 'Support',
      apCost: 0,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '35%',
      },
      description: 'Attacks a random enemy, dealing Pierce DMG equal to 35% of Ranged ATK.',
    },
  },

  // Weapon
  weapon: {
    name: 'EX Ancient Core - The Aegaeon Core',
    type: 'Ancient Core',
    rarity: 'EX',
    image: 'TX_Manticore.jpg',
    stats: {
      weaponRangedAtk: '91.0',
      critDmgBonus: '+70.0%',
    },
    uniqueSkills: {
      overwhelmingBody: {
        name: 'Overwhelming Body',
        type: 'Unique',
        description:
          "During battle, All DEF increases by 400. When self counterattacks, Ranged ATK increases by 60% for 1R. Applies the [Fatigue Issue] effect to enemies hit by self's attack, lasting 2R. [Fatigue Issue]: ACC decreases by 7%, and All ATK decreases by 20%.",
      },
      oppressor: {
        name: 'TX - Manticore Signature: Oppressor',
        type: 'TX - Manticore Signature',
        description:
          "The [Fatigue Issue] effect's ACC and ATK reduction applies at 3x the usual value, and using the 'Delayed Bombardment' skill increases Aggro Adjustment by 30 for 1R.",
      },
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawTxManticoreData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const txManticoreData = sanitizeCharacterData(rawTxManticoreData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Steel\s+Retribution|Area\s+Suppression|Reactive\s+Electrofield|Steel\s+Frame|Solid\s+Impact|Machine|Tactical\s+Target|Guided\s+Target|Fatigue\s+Issue|Overwhelming\s+Body|Oppressor|autonomous\s+demolisher|detection\s+capabilities|high\s+firepower|turn\s+the\s+tide|battlefield\s+control)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:TX\s+-\s+Manticore|autonomous\s+demolisher\s+tank|detection\s+capabilities|high\s+firepower|battlefield|core\s+forces|turn\s+the\s+tide|frontline|suppress|machine\s+gun|guided\s+missile|bombardment|radar|tactical\s+clearing|support\s+attack|counterattack|aggro\s+adjustment)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Pierce|Crush|Heat|Slash|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Accuracy|ACC|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|Strength|Technic|Vitality|Agility|All\s+DEF|All\s+ATK|Block\s+Rate|Aggro\s+Adjustment)\b/gi,
};

// Export sanitized highlighting patterns
export const txManticoreHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const txManticoreSEO = {
  title: 'TX - Manticore - Horizon Walker Character Guide',
  description:
    'Complete guide for TX - Manticore, an EX rarity AI tank character in Horizon Walker. Autonomous demolisher with high firepower, detection capabilities, and battlefield control abilities.',
  keywords: [
    'TX - Manticore',
    'TX Manticore',
    'Horizon Walker',
    'EX rarity',
    'tank',
    'AI',
    'machine',
    'ranged attacker',
    'autonomous demolisher',
    'pierce damage',
    'crush damage',
    'heat damage',
    'bombardment',
    'detection',
    'battlefield control',
    'guide',
    'stats',
    'build',
  ],
};
