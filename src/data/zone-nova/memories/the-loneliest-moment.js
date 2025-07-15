// The Loneliest Moment Memory Data - Zone Nova
// Apollo's Memory Card

export const theLoneliestMomentData = {
  // Basic Memory Information
  id: 'the-loneliest-moment',
  slug: 'the-loneliest-moment',
  name: 'The Loneliest Moment',
  image: '/images/games/zone-nova/memories/Apollocard.jpg',
  rarity: 'SSR',
  character: 'Apollo',
  detailUrl: '/guides/zone-nova/characters/apollo/',

  // Memory Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600,
  },

  // Memory Effects
  effects: [
    "Battle start: All allied characters' damage increases by 40%, pursuit damage additionally increases by 40%",
    "When equipped character releases ultimate or energy >8: All allied characters' energy acquisition efficiency increases by 100% for 10 seconds",
  ],
};

// SEO data for the memory page
export const theLoneliestMomentSEO = {
  title: `${theLoneliestMomentData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${theLoneliestMomentData.name}, a ${theLoneliestMomentData.rarity} memory card for ${theLoneliestMomentData.character} in Zone Nova. Includes stats, effects, and character synergy.`,
};

// Export default for easy importing
export default theLoneliestMomentData;
