// Lily Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const lilyData = {
  // Basic Character Information
  name: 'Lily',
  image: 'Lily', // Character image identifier
  rarity: 'SSR',
  element: 'Ice', // Water element maps to Ice in Zone Nova
  class: 'Guardian', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Sapphire', // Based on combination skill mentioning "Sapphire" characters

  // Base Stats (Level 80)
  stats: {
    hp: '10,520',
    attack: '480',
    defense: '1,625',
  },

  // Skills
  skills: {
    normal: {
      name: 'Frost Armor Thorn',
      cooldown: '2.0s',
      description: 'Deals ice damage equal to 120% of own defense to a designated enemy unit.',
    },
    auto: {
      name: 'Frost Flow Defense Stance',
      cooldown: '5.0s',
      description:
        'Grants 58% damage mitigation rate to self, lasting 5 seconds. [Mitigation]: Has a chance to reduce this damage by 30%; critical hit damage ignores mitigation.',
    },
    ultimate: {
      name: 'Breaking Formation · Final Scene',
      cooldown: '1.0s',
      energyCost: '3',
      description:
        'Deals ice damage equal to 240% of own defense to a designated enemy unit, gains 1 stack of [Battle Intention], and reduces self-damage taken by 24% for 10 seconds. [Enhanced Ultimate]: Clear all [Battle Intention] stacks, gain a shield with an amount equal to 24% of max HP, and for 10 seconds, nullify all incoming damage (increased to 100%), remove all ongoing damage effects, deal ice damage equal to 480% of own defense to a designated enemy unit, and reduce self-damage taken by 24% for 10 seconds.',
    },
    passive: {
      name: 'Hundred-Battle Ice Bone',
      description:
        'Effect 1: [Mitigation] After success, increase own defense by 60% for 5 seconds; repeated triggers can extend duration. Effect 2: [Mitigation] After success, gain 1 stack of [Battle Intention]; maximum 1 stack per second. When [Battle Intention] reaches 10 stacks, can cast [Enhanced Ultimate Skill]. Effect 3: After entering battle and when own HP drops to 70%/40%/10% or below, gain a shield; each shield can trigger at most once. Shield amount equals 24% of max HP, and within 10 seconds, mitigation rate rises to 100%, removing all ongoing damage effects. Effect 4: After gaining a shield each time, instantly recover 10% of max HP.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Effect 1: Own defense increases by 15%. Effect 2: At the start of battle, every 500 defense reduces team-wide damage taken by 1.5%, up to 6 times.',
    requirements: {
      faction: 'Sapphire',
      element: 'Ice',
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        '[Mitigation] After success, additionally increase own defense by 30% for 5 seconds; casting a normal ultimate skill grants 1 extra stack of [Battle Intention]; after casting an enhanced ultimate skill, immediately obtain 2 stacks of [Battle Intention].',
    },
    {
      level: 2,
      effect:
        'After entering battle, all units on my side gain 20 layers of [Frost Armor]; each time taking damage, remove 1 layer of [Frost Armor], reducing that damage by 50%; [Frost Armor] expires after 20 seconds.',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2',
    },
    { level: 4, effect: 'Defense increases by 45%' },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [Ultimate Skill], and [Passive] level and level cap +2',
    },
    {
      level: 6,
      effect: 'All resistances increase by 15%, and ice resistance additionally increases by 15%.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'In the Cafe, Sneaking a Bite',
    image: 'Lilycard',
    stats: {
      hp: '6,600',
      attack: '480',
      defense: '690',
    },
    effects: [
      'Defense increases by 64%',
      'After successful mitigation, damage taken is reduced by 10% for 5 seconds. When the wearer has a shield, damage taken is reduced by 18%.',
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Defense Scaling',
    'Shield',
    'Damage Reduction',
    'Enhanced Ultimate',
    'Mitigation',
    'Ice',
    'Tank',
  ],
};

// SEO data for Lily
export const lilySEO = {
  title: `${lilyData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${lilyData.name}, a ${lilyData.rarity} ${lilyData.element} ${lilyData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default lilyData;
