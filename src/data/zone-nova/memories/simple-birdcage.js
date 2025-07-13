// Simple Birdcage Memory Data - Zone Nova
// Guinevere's Memory Card

export const simpleBirdcageData = {
  // Basic Memory Information
  id: 'simple-birdcage',
  slug: 'simple-birdcage',
  name: 'Simple Birdcage',
  image: '/images/games/zone-nova/memories/Guinevere-card.jpg',
  rarity: 'SSR',
  character: 'Guinevere',
  detailUrl: '/guides/zone-nova/characters/guinevere/',
  
  // Memory Stats
  stats: {
    hp: 6600,
    attack: 480,
    defense: 690
  },
  
  // Memory Effects
  effects: [
    'Defense increased by 64%',
    'Block rate after success reduces damage by 10%, lasts 5 seconds',
    'Immediately gains 30% maximum HP shield after battle starts'
  ]
};

// SEO data for the memory page
export const simpleBirdcageSEO = {
  title: `${simpleBirdcageData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${simpleBirdcageData.name}, a ${simpleBirdcageData.rarity} memory card for ${simpleBirdcageData.character} in Zone Nova. Includes stats, effects, and character synergy.`
};

// Export default for easy importing
export default simpleBirdcageData; 
