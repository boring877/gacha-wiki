// Shanna Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const shannaData = {
  // Basic Character Information
  name: 'Shanna',
  image: 'Shanna', // Use format: charactername (e.g., 'Shanna')
  rarity: 'SR', // SSR, SR, R
  element: 'Fire', // Fire, Ice, Wind, Holy, Chaos
  class: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Savier', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '6,694', // e.g., '10,520'
    attack: '1,088', // e.g., '794'
    defense: '442' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Light Strike',
      description: 'Deals fire damage equal to 120% of Attack to designated enemy unit. Builds Focus stacks when targeting the same enemy repeatedly.'
    },
    auto: {
      name: 'Big! Big! Big! Treasure Sword!',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Deals fire damage equal to 240% of Attack to designated enemy unit'
    },
    ultimate: {
      name: 'Flawless Sword',
      energyCost: '3', // e.g., '5'
      description: 'Rushes to designated enemy and deals fire damage equal to 480% of Attack'
    },
    passive: {
      name: 'Heroes Won\'t Retreat in Battle! (被动英雄不会临阵退缩！)',
      description: 'Level: 10+4. When attacking the same target consecutively, gain 2 stacks of "Focus." Each stack increases critical hit chance by 2.8%, with a maximum of 10 stacks.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Self damage increased by 20%',
    requirements: {
      faction: 'Savier', // Same as character faction
      element: 'Fire' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When [Focus] reaches 10 stacks: Normal attacks additionally deal 20% of Attack as fire damage' },
    { level: 2, effect: 'Each normal attack targeting same enemy: Additionally adds one [Focus] stack' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Skill damage increased by 30%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: 'When [Focus] reaches 10 stacks: Normal attack critical hit damage increased by 50%' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Heroes, Never Stop',
    image: 'Shannacard', // Use format: characternamecard (e.g., 'Shannacard')
    stats: {
      hp: '4,200', // e.g., '8,600'
      attack: '650', // e.g., '480'
      defense: '395' // e.g., '690'
    },
    effects: [
      'When the number of enemies on field is less than 2: Increase critical hit damage by 72%'
    ]
  }
};

// SEO data for Shanna
export const shannaSEO = {
  title: `${shannaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${shannaData.name}, a ${shannaData.rarity} ${shannaData.element} ${shannaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default shannaData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Shanna character
2. All placeholder values have been replaced with actual character data from shanna.astro
3. The export names are: shannaData, shannaSEO

4. In your .astro file, import like this:
   import { shannaData, shannaSEO } from './shanna.js';

5. Use the data:
   const characterData = shannaData;
   const title = shannaSEO.title;
   const description = shannaSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
