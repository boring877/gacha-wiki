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
        'Restore health to all friendly characters equal to self attack power 90.8% + 668, and add 3 layers of [Sacred Healing] to self, [Sacred Healing] can stack up to maximum 4 layers',
    },
    passive: {
      name: 'Sacred Blood Healing',
      chineseName: '圣血治疗',
      level: '10+4',
      description:
        'When friendly characters are attacked, consume 1 layer [Sacred Healing] and restore health to that character equal to self attack power 91.2% + 445, each character has 1 second cooldown time When friendly units enter near-death state, after 5 seconds revive them and restore health equal to self attack power 285.8% + 2709, can revive at most once per battle',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description:
      'Self attack power +10%. Every 500 attack power increases self healing by 5%, max 6 times.',
    requirements: {
      faction: 'Avalon',
      element: 'Wind',
      condition: '2 [Avalon] colored or 2 [Wind] colored characters',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'After casting ultimate skill, additionally add 1 layer of [Sacred Healing]',
    },
    {
      level: 2,
      effect:
        'After consuming [Sacred Healing] to heal target, that target takes 10% reduced damage for 5 seconds, repeated triggers can extend the duration',
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
      'Healing amount increases by 50% When casting skills or ultimate skills for 1/2/3 seconds, healing amount additionally increases by 25/50/75%',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Healing', 'Revival', 'Reduced Damage', 'Continuously Heals'],
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
