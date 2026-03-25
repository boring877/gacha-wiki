// King of Lust Memory Data - Zone Nova
// Associated with Lust - Asmodeus character

export const kingOfLustData = {
  id: 'king-of-lust',
  slug: 'king-of-lust',
  name: 'King of Lust',
  image: '/images/games/zone-nova/memories/KingOfLust.png',
  rarity: 'SSR',
  element: 'Wind',
  character: 'Lust - Asmodeus',
  class: 'Attacker',
  detailUrl: '/guides/zone-nova/memories/king-of-lust/',

  // Base Stats
  stats: {
    hp: 5040,
    attack: 780,
    defense: 474,
  },

  // Memory Effects
  effects: [
    'Critical hit rate increased by 40%',
    'Attack power increased by 40%',
    'Each time the wearer attacks and hits an enemy, they gain 1 stack of [Battle Spirit]',
    'When [Battle Spirit] reaches 10 stacks, all stacks are consumed and [Penetrating] is gained, increasing critical hit damage by 50% for 5 seconds',
    '[Battle Spirit] cannot be gained while [Penetrating] is active',
  ],

  // Character Synergy
  synergy: {
    character: 'Lust - Asmodeus',
    description:
      "This memory card directly supports Lust - Asmodeus's crit-focused burst style. The flat critical hit rate and attack boosts strengthen her baseline damage, while [Battle Spirit] rewards her repeated hit pattern by converting sustained pressure into a short burst of amplified critical damage through [Penetrating].",
  },
};

// SEO Data
export const kingOfLustSEO = {
  title: 'King of Lust - Lust - Asmodeus Memory Card | Zone Nova | GachaWiki',
  description:
    'Complete guide to King of Lust memory card for Lust - Asmodeus in Zone Nova. SSR Wind Attacker memory with crit rate, attack, and burst critical damage scaling.',
};

export default kingOfLustData;
