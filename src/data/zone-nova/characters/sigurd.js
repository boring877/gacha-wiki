// Sigurd - Zone Nova Character Data
// Fire Rogue character from A.S.A faction (Asar Manor)

export const sigurdData = {
  // Basic Character Information
  name: 'Sigurd',
  image: 'Sigurd',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Rogue',
  role: 'DPS',
  faction: 'A.S.A',
  title: 'Lord of the Underworld',

  // Character Lore
  lore: "One of Hela's servants, she was once bathed in dragon blood and possesses near-immortal defensive abilities. Frigga's adopted daughter, she also lives in [Asar Manor]. She is proud of her inherited heroic bloodline, sometimes to the point of being overly arrogant, but she is actually softhearted and easily hurt, and very kind. She doesn't want to be hurt, so she always adopts a defensive posture, speaking with pride while saying things she doesn't mean. Loki jokingly calls her \"the misunderstood fake heiress.\" She deeply values the members of the manor and would sacrifice herself to protect her family.",

  // Base Stats (Level 80)
  stats: {
    hp: '7,308',
    attack: '1,305',
    defense: '474',
    critRate: 16,
  },

  // Skills
  skills: {
    normal: {
      name: 'Flame Slash',
      cooldown: '2.0s',
      description: 'Deals 120% attack damage as Fire damage to the designated enemy unit.',
    },
    auto: {
      name: 'Flame Blade Thrust',
      cooldown: '5.0s',
      description:
        "Deals 629.6% attack damage as Fire damage to a designated enemy unit and grants the caster 1 stack of Dragon's Blood, up to a maximum of 4 stacks.",
    },
    ultimate: {
      name: 'Burning Dragon Blade',
      energyCost: '3',
      cooldown: '1.0s',
      description:
        'Deals 840% attack power as Fire damage to a designated enemy unit. Upon defeating the enemy, triggers [Explosion], dealing 610.1% damage in a circular area with a radius of 4 centered on the target unit. [Enhanced Ultimate Skill] can be used when [Dragon Blood] has 2 or more stacks, consuming 2 stacks of [Dragon Blood] upon use. [Enhanced Ultimate Skill]: Deals 1200% attack power as Fire damage to a designated enemy unit.',
    },
    passive: {
      name: 'Flame Shadow Pursuit',
      description:
        'When a Ultimate Skill or skill crits, it deals an additional instance of Fire damage equal to 121.5% attack power. This can only be triggered once every 0.5 seconds.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Self Critical Rate increases by 7.5%. At battle start, every 15% Critical Rate increases self Critical Damage by 7.5%, up to 6 times.',
    requirements: {
      faction: 'A.S.A',
      element: 'Fire',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'Gain one [Enhanced Ultimate Skill] at the start of battle. Increase critical hit rate by 10%.',
    },
    {
      level: 2,
      effect:
        'Gain 2 stacks of [Dragon Blood] each time a skill is used. Gain 1 stack of [Dragon Blood] after using an ultimate skill.',
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate Skill] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'Fire damage increased by 30%.',
    },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate Skill] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect: "Ultimate skill damage ignores 20% of the target's elemental resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'I am your Christmas present.',
    image: 'Sigurdcard',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Critical hit rate increased by 34%, ultimate skill damage increased by 40%.',
      'When there is only 1 ATTACKER on the field, ultimate skill damage is increased by an additional 40%.',
    ],
  },

  // Character Tags
  tags: ['Melee', 'Crit Dmg', 'Enhanced Ultimate', 'Crit Rate', 'Fire Damage', 'Dragon Blood'],

  // Banner Information
  banner: {
    type: 'Limited Character Gacha',
    startDate: '2025-12-16T14:15:00',
    endDate: '2025-12-30T03:59:00',
    eventPeriod: 'December 16, 2025 14:15 - December 30, 2025 03:59',
  },
};

// SEO data for Sigurd
export const sigurdSEO = {
  title: 'Sigurd - Zone Nova Character Guide | GachaWiki',
  description:
    "Complete guide for Sigurd in Zone Nova. Learn about this Fire Rogue's abilities, dragon blood defensive powers, and optimal build strategies for Hela's loyal servant from Asar Manor.",
};

// Export default for easy importing
export default sigurdData;
