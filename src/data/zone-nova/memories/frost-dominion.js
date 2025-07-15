// Frost Dominion Memory Data - Zone Nova
// Naiya's Memory Card

export const frostDominionData = {
  // Basic Memory Information
  id: 'frost-dominion',
  slug: 'frost-dominion',
  name: 'Frost Dominion',
  image: '/images/games/zone-nova/memories/naiyacard.jpg',
  rarity: 'SSR',
  character: 'Naiya',
  detailUrl: '/guides/zone-nova/characters/naiya/',

  // Memory Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600,
  },

  // Memory Effects
  effects: [
    'Attack power increased by 40%',
    'Team Must-Kill Damage increased by 40% for 5 seconds after Ultimate: Enhances team finishing power after ultimate usage',
  ],
};

// SEO data for the memory page
export const frostDominionSEO = {
  title: `${frostDominionData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${frostDominionData.name}, a ${frostDominionData.rarity} memory card for ${frostDominionData.character} in Zone Nova. Includes stats, effects, and character synergy.`,
};

// Export default for easy importing
export default frostDominionData;
