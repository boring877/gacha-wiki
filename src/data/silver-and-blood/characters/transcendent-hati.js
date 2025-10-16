import { baseStats } from '../base-stats.js';

export const transcendentHati = {
  id: 'transcendent-hati',
  name: 'Transcendent Hati',
  title: 'Seed of Plague',
  subtitle: 'The Secondborn',
  description: 'An SS-ranked melee vassal that spreads plague and continuous AoE damage.',
  image: 'transcendent-hati', // official image
  tags: ['Melee', 'AoE DMG', 'Continuous DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Ancestors',
  equipmentType: 'Medium',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['transcendent-hati'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Abyssal Tear',
      type: 'Normal Attack',
      description: 'Deals 180.0% ATK (P. DMG).',
    },
    {
      name: 'Pestilent Scales',
      type: 'Special',
      description:
        "Activates once every 2 Basic ATK(s). Deals 225.0% ATK (P. DMG) to the target and inflicts 1 stack(s) of Pestilence to enemy units in a circle for 12 sec. When Blood Moon is activated, Hati's next two Basic ATKs are replaced by her Special.\n\nPestilence: Takes P. DMG equal to 50.0% of caster's ATK every 2 sec and gains ATK SPD Down by 20.0%, stacking up to 10 times. Once stacks exceed 7, deals AoE DMG to enemies within 2.5 meters.",
    },
    {
      name: "Sorrow's Taint",
      type: 'Passive',
      description:
        "Once Hati's Continuous DMG effect on an enemy ends, they have a 50.0% chance to gain 1 stack(s) of Pestilence for 12 sec. If this target dies, all of the Continuous DMG effect on them have a 50.0% chance to transfer to the closest enemy, becoming Pestilence that lasts for 8 sec.\n\nPestilence: Takes P. DMG equal to 50.0% of caster's ATK every 2 sec and gains ATK SPD Down by 20.0%, stacking up to 10 times. Once stacks exceed 7, deals AoE DMG to enemies within 2.5 meters.",
    },
    {
      name: "Plague's Veil",
      type: 'Ultimate',
      cost: 4,
      description:
        'Deals a total of 2250.0% ATK (P. DMG) to enemies in a rectangle, distributed evenly. Immediately triggers all Continuous DMG effects carried by enemies 2 time(s).',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. [Plague] damage increases from 15% to 20% of max HP.',
    attackTypeInfo:
      'P.DMG: Physical damage through claws and bites. Reduced by P.DEF. Enhanced by debuff synergy.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, suited for sustained combat.',
  },
};
