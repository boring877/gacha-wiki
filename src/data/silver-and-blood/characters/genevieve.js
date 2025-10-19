import { baseStats } from '../base-stats.js';

export const genevieve = {
  id: 'genevieve',
  name: 'Genevieve',
  title: 'Timeless FireBrand',
  subtitle: '',
  description:
    'A powerful SSR sorcerer from the Kingdom faction who commands a War Golem through tactical summoning and control abilities.',
  image: 'genevieve',
  tags: ['Ranged', 'Summon', 'Control'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Kingdom',
  equipmentType: 'Medium',
  moonPhase: 'Full Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['genevieve'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Maneuver',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (P. DMG) to the target.',
    },
    {
      name: 'Checkmate Stratagem',
      type: 'Special',
      description:
        "When the battle begins, summons a War Golem at a certain distance ahead that inherits 100% of Genevieve's ATK, DEF, and HP, dealing 600.0% ATK (P. DMG) to enemies around the War Golem.",
    },
    {
      name: 'Crown of Eternity',
      type: 'Passive',
      description:
        'When there is an allied summon on the field, Genevieve gains 1 stack of Endless Gambit, up to 10 stacks. When Genevieve gains Endless Gambit, she applies 1 stack of Conspiracy to Transcendent Noah.',
      effects: [
        {
          name: 'Endless Gambit',
          description:
            "When Genevieve casts her Ultimate, she enhances the War Golem based on the stacks of Endless Gambit she has. Each stack of Endless Gambit increases the War Golem's All DMG by 10.0% and ATK Speed by 5.0% for 15 sec. Cannot be dispelled.",
        },
        {
          name: 'Conspiracy',
          description:
            'Increases All DMG by 15.0% and ATK Speed by 5.0%. Maximum 5 stacks. Cannot be dispelled.',
        },
      ],
    },
    {
      name: 'Torrent of Intersecting Truth',
      type: 'Ultimate',
      cost: 4,
      description:
        'Moves the War Golem to the select position to deal 1500.0% ATK (P. DMG) to all enemies in a circle and applying Stun for 3 sec. The War Golem also gains 1 stack of Sharp Advance. Summons one War Golem at the select location when none exists on the field.',
      effects: [
        {
          name: 'War Golem',
          description:
            "Summon (1 max). Cannot move, and is not prioritized as a target. Performs Basic ATK against nearby enemies, triggering Special after 4 Basic ATKs that deals DMG to enemies within range and Stunning them. Upgrade Genevieve's Basic ATK and Special Skill to increase War Golem's Basic ATK and Special DMG.",
        },
        {
          name: 'Sharp Advance',
          description:
            "At 1 stack: increases the range of War Golem's Basic ATK and Special. At 2 stacks: increases War Golem's Ultimate range and Ultimate DMG by 30.0%. Maximum 2 stacks. Cannot be dispelled.",
        },
        {
          name: 'Stun',
          description: 'Cannot take action for 3 seconds.',
        },
      ],
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: All Bloodsoul Cost -1 and 25% more DMG while Blood Moon is active. Enhanced summon control and battlefield positioning.',
    attackTypeInfo:
      'P.DMG: Physical damage through tactical commands and War Golem attacks. Reduced by P.DEF. Enhanced by summon synergies.',
    equipmentNote:
      'Medium Equipment: Balanced gear providing offensive capability and tactical flexibility, ideal for commanding summoned units.',
  },
};
