// Zone Nova Character Template - JavaScript Version
// Copy this template and fill in all [PLACEHOLDER] values to create a new character

export const characterTemplate = {
  // Basic Character Information
  name: '[CHARACTER_NAME]',
  image: '[CHARACTER_IMAGE]', // Use format: charactername (e.g., 'penny')
  rarity: '[RARITY]', // SSR, SR, R
  element: '[ELEMENT]', // Fire, Ice, Wind, Holy, Chaos
  class: '[CLASS]', // Tank, DPS, Buffer, Debuffer, Healer
  faction: '[FACTION]', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '[BASE_HP]', // e.g., '10,520'
    attack: '[BASE_ATTACK]', // e.g., '794'
    defense: '[BASE_DEFENSE]', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: '[NORMAL_ATTACK_NAME]',
      description: '[NORMAL_ATTACK_DESCRIPTION]',
    },
    auto: {
      name: '[AUTO_SKILL_NAME]',
      cooldown: '[COOLDOWN]', // e.g., '5.0s'
      description: '[AUTO_SKILL_DESCRIPTION]',
    },
    ultimate: {
      name: '[ULTIMATE_NAME]',
      energyCost: '[ENERGY_COST]', // e.g., '5'
      description: '[ULTIMATE_DESCRIPTION]',
    },
    passive: {
      name: '[PASSIVE_NAME]',
      description: '[PASSIVE_DESCRIPTION]',
    },
  },

  // Team Skill
  teamSkill: {
    name: '[TEAM_SKILL_NAME]', // Usually 'Combination Skill'
    description: '[TEAM_SKILL_DESCRIPTION]',
    requirements: {
      faction: '[FACTION_NAME]', // Same as character faction
      element: '[ELEMENT_NAME]', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: '[AWAKENING_1_EFFECT]' },
    { level: 2, effect: '[AWAKENING_2_EFFECT]' },
    { level: 3, effect: '[AWAKENING_3_EFFECT]' },
    { level: 4, effect: '[AWAKENING_4_EFFECT]' },
    { level: 5, effect: '[AWAKENING_5_EFFECT]' },
    { level: 6, effect: '[AWAKENING_6_EFFECT]' },
  ],

  // Memory Card
  memoryCard: {
    name: '[MEMORY_CARD_NAME]',
    image: '[MEMORY_CARD_IMAGE]', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '[MEMORY_HP]', // e.g., '8,600'
      attack: '[MEMORY_ATTACK]', // e.g., '480'
      defense: '[MEMORY_DEFENSE]', // e.g., '690'
    },
    effects: ['[MEMORY_EFFECT_1]', '[MEMORY_EFFECT_2]', '[MEMORY_EFFECT_3]'],
  },
};

// Example filled template (Penny's data for reference)
export const pennyExample = {
  name: 'Penny',
  image: 'penny',
  rarity: 'SSR',
  element: 'Wind',
  Role: 'Tank',
  faction: 'Savir',

  stats: {
    hp: '10,520',
    attack: '794',
    defense: '1,232',
  },

  skills: {
    normal: {
      name: 'Shield Impact',
      description: 'Deals Wind damage equal to 120% of own defense to target enemy.',
    },
    auto: {
      name: 'Divine Shield Wind',
      cooldown: '5.0s',
      description:
        'Deals Wind damage equal to 120% of own defense to target enemy, and reduces damage taken by self for 10 seconds by 24%.',
    },
    ultimate: {
      name: 'Shield of Aethyss',
      energyCost: '5',
      description:
        'All allied characters gain a shield equal to 60% of defense, and take 24% less damage for 10 seconds.',
    },
    passive: {
      name: "Aethyss's Call for Help",
      description:
        'After taking damage, gain 1 stack of [Fortitude], increasing own defense by 4.8%, max 30 stacks.',
    },
  },

  teamSkill: {
    name: 'Combination Skill',
    description:
      'Own defense increases by 15%. At battle start, every 500 defense reduces team damage taken by 1.5%, max 6 times.',
    requirements: {
      faction: 'Savir',
      element: 'Wind',
    },
  },

  awakenings: [
    { level: 1, effect: 'After taking damage, additionally gain 1 stack of [Fortitude]' },
    {
      level: 2,
      effect:
        'When [Fortitude] reaches 30 stacks, all allies immediately gain special attack shield and damage reduction effect',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Defense increased by 45%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect: 'All resistance increased by 15%, Wind resistance additionally increased by 15%',
    },
  ],

  memoryCard: {
    name: 'Her Trainer',
    image: 'pennycard',
    stats: {
      hp: '8,600',
      attack: '480',
      defense: '690',
    },
    effects: [
      'Defense increased by 60%',
      'After using ultimate skill, equipped character takes 10% less damage for 5 seconds',
      'Shield amount applied by ultimate skills increased by 20%',
    ],
  },
};

// SEO helper function
export function generateSEO(characterData) {
  return {
    title: `${characterData.name} - Zone Nova Character Guide`,
    description: `Complete guide for ${characterData.name}, a ${characterData.rarity} ${characterData.element} ${characterData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
  };
}

// Validation helper to check if all placeholders are filled
export function validateCharacterData(characterData) {
  const errors = [];

  function checkForPlaceholders(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;

      if (typeof value === 'string' && value.includes('[') && value.includes(']')) {
        errors.push(`Placeholder found at ${currentPath}: ${value}`);
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        checkForPlaceholders(value, currentPath);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item === 'object' && item !== null) {
            checkForPlaceholders(item, `${currentPath}[${index}]`);
          } else if (typeof item === 'string' && item.includes('[') && item.includes(']')) {
            errors.push(`Placeholder found at ${currentPath}[${index}]: ${item}`);
          }
        });
      }
    }
  }

  checkForPlaceholders(characterData);

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Usage Instructions:
/*
To create a new character:

1. Copy the characterTemplate object
2. Replace all [PLACEHOLDER] values with actual character data
3. Use the validateCharacterData function to check for missed placeholders
4. Import this data into your Astro component

Example:
```javascript
import { characterTemplate, validateCharacterData, generateSEO } from './CharacterTemplate.js';

// Copy and fill the template
const myCharacter = {
  ...characterTemplate,
  name: 'Arthur',
  image: 'arthur',
  // ... fill all other fields
};

// Validate
const validation = validateCharacterData(myCharacter);
if (!validation.isValid) {
  console.error('Missing placeholders:', validation.errors);
}

// Generate SEO
const seo = generateSEO(myCharacter);
```
*/
