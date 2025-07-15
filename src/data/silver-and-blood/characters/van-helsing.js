import { baseStats } from '../base-stats.js';

export const vanHelsing = {
  id: 'van-helsing',
  name: 'Van Helsing',
  title: 'Arrow of Justice',
  subtitle: '',
  description:
    'A powerful SSR marksman from the Church faction who specializes in ranged combat, weapon swapping, and effective range mechanics.',
  image: '/images/games/silver-and-blood/characters/Van_Helsing.jpg', // official image
  tags: ['Ranged', 'AoE DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Marksman',
  faction: 'Church',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['van-helsing'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Aimed Shot',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Renegade Roulette',
      type: 'Special',
      description:
        "For every 5 Basic ATK(s), Van Helsing deals additional P. DMG equal to 23.0% of the target's lost HP. This additional damage is capped at 100.0% of Van Helsing's own ATK.",
    },
    {
      name: 'Lone Justice',
      type: 'Passive',
      description:
        'Talent: Effective Range. If there are no allies 2 tiles in front of Van Helsing, he gains 2.5% CRIT Rate every sec for the first 20 sec of battle. When Blood Moon is active, Van Helsing gains an additional 10.0% CRIT Rate. Effective Range: DMG dealt by this Vassal varies with range. It increases by up to 50% at the farthest target while decreasing by up to 50% at the target nearby.',
    },
    {
      name: 'Quick Draw',
      type: 'Ultimate',
      cost: 6,
      description:
        'Van Helsing swaps his gun for an explosive bow, gaining 5 stack(s) of Swift Hunt. His Basic ATK now deals 180.0% ATK (P. DMG) to enemies in a circle around the target. Killing enemies with his explosive bow grants him 1 stack(s) of Swift Hunt. Van Helsing loses 1 stack of Swift Hunt every 3 sec. When all stacks of Swift Hunt have been consumed, Van Helsing will switch back to his gun. Swift Hunt: Increases ATK SPD by 10.0%. Stacks up to 5 times.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced weapon swapping and effective range bonuses.',
    attackTypeInfo:
      'P.DMG: Physical damage through guns and explosive arrows. Reduced by P.DEF. Enhanced by range and weapon mechanics.',
    equipmentNote:
      'Light Equipment: Focused on offensive capabilities with high ranged attack stats and critical bonuses.',
  },
};
