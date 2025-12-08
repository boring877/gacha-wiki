/**
 * Busty Burst Fantasy - Accessory Stats Data
 * Contains main stats and sub stats for SSR and SR accessories
 */

export const accessoryStats = {
  SSR: {
    rarity: 'SSR',
    rarityColor: '#ffd700',
    mainStats: {
      tiara: [{ stat: 'HP', base: 370, max: 1700 }],
      earrings: [
        { stat: 'Physical Critical', base: 40, max: 116 },
        { stat: 'Magic Critical', base: 40, max: 116 },
        { stat: 'MP Recovery', base: 22, max: 41 },
        { stat: 'HP Recovery', base: 140, max: 520 },
      ],
      necklace: [
        { stat: 'Physical Defense', base: 45, max: 140 },
        { stat: 'Magic Defense', base: 45, max: 140 },
        { stat: 'Block', base: 5, max: 14.5 },
        { stat: 'HP', base: 370, max: 1700 },
        { stat: 'Ultimate DMG%', base: 2, max: 11.5 },
      ],
      bracelet: [
        { stat: 'Physical Attack', base: 80, max: 251 },
        { stat: 'Magic Attack', base: 80, max: 251 },
      ],
      ring: [
        { stat: 'MP Recovery', base: 22, max: 41 },
        { stat: 'HP Recovery', base: 140, max: 520 },
        { stat: 'Heal Power', base: 25, max: 82 },
        { stat: 'Block', base: 5, max: 14.5 },
        { stat: 'Skill DMG%', base: 3, max: 12.5 },
      ],
    },
    subStats: [
      { stat: 'HP', value: 200 },
      { stat: 'Physical Defense', value: 11 },
      { stat: 'Magic Defense', value: 11 },
      { stat: 'Physical Attack', value: 16 },
      { stat: 'Magic Attack', value: 16 },
      { stat: 'Physical Critical', value: 8 },
      { stat: 'Magic Critical', value: 8 },
      { stat: 'Block', value: 3 },
      { stat: 'HP Recovery', value: 40 },
      { stat: 'MP Recovery', value: 4 },
    ],
    enhancement: {
      subAddition: {
        levels: [4],
        description:
          'SSR accessories start with 3 sub stats. At Lv4, gain 1 additional sub stat (max 4).',
      },
      subEnhancement: {
        levels: [8, 12, 16, 20],
        description: 'At these levels, one random sub stat is enhanced.',
      },
    },
  },
  SR: {
    rarity: 'SR',
    rarityColor: '#a855f7',
    mainStats: {
      tiara: [{ stat: 'HP', base: 300, max: 1440 }],
      earrings: [
        { stat: 'Physical Critical', base: 35, max: 111 },
        { stat: 'Magic Critical', base: 35, max: 111 },
        { stat: 'MP Recovery', base: 18, max: 37 },
        { stat: 'HP Recovery', base: 120, max: 462 },
      ],
      necklace: [
        { stat: 'Physical Defense', base: 40, max: 135 },
        { stat: 'Magic Defense', base: 40, max: 135 },
        { stat: 'Block', base: 4, max: 11.6 },
        { stat: 'HP', base: 300, max: 1440 },
        { stat: 'Ultimate DMG%', base: 1, max: 8.6 },
      ],
      bracelet: [
        { stat: 'Physical Attack', base: 70, max: 222 },
        { stat: 'Magic Attack', base: 70, max: 222 },
      ],
      ring: [
        { stat: 'MP Recovery', base: 18, max: 37 },
        { stat: 'HP Recovery', base: 120, max: 462 },
        { stat: 'Heal Power', base: 20, max: 67.5 },
        { stat: 'Block', base: 4, max: 11.6 },
        { stat: 'Skill DMG', base: 2, max: 9.6 },
      ],
    },
    subStats: [
      { stat: 'HP', value: 180 },
      { stat: 'Physical Defense', value: 10 },
      { stat: 'Magic Defense', value: 10 },
      { stat: 'Physical Attack', value: 15 },
      { stat: 'Magic Attack', value: 15 },
      { stat: 'Physical Critical', value: 7 },
      { stat: 'Magic Critical', value: 7 },
      { stat: 'Block', value: 2 },
      { stat: 'HP Recovery', value: 30 },
      { stat: 'MP Recovery', value: 3 },
    ],
    enhancement: {
      subAddition: {
        levels: [4, 8],
        description:
          'SR accessories start with 2 sub stats. At Lv4 and Lv8, gain additional sub stats (max 4).',
      },
      subEnhancement: {
        levels: [12, 16, 20],
        description: 'At these levels, one random sub stat is enhanced.',
      },
    },
  },
};

export const accessoryTypes = ['tiara', 'earrings', 'necklace', 'bracelet', 'ring'];

export const accessoryTypeLabels = {
  tiara: 'Tiara',
  earrings: 'Earrings',
  necklace: 'Necklace',
  bracelet: 'Bracelet',
  ring: 'Ring',
};
