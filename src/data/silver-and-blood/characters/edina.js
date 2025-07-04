import { baseStats } from '../base-stats.js';

export const edina = {
  id: 'edina',
  name: 'Edina',
  title: 'Holy Tree Scholar',
  subtitle: '',
  description: 'A powerful SSR enchanter from the Church faction who specializes in mid-range support, multi-target healing, and damage reduction buffs with intelligent healing prioritization.',
  image: '/images/games/silver-and-blood/characters/Edina.jpg',
  tags: ['Mid-Range', 'Healing'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Church',
  equipmentType: 'Medium',
  moonPhase: 'New Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['edina'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Woven Vines',
      type: 'Normal Attack',
      description: 'Deals a total of 150.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Regeneration',
      type: 'Special',
      description: 'Activates once every 4 Basic ATK(s). Heals the ally with the lowest HP for 300.0% ATK.'
    },
    {
      name: 'Verdant Purification',
      type: 'Passive',
      description: 'Grants All DMG Taken Down (Minor) to allies in range of Ultimate for 10 sec. All DMG Taken Down (Minor): All DMG Taken -15.0%. Does not stack with effects of the same type.'
    },
    {
      name: 'Lush Meadow',
      type: 'Ultimate',
      cost: 4,
      description: 'Heals one ally in the select area for 35.0% of Edina\'s Max HP 5 times. Each instance of healing will target the ally with the lowest Current HP.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced healing potency and damage reduction effectiveness.',
    attackTypeInfo: 'M.DMG: Magical damage through nature-based abilities. Reduced by M.DEF. Enhanced by healing synergy and support mechanics.',
    equipmentNote: 'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained support gameplay.',
    specialAbilities: 'Smart Healing: Automatically targets allies with lowest HP for optimal resource allocation. Area damage reduction buffs that stack with ultimate usage. Multi-instance healing for sustained recovery.'
  }
};