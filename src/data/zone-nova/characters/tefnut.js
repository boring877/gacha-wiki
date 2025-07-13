// Tefnut Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const tefnutData = {
  // Basic Character Information
  name: 'Tefnut',
  image: 'Tefnut', // Use format: charactername (e.g., 'Tefnut')
  rarity: 'SR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Kemichi', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '6,694', // e.g., '10,520'
    attack: '1,088', // e.g., '794'
    defense: '442' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Claw Strike',
      description: 'Deals 120% of Attack as holy damage to designated enemy unit'
    },
    auto: {
      name: 'Ruthless Hunt',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Deals holy damage equal to 240% of Attack to designated enemy unit. Automatically triggers every 5 seconds'
    },
    ultimate: {
      name: 'Bloodthirsty Killing',
      energyCost: '8', // e.g., '5'
      description: 'Jumps toward the enemy unit and causes 960% attack power holy damage to the target. Prerequisite: Target must have 5 stacks of [Holy Erosion]. When used on a target with 5 Holy Erosion stacks: Additionally applies [Light Erosion] debuff which deals 180% attack power holy damage every 3 seconds'
    },
    passive: {
      name: 'Bloodthirst',
      description: 'Auto skills apply [Holy Erosion] DOT debuff to targets. [Holy Erosion]: Passive DOT that activates when auto skills are used. Deals 24% attack power holy damage every 3 seconds, maximum 5 stacks. DOT Combo: Build 5 stacks of [Holy Erosion], then use Ultimate to apply [Light Erosion] for simultaneous DOT damage'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combo Skill', // Usually 'Combination Skill'
    description: 'Self-caused damage increased by 20%',
    requirements: {
      faction: 'Kemichi', // Same as character faction
      element: 'Holy' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'When attacking targets with [Continuous Damage], critical rate increases by 10%' },
    { level: 2, effect: 'When self HP is 100%, attack power increases by 20%' },
    { level: 3, effect: '[Skills] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: '[Continuous Damage] damage increased by 25%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: '[Ultimate] makes target receive [Continuous Damage] with 20% increased damage for 15 seconds' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Secret Room Reality',
    image: 'Tefnutcard', // Use format: characternamecard (e.g., 'Tefnutcard')
    stats: {
      hp: '4,200', // e.g., '8,600'
      attack: '650', // e.g., '480'
      defense: '395' // e.g., '690'
    },
    effects: [
      'Continuous Damage Penetration Rate +36%'
    ]
  }
};

// SEO data for Tefnut
export const tefnutSEO = {
  title: `${tefnutData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${tefnutData.name}, a ${tefnutData.rarity} ${tefnutData.element} ${tefnutData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default tefnutData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Tefnut character
2. All placeholder values have been replaced with actual character data from tefnut.astro
3. The export names are: tefnutData, tefnutSEO

4. In your .astro file, import like this:
   import { tefnutData, tefnutSEO } from './tefnut.js';

5. Use the data:
   const characterData = tefnutData;
   const title = tefnutSEO.title;
   const description = tefnutSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
