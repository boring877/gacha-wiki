import { baseStats } from '../base-stats.js';

export const augustine = {
  id: 'augustine',
  name: 'Augustine',
  title: "Grace's Guidance",
  subtitle: '',
  description:
    'A powerful SSR warrior from the Bloodborn faction who specializes in mid-range combat, chain mechanics, and target marking with crowd control abilities.',
  image: '/images/games/silver-and-blood/characters/Augustine.jpg',
  tags: ['Mid-Range', 'Bounce DMG', 'Continuous DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Bloodborn',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['augustine'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Slice',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Anchor of the Lost Ark',
      type: 'Special',
      description:
        'When the battle begins, uses a chain to pull forward the farthest unit in a straight line and applies Otherworldly Mark. Then dashes to the target, dealing 225.0% ATK (P. DMG), inflicting Stun for 2 sec, clearing their current target, and setting them as the main target. Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect.',
    },
    {
      name: 'Otherworldly Scar',
      type: 'Passive',
      description:
        'Augustine deals 30.0% increased DMG to units with Otherworldly Mark. When a unit with Otherworldly Mark dies, allied units recover 1 Bloodsoul.',
    },
    {
      name: 'Furtive Penance',
      type: 'Ultimate',
      cost: 4,
      description:
        'Launches Anchor of the Lost Ark at select target, dealing a total of 1200.0% ATK (P. DMG) over 5 hits.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced chain mechanics and mark synergy.',
    attackTypeInfo:
      'P.DMG: Physical damage through chains and anchors. Reduced by P.DEF. Enhanced by target marking and positioning control.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained mid-range combat.',
    specialAbilities:
      'Chain Pull: Forces enemy repositioning at battle start. Otherworldly Mark: Damage amplification debuff that provides bloodsoul recovery on death. Target Control: Manipulates enemy targeting priorities.',
  },
};
