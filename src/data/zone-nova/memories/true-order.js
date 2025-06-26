// True Order Memory Card Data - Zone Nova
// Loki's memory card

export const trueOrderData = {
  // Basic Memory Information
  name: 'True Order (真正的秩序)',
  image: '/images/games/zone-nova/memories/Lokicard.jpg',
  rarity: 'SSR',
  character: 'Loki',
  
  // Memory Card Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600
  },
  
  // Memory Effects
  effects: [
    'Attack Enhancement: Attack power increased by 40%',
    'Vulnerability Mark: The last enemy hit by any attack takes 24% increased damage'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Loki into the ultimate debuff amplifier by significantly boosting his attack power and adding a vulnerability mark effect. The 24% increased damage mark synergizes perfectly with his passive vulnerability stacking.',
    synergies: [
      'Amplifies his passive "Art of Deception" vulnerability effects for massive damage multipliers',
      'Works with his ultimate [Chaos] debuff for maximum enemy vulnerability',
      'Enhances his auto skill [Seal] effects with additional damage amplification'
    ]
  }
};

// SEO data for True Order
export const trueOrderSEO = {
  title: `${trueOrderData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${trueOrderData.name}, ${trueOrderData.character}'s ${trueOrderData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default trueOrderData; 

