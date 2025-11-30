// Lamplight Study Memory Data - Zone Nova
// Associated with Freye character

export const lamplightStudyData = {
  // Basic Memory Information
  name: 'Lamplight Study',
  chineseName: '',
  image: '/images/games/zone-nova/memories/Freyecard.jpg',
  rarity: 'SSR',
  character: 'Freye',

  // Memory Stats
  stats: {
    hp: 6000,
    attack: 600,
    defense: 600,
  },

  // Memory Effects
  effects: [
    'Attack power increased by 40%',
    'Ultimate skill damage can apply 【Fate Bind】. Each stack of 【Fate Bind】 increases damage taken by 3.6%, lasts 10 seconds, maximum 10 stacks',
  ],

  // Character Synergy
  synergy: {
    character: 'Freye',
    description:
      "This memory card perfectly complements Freye's role as a chaos debuffer specialist. The substantial +40% attack boost significantly amplifies her damage output from all abilities. The unique Fate Bind mechanic synergizes exceptionally well with her Enhanced Ultimate's large black hole, as the AOE damage can quickly stack Fate Bind on multiple enemies. This creates a powerful debuff spiral where enemies take progressively more damage as stacks accumulate, making Freye devastating in prolonged encounters and team compositions focused on sustained damage amplification.",
  },

  // Equipment Restriction
  restriction: {
    class: 'Debuffer',
    description: 'This memory card can only be equipped by Debuffer class characters.',
  },
};

// SEO Data
export const lamplightStudySEO = {
  title: 'Lamplight Study - Freye Memory Card | Zone Nova',
  description:
    "Complete guide for Lamplight Study memory card in Zone Nova. Learn about its attack amplification and Fate Bind synergy with Freye's chaos debuffer builds.",
};
