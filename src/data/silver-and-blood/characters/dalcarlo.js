import { baseStats } from '../base-stats.js';

export const dalcarlo = {
  id: 'dalcarlo',
  name: 'Dalcarlo',
  title: 'Nightmare\'s Harbinger',
  subtitle: '',
  description: 'A powerful SSR enchanter from the Bloodborn faction who specializes in ranged AOE damage and debuff control through divination magic and tarot card mechanics.',
  image: '/images/games/silver-and-blood/characters/Dalcarlo.jpg',
  tags: ['Ranged', 'AOE DMG', 'Debuff'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Enchanter',
  faction: 'Bloodborn',
  equipmentType: 'Light',
  moonPhase: 'Crescent Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['dalcarlo'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Showdown',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Self-Fulfilling Prophecy',
      type: 'Special',
      description: 'After every 4 Basic ATK, deals 300.0% ATK (M. DMG) to the target and divined enemies, inflicting 2 stacks of Continuous DMG (Affliction), lasting for 10 sec.\n\nContinuous DMG (Affliction): Takes M. DMG equal to 30.0% ATK from the caster once every 2 sec. Stacks up to 10 time(s).'
    },
    {
      name: 'Diamond Spread',
      type: 'Passive',
      description: 'The magic circle from Dalcarlo\'s divination. Based on the instances of her Ultimate, applies 1 to 3 of the following effects in sequence to unaffected enemies in range:\n\n• The Magician: Transform for 2 sec (triggers once per Magic Circle).\n• The King: All DMG Down (Minor).\n• Death: All DMG Taken Up (Minor).\n\nMorph: Control. Strong. The carrier is interrupted and remains unable to cast Ultimate, Specials, Basic ATK, or move during the effect.\n\nAll DMG Down (Minor): All DMG Dealt -15.0%. Does not stack with effects of the same type.\n\nAll DMG Taken Up (Minor): All DMG Taken +15.0%. Does not stack with effects of the same type.'
    },
    {
      name: 'Wheel of Fortune (Upright)',
      type: 'Ultimate',
      cost: 3,
      description: 'Performs divination on a select circle, lasting 10 sec. Dalcarlo flings 3 cards at each enemy within the area, with each card dealing 375.0% ATK (M. DMG). Each subsequent Ultimate cast increases the number of cards by 1, up to 5 cards.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced divination range and card throwing mechanics.',
    attackTypeInfo: 'M.DMG: Magical damage through tarot divination and card attacks. Reduced by M.DEF. Enhanced by divination area effects and continuous damage stacks.',
    equipmentNote: 'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum magical damage output and divination effectiveness.',
    specialAbilities: 'Divination Circle: Creates lasting areas that apply multiple debuffs. Card Escalation: Ultimate casts increase card count from 3 to 5. Tarot Effects: Sequential application of transform, damage reduction, and damage amplification based on card draws.'
  }
};