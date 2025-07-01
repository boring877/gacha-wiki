import { baseStats } from '../base-stats.js';

export const incendiaryAgares = {
  id: 'incendiary-agares',
  name: 'Incendiary Agares',
  title: 'Seed of War',
  subtitle: 'The Beguiler',
  description: 'A powerful SSR sorcerer who specializes in channeled fire magic and self-sacrifice mechanics for devastating damage output.',
  image: '/images/games/silver-and-blood/characters/Incendiary_Agares.jpg', // official image
  tags: ['Mid-Range', 'Single-Target DMG', 'AoE DMG'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Ancestors',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['incendiary-agares'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Flaming Plume',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to enemies in a circle around the target.'
    },
    {
      name: 'Vile Red Lotus',
      type: 'Special',
      description: 'M. DMG increases by 4.0% every 2.5 sec, up to 50.0%.'
    },
    {
      name: 'Undying Ember',
      type: 'Passive',
      description: 'When Agares is near death, he descends into Flames and cannot be targeted. After 5 sec, he activates Flames of Creation. This state will be triggered early if all other allies are defeated. After Flames of Creation is cast, Agares DMG increases by 50.0%, his next Ultimate costs 0 Bloodsoul, and he doesn\'t lose HP from his Ultimate. Can only be triggered once per battle.'
    },
    {
      name: 'Firebrand\'s Torment',
      type: 'Ultimate',
      cost: 4,
      description: 'Channels at a select target for 10 sec, continuously dealing 45.0% ATK (M. DMG) to the target and 40.0% ATK (M. DMG) to enemies around it. While channeling, Agares loses 11.0% Max HP per sec. If the target dies, a new target within range will be selected.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced fire magic with increased channeling duration.',
    attackTypeInfo: 'M.DMG: Magical damage through fire sorcery. Reduced by M.DEF. Enhanced by self-sacrifice mechanics.',
    equipmentNote: 'Light Equipment: Focused on offensive capabilities with high magical attack stats and channeling bonuses.'
  }
};