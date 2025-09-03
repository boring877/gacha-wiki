// Freya - Zone Nova Character Data
// Ice Mage character from Asa faction

export const freyaData = {
  // Basic Character Information
  name: 'Freya',
  image: 'Freya',
  rarity: 'SSR',
  element: 'Ice',
  class: 'Mage', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Asa',

  // Base Stats (Level 80)
  stats: {
    hp: '7,308',
    attack: '1,193',
    defense: '474',
    critRate: 16.8,
  },

  // Character Skills
  skills: {
    normal: {
      name: 'Golden Wind Assault (金风突袭)',
      description: 'Deals 72% attack power as ice frost damage to designated enemy.',
    },
    auto: {
      name: "Golden Wind's Wild Poetry (金风狂诗)",
      cooldown: '5.0s',
      description:
        'Deals 120% attack power as ice frost damage to designated enemy and other targets within 3m range around the target. This damage counts as normal attack damage.',
    },
    ultimate: {
      name: "Golden Wind's Bind (金风之缚)",
      energyCost: '3',
      description:
        'Enters [Golden Desire] State for 8 seconds: Normal attacks additionally hit targets within 5m range for 60% original attack damage, base attack speed increases by 50%, attack speed boost increases by 60%. During [Golden Desire] State: Cannot use other skills but can use [Ice Star] ability. [Ice Star]: Deals 480% attack power as ice damage to target. This damage counts as normal attack damage.',
    },
    passive: {
      name: 'Goddess War Dance (女神战舞)',
      description:
        'Ice Enhancement: All normal attacks additionally deal 24% attack power as ice frost damage. Multi-Hit Combo: After casting 10 normal attacks or skills, normal attacks against the main target become 5-stage attacks. Each stage deals 20% of original normal attack damage. Duration: 5 seconds.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill (组合技)',
    description:
      'Critical Rate increases by 7.5%. At combat start: For every 15% Critical Rate, gain 7.5% Critical Damage (maximum 6 stacks, up to 45% bonus critical damage).',
    requirements: {
      faction: 'Asa',
      element: 'Ice',
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: 'During [Golden Desire] state: Attack Power +30% and Damage Taken -30%.',
    },
    {
      level: 2,
      effect:
        'Immediately enters [Golden Desire] state upon entering battle. Using [Ice Star] can refresh [Golden Desire] duration. [Golden Desire] AoE damage increases from 60% → 80% of normal attack damage.',
    },
    {
      level: 3,
      effect:
        '[Basic Attack], [Auto Skill], [Ultimate Skill], and [Passive] levels & max levels +2.',
    },
    {
      level: 4,
      effect: 'All ice damage +30%.',
    },
    {
      level: 5,
      effect:
        '[Basic Attack], [Auto Skill], [Ultimate Skill], and [Passive] levels & max levels +2.',
    },
    {
      level: 6,
      effect:
        'Normal attacks penetrate 20% ice resistance. After 10 normal attacks/skills, automatically deal 100% attack power as ice damage to target and enemies within 3m range.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Slave's Original Wish (奴仆的原愿)",
    image: 'Freyacard',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'Critical Damage increased by 72%',
      'For each enemy on the battlefield: Normal attack damage increases by 12% Maximum stacks: 4 (up to 48% bonus normal attack damage)',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Ranged', 'Crit Damage', 'Crit Rate', 'Normal Attack', 'Attack Speed', 'AOE'],
};

// SEO data for Freya
export const freyaSEO = {
  title: 'Freya - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Freya in Zone Nova. Learn about her Golden Desire state, ice damage abilities, critical rate synergies, and optimal build strategies for this powerful Asa faction ice mage.',
};

// Export default for easy importing
export default freyaData;
