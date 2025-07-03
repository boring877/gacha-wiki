import { baseStats } from '../base-stats.js';

export const transcendentNoah = {
  id: 'transcendent-noah',
  name: 'Transcendent Noah',
  title: 'Seed of Death',
  subtitle: 'The Apostate',
  description: 'A powerful SSR marksman from the Ancestors faction who specializes in Shade summoning, effective range mechanics, and absorbing souls for devastating attacks.',
  image: '/images/games/silver-and-blood/characters/Transcendent_Noah.jpg', // official image
  tags: ['Ranged', 'AoE DMG', 'Summon'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Marksman',
  faction: 'Ancestors',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['transcendent-noah'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Dead Souls',
      type: 'Normal Attack',
      description: 'Releases a phantasm at the target which strikes each enemy in its path twice, dealing a total of 210.0% ATK (P. DMG).'
    },
    {
      name: 'Supernatural Presence',
      type: 'Special',
      description: 'After every 2 Basic ATK(s), deals 225.0% ATK (P. DMG) to the target, stealing its soul to summon a Shade. Shade: A summon that performs ranged Basic ATK in sync with Transcendent Noah. Only 5 can exist at the same time.'
    },
    {
      name: 'Phantasmal Nightmare',
      type: 'Passive',
      description: 'Talent: Effective Range. When units other than Shades are defeated, a Shade is summoned behind Noah which is untargetable and inherits 70.0% of Noah\'s ATK and 20.0% of his HP, lasting for 30 sec. Each Shade absorbs 10.0% of Noah\'s lost HP. When a Shade dies, Noah\'s DMG increases by 10.0%, stacking up to 5 times and lasting 10 sec. Effective Range: DMG dealt by this Vassal varies with range. It increases by up to 50% at the farthest target while decreasing by up to 50% at the target nearby. Shade: A summon that performs ranged Basic ATK in sync with Transcendent Noah. Only 5 can exist at the same time.'
    },
    {
      name: 'Valley of Death',
      type: 'Ultimate',
      cost: 4,
      description: 'Deals 300.0% ATK (P. DMG) to enemies in a cone and absorbs all allied Shades on the field, creating 4 Wormholes, plus 2 for each Shade absorbed. Each Wormhole deals 187.0% ATK (P. DMG) to a select target and 93.5% ATK (P. DMG) to other enemies in a circle around the target. If the select target dies, immediately switches to a nearby enemy. Shade: A summon that performs ranged Basic ATK in sync with Transcendent Noah. Only 5 can exist at the same time.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced Shade summoning and death-based abilities.',
    attackTypeInfo: 'P.DMG: Physical damage through phantasms and soul manipulation. Reduced by P.DEF. Enhanced by Shade synergy and effective range.',
    equipmentNote: 'Light Equipment: Focused on offensive capabilities with high ranged attack stats and summoning bonuses.'
  }
};