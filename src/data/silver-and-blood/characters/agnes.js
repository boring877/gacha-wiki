import { baseStats } from '../base-stats.js';

export const agnes = {
  id: 'agnes',
  name: 'Agnes',
  title: 'Apprentice Cartographer',
  subtitle: '',
  description:
    'A powerful SSR warrior from the Kingdom faction who specializes in dimensional manipulation, area control, and debuffing enemies through her cartographic mastery.',
  image: '/images/games/silver-and-blood/characters/Agnes.jpg', // official image
  tags: ['Melee', 'Debuff', 'Control'],

  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Kingdom',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',

  // Base Stats (fetched from shared map)
  stats: baseStats['agnes'],

  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Survey',
      type: 'Normal Attack',
      description: 'Deals 113.0% ATK (P. DMG) to enemies ahead in a cone.',
    },
    {
      name: 'Meridian Tracing',
      type: 'Special',
      description:
        'Activates once every 3 Basic ATK(s). Deals 300.0% ATK (P. DMG) to enemies in a rectangle towards the target and grants a Shield equal to 30.0% of Max HP, lasting for 12 sec.',
      effects: [
        {
          name: 'Shield',
          description:
            'When receiving DMG, loses Shield Strength instead of HP. When receiving True DMG, loses Shield Strength equal to 200% of DMG taken. Shield cannot exceed 200% of Max HP.',
        },
      ],
    },
    {
      name: 'Multi-Coordinate Analysis',
      type: 'Passive',
      description:
        "When Agnes's skill hits 3 or more enemies, the DMG dealt is increased by 30.0%.",
    },
    {
      name: 'Temporal Construct',
      type: 'Ultimate',
      cost: 3,
      description:
        'Agnes constructs a Projected Plane at a select position. After a brief delay, the Projected Plane will pull enemies inside the plane toward its center while inflicting Movement Speed Down and P. DEF Down (Moderate) for 5 sec. Once the Projected Plane is constructed, Agnes transforms her weapon and enters her Planar Regression state for 12 sec, hurling boomerangs at the Projected Plane, each dealing 375.0% ATK (P. DMG) to enemies within the Projected Plane. Planar Regression modifies her Meridian Tracing skill, hurling a powerful boomerang at the Projected Plane that deals 750.0% ATK (P. DMG) to enemies within the Projected Plane.',
      effects: [
        {
          name: 'Pull Control',
          description:
            'Strong. Displace. Target is pulled forward and unable to cast Ultimate, Special (Active), Basic ATK, or move during the effect.',
        },
        {
          name: 'Movement Speed Down',
          description: 'Reduces Movement Speed by 90.0%.',
        },
        {
          name: 'P. DEF Down (Moderate)',
          description: 'P. DEF -20.0%. Does not stack with effects of the same type.',
        },
      ],
    },
  ],

  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect:
      'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced planar manipulation and dimensional control effects.',
    attackTypeInfo:
      'P.DMG: Physical damage through dimensional boomerangs and planar constructs. Reduced by P.DEF. Enhanced by planar regression mechanics.',
    equipmentNote:
      'Medium Equipment: Balanced attributes offering versatility for both offensive planar attacks and defensive shield generation.',
  },
};
