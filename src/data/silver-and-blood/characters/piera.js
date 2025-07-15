import { baseStats } from '../base-stats.js';

export const piera = {
  id: 'piera',
  name: 'Piera',
  title: 'Bone Collector',
  subtitle: '',
  description:
    'A powerful SSR sorcerer from the Church faction who specializes in summoning Spirit Bone Towers and providing magical support from mid-range.',
  image: '/images/games/silver-and-blood/characters/Piera.jpg',
  tags: ['Mid-Range', 'Summon'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Sorcerer',
  faction: 'Church',
  equipmentType: 'Light',
  moonPhase: 'Full Moon',
  attackType: 'M.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['piera'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Salt Pillar',
      type: 'Normal Attack',
      description: 'Deals 225.0% ATK (M. DMG) to the target.',
    },
    {
      name: 'Silver Corpse Tower',
      type: 'Special',
      description:
        "After every 2 Basic ATK(s), summons 1 Spirit Bone Tower inheriting 50.0% of Piera's HP, P. DEF, M. DEF, and 70.0% of her ATK, lasting 25 sec. Spirit Bone Tower uses Basic ATKs to deal 225.0% ATK (M. DMG) to the target. Spirit Bone Tower: Summons up to 3 units. When 2 present, their Basic ATK turns into a beam, DMG Up by 20%. When 3 present, their Basic ATK can Bounce up to 3 times.",
    },
    {
      name: 'Heap of Bones',
      type: 'Passive',
      description:
        'After casting Ultimate, applies ATK SPD UP (Major) to all allied Summons for 6 sec. ATK SPD Up (Major): ATK SPD +50.0%. Does not stack with effects of the same type.',
    },
    {
      name: 'Sacrificial Coffin',
      type: 'Ultimate',
      cost: 4,
      description:
        'Deals 1350.0% ATK (M. DMG) to the target, making all allied Spirit Bone Towers focus fire on this target for 8 sec. Spirit Bone Tower: Summons up to 3 units. When 2 present, their Basic ATK turns into a beam, DMG Up by 20%. When 3 present, their Basic ATK can Bounce up to 3 times.',
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Full Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced tower summoning and focused fire coordination.',
    attackTypeInfo:
      'M.DMG: Magical damage through bone magic and spirit towers. Reduced by M.DEF. Enhanced by tower synergies and focused fire mechanics.',
    equipmentNote:
      'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum magical damage and tower effectiveness.',
  },
};
