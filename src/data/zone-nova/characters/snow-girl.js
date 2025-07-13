// Snow Girl Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const snowGirlData = {
  // Basic Character Information
  name: 'Snow Girl',
  chineseName: '雪女',
  image: 'Snow', // Use format: charactername (e.g., 'Snow')
  rarity: 'SR', // SSR, SR, R
  element: 'Ice', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Heijing Castle', // Heijing Castle (平京城)
  
  // Base Stats (Level 80)
  stats: {
    hp: '7,850', // HP: 7850
    attack: '837', // Attack: 837
    defense: '608', // Defense: 608
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Snow Ghost Impact',
      chineseName: '雪鬼撞击',
      level: '10+4',
      cooldown: '2.0s',
      description: 'Deals 120% attack power ice damage to designated enemy unit'
    },
    auto: {
      name: 'Ice Snow Healing',
      chineseName: '冰雪治愈',
      level: '10+4',
      cooldown: '5.0s',
      description: 'Heals all friendly units, restoring HP equal to 33.6% + 182 of own attack power'
    },
    ultimate: {
      name: 'Ice Seal Protection',
      chineseName: '冰封庇护',
      level: '10+4',
      cooldown: '1.0s',
      energyCost: '3',
      description: 'Heals all friendly units, restoring HP equal to 47.2% + 182 of own attack power'
    },
    passive: {
      name: 'Frost Blessing',
      chineseName: '冰霜祝福',
      level: '10+4',
      description: 'Ultimate skill healing can add a 5-second continuous recovery effect to the target, recovering 75% of Snow Girls attack power + 29 HP per second'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description: 'Own attack increased by 10%, healing amount increased by 12.5%',
    requirements: {
      faction: 'Heijing Castle',
      element: 'Ice Frost',
      condition: '2 [Heijing Castle] colored or 2 [Ice Frost] colored characters'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'After ultimate skill heals friendly units, additionally increases targets damage dealt by 10% for 10 second' },
    { level: 2, effect: 'Normal attacks deal additional frost damage equal to 50% of own attack power' },
    { level: 3, effect: '[Skills] and [Normal Attack] level cap +4' },
    { level: 4, effect: 'Healing amount increased by 20%' },
    { level: 5, effect: '[Required Skills] and [Passive] level cap +4' },
    { level: 6, effect: 'Skills that heal friendly units can also trigger the passives continuous recovery effect' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'The Beauty of Heijing Castle',
    chineseName: '平京城的绝美',
    image: 'Snowcard', // Use format: characternamecard
    level: '80/80',
    stats: {
      hp: '5,000',
      attack: '500',
      defense: '500'
    },
    effects: [
      
      'When the healed targets HP is full, targets damage is increased by 24% for 10 seconds'
    ]
  }
};

// SEO data for Snow Girl
export const snowGirlSEO = {
  title: `${snowGirlData.name} (${snowGirlData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${snowGirlData.name}, a ${snowGirlData.rarity} ${snowGirlData.element} ${snowGirlData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export legacy structure for character registry compatibility
export const snowGirl = {
	id: 'snow-girl',
	name: 'Snow Girl',
	chineseName: '雪女',
	rarity: 'SR',
	element: 'Ice',
	role: 'Healer',
	faction: 'Heijing Castle',
	chineseFaction: '平京城',
	maxLevel: 80,
	
	baseStats: {
		hp: 7850,
		attack: 837,
		defense: 608,
		energyRecovery: 0.25,
		critRate: 0,
		critDamage: 50
	},
	
	images: {
		portrait: '/images/characters/Snow.jpg',
		card: '/images/characters/Snowcard.jpg'
	},
	
	tags: ['Healer', 'Support', 'Heijing Castle', 'Ice', 'Sustained Healing']
};

// Export default for easy importing
export default snowGirlData; 