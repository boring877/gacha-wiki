import { baseStats } from '../base-stats.js';

export const theophane = {
  id: 'theophane',
  name: 'Theophane',
  title: 'Sandstone Tyrant',
  subtitle: '',
  description:
    'A powerful SSR defender from the Church faction who specializes in melee combat, movement abilities, and crowd control through protective barriers.',
  image: '/images/games/silver-and-blood/characters/Theophane.jpg',
  tags: ['Melee', 'Move', 'Control'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Defender',
  faction: 'Church',
  equipmentType: 'Heavy',
  moonPhase: 'New Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['theophane'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Charge',
      type: 'Normal Attack',
      description: 'Deals 188.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Slow Bass Thrum',
      type: 'Special',
      description:
        'Activates once every 4 Basic ATK(s), restoring 30.0% of lost HP with the healing power of the White Shield.',
    },
    {
      name: 'Janus Barrier',
      type: 'Passive',
      description:
        'All DMG taken will be recorded on the black shield, up to 30.0% of Max HP. After casting his Ultimate, Theophane gains a Shield equal to 50.0% of the recorded number for 20 sec, upon which the DMG record is cleared.',
    },
    {
      name: 'Leap of Faith',
      type: 'Ultimate',
      cost: 3,
      description:
        'Moves to select location, dealing 525.0% ATK (P. DMG) to enemies in a circle around Theophane. Then Channels and Shields allies for 10 sec, inflicting Taunt to nearby enemies and gaining P. DMG Taken Down (Moderate). Taunt: Control: Weak. The carrier stops casting all skills, sets the caster as target, and is unable to cast Ultimate or Specials during the effect. When the effect ends, the carrier will resume attacking their prior target. P. DMG Taken Down (Moderate): P. DMG Taken -30.0%. Does not stack with effects of the same type.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced mobility and shield mechanics.',
    attackTypeInfo:
      'P.DMG: Physical damage through melee strikes and impact. Reduced by P.DEF. Enhanced by defensive positioning and barrier mechanics.',
    equipmentNote:
      'Heavy Equipment: Survival-focused gear with maximum protection, ideal for frontline tanking and sustained defense.',
  },
};
