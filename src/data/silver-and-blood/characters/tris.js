import { baseStats } from '../base-stats.js';

export const tris = {
  id: 'tris',
  name: 'Tris',
  title: 'The Arbiter',
  subtitle: '',
  description:
    'A powerful SSR marksman from the Church faction who specializes in ranged combat, single-target damage, and electromagnetic control through Induction stacking.',
  image: 'tris',
  tags: ['Ranged', 'Single-Target DMG', 'Control'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Marksman',
  faction: 'Church',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['tris'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Spear Throw',
      type: 'Normal Attack',
      description: 'Deals 105.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Fleeting Thunder',
      type: 'Special',
      description:
        'When an enemy becomes stunned, fires an electromagnetic arrow that deals 450.0% ATK (P. DMG) to the target. This effect can only be triggered once every 8 secs for each unit.',
    },
    {
      name: 'Lightning Rod',
      type: 'Passive',
      description:
        'Talent: Effective Range. Basic ATK applies 1 stack of Induction to the target. Induction: When applied, deals 60.0% ATK (P. DMG) to a random target within 3.5 meters. After reaching 8 stack(s), converts to a 3 sec Stun effect. Effective Range: DMG dealt by this Vassal varies with range. It increases by up to 50% at the farthest target while decreasing by up to 50% at the target nearby.',
    },
    {
      name: 'Magnetic Flux',
      type: 'Ultimate',
      cost: 4,
      description:
        'Fires electromagnetic arrows at a select target, dealing 1650.0% ATK (P. DMG) 12 times. Each hit adds 1 stack of Induction and counts as Basic ATK DMG. Induction: When applied, deals 60.0% ATK (P. DMG) to a random target within 3.5 meters. After reaching 8 stack(s), converts to a 3 sec Stun effect.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced electromagnetic effects and Induction stacking.',
    attackTypeInfo:
      'P.DMG: Physical damage through electromagnetic arrows and spears. Reduced by P.DEF. Enhanced by range positioning and Induction mechanics.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum ranged damage and electromagnetic precision.',
  },
};
