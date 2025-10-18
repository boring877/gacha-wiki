// Odin Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const odinData = {
  // Basic Character Information
  name: 'Odin',
  image: 'Odin', // charactername
  rarity: 'SSR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'Rogue', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'A.S.A', // Should match faction names in factions.js

  // Base Stats (Level 80)
  stats: {
    hp: '7,308', // e.g., '7,308'
    attack: '1,305', // e.g., '1,305'
    defense: '530', // e.g., '530'
    energyRegen: '0.25/s',
    critRate: '0%',
    critDamage: '50%',
  },

  // Skills
  skills: {
    normal: {
      name: 'Soul Reap',
      cooldown: '1.0s',
      description: 'Deals 120% ATK as Fire damage to a single target.',
    },
    auto: {
      name: 'Falling Flame',
      cooldown: '5.0s',
      description: 'Deals 3 hits of 120% ATK as Fire damage and applies 1 stack of [Divine Flame].',
    },
    ultimate: {
      name: 'Judgment Strike',
      energyCost: '2',
      cooldown: '1.0s',
      description:
        'After casting, you may chain three segments within 4 s:\n' +
        '1. Dash to target, deal 480% ATK Fire damage + apply [Divine Flame].\n' +
        '2. Leap backward, deal 480% ATK Fire damage + apply [Divine Flame].\n' +
        '3. Jump & charge, deal 480% ATK Fire damage; each DoT stack on the target adds another 48% ATK Fire damage (max 20 extra hits).',
    },
    passive: {
      name: "Raven's Insight",
      description:
        "All Odin's damage counts as DoT and cannot crit.\n" +
        'Pre-battle: every 1% crit rate -> +1% Fire dmg; every 2% crit dmg -> +1% ATK.\n' +
        'Skills / ultimates apply [Divine Flame]: every 3 s deals 36% ATK Fire damage, stacks up to 10, lasts 10 s.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'If the party has 2 A.S.A or 2 Fire characters:\n' +
      'ATK +10%.\n' +
      'At battle start, every 500 ATK grants +3% Penetration (max 6 times).',
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
        'Targets without [Divine Flame] instantly receive 5 stacks; +20 % DoT for 5 s after ultimate; 50 % damage reduction during ultimate.',
    },
    {
      level: 2,
      effect:
        'Ultimate third-segment extra hits cap raised to 30; enemies with [Divine Flame] take +20 % DoT from Odin.',
    },
    { level: 3, effect: 'Normal / Skill / Ultimate / Passive level cap +2.' },
    { level: 4, effect: 'Fire damage +30 %.' },
    { level: 5, effect: 'Normal / Skill / Ultimate / Passive level cap +2.' },
    {
      level: 6,
      effect:
        "Every 3 ultimates, next normal attack becomes a skill; Odin's DoT ignores 20 % Fire resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Shared Bath Time',
    image: 'Odincard',
    stats: {
      hp: '5,040',
      attack: '780',
      defense: '474',
    },
    effects: [
      'ATK +40 %; ultimate damage +40 % for the caster.',
      'After each ultimate, gain 1 [Charge]. When dealing damage, consume [Charge] to apply 1 stack of [Final Flame]: deals 15 % ATK Fire damage every 2 s, stacks up to 5, lasts 10 s.',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'DOT', 'Damage Reduction', 'Penetration'],
};

// SEO data for Odin
export const odinSEO = {
  title: `${odinData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${odinData.name}, a ${odinData.rarity} ${odinData.element} ${odinData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default odinData;
