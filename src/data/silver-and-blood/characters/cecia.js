import { baseStats } from '../base-stats.js';

export const cecia = {
  id: 'cecia',
  name: 'Cecia',
  title: 'Darkbone Maiden',
  subtitle: '',
  description:
    'A powerful SSR sorcerer from the Kingdom faction who specializes in mid-range bounce attacks, summon enhancement, and spirit channeling mechanics.',
  image: '/images/games/silver-and-blood/characters/Cecia.jpg',
  tags: ['Mid-Range', 'Bounce DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Kingdom',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['cecia'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Soul Interment',
      type: 'Normal Attack',
      description: 'Basic ATK bounces between 4 enemies, dealing 112.0% ATK (M. DMG).',
    },
    {
      name: 'Fruit of Wisdom',
      type: 'Special',
      description: 'Casts every 10 sec, dealing 300.0% ATK (M. DMG).',
    },
    {
      name: 'Unholy Bond',
      type: 'Passive',
      description:
        'Allied Summons receive All DMG Up (Minor). This effect is permanent and cannot be dispelled. All DMG Up (Minor): All DMG Dealt +15.0%. Does not stack with effects of the same type. Cannot be dispelled.',
    },
    {
      name: 'Garden of Delight',
      type: 'Ultimate',
      cost: 5,
      description:
        'Channels for 12 sec, summoning 3 spirit heads. Each head performs 13 Bounce attacks which hit 4 enemies and deal 60.0% ATK (M. DMG). When there are more than 3 allied summons, summons 2 additional spirit heads. Bounce: After every attack, the following attack will target the nearest eligible unit within the specified range of the hit target.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced spirit channeling and bounce attack chains.',
    attackTypeInfo:
      'M.DMG: Magical damage through spirit magic and bone channeling. Reduced by M.DEF. Enhanced by bounce mechanics and summon synergy.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, maximizing magical damage output and spirit effectiveness.',
    specialAbilities:
      'Bounce: Attacks chain between multiple enemies automatically. Channeling: Extended casting time with continuous effects. Summon Enhancement: Permanent damage buffs for allied summons that cannot be dispelled.',
  },
};
