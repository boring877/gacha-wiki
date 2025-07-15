// Lancelot-HerTrainer Memory Data - Zone Nova
// Lancelot's Memory Card

export const lancelotHertrainerData = {
  // Basic Memory Information
  id: 'lancelot-hertrainer',
  slug: 'lancelot-hertrainer',
  name: 'Lancelot-HerTrainer',
  image: '/images/games/zone-nova/memories/Lancelotcard.jpg',
  rarity: 'SR',
  character: 'Lancelot',
  detailUrl: '/guides/zone-nova/characters/lancelot/',

  // Memory Stats
  stats: {
    hp: 5500,
    attack: 400,
    defense: 575,
  },

  // Memory Effects
  effects: [
    'Only effective for Guardian class',
    '5th Stage Awakening',
    'Ability: Knight of the Tidal Lake (潮水的湖中骑士)',
    'Passive: Defense increased by 36%',
    'Team Buff: After entering battle, all allied characters take 8% less damage',
    'Note: Same skill effects cannot stack',
  ],
};

// SEO data for the memory page
export const lancelotHertrainerSEO = {
  title: `${lancelotHertrainerData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${lancelotHertrainerData.name}, a ${lancelotHertrainerData.rarity} memory card for ${lancelotHertrainerData.character} in Zone Nova. Includes stats, effects, and character synergy.`,
};

// Export default for easy importing
export default lancelotHertrainerData;
