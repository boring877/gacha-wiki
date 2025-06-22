// Rift Tide III Data
export const riftTide3Data = {
  id: 'rift-tide-3',
  name: 'Rift Tide III',
  type: 'tide',
  status: 'active', // Will be determined dynamically
  startDate: '2025-05-07',
  endDate: '2025-06-23T23:59:59',
  timezone: 'UTC+8',
  eventPeriod: 'May 7 - June 23, 2025',
  shortDescription: 'Block-focused rift with energy recovery and damage stacking mechanics.',
  fullDescription: 'Block-focused rift with energy recovery and damage stacking mechanics. Team up using [Rift Laws] to defeat waves of enemies surging through dimensional tears.',
  focus: 'Block mechanics',
  difficulty: 'Medium',
  featured: false,
  bannerImage: '/images/rifts/rift-tide-3.jpg', // Optional
  lawEffects: [
    'When our characters successfully [Block], deals damage equal to 30% of own defense to nearby enemies, maximum trigger once every 0.5 seconds.',
    'When our characters successfully [Block], our entire team increases energy recovery speed by 1%, maximum 50 stacks, lasting 15 seconds.',
    'When our characters successfully [Block], our entire team increases damage by 2%, maximum 25 stacks, lasting 15 seconds.'
  ],
  rewards: [
    'Rift Crystals',
    'Enhancement Materials',
    'Character EXP',
    'Gold'
  ],
  requirements: [
    'Complete Chapter 3',
    'Team Level 25+',
    'Recommended: Block-focused characters'
  ],
  tips: [
    'Use characters with high block rates like Arthur and Guinevere',
    'Focus on defensive formations to maximize blocking',
    'Stack damage boost effects for maximum efficiency',
    'Energy recovery helps with skill rotation'
  ],
  relatedGuides: [
    '/guides/zone-nova/characters/arthur/',
    '/guides/zone-nova/characters/guinevere/',
    '/guides/zone-nova/runes/'
  ]
}; 