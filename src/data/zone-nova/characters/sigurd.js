// Sigurd - Zone Nova Character Data
// Fire Attacker character from Asa faction (Asar Manor)

export const sigurdData = {
  // Basic Character Information
  name: 'Sigurd',
  image: 'Sigurd.png',
  rarity: 'SSR',
  element: 'Fire',
  class: 'Attacker',
  role: 'DPS',
  faction: 'Asa',
  title: 'Lord of the Underworld',

  // Character Lore
  lore: "One of Hela's servants, she was once bathed in dragon blood and possesses near-immortal defensive abilities. Frigga's adopted daughter, she also lives in [Asar Manor]. She is proud of her inherited heroic bloodline, sometimes to the point of being overly arrogant, but she is actually softhearted and easily hurt, and very kind. She doesn't want to be hurt, so she always adopts a defensive posture, speaking with pride while saying things she doesn't mean. Loki jokingly calls her \"the misunderstood fake heiress.\" She deeply values the members of the manor and would sacrifice herself to protect her family.",

  // Base Stats (Level 80)
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '6%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '7,308',
    attack: '1,305',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +45%", "Fire DMG +14.4%", "Crit Rate +6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Fire DMG +3.2%",
        unlock: "After E1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "ATK +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "Crit Rate +2.4%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "Crit Rate +3.6%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Fire DMG +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Fire DMG +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
    ],
    levels: [
      {
        level: 2,
        gold: 2500,
        materials: [],
      },
      {
        level: 3,
        gold: 5000,
        materials: [{"name": "Blaze Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Blaze Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Blaze Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Blaze Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Fire_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Flame Slash",
      cooldown: "2.0s",
      description: "Deals 120% attack damage as fire damage to the designated enemy unit.",
      template: "Deals {0} attack damage as fire damage to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Flame Blade Thrust",
      cooldown: "5.0s",
      description: "Deals 629.9% attack damage as fire damage to a designated enemy unit and grants the caster 1 stack of Dragon's Blood, up to a maximum of 4 stacks.",
      template: "Deals {0} attack damage as fire damage to a designated enemy unit and grants the caster 1 stack of Dragon's Blood, up to a maximum of 4 stacks.",
      levelValues: [["289%"], ["315.2%"], ["341.4%"], ["367.7%"], ["393.9%"], ["420.1%"], ["446.3%"], ["472.6%"], ["498.8%"], ["525%"], ["551.2%"], ["577.4%"], ["603.7%"], ["629.9%"]],
    },
    ultimate:     {
      name: "Burning Dragon Blade",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Deals 840% attack power as fire damage to a designated enemy unit. Upon defeating the enemy, triggers [Explosion], dealing 611.1% damage in a circular area with a radius of 4 centered on the target unit. [Enhanced Ultimate Skill] can be used when [Dragon Blood] has 2 or more stacks, consuming 2 stacks of [Dragon Blood] upon use. [Enhanced Ultimate Skill]: Deals 1200% attack power as fire damage to a designated enemy unit.",
      template: "Deals {0} attack power as fire damage to a designated enemy unit. Upon defeating the enemy, triggers [Explosion], dealing {1} damage in a circular area with a radius of 4 centered on the target unit. [Enhanced Ultimate Skill] can be used when [Dragon Blood] has 2 or more stacks, consuming 2 stacks of [Dragon Blood] upon use. [Enhanced Ultimate Skill]: Deals {2} attack power as fire damage to a designated enemy unit.",
      levelValues: [["385%", "250%", "550%"], ["420%", "277.8%", "600%"], ["455%", "305.6%", "650%"], ["490%", "333.3%", "700%"], ["525%", "361.1%", "750%"], ["560%", "388.9%", "800%"], ["595%", "416.7%", "850%"], ["630%", "444.4%", "900%"], ["665%", "472.2%", "950%"], ["700%", "500%", "1000%"], ["735%", "527.8%", "1050%"], ["770%", "555.6%", "1100%"], ["805%", "583.3%", "1150%"], ["840%", "611.1%", "1200%"]],
    },
    passive:     {
      name: "Flame Shadow Pursuit",
      description: "When a Ultimate Skill or skill crits, it deals an additional instance of fire damage equal to 122.2% attack power. This can only be triggered once every 0.5 seconds.",
      template: "When a Ultimate Skill or skill crits, it deals an additional instance of fire damage equal to {0} attack power. This can only be triggered once every 0.5 seconds.",
      levelValues: [["50%"], ["55.6%"], ["61.1%"], ["66.7%"], ["72.2%"], ["77.8%"], ["83.3%"], ["88.9%"], ["94.4%"], ["100%"], ["105.6%"], ["111.1%"], ["116.7%"], ["122.2%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Critical Rate increases by 7.5%\nAt battle start, every 15% Critical Rate increases self Critical Damage by 7.5%, up to 6 times",
    requirements: {
      faction: "Asa",
      element: "Fire",
      alternativeConditions: "Team contains 2 Asa characters or 2 Fire characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "• Gain one [Enhanced Ultimate Skill] at the start of battle.\n• Increase critical hit rate by 10%.",
    },
    {
      level: 2,
      effect: "• Gain 2 stacks of [Dragon Blood] each time a skill is used.\n • Gain 1 stack of [Dragon Blood] after using an ultimate skill.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "<color=#c90d0d>Blaze</color> damage increased by 30%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Ultimate skill damage ignores 20% of the target's elemental resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Christmas present",
    image: "IAmYourChristmasPresent.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Critical hit rate increased by 18%, ultimate skill damage increased by 24%. When there is only one enemy on the field, ultimate skill damage is increased by an additional 24%.",
      "Critical hit rate increased by 22%, ultimate skill damage increased by 28%. When there is only one enemy on the field, ultimate skill damage is increased by an additional 28%.",
      "Critical hit rate increased by 26%, ultimate skill damage increased by 32%. When there is only one enemy on the field, ultimate skill damage is increased by an additional 32%.",
      "Critical hit rate increased by 30%, ultimate skill damage increased by 36%. When there is only one enemy on the field, ultimate skill damage is increased by an additional 36%.",
      "Critical hit rate increased by 34%, ultimate skill damage increased by 40%. When there is only one enemy on the field, ultimate skill damage is increased by an additional 40%.",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags
  tags: ['Melee', 'Crit Dmg', 'Enhanced Ultimate', 'Crit Rate', 'Fire Damage', 'Dragon Blood'],

  // Banner Information
  banner: {
    type: 'Limited Character Gacha',
    startDate: '2025-12-16T14:15:00',
    endDate: '2025-12-30T03:59:00',
    eventPeriod: 'December 16, 2025 14:15 - December 30, 2025 03:59',
  },
};

// SEO data for Sigurd
export const sigurdSEO = {
  title: 'Sigurd - Zone Nova Character Guide | GachaWiki',
  description:
    "Complete guide for Sigurd in Zone Nova. Learn about this Fire Attacker's abilities, dragon blood defensive powers, and optimal build strategies for Hela's loyal servant from Asar Manor.",
};

// Export default for easy importing
export default sigurdData;
