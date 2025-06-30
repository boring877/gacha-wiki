// src/data/silver-and-blood/characters/kael.js
export const kael = {
  id: 'kael',
  name: 'Kael',
  title: 'The Silent Blade',
  subtitle: 'Master of Shadows',
  description: 'A mysterious warrior who strikes from the darkness.',
  
  // Game Mechanics
  rarity: 'SR',
  class: 'Assassin',
  faction: 'Bloodborn',
  equipmentType: 'Light',
  moonPhase: 'New Moon',
  attackType: 'P.DMG', // Physical Damage
  
  // Visuals
  image: '/images/games/silver-and-blood/characters/kael-placeholder.jpg',
  
  // Base Stats (Level 1)
  stats: {
    hp: 8500,
    atk: 1200,
    pDef: 450,
    mDef: 380,
    atkSpd: 1.15,
    bloodsoulRecovery: 12,
    critRate: 15,
    critDmgIncrease: 50,
    allDmgBonus: 0,
    allDmgReduction: 0,
    pDmgBonus: 10,
    mDmgBonus: 0,
    receivedHealingBonus: 0,
    bloodPower: 2800
  },
  
  // Skills (4 skills: Normal Attack, Special, Passive, Ultimate)
  skills: [
    {
      name: 'Shadow Strike',
      type: 'Normal Attack',
      description: 'A swift blade attack that generates Bloodsoul energy. Deals moderate P.DMG to a single target.'
    },
    {
      name: 'Phantom Dash',
      type: 'Special',
      description: 'Dashes through enemies, dealing P.DMG and gaining increased critical hit rate for the next attack.'
    },
    {
      name: 'Assassin\'s Focus',
      type: 'Passive',
      description: 'Permanently increases critical hit rate and critical damage. Effect doubles when health is below 50%.'
    },
    {
      name: 'Blood Moon Execution',
      type: 'Ultimate',
      description: 'Channels the power of the New Moon to deal massive P.DMG to all enemies. Damage increases based on missing enemy health.'
    }
  ],
  
  // Additional Info
  role: 'Physical DPS',
  
  // Game Mechanics Notes
  mechanics: {
    moonPhaseEffect: 'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhances all shadow-based abilities.',
    attackTypeInfo: 'P.DMG: Physical damage through blade techniques. Reduced by P.DEF. Effective against magical enemies.',
    equipmentNote: 'Light Equipment: Focused on offensive capabilities with high attack stats and critical bonuses.'
  }
}; 