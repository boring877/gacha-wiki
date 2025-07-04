import { baseStats } from '../base-stats.js';

export const pavana = {
  id: 'pavana',
  name: 'Pavana',
  title: 'The Spectral Mind',
  subtitle: '',
  description: 'A powerful SSR enchanter from the Church faction who specializes in ranged magical damage, AoE control, and sleep-based crowd control mechanics.',
  image: '/images/games/silver-and-blood/characters/Pavana.jpg',
  tags: ['Ranged', 'AoE DMG', 'Control'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Church',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['pavana'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Shadow Strike',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Dream Thief',
      type: 'Special',
      description: 'Activates once every 4 Basic ATK(s). Fires a piercing shot at target, dealing 300.0% ATK (M. DMG) to the target as well as enemies in the path. Enemies hit are inflicted with Sleep for 4 sec. Sleep: Control: Strong. The carrier is unable to cast Ultimate, Specials, Basic ATK, or move during the effect. Effect is removed after Carrier takes DMG equal to 25.0% Max HP.'
    },
    {
      name: 'Tainted Spirit',
      type: 'Passive',
      description: 'When an enemy with Sleep is awakened by taking DMG, Pavana inflicts DMG Taken Up (Minor) on the target for 6 sec. If Sleep expires naturally, she instead inflicts All DMG Dealt Down (Minor) for 6 sec. Sleep: Control: Strong. The carrier is unable to cast Ultimate, Specials, Basic ATK, or move during the effect. Effect is removed after Carrier takes DMG equal to 25.0% Max HP.'
    },
    {
      name: 'Mists of Deceit',
      type: 'Ultimate',
      cost: 3,
      description: 'Deals 750.0% ATK (M. DMG) to enemies around the select target and inflicts Sleep for 6 sec. Sleep: Control: Strong. The carrier is unable to cast Ultimate, Specials, Basic ATK, or move during the effect. Effect is removed after Carrier takes DMG equal to 25.0% Max HP.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced sleep control and magical damage amplification.',
    attackTypeInfo: 'M.DMG: Magical damage through spectral abilities and mind control. Reduced by M.DEF. Enhanced by sleep mechanics and piercing attacks.',
    equipmentNote: 'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained ranged support combat.',
    specialAbilities: 'Sleep: Strong crowd control that completely incapacitates enemies but can be broken by sufficient damage. Piercing attacks hit multiple enemies in a line. Debuff management through sleep state changes.'
  }
};