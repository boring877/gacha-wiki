// Erika - Zone Nova Character Data
// SSR Debuffer from Sapphire faction with Wind element
// Anti-shield debuffer with Violation mechanics and Disciplinary Action system

export const erikaData = {
  name: 'Erika',
  image: 'Erika.png',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Debuffer',
  role: 'Debuffer',
  faction: 'Sapphire',

  stats: {
    hp: '6,480',
    attack: '968',
    defense: '600',
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
  },

  skills: {
    normal: {
      name: 'On Record',
      cooldown: '2.0s',
      description:
        'Deals 120% ATK as wind damage to the designated enemy unit.',
    },
    auto: {
      name: 'Violation Confirmed',
      cooldown: '3.0s',
      description:
        'Deals 222.9% ATK as wind damage to the enemy unit with the highest Attack Power. If the skill target has a shield before being hit, inflicts [Violation Vulnerability] for 5 seconds.\n[Violation Vulnerability]: Damage taken +11.2%.',
    },
    ultimate: {
      name: 'Disciplinary Verdict',
      energyCost: '5',
      cooldown: '6.0s',
      description:
        'Deals 340.1% ATK as wind damage to all enemy units within 5 meters of the enemy unit with the highest Attack Power and inflicts [Disciplinary Action] for 4 seconds. This damage can [Interrupt] a skill the target is casting.\n[Disciplinary Action]: Healing received -16.3%, shielding received -11.2%; if the target has a shield when attacking, damage dealt -42.8%.',
    },
    passive: {
      name: 'Disciplinary Patrol',
      description:
        'When an allied unit is attacked by an enemy unit with a shield, that enemy unit is inflicted with [Violation Warning]: damage dealt -26% for 6 seconds. This effect cannot stack.\nAfter this unit\'s skill or ultimate hits an enemy unit, if the target has no shield, the target gains a shield equal to 1% of this unit\'s ATK.',
    },
  },

  teamSkill: {
    name: 'Combo Skill',
    description:
      'After battle starts, reduce total damage dealt by all enemy units by 9.5%. For every 1000 ATK this character has, additional damage reduction to all enemy units.',
    requirements: {
      faction: 'Sapphire',
      element: 'Wind',
      alternativeConditions: 'Team contains 2 Sapphire characters or 2 Wind characters',
    },
  },

  awakenings: [
    {
      level: 1,
      effect:
        'After battle starts, inflict [Martial Law] on all enemy units for 10 seconds.\n[Martial Law]: Damage dealt -11%; if the enemy unit has a shield when attacking, this reduction increases to 79%.',
    },
    {
      level: 2,
      effect:
        'When an allied character attacks a target with [Violation Vulnerability], damage dealt +18% and Crit Rate +38%.',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level cap +2.',
    },
    {
      level: 4,
      effect:
        'When allies attack a target that has any 2 of [Violation Warning] / [Violation Vulnerability] / [Disciplinary Action], that target\'s Defense -17%. If all 3 are present at the same time, this effect is tripled.',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level cap +2.',
    },
    {
      level: 6,
      effect:
        'During [Disciplinary Action], the target\'s healing received is additionally -49% and shielding received is additionally -27%.',
    },
  ],

  memoryCard: {
    name: 'Discipline Director',
    image: 'Erikacard.png',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'ATK +40%',
      'When the wearer\'s skill or ultimate hits a target, that target\'s healing received -12% and shielding received -10% for 3 seconds (cannot stack)',
      'If the target has a shield at that time, the target\'s damage dealt -18% for 3 seconds (cannot stack)',
    ],
    restriction: 'Only effective for Debuffer',
  },

  tags: [
    'Anti-Shield',
    'Debuffer',
    'Damage Reduction',
    'Anti-Heal',
    'Anti-Shield Gain',
    'DEF Shred',
    'Wind Damage',
    'Interrupt',
  ],
};

export const erikaSEO = {
  title: `${erikaData.name} - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for ${erikaData.name}, a ${erikaData.rarity} ${erikaData.element} ${erikaData.class} in Zone Nova. Includes Disciplinary Verdict ultimate, Violation Confirmed skill, Disciplinary Patrol passive, awakenings, Discipline Director memory card, and optimal build strategies.`,
};

export default erikaData;
