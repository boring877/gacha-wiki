// Nutrition Studies Memory Data - Zone Nova
// Associated with Gluttony - Beelzebub character

export const nutritionStudiesData = {
  id: 'nutrition-studies',
  slug: 'nutrition-studies',
  name: 'Nutrition Studies',
  image: '/images/games/zone-nova/memories/NutritionStudies.png',
  rarity: 'SSR',
  element: 'Ice',
  character: 'Gluttony - Beelzebub',
  class: 'Disruptor',
  detailUrl: '/guides/zone-nova/memories/nutrition-studies/',

  // Base Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600,
  },

  // Memory Effects
  effects: [
    'HP increased by 40%',
    'Attack power of the entire team increased by 20%',
    'After the wearer uses a skill, inflicts [Drain] on all enemies for 4 seconds',
    '[Drain] reduces enemy energy regeneration efficiency by 10% and increases allied energy regeneration efficiency by 10%',
  ],

  // Character Synergy
  synergy: {
    character: 'Gluttony - Beelzebub',
    description:
      "This memory card fits Gluttony - Beelzebub's control role by extending her energy-tempo game plan beyond her base kit. The extra team attack buff improves party damage while [Drain] reinforces her ability to slow enemy ultimates and help allies cycle energy faster.",
  },
};

// SEO Data
export const nutritionStudiesSEO = {
  title: 'Nutrition Studies - Gluttony - Beelzebub Memory Card | Zone Nova | GachaWiki',
  description:
    'Complete guide to Nutrition Studies memory card for Gluttony - Beelzebub in Zone Nova. SSR Ice Disruptor memory with HP, team attack support, and energy control utility.',
};

export default nutritionStudiesData;
