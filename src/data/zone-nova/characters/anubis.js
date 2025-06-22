// Anubis Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const anubisData = {
  // Basic Character Information
  name: 'Anubis',
  chineseName: '阿努比斯',
  image: 'Anubis', // Use format: charactername (e.g., 'Anubis')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Tank, DPS, Buffer, Debuffer, Healer
  faction: 'Kaimique', // Kaimique (凯米奇)
  
  // Base Stats (Level 80)
  stats: {
    hp: '9,180', // HP: 9180
    attack: '1,004', // Attack: 1004
    defense: '729', // Defense: 729
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDamage: '50%'
  },
  
  // Skills
  skills: {
    normal: {
      name: 'Underworld Touch',
      chineseName: '冥神之触',
      level: '10+4',
      cooldown: '2.0s',
      description: 'Deals 120% attack power Chaos damage to designated enemy unit.'
    },
    auto: {
      name: 'Divine Punishment Rain',
      chineseName: '天罚之雨',
      level: '10+4',
      cooldown: '8.0s',
      description: 'Summons meteors to attack designated enemy unit, dealing 96% attack power Chaos damage to target and surrounding 2m range, adding 1 layer [Nightmare]. [Nightmare]: Deals 5.6% Chaos damage per second, max 10 layers.'
    },
    ultimate: {
      name: 'Destined Reversal',
      chineseName: '命定逆转',
      level: '10+4',
      cooldown: '1.0s',
      energyCost: '4',
      description: 'Recovers self based on current HP ratio with lowest attack power +112.8%+668 HP. Enhancement: All team members recover self attack power +112.8%+668 HP, and take 10% less damage for 10 seconds.'
    },
    passive: {
      name: 'Soul Siphon',
      chineseName: '灵魂虹吸',
      level: '10+4',
      description: 'When using skills to attack targets with 15+ layers or sustained damage, heals entire team, recovers self attack power 97.2%+445 HP and can be used once every 8 seconds [Enhancement Required].'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    chineseName: '组合技',
    level: '1',
    description: 'Passive: Self attack power +10%. Battle Start: Every 500 attack power increases self healing by 5%, max 6 times.',
    requirements: {
      faction: 'Kaimique',
      element: 'Chaos',
      condition: '2 [Kemi] colored or 2 [Chaos] colored characters'
    }
  },
  
  // Awakening Effects (6 levels)
  awakenings: [
    { level: 1, effect: 'Passive skill conditions reduced from 20 layers to 15 layers' },
    { level: 2, effect: 'All healing effects from Anubis receive 10% damage reduction for 5 seconds' },
    { level: 3, effect: '[Skills] and [Normal Attack] level cap +4' },
    { level: 4, effect: 'Healing amount increased by 37.5%' },
    { level: 5, effect: '[Required Skills] and [Passive] level cap +4' },
    { level: 6, effect: 'Skills will summon additional meteors for consecutive attacks' }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'Midnight Work',
    chineseName: '熬夜工作',
    image: 'Anubiscard', // Use format: characternamecard
    level: '80/80',
    stats: {
      hp: '6,000',
      attack: '800',
      defense: '600'
    },
    effects: [
      'Midnight Work: Healing amount +50%, each healing within 3 seconds gives target +40% attack power for 3 seconds'
    ]
  }
};

// SEO data for Anubis
export const anubisSEO = {
  title: `${anubisData.name} (${anubisData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${anubisData.name}, a ${anubisData.rarity} ${anubisData.element} ${anubisData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`
};

// Export default for easy importing
export default anubisData; 