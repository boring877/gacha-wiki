import { baseStats } from '../base-stats.js';

export const mass = {
  id: 'mass',
  name: 'Mass',
  title: 'Bloodmoon Heir',
  subtitle: '',
  description:
    'A powerful SSR assassin from the Bloodborn faction who specializes in melee combat, teleportation, and devastating area-of-effect ultimate abilities with self-sacrifice mechanics.',
  image: '/images/games/silver-and-blood/characters/Mass.jpg',
  tags: ['Melee', 'Teleport', 'AOE DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Bloodborn',
  equipmentType: 'Light',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['mass'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Needlework',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Undead Shuffle',
      type: 'Special',
      description:
        "When the battle begins, Mass selects the furthest enemy within range of the target, then Teleports to this unit, setting it as the new target, dealing 300.0% ATK (P. DMG), and applying Spark. Spark: Mass's Ultimate deals 50% increased DMG. Teleport: Teleports without being affected by movement impairing effects.",
    },
    {
      name: 'Final Retribution',
      type: 'Passive',
      description: 'When the battle begins, the Cost of Ultimate is reduced by 1 every 3 sec.',
    },
    {
      name: "Death's Lament",
      type: 'Ultimate',
      cost: 10,
      description:
        "Deals 1260.0% ATK (P. DMG) to enemies in a circle. The DMG scales with Mass's HP Percentage, up to a maximum of 3150.0% ATK. When Mass casts her Ultimate, she gains a Shield equal to 30.0% of her Max HP, but dies when the Ultimate ends.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced teleportation and ultimate scaling mechanics.',
    attackTypeInfo:
      'P.DMG: Physical damage through melee strikes and ultimate devastation. Reduced by P.DEF. Enhanced by HP scaling and Spark effects.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum ultimate damage and mobility.',
  },
};
