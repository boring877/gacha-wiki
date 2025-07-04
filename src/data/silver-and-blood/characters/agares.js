import { baseStats } from '../base-stats.js';

export const agares = {
  id: 'agares',
  name: 'Agares',
  title: 'Poet of Flame',
  subtitle: '',
  description: 'A powerful SSR sorcerer from the Church faction who specializes in mid-range AoE damage, continuous affliction effects, and phoenix summoning with cooldown reduction mechanics.',
  image: '/images/games/silver-and-blood/characters/Agares.jpg',
  tags: ['Mid-Range', 'AoE DMG', 'Continuous DMG'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Church',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['agares'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Glimmer',
      type: 'Normal Attack',
      description: 'Deals 135.0% ATK (M. DMG) to enemies in a circle around the target.'
    },
    {
      name: 'Tormented Soul',
      type: 'Special',
      description: 'Every 20 sec, summons a Phoenix that deals 225.0% ATK (M. DMG) to one random target. For each Continuous DMG effect afflicted on enemies, the cooldown is reduced by 1 sec, up to a maximum of 5 sec.'
    },
    {
      name: 'Searing Pain',
      type: 'Passive',
      description: 'Basic ATK inflicts 1 stack of Continuous DMG (Affliction) for 8 sec on units hit. Continuous DMG (Affliction): Takes M. DMG equal to 30.0% ATK from the caster once every 2 sec. Stacks up to 10 time(s).'
    },
    {
      name: 'Endless Purgatory',
      type: 'Ultimate',
      cost: 4,
      description: 'Deals 3 attacks on enemies in a select area for a total of 900.0% ATK (M. DMG), and inflicts 5 stack(s) of Continuous DMG (Affliction) on units hit, lasting 10 sec. Continuous DMG (Affliction): Takes M. DMG equal to 30.0% ATK from the caster once every 2 sec. Stacks up to 10 time(s).'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced affliction stacking and phoenix summoning effectiveness.',
    attackTypeInfo: 'M.DMG: Magical damage through flame and phoenix magic. Reduced by M.DEF. Enhanced by affliction synergy and area effects.',
    equipmentNote: 'Light Equipment: Attack-focused gear with high offensive stats, maximizing magical damage output and affliction potency.',
    specialAbilities: 'Continuous DMG (Affliction): Stacking magical damage over time that reduces phoenix cooldown. Phoenix Summoning: Automated damage with intelligent cooldown reduction based on battlefield afflictions. AoE Basic Attacks with automatic affliction application.'
  }
};