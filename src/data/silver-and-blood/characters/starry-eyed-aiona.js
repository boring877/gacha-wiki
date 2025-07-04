import { baseStats } from '../base-stats.js';

export const starryEyedAiona = {
  id: 'starry-eyed-aiona',
  name: 'Starry-Eyed Aiona',
  title: 'Eye of Dormancy',
  subtitle: '',
  description: 'A powerful SSR enchanter from the Kingdom faction who specializes in shield support, ally positioning, and protective buffs with healing over time.',
  image: '/images/games/silver-and-blood/characters/Starry_Eyed_Aiona.jpg',
  tags: ['Mid-Range', 'Gather', 'Shield'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Kingdom',
  equipmentType: 'Medium',
  moonPhase: 'New Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['starry-eyed-aiona'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Light Speed',
      type: 'Normal Attack',
      description: 'Deals 120.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Seer\'s Waymark',
      type: 'Special',
      description: 'When the battle begins and every 10 sec after, applies a Shield equal to 15.0% of Starry-Eyed Aiona\'s Max HP to the ally one tile in front, lasting for 8 sec. Shield: When taking DMG, loses Shield Strength instead of HP. When taking True DMG, loses Shield Strength equal to 200% of DMG taken.'
    },
    {
      name: 'Cosmic Ripples',
      type: 'Passive',
      description: 'Units previously shielded by Starry-Eyed Aiona gain permanent Shield Received UP (Minor) and recover HP for 50.0% ATK every sec until their Shield breaks. Shield Received UP (Minor): Shield Strength Received +25.0%. Does not stack with effects of the same type.'
    },
    {
      name: 'Ode to Time',
      type: 'Ultimate',
      cost: 3,
      description: 'Moves nearby allies in a circle to a select location, applying a Shield equal to 45.0% of Starry-Eyed Aiona\'s Max HP and P. DMG Taken Down (Minor), lasting for 12 sec. Shield: When taking DMG, loses Shield Strength instead of HP. When taking True DMG, loses Shield Strength equal to 200% of DMG taken. P. DMG Taken Down (Minor): P. DMG Taken -15.0%. Does not stack with effects of the same type.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced shield mechanics and ally positioning control.',
    attackTypeInfo: 'M.DMG: Magical damage through cosmic abilities. Reduced by M.DEF. Enhanced by shield synergy and support mechanics.',
    equipmentNote: 'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained support gameplay.',
    specialAbilities: 'Shield: Absorbs damage before affecting HP, with special interactions for True DMG. Gather: Repositions allies strategically. Continuous healing and permanent shield enhancement for protected allies.'
  }
};