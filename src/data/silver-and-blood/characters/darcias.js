import { baseStats } from '../base-stats.js';

export const darcias = {
  id: 'darcias',
  name: 'Darcias',
  title: 'Blade Angel',
  subtitle: '',
  description:
    'A powerful SSR warrior from the Church faction who specializes in AoE damage, continuous damage over time, and bleed effects.',
  image: 'darcias',
  tags: ['Melee', 'AoE DMG', 'Continuous DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Church',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['darcias'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Claymore',
      type: 'Normal Attack',
      description: 'Deals 120.0% ATK (P. DMG) to enemies ahead in a cone.',
    },
    {
      name: 'Octave Interlude',
      type: 'Special',
      description:
        'Activates once every 2 Basic ATK(s), dealing 150.0% ATK (P. DMG). If the target is inflicted with Bleed, the number of Bleed stacks on the target is doubled. Continuous DMG (Bleed): Takes P. DMG equal to 30.0% ATK from the caster once every 2 sec. Stacks up to 10 time(s).',
    },
    {
      name: 'Argent Pursuit',
      type: 'Passive',
      description:
        'Basic ATK inflicts 1 stack of Bleed on units hit for 8 sec. Continuous DMG (Bleed): Takes P. DMG equal to 30.0% ATK from the caster once every 2 sec. Stacks up to 10 time(s).',
    },
    {
      name: 'Trio',
      type: 'Ultimate',
      cost: 3,
      description:
        'Performs a 6-phase Chain Slash on enemies in a cone, dealing a total of 900.0% ATK (P. DMG), then ending with 1 Heavy Strike dealing 450.0% ATK (P. DMG). When dealing DMG to enemies inflicted with Continuous DMG, restores HP equal to 25.0% of DMG dealt.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced bleed effects and chain slash combos.',
    attackTypeInfo:
      'P.DMG: Physical damage through claymore strikes. Reduced by P.DEF. Enhanced by cone attacks and bleed stacking.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained AoE combat.',
    specialAbilities:
      'Continuous DMG (Bleed): Stacking damage over time effect that synergizes with lifesteal and special abilities.',
  },
};
