// Frozen Heart Memory Card Data - Zone Nova
// Yuis's memory card

export const frozenHeartData = {
  // Basic Memory Information
  name: 'Frozen Heart',
  image: '/images/games/zone-nova/memories/Yuiscard.jpg',
  rarity: 'SSR',
  character: 'Yuis',
  
  // Memory Card Stats
  stats: {
    hp: 5040,
    attack: 780,
    defense: 474
  },
  
  // Memory Effects
  effects: [
    'Crit rate increased by 34%',
    'Equipment wearer\'s pursuit damage and crit damage increased by 68%'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Yuis into the ultimate pursuit damage dealer by dramatically increasing her critical hit capabilities and pursuit damage. It synergizes perfectly with her [Heaven\'s Punishment] stacking and Enhanced Ultimate mechanics.',
    synergies: [
      'Enhances the effectiveness of her Enhanced Ultimate\'s pursuit damage',
      'Works with her passive that triggers from allied ultimates and pursuits',
      'Synergizes with Awakening 6\'s pursuit damage mechanics and elemental penetration'
    ]
  }
};

// SEO data for Frozen Heart
export const frozenHeartSEO = {
  title: `${frozenHeartData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${frozenHeartData.name}, ${frozenHeartData.character}'s ${frozenHeartData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default frozenHeartData; 

