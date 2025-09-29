// Pantheri Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawPantheriData = {
  // Basic Character Information
  name: 'Pantheri',
  image: 'Pantheri', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Swashbuckler',
    'Melee Damage',
    'Slash Damage',
    'Pierce Damage',
    'Crush Damage',
    'High Evasion',
    'Counterattack',
    'Taunt',
    'Counter Stance',
    'Human',
    'Freebooter',
    'Outlaw',
    'Skirmisher',
    'Crowd Control',
    'Aggro Control',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '12',
    technic: '7',
    intelligence: '6',
    vitality: '9',
    agility: '21',

    // Key Stats
    meleeAtk: '169',
    rangedAtk: '104',
    magicAtk: '91',
    maxHp: '587',
    spd: '117',
    startingAp: '133',
    apRecovery: '132',
    accuracy: '102',
    evade: '268',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '3',
    pierceBoost: '3',
    crushBoost: '3',
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
    'A righteous outlaw from Laguna Island who emerged like a comet to rescue the common people. Now fights as a Vanguard to make the world a better place, using incredible swordsmanship and evasion tactics.',

  // Character Profile
  profile: {
    age: '26',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Laguna Island',
    height: '168cm',
    birthday: 'September 25th',
    bwhRatio: '86(G)-50-94',
  },

  // Character Story
  story:
    "Laguna Island, far removed from the continent, had long been a place of exploitation. In such a place, Pantheri emerged like a comet, rescuing the common people—a righteous outlaw. Calling herself a freebooter or hero, Pantheri demonstrated incredible swordsmanship alone, representing the people in trial by combat or assassinating corrupt nobles, among other daring deeds. In truth, she was Elena, the daughter of the viceroy of Laguna, and when that fact became known, she had no choice but to flee to the Imperial mainland. After the Rift Crisis, Pantheri arrived on Earth and discovered that there were also suffering people here, even in the outskirts. Moreover, the exploitation on Earth was far more subtle and systematic, requiring her to be even more cautious. It was Yeon Chae-young of the Bureau of Rift Management who sought her out. Yeon Chae-young showed Pantheri records from the past and explained that the hardships these people endured ultimately stemmed from the Rifts. She convinced Pantheri that the real enemy was the monsters of the Rift. Pantheri accepted Yeon Chae-young's words and decided to fight as a Vanguard to make this world a better place.",

  // Unique Traits
  uniqueTraits: {
    friendOfThePeople: {
      name: 'Friend of the People',
      description:
        'Activates the Level 1 passive skill [Friend of the People]. [Friend of the People]: Driven by the goal of protecting the weak, gains strength when fighting enemies who go against justice. Slash DEF, Crush DEF, and Pierce DEF increase by 100 during battle.',
    },
    overwhelming: {
      name: 'Overwhelming',
      description:
        "Activates the Level 3 passive skill [Overwhelm]. [Overwhelm]: If the enemy is defeated by 'That One Strike,' applies the [Overwhelming] effect to all enemies for 2 rounds. [Overwhelming]: Reduces melee, magic, and Ranged ATK by 30%.",
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human.',
    },
  },

  // Weapon Information
  weapon: {
    name: 'EX One-handed sword - Tideblossom',
    type: 'EX One-handed Sword',
    rarity: 'EX',
    image: 'Pantheri_WP.jpg',
    stats: {
      weaponMeleeAtk: '77.0',
      evadeBonus: '+98.0%',
    },
    uniqueSkills: {
      flowingArc: {
        name: 'Flowing Arc',
        type: 'Unique',
        description:
          "Increases movement speed during combat by 40%, and Aggro Adjustment by 18. When an ally successfully dodges, the wielder gains 1 stack of [Sword Wave], up to 6 stacks. At the start of each round, grants either [Deep Trench] or [High Crest] to all allies except the wielder for 1 round. All [Sword Wave] stacks are consumed. Effects granted by 'Unique: Flowing Arc' do not stack with effects of the same name. [Sword Wave]: Affects the strength of [Deep Trench] and [High Crest] based on the number of stacks consumed. [Deep Trench]: Increases CRIT Chance by 2% + 2% per [Sword Wave] stack consumed. Only applies if the unit's CRIT Chance is below 75%. [High Crest]: Increases CRIT DMG by 4% + 3% per [Sword Wave] stack consumed. Only applies if the unit's CRIT Chance is 75% or higher.",
      },
      tidalFlowerDance: {
        name: 'Pantheri Signature: Tidal Flower Dance',
        type: 'Signature',
        description:
          "Gain 1 stack of [Sword Wave] on each attack. When using a combat skill, restore HP equal to 8% of your Evasion stat for 1 round upon dodging. When using 'That One Strike', temporarily sets CRIT Chance to 100% and increases CRIT DMG by 30% of Evasion. If it hits a weak point, the cooldown is reduced by 1 round.",
      },
    },
  },

  // Skills and Passive
  skills: {
    sabreStrike: {
      name: 'Sabre Strike',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        'Delivers a powerful and elegant slash to a nearby enemy. Deals Slash DMG equal to 114% of melee ATK.',
    },
    determination: {
      name: 'Determination',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When attacked, instead of the basic counterattack (once per round), use the "Sensory Concentration" skill during the counterattack phase. After activation, follow up with a support counterattack. Sensory Concentration: Steadies the mind and focuses the senses. Increases Evasion by 380% for 1R.',
    },
    outlawsMockery: {
      name: "Outlaw's Mockery",
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 3,
      description:
        'Performs an elegant sword dance to draw the attention of enemies and prepare for their attacks. Decreases ACC of enemies within a 5m radius by 57% for 2R and temporarily forces them to focus on the user. The user gains the [Counter Stance] effect for 2R, and Aggro Adjustment increases. [Counter Stance]: When attacked by enemies within basic attack range, counterattacks regardless of the normal counter limit.',
    },
    masterOfSkirmish: {
      name: 'Master of Skirmish',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "The SwashBuckler's dazzling attacks create a chaotic state where friend and foe are indistinguishable. When attacking during own turn, there is a 100% chance that the attacked target will mistake their counterattack target. In this case, the enemy will attack their own ally. Additionally, own evasion increases by 190%, and attacks from behind will not be counted as weakness attacks.",
    },
    thatOneStrike: {
      name: 'That One Strike',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 3,
      damage: {
        type: 'Melee ATK',
        value: '475%',
      },
      description:
        'Delivers an unavoidable strike based on the mastery of the sword. Deals Pierce DMG equal to 475% of melee ATK to the enemy.',
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawPantheriData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const pantheriData = sanitizeCharacterData(rawPantheriData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Friend\s+of\s+the\s+People|Overwhelm|Overwhelming|Sensory\s+Concentration|Counter\s+Stance|Sword\s+Wave|Deep\s+Trench|High\s+Crest|Flowing\s+Arc|Tidal\s+Flower\s+Dance|counterattack|support\s+counterattack|sword\s+dance|unavoidable\s+strike|chaotic\s+state|elegant\s+slash)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?|restores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Laguna\s+Island|freebooter|outlaw|righteous\s+outlaw|trial\s+by\s+combat|corrupt\s+nobles|viceroy|Elena|Bureau\s+of\s+Rift\s+Management|Vanguard|SwashBuckler|swordsmanship|5m\s+radius|basic\s+attack\s+range|weakness\s+attacks|Tideblossom|movement\s+speed|Aggro\s+Adjustment|Noctis\s+Nebula)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Slash|Pierce|Crush|Physical|Heat|Cold|Electric|Immaterial|Poison|ACC|SPD|CRIT\s+rate|CRIT\s+Chance|CRIT\s+DMG|HP|Evasion|Aggro|DEF|Weapon\s+Melee\s+ATK|movement\s+speed|cooldown)\b/gi,
};

// Export sanitized highlighting patterns
export const pantheriHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const pantheriSEO = {
  title: 'Pantheri - Horizon Walker Character Guide',
  description:
    'Complete guide for Pantheri, an SS rarity Human Swashbuckler character in Horizon Walker. Righteous outlaw specializing in high evasion, counterattacks, and crowd control.',
  keywords: [
    'Pantheri',
    'Horizon Walker',
    'SS rarity',
    'swashbuckler',
    'human',
    'melee damage',
    'slash damage',
    'pierce damage',
    'high evasion',
    'counterattack',
    'outlaw',
    'freebooter',
    'crowd control',
    'EX sword',
    'Tideblossom',
    'signature weapon',
    'guide',
    'stats',
    'build',
  ],
};
