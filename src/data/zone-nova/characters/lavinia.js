// Lavinia - Zone Nova Character Data
// Fire Healer character from Sapphire faction

export const laviniaData = {
  // Basic Character Information
  name: 'Lavinia',
  image: 'Lavinia',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Healer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Sapphire',

  // Base Stats (Level 80)
  stats: {
    hp: '8,700',
    attack: '956',
    defense: '672',
    critRate: 28.9,
  },

  // Character Skills
  skills: {
    normal: {
      name: 'Flame Kiss',
      description: 'Deals 120% attack power fire damage to specified enemy unit.',
      cooldown: '2.0s',
    },
    auto: {
      name: 'Blazing Sequential Healing',
      cooldown: '10.0s',
      description:
        'Deals 5-stage damage to specified enemy unit, totaling 720% attack power fire damage. After each damage instance, heals the ally unit with lowest current health percentage for health equal to 24% of own attack power.',
    },
    ultimate: {
      name: 'Final Sacred Judgment',
      energyCost: '3',
      cooldown: '1.0s',
      description:
        'Deals 4-stage damage to specified enemy unit, totaling 960% attack power damage. After each damage instance, recovers health equal to 72% of own attack power from the enemy unit with lowest health percentage. First damage can (interrupt) skills currently being cast. Final damage stage is considered (Extra attack) damage.',
    },
    passive: {
      name: 'Critical Healing Grace',
      description:
        'For every 1% critical rate Lavinia has when entering battle, her healing effectiveness increases by 0.5%. After Lavinia uses basic attack/skill/ultimate, she can heal the ally unit with the lowest current health percentage for health equal to 24% of her own attack power.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combo Skill',
    description:
      'Own critical rate increases by 7.5%. At battle start, every 15% critical rate increases own healing amount by 5%, up to 6 times maximum.',
    requirements: {
      faction: 'Sapphire',
      element: 'Fire',
      alternativeRequirement: '2 [Sapphire] characters or 2 [Fire] characters',
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect:
        'Critical rate increased by 12%. All healing effects from Lavinia can make targets take 10% reduced damage for 5 seconds, repeated triggers can extend duration.',
    },
    {
      level: 2,
      effect:
        'Ultimate skill energy cost reduced by 1. After Lavinia uses basic attack/skill/ultimate, can additionally deal 20% attack power fire damage.',
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'Healing amount increased by 37.5%.',
    },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        "The final stage damage of skills is considered [extra attack] damage. Lavinia's [Extra attack] damage can reduce target's all resistances by 10%, and increase extra attack damage taken by 20%, lasting 5 seconds.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Are the Glasses the True Body?',
    image: 'Laviniacard',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Critical rate increased by 34%',
      'After each critical hit, own healing amount increases by 50%, lasting 3 seconds',
      "After each heal, all ally targets' attack power increases by 30%, lasting 3 seconds",
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Healing',
    'Melee',
    'Crit Damage',
    'Crit Rate',
    'Normal Attack',
    'Extra Attack',
    'Interrupt',
  ],
};

// SEO data for Lavinia
export const laviniaSEO = {
  title: 'Lavinia - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Lavinia in Zone Nova. Learn about her fire healing abilities, critical rate synergies, damage reduction buffs, and optimal build strategies for this powerful Sapphire faction healer.',
};

// Export default for easy importing
export default laviniaData;
