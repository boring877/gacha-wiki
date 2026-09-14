// Vlissing Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawVlissingData = {
  // Basic Character Information
  name: 'Vlissing',
  image: 'Vlissing', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Mage',
    'Support',
    'Healer',
    'Water Magic',
    'Flow Guardian',
    'Flowmancer',
    'Divine Guardian',
    'Pierce Damage',
    'Slash Damage',
    'Area Healing',
    'Team Buffer',
    'Debuff',
    'Status Immunity',
    'Tranel Republic',
    'Human (Noctis Nebula)',
    'Artisan Maiden',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '8',
    intelligence: '18',
    vitality: '12',
    agility: '11',

    // Key Stats
    meleeAtk: '102',
    rangedAtk: '115',
    magicAtk: '284',
    maxHp: '896',
    spd: '79',
    startingAp: '129',
    apRecovery: '112',
    accuracy: '102',
    evade: '171',
    critRate: '8',
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
    slashDef: '10',
    pierceDef: '10',
    crushDef: '10',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '0',
  },

  // Character Description
  description:
    'The artisan maiden of the flow from Tranel Republic, renowned for her grace, majesty, and immense control over water magic. Blessed with eternal youth and arrogant demeanor.',

  // Character Profile
  profile: {
    age: '112',
    racial: 'Human (Noctis Nebula)',
    homeland: 'Tranel Republic, Reina',
    height: '182cm',
    birthday: 'July 1st',
    bwhRatio: '99(I)-58-114',
  },

  // Character Story
  story:
    'In the Tranel Republic, famous for its navigation, the Flow Guardians who guide the ships are the most important mages in the republic. They direct waterways and at times even create currents directly. Some Flowmancers possess the ability to manipulate the flow within the body to heal wounds. These individuals learn the art of fluid manipulation, earning them noble status and significant influence in society. Among these Flow Guardians, the artisan maiden of the flow, Vlissing, is renowned for her grace and majesty. Despite being human, she received the blessing of the flow and does not age, making her radiant beauty and her rejection of countless marriage proposals from noblemen famous. She is arrogant toward everyone, but due to her immense control over the power of the flow, few are willing to cross her. After leading the people of Tranel to Earth with her powers, she dispatched Flow Guardians to various locations related to water. While she is regarded as an important figure even in Neo Seoul, Vlissing still seeks to elevate her name further, craving greater reverence and admiration.',

  // Unique Traits
  uniqueTraits: {
    divineGuardianOfTranel: {
      name: 'Divine Guardian of Tranel',
      description: 'Formation Cost +1, Intelligence 2, Agility 2, Vitality 2',
    },
    embracingWave: {
      name: 'Embracing Wave',
      description:
        "Activates the Level 3 passive skill [Dawn's Spray]. [Dawn's Spray]: At the start of battle, grants all allies on the field the [Counter Wave] effect for 3 rounds.",
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
    sharpWave: {
      gameKey: 'SharpWave',
      icon: 'UI_SkillIcon_SharpWave',
      name: 'Sharp Wave',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'Targets an enemy and unleashes blades of water in a 25º, 7m cone. Deals Slash DMG equal to N% of Magic ATK, restores HP to allies along the path by {20,22,24,26,28,30,32,34,36,38}% of Magic ATK, and grants 1 stack of [Tip of the Wave] for 2 rounds.',
    },
    counterWave: {
      gameKey: 'CounterWave',
      icon: 'UI_SkillIcon_CounterWave',
      name: 'Counter Wave',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of each round, {30,33,36,39,42,45,48,51,54,57}% chance to gain [Counterwave] for 1 round.',
    },
    waveOfLifeCycle: {
      gameKey: 'WaveOfLifeCycle',
      icon: 'UI_SkillIcon_WaveOfLifeCycle',
      name: 'Wave of Life Cycle',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 1,
      description:
        'Purifies with the flow of pure waters. Restores HP to allies within a {2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4}m radius around the targeted ally equal to {20,22,24,26,28,30,32,34,36,38}% of Magic ATK, and grants [Purify] and 1 stack of [Clean Flow].',
    },
    ebbAndFlow: {
      gameKey: 'TurnWaterWay',
      icon: 'UI_SkillIcon_TurnWaterWay',
      name: 'Ebb and Flow',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Redirects the current—granting life to allies and suffering to enemies. Grants the targeted ally 1 stack of [Clean Flow] and the targeted enemy 1 stack of [Tangled Flow]. Both effects stack up to 5 times.",
    },
  },

  // Weapon
  weapon: {
    name: "Atra-hasis",
    flavor: "This relic is mentioned in the founding myth of Tranel and is a symbol that can only be touched by the greatest Flow Guardian of the principality. Unlike other trivial symbols, the Atra-hasis actually resonates with the power of flowmancers. In the hands of a suitable master, this staff can compel even the most turbulent currents to become calm and tranquil. Conversely, it can also unleash chaos in calm waters.",
    type: "Staff",
    rarity: 'EX',
    image: "Weapon_FullIMG_AtraHasis",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Magic ATK (weapon)": "91",
      "Magic ATK (%)": "+35%",
    },
    uniqueSkills: {
      unique: {
        name: "The Great Flood",
        type: 'Unique',
        description: "Reduces AP cost of Basic ATK by {16,20,24,28,32}%. When targeting an ally with a skill, increases their All DEF by {160,200,240,280,320} for 1 Round. When targeting an enemy with a skill, reduces their All DEF by {360,450,540,630,720} for 2 Rounds.",
      },
      signature: {
        name: "Vlissing Signature: Sacred Flow",
        type: 'Signature',
        description: "During combat, Max HP +8% and Additional DMG Boost +36%. Changes \"Sharp Wave\" to a Directional attack. On hit, enemies have a chance equal to your current Additional DMG Boost to gain 1 stack of [Tangled Flow]. When hitting an enemy that already has [Tangled Flow] with an Active skill, deals additional Slash DMG equal to 120% of Magic ATK. At the start of each Round, allies with [Clean Flow] gain +18% All ATK for 1 Round.",
      },
    },
    levelStats: {
      "Magic ATK (weapon)": [14.3, 91.0],
      "Magic ATK (%)": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "Reduces AP cost of Basic ATK", valuesByLevel: "16% / 20% / 24% / 28% / 32%" },
        { name: "When targeting an ally with a skill, increases their All DEF", valuesByLevel: "160 / 200 / 240 / 280 / 320" },
        { name: "When targeting an enemy with a skill, reduces their All DEF", valuesByLevel: "360 / 450 / 540 / 630 / 720" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 7,
      technic: 8,
      intelligence: 13,
      vitality: 10,
      agility: 10,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 115,
      magicAtk: 217,
      evade: 158,
      apRecovery: 110,
      startingAp: 127
    },
    'EX 1': {
      strength: 7,
      technic: 8,
      intelligence: 15,
      vitality: 10,
      agility: 10,
      maxHp: 768,
      meleeAtk: 102,
      rangedAtk: 115,
      magicAtk: 244,
      evade: 158,
      apRecovery: 110,
      startingAp: 127
    },
    'EX 2': {
      strength: 7,
      technic: 8,
      intelligence: 15,
      vitality: 11,
      agility: 10,
      maxHp: 832,
      meleeAtk: 102,
      rangedAtk: 115,
      magicAtk: 244,
      evade: 158,
      apRecovery: 110,
      startingAp: 127
    },
    'EX 3': {
      strength: 7,
      technic: 8,
      intelligence: 16,
      vitality: 11,
      agility: 10,
      maxHp: 832,
      meleeAtk: 102,
      rangedAtk: 115,
      magicAtk: 257,
      evade: 158,
      apRecovery: 110,
      startingAp: 127
    },
    'EX 4': {
      strength: 7,
      technic: 8,
      intelligence: 16,
      vitality: 11,
      agility: 11,
      maxHp: 832,
      meleeAtk: 102,
      rangedAtk: 115,
      magicAtk: 257,
      evade: 171,
      apRecovery: 112,
      startingAp: 129
    },
    'EX 5': {
      strength: 7,
      technic: 8,
      intelligence: 16,
      vitality: 12,
      agility: 11,
      maxHp: 896,
      meleeAtk: 102,
      rangedAtk: 115,
      magicAtk: 257,
      evade: 171,
      apRecovery: 112,
      startingAp: 129
    },
    'EX 6': {
      strength: 7,
      technic: 8,
      intelligence: 18,
      vitality: 12,
      agility: 11,
      maxHp: 896,
      meleeAtk: 102,
      rangedAtk: 115,
      magicAtk: 284,
      evade: 171,
      apRecovery: 112,
      startingAp: 129
    },
  },
  heroId: 47,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawVlissingData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const vlissingData = sanitizeCharacterData(rawVlissingData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Divine\s+Guardian\s+of\s+Tranel|Embracing\s+Wave|Dawn's\s+Spray|Counter\s+Wave|Tip\s+of\s+the\s+Wave|Clean\s+Flow|Tangled\s+Flow|Purify|The\s+Great\s+Flood|Sacred\s+Flow|artisan\s+maiden|flow\s+guardians|flowmancers|blessing\s+flow|eternal\s+youth|arrogant)\b/gi,
  percentages: /\b(\d{1,3}%)?\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Tranel\s+Republic|Reina|Flow\s+Guardians|Flowmancers|artisan\s+maiden|navigation|waterways|currents|fluid\s+manipulation|noble\s+status|grace\s+majesty|blessing\s+flow|radiant\s+beauty|marriage\s+proposals|noblemen|arrogant|Neo\s+Seoul|reverence\s+admiration|water\s+blades|cone\s+range|pure\s+flow|cleanses|directional\s+attack|additional\s+dmg\s+boost)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|All\s+ATK|All\s+DEF|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|CRIT\s+rate|CRIT\s+DMG|Crit\s+Rate|Accuracy|Evade|HP|Max\s+HP|AP\s+Recovery|Intelligence|INT|Strength|Technic|Vitality|Agility|Heat\s+DEF|Formation\s+Cost|Additional\s+DMG\s+Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const vlissingHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const vlissingSEO = {
  title: 'Vlissing - Horizon Walker Character Guide',
  description:
    'Complete guide for Vlissing, an EX rarity Flow Guardian character in Horizon Walker. Divine Guardian of Tranel Republic with water magic, healing, and flow manipulation abilities.',
  keywords: [
    'Vlissing',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'support',
    'healer',
    'flow guardian',
    'flowmancer',
    'water magic',
    'tranel republic',
    'artisan maiden',
    'divine guardian',
    'area healing',
    'pierce damage',
    'slash damage',
    'guide',
    'stats',
    'build',
  ],
};
