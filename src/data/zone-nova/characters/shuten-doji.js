// Shuten-doji - Zone Nova Character Data
// Wind DPS Mage character from Pingjing City faction

export const shutenDojiData = {
  // Basic Character Information
  name: 'Shuten-doji',
  image: 'Shuten-doji',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Mage', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Pingjing City',

  // Base Stats (Level 80)
  stats: {
    hp: '7,711',
    attack: '1,305',
    defense: '474',
    energyRecovery: '0.25/s',
    critRate: 0,
    critDamage: 50,
  },

  // Character Skills
  skills: {
    normal: {
      name: 'Storm Cannon',
      level: '10+4',
      cooldown: '2.0s',
      description:
        'Deals 72.9% attack power as wind damage to the designated enemy unit and nearby enemy units.',
    },
    auto: {
      name: 'Piercing Gun',
      level: '10+4',
      cooldown: '5.0s',
      description:
        'Targeting a designated enemy unit, deals 121.5% attack power as wind damage to a rectangular area in front of the target and inflicts 1 stack of [Wind Evil], lasting 10 seconds. Wind Evil: Deals 24.3% attack power as wind damage per second, stacking up to 4 times, lasting 10 seconds.',
    },
    ultimate: {
      name: 'Scattered Flower Gun',
      level: '10+4',
      energyCost: '2',
      cooldown: '1.0s',
      description:
        'Deals 244.3% attack power as wind damage to the designated enemy unit and nearby enemies. When the target has full stacks of [Wind Evil], additionally inflicts [Evil Bone]. If the target has less than 4 stacks of [Wind Evil], then 1 stack of [Wind Evil] will be applied. Evil Bone: Deals 221.5% attack power as wind damage per second, up to 1 stack, lasting 5 seconds.',
    },
    passive: {
      name: 'Those who obey me live',
      level: '10+4',
      description:
        "When dealing damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, Shuten-doji's damage dealt to them increases by 62.9%. When taking damage: If the opponent has the [Wind Evil] or [Evil Bone] effect, damage dealt to Shuten-doji decreases by 48.6%.",
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combo Skill',
    level: '1',
    description:
      'Attack power increased by 15%. At the start of battle, every 500 attack power increases damage over time by 7%, up to a maximum of 10 times.',
    requirements: {
      faction: 'Pingjing City',
      element: 'Wind',
      alternativeRequirement: '2 [Pingjing City] characters or 2 [Wind] characters',
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect:
        'At the start of battle, the first use of an Ultimate skill does not consume energy. Each time a character skill is used, it can apply 2 stacks of [Wind Evil]. After each use of a character skill, damage taken is reduced by 30% for 3 seconds.',
    },
    {
      level: 2,
      effect:
        'Upon entering the battlefield, immediately deal 160% attack power as wind damage to all enemies and apply 2 stacks of [Wind Evil]. At the same time, all allies gain 50% [Block] for 10 seconds.',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'Wind damage increased by 30%.',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect: "All damage dealt by Shuten-doji ignores 25% of the target's elemental resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Unreserved Love',
    image: 'Shuten-dojicard',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Attack power increased by 40%',
      'Damage over time increased by 40%',
      'When dealing damage over time, the enemy takes 24% more damage for 3 seconds',
      'Damage dealt to enemies with shields is increased by 35%',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'DoT',
    'Wind Evil',
    'Debuff',
    'Ranged',
    'AoE',
    'Wind Damage',
    'Damage Reduction',
    'Resistance Penetration',
  ],
};

// SEO data for Shuten-doji
export const shutenDojiSEO = {
  title: 'Shuten-doji - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Shuten-doji in Zone Nova. Learn about her wind DPS abilities, Wind Evil DoT mechanics, ultimate damage potential, and optimal build strategies for this powerful Pingjing City mage.',
};

// Export default for easy importing
export default shutenDojiData;
