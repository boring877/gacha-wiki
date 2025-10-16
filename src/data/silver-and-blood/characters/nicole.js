import { baseStats } from '../base-stats.js';

export const nicole = {
  id: 'nicole',
  name: 'Nicole',
  title: 'Silverstep Dancer',
  subtitle: '',
  description:
    'A powerful SSR assassin from the Church faction who specializes in rush attacks, continuous bleed damage, and dynamic battlefield positioning with escalating ultimate costs.',
  image: 'nicole',
  tags: ['Melee', 'Rush', 'Continuous DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Church',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['nicole'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Boot Knife',
      type: 'Normal Attack',
      description: 'Deals 128.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Grand Battement',
      type: 'Special',
      description:
        'Rushes into battle and deals 300.0% ATK (P. DMG) to the first enemy, marking them as the target and inflicting 4 stack(s) of Continuous DMG (Bleed) for 12 sec. Continuous DMG (Bleed): Takes P. DMG equal to 30.0% ATK from the caster once every 2 sec. Stacks up to 10 time(s).',
    },
    {
      name: 'Silvershadow Step',
      type: 'Passive',
      description:
        'Each time Ultimate is cast, Bloodsoul cost increases by 1, up to a maximum of 5.',
    },
    {
      name: 'Pirouette',
      type: 'Ultimate',
      cost: 2,
      description:
        "Rushes toward the 2 farthest enemies, dealing 300.0% ATK (P. DMG) to each, then Rushes toward the select target, dealing 600.0% ATK (P. DMG) and setting them as Nicole's target. Enemy units in the way are inflicted with 1 stacks of Continuous DMG (Bleed), which last for 12 sec. Continuous DMG (Bleed): Takes P. DMG equal to 30.0% ATK from the caster once every 2 sec. Stacks up to 10 time(s).",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced rush mechanics and bleed stacking effects.',
    attackTypeInfo:
      'P.DMG: Physical damage through dance-like combat techniques. Reduced by P.DEF. Enhanced by rush positioning and bleed accumulation.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained assassin gameplay.',
    specialAbilities:
      'Rush: Quickly moves toward enemies with invulnerability frames. Continuous DMG (Bleed): Stacking damage over time that builds through combat. Escalating Ultimate Cost: Bloodsoul cost increases with each use, requiring strategic timing.',
  },
};
