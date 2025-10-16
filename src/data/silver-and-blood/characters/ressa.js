import { baseStats } from '../base-stats.js';

export const ressa = {
  id: 'ressa',
  name: 'Ressa',
  title: 'Star Destroyer',
  subtitle: '',
  description:
    'A powerful SSR warrior from the Kingdom faction who specializes in single-target damage, critical strike mechanics, and ultimate cost reduction.',
  image: 'ressa',
  tags: ['Melee', 'Single-Target DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Kingdom',
  equipmentType: 'Medium',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['ressa'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Clobber',
      type: 'Normal Attack',
      description: 'Performs a 2-phase attack on the target, dealing 127.0% ATK (P. DMG).',
    },
    {
      name: 'Enlightened Mind',
      type: 'Special',
      description:
        "CRIT Rate increases by 40.0% when the battle begins. Activates once every 10 sec. Permanently reduces the Bloodsoul consumed by Ressa's Ultimate by 1. If an enemy dies during this period, the cost is reduced by an additional 1. Stops activating after 6 reductions.",
    },
    {
      name: 'Spirit Prayer',
      type: 'Passive',
      description:
        'When a Basic ATK crits, Ressa gains 1 stack of Spirit Illusion. Spirit Illusion: CRIT Rate +5.0%, can stack up to 10 time(s). Cannot be dispelled.',
    },
    {
      name: 'Shattered Dreams',
      type: 'Ultimate',
      cost: 10,
      description:
        "Deals a total of 1950.0% ATK (P. DMG) evenly to all enemies in a cone. A CRIT Hit is guaranteed if there are 10 stacks of Spirit Illusion when casting. Each time an allied Vassal casts their Ultimate, Ressa's Ultimate Cost is reduced by 1. This effect resets once Ressa casts her Ultimate. Spirit Illusion: CRIT Rate +5.0%, can stack up to 10 time(s). Cannot be dispelled.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced Spirit Illusion stacking and critical strike mechanics.',
    attackTypeInfo:
      'P.DMG: Physical damage through melee strikes. Reduced by P.DEF. Enhanced by critical hits and Spirit Illusion stacks.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained single-target combat.',
    specialAbilities:
      'Spirit Illusion: Stacking critical rate buff that builds through successful critical hits. Ultimate cost reduction through ally synergy and enemy elimination.',
  },
};
