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
    slashDef: '10',
    pierceDef: '10',
    crushDef: '10',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '0',
    poisonDef: '0',
    blockRate: '10',
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
      description: 'Special trait with no listed characteristics.',
    },
  },

  // Skills and Passive
  skills: {
    sharpWave: {
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
        'Targets an enemy and unleashes blades of water in a 25° cone, 7m range. Deals Slash DMG equal to 114% of Magic ATK, heals allies along the path for 38% of Magic ATK, and grants them 1 stack of [Tip of the Wave] for 2 Rounds. [Tip of the Wave]: Increases Crit Rate by 4%. Stacks up to 2 times.',
    },
    counterWave: {
      name: 'Counter Wave',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of the round, there is a 57% chance to gain the [Counter Wave] effect for 1R. [Counter Wave]: While holding this effect, immune to [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Concentration Disruption], and increases Heat DEF by 190.',
    },
    waveOfLifeCycle: {
      name: 'Wave of Life Cycle',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 1,
      description:
        'Targets an ally and cleanses them with a pure flow of water. Heals allies within a 4m radius around the target for 38% of Magic ATK, and grants [Purify] and 1 stack of [Clean Flow]. [Purify]: Removes [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Focus Disruption] states.',
    },
    ebbAndFlow: {
      name: 'Ebb and Flow',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "Grants 1 stack of [Clean Flow] to allied targets and 1 stack of [Tangled Flow] to enemy targets. Both effects stack up to 5 times. Each effect applies the following: [Clean Flow]: At the end of a turn in which the bearer is attacked, Restores HP equal to 60% of Magic ATK + 12% of the target's Max HP, then removes 1 stack of [Clean Flow]. Healing increases up to 1.15X based on missing HP. This maximum multiplier increases by 0.12 for every INT exceeding 16. [Tangled Flow]: At the end of a turn in which the bearer is attacked by a source other than yourself, deals Additional Pierce DMG equal to 400% of Magic ATK, then removes 1 stack of [Tangled Flow]. Damage increases up to 1.15X based on missing HP. This maximum multiplier increases by 0.12 for every INT exceeding 16.",
    },
  },

  // Weapon
  weapon: {
    name: 'EX Staff - Atra-hasis',
    type: 'Staff',
    rarity: 'EX',
    image: 'Vlissing_WP.jpg',
    stats: {
      weaponMagicAtk: '91.0',
      magicAtkBonus: '+35.0%',
    },
    uniqueSkills: {
      theGreatFlood: {
        name: 'The Great Flood',
        type: 'Unique',
        description:
          'Reduces AP cost of Basic ATK by 32%. When targeting an ally with a skill, increases their All DEF by 320 for 1 Round. When targeting an enemy with a skill, reduces their All DEF by 720 for 2 Rounds.',
      },
      sacredFlow: {
        name: 'Vlissing Signature: Sacred Flow',
        type: 'Signature',
        description:
          'During combat, Max HP +8% and Additional DMG Boost +36%. Changes "Sharp Wave" to a Directional attack. On hit, enemies have a chance equal to your current Additional DMG Boost to gain 1 stack of [Tangled Flow]. When hitting an enemy that already has [Tangled Flow] with an Active skill, deals additional Slash DMG equal to 120% of Magic ATK. At the start of each Round, allies with [Clean Flow] gain +18% All ATK for 1 Round.',
      },
    },
  },
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
