import { baseStats } from '../base-stats.js';

export const quinn = {
  id: 'quinn',
  name: 'Quinn',
  title: "Blackbird's",
  subtitle: '',
  description:
    'A powerful SSR defender from the Bloodborn faction who specializes in team protection, damage sharing, and healing support through her garden sanctuary.',
  image: 'quinn', // official image
  tags: ['Melee', 'Buff', 'Healing'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Defender',
  faction: 'Bloodborn',
  equipmentType: 'Heavy',
  moonPhase: 'New Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['quinn'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Parasol',
      type: 'Normal Attack',
      description: 'Deals 187.0% ATK (M. DMG) to the target.',
    },
    {
      name: 'Parasol Dance',
      type: 'Special',
      description:
        "After battle begins, applies Parasol Shelter to all allies. When Parasol Shelter is removed, restores HP equal to 30.0% of Quinn's Max HP to allies. Parasol Shelter: When taking fatal DMG, blocks that DMG and all subsequent DMG for 0.5 sec, then removes Parasol Shelter. Cannot be dispelled.",
    },
    {
      name: 'Lightbound',
      type: 'Passive',
      description:
        "When allied units lose HP equal to 100.0% of Quinn's Max HP, Quinn gains 1 stack(s) of Scar of Crowley, up to a maximum of 4. Once Quinn's HP Percentage falls below 50.0%, 1 stack of Scar of Crowley is consumed to restore 25.0% of Max HP. Scar of Crowley: Mark effect. Cannot be dispelled.",
    },
    {
      name: 'Sunlit Garden',
      type: 'Ultimate',
      cost: 3,
      description:
        'Channels for 15 sec, creating a Garden. During this time, all other allied units gain All DMG Taken Down (Minor), while Quinn gains All DMG Taken Down (Moderate), and shares 55.0% DMG taken by all allied units. After casting her Ultimate, Scar of Crowley restores 4 stacks, while Quinn restores 8.0% Max HP every 1 sec until her Ultimate ends. All DMG Taken Down (Minor): All DMG Taken -15.0%. Does not stack with effects of the same type. Cannot be dispelled. All DMG Taken Down (Moderate): All DMG Received -30.0%. Does not stack with effects of the same type. Cannot be dispelled.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced garden protection and healing regeneration effects.',
    attackTypeInfo:
      'M.DMG: Magical damage through blood formulas and parasol techniques. Reduced by M.DEF. Enhanced by garden sanctuary mechanics.',
    equipmentNote:
      'Heavy Equipment: Maximum protection and survivability, ideal for tanking damage and protecting allies through damage sharing.',
  },
};
