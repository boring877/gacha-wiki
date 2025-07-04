import { baseStats } from '../base-stats.js';

export const yggdrasill = {
  id: 'yggdrasill',
  name: 'Yggdrasill',
  title: 'Emerald Dream',
  subtitle: '',
  description: 'A powerful SSR defender from the Church faction who specializes in area healing, ally protection, and zone control with sustained regeneration abilities.',
  image: '/images/games/silver-and-blood/characters/Yggdrasill.jpg',
  tags: ['Melee', 'Gather', 'Healing'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Defender',
  faction: 'Church',
  equipmentType: 'Heavy',
  moonPhase: 'New Moon',
  attackType: 'P.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['yggdrasill'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Sprout',
      type: 'Normal Attack',
      description: 'Deals 188.0% ATK (P. DMG) to the target.'
    },
    {
      name: 'Desert Blossom',
      type: 'Special',
      description: 'When the battle begins, the first time an ally\'s HP on Yggdrasill\'s left, right, or rear falls below 70.0% for the first time, they immediately restore HP equal to 20.0% of Yggdrasill\'s Max HP.'
    },
    {
      name: 'Nourish',
      type: 'Passive',
      description: 'Recover 3.0% of lost HP per sec.'
    },
    {
      name: 'Nullification',
      type: 'Ultimate',
      cost: 4,
      description: 'Moves all allies in a select circle and creates a Green Grotto, lasting for 8 sec. Allies within the Green Grotto take 35.0% less DMG and recover HP equal to 2.0% of Yggdrasill\'s Max HP every sec.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced healing zones and defensive capabilities.',
    attackTypeInfo: 'P.DMG: Physical damage through nature-based attacks. Reduced by P.DEF. Enhanced by defensive positioning and healing synergy.',
    equipmentNote: 'Heavy Equipment: Survival-focused gear with maximum protection, ideal for tanking and sustained support.',
    specialAbilities: 'Green Grotto: Area of effect zone providing damage reduction and continuous healing. Gather: Repositions allies for optimal protection. Positional healing triggers based on ally placement relative to Yggdrasill.'
  }
};