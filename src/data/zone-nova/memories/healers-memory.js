// Healer's Memory Memory Data - Zone Nova
export const healersMemoryData = {
  id: 'healers-memory',
  slug: 'healers-memory',
  name: "Healer's Memory",
  image: "/images/games/zone-nova/memories/Healer's-Memory.jpg",
  rarity: 'R',
  element: null, // No specific element
  character: null, // No specific character
  class: 'Healer', // Healer class
  detailUrl: '/guides/zone-nova/memories/healers-memory/',

  // Memory Stats
  stats: {
    hp: 4000,
    attack: 400,
    defense: 400,
  },

  // Memory Effects
  effects: [
    'Restriction: Only effective for healers',
    'Cost: 5-price awakening',
    'Healing amount increased by 40%',
  ],
};

// SEO Data
export const healersMemorySEO = {
  title: "Healer's Memory - Healer Memory Card | Zone Nova",
  description:
    "Complete guide for Healer's Memory memory card in Zone Nova. Learn about its healer-specific effects and healing amount bonuses.",
};
