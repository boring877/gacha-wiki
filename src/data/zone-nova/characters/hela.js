// Hela Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const helaData = {
  // Basic Character Information
  name: 'Hela',
  chineseName: '海拉',
  title: 'Underworld Lord',
  chineseTitle: '冥界主宰',
  image: 'Hela', // Use format: charactername (e.g., 'Hela')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Rogue', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'A.S.A', // A.S.A (亚萨)

  // Base Stats (Level 80)
  stats: {
    hp: '7,308', // HP: 7308
    attack: '1,193', // Attack: 1193
    defense: '474', // Defense: 474
    energyRecovery: '0.25/s',
    critRate: '16.8%',
    critDamage: '71.6%',
  },

  // Skills
  skills: {
    normal: {
      name: 'Nether Touch',
      chineseName: '冥界之触',
      level: '14',
      cooldown: '2.0s',
      description:
        '[Termination] Mode: Deals 120% attack power Chaos damage to designated enemy unit\n[Death Silence] Mode: Moves in front of the enemy unit with the highest ATK and deals 120% attack power Chaos damage to them',
    },
    auto: {
      name: 'Death Silence Prelude',
      chineseName: '死神序曲',
      level: '14',
      cooldown: '5.0s',
      description:
        '[Termination] Mode: Deals 360% attack power Chaos damage to designated enemy unit\n[Death Silence] Mode: Moves 5 meters toward the enemy unit with the highest ATK and deals 360% attack power Chaos damage to them',
    },
    ultimate: {
      name: 'Domination Authority - Chaotic Death',
      chineseName: '支配权能-混沌之死',
      level: '14',
      cooldown: '1.0s',
      energyCost: '1',
      description:
        'Enters [Termination] mode at the start of battle. Ultimate can switch between [Termination] or [Death Silence] modes. Switching modes changes all skills.\n\n[Passive Mechanic]: When allies cast their ultimates, Hela gains layers of [Domination Authority: Chaotic Death] equal to the energy consumed (max 5 layers per cast). Upon reaching 10 layers, can consume all layers to cast [Enhanced Ultimate], then reaccumulates layers after switching modes.\n\n[Enhanced Ultimate]:\n[Termination] Mode: Deals 2160% attack power Chaos damage to a specified enemy unit\n[Death Silence] Mode: Moves in front of the enemy with the highest ATK and continuously attacks them, dealing a total of 2160% attack power Chaos damage',
    },
    passive: {
      name: 'Termination Echo',
      chineseName: '终焉回响',
      level: '14',
      description:
        "[Termination] Mode: All damage penetrates 24% of the target's resistance\n[Death Silence] Mode: All damage reduces the target's total damage output by 36%\n\n[Battle Start Bonus]: If there is at least 1 other Chaos attribute character in the team besides Hela, Hela's Crit Damage increases by 60%",
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description:
      'ATK increases by 10%. At the start of battle, for every 500 ATK, increases own Chaos damage by 5% (max 6 stacks, up to 30% Chaos damage bonus)',
    requirements: {
      faction: 'A.S.A',
      element: 'Chaos',
      condition: '2 [Chaos] attribute characters and [A.S.A] characters',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'After battle starts, ATK increases by 30%. When switching modes, damage taken is reduced by 50%',
    },
    {
      level: 2,
      effect:
        '[Termination] Mode: Crit Damage increases by 30%. [Death Silence] Mode: Damage taken is reduced by 20%',
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
    },
    {
      level: 4,
      effect: 'Chaos damage increases by 30%',
    },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2',
    },
    {
      level: 6,
      effect: 'All damage dealt by Hela penetrates 20% of all resistances',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Strange Gaze Full of Desire',
    chineseName: '充满欲望的奇怪凝视',
    image: 'Helacard', // Use format: characternamecard
    level: '80/80',
    rarity: '6-star (SSR)',
    class: 'Rogue',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Crit Rate increases by 34%',
      "When other allies cast their ultimates, the wearer's damage dealt increases by 24% for 5 seconds (max 3 stacks, up to 72% bonus damage)",
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Enhanced Ultimate', 'Mode Switch', 'Crit Damage', 'Crit Rate', 'Ranged', 'Melee'],

  // Unique mechanics for Hela
  uniqueMechanics: {
    modeSwitching: {
      description: 'Hela can switch between Termination and Death Silence modes using her Ultimate',
      modes: ['Termination', 'Death Silence'],
    },
    enhancedUltimate: {
      description:
        'When reaching 10 layers from ally ultimates, can consume all layers to cast Enhanced Ultimate',
    },
    teamSynergy: {
      description: 'Chaos attribute team bonus increases Crit Damage',
    },
  },
};

// SEO data for Hela
export const helaSEO = {
  title: `${helaData.name} (${helaData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${helaData.name}, a ${helaData.rarity} ${helaData.element} ${helaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const hela = {
  id: 'hela',
  name: 'Hela',
  chineseName: '海拉',
  rarity: 'SSR',
  element: 'Chaos',
  role: 'DPS',
  class: 'Rogue',
  faction: 'A.S.A',
  chineseFaction: '亚萨',
  maxLevel: 80,

  baseStats: {
    hp: 7308,
    attack: 1193,
    defense: 474,
    energyRecovery: 0.25,
    critRate: 16.8,
    critDamage: 71.6,
  },

  images: {
    portrait: '/images/games/zone-nova/characters/Hela.jpg',
    card: '/images/games/zone-nova/memories/Helacard.jpg',
  },

  tags: [
    'DPS',
    'Chaos',
    'A.S.A',
    'Enhanced Ultimate',
    'Mode Switch',
    'Crit Damage',
    'Crit Rate',
    'Ranged',
    'Melee',
  ],
};

// Export default for easy importing
export default helaData;
