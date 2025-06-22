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
      description: 'Heals all friendly units, recovers self attack power 33.6%+182 HP'
    },
    ultimate: {
      name: 'Ice Seal Protection',
      chineseName: '冰封庇护',
      level: '10+4',
      cooldown: '1.0s',
      energyCost: '3',
      description: 'Heals all friendly units, recovers self attack power 47.2%+182 HP'
    },
    passive: {
      name: 'Frost Blessing',
      chineseName: '冰霜祝福',
      level: '10+4',
      description: 'Required skill healing can add 5 second sustained recovery effect to targets, each second recovers Snow Girl\'s attack power 5%+29 HP'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description: 'Passive: Self attack power +10%, healing amount +12.5%',
    requirements: {
      faction: 'Heijing Castle',
      element: 'Ice Frost',
      condition: '2 [Heijing Castle] colored or 2 [Ice Frost] colored characters'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'After required skill heals friendly units, additionally makes targets take 10% less damage for 10 seconds' },
    { level: 2, effect: 'Normal attacks deal self attack power 50% additional ice frost damage' },
    { level: 3, effect: '[Skills] and [Normal Attack] level cap +4' },
    { level: 4, effect: 'Healing amount increased by 20%' },
    { level: 5, effect: '[Required Skills] and [Passive] level cap +4' },
    { level: 6, effect: 'Skills can also trigger passive\'s sustained recovery effect when healing friendly units' }
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
      'Only effective for healers, 5-price awakening',
      'The Beauty of Heijing Castle: Healing amount +30%, when recovering targets\' life value is full, target damage +24% for 10 seconds'
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