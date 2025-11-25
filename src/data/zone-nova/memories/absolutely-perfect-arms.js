// Absolutely Perfect Arms Memory Card Data - Zone Nova
// Morgan Le Fay's exclusive memory card

export const absolutelyPerfectArmsData = {
  // Basic Memory Information
  id: 'absolutely-perfect-arms',
  slug: 'absolutely-perfect-arms',
  name: 'Absolutely Perfect Arms',
  image: 'Morgancard',
  rarity: 'SSR',
  element: 'Holy',
  character: 'Morgan Le Fay',
  class: 'Buffer',

  // Memory Stats
  stats: {
    hp: '7,800', // Base 6000 + 30% increase
    attack: '780', // Base 600 + 30% increase
    defense: '780', // Base 600 + 30% increase
  },

  // Memory Effects
  effects: [
    'ATK increased by 30%',
    'DEF increased by 30%',
    'HP increased by 30%',
    "When the equipper is of Holy attribute, after dealing Normal Attack DMG, all allies' Energy gain efficiency is increased by 18%, stacking up to 4 times, lasting 5s",
  ],
};

// SEO data for Absolutely Perfect Arms
export const absolutelyPerfectArmsSEO = {
  title: `${absolutelyPerfectArmsData.name} - Morgan Le Fay Memory - Zone Nova`,
  description: `Complete guide for ${absolutelyPerfectArmsData.name}, ${absolutelyPerfectArmsData.rarity} memory card exclusive to ${absolutelyPerfectArmsData.character} in Zone Nova.`,
};

// Export default for easy importing
export default absolutelyPerfectArmsData;
