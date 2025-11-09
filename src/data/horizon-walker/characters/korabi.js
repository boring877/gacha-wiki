// Korabi Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKorabiData = {
  // Basic Character Information
  name: 'Korabi',
  image: 'Korabi', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Mage',
    'Support',
    'Blood Magic',
    'Magic User',
    'Healing',
    'Debuffer',
    'Team Buffer',
    'Area Damage',
    'Slash Damage',
    'Support Counter',
    'Kesak',
    'Human',
    'Vanguard',
    'Rift Nations',
    'High Intelligence',
    'Blood Manipulation',
    'Curse Magic',
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
    meleeAtk: '89',
    rangedAtk: '102',
    magicAtk: '192',
    maxHp: '912',
    spd: '89',
    startingAp: '128',
    apRecovery: '112',
    accuracy: '102',
    evade: '140',
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
    'A timid Kesak mage who gained blood manipulation powers from an ancient relic mask, serving as a Vanguard under the Human God with hopes of changing her people.',

  // Weapon Information
  weapon: {
    name: 'Red Pudding',
    type: 'EX Staff',
    rarity: 'EX',
    image: 'Korabi_WP.jpg',
    stats: {
      weaponMagicAtk: '84.0',
      slashBoost: '42.0',
    },
    uniqueSkills: {
      painborneBoom: {
        name: 'Painborne Bloom',
        type: 'Unique',
        description:
          'Magic ATK increases by 40% during battle. Enemies hit by your attacks are afflicted with [Pulse of the Rift] for 2 rounds. [Pulse of the Rift]: SPD increases by 32% and Physical DEF decreases by 480.',
      },
      bloomingBloodlust: {
        name: 'Blooming Bloodlust',
        type: 'Signature',
        description:
          "During combat, Additional Response triggered by the skill Timid, Yet Explosive! always activates at 100% chance. The [Burning Desire] effect granted by the skill Blood Pact increases the target ally's Slash Boost and Crush Boost by 50% of your Base Slash Boost, and increases their Melee ATK and Ranged ATK by 15% of your Base Magic ATK. Slash Boost and Crush Boost gained this way cannot exceed 30%. When using the skill Whirlwind of Bloodlust, removes Weak Points from all allies for 2 rounds.",
        note: 'This signature skill only activates when Korabi equips this weapon.',
      },
    },
  },

  // Character Profile
  profile: {
    age: '29',
    racial: 'Human (Kesak)',
    homeland: 'Bel-Lamori',
    height: '179cm',
    birthday: 'December 29',
    bwhRatio: '93(H)-55-105',
  },

  // Character Story
  story:
    'From childhood, Korabi was timid—an unforgivable flaw among the brutish Kesak. Because of this, she was ostracized by her kin, spending most of her time on the fringes of ruined sites. One day, a fatal fall nearly killed her. She was saved by an ancient relic mask of her ancestors, which granted her the ability to manipulate blood. This power drastically boosted her intelligence, but also widened the rift between her and the rest of the Kesak. Eventually, she left Bel-Lamori alone, catching the eye of the Rift Nations. She became a Vanguard under the Human God, carrying a faint hope that perhaps she might one day change her foolish kin.',

  // Unique Traits
  uniqueTraits: {
    timidYetExplosive: {
      name: 'Timid, Yet Explosive!',
      description:
        'Activates the Level 1 passive skill [Timid, Yet Explosive!]. [Timid, Yet Explosive!]: All DEF increases by 60 during battle. At the start of each Wave, the cooldown of Wave of Blood is reset. When an ally performs a Counter, there is a 30% chance to perform a Support Counter. During a Support Counter, Magic ATK increases by 30% and Crit Rate increases by 100% until the end of the turn. After a Support Counter, there is a 30% chance to trigger an Additional Response. During an Additional Response, Magic ATK increases by 80%, Basic ATK DMG increases by 20%, and Crit DMG increases by 160% until the end of the turn.',
    },
    decidedlyAboveAverage: {
      name: 'Decidedly Above Average',
      description: 'Formation Cost -1, Intelligence +1, Vitality -4',
    },
    kesak: {
      name: 'Kesak',
      description: 'Intelligence -4, Vitality +7',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
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
        'Targets an enemy and unleashes blades of water in a 25°, 7m cone. Deals Slash DMG equal to 114% of Magic ATK, restores HP to allies along the path by 38% of Magic ATK, and grants 1 stack of [Tip of the Wave] for 2 rounds. [Tip of the Wave]: Crit Rate increases by 4%. Stacks up to 2 times.',
    },
    counterwave: {
      name: 'Counterwave',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'At the start of each round, 57% chance to gain [Counterwave] for 1 round. [Counterwave]: Grants immunity to action-forcing effects [Taunt], [Fear], [Sleep], [Madness], [Stun], and the action-restricting effect [Focus Disruption], while Fire DEF increases by 190.',
    },
    bloodPact: {
      name: 'Blood Pact',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 2,
      description:
        "Strengthens the pulse of blood, breathing in new vitality. Grants the targeted ally [Burning Desire] for 2R. [Burning Desire]: Aggro Adjustment decreases by 12, SPD increases by 40%, Max HP increases by 12%, and Crit DMG increases by 20% of the caster's Base Crit DMG. Crit DMG gained from this effect cannot exceed 40%. When attacking 2 or more enemies, Crit Rate temporarily increases by 72%.",
    },
    crimsonCurse: {
      name: 'Crimson Curse',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Breathes a crimson curse that spreads with every wound. Healing Output increases by 60%. Enemies hit by your attacks are afflicted with [Blood Plague], making them more vulnerable to damage. Vulnerability further increases if your Vitality is above 13. [Blood Plague]: Damage taken increases by 7%. For every 1 Vitality above 13, Damage taken further increases by 0.5%.',
    },
    waveOfBlood: {
      name: 'Wave of Blood',
      level: '10/10',
      type: 'Skill',
      apCost: 75,
      cooldown: 2,
      damage: {
        type: 'Magic ATK',
        value: '228%',
      },
      description:
        'When using the skill Blood Pact, this skill becomes active for 2 rounds. Unleashes a surging wave of blood that overturns the flow. Deals Slash DMG equal to 228% of Magic ATK to enemies within a 4m radius around the targeted location. Enemies hit are afflicted with [Blood Frenzy] for 2 rounds. This skill cannot trigger a Weak Point attack, but temporarily increases Accuracy by 300%. [Blood Frenzy]: When applied, gain 40 AP. While holding this effect, AP Recovery increases by 44%, but Melee and Ranged ATK decrease by 22%, and Magic ATK decreases by 28%.',
    },
    whirlwindOfBloodlust: {
      name: 'Whirlwind of Bloodlust',
      level: '10/10',
      type: 'Skill',
      apCost: 60,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'When an ally is hit or attacks an enemy, gain 1 stack of [Bloodlust]. This skill can be used while holding 5 or more stacks. Unleashes a Whirlwind of Bloodlust to strike enemies. Deals Slash DMG equal to 114% of Magic ATK to enemies within a 3m radius around the targeted location and slightly pulls them toward the center. This skill cannot trigger a Weak Point attack, but temporarily increases Accuracy by 300%. [Bloodlust]: Base effect of using the skill Whirlwind of Bloodlust. Stacks up to 5 times.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawKorabiData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const korabiData = sanitizeCharacterData(rawKorabiData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})\]/g,
  buffsDebuffs:
    /\b(?:Timid,\s+Yet\s+Explosive!|Decidedly\s+Above\s+Average|Kesak|Interested|Tip\s+of\s+the\s+Wave|Counterwave|Burning\s+Desire|Blood\s+Plague|Blood\s+Frenzy|Bloodlust|Painborne\s+Bloom|Blooming\s+Bloodlust|Pulse\s+of\s+the\s+Rift|Support\s+Counter|Additional\s+Response|Weak\s+Point|Aggro\s+Adjustment|blood\s+manipulation|curse\s+magic|healing\s+output|vulnerability)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges: /\b(?:reduces?|increases?|decreases?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:afflicted|immunity|stacks?|temporarily|triggered|activated|grants?|removes?|Kesak|Bel-Lamori|Rift\s+Nations|Vanguard|Human\s+God|ancient\s+relic\s+mask|blood\s+manipulation|timid|ostracized|ruined\s+sites|fatal\s+fall|ancestors|intelligence|brutish|fringes|change\s+her\s+kin)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Melee\s+ATK|Ranged\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|SPD|All\s+DEF|DEF|HP|Max\s+HP|Crit\s+Rate|Crit\s+DMG|Accuracy|Fire\s+DEF|Physical\s+DEF|Healing\s+Output|Basic\s+ATK\s+DMG|Formation\s+Cost|Intelligence|Vitality|Slash\s+Boost|Crush\s+Boost)\b/gi,
};

// Export sanitized highlighting patterns
export const korabiHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const korabiSEO = {
  title: 'Korabi - Horizon Walker Character Guide',
  description:
    'Complete guide for Korabi, an EX rarity Mage character in Horizon Walker. Timid Kesak blood mage with powerful support abilities, healing, and area damage skills.',
  keywords: [
    'Korabi',
    'Horizon Walker',
    'EX rarity',
    'mage',
    'kesak',
    'human',
    'blood magic',
    'support',
    'healing',
    'debuffer',
    'team buffer',
    'slash damage',
    'vanguard',
    'rift nations',
    'guide',
    'stats',
    'build',
  ],
};
