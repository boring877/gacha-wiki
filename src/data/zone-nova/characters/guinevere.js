// Guinevere Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const guinevereData = {
  // Basic Character Information
  name: 'Guinevere',
  image: 'Guinevere', // Character image identifier
  rarity: 'SSR',
  element: 'Fire',
  class: 'Tank',
  faction: 'Avalon',
  
  // Base Stats (Level 80)
  stats: {
    hp: '10,520',
    attack: '734',
    defense: '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Inferno',
      description: 'Deals fire damage equal to 120% of Defense to designated enemy unit'
    },
    auto: {
      name: 'Supreme Power',
      cooldown: '5.0s',
      description: 'Automatically grants self 58% block rate for 10 seconds (triggers every 5 seconds). [Block]: Has a chance to reduce incoming damage by 30%. Continuous damage ignores block determination'
    },
    ultimate: {
      name: 'Devastating Heavenly Fire',
      energyCost: '3',
      description: 'Normal Version: Launches [Pursuit] against designated enemy units. Deals fire damage equal to 240% of Defense. Gains 1 layer of [Domination Authority]. Reduces damage taken by 24% for 10 seconds. [Enhanced Ultimate] (Requires 10 Domination Authority stacks): Clears all [Domination Authority] to gain one passive life recovery count. Launches [Pursuit] against frontal targets. Deals fire damage equal to 240% of Defense. Reduces damage taken by 24% for 10 seconds'
    },
    passive: {
      name: 'Evil Star Explosion',
      description: 'Effect 1: After successful [Block], increases own defense by 60% for 10 seconds. Effect 2: After successful [Block], gains 1 layer of [Domination Authority], maximum 1 layer per second. When [Domination Authority] reaches 10 layers, can cast [Enhanced Ultimate]. Effect 3: When HP drops to 40% or below, triggers life recovery: Restores 58% max HP within 0.5 seconds, increases block rate to 100% for 10 seconds, increases critical resistance by 100% for 10 seconds. This effect has one initial trigger, can accumulate maximum once'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description: 'Effect 1: Self defense increases by 15%. Effect 2: For every 500 defense in battle, reduces damage taken by the whole team by 1.5%. Maximum 6 stacks (3,000 defense). Maximum team damage reduction: 9%. Scales with Guinevere\'s total defense (base + equipment + buffs)',
    requirements: {
      faction: 'Avalon',
      element: 'Fire'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: '[Block] After success: Increases own defense by 30% for 5 seconds. Passive life recovery count can be accumulated up to 2 times (allows Enhanced Ultimate to restore a second charge)' },
    { level: 2, effect: 'Launching normal ultimate skill can additionally gain 1 layer of [Domination Authority]. After launching enhanced ultimate skill, immediately gains 2 layers of [Domination Authority]' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4' },
    { level: 4, effect: 'Defense increased by 45%' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4' },
    { level: 6, effect: 'All resistance +15%, Fire resistance additional +15%. Starting passive life recovery count changes to 2 times' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Simple Birdcage',
    image: 'Guinevere-card',
    stats: {
      hp: '6,600',
      attack: '480',
      defense: '690'
    },
    effects: [
      'Defense increased by 64%',
      'Block rate after success reduces damage by 10%, lasts 5 seconds',
      'Immediately gains 30% maximum HP shield after battle starts'
    ]
  }
};

// SEO data for Guinevere
export const guinevereSEO = {
  title: `${guinevereData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${guinevereData.name}, a ${guinevereData.rarity} ${guinevereData.element} ${guinevereData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default guinevereData;
