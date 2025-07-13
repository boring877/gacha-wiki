// Shu Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const shuData = {
  // Basic Character Information
  name: 'Shu',
  image: 'shu', // Use format: charactername (e.g., 'shu')
  rarity: 'SR', // SSR, SR, R
  element: 'Wind', // Fire, Ice, Wind, Holy, Chaos
  class: 'Debuffer', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Kaimiki', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '7,970', // e.g., '10,520'
    attack: '837', // e.g., '794'
    defense: '560' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Wind Assault',
      description: 'Deals wind damage equal to 120% of Attack to designated enemy unit'
    },
    auto: {
      name: 'Eye of the Storm',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Deals wind damage equal to 72% of Attack to enemy unit and surrounding enemies within 4 meters'
    },
    ultimate: {
      name: 'Sticky Bat Storm',
      energyCost: '3', // e.g., '5'
      description: 'Deals wind damage equal to 120% of Attack to enemies within 4 meters. Applies [Vulnerability]: Affected enemies take 34% increased damage for 15 seconds. With Awakening 6: Also applies [Weathering] debuff to affected enemies'
    },
    passive: {
      name: 'Fierce Wind Burst',
      description: 'Can apply [Weathering] debuff to enemies. Weathering: Each stack causes 14.4% of Attack as wind damage per second (maximum 5 stacks). With Awakening 1: When dealing damage to targets with continuous damage effects, self attack power increases by 20%'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Self damage increased by 20%',
    requirements: {
      faction: 'Kaimiki', // Same as character faction
      element: 'Wind' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When dealing damage to targets with continuous damage effects: Self attack power increases by 20%' },
    { level: 2, effect: 'Continuous damage effects penetration rate increased by 10%' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Continuous damage effects damage increased by 25%' },
    { level: 5, effect: '[Ultimate Skill] and [Passive] level and level cap +4' },
    { level: 6, effect: 'Ultimate skill can also apply [Weathering] debuff' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Busy Officer (忙里偷闲)',
    image: 'shucard', // Use format: characternamecard (e.g., 'shucard')
    stats: {
      hp: '5,000', // e.g., '8,600'
      attack: '500', // e.g., '480'
      defense: '500' // e.g., '690'
    },
    effects: [
      'When dealing continuous damage effects: Target takes 12% increased damage for 2 seconds'
    ]
  }
};

// SEO data for Shu
export const shuSEO = {
  title: `${shuData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${shuData.name}, a ${shuData.rarity} ${shuData.element} ${shuData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default shuData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Shu character
2. All placeholder values have been replaced with actual character data from shu.astro
3. The export names are: shuData, shuSEO

4. In your .astro file, import like this:
   import { shuData, shuSEO } from './shu.js';

5. Use the data:
   const characterData = shuData;
   const title = shuSEO.title;
   const description = shuSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
