// Lamplight Study Memory Data - Zone Nova
// Associated with Frigga character

export const lamplightStudyData = {
  name: 'Lamplight Study',
  chineseName: '',
  image: '/images/games/zone-nova/memories/Friggacard.jpg',
  rarity: 'SSR',
  character: 'Frigga',

  stats: {
    hp: 6000,
    attack: 600,
    defense: 600,
  },

  effects: [
    'Attack power increased by 40%',
    'Ultimate skill damage can apply 【Fate Bind】. Each stack of 【Fate Bind】 increases damage taken by 3.6%, lasts 10 seconds, maximum 10 stacks',
  ],

  synergy: {
    character: 'Frigga',
    description:
      "This memory card perfectly complements Frigga's role as a debuffer specialist. The substantial +40% attack boost significantly amplifies her damage output from all abilities. The unique Fate Bind mechanic synergizes exceptionally well with her Ultimate's ability to stack debuffs on multiple enemies, creating a powerful debuff spiral where enemies take progressively more damage as stacks accumulate.",
  },

  restriction: {
    class: 'Debuffer',
    description: 'This memory card can only be equipped by Debuffer class characters.',
  },
};

export const lamplightStudySEO = {
  title: 'Lamplight Study - Frigga Memory Card | Zone Nova',
  description:
    "Complete guide for Lamplight Study memory card in Zone Nova. Learn about its attack amplification and Fate Bind synergy with Frigga's debuffer builds.",
};
