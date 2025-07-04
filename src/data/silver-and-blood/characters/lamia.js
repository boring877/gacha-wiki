import { baseStats } from '../base-stats.js';

export const lamia = {
  id: 'lamia',
  name: 'Lamia',
  title: 'Scarlet Shadow',
  subtitle: '',
  description: 'A powerful SSR sorcerer from the Bloodborn faction who specializes in mid-range bounce attacks, summoning mechanics, and team healing support.',
  image: '/images/games/silver-and-blood/characters/Lamia.jpg',
  tags: ['Mid-Range', 'Bounce DMG', 'Healing'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Bloodborn',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['lamia'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Blood Veil',
      type: 'Normal Attack',
      description: 'Basic ATK Bounces between 4 enemies, dealing 135.0% ATK (M. DMG) to each enemy hit.'
    },
    {
      name: 'Scarlet Vassal Dance',
      type: 'Special',
      description: 'After Basic ATK deals DMG 8 times, 1 Insatiable Blood Servants are awakened, which deal 150.0% ATK (M. DMG) to the target (CRIT Hit) before disappearing. A maximum of 8 Insatiable Blood Servants can be active.'
    },
    {
      name: 'Family Honor',
      type: 'Passive',
      description: 'When Blood Moon is active, all allied units gain 25.0% Lifesteal.'
    },
    {
      name: 'Ritual of Blood',
      type: 'Ultimate',
      cost: 4,
      description: 'Launches a Bounce attack at the target, hitting up to 8 enemies (prioritizes different targets). Each hit deals 600.0% ATK (M. DMG). If repeated targets are hit, DMG is reduced by 50.0%. For each new unit hit, Lamia summons 1 Insatiable Blood Servant. Bounce: After every attack, the following attack will target the nearest eligible unit within the specified range of the hit target.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced bounce mechanics and blood servant summoning.',
    attackTypeInfo: 'M.DMG: Magical damage through blood magic and summoning. Reduced by M.DEF. Enhanced by bounce chains and servant synergy.',
    equipmentNote: 'Light Equipment: Attack-focused gear with high offensive stats, maximizing magical damage output and servant effectiveness.',
    specialAbilities: 'Bounce: Attacks chain between multiple enemies, prioritizing different targets. Insatiable Blood Servants: Summoned minions that provide additional damage and battlefield presence. Blood Moon synergy provides team lifesteal support.'
  }
};