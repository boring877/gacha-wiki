// Hiyori Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const hiyoriData = {
  gameId: 4030,
  // Basic Character Information
  name: 'Hiyori',
  chineseName: '',
  image: 'Hiyori.png',
  rarity: 'SSR',
  element: 'Chaos',
  class: 'Mage',
  role: 'DPS',
  faction: 'Monochrome Nation',

  // Base Stats (Level 80)
  stats: {
    hp: '5,040',
    attack: '1,683',
    defense: '474',
    energyRecovery: '0.25/s',
    critRate: '57%',
    critDamage: '50%',
  },

  // Skills
  skills: {
    normal: {
      name: 'Attack',
      level: '14',
      cooldown: '2.0s',
      description:
        'Deals Chaos DMG equal to 120% of ATK to an enemy.',
    },
    auto: {
      name: 'Corridor Sweep',
      level: '14',
      cooldown: '2.0s',
      description:
        'Locks onto the target with the lowest HP percentage on the field and launches a straight-line piercing attack, dealing Chaos DMG equal to 218.6% of ATK to all enemy targets in its path.',
    },
    ultimate: {
      name: 'Operation: Dustless',
      level: '14',
      cooldown: '5.0s',
      energyCost: '5',
      description:
        'Instantly dashes in front of the target and fires a vacuum compression shot at close range to knock the enemy back, while using the recoil to quickly perform a backflip. The vacuum compression shot explodes immediately upon landing, destroying all of the target\'s Shields and dealing Chaos DMG equal to 1060% of ATK. During the Ultimate, own CRIT Rate is additionally increased by 114%.',
    },
    passive: {
      name: 'Explosive Cleanup',
      level: '14',
      description:
        'All DMG dealt by Hiyori to enemy targets with a Shield is additionally increased by 26.5%. [Shield Burst]: When Hiyori\'s attack successfully breaks an enemy\'s Shield, it immediately triggers a powerful area explosion around the target, dealing Chaos DMG equal to 679.8% of ATK to enemies within the area.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combo',
    level: '1',
    description:
      'ATK increases by 10%. At the start of battle, for every 500 ATK, own Ultimate DMG increases by 5%, up to 6 times.',
    requirements: {
      condition: '2 [Monochrome Realm] characters or 2 [Chaos] characters',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When using Ultimate, ignore 74% of the target\'s DEF' },
    { level: 2, effect: 'DMG dealt to enemies with current HP below 15% is increased by 70%' },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2',
    },
    { level: 4, effect: 'ATK +50%' },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2',
    },
    {
      level: 6,
      effect:
        '[Shield Burst] Chaos DMG multiplier is increased by 50%. Additionally, all attacks ignore an extra 40% of the target\'s Chaos Resistance.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'The maid\'s bath',
    image: 'Hiyoricard.png',
    level: '80/80',
  class: 'Mage',
    stage: '5',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'The wearer\'s CRIT Rate increases by 20%.',
      'When the wearer attacks an enemy target with a Shield, they gain the [Descale] state for 8s.',
      'While in the [Descale] state, CRIT DMG increases by 20%, and when using an Ultimate on an enemy target without a Shield, Ultimate DMG increases by an additional 60%.',
    ],
  },

  tags: ['Ranged', 'Shield Destroy', 'Chaos DMG', 'Knockback', 'Limited'],
};

// SEO data for Hiyori
export const hiyoriSEO = {
  title: `${hiyoriData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${hiyoriData.name}, an SSR ${hiyoriData.element} ${hiyoriData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const hiyori = {
  id: 'hiyori',
  name: 'Hiyori',
  rarity: 'SSR',
  element: 'Chaos',
  role: 'DPS',
  faction: 'Monochrome Nation',
  maxLevel: 80,

  baseStats: {
    hp: 5040,
    attack: 1683,
    defense: 474,
    energyRecovery: 0.25,
    critRate: 57,
    critDamage: 50,
  },

  tags: ['DPS', 'Chaos', 'Monochrome Nation', 'Ranged', 'Shield Destroy', 'Limited'],
};

// Export default for easy importing
export default hiyoriData;
