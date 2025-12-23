// Jorogumo Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const jorogumoData = {
  // Basic Character Information
  name: 'Jorogumo',
  chineseName: '絡新婦',
  image: 'Jorogumo', // Use format: charactername (e.g., 'Jorogumo')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Pingjing City', // 平京城

  // Base Stats (Level 80)
  stats: {
    hp: '9,180', // HP: 9180
    attack: '1,004', // Attack: 1004
    defense: '728', // Defense: 728
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%',
  },

  // Skills
  skills: {
    normal: {
      name: 'Eclipse Silk',
      chineseName: '日蚀丝',
      level: '10+4',
      cooldown: '2.0s',
      description: 'Deals 120% ATK Chaos Damage to a target enemy.',
    },
    auto: {
      name: 'Blooming Sweet Rain',
      chineseName: '甘露绽放',
      level: '10+4',
      cooldown: '3.0s',
      description:
        'The friendly unit with the lowest current health percentage gains a continuous health regeneration of 20.4% + 440 of its own attack power for 3 seconds; during the continuous regeneration, gain 10% all resistance.',
    },
    ultimate: {
      name: 'Umbrella Blossom',
      chineseName: '伞花绽放',
      level: '10+4',
      cooldown: '1.0s',
      energyCost: '2',
      description:
        "After a short casting time, a healing area with a range of 5 is created, restoring the caster's attack power by 46% + 243 HP per second for 5 seconds. Allied characters within the area gain 1 stack of [Umbrella Blossom], up to a maximum of 5 stacks.",
    },
    passive: {
      name: 'Umbrella Heal',
      chineseName: '伞花治愈',
      level: '10+4',
      description:
        'After an ally is attacked, if HP is below 30%, consume 1 stack of [Umbrella Flower] to gain 3 rapid heals of 15.1% Max HP within 1 second. The first 2 times gain 6 rapid heals.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description:
      'At the start of combat, healing is increased by 5% for every 500 attack power, up to 6 times. Self-generated energy gain efficiency is increased by 10%.',
    requirements: {
      faction: 'Pingjing City',
      element: 'Chaos',
      condition: '2 [Pingjing City (平京城)] or 2 [Chaos] characters',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Ultimate range increased to 7.' },
    {
      level: 2,
      effect:
        "Immediately activates Ultimate without cost upon entering battle. After using Ultimate, gain [Umbrella Protection]: Allies' non-Dark resistance increased by 40%, enemy damage reduced by 12.5% (lasts 5 seconds).",
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate Skill] and [Passive] level and level cap +2.',
    },
    { level: 4, effect: 'Healing increased by 45%.' },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate Skill] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        "[Umbrella Healing+] The passive effect is added once for the first two activations, and also grants a shield equal to 50% of Jorogumo's maximum HP.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Beautiful Moon',
    chineseName: '美丽月亮',
    image: 'Jorogumocard', // Use format: characternamecard
    level: '80/80',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Healing increased by 35%.',
      "When healing a target with 'Continuous Damage' status, healing is increased by an additional 25%.",
      "If target HP is below 50%, grant continuous healing effect, restoring 9% of caster's ATK as HP per second for 3 seconds, max 1 stack.",
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Healing', 'Ranged', 'AOE Healing', 'Resistance', 'Shield'],
};

// SEO data for Jorogumo
export const jorogumoSEO = {
  title: `${jorogumoData.name} (${jorogumoData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${jorogumoData.name}, a ${jorogumoData.rarity} ${jorogumoData.element} ${jorogumoData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default jorogumoData;
