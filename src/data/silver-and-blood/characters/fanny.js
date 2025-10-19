import { baseStats } from '../base-stats.js';

export const fanny = {
  id: 'fanny',
  name: 'Fanny',
  title: 'The Interrogator',
  subtitle: '',
  description:
    'A ruthless SSR sorcerer from the Church faction who specializes in continuous piercing damage and executes weakened enemies with devastating judgment.',
  image: 'fanny',
  tags: ['Mid-Range', 'AoE DMG', 'Continuous DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Church',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'Piercing DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['fanny'],

  // Skills
  skills: [
    {
      name: 'Thorns of Sin',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (Piercing DMG) to the target.',
    },
    {
      name: 'Doom Chamber',
      type: 'Special',
      description:
        'After every 4 Basic ATK(s), deals 600.0% ATK (Piercing DMG) to the target and enemies inflicted with the Continuous DMG (Blood Mark), and additionally applies 2 stacks of Continuous DMG (Blood Mark) for 8 sec.',
      effects: [
        {
          name: 'Continuous DMG (Blood Mark)',
          description:
            "Takes Piercing DMG equal to 30.0% of the caster's ATK once every 2 sec. Can stack up to 10 time(s). Duration: 8 sec.",
        },
      ],
    },
    {
      name: 'Lethal Judgment',
      type: 'Passive',
      description:
        "When an enemy's Current HP falls below 12.0%, Fanny deals Piercing DMG equal to 150.0% of the target's Current HP to them (capped at 300.0% of Fanny's ATK). Can trigger 1 time per unit.",
    },
    {
      name: 'Feast of Agony',
      type: 'Ultimate',
      cost: 4,
      description:
        'Fanny summons a Magic Circle at the select area for 10 sec, dealing 675.0% ATK (Piercing DMG) per sec, and inflicts 5 stacks of Continuous DMG (Blood Mark) on all enemies within for 12 sec.',
      effects: [
        {
          name: 'Magic Circle',
          description:
            'Area effect that deals continuous damage and applies debuffs. Duration: 10 sec.',
        },
        {
          name: 'Continuous DMG (Blood Mark)',
          description:
            "Takes Piercing DMG equal to 30.0% of the caster's ATK once every 2 sec. Can stack up to 10 time(s). Duration: 12 sec.",
        },
      ],
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: All Bloodsoul Cost -1 and 25% more DMG while Blood Moon is active. Enhanced area damage and continuous damage application.',
    attackTypeInfo:
      'Piercing DMG: Special damage type that ignores a certain amount of P.DEF and M.DEF and deals 200% DMG to Shields. Not affected by P.DMG and M.DMG related effects.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, maximizing piercing damage potential and execution capabilities.',
    executionMechanics:
      'Lethal Judgment provides powerful execute mechanics against low-health enemies, making Fanny excellent at finishing weakened targets.',
  },
};
