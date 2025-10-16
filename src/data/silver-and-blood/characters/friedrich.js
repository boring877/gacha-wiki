import { baseStats } from '../base-stats.js';

export const friedrich = {
  id: 'friedrich',
  name: 'Friedrich',
  title: 'The Radiant Light',
  subtitle: '',
  description:
    'A powerful SSR defender from the Kingdom faction who specializes in shield mechanics, area damage, and magical damage resistance with counter-attack abilities.',
  image: 'friedrich',
  tags: ['Melee', 'Shield'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Defender',
  faction: 'Kingdom',
  equipmentType: 'Heavy',
  moonPhase: 'New Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['friedrich'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Lunge',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Eye for an Eye',
      type: 'Special',
      description:
        'Activates once every 4 Basic ATK(s). Deals 225.0% ATK (P. DMG) to the target and grants a Shield equal to 20.0% of Max HP, lasting for 10 sec.',
      effects: [
        {
          name: 'Shield',
          description:
            'When taking DMG, loses Shield Strength instead of HP. When taking True DMG, loses Shield Strength equal to 200% of DMG taken.',
        },
      ],
    },
    {
      name: 'Regal Pride',
      type: 'Passive',
      description: 'When Shielded, gains M. DMG Taken Down (Minor). Cannot be dispelled.',
      effects: [
        {
          name: 'Shield',
          description:
            'When taking DMG, loses Shield Strength instead of HP. When taking True DMG, loses Shield Strength equal to 200% of DMG taken.',
        },
        {
          name: 'M. DMG Taken Down (Minor)',
          description:
            'M. DMG Taken -15.0%. Does not stack with effects of the same type. Cannot be dispelled.',
        },
      ],
    },
    {
      name: 'Death Trap',
      type: 'Ultimate',
      cost: 3,
      description:
        "Creates a Shield equal to 65.0% of Friedrich's Max HP that lasts for 12 sec, and deals 450.0% ATK (P. DMG) to all enemies in a circle around him.",
      effects: [
        {
          name: 'Shield',
          description:
            'When taking DMG, loses Shield Strength instead of HP. When taking True DMG, loses Shield Strength equal to 200% of DMG taken.',
        },
      ],
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced shield mechanics and area damage capabilities.',
    attackTypeInfo:
      'P.DMG: Physical damage through radiant attacks. Reduced by P.DEF. Enhanced by shield synergy and counter-attack mechanics.',
    equipmentNote:
      'Heavy Equipment: Survival-focused gear with maximum protection, ideal for frontline tanking and sustained defense.',
    specialAbilities:
      'Shield: Absorbs damage before affecting HP, with special interactions for True DMG. Magical damage resistance while shielded. Area damage ultimate with simultaneous shield generation.',
  },
};
