import { baseStats } from '../base-stats.js';

export const hati = {
  id: 'hati',
  name: 'Hati',
  title: 'Vociferous Fang',
  subtitle: '',
  description: 'A powerful SSR assassin from the Kingdom faction who specializes in rushing attacks, taunt control, and damage reduction debuffs.',
  image: '/images/games/silver-and-blood/characters/Hati.jpg', // official image
  tags: ['Melee', 'Rush'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Kingdom',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['hati'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Barbed Fang',
      type: 'Normal Attack',
      description: 'Deals 135.0% ATK (P. DMG) to the target.'
    },
    {
      name: 'Moonchaser',
      type: 'Special',
      description: 'Rushes into battle, dealing 750.0% ATK (P. DMG) to the first enemy unit hit, marking them as the target, and applying All DMG Down (Moderate) on them for 6 sec. All DMG Down (Moderate): All DMG Dealt - 30.0%. Does not stack with effects of the same type.'
    },
    {
      name: 'Plasma Surge',
      type: 'Passive',
      description: 'When HP falls below 40.0% for the first time, immediately restores HP equal to 8.0% of Max HP and gains Bloodthirst permanently. Bloodthirst: Gains 30.0% Lifesteal. While Blood Moon is active, DMG dealt increases by 20.0%.'
    },
    {
      name: 'The Wraithwolf\'s Gambit',
      type: 'Ultimate',
      cost: 4,
      description: 'Rushes towards a select target, dealing 1650.0% ATK (P. DMG), and applying Taunt and All DMG Down (Moderate) on the target for 6 sec. Taunt: Control: Weak. The carrier stops casting all skills, sets the caster as target, and is unable to cast Ultimate or Specials during the effect. When the effect ends, the carrier will resume attacking their prior target. All DMG Down (Moderate): All DMG Dealt - 30.0%. Does not stack with effects of the same type.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced rush abilities and Bloodthirst effects.',
    attackTypeInfo: 'P.DMG: Physical damage through claws and fangs. Reduced by P.DEF. Enhanced by rush mechanics and lifesteal.',
    equipmentNote: 'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained rushing combat.'
  }
};