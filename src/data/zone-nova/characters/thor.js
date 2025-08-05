// Thor Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const thorData = {
  // Basic Character Information
  name: 'Thor',
  image: 'Thor', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Guardian', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Asa', // Asa Norse mythology faction

  // Base Stats (Level 80)
  stats: {
    hp: '10,520', // e.g., '10,520'
    attack: '698', // e.g., '794'
    defense: '1,315', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Justice Crush (正义碾压)',
      description: 'Deal Holy damage equal to 120% of own Defense to designated enemy unit.',
    },
    auto: {
      name: 'Divine Judgment Resonance (神罚共鸣)',
      cooldown: '10.0s', // e.g., '5.0s'
      description:
        'Raise the hammer to absorb lightning power, granting all allied characters a shield equal to 60% of own Defense, and reducing damage taken by 12%. Connected allies receive an additional 12% damage reduction. After Thor casts this skill, her next 3 basic attacks are enhanced with [Divine Judgment].',
    },
    ultimate: {
      name: 'Divine Punishment Hammer (神罚之锤)',
      energyCost: '2', // e.g., '5'
      description:
        "Normal Ultimate: Jump onto the target's head, after charging for 1 second, deal Holy damage equal to 120% of own Defense to the current target and [Interrupt] the skill being cast. Enhanced Ultimate: Jump onto the target's head, after charging for 1 second, deal Holy damage equal to 240% of own Defense to the target and surrounding enemies within 5 meters, [Interrupt] skills being cast, and increase damage taken by 24% for 10 seconds. After Thor casts the ultimate skill, all allied characters take 24% less damage for 10 seconds.",
    },
    passive: {
      name: 'Lightning Extreme Orbit (极端雷电轨道)',
      description:
        "Immediately gain a shield equal to 30% of maximum health, and establish connections with the two allies with the lowest defense. When Thor or connected allies take damage, Thor gains 1 stack of [Lightning Extreme]. Each character can trigger this at most once per second. When [Lightning Extreme] reaches 10 stacks, can cast [Enhanced Ultimate]. When enhanced ultimate is cast, no longer accumulate [Lightning Extreme] stacks. When dealing damage with ultimate skill, can apply [Divine Judgment]. [Divine Judgment]: Every 3 seconds, deal Holy damage equal to 19.2% of Defense, maximum 5 stacks. Shield can stack up to maximum 30% of the character's maximum health.",
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Team Synergy', // Usually 'Combination Skill'
    description:
      'When the team contains 2 [Asa] characters or 2 [Holy] characters: Own Defense increased by 15%. At the start of battle, every 500 Defense reduces team damage taken by 1.5%, maximum 6 stacks.',
    requirements: {
      faction: 'Asa', // Same as character faction
      element: 'Holy', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'Immediately gain 10 stacks of [Lightning Extreme] at the start of battle. Connect to the two allies with the lowest defense.',
    },
    {
      level: 2,
      effect:
        'Connected allies gain 30% increased attack. After casting enhanced ultimate, grant all allied characters a shield equal to 10% of Defense every 2 seconds for 10 seconds.',
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2',
    },
    {
      level: 4,
      effect: 'Defense increased by 45%',
    },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2',
    },
    {
      level: 6,
      effect:
        "All resistance increased by 15%, Holy resistance additionally increased by 15%. Targets hit by Thor's ultimate gain 1 additional stack of [Divine Judgment] per second for 5 seconds.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Night Assault Suspect',
    image: 'Thorcard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '6,600', // e.g., '8,600'
      attack: '480', // e.g., '480'
      defense: '690', // e.g., '690'
    },
    effects: [
      'Defense increased by 64%',
      'When allied characters with shields take damage, Defense increased by 64%',
      'When the equipper deals continuous damage to enemy targets, increase damage taken by the target by 15% for 5 seconds',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Enhanced Ultimate',
    'Defense Scaling',
    'DOT',
    'Melee',
    'Interrupt',
    'Shield',
    'Continuous Shielding',
    'Damage Reduction',
    'Damage Taken Increase',
    'AOE Shielding',
  ],
};

// SEO data for Thor
export const thorSEO = {
  title: `${thorData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${thorData.name}, a ${thorData.rarity} ${thorData.element} ${thorData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default thorData;
