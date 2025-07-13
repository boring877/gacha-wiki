// CHARACTER_NAME Character Data - Zone Nova
// Based on CharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file
// Example: If creating Arthur, copy this as arthur.js alongside arthur.astro

export const characterNameData = {
  // Basic Character Information
  name: 'CHARACTER_NAME',
  image: 'character_image', // Use format: charactername (e.g., 'penny')
  rarity: 'RARITY', // SSR, SR, R
  element: 'ELEMENT', // Fire, Ice, Wind, Holy, Chaos
  class: 'CLASS', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'FACTION', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: 'BASE_HP', // e.g., '10,520'
    attack: 'BASE_ATTACK', // e.g., '794'
    defense: 'BASE_DEFENSE' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'NORMAL_ATTACK_NAME',
      description: 'NORMAL_ATTACK_DESCRIPTION'
    },
    auto: {
      name: 'AUTO_SKILL_NAME',
      cooldown: 'COOLDOWN', // e.g., '5.0s'
      description: 'AUTO_SKILL_DESCRIPTION'
    },
    ultimate: {
      name: 'ULTIMATE_NAME',
      energyCost: 'ENERGY_COST', // e.g., '5'
      description: 'ULTIMATE_DESCRIPTION'
    },
    passive: {
      name: 'PASSIVE_NAME',
      description: 'PASSIVE_DESCRIPTION'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'TEAM_SKILL_NAME', // Usually 'Combination Skill'
    description: 'TEAM_SKILL_DESCRIPTION',
    requirements: {
      faction: 'FACTION_NAME', // Same as character faction
      element: 'ELEMENT_NAME' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'AWAKENING_1_EFFECT' },
    { level: 2, effect: 'AWAKENING_2_EFFECT' },
    { level: 3, effect: 'AWAKENING_3_EFFECT' },
    { level: 4, effect: 'AWAKENING_4_EFFECT' },
    { level: 5, effect: 'AWAKENING_5_EFFECT' },
    { level: 6, effect: 'AWAKENING_6_EFFECT' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'MEMORY_CARD_NAME',
    image: 'memory_card_image', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: 'MEMORY_HP', // e.g., '8,600'
      attack: 'MEMORY_ATTACK', // e.g., '480'
      defense: 'MEMORY_DEFENSE' // e.g., '690'
    },
    effects: [
      'MEMORY_EFFECT_1',
      'MEMORY_EFFECT_2',
      'MEMORY_EFFECT_3'
    ]
  }
};

// SEO data for CHARACTER_NAME
export const characterNameSEO = {
  title: `${characterNameData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${characterNameData.name}, a ${characterNameData.rarity} ${characterNameData.element} ${characterNameData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default characterNameData;

/*
USAGE INSTRUCTIONS:

1. Copy this file to your character's directory
2. Rename it to match your character (e.g., arthur.js)
3. Replace all placeholder values with actual character data:
   - CHARACTER_NAME → Arthur
   - character_image → arthur
   - RARITY → SSR
   - etc.

4. Update the export names to match your character:
   - characterNameData → arthurData
   - characterNameSEO → arthurSEO

5. In your .astro file, import like this:
   import { arthurData, arthurSEO } from './arthur.js';

6. Use the data:
   const characterData = arthurData;
   const title = arthurSEO.title;
   const description = arthurSEO.description;

EXAMPLE COMPLETED FILE NAME: arthur.js
EXAMPLE EXPORT NAMES: arthurData, arthurSEO
EXAMPLE IMPORT: import { arthurData, arthurSEO } from './arthur.js';

Based on the successful implementation in penny.js and penny.astro
*/
