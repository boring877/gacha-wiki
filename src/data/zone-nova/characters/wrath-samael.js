// Wrath-Samael Character Data - Zone Nova
// SSR Guardian from Bicta Tower faction with Chaos element
// Defense-scaling tank with Neutralize mechanics and Wrath stack system

export const wrathSamaelData = {
  // Basic Character Information
  name: 'Wrath-Samael',
  image: 'Wrath_Samael', // Image identifier
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Guardian', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Bicta Tower', // Bicta Tower faction for combination skill compatibility

  // Base Stats (Level 80)
  stats: {
    hp: '11,576', // Base HP
    attack: '480', // Base Attack
    defense: '1,549', // Base Defense
    energyRecovery: '0.25/s', // Energy Recovery rate
    critRate: '0%', // Base Critical Rate
    critDmg: '50%', // Base Critical Damage
  },

  // Skills
  skills: {
    normal: {
      name: 'Wrath Strike',
      cooldown: '2.0s',
      description:
        'Deals damage equal to 120% of Defense to the target as Chaos damage.',
    },
    auto: {
      name: 'Trial of Original Sin',
      cooldown: '5.0s',
      description:
        'Allies gain +57.3% Neutralize Rate for 5 seconds.\n[Neutralize] has a chance to reduce damage taken by 30% (Critical Damage ignores this effect).\n\n[Sin] Unleashed: When [Wrath] stacks reach 20, consumes 20 stacks of [Wrath] to activate:\n• Pulls in the 1 enemy with the highest ATK.\n• Deals Chaos DMG equal to 294.3% of DEF in a 3-radius fan area in front, causing minor Knockback.\n• Self DEF +13.2% for 7s (max 10 stacks).',
    },
    ultimate: {
      name: 'Divine Punishment: Absolute Territory',
      cooldown: '7.0s',
      energyCost: '5',
      description:
        'After a short delay:\n• Allies: Neutralize Rate +68.6%, "Neutralize DMG Reduction" multiplier +43.8%, Damage Taken -17.8%.\n• Enemies: Crit Rate reduced by 60.6%. All enemies enter [Frenzy].\n\n[Frenzy]: Reduces normal attack and skill cooldown by 31.3% for 5 seconds.',
    },
    passive: {
      name: 'Guardian of Paradox',
      description:
        'Opening Burst: At the start of battle, self Neutralize Rate +36% and Neutralize DMG Reduction +38.2% for 7 seconds.\n\nNeutralize Feedback: When a teammate successfully Neutralizes, gain a Shield equal to 50.4% of Samael\'s Defense. Samael gains 1 stack of Wrath.\n\nLimit Break: When Wrath reaches 200 stacks, Samael cannot use Ultimate. [Sin] Unleashed consumes 10 times the Wrath (triggering effect 10 times) and self DMG Reduction +22.4%.',
    },
  },

  // Team Skill (Combination Skill)
  teamSkill: {
    name: 'Combination Skill',
    description:
      'Defense increased by 15%. At the start of battle, every 500 Defense increases Self Neutralize DMG Reduction by 2%, up to a maximum of 6 times.',
    requirements: {
      faction: 'Bicta Tower', // 2 Bicta Tower characters
      element: 'Chaos', // OR 2 Chaos characters
    },
    activationCondition: 'Team contains 2 【Bicta Tower】 characters OR 2 【Chaos】 characters',
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect:
        'Lowers the integration threshold and stack consumption of [Sin] to 16. Lowers the trigger threshold for [Limit Break] to 160 stacks.',
    },
    {
      level: 2,
      effect:
        'During Ultimate, if an ally successfully Neutralizes, restores HP equal to 12% of Wrath-Samael\'s Defense to them.',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: 'Defense increased by 58%',
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        'All Resistances +16%, Chaos Resistance additionally +27%. Enemies hit by [Sin] have -40% Crit Rate for 5s.',
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Suffocating Grace',
    image: 'Wrath_Samaelcard', // Memory card image
    title: 'Suffocating Grace',
    level: '80/80',
    rarity: '6-star (SSR)',
    class: 'Guardian', // Tank class only
    stats: {
      hp: '6,800', // Base HP for memory card
      attack: '480', // Base Attack for memory card
      defense: '890', // Base Defense for memory card
    },
    effects: [
      'Defense +64%',
      'After successfully parry, Damage Taken is reduced by 10% for 5 seconds',
      'The wearer gains [Stigma] (max 400 stacks), lasting 3 seconds',
      'Every 40 stacks of [Stigma] increases All Resistances by 5%',
    ],
    restriction: 'This memory card is restricted to Tank class characters only',
  },

  // Character Tags - For search and filtering
  tags: [
    'Chaos',
    'Shield',
    'Defense Scaling',
    'Team Buff',
    'Neutralize',
    'Guardian',
    'SSR',
    'Damage Reduction',
    'Taunt',
  ],
};

// SEO data for Wrath-Samael
export const wrathSamaelSEO = {
  title: `${wrathSamaelData.name} - Zone Nova Character Guide | Suffocating Grace`,
  description: `Complete guide for ${wrathSamaelData.name}, a ${wrathSamaelData.rarity} ${wrathSamaelData.element} ${wrathSamaelData.class} in Zone Nova. Includes Wrath stack mechanics, Neutralize system, skills, awakenings, Suffocating Grace memory card, and optimal team compositions.`,
  keywords: `Wrath-Samael, Zone Nova, Suffocating Grace, Bicta Tower, Chaos Guardian, ${wrathSamaelData.rarity}, character guide, skills, awakenings, tank`,
};

// Export default for easy importing
export default wrathSamaelData;
