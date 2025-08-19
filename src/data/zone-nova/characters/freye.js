// Freye Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const freyeData = {
  // Basic Character Information
  name: 'Freye',
  image: 'Freye', // Use format: charactername (e.g., 'freye')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Debuffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Asa', // Asa faction

  // Base Stats (Level 80)
  stats: {
    hp: '9,180', // e.g., '10,520'
    attack: '1,184', // e.g., '794'
    defense: '729', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Chaos Strike',
      description: 'Deals 120% attack power as chaos damage to designated enemy unit.',
    },
    auto: {
      name: 'Attribute Break',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        'Applies a weakness attribute to the designated enemy unit, prioritizing the attribute of the 4th character in your team, and reduces the corresponding attribute resistance by 15% for 10 seconds. Deals 360% attack power damage of the corresponding attribute to that target.',
    },
    ultimate: {
      name: 'Dark Fate',
      energyCost: '3', // e.g., '5'
      description:
        'Summons a small black hole that deals damage to designated enemy units and surrounding enemies within a 3-meter range, hitting up to 12 times. Total damage is 60% chaos damage. If the enemy takes damage within 10 seconds, damage is increased by 36%. Next ultimate skill is enhanced. Enhanced Ultimate: Summons a large black hole that deals damage to designated enemy units and surrounding enemies within a 5-meter range, hitting up to 12 times. Total damage is 180% chaos damage. Additionally, within 10 seconds, enemy damage taken is increased by 60%. This effect cannot stack with regular ultimate skill effects.',
    },
    passive: {
      name: 'Meteor Storm',
      description:
        'When using basic attacks or skills to deal damage, applies one stack of 【Divine Meteor】. When using ultimate skill to deal damage to the same target 4 times, applies one stack of 【Divine Meteor】. 【Divine Meteor】: Every 3 seconds deals 19.2% attack power as chaos damage, can stack up to 10 times, lasts 10 seconds. Passive Effect: When a large black hole exists, all enemy units have their energy gain reduced by 50% and total defense reduced by 10%.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Divine Protection', // Usually 'Combination Skill'
    description:
      'After combat starts, reduces total damage dealt by all enemy units by 2.5%. For every 1000 attack power Freye has, this effect increases by 100% (doubles), maximum increase of 300%. At 3000+ attack: 10% damage reduction (maximum).',
    requirements: {
      faction: 'Asa', // Same as character faction
      element: 'Chaos', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'After combat starts, can immediately cast 【Enhanced Ultimate】.' },
    {
      level: 2,
      effect:
        'Ultimate skill damage increased by 20%. 【Enhanced Ultimate】 energy cost reduced to 1. Enhanced Passive: When large black hole exists, all enemy units have energy gain reduced by 100% and total defense reduced by 20%.',
    },
    {
      level: 3,
      effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2.',
    },
    { level: 4, effect: 'Attack power increased by 30%.' },
    {
      level: 5,
      effect: '[Basic Attack], [Skill], [Ultimate], and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        'Targets affected by ultimate skills additionally have all resistance reduced by 20%.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Lamplight Study',
    image: 'Freyecard', // Using the specified image name
    stats: {
      hp: '6,000', // e.g., '8,600'
      attack: '600', // e.g., '480'
      defense: '600', // e.g., '690'
    },
    effects: [
      'Attack power increased by 40%',
      'Ultimate skill damage can apply 【Fate Bind】. Each stack of 【Fate Bind】 increases damage taken by 3.6%, lasts 10 seconds, maximum 10 stacks',
      'Total Potential: 40% base attack + progressive damage amplification through Fate Bind stacks',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'DOT',
    'Enhanced Ultimate',
    'Damage Taken increase',
    'element weaknesses',
    'energy gain reduced',
    'debuff',
    'range',
  ],
};

// SEO data for Freye
export const freyeSEO = {
  title: `${freyeData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${freyeData.name}, a ${freyeData.rarity} ${freyeData.element} ${freyeData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default freyeData;
