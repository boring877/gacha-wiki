// Morgan Le Fay Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const morganLeFayData = {
  // Basic Character Information
  name: 'Morgan Le Fay',
  image: 'Morgan', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'Buffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Buffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Avalon', // Savir, etc.

  // Base Stats (Level 80)
  stats: {
    hp: '8,180', // e.g., '10,520'
    attack: '1,004', // e.g., '794'
    defense: '728', // e.g., '1,232'
  },

  // Skills
  skills: {
    normal: {
      name: 'Crushing Strike',
      description: 'Deals 120% of Attack as Holy DMG to the target enemy.',
    },
    auto: {
      name: 'Glory Ode',
      cooldown: '5.0s', // e.g., '5.0s'
      description:
        "Grants all allies [Blessing]. While [Blessing] is active, the character's DMG dealt is increased by 36% and DMG taken is reduced by 12%. [Blessing] disappears after taking 5 instances of DMG or after 10s.",
    },
    ultimate: {
      name: 'Holy Sword Summon',
      energyCost: '3', // e.g., '5'
      description:
        "Drops a [Destruction Holy Sword] at the position of the ally with the highest ATK, dealing 240% ATK as Holy DMG to all enemies within a 5m radius, and increases all allies within range's ATK by 60% and DMG dealt by 48% for 10s.\n\nDrops a [Guardian Holy Sword] at the position of the ally with the highest DEF, dealing 240% ATK as Holy DMG to all enemies within a 5m radius, and increases all allies within range's DEF by 60% and reduces DMG taken by 19% for 10s.",
    },
    passive: {
      name: "King's Advent",
      description:
        "Upon entering battle, immediately gains 3 Energy and Energy gain efficiency is reduced by 30% for 10s.\n\nUpon entering battle, 29% of Morgan Le Fay's ATK/DEF/HP is converted and transferred to the ally with the highest ATK/DEF/HP respectively.\n\nEach time Morgan Le Fay uses a skill, immediately gain 1 Energy.",
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Team Tech', // Usually 'Combination Skill'
    description:
      "When the team contains 2 [Avalon] characters or 2 [Holy] characters:\n\nAt the start of battle, all allies' DMG dealt is increased by 10%.\n\nFor every 500 ATK, all allies' DMG dealt is increased by an additional 5%, up to 6 times.",
    requirements: {
      faction: 'Avalon', // Same as character faction
      element: 'Holy', // Same as character element
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'The passive effect [Upon entering battle, immediately gain 3 Energy and Energy gain efficiency is reduced by 30% for 10s] is changed to [Upon entering battle, immediately gain 5 Energy].',
    },
    { level: 2, effect: 'Upon entering battle, all allies immediately gain [Blessing].' },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [Ultimate], and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'All allies can gain the conversion ability from the passive effect.',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [Ultimate], and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        "[Destruction Holy Sword] additionally increases all allies within range's Elemental RES PEN by 10%.\n\n[Guardian Holy Sword] additionally increases all allies within range's Elemental RES by 10%.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Absolutely Perfect Arms',
    image: 'Morgancard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '7,800', // Base 6000 + 30% increase
      attack: '780', // Base 600 + 30% increase
      defense: '780', // Base 600 + 30% increase
    },
    effects: [
      'ATK increased by 30%',
      'DEF increased by 30%',
      'HP increased by 30%',
      "When the equipper is of Holy attribute, after dealing Normal Attack DMG, all allies' Energy gain efficiency is increased by 18%, stacking up to 4 times, lasting 5s",
    ],
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Buff', 'Attack Boost', 'Defense Boost', 'Support', 'Holy'],
};

// SEO data for Morgan Le Fay
export const morganLeFaySEO = {
  title: `${morganLeFayData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${morganLeFayData.name}, a ${morganLeFayData.rarity} ${morganLeFayData.element} ${morganLeFayData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default morganLeFayData;
