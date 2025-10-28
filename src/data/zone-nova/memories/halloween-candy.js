// Halloween Candy Memory Data - Zone Nova
// Nina's Memory Card

export const halloweenCandyData = {
  // Basic Memory Information
  id: 'halloween-candy',
  slug: 'halloween-candy',
  name: 'Halloween Candy',
  image: '/images/games/zone-nova/memories/Ninacard.jpg',
  rarity: 'SSR',
  character: 'Nina',
  element: 'Ice',
  class: 'Warrior',
  detailUrl: '/guides/zone-nova/characters/nina/',

  // Memory Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600,
  },

  // Memory Effects
  effects: [
    'Critical damage increased by 60%',
    'When health is above 30%, equipped character recovers 2% of max health after attacking',
    'All damage increased by 40%',
  ],

  // Memory Description
  description:
    "Halloween Candy is Nina's signature memory card, enhancing her critical damage potential and providing sustain when her health is high. This memory synergizes perfectly with Nina's Frost Ash mechanics, allowing for sustained damage output while maintaining critical hit capabilities.",
};

// SEO data for the memory page
export const halloweenCandySEO = {
  title: `${halloweenCandyData.name} - Zone Nova Memory Card Guide | Nina`,
  description: `Complete guide for ${halloweenCandyData.name}, a ${halloweenCandyData.rarity} memory card for ${halloweenCandyData.character} in Zone Nova. Includes stats, effects, character synergy, and optimal usage strategies.`,
  keywords: `Halloween Candy, Nina, Zone Nova, memory card, ${halloweenCandyData.rarity}, ${halloweenCandyData.element}, critical damage, sustain, character guide`,
};

// Export default for easy importing
export default halloweenCandyData;
