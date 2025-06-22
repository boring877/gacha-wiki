// Rift Tide IV Data
export const riftTide4Data = {
  id: 'rift-tide-4',
  name: 'Rift Tide IV',
  type: 'tide',
  status: 'active',
  startDate: '2025-06-10',
  endDate: '2025-07-08T03:59:59',
  timezone: 'UTC+8',
  eventPeriod: 'June 10 - July 8, 2025',
  shortDescription: 'Pursuit and Thunder Mark mechanics with enhanced blocking effects.',
  fullDescription: 'Advanced rift featuring Pursuit and Thunder Mark mechanics with enhanced blocking effects. Requires strategic positioning and timing to maximize effectiveness.',
  focus: 'Pursuit & Thunder Mark',
  difficulty: 'Hard',
  featured: true,
  bannerImage: '/images/rifts/rift-tide-4.jpg', // Optional
  lawEffects: [
    'When any character uses a skill, all allies gain [Pursuit]: Next basic attack deals +50% damage and cannot miss.',
    'When any character blocks, all enemies receive [Thunder Mark]: Take 20% more damage from all sources for 10 seconds.',
    'At the start of battle, all allies gain [Enhanced Block]: +30% block rate and blocked attacks heal the blocker for 5% max HP.',
    'When an enemy with [Thunder Mark] is defeated, all allies recover 15 energy and gain +25% critical rate for 12 seconds.'
  ],
  rewards: [
    'Advanced Rift Crystals',
    'Rare Enhancement Materials',
    'Thunder Essence',
    'Character EXP',
    'Gold'
  ],
  requirements: [
    'Complete Chapter 5',
    'Team Level 40+',
    'Recommended: Chaos offensive/defensive team'
  ],
  tips: [
    'Balance block-focused and damage dealers in your team',
    'Focus on applying Thunder Mark to priority targets first',
    'Use Pursuit effects strategically for maximum damage output',
    'Time blocks to maximize Thunder Mark application',
    'Characters like Loki work well for marking multiple enemies'
  ],
  relatedGuides: [
    '/guides/zone-nova/characters/loki/',
    '/guides/zone-nova/characters/arthur/',
    '/guides/zone-nova/runes/',
    '/guides/zone-nova/crafting/'
  ]
}; 