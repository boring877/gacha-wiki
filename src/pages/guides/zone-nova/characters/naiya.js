// Naiya Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const naiyaData = {
  // Basic Character Information
  name: 'Naiya',
  image: 'naiya', // Character image identifier
  rarity: 'SSR',
  element: 'Ice',
  class: 'Buffer',
  faction: 'Avalon',
  
  // Base Stats (Level 80)
  stats: {
    hp: '9,564',
    attack: '1,004',
    defense: '672'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Frost Strike',
      description: 'Deals 120% attack power as ice damage to designated enemy unit'
    },
    auto: {
      name: 'War Intent Detection',
      cooldown: 'Auto-trigger: 5.0s',
      description: 'Automatically identifies ally with highest attack power within 6-meter radius. Grants War Intent: +20% attack power and +15% critical rate for 12 seconds. War Intent stacks up to 3 times on same target'
    },
    ultimate: {
      name: 'Hyper-Carry Awakening',
      energyCost: '3',
      description: 'Deals ice damage equal to 180% attack power to all enemies within 6-meter radius. Grants all allies Enhanced War Intent for 15 seconds: +30% attack power, +20% critical rate, +15% critical damage. Ally with highest attack receives Hyper-Carry Status: Additional +25% damage for 20 seconds'
    },
    passive: {
      name: 'Tactical Analysis',
      description: 'When allies with War Intent deal critical hits, Naiya gains Tactical Stack (max 5). Each stack: +3% ice damage and +2% energy recovery. At 5 stacks: Next ultimate costs 1 less energy and applies War Intent to entire team'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Strategic Command',
    description: 'War Intent effectiveness increased by 25%. War Intent duration increased by 5 seconds. Hyper-Carry Status grants additional +10% attack speed. Enhances all of Naiya\'s support capabilities',
    requirements: {
      faction: 'Avalon',
      element: 'Ice'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'After using ultimate: All friendly units\' attack power increased by 20% for 20 seconds. Provides additional team-wide buff stacking' },
    { level: 2, effect: 'When characters with [War Intent] defeat an enemy: Recovers 1 energy for the team. Triggers at most once per battle. Provides energy sustain for the team' },
    { level: 3, effect: 'Skill and Normal Attack: Level and level cap increased by +4' },
    { level: 4, effect: 'Characters with [War Intent] when attacking: Deal an additional 500% attack power as ice damage. Triggers at most once every 10 seconds. Massive damage amplification for buffed allies' },
    { level: 5, effect: 'Ultimate Skill and Passive: Level and level cap increased by +4' },
    { level: 6, effect: 'Ultimate skill duration extended to 20 seconds. Damage multiplier increased by 100%. Significantly enhances ultimate effectiveness and duration' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Frost Dominion',
    image: 'naiyacard', // Memory card image identifier
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600'
    },
    effects: [
      'Attack power increased by 40%',
      'Team Must-Kill Damage increased by 40% for 5 seconds after Ultimate: Enhances team finishing power after ultimate usage'
    ]
  }
};

// SEO data for Naiya
export const naiyaSEO = {
  title: `${naiyaData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${naiyaData.name}, a ${naiyaData.rarity} ${naiyaData.element} ${naiyaData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default naiyaData;
