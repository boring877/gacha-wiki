import { baseStats } from '../base-stats.js';

export const selena = {
  id: 'selena',
  name: 'Selena',
  title: 'The Deadly Arrow',
  subtitle: '',
  description:
    'A powerful SSR marksman from the Kingdom faction who specializes in ranged combat, single-target damage, and crowd control through crossbow mastery.',
  image: 'selena',
  tags: ['Ranged', 'Single-Target DMG', 'Control'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Marksman',
  faction: 'Kingdom',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['selena'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Sharpshooter',
      type: 'Normal Attack',
      description: 'Deals 188.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Dark Silhouette',
      type: 'Special',
      description:
        'Activates once every 3 Basic ATK(s). Fires a piercing shot at the target, dealing 300.0% ATK (P. DMG) to the target as well as enemies in its path. Gains 1 Shadowmark Arrow for each enemy hit.',
    },
    {
      name: "Shadow's Embrace",
      type: 'Passive',
      description:
        "Talent: Effective Range. Every 3rd crossbow shot stuns the target for 1 sec. When an ally inflicts Stun, gains 2 Shadowmark Arrows. Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect. Shadowmark Arrow: Increases Selena's Ultimate DMG based on the number of Shadowmark Arrows, up to 10. Effective Range: DMG dealt by this Vassal varies with range. It increases by up to 50% at the farthest target while decreasing by up to 50% at the target nearby.",
    },
    {
      name: 'Weeping Nightingale',
      type: 'Ultimate',
      cost: 4,
      description:
        "Sets up a giant crossbow, selects a target, then fires all her Shadowmark Arrows at it, dealing 1500.0% ATK (P. DMG). For every Shadowmark Arrow fired, Selena deals an additional 40.0% ATK (P. DMG), and inflicts Stun for 2 sec. Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect. Shadowmark Arrow: Increases Selena's Ultimate DMG based on the number of Shadowmark Arrows, up to 10.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced crossbow precision and Shadowmark Arrow accumulation.',
    attackTypeInfo:
      'P.DMG: Physical damage through crossbow bolts and arrows. Reduced by P.DEF. Enhanced by range positioning and Shadowmark Arrow mechanics.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum ranged damage output and precision.',
  },
};
