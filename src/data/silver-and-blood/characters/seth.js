import { baseStats } from '../base-stats.js';

export const seth = {
  id: 'seth',
  name: 'Seth',
  title: 'Agent of Aeon',
  subtitle: '',
  description: 'A powerful SSR enchanter from the Ancestors faction who specializes in time-based healing, purification, and emergency support abilities.',
  image: '/images/games/silver-and-blood/characters/Seth.jpg', // official image
  tags: ['Mid-Range', 'Healing', 'Purify'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Ancestors',
  equipmentType: 'Medium',
  moonPhase: 'New Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['seth'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Holy Chant',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Whispers of the Life Weaver',
      type: 'Special',
      description: 'Activates once every 4 Basic ATK(s). Heals the ally with the lowest HP Percentage for 35.0% of Seth\'s Max HP and casts purify.'
    },
    {
      name: 'Grace of Virtue',
      type: 'Passive',
      description: 'When an ally is Purified, restores 10.0% of Seth\'s Max HP to them. The first time any Vassal\'s HP falls below 50%, Seth immediately casts his Special on them.'
    },
    {
      name: 'Second Wind',
      type: 'Ultimate',
      cost: 4,
      description: 'Reverts allies\' HP to 3 seconds prior and heals them for 47.0% of Seth\'s Max HP. Also purifies 1 debuff, prioritizing Control effects. This skill is not affected by HP Block or other effects that alter HP Recovery. If a unit\'s prior HP was less than their current HP, this skill will not be applied.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced time-based healing and purification abilities.',
    attackTypeInfo: 'M.DMG: Magical damage through holy magic and healing arts. Reduced by M.DEF. Enhanced by support synergy.',
    equipmentNote: 'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained support combat.'
  }
};