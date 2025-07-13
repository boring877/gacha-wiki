import { baseStats } from '../base-stats.js';

export const acappella = {
  id: 'acappella',
  name: 'Acappella',
  title: 'Eternal Ringer',
  subtitle: '',
  description: 'A powerful SSR enchanter from the Church faction who specializes in buff support, ally enhancement, and strategic combat amplification.',
  image: '/images/games/silver-and-blood/characters/Acappella.jpg', // official image
  tags: ['Mid-Range', 'Buff'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Church',
  equipmentType: 'Light',
  moonPhase: 'Crescent Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['acappella'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Solo',
      type: 'Normal Attack',
      description: 'Deals 135.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Harmony Quartet',
      type: 'Special',
      description: 'When consuming Notes, Acappella heals allied units for 7.5% of her Max HP.'
    },
    {
      name: 'Ancient Aria',
      type: 'Passive',
      description: 'Acappella prioritizes gaining Notes of the same color, but when she has no Notes, she will gain one at random. After gaining 3 Notes, they will be consumed to grant one of the following buffs to allied units. Red Notes: P. DMG Up (Moderate), lasts for 15 sec. Blue Notes: M. DMG Up (Moderate), lasts for 15 sec. Yellow Notes: CRIT Rate Up (Minor), lasts for 15 sec. M. DMG Up (Moderate): M. DMG Dealt +30.0%. Does not stack with effects of the same type. P. DMG UP (Moderate): P. DMG Dealt +30.0%. Does not stack with effects of the same type. CRIT Rate Up (Minor): When dealing DMG, CRIT Rate +20.0%. Does not stack with effects of the same type.'
    },
    {
      name: 'Hymn of Aeon',
      type: 'Ultimate',
      cost: 3,
      description: 'Begins Channeling for 10 sec. During this period, Bloodsoul Recovery Rate for all allies will be increased by 35.0%. Every 1 sec, Acappella gains 1 Note.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced note generation and channeling abilities.',
    attackTypeInfo: 'M.DMG: Magical damage through divine music and holy harmonies. Reduced by M.DEF. Enhanced by buff synergy.',
    equipmentNote: 'Light Equipment: High offensive stats for maximum magical damage output and buff effectiveness.'
  }
};