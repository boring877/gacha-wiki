// In the Cafe, Sneaking a Bite Memory Data - Zone Nova
// Lily's Memory Card

export const inTheCafeSneakingABiteData = {
  // Basic Memory Information
  id: 'in-the-cafe-sneaking-a-bite',
  slug: 'in-the-cafe-sneaking-a-bite',
  name: 'In the Cafe, Sneaking a Bite',
  image: '/images/games/zone-nova/memories/Lilycard.jpg',
  rarity: 'SSR',
  character: 'Lily',
  detailUrl: '/guides/zone-nova/memories/in-the-cafe-sneaking-a-bite/',

  // Memory Stats
  stats: {
    hp: 6600,
    attack: 480,
    defense: 690,
  },

  // Memory Effects
  effects: [
    'Defense increases by 64%',
    'After successful mitigation, damage taken is reduced by 10% for 5 seconds. When the wearer has a shield, damage taken is reduced by 18%.',
  ],
};

// SEO data for the memory page
export const inTheCafeSneakingABiteSEO = {
  title: `${inTheCafeSneakingABiteData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${inTheCafeSneakingABiteData.name}, a ${inTheCafeSneakingABiteData.rarity} memory card for ${inTheCafeSneakingABiteData.character} in Zone Nova. Includes stats, effects, and character synergy.`,
};

// Export default for easy importing
export default inTheCafeSneakingABiteData;
