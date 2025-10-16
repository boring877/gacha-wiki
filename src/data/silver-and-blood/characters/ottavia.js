import { baseStats } from '../base-stats.js';

export const ottavia = {
  id: 'ottavia',
  name: 'Ottavia',
  title: 'Connoisseur of Doom',
  subtitle: '',
  description:
    'A powerful SSR warrior from the Bloodborn faction who specializes in single-target magical damage, defensive counterattacks, and survival mechanics.',
  image: 'ottavia',
  tags: ['Melee', 'Single-Target DMG'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Bloodborn',
  equipmentType: 'Medium',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['ottavia'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Blade Flurry',
      type: 'Normal Attack',
      description: 'Deals 150.0% ATK (M. DMG) to the target.',
    },
    {
      name: 'Rose Garden',
      type: 'Special',
      description:
        'Upon taking damage, there is a 50% chance to immediately deal 300.0% ATK (M. DMG) to the target. This effect can be triggered once every 4 sec.',
    },
    {
      name: 'Phantom Cloak',
      type: 'Passive',
      description:
        'When HP falls below 50.0%, becomes untargetable for 4 sec and gains 60.0% Lifesteal. This effect can be triggered once every 20 sec.',
    },
    {
      name: 'Steel Breeze',
      type: 'Ultimate',
      cost: 3,
      description:
        'Deals a total of 1500.0% ATK (M. DMG) to enemies in a rectangle, which is evenly distributed among all targets hit. Dispels all buffs on targets hit and applies M. DMG Taken Up (Moderate) for 6 sec. M. DMG Taken Up (Moderate): M. DMG Taken +30.0%. Does not stack with effects of the same type.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced magical damage and survival mechanics.',
    attackTypeInfo:
      'M.DMG: Magical damage through blood formulas and alchemical means. Reduced by M.DEF. Enhanced by buff dispelling and damage amplification.',
    equipmentNote:
      'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained magical combat.',
    specialAbilities:
      'Untargetable: Temporary invulnerability state that prevents enemy targeting. Lifesteal: Heals based on damage dealt. Counter-attack mechanics trigger on taking damage.',
  },
};
