import { baseStats } from '../base-stats.js';

export const cain = {
  id: 'cain',
  name: 'Cain',
  title: 'Count of Doom',
  subtitle: '',
  description: 'A powerful SSR sorcerer from the Bloodborn faction who specializes in area-of-effect magical damage and explosive trap mechanics.',
  image: '/images/games/silver-and-blood/characters/Cain.jpg',
  tags: ['Mid-Range', 'AOE DMG'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Bloodborn',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['cain'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Wand Wave',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to enemies in a circle around the target.'
    },
    {
      name: 'Tea Party Invitation',
      type: 'Special',
      description: 'Casts once every 2 Basic ATKs, placing an Insidious Delight behind a random enemy. Insidious Delight explodes when hit by an ally, dealing 180.0% ATK (M. DMG) to enemies in a circle. Insidious Delight lasts up to 25 sec.'
    },
    {
      name: 'Elegant Visage',
      type: 'Passive',
      description: 'After defeating an enemy, Cain gains ATK SPD Up (Major) for 8 sec. ATK SPD Up (Major): ATK SPD +50.0%. Does not stack with effects of the same type.'
    },
    {
      name: 'Haunted Eden',
      type: 'Ultimate',
      cost: 5,
      description: 'Deals 1200.0% ATK (M. DMG) to enemies in a straight line. Each Insidious Delight placed increases Ultimate DMG by 15.0%, up to a maximum of 45.0%.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced explosive magic and trap synergies.',
    attackTypeInfo: 'M.DMG: Magical damage through dark sorcery and explosive traps. Reduced by M.DEF. Enhanced by trap placement and enemy elimination.',
    equipmentNote: 'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum magical damage and trap effectiveness.'
  }
};