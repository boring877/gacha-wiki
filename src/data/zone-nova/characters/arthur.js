// Arthur Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js
// Instructions: Copy this file to the same directory as your character's .astro file

export const arthurData = {
  // Basic Character Information
  name: 'Arthur',
  image: 'Arthur', // Use format: charactername (e.g., 'penny')
  rarity: 'SSR', // SSR, SR, R
  element: 'Holy', // Fire, Ice, Wind, Holy, Chaos
  class: 'DPS', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Camelot', // Savir, etc.
  
  // Base Stats (Level 80)
  stats: {
    hp: '8,033', // e.g., '10,520'
    attack: '1,305', // e.g., '794'
    defense: '530' // e.g., '1,232'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Oath Victory Sword',
      description: 'Deals holy damage equal to 120% of Attack to designated enemy.'
    },
    auto: {
      name: 'King\'s Sword',
      cooldown: '5.0s', // e.g., '5.0s'
      description: 'Deals holy damage equal to 240% of Attack to frontal enemy units. For each target hit: Holy damage increases by 12%, maximum 4 layers, lasts 5 seconds. Maximum Potential: 48% holy damage increase with 4+ targets.'
    },
    ultimate: {
      name: 'Imperial Sacred Judgment',
      energyCost: '6', // e.g., '5'
      description: 'Normal Mode: Deals holy damage equal to 600% of Attack to frontal enemy units. Enhanced Mode Access: In [Support Mode], can trigger [Enhanced Ultimate] within 5 seconds after normal ultimate. Enhanced Ultimate: Attack increases by 36% for 10 seconds, deals holy damage equal to 720% of Attack to frontal enemy units. With Awakening 2: Enhanced ultimate holy damage increases by 30%.'
    },
    passive: {
      name: 'Royal Dominance',
      description: 'Each ultimate use: Increases attack by 12% and defense by 5.6%. Maximum 3 layers, lasts 10 seconds. Full Stack Potential: 36% attack + 16.8% defense.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill', // Usually 'Combination Skill'
    description: 'Self critical rate increases by 7.5%. Battle start: Every 15% critical rate adds 5% holy damage, maximum 6 times. Maximum Potential: 30% holy damage increase with optimal critical rate.',
    requirements: {
      faction: 'Camelot', // Same as character faction
      element: 'Holy' // Same as character element
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Critical rate increases by 15%.' },
    { level: 2, effect: 'When releasing [Enhanced Ultimate], holy damage increases by 30%.' },
    { level: 3, effect: '[Skill] and [Normal Attack] level and level cap +4.' },
    { level: 4, effect: 'Ultimate damage increases by 35%.' },
    { level: 5, effect: '[Ultimate] and [Passive] level and level cap +4.' },
    { level: 6, effect: '[Enhanced Ultimate] ignores target\'s 20% elemental resistance.' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Summer Afternoon Rest Time',
    image: 'Arthurcard', // Use format: characternamecard (e.g., 'pennycard')
    stats: {
      hp: '4,200', // e.g., '8,600'
      attack: '650', // e.g., '480'
      defense: '395' // e.g., '690'
    },
    effects: [
      'Attack increases by 20%',
      'When there\'s one enemy on the field, attack additionally increases by 5%, maximum 4 times',
      'Total Single-Target Bonus: 20% + 20% = 40% attack boost vs single targets'
    ]
  }
};

// SEO data for Arthur
export const arthurSEO = {
  title: `${arthurData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${arthurData.name}, a ${arthurData.rarity} ${arthurData.element} ${arthurData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default arthurData;
