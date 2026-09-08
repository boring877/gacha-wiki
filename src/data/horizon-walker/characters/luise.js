// Luise Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawLuiseData = {
  // Basic Character Information
  name: 'Luise',
  image: 'Luise', // Character image filename without extension
  rarity: 'SS', // EX, SS, S, A, B
  cost: 6, // Deployment cost
  tags: [
    'Mage',
    'Fire Mage',
    'Magic User',
    'Area Damage',
    'Heat Damage',
    'Unblockable Attack',
    'Debuffer',
    'DoT',
    'Royal Family',
    'Princess',
    'Guardian',
    'Critical Damage',
    'Flame Magic',
    'Area Control',
    'Burst Damage',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '10',
    intelligence: '13',
    vitality: '15',
    agility: '11',

    // Key Stats
    meleeAtk: '102',
    rangedAtk: '140',
    magicAtk: '226',
    maxHp: '960',
    spd: '61',
    startingAp: '120',
    apRecovery: '107',
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
    "Crown Princess Maximilia's younger sister who learned flame magic and became the Empire's Guardian. Distinguished herself among fire mages with exceptional achievements and led the people during the Rift Crisis.",

  // Character Profile
  profile: {
    age: '24',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Kaisersberg',
    height: '172cm',
    birthday: 'March 20th',
    bwhRatio: '79(E)-48-90',
  },

  // Character Story
  story:
    "Unlike her older sister, Crown Princess Maximilia, who learned about warfare and governance to become the successor of the Empire, Luise followed the customs of the royal family and learned flame magic. When Maximilia became the Crown Princess, Luise naturally assumed the position of the Empire's Guardian. Among many fire mages, she distinguished herself with exceptional achievements. After the Rift Crisis, she led the people alongside her sister, and took on the responsibility of protecting the citizens and sending them to her sister while staying behind in the dying Noctis Nebula in her sister's stead.",

  // Unique Traits
  uniqueTraits: {
    prodigyMage: {
      name: 'Prodigy Mage',
      description:
        "Activates the Level 1 passive skill [Prodigy Mage]. [Prodigy Mage]: Possesses a genius understanding of magic, allowing for more efficient spell usage. All skills' AP cost decreases by 3%. Intelligence 3",
    },
    memorize: {
      name: 'Memorize',
      description:
        "Activates the Level 1 passive skill [Memorize]. [Memorize]: Prepares the incantation in advance. Reduces the AP cost required for the first use of the 'Blaze of Ascension' skill during battle by 100.",
    },
    marlon: {
      name: 'Marlon',
      description: 'Strength 1, Technic 1, Intelligence 1',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Weapon Information
  weapon: {
    name: "Sol",
    flavor: "Infused with the raw power of the sun's most intense flames, the sacred staff Sol has been passed down through generations of the imperial family. Its tip houses a Sunstone, granting its wielder the ability to command fire at will. With every swing, Sol's flames consume its enemies in a relentless blaze - one said to burn until the day the sun itself fades.",
    type: "Staff",
    rarity: 'EX',
    image: "Weapon_FullIMG_Staff_ForLuise",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Magic ATK (weapon)": "91",
      "Heat Boost (%)": "+35%",
    },
    uniqueSkills: {
      unique: {
        name: "Inferno",
        type: 'Unique',
        description: "Increases Critical Rate by {30,32.5,35,37.5,40}% during combat. For every 1 point below 100 base Movement Speed, increases Critical Damage by {1,2.25,3.5,4.75,6}%. At the start of any random turn, gains [Sunlit Ember]. -[Sunlit Ember]: Increases Heat Boost by {24,26,28,30,32}%, stacking up to 5 times. Expires at the end of the user's turn if any skill other than Standby is used.",
      },
      signature: {
        name: "Luise Signature: Flare",
        type: 'Signature',
        description: "During battle, AP cost of 'Flame Arrow', 'Fireball', and 'Blaze of Ascension' is reduced by 15, 30, and 75, respectively. When an attack succeeds using a skill other than 'Blaze of Ascension', the Cooldown of 'Blaze of Ascension' is reduced by 1 round. Additional damage from 'Fireflake Explosion' can critically strike, and after using a skill other than Standby during your turn, [Fireflake Explosion] activates, doubling its damage.",
      },
    },
    levelStats: {
      "Magic ATK (weapon)": [14.3, 91.0],
      "Heat Boost (%)": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "Increases Critical Rate", valuesByLevel: "30% / 32.5% / 35% / 37.5% / 40%" },
        { name: "For every 1 point below 100 base Movement Speed, increases Critical Damage", valuesByLevel: "1% / 2.25% / 3.5% / 4.75% / 6%" },
        { name: "-[Sunlit Ember]: Increases Heat Boost", valuesByLevel: "24% / 26% / 28% / 30% / 32%" },
      ],
    },
  },

  // Skills and Passive
  skills: {
    flameArrow: {
      gameKey: 'FireBolt',
      icon: 'UI_SkillIcon_FireBolt',
      name: 'Flame Arrow',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Magic ATK',
        value: '114%',
      },
      description:
        'Shoots an arrow of fire to burn the enemy. Deals Heat DMG equal to 114% of magic ATK.',
    },
    ember: {
      gameKey: 'FireFlakes',
      icon: 'UI_SkillIcon_FireFlakes',
      name: 'Ember',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'On a successful attack, applies the [Ember] effect to the enemy for 3 rounds. [Ember]: Reduces Heat DEF by 380.',
    },
    fireball: {
      gameKey: 'FireBall',
      icon: 'UI_SkillIcon_FireBall',
      name: 'Fireball',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 1,
      damage: {
        type: 'Magic ATK',
        value: '143%',
      },
      description:
        'Launches a blazing orb of fire and causes it to explode, burning enemies. Deals Unblockable Heat DMG equal to 143% of magic ATK to all enemies within a 2m circular radius. During this attack, ACC temporarily increases by 300%.',
    },
    fireflakeExplosion: {
      gameKey: 'FireFlakesExplosion',
      icon: 'UI_SkillIcon_FireFlakesExplosion',
      name: 'Fireflake Explosion',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Ignites dying embers to burn enemies. At the start of the round, detonates all [Ember] effects on the battlefield, dealing additional Heat DMG equal to 38% of magic ATK.',
    },
    blazeOfAscension: {
      gameKey: 'SoaringFire',
      icon: 'UI_SkillIcon_SoaringFire',
      name: 'Blaze of Ascension',
      level: '10/10',
      type: 'Skill',
      apCost: 150,
      cooldown: 3,
      damage: {
        type: 'Magic ATK',
        value: '380%',
      },
      description:
        'Commands surging flames to burn enemies in front. Deals Unblockable Heat DMG equal to 380% of magic ATK to all enemies within a 3m circular radius. During the attack, ACC temporarily increases by 300%, but weakness attacks are not possible.',
    },
  },
  rarityStages: {
    'EX': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 11,
      agility: 10,
      maxHp: 704,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 226,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 1': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 12,
      agility: 10,
      maxHp: 768,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 226,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 2': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 13,
      agility: 10,
      maxHp: 832,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 226,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 3': {
      strength: 6,
      technic: 10,
      intelligence: 13,
      vitality: 14,
      agility: 10,
      maxHp: 896,
      meleeAtk: 89,
      rangedAtk: 140,
      magicAtk: 226,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 4': {
      strength: 7,
      technic: 10,
      intelligence: 13,
      vitality: 14,
      agility: 10,
      maxHp: 896,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 226,
      evade: 128,
      apRecovery: 105,
      startingAp: 118
    },
    'EX 5': {
      strength: 7,
      technic: 10,
      intelligence: 13,
      vitality: 14,
      agility: 11,
      maxHp: 896,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 226,
      evade: 140,
      apRecovery: 107,
      startingAp: 120
    },
    'EX 6': {
      strength: 7,
      technic: 10,
      intelligence: 13,
      vitality: 15,
      agility: 11,
      maxHp: 960,
      meleeAtk: 102,
      rangedAtk: 140,
      magicAtk: 226,
      evade: 140,
      apRecovery: 107,
      startingAp: 120
    },
  },
  heroId: 19,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawLuiseData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const luiseData = sanitizeCharacterData(rawLuiseData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Prodigy\s+Mage|Memorize|Ember|Sunlit\s+Ember|Inferno|Flare|Fireflake\s+Explosion|Blaze\s+of\s+Ascension|unblockable|blazing\s+orb|surging\s+flames|dying\s+embers|incantation|genius\s+understanding|efficient\s+spell\s+usage)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|grants?|applies?|detonates?|ignites?|launches?|commands?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Crown\s+Princess\s+Maximilia|Empire's\s+Guardian|royal\s+family|flame\s+magic|fire\s+mages|Rift\s+Crisis|Noctis\s+Nebula|warfare\s+and\s+governance|customs\s+of\s+the\s+royal\s+family|exceptional\s+achievements|2m\s+circular\s+radius|3m\s+circular\s+radius|weakness\s+attacks|base\s+Movement\s+Speed|EX\s+Staff\s+Sol|Kaisersberg)\b/gi,
  attributes:
    /\b(?:AP|Magic\s+ATK|Heat|Physical|Slash|Pierce|Crush|Cold|Electric|Immaterial|Poison|ACC|SPD|CRIT\s+rate|Critical\s+Rate|CRIT\s+DMG|Critical\s+Damage|HP|Heat\s+DEF|Heat\s+Boost|Weapon\s+Magic\s+ATK|Movement\s+Speed|Intelligence)\b/gi,
};

// Export sanitized highlighting patterns
export const luiseHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const luiseSEO = {
  title: 'Luise - Horizon Walker Character Guide',
  description:
    'Complete guide for Luise, an SS rarity Human Fire Mage character in Horizon Walker. Royal princess specializing in flame magic, area damage, and heat-based debuffs.',
  keywords: [
    'Luise',
    'Horizon Walker',
    'SS rarity',
    'fire mage',
    'human',
    'magic user',
    'area damage',
    'heat damage',
    'royal family',
    'princess',
    'flame magic',
    'EX staff',
    'Sol',
    'signature weapon',
    'guide',
    'stats',
    'build',
  ],
};
