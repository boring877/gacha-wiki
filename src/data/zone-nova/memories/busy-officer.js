// Busy Officer Memory Card Data - Zone Nova
// Shu's memory card

export const busyOfficerData = {
  // Basic Memory Information
  name: 'Busy Officer (忙里偷闲)',
  image: '/images/characters/shucard.jpg',
  rarity: 'SR',
  character: 'Shu',
  
  // Memory Card Stats
  stats: {
    hp: 5000,
    attack: 500,
    defense: 500
  },
  
  // Memory Effects
  effects: [
    'When dealing continuous damage effects: Target takes 12% increased damage for 2 seconds'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card perfectly complements Shu\'s debuffer role by amplifying the effectiveness of his continuous damage effects. It creates a damage amplification window that synergizes with his [Weathering] debuff stacks.',
    synergies: [
      'Enhances damage from his [Weathering] debuff stacks (up to 5 stacks)',
      'Works with his passive "Fierce Wind Burst" continuous damage application',
      'Synergizes with Awakening 6 which allows ultimate to apply [Weathering]'
    ]
  }
};

// SEO data for Busy Officer
export const busyOfficerSEO = {
  title: `${busyOfficerData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${busyOfficerData.name}, ${busyOfficerData.character}'s ${busyOfficerData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default busyOfficerData; 

