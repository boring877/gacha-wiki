// Jeanne d'Arc Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const jeanneDArcData = {
  // Basic Character Information
  name: "Jeanne d'Arc",
  chineseName: '贞德',
  image: 'JoanofArc', // Use format: charactername (e.g., 'JoanofArc')
  rarity: 'SSR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Avalon', // Avalon (亚瓦隆)

  // Base Stats (Level 80)
  stats: {
    hp: '9,180', // HP: 9180
    attack: '1,004', // Attack: 1004
    defense: '729', // Defense: 729
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%',
  },

  // Skills
  skills: {
    normal: {
      name: 'Sacred Banner Thrust',
      chineseName: '圣旗突刺',
      level: '10+4',
      cooldown: '2.0s',
      description: 'Deals 120% attack power wind damage to designated enemy unit',
    },
    auto: {
      name: 'Holy Light Banner',
      chineseName: '圣光旗帜',
      level: '10+4',
      cooldown: '8.0s',
      description:
        'After short cast, recovers the friendly unit with lowest current HP ratio, self attack power 80.5%+445 HP, continuously heals 3 times',
    },
    ultimate: {
      name: 'Sacred Heavenly ',
      chineseName: '圣天神后',
      level: '10+4',
      cooldown: '1.0s',
      energyCost: '8',
      description:
        "Recovers all friendly colored units' self attack power 90.8%+668 HP, and adds 3 layers [Sacred] to self, max 4 layers",
    },
    passive: {
      name: 'Sacred Blood Healing',
      chineseName: '圣血治疗',
      level: '10+4',
      description:
        'When my colored units are attacked, consumes 1 layer [Sacred] and recovers self attack power 119.2%+445 to that colored unit, each colored unit has 1 second cooldown time. When friendly unit enters weakened state, recovers after 5 seconds and recovers self attack power 285.8%+2709 HP, can be revived once per battle at most',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description:
      'Passive: Self attack power +10%. Battle Start: Every 500 attack power increases self healing by 5%, max 6 times.',
    requirements: {
      faction: 'Avalon',
      element: 'Storm',
      condition: '2 [Avalon] colored or 2 [Storm] colored characters',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When casting required skills, additionally adds 1 layer [Sacred]' },
    {
      level: 2,
      effect:
        'After consuming [Sacred] to heal targets, that target receives 10% less damage for 5 seconds, can be triggered multiple times with extended duration',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level cap +4' },
    { level: 4, effect: 'Healing amount increased by 37.5%' },
    { level: 5, effect: '[Required Skills] and [Passive] level cap +4' },
    { level: 6, effect: 'Revival count increased by 1' },
  ],

  // Memory Card
  memoryCard: {
    name: 'The Most Real Her',
    chineseName: '最真实的她',
    image: 'JoanofArccard', // Use format: characternamecard
    level: '80/80',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Only effective for healers, 5-price awakening',
      'The Most Real Her: Healing amount +50%, when casting skills or required skills within 1/2/3 seconds, healing amount additionally +25/50/75%',
    ],
  },
};

// SEO data for Jeanne d'Arc
export const jeanneDArcSEO = {
  title: `${jeanneDArcData.name} (${jeanneDArcData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${jeanneDArcData.name}, a ${jeanneDArcData.rarity} ${jeanneDArcData.element} ${jeanneDArcData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const jeanneDArc = {
  id: 'jeanne-darc',
  name: "Jeanne d'Arc",
  chineseName: '贞德',
  rarity: 'SSR',
  element: 'Wind',
  role: 'Healer',
  faction: 'Avalon',
  chineseFaction: '亚瓦隆',
  maxLevel: 80,

  baseStats: {
    hp: 9180,
    attack: 1004,
    defense: 729,
    energyRecovery: 0.25,
    critRate: 0,
    critDamage: 50,
  },

  images: {
    portrait: '/images/characters/Jeanne-dArc.jpg',
    card: '/images/characters/Jeanne-dArccard.jpg',
  },

  tags: ['Healer', 'Support', 'Revival', 'Avalon', 'Wind'],
};

// Export default for easy importing
export default jeanneDArcData;
