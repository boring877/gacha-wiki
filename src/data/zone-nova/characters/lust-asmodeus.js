// Zone Nova data for the Lust - Asmodeus character guide page.

export const lustAsmodeusData = {
  // Basic Character Information
  name: 'Lust - Asmodeus',
  image: 'Asmodeus.png',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Attacker',
  role: 'DPS',
  faction: 'Bicta Tower',

  // Base Stats (Level 80)
  stats: {
    hp: '7,308',
    attack: '1,461',
    defense: '474',
    energyRecovery: '0.25/s',
    critRate: '20.8%',
    critDamage: '92%',
  },

  // Skills
  skills: {
    normal: {
      name: 'Wind cutter',
      cooldown: '2.0s',
      description: 'Deals 120% attack power as wind damage to the designated enemy unit.',
    },
    auto: {
      name: 'Wind attack',
      cooldown: '5.0s',
      description:
        'Deals 5 instances of damage to the target enemy unit, each dealing 155.8% attack power as wind damage and inflicting [Armor Shatter], reducing their defense by 6.9% for 10 seconds, stacking up to 10 times.',
    },
    ultimate: {
      name: 'Wind Devour',
      cooldown: '1.0s',
      energyCost: '3',
      description:
        "Deals 1077.2% of ATK as Wind Damage to the target enemy and inflicts the [Wind Damage] debuff, reducing the enemy's incoming healing by 30% and incoming shield value by 50% for 8 seconds. After using her ultimate skill, Asmodeus gains 1 stack of [Desire], reducing Normal Attack cooldown by 25% and Skill cooldown by 10%, up to a maximum of 2 stacks.",
    },
    passive: {
      name: 'Wind Desire',
      description: 'When the [Desire] stack is 2, damage taken is reduced by 50%.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combo',
    description:
      'Triggers when the team includes 2 [Bicta Tower] characters or 2 [Wind] characters. Attack power increased by 20%. At the start of battle, every 15% critical hit rate increases critical hit damage by 8%, up to a maximum of 6 times.',
    requirements: {
      faction: 'Bicta Tower',
      element: 'Wind',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'Critical hit rate increased by 10%, first ultimate skill used after entering the arena does not consume energy. Asmodeus gains 1 stack of [Pleasure] after using a skill, increasing critical hit damage by 12.5%, up to 4 stacks.',
    },
    {
      level: 2,
      effect:
        'Critical hit damage increased by 30%. When [Desire] stacks are at 2, skill damage is increased by 30%. When [Pleasure] stacks are at 4, damage is increased by 30%.',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect:
        'Attack power increased by 20%. When the [Pleasure] stacks reach 4, Asmodeus enters the [Climax] state, increasing skill damage by 30%.',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect: "The damage dealt ignores 15% of the target's elemental resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'King of Lust',
    image: 'KingOfLust.png',
    title: 'King of Lust',
    level: '80/80',
    rarity: '6-star (SSR)',
    class: 'Attacker',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Critical hit rate increased by 40%.',
      'Attack power increased by 40%.',
      "Each time the wearer's attack hits an enemy, they accumulate 1 stack of [Battle Spirit]. Once [Battle Spirit] reaches 10 stacks, all [Battle Spirit] will be consumed and [Penetrating] will be gained, increasing critical hit damage dealt by 50% for 5 seconds.",
      '[Battle Spirit] will not accumulate while the [Penetrating] effect is active.',
    ],
  },

  // Character Tags - For search and filtering
  tags: ['Crit Rate', 'Crit Damage', 'Defense Reduction', 'Debuff', 'Skill Damage'],
};

export const lustAsmodeusSEO = {
  title: `${lustAsmodeusData.name} - Zone Nova Character Guide | King of Lust`,
  description: `Complete guide for ${lustAsmodeusData.name}, a ${lustAsmodeusData.rarity} ${lustAsmodeusData.element} ${lustAsmodeusData.class} in Zone Nova. Includes skills, awakenings, and the King of Lust memory card.`,
  keywords:
    'Lust - Asmodeus, Zone Nova, King of Lust, Bicta Tower, Wind Attacker, character guide, skills, awakenings',
};

export default lustAsmodeusData;
