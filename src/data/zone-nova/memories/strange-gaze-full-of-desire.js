// Hela Memory Card Data - Zone Nova
// Strange Gaze Full of Desire

export const helaMemoryData = {
  id: 'strange-gaze-full-of-desire',
  slug: 'strange-gaze-full-of-desire',
  name: 'Strange Gaze Full of Desire',
  image: '/images/games/zone-nova/memories/Helacard.jpg',
  rarity: 'SSR',
  element: 'Chaos',
  character: 'Hela',
  class: 'Rogue',
  detailUrl: '/guides/zone-nova/memories/strange-gaze-full-of-desire/',

  // Base Stats
  stats: {
    hp: 5040,
    attack: 780,
    defense: 474,
  },

  // Memory Effects
  effects: [
    'Only effective for Rogue class, 5-price awakening',
    'Crit Rate increases by 34%',
    "When other allies cast their ultimates, the wearer's damage dealt increases by 24% for 5 seconds (max 3 stacks, up to 72% bonus damage)",
  ],
};

// SEO data for Hela's Memory
export const helaMemorySEO = {
  title: `${helaMemoryData.name} - Hela Memory Card | Zone Nova | GachaWiki`,
  description: `Complete guide to ${helaMemoryData.name} memory card for Hela in Zone Nova. ${helaMemoryData.rarity} ${helaMemoryData.element} memory with enhanced crit rate and damage bonus from ally ultimates.`,
};

// Export default for easy importing
export default helaMemoryData;
