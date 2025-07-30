// Yuis Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const yuisData = {
  // Basic Character Information
  name: 'Yuis',
  image: 'Yuis', // Use format: charactername (e.g., 'Yuis')
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Rogue', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Odius', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '8,033', // e.g., '10,520'
    attack: '1,305', // e.g., '794'
    defense: '530', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Thunder Strike',
      description: 'Deals 120% attack power as Holy damage to enemy unit',
    },
    auto: {
      name: 'Divine Thunder',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        'Immediately gain 2 layers [Sky Extreme], and fire 4 flying swords, deal 720% attack power to current target holy damage',
    },
    ultimate: {
      name: "Absolute Heaven's Punishment",
      energyCost: '4', // e.g., '5'
      description:
        'Immediately gain 2 layers [Sky Extreme], and fire 1 large flying sword, deal 720% attack power holy damage to current target. [Enhanced Ultimate Skill]: Consume all [Sky Extreme], lock onto current target and continuously drop flying swords, dealing a total of 1440% attack power holy damage, this damage is considered [Extra Attack] damage. Repeatedly using enhanced ultimate skill to attack target can refresh [Extra Attack] duration',
    },
    passive: {
      name: "Heaven's Judgment",
      description:
        'When other friendly units use ultimate skills, Yuis gains 2 layers [Sky Extreme] When other friendly units perform [Extra Attack], Yuis gains 2 layers [Sky Extreme] When having 16 layers [Sky Extreme], can cast [Enhanced Ultimate Skill] When able to cast [Enhanced Ultimate Skill], no longer gain [Sky Extreme] After casting [Enhanced Ultimate Skill], critical rate increases by 24% and critical damage increases by 48% for 20 seconds',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description:
      'Self attack power increases by 10%. At battle start, every 500 attack power increases self crit damage by 7.5%, maximum 6 times (45% max)',
    requirements: {
      faction: 'Odius', // Same as character faction
      element: 'Holy', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        "At battle start: Immediately gain 16 stacks of [Heaven's Punishment]. [Enhanced Ultimate] energy consumption reduced by 3",
    },
    {
      level: 2,
      effect:
        'After casting enhanced ultimate skill, immediately gain 4 layers [Sky Extreme], and critical damage increases by 30% for 20 seconds',
    },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Holy damage increased by 30%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    {
      level: 6,
      effect:
        "After Yuis deals 12 extra attack damages to the same target, additionally drop one large sword, dealing 150% attack power holy damage, this damage is considered extra attack damage Yuis's extra attack damage penetrates 20% elemental resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Frozen Heart',
    image: 'Yuiscard', // Use format: characternamecard (e.g., 'Yuiscard')
    stats: {
      hp: '5,040', // e.g., '8,600'
      attack: '780', // e.g., '480'
      defense: '474', // e.g., '690'
    },
    effects: [
      'Crit rate increased by 34%. Equipment wearers extra attack damage, critical damage increases by 68% ',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Crit Rate', 'Crit Dmg', 'Enhanced Ultimate', 'Extra Attack'],
};

// SEO data for Yuis
export const yuisSEO = {
  title: `${yuisData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${yuisData.name}, a ${yuisData.rarity} ${yuisData.element} ${yuisData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default yuisData;

/*
USAGE INSTRUCTIONS:

1. This file has been created for Yuis character
2. All placeholder values have been replaced with actual character data from yuis.astro
3. The export names are: yuisData, yuisSEO

4. In your .astro file, import like this:
   import { yuisData, yuisSEO } from './yuis.js';

5. Use the data:
   const characterData = yuisData;
   const title = yuisSEO.title;
   const description = yuisSEO.description;

Based on the successful implementation in penny.js and penny.astro
*/
