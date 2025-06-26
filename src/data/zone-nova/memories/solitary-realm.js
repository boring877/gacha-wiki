// Solitary Realm Memory Card Data - Zone Nova
// Kela's memory card

export const solitaryRealmData = {
  // Basic Memory Information
  name: 'Solitary Realm (一人之境)',
  image: '/images/games/zone-nova/memories/kelacard.jpg',
  rarity: 'SR',
  character: 'Kela',
  
  // Memory Card Stats
  stats: {
    hp: 5000,
    attack: 500,
    defense: 500
  },
  
  // Memory Effects
  effects: [
    'Solitary Realm (一人之境): Healing amount increased by 30%',
    'Protection Effect: When healing a target below 50% max HP, the target receives 8% damage reduction for 10 seconds'
  ],
  
  // Character Synergy Information
  characterSynergy: {
    description: 'This memory card transforms Kela into the ultimate support healer by significantly boosting her healing output and providing crucial damage reduction. The protection effect stacks with her passive and awakening abilities for maximum survivability.',
    synergies: [
      'Synergizes with her passive that increases healing for allies below 50% health',
      'Stacks with Awakening 1\'s damage reduction for allies below 50% health',
      'Enhances both her auto skill "Sacred Healing" and ultimate "Divine Intervention"'
    ]
  }
};

// SEO data for Solitary Realm
export const solitaryRealmSEO = {
  title: `${solitaryRealmData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${solitaryRealmData.name}, ${solitaryRealmData.character}'s ${solitaryRealmData.rarity} memory card in Zone Nova. Includes effects, stats, and synergies.`
};

// Export default for easy importing
export default solitaryRealmData; 

