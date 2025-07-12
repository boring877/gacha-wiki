// Gaia - Zone Nova Character Data
// Support/Healer character from Odius faction

export const gaiaData = {
  // Basic Character Information
  name: 'Gaia',
  image: 'Gaia',
  rarity: 'SSR',
  element: 'Holy',
  class: 'Healer',
  faction: 'Odius',
  
  // Base Stats (Level 80)
  stats: {
    hp: '10,548',
    attack: '580',
    defense: '918'
  },
  
  // Character Skills
  skills: {
    normal: {
      name: 'Gene Split',
      description: 'Deals Holy Damage to a target enemy, equal to 12% of the caster\'s max HP.'
    },
    auto: {
      name: 'Gene Collapse',
      cooldown: '10.0s',
      description: 'Deploys floating devices to other allied units. When the target takes damage, the floating device heals all allied characters every second for 5 seconds, restoring HP equal to 1% of Gaia\'s max HP + 120 HP. When Gaia uses her Ultimate Skill, she can replenish floating devices to other allied units.'
    },
    ultimate: {
      name: 'Dominion: Primordial Order',
      energyCost: '3',
      description: 'Increases max HP of all allied characters by 60%. The increased max HP cannot exceed 15% of Gaia\'s max HP at the start of the battle. Lasts 20 seconds. During the buff duration, Gaia can use [Emergency Treatment]. [Emergency Treatment]: Heals the allied unit with the lowest current HP percentage, restoring HP equal to 12% of Gaia\'s max HP.'
    },
    passive: {
      name: 'Primordial Regression',
      description: 'Upon entering battle, the ally with the lowest DEF gains [Motherly Love]. While [Motherly Love] is active: The target\'s max HP increases by 60% (increased max HP cannot exceed 15% of Gaia\'s max HP at battle start). When the [Motherly Love] holder would receive lethal damage: Triggers [Life Extension] effect - immediately restores HP to 100%, then gradually loses HP over time. HP loss accelerates each second. HP loss stops if the holder defeats an enemy during this state. Each ally can trigger this once per battle. [Motherly Love] disappears if Gaia is defeated.'
    }
  },
  
  // Team Skill
  teamSkill: {
    name: 'Maternal Guardian',
    description: 'Gaia gains +10% Max HP. At battle start: For every 5,000 Max HP Gaia has, her healing output increases by 5% (up to 6 stacks, max +30%).',
    requirements: {
      faction: 'Odius',
      element: 'Holy'
    }
  },
  
  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: 'Characters with [Motherly Love] gain +45% DEF. [Life Extension]\'s HP loss duration capped at 10 seconds.'
    },
    {
      level: 2,
      effect: 'Upon entering battle: Instantly cast Ultimate Skill with no energy cost. Using [Emergency Treatment] refreshes the duration of Ultimate Skill\'s buff.'
    },
    {
      level: 3,
      effect: '[Basic Attack], [Auto Skill], [Ultimate Skill], and [Passive] levels & max levels +2.'
    },
    {
      level: 4,
      effect: 'Gaia\'s healing output +37.5%.'
    },
    {
      level: 5,
      effect: '[Basic Attack], [Auto Skill], [Ultimate Skill], and [Passive] levels & max levels +2.'
    },
    {
      level: 6,
      effect: 'Upon entering battle: Two lowest-DEF allies gain [Motherly Love]. [Motherly Love] holders gain +50% additional Max HP (stacks with base effect, but total increase still capped at 15% of Gaia\'s starting HP).'
    }
  ],
  
  // Memory Card
  memoryCard: {
    name: 'A Smile That Topples Cities',
    image: 'Gaiacard',
    stats: {
      hp: '6,300',
      attack: '580',
      defense: '585'
    },
    effects: [
      'Max HP +40%',
      'Healing output +40%',
      'If wearer healed within last 1 second, additional +40% healing output'
    ]
  }
};

// SEO and Metadata
export const gaiaSEO = {
  title: '【Matriarch】Gaia - Zone Nova Character Guide | GachaWiki',
  description: 'Complete guide for 【Matriarch】Gaia in Zone Nova. Learn about her healing abilities, Motherly Love passive, team skills, awakening effects, and optimal build strategies for this powerful Odius faction support character.'
};