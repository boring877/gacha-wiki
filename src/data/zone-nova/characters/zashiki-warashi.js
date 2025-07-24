// Zashiki-warashi Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const zashikiWarashiData = {
  // Basic Character Information
  name: 'Zashiki-warashi',
  image: 'Zashiki-warashi', // Use format: charactername (e.g., 'Zashiki-warashi')
  rarity: 'SR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'Buffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Buffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Pingjing City', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '7,970', // e.g., '10,520'
    attack: '837', // e.g., '794'
    defense: '560', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Housekeeper Guidance',
      description: 'Deals fire damage equal to 120% of Attack to designated enemy',
    },
    auto: {
      name: 'Five Grains Harvest',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        "All allied units gain 36% attack power. Attack power cap: Cannot exceed 36% of Zashiki-warashi's entry attack power. Maximum 1 layer, lasts 15 seconds",
    },
    ultimate: {
      name: 'Share Fortune! Share Hardship!',
      energyCost: '3', // e.g., '5'
      description:
        'All allied units receive 36% damage increase for 15 seconds. Low Energy Cost: Only 3 energy allows frequent usage',
    },
    passive: {
      name: "Child's Blessing",
      description:
        'After releasing skill: The allied unit with highest attack power gains one layer [Blessing]. [Blessing] Effect: Increases attack power by 60% for 15 seconds',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Team attack power increases by 10%. Team defense increases by 10%',
    requirements: {
      faction: 'Pingjing City', // Same as character faction
      element: 'Fire', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: 'Upon entering battle: All allied units gain 15% attack increase for 30 seconds',
    },
    {
      level: 2,
      effect:
        'When using ultimate: Characters with [Blessing] additionally gain 15% damage increase',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    {
      level: 4,
      effect: 'After using skill: All allied units gain 10% critical rate for 5 seconds',
    },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect: 'When using ultimate: Characters with [Blessing] gain double ultimate effect',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Sleep Treasure',
    image: 'Zashiki-warashicard', // Use format: characternamecard (e.g., 'Zashiki-warashicard')
    stats: {
      hp: '5,000', // e.g., '8,600'
      attack: '500', // e.g., '480'
      defense: '500', // e.g., '690'
    },
    effects: [
      'After releasing ultimate: Team damage increases by 24% for 10 seconds',
      'Additionally: Has 50% chance to make team critical damage additionally increase by 20% for 10 seconds',
    ],
  },
};

// SEO data for Zashiki-warashi
export const zashikiWarashiSEO = {
  title: `${zashikiWarashiData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${zashikiWarashiData.name}, a ${zashikiWarashiData.rarity} ${zashikiWarashiData.element} ${zashikiWarashiData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default zashikiWarashiData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Zashiki-warashi character
2. All placeholder values have been replaced with actual character data from zashiki-warashi.astro
3. The export names are: zashikiWarashiData, zashikiWarashiSEO

4. In your .astro file, import like this:
   import { zashikiWarashiData, zashikiWarashiSEO } from './zashiki-warashi.js';

5. Use the data:
   const characterData = zashikiWarashiData;
   const title = zashikiWarashiSEO.title;
   const description = zashikiWarashiSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
