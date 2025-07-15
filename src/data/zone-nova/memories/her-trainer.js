// Her Trainer Memory Data - Zone Nova
// Penny's Memory Card

export const herTrainerData = {
  // Basic Memory Information
  id: 'her-trainer',
  slug: 'her-trainer',
  name: 'Her Trainer',
  image: '/images/games/zone-nova/memories/pennycard.jpg',
  rarity: 'SSR',
  character: 'Penny',
  detailUrl: '/guides/zone-nova/characters/penny/',

  // Memory Stats
  stats: {
    hp: 8600,
    attack: 480,
    defense: 690,
  },

  // Memory Effects
  effects: [
    'Defense increased by 60%',
    'After using ultimate skill, equipped character takes 10% less damage for 5 seconds',
    'Shield amount applied by ultimate skills increased by 20%',
  ],
};

// SEO data for the memory page
export const herTrainerSEO = {
  title: `${herTrainerData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${herTrainerData.name}, a ${herTrainerData.rarity} memory card for ${herTrainerData.character} in Zone Nova. Includes stats, effects, and character synergy.`,
};

// Export default for easy importing
export default herTrainerData;
