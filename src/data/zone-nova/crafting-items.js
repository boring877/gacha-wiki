// Zone Nova Crafting Items Data
// Contains all crafting items information for rune customization

export const craftingItems = [
  {
    id: 'dice',
    name: 'Dice',
    image: '/images/games/zone-nova/crafting/dice.jpg',
    description:
      'Dice basically change the values you have in sub stats without changing the sub stat type. It reorganizes the improvements.',
    requirements: ['Fully maxed out rune +15', 'Rainbow runes'],
    usage:
      'Use dice to reroll substat values on max level rainbow runes. Aim for Crit Damage, Crit Rate, or HP stats.',
  },
  {
    id: 'card',
    name: 'Card',
    image: '/images/games/zone-nova/crafting/Card.jpg',
    description:
      'Card lets you choose the sub stats you want from rainbow runes instead of getting random ones.',
    cost: 'Each sub stat you choose costs you one card',
    limit: 'You can maximum select two sub stats and use 2 cards',
    usage:
      'Use when crafting rainbow runes to guarantee specific substats. Found in bag > crafting page.',
  },
  {
    id: 'laser-machine',
    name: 'Laser Machine',
    image: '/images/games/zone-nova/crafting/laser.jpg',
    description: 'Laser Machine lets you choose the main stats when crafting rainbow runes.',
    note: 'The main stat only changes in rune positions 4, 5, and 6. Positions 1, 2, and 3 have fixed main stats.',
    usage: 'Use when crafting rainbow runes for positions 4-6 to choose your main stat.',
  },
];

export const runeSubStats = [
  { type: 'Attack (%)', exampleValue: '10%' },
  { type: 'Attack (Flat)', exampleValue: '250' },
  { type: 'HP (%)', exampleValue: '12%' },
  { type: 'HP (Flat)', exampleValue: '1500' },
  { type: 'Defense (%)', exampleValue: '8%' },
  { type: 'Defense (Flat)', exampleValue: '180' },
  { type: 'Critical Rate (%)', exampleValue: '6%' },
  { type: 'Critical Damage (%)', exampleValue: '15%' },
  { type: 'Penetration (Flat)', exampleValue: '85' },
];

export const runePositions = [
  { position: 1, mainStatType: 'fixed', description: 'Fixed main stat' },
  { position: 2, mainStatType: 'fixed', description: 'Fixed main stat' },
  { position: 3, mainStatType: 'fixed', description: 'Fixed main stat' },
  { position: 4, mainStatType: 'variable', description: 'Can be chosen with Laser Machine' },
  { position: 5, mainStatType: 'variable', description: 'Can be chosen with Laser Machine' },
  { position: 6, mainStatType: 'variable', description: 'Can be chosen with Laser Machine' },
];

export const diceUsageTips = {
  attackAndDefense: {
    priority: 'low',
    reason:
      'Both Attack and Defense have coefficient numbers (K), meaning their value gets less after you increase them past a certain point.',
  },
  hpCritRateCritDamage: {
    priority: 'high',
    reason:
      'HP, Crit damage and Crit rate are the ones you should be aiming for dice to hit. You want maximum Crit damage, then Crit rate or HP (both flat and %).',
  },
  penetration: {
    priority: 'medium',
    reason:
      'Penetration seems to have the same problem with attack and defense coefficients, however it needs more testing.',
  },
};

export const craftingCategories = ['Rune Crafting', 'Substat Selection', 'Main Stat Selection'];

export const craftingRecipes = [];

export default {
  craftingItems,
  runeSubStats,
  runePositions,
  diceUsageTips,
  craftingCategories,
  craftingRecipes,
};
