import { baseStats } from '../base-stats.js';

export const limine = {
  id: 'limine',
  name: 'Limine',
  title: 'Scarlet Matriarch',
  subtitle: '',
  description: 'A powerful SSR sorcerer who commands blood magic and controls the battlefield through Blood Servant manipulation.',
  image: '/images/games/silver-and-blood/characters/Limine.jpg', // official image
  tags: ['Mid-Range', 'AoE DMG'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Ancestors',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['limine'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Bloody Thorn',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to enemies in a circle around the target.'
    },
    {
      name: 'Gateway to Hell',
      type: 'Special',
      description: 'At the start of battle, Limine creates a blood explosion a certain distance from herself, dealing 750.0% ATK (M. DMG) to hit enemies and turning them into Blood Servants for 20 sec. Boss-level units cannot be turned into Blood Servants.'
    },
    {
      name: 'Voracity',
      type: 'Passive',
      description: 'Limine gains 30.0% Lifesteal from DMG dealt to Blood Servants. When a Blood Servant dies, Limine gains 1 stack of Blood Frenzy. When Blood Moon is active, the effects of Blood Frenzy are doubled. Blood Frenzy: Increases Bloodsoul Recovery by 200 and M. DMG by 10.0%, stacking up to 5. Cannot be dispelled.'
    },
    {
      name: 'Crimson Baptism',
      type: 'Ultimate',
      cost: 6,
      description: 'Deals 1320.0% ATK (M. DMG) to enemies in a circle. If 2 Blood Servants are hit, DMG increases by 20.0%, or by 50.0% when 4 are hit, with the cost of the next cast reduced by 2.0. All enemies hit become Blood Servants for 20 sec.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Blood Frenzy effects are doubled when Blood Moon is active.',
    attackTypeInfo: 'M.DMG: Magical damage through blood sorcery. Reduced by M.DEF. Enhanced by Blood Servant synergy.',
    equipmentNote: 'Light Equipment: Focused on offensive capabilities with high attack stats and magical bonuses.'
  }
};