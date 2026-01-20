// Tamamo-no-Mae - Zone Nova Character Data
// Fire Buffer (Supporter) character from Pingjing City faction

export const tamamoNoMaeData = {
  // Basic Character Information
  name: 'Tamamo-no-Mae',
  image: 'Tamamo-no-mae',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Buffer', // Guardian, Warrior, Rogue, Mage, Buffer, Debuffer, Healer - Determines memory compatibility
  role: 'Buffer', // Tank, DPS, Buffer, Debuffer, Healer - Functional description
  faction: 'Pingjing City',

  // Base Stats (Level 80)
  stats: {
    hp: '9,180',
    attack: '1,004',
    defense: '729',
    energyRecovery: '0.25/s',
    critRate: 0,
    critDamage: 50,
  },

  // Character Skills
  skills: {
    normal: {
      name: 'Crimson Blade Dance',
      cooldown: '2.0s',
      description: 'Deals 120% ATK as Fire DMG to a target enemy.',
    },
    auto: {
      name: 'Bewitching Fire',
      cooldown: '5.0s',
      description:
        'Deals 141.5% ATK as Fire DMG to a target enemy and gains 1 stack of [Fox Flame] (max 9 stacks). Restores 1 Energy for every 2 Skills used.',
      buffs: [
        {
          name: 'Fox Flame',
          description:
            'Each stack increases self Energy Recovery Rate by 3% and reduces damage taken by all allies by 3.8%. Max 9 stacks.',
        },
      ],
    },
    ultimate: {
      name: 'Authority: Myriad Brilliance',
      energyCost: '4',
      cooldown: '12.0s',
      description:
        'After a short delay, recover 3 Energy. Increases all allies\' Ultimate DMG by 29.3% and ignores 40.5% Fire Resistance for 5s (cannot stack). Consumes all [Fox Flame]. Each consumed stack of [Fox Flame] further increases Ultimate DMG bonus by 5.6% and Ignore Resistance by 5.6%, and extends duration by 1s. Each consumed stack of [Fox Flame] deals 58.6% ATK as Fire DMG to a random enemy and applies [Jade Fox Mark] for 5s. If 9 stacks of [Fox Flame] are consumed, additionally deploys [Hyakki Kitan] for 10s. During this period, allies recover 1 Energy after using Ultimate (max once every 0.1s).',
      buffs: [
        {
          name: 'Jade Fox Mark',
          description:
            "When allies' Ultimate hits the holder, DEF Penetration +103.8%. Consumed after triggering.",
        },
      ],
    },
    passive: {
      name: 'Hyakki Kitan',
      description:
        'When other allies use Ultimate, gain 1 stack of [Fox Flame] (max 9 stacks). Each stack of [Fox Flame] increases self Energy Recovery Rate by 3% and reduces damage taken by all allies by 3.8%. During [Hyakki Kitan], apply 2 stacks of [Ten Ghost Marks] to enemies hit by Ultimate. [Ten Ghost Marks]: At 10 stacks, consume 10 stacks to deal 214.4% ATK Blaze DMG in a fan-shaped area behind the target and apply [Jade Fox Mark] (5s). All [Ten Ghost Marks] vanish when [Hyakki Kitan] ends. [Jade Fox Mark]: When allies\' Ultimate hits the holder, DEF Penetration +103.8%. Consumed after triggering.',
    },
  },

  // Team Skill
  teamSkill: {
    name: 'Combination Skill',
    description:
      "At the start of battle, all allies' DMG +10%; for every 500 ATK, all allies' Ultimate DMG +7.5% (max 6 stacks).",
    requirements: {
      faction: 'Pingjing City',
      element: 'Fire',
      alternativeRequirement: '2 Pingjing City OR 2 Fire characters',
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: 'Immediately gain 9 stacks of [Fox Flame] at the start of battle.',
    },
    {
      level: 2,
      effect:
        'When [Hyakki Kitan] ends, recover [Fox Flame] based on [Ten Ghost Marks] accumulated: recover 2 stacks of [Fox Flame] for every 10 stacks accumulated (max 6 stacks).',
    },
    {
      level: 3,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 4,
      effect: "During [Hyakki Kitan], allies' Resistance to non-Fire DMG increases by 56.5%.",
    },
    {
      level: 5,
      effect: '[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2.',
    },
    {
      level: 6,
      effect:
        "During [Hyakki Kitan], when allies' Ultimate hits an enemy, apply an additional 1 stack of [Ten Ghost Marks]. Each stack of [Fox Flame] additionally increases all allies' DEF by 5%.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: 'Hot Spring & Her',
    image: 'Tamamo-no-maecard',
    stats: {
      hp: '6,000',
      attack: '600',
      defense: '600',
    },
    effects: [
      'Base Stats Boost: ATK +40%',
      "After allies' Ultimate deals DMG, increases self Energy Recovery Rate by 200% (4s) and gains 1 stack of [Brilliance] (5s, max 50 stacks)",
      "Every 5 stacks of [Brilliance] increases all allies' DMG by 9%",
    ],
    restriction: 'This memory card is restricted to Supporter class characters only.',
  },

  // Character Tags - Reusable across multiple characters
  tags: [
    'Ranged',
    'Buff',
    'Energy Recovery',
    'Ultimate Damage Amp',
    'Defense Penetration',
    'Damage Reduction',
    'Fire Damage',
  ],
};

// SEO data for Tamamo-no-Mae
export const tamamoNoMaeSEO = {
  title: 'Tamamo-no-Mae - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for Tamamo-no-Mae in Zone Nova. Learn about her fire support abilities, Fox Flame mechanics, ultimate damage amplification, and optimal build strategies for this powerful Pingjing City buffer.',
};

// Export default for easy importing
export default tamamoNoMaeData;
