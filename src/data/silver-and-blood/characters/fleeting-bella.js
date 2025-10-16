import { baseStats } from '../base-stats.js';

export const fleetingBella = {
  id: 'fleeting-bella',
  name: 'Fleeting Bella',
  title: "Twilight's Radiance",
  subtitle: '',
  description:
    'A powerful SSR enchanter from the Kingdom faction who specializes in support magic through possession and healing abilities, transferring her power to allies while maintaining battlefield control.',
  image: 'fleeting-bella',
  tags: ['Ranged', 'Healing', 'Buff'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Kingdom',
  equipmentType: 'Light',
  moonPhase: 'New Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['fleeting-bella'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Reflection',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to the target.',
    },
    {
      name: 'Tidewisp Prayer',
      type: 'Special',
      description:
        'When battle begins, applies Tidewisp Blessing to allied units one tile away on both sides for 15 sec. Fleeting Bella heals units with Tidewisp Blessing for 90.0% ATK every sec. Tidewisp Blessing transfers automatically to allies whose HP percentage is below 40.0%, or to those without the Blessing who have an even lower HP Percentage.\n\nTidewisp Blessing: Fleeting Bella heals this unit every sec. Her healing will automatically transfer to allies with a lower HP Percentage who do not have Tidewisp Blessing.',
    },
    {
      name: 'Unfulfilled Vows',
      type: 'Passive',
      description:
        'When not possessing, restores 5.0% of Max HP per sec. While possessing, Purifies the possessed ally every 5 sec. Fleeting Bella becomes untargetable during her Ultimate and 6 sec after possession ends.',
    },
    {
      name: "Summer's End",
      type: 'Ultimate',
      cost: 4,
      description:
        "Transforms into Ginokio and possesses a select ally. Heals Fleeting Bella for 600.0% ATK and grants All DMG Up (Major) and ATK SPD UP (Major) to the possessed ally for 20 sec. Then grants 2 stacks of Tidewisp Blessing to the ally with the lowest HP Percentage. Possessed ally's ATK increases by 25.0% of Fleeting Bella's Base ATK. When the possessed ally deals DMG with the Basic ATK, Fleeting Bella consumes 3.0% of her Max HP to deal 120.0% ATK (M. DMG) to the same target. This can be triggered once on each enemy every 0.4 sec. Possession lasts 20 sec.\n\nPuppeteer: Gains 25.0% of Fleeting Bella's Base ATK.\nTidewisp Blessing: Fleeting Bella heals this unit every sec. Her healing will automatically transfer to allies with a lower HP Percentage who do not have Tidewisp Blessing.\nAll DMG Up (Major): All DMG Dealt +45.0%. Does not stack with effects of the same type.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced possession abilities and Tidewisp Blessing effectiveness.',
    attackTypeInfo:
      'M.DMG: Magical damage through possession and healing magic. Reduced by M.DEF. Enhanced by ally possession mechanics and healing transfer effects.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum magical damage output and support effectiveness.',
    specialAbilities:
      'Possession: Transforms and merges with allies, granting major damage and speed bonuses. Tidewisp Blessing: Intelligent healing that automatically transfers to the most injured allies. Untargetable: Becomes immune to enemy targeting during and after ultimate usage.',
  },
};
