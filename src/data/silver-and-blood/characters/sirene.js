import { baseStats } from '../base-stats.js';

export const sirene = {
  id: 'sirene',
  name: 'Sirene',
  title: 'Cloak of Shadow',
  subtitle: '',
  description:
    'An SSR-ranked ranged vassal that excels at single-target damage and marking priority targets.',
  image: '/images/games/silver-and-blood/characters/Sirene.jpg',
  tags: ['Ranged', 'Single-Target DMG', 'Buff'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Marksman',
  faction: 'Bloodborn',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['sirene'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Shadow Wedge',
      type: 'Normal Attack',
      description: 'Deals 300.0% ATK (P. DMG).',
    },
    {
      name: 'Spirit Army',
      type: 'Special',
      description:
        'Every 3 Basic ATK(s), releases a shadowed spirit at the target, dealing 300.0% ATK (P. DMG). Each stack of Festering Desire causes Sirene to release an additional spirit dealing 50.0% DMG. This skill counts as a Basic ATK.\n\nFestering Desire: ATK SPD UP by 25.0%',
    },
    {
      name: 'Deadly Touch',
      type: 'Passive',
      description:
        'Talent: Effective Range. Sirene gains 1 stack of Festering Desire (up to 4) each time she deals DMG equal to 60.0% of her Max HP to enemies.\n\nFestering Desire: ATK SPD UP by 25.0%\n\nEffective Range: DMG dealt by this Vassal varies with range. It increases by up to 50% at the farthest target while decreasing by up to 50% at the target nearby.',
    },
    {
      name: "Death's Veil",
      type: 'Ultimate',
      cost: 3,
      description:
        'Sirene releases shadowed spirits from beneath her cloak that deal 1275.0% ATK (P. DMG) to a select target and apply Dark Mark, then grants Dark Intentions to all allied Marksmen. This skill counts as a Basic ATK, and both Dark Mark and Dark Intentions last 6 sec, extended by 2 sec for each stack of Festering Desire on Sirene.\n\nDark Mark: Prioritizes attacking targets with Dark Intentions.\nDark Intentions: Sets targets with Dark Mark as priority targets. Basic ATK DMG +25.0% and Basic ATK Range +50.0%.\nFestering Desire: ATK SPD UP by 25.0%',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced effectiveness of marking and buff mechanics.',
    attackTypeInfo:
      'M.DMG: Magical damage through shadowed spirits. Reduced by M.DEF. Enhanced by range positioning.',
    equipmentNote:
      'Light Equipment: High mobility and attack speed, suited for ranged combat positioning.',
  },
};
