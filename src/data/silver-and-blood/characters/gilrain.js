import { baseStats } from '../base-stats.js';

export const gilrain = {
  id: 'gilrain',
  name: 'Gilrain',
  title: 'Golden Ascendant',
  subtitle: '',
  description:
    'A powerful SSR assassin from the Kingdom faction who specializes in rushing attacks, stun control, and attack speed buffs.',
  image: '/images/games/silver-and-blood/characters/Gilrain.jpg',
  tags: ['Melee', 'Rush'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Kingdom',
  equipmentType: 'Light',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['gilrain'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Rapier',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Ceremonial Clarion',
      type: 'Special',
      description:
        'Gilrain Rushes into battle, dealing 450.0% ATK (P. DMG) to the first enemy hit and marking them as the target. Gains Horn Dance for 10 sec. Horn Dance: ATK Speed increases by 150.0%, then decreases by 15.0% every 1 sec. Cannot be dispelled.',
    },
    {
      name: 'Encore',
      type: 'Passive',
      description: 'Basic ATK deals 50.0% more DMG.',
    },
    {
      name: 'Veronica the Silver-Footed',
      type: 'Ultimate',
      cost: 3,
      description:
        "Rushes towards a select target, dealing 750.0% ATK (P. DMG) and inflicting Stun for 2 sec. Also deals 300.0% ATK (P. DMG) to enemy units in Gilrain's path. Applies Horn Dance to self for 10 sec. Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect. Horn Dance: ATK Speed increases by 150.0%, then decreases by 15.0% every 1 sec. Cannot be dispelled.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced rush abilities and Horn Dance effects.',
    attackTypeInfo:
      'P.DMG: Physical damage through rapier strikes. Reduced by P.DEF. Enhanced by rush mechanics and attack speed buffs.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, maximizing damage output and speed.',
    specialAbilities:
      'Rush: Quickly moves towards selected target or direction. Cannot be targeted during this effect.',
  },
};
