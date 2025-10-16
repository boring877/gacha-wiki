import { baseStats } from '../base-stats.js';

export const transcendentAmi = {
  id: 'transcendent-ami',
  name: 'Transcendent Ami',
  title: 'Seed of Famine',
  subtitle: 'The Atoll Devourer',
  description:
    'A powerful ancestral defender who commands the spirits of the lost Landis civilization, wielding ancient magic to protect and devastate.',
  image: 'transcendent-ami', // official image - updated path
  tags: ['Melee', 'Control'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Defender',
  faction: 'Ancestors',
  equipmentType: 'Heavy',
  moonPhase: 'New Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['transcendent-ami'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Wave of Inundation',
      type: 'Normal Attack',
      description: 'Deals 188.0% ATK (P. DMG) to the target',
    },
    {
      name: 'Decree of the Fallen Sovereign',
      type: 'Special',
      description:
        'Activates every 2 Basic ATK(s), generating 1 untargetable Landis Spirit nearby, up to a maximum of 3. All Landis Spirits each deal 450.0% ATK (P. DMG) to the target, recovering HP equal to the damage dealt',
    },
    {
      name: 'Crown of Landis',
      type: 'Passive',
      description:
        'With 1-2 Landis Spirits: gain M. DMG Taken Down (Minor). With 3 Landis Spirits: gain M. DMG Taken Down (Moderate). M. DMG Taken Down (Minor): M. DMG Taken -15.0%. Does not stack with effects of the same type. Cannot be dispelled. M. DMG Taken Down (Moderate): M. DMG Taken -30.0%. Does not stack with effects of the same type. Cannot be dispelled.',
    },
    {
      name: 'Dreams of Atlantis',
      type: 'Ultimate',
      cost: 4,
      description:
        'Transforms nearby Landis Spirits into a Landis Phantom which envelops Ami, who gains All DMG Taken Down (Moderate) for 12 sec, then generates a wave that Stuns and pushes back all enemies. Afterwards, deals 1200.0% ATK (P. DMG) to all enemies in range, resetting all targets for both Ami and surrounding enemies. All DMG Taken Down (Moderate): All DMG Taken -30.0%. Does not stack with effects of the same type. Stun: Control. Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhances the power of Landis Spirits and ancestral magic.',
    attackTypeInfo:
      'P.DMG: Physical damage through ancient Landis magic and melee combat. Reduced by P.DEF.',
    equipmentNote:
      'Heavy Equipment: Maximum defensive capabilities with high HP and defensive stats, perfect for tanking.',
  },
};
