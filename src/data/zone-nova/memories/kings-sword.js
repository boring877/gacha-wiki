// King's Sword Memory Data - Zone Nova
// Merlin's Memory Card

export const kingsSwordData = {
  // Basic Memory Information
  id: 'kings-sword',
  slug: 'kings-sword',
  name: "King's Sword",
  image: '/images/games/zone-nova/memories/Merlincard.jpg',
  rarity: 'SSR',
  character: 'Merlin',
  detailUrl: '/guides/zone-nova/characters/merlin/',
  
  // Memory Stats
  stats: {
    hp: 5280,
    attack: 857,
    defense: 348
  },
  
  // Memory Effects
  effects: [
    'Attack increased by 40%',
    'Must kill damage increased by 40% when the target is the only enemy',
    'Critical rate increased by 12%'
  ]
};

// SEO data for the memory page
export const kingsSwordSEO = {
  title: `${kingsSwordData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${kingsSwordData.name}, a ${kingsSwordData.rarity} memory card for ${kingsSwordData.character} in Zone Nova. Includes stats, effects, and character synergy.`
};

// Export default for easy importing
export default kingsSwordData; 
