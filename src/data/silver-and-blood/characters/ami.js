import { baseStats } from '../base-stats.js';

export const ami = {
  id: 'ami',
  name: 'Ami',
  title: 'El Dorado Trainee',
  subtitle: '',
  description: 'A powerful SSR enchanter from the Kingdom faction who specializes in ranged support, ally gathering, and buff coordination through Soul Link mechanics.',
  image: '/images/games/silver-and-blood/characters/Ami.jpg',
  tags: ['Ranged', 'Gather', 'Buff'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Kingdom',
  equipmentType: 'Light',
  moonPhase: 'Crescent Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['ami'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Tribute Offering',
      type: 'Normal Attack',
      description: 'Deals 128.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Transgressor\'s Underling',
      type: 'Special',
      description: 'When the HP of Ami or a Soul-linked unit falls below 50.0% for the first time, both Ami and the Soul-linked unit recover HP equal to 38.5% of Ami\'s Max HP.'
    },
    {
      name: 'Concealed Specter',
      type: 'Passive',
      description: 'When the battle begins, Ami Soul Links with the Vassal on the tile to her right. Soul Link applies All DMG Taken Down (Minor) to both Ami and the unit. The effect is permanent and cannot be dispelled. All DMG Taken Down (Minor): All DMG Taken -15.0%. Does not stack with effects of the same type.'
    },
    {
      name: 'Night of Redemption',
      type: 'Ultimate',
      cost: 3,
      description: 'Teleports to a specified location, then teleports all nearby allies to the same location. Upon arrival, allies gain Banquet. Banquet: Increases ATK Speed by 40.0% for 10 sec. Ami\'s Soul Link unit also gains All DMG Up (Moderate) for 10 sec.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced Soul Link mechanics and ally coordination.',
    attackTypeInfo: 'M.DMG: Magical damage through enchantments and support spells. Reduced by M.DEF. Enhanced by Soul Link synergies and ally positioning.',
    equipmentNote: 'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum support effectiveness and magical damage.'
  }
};