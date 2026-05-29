// Monster in the Dense Forest Memory Data - Zone Nova
// Merlin's Memory Card

export const monsterInTheDenseForestData = {
  id: 'monster-in-the-dense-forest',
  slug: 'monster-in-the-dense-forest',
  name: 'Monster in the Dense Forest',
  image: '/images/games/zone-nova/memories/MonsterInTheDenseForest.png',
  rarity: 'SSR',
  character: 'Merlin',
  detailUrl: '/guides/zone-nova/characters/merlin/',

  stats: {
    hp: 5040,
    attack: 780,
    defense: 474,
  },

  effects: [
    'Attack power increased by 40%',
    'When there is only one enemy on the field, ultimate skill damage increased by 40%',
  ],
};

export const monsterInTheDenseForestSEO = {
  title: `${monsterInTheDenseForestData.name} - Zone Nova Memory Card Guide`,
  description: `Complete guide for ${monsterInTheDenseForestData.name}, a ${monsterInTheDenseForestData.rarity} memory card for ${monsterInTheDenseForestData.character} in Zone Nova. Includes stats, effects, and character synergy.`,
};

export default monsterInTheDenseForestData;
