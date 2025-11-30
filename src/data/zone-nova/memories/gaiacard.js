// A Smile That Topples Cities - Gaia Memory Data
export const gaiamemoryData = {
  id: 'gaiacard',
  slug: 'gaiacard',
  name: 'A Smile That Topples Cities',
  character: 'Gaia',
  rarity: 'SSR',
  element: null,
  class: 'Healer', // Gaia is a Healer class character
  image: '/images/games/zone-nova/memories/Gaiacard.jpg',

  // Level 80 Stats
  stats: {
    hp: 6300,
    attack: 580,
    defense: 585,
  },

  // Memory Effects
  effects: [
    'Max HP +40%',
    'Healing output +40%',
    'If wearer healed within last 1 second, additional +40% healing output',
  ],
};

export default gaiamemoryData;
