// Nina Character Data - Zone Nova
// Halloween Candy themed Ice Warrior with Frost Ash mechanics

export const ninaData = {
  // Basic Character Information
  name: 'Nina',
  image: 'Nina', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Ice', // Fire, Ice, Wind, Holy, Chaos
  class: 'Warrior', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Sapphire', // Sapphire faction for combination skill compatibility

  // Base Stats (Level 80)
  stats: {
    hp: '8,700', // Base HP
    attack: '1,004', // Base Attack
    defense: '729', // Base Defense
    energyRecovery: '0.25/s', // Energy Recovery rate
    critRate: '6%', // Base Critical Rate
    critDmg: '50%', // Base Critical Damage
  },

  // Skills with Frost Ash state mechanics
  skills: {
    normal: {
      name: 'Frost Blood Thorn',
      cooldown: '2.0s',
      description:
        'Deals ice damage equal to 120% of Attack to target enemy unit, recovering 12% of max health.',
      frostAshDescription:
        '【Frost Ash】State: Each hit removes 5% of max health. Deals ice damage equal to 240% of Attack to target enemy unit.',
    },
    auto: {
      name: 'Blaze Burst',
      cooldown: '5.0s',
      description:
        'Deals ice damage equal to 480% of Attack to target enemy unit and units behind it, recovering 12% of max health.',
      frostAshDescription:
        '【Frost Ash】State: Each hit removes 5% of max health. Deals ice damage equal to 960% of Attack to target enemy unit and units behind it.',
    },
    ultimate: {
      name: 'Frost Ash Liberation',
      cooldown: '1.0s',
      energyCost: '1',
      description:
        'Enters the 【Frost Ash】 state. Basic attack speed increased by 50%. Skill base cooldown reduced to 3 seconds. Critical rate increased by 60%.',
      additionalRules: [
        'Automatically exits 【Frost Ash】 state when health falls below 30%.',
        'Can re-cast the ultimate skill to exit 【Frost Ash】 state.',
        'Can re-cast the ultimate skill while in 【Frost Ash】 state.',
      ],
    },
    passive: {
      name: 'Indestructible Frost Mark',
      description:
        '【Frost Ash】State: Damage taken reduced by 50%. Each attack increases own attack speed by 12%, lasting 5 seconds, stacking up to 5 times.',
    },
  },

  // Team Skill (Combination Skill)
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Own attack power increased by 10%. At the start of battle, every 500 attack power increases own critical damage by 7.5%, stacking up to 6 times.',
    requirements: {
      faction: 'Sapphire', // 2 Sapphire characters
      element: 'Ice', // OR 2 Ice characters
    },
    activationCondition: 'Team contains 2 【Sapphire】 characters OR 2 【Ice】 characters',
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'After killing an enemy, immediately recovers 20% of max health. Enters 【Frost Ash】 state immediately upon entering battle. While in 【Frost Ash】 state, all damage is increased by 20%.',
    },
    {
      level: 2,
      effect:
        'When health drops to 35% or below, immediately recovers 50% of max health (can trigger once per battle). While in 【Frost Ash】 state, critical rate is additionally increased by 15%.',
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'Ice damage increased by 30%.',
    },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect: 'While in 【Frost Ash】 state, all damage penetrates 20% ice resistance.',
    },
  ],

  // Memory Card - Halloween Candy
  memoryCard: {
    name: 'Halloween Candy',
    image: 'Ninacard', // Use format: characternamecard (e.g., 'pennycard')
    title: 'Halloween Candy',
    stats: {
      hp: '6,000', // Base HP for memory card
      attack: '600', // Base Attack for memory card
      defense: '600', // Base Defense for memory card
    },
    effects: [
      'Critical damage increased by 60%.',
      'When health is above 30%, equipped character recovers 2% of max health after attacking; all damage increased by 40%.',
    ],
  },

  // Character Tags - For search and filtering
  tags: [
    'Ice',
    'Critical',
    'Self-Heal',
    'Burst Damage',
    'Mode Switch',
    'Attack Speed',
    'Warrior',
    'SSR',
  ],
};

// SEO data for Nina
export const ninaSEO = {
  title: `${ninaData.name} - Zone Nova Character Guide | Halloween Candy`,
  description: `Complete guide for ${ninaData.name}, a ${ninaData.rarity} ${ninaData.element} ${ninaData.class} in Zone Nova. Includes Frost Ash mechanics, skills, awakenings, Halloween Candy memory card, and optimal team compositions.`,
  keywords: `Nina, Zone Nova, Halloween Candy, Frost Ash, Ice Warrior, ${ninaData.rarity}, character guide, skills, awakenings`,
};

// Export default for easy importing
export default ninaData;
