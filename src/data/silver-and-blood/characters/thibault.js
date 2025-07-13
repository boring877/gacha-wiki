import { baseStats } from '../base-stats.js';

export const thibault = {
  id: 'thibault',
  name: 'Thibault',
  title: 'Raven\'s Crest',
  subtitle: '',
  description: 'A powerful SSR sorcerer from the Church faction who specializes in area-of-effect damage, debuffs, and desert magic.',
  image: '/images/games/silver-and-blood/characters/Thibault.jpg',
  tags: ['Mid-Range', 'AOE DMG', 'Debuff'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Church',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['thibault'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Earthly Essence',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to enemies in a circle around the target.'
    },
    {
      name: 'Earthly Desires',
      type: 'Special',
      description: 'Activates every 10 sec, dealing 300.0% ATK (M. DMG) to the target and tracked target.'
    },
    {
      name: 'Desert Burial',
      type: 'Passive',
      description: 'CRIT DMG (Up) by 4.0% every sec, up to 50.0%.'
    },
    {
      name: 'Death\'s Fragrance',
      type: 'Ultimate',
      cost: 4,
      description: 'Channels for 10 sec, summoning a Sandstorm at a select location. The storm moves continuously, tracking the closest enemy and dealing 135.0% ATK (M. DMG) every 0.6 sec to units within range. Each hit has a 20.0% chance to inflict CRIT Resist Rate Down (Moderate) on the target for 8 sec. CRIT Resist Rate Down (Moderate): Chance for DMG Taken to CRIT +40.0%. Does not stack with effects of the same type.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced desert magic and AOE damage capabilities.',
    attackTypeInfo: 'M.DMG: Magical damage through desert sorcery and sandstorm magic. Reduced by M.DEF. Enhanced by critical damage scaling.',
    equipmentNote: 'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum magical damage output.'
  }
};