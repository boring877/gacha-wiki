// Behind the Regret Memory Card Data - Zone Nova
// Mordred's memory card

export const behindTheRegretData = {
  // Basic Memory Information
  name: 'Behind the Regret',
  image: '/images/games/zone-nova/memories/mordredcard.jpg',
  rarity: 'SR',
  character: 'Mordred',
  
  // Memory Card Stats
  stats: {
    hp: 5000,
    attack: 500,
    defense: 500
  },
  
  // Memory Effects
  effects: [
    'HP increased by 24%',
    'Self healing amount increased by 30%'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Mordred into an unstoppable HP-scaling tank by significantly boosting both her maximum HP and healing effectiveness. The 24% HP increase enhances all her HP-scaling abilities while the 30% healing boost amplifies her sustain.',
    synergies: [
      'Amplifies all her HP-scaling damage abilities (auto skill, ultimate, and Awakening 6)',
      'Enhances her passive healing from normal attacks and below-50% HP bonus',
      'Works with Awakening 4\'s 30% HP increase for massive HP scaling potential'
    ]
  }
};

// SEO data for Behind the Regret
export const behindTheRegretSEO = {
  title: `${behindTheRegretData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${behindTheRegretData.name}, ${behindTheRegretData.character}'s ${behindTheRegretData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default behindTheRegretData; 
