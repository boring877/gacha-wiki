import { baseStats } from '../base-stats.js';

export const jinxedSelena = {
  id: 'jinxed-selena',
  name: 'Jinxed Selena',
  title: 'The Penniless Peddler',
  subtitle: '',
  description:
    'An SR-ranked support vassal that excels at healing and debuffing enemies while providing sustained team utility.',
  image: 'jinxed-selena',
  tags: ['Healing', 'Debuff'],

  // Game Mechanics
  rarity: 'SR',
  class: 'Enchanter',
  faction: 'Kingdom',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['jinxed-selena'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Skewer',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'All-You-Can-Eat',
      type: 'Special',
      description:
        "Triggers every 4 Basic ATKs. Restores 30.0% of Selena's Max HP. If Selena's HP is full, heals the ally with the lowest HP for 30.0% of her Max HP instead.",
    },
    {
      name: 'Buy One Get One Free',
      type: 'Passive',
      description: 'Talent: When Ultimate is cast, triggers Special for once.',
    },
    {
      name: 'The Bill Collector',
      type: 'Ultimate',
      cost: 4,
      description:
        'Observes a selected target, applying All DMG Taken Up (Moderate) for 8 sec, then shoots a crossbow bolt, dealing 1500.0% ATK (P. DMG).\n\nAll DMG Taken Up (Moderate): All DMG Taken +30.0%. Does not stack with effects of the same type.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced effectiveness of healing and debuff mechanics.',
    attackTypeInfo:
      'P.DMG: Physical damage through crossbow attacks. Reduced by P.DEF. Balanced between offense and support.',
    equipmentNote:
      'Medium Equipment: Balanced attributes offering both survivability and utility for sustained support.',
  },
};
