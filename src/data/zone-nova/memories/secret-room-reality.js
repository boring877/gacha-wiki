// Secret Room Reality Memory Card Data - Zone Nova
// Tefnut's memory card

export const secretRoomRealityData = {
  // Basic Memory Information
  name: 'Secret Room Reality',
  image: '/images/games/zone-nova/memories/Tefnutcard.jpg',
  rarity: 'SR',
  character: 'Tefnut',
  
  // Memory Card Stats
  stats: {
    hp: 4200,
    attack: 650,
    defense: 395
  },
  
  // Memory Effects
  effects: [
    'Continuous Damage Penetration Rate +36%'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Tefnut into a continuous damage powerhouse by significantly increasing the penetration rate of her DOT effects. It synergizes perfectly with her [Holy Erosion] and [Light Erosion] debuffs.',
    synergies: [
      'Enhances the penetration of her [Holy Erosion] stacks (up to 5 stacks)',
      'Works with her ultimate\'s [Light Erosion] DOT effect',
      'Synergizes with Awakening 4\'s 25% continuous damage increase'
    ]
  }
};

// SEO data for Secret Room Reality
export const secretRoomRealitySEO = {
  title: `${secretRoomRealityData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${secretRoomRealityData.name}, ${secretRoomRealityData.character}'s ${secretRoomRealityData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default secretRoomRealityData; 

