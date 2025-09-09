import { baseStats } from '../base-stats.js';

export const valora = {
  id: 'valora',
  name: 'Valora',
  title: 'Steeled Mare',
  subtitle: '',
  description:
    'A powerful SSR assassin from the Ancestors faction who specializes in melee combat, area damage, and debuff application with devastating rush attacks.',
  image: '/images/games/silver-and-blood/characters/Valora.jpg',
  tags: ['Melee', 'AOE DMG', 'Debuff'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Ancestors',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['valora'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Swing',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG).',
    },
    {
      name: 'Steely Resolve',
      type: 'Special',
      description:
        'When the battle begins, Rushes forward and deals 600.0% ATK (P. DMG) to the first enemy hit, creating a Hellfire circle around them for 15 sec and marking them as the target. Hellfires deal 150.0% ATK (P. DMG) to enemies within range every 1.5 sec. Passively triggers every 7 sec, causing all Hellfires on the field to explode, dealing P. DMG equal to 200.0% times of base DMG to enemies within range. This DMG is guaranteed to CRIT.',
    },
    {
      name: 'Soul Immolation',
      type: 'Passive',
      description:
        "Valora increases her ATK and CRIT Rate based on the range of Hellfire, by up to 40.0%. All enemies within range of Hellfire gain Soul Burn. When casting her Ultimate, Valora gains a Shield equal to 30.0% Max HP that lasts until her Ultimate ends. During this period, when any of Valora's Shields are broken, Valora becomes Untargetable for 2 sec. Soul Burn: CRIT DMG Taken +20.0%, increasing by 5.0% every 3 sec, up to 40.0%. Shield: When receiving DMG, loses Shield Strength instead of HP. When receiving True DMG or Piercing DMG, loses Shield Strength equal to 200% of DMG taken. Shield cannot exceed 200% of Max HP.",
    },
    {
      name: 'Spiritual Anguish',
      type: 'Ultimate',
      cost: 6,
      description:
        'This Ultimate has Overdrive. Valora gains immunity to all control effects and rushes toward the farthest or selected enemy on Ludgard, dealing 200.0% ATK (P. DMG) to enemies along the path and applying Stun for 1 sec, then dealing 225.0% ATK (P. DMG) to the target and nearby enemies. After her first rush, Valora Channels for 15 sec, during which she rushes toward the farthest enemy every 8 sec, dealing 200.0% ATK (P. DMG) to enemies along her path as well as the target. In this phase, enemies not yet affected by rush are prioritized. After each rush, deals 225.0% ATK (P. DMG) to enemies in a cone around the nearest target. Each rush during her Ultimate leaves Hellfire on the ground for 15 sec, dealing 150.0% ATK (P. DMG) to enemies within range once every 1.5 sec. Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Special (Active), Basic ATKs, or move during the effect. Overdrive: When above 50% Bloodsoul, can be cast even with insufficient Bloodsoul. If there is extra Bloodsoul when casting, enters Overdrive, during which any Ultimates costing over 0 cannot be cast, however Bloodsoul recovery rate is increased by 20%. Overload ends when Bloodsoul recovers to 0.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced area control and persistent damage effects.',
    attackTypeInfo:
      'P.DMG: Physical damage through martial prowess and steel weapons. Reduced by P.DEF. Enhanced by hellfire synergy.',
    equipmentNote:
      'Light Equipment: High offensive stats for maximum physical damage output and mobility.',
  },
};
