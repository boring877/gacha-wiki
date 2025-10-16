import { baseStats } from '../base-stats.js';

export const stella = {
  id: 'stella',
  name: 'Stella',
  title: 'Starbound Voyager',
  subtitle: '',
  description:
    'An SSR assassin from the Bloodborn faction who specializes in piercing damage, teleportation, and applying Stasis to enemies for devastating follow-up attacks.',
  image: 'stella',
  tags: ['Melee', 'Teleport'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Bloodborn',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'Piercing DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['stella'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Puncture',
      type: 'Normal Attack',
      description: 'Deals 2 hits to the target for a total of 127.0% ATK (Piercing DMG).',
    },
    {
      name: 'Spectral Illusion',
      type: 'Special',
      description:
        "After battle begins, Stella becomes untargetable and Teleports behind the farthest enemy, dealing 1500.0% ATK (Piercing DMG) and setting them as her target. When Stella's HP is below 50.0%, this skill will be cast again on the enemy with the most Stasis, triggering at most once every 8 sec.",
    },
    {
      name: 'Temporal Bifurcation',
      type: 'Passive',
      description:
        "When Stella deals DMG to a target (except for her Talent) whose Stasis has not reached 50.0% of its Max HP, she deals an additional 120.0% ATK (Piercing DMG). HP lost from this DMG becomes additional Stasis. When a unit with Stasis is defeated, Stella casts her Special again on the enemy with the most Stasis. Additionally, her next Ultimate costs 1 less Bloodsoul. Stella's DMG increases based on a target's Stasis, up to a maximum of 30.0%. Stasis: This portion of HP is permanently frozen and cannot be recovered.",
    },
    {
      name: 'Whirling Dervish',
      type: 'Ultimate',
      cost: 4,
      description:
        'Stella Teleports to a select location and becomes untargetable, then rapidly casts Blade Barrage, dealing 8 hits of 172.0% ATK (Piercing DMG) to all enemies within close range.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced burst damage and mobility.',
    attackTypeInfo:
      'Piercing DMG: A special type of DMG. When inflicted, it ignores a certain amount of P. DEF and M. DEF and deals 200% DMG to Shields. This DMG type is not affected by P. DMG and M. DMG related effects.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, suited for sustained combat.',
  },
};
