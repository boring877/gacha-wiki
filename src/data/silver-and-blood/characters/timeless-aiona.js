import { baseStats } from '../base-stats.js';

export const timelessAiona = {
  id: 'timeless-aiona',
  name: 'Timeless Aiona',
  title: 'The Cosmic Wrinkle',
  subtitle: '',
  description:
    'A powerful SSR marksman from the Ancestors faction who specializes in shield manipulation, ranged combat, and time-based abilities with unique effective range mechanics.',
  image: '/images/games/silver-and-blood/characters/Timeless_Aiona.jpg',
  tags: ['Ranged', 'Shield'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Marksman',
  faction: 'Ancestors',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['timeless-aiona'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Inverse Time',
      type: 'Normal Attack',
      description:
        "Deals 150.0% ATK (M. DMG) to the target. When Aiona's Shield reaches 50.0% of Max HP, her Basic ATK becomes a triple strike dealing 75.0% ATK (M. DMG) each hit. When her Shield reaches 100.0% of Max HP, each Basic ATK deals additional DMG equal to 4.0% of the target's Max HP, with additional DMG capped at 60.0% of Timeless Aiona's ATK.",
    },
    {
      name: "Fate's Design",
      type: 'Special',
      description:
        'When the battle begins, Timeless Aiona consumes 40.0% of her Current HP and gains a Shield equal to 250.0% of the consumed HP. Shield: When receiving DMG, loses Shield Strength instead of HP. When receiving True DMG, loses Shield Strength equal to 200% of DMG taken. Shield cannot exceed 200% of Max HP.',
    },
    {
      name: 'Entropy',
      type: 'Passive',
      description:
        'Talent: Effective Range. When Timeless Aiona receives any form of HP recovery, the recovered HP is converted into a Shield equal to 100.0% of the recovery amount. When Timeless Aiona deals DMG, she gains a Shield equal to 35.0% of the HP loss. Shield: When receiving DMG, loses Shield Strength instead of HP. When receiving True DMG, loses Shield Strength equal to 200% of DMG taken. Shield cannot exceed 200% of Max HP. Effective Range: DMG dealt by this Vassal varies with range. It increases by up to 50% at the farthest target while decreasing by up to 50% at the target nearby.',
    },
    {
      name: 'Lucid State',
      type: 'Ultimate',
      cost: 4,
      description:
        "Deals 300.0% ATK (M. DMG) to all enemies in a large area in front of Timeless Aiona in a select direction, inflicting ATK SPD Down (Major) for 8 sec. For 12 sec after casting Ultimate, Timeless Aiona's Basic ATK speed increases and each Basic ATK performs 4 additional strikes, prioritizing different units in the direction of her target. When targets are hit repeatedly, deals 25.0% DMG. ATK SPD Down (Major): ATK SPD -50.0%. Does not stack with effects of the same type.",
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced shield mechanics and time manipulation abilities.',
    attackTypeInfo:
      'M.DMG: Magical damage through cosmic energy. Reduced by M.DEF. Enhanced by Effective Range mechanics.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximizing shield generation and ranged damage.',
  },
};
