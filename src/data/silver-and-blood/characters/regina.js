import { baseStats } from '../base-stats.js';

export const regina = {
  id: 'regina',
  name: 'Regina',
  title: 'Keeper of Yore',
  subtitle: '',
  description:
    'An SR warrior from the Kingdom faction who specializes in single-target physical damage with shield mechanics and mark stacking for burst damage.',
  image: 'regina',
  tags: ['Melee', 'Single-Target DMG'],

  // Game Mechanics
  rarity: 'SR',
  class: 'Warrior',
  faction: 'Kingdom',
  equipmentType: 'Medium',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['regina'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Sneak Attack',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Phantom Double',
      type: 'Special',
      description:
        'After battle begins, gains a Shield equal to 30.0% HP. While shielded, DMG dealt will trigger an additional attack, dealing 300.0% ATK (P. DMG). Triggers once every 6 sec.',
    },
    {
      name: 'Mark of Death',
      type: 'Passive',
      description:
        "After Regina's skill deals DMG to a target, applies 1 Mark on them. Once her Marks reach 8, she deals 100.0% ATK (P. DMG) to the target.",
    },
    {
      name: "Exile's Shadow",
      type: 'Ultimate',
      cost: 4,
      description:
        'Deals 1650.0% ATK (P. DMG) 8 times to a select enemy and gains Shield from Special again.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced damage output and mark stacking.',
    attackTypeInfo:
      'P.DMG: Physical damage through martial prowess. Reduced by P.DEF. Enhanced by mark and shield synergy.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, suited for sustained combat.',
  },
};
