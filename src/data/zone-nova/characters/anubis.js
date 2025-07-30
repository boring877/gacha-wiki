// Anubis Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const anubisData = {
  // Basic Character Information
  name: 'Anubis',
  chineseName: '阿努比斯',
  image: 'Anubis', // Use format: charactername (e.g., 'Anubis')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Chemic', // Kaimique (凯米奇)

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
      name: 'Underworld Touch',
      chineseName: '冥神之触',
      level: '10+4',
      cooldown: '2.0s',
      description: 'Deals 120% attack power Chaos damage to designated enemy unit.',
    },
    auto: {
      name: 'Divine Punishment Rain',
      chineseName: '天罚之雨',
      level: '10+4',
      cooldown: '8.0s',
      description:
        'Call a meteor on the target and all enemies within 2 m, 96 % ATK as Chaos damage on impact. adding 1 layer [Nightmare]. [Nightmare]: Every 3 s deals 5.6 % ATK as Chaos damage per stack, Caps at 10 stacks (total 56 % ATK per tick at max).',
    },
    ultimate: {
      name: 'Destined Reversal',
      chineseName: '命定逆转',
      level: '10+4',
      cooldown: '1.0s',
      energyCost: '4',
      description:
        'Heal lowest-HP ally for 112.8 % ATK(HealerATK) + 668 HP. Enhancement: Heal all allies for 112.8 % ATK + 668 HP and give them 10 % damage reduction for 10 s.',
    },
    passive: {
      name: 'Soul Siphon',
      chineseName: '灵魂虹吸',
      level: '10+4',
      description:
        'When using auto skill (only you) to attack targets with (20) with dupe 1 (15+) layers of DOT, heals entire team self attack power 97.2%+445 HP and Immediately gain one Empowered Ultimate charge, usable within 8 s.',
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
      faction: 'Chemic',
      element: 'Chaos',
      condition: '2 [Chemic] colored or 2 [Chaos] colored characters',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Passive skill conditions reduced from 20 layers to 15 layers' },
    {
      level: 2,
      effect:
        'Every heal cast by Anubis (even from passives or ultimates) now applies a 5-second buff to the healed ally Incoming damage –10 % , Each new heal refreshes the 5-second duration.',
    },
    { level: 3, effect: '[Skills] and [Normal Attack] level cap +4' },
    { level: 4, effect: 'Healing amount increased by 37.5%' },
    { level: 5, effect: '[Required Skills] and [Passive] level cap +4' },
    { level: 6, effect: 'Auto Skill will summon additional meteors for consecutive attacks' },
  ],

  // Memory Card
  memoryCard: {
    name: 'Midnight Work',
    chineseName: '熬夜工作',
    image: 'Anubiscard', // Use format: characternamecard
    level: '80/80',
    stats: {
      hp: '6,000',
      attack: '800',
      defense: '600',
    },
    effects: ['Healing amount +50%, each healing gives target +40% attack power for 3 seconds'],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Healing', 'Ranged', 'Damage Reduction', 'DOT'],
};

// SEO data for Anubis
export const anubisSEO = {
  title: `${anubisData.name} (${anubisData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${anubisData.name}, a ${anubisData.rarity} ${anubisData.element} ${anubisData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default anubisData;
