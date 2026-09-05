// Gaia - Zone Nova Character Data
// Support/Healer character from Otis faction

export const gaiaData = {
  // Basic Character Information
  name: 'Gaia',
  image: 'Gaia.png',
  rarity: 'SSR',
  element: 'Holy',
  class: 'Healer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Otis',

  // Base Stats (Level 80)
  stats: {
    hp: "6,300",
    attack: "580",
    defense: "585",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '10,546',
    attack: '580',
    defense: '918',
  },
  talentTree: {
    totals: ["HP +67.4%", "DEF +57%", "Healing +18%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "HP +10%, DEF +10%",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "HP +15%, DEF +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "HP +20%, DEF +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Healing +4%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "HP +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Healing +6%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "HP +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Healing +8%",
        unlock: "Lv 75",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
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
        materials: [{"name": "Holy Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Light_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Holy Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Holy Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Holy Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Holy Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Light_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Character Skills
  skills: {
    normal:     {
      name: "Factor Split",
      cooldown: "2.0s",
      description: "Deals holy damage to a designated enemy unit, with damage equal to 12% of its own maximum HP",
      template: "Deals holy damage to a designated enemy unit, with damage equal to {0} of its own maximum HP",
      levelValues: [["5.5%"], ["6%"], ["6.5%"], ["7%"], ["7.5%"], ["8%"], ["8.5%"], ["9%"], ["9.5%"], ["10%"], ["10.5%"], ["11%"], ["11.5%"], ["12%"]],
    },
    auto:     {
      name: "Genetic Disintegration",
      cooldown: "10.0s",
      description: "Launches a floating device to other allied units\n\nWhen the target takes damage, the floating device restores HP to all allied units every second for 5 seconds, equal to Gaia's 1% maximum HP + 12% HP\n\nWhen Gaia uses her ultimate skill, she can replenish floating devices to other allied units",
      template: "Launches a floating device to other allied units\n\nWhen the target takes damage, the floating device restores HP to all allied units every second for 5 seconds, equal to Gaia's {0} maximum HP + {1} HP\n\nWhen Gaia uses her ultimate skill, she can replenish floating devices to other allied units",
      levelValues: [["0.3%", "5.5%"], ["0.4%", "6%"], ["0.4%", "6.5%"], ["0.5%", "7%"], ["0.5%", "7.5%"], ["0.6%", "8%"], ["0.6%", "8.5%"], ["0.7%", "9%"], ["0.7%", "9.5%"], ["0.8%", "10%"], ["0.8%", "10.5%"], ["0.9%", "11%"], ["0.9%", "11.5%"], ["1%", "12%"]],
    },
    ultimate:     {
      name: "Dominion Authority: Primordial Order",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Increases the maximum HP of all allied units by 60%, with the increased maximum HP not exceeding 15% of Gaia's maximum HP upon entering battle, lasting 20 seconds\n\nDuring the buff duration, Gaia can use [Emergency Healing]\n\n[Emergency Healing]: Heals the allied unit with the lowest current HP percentage once, restoring HP equal to 12% of Gaia's maximum HP",
      template: "Increases the maximum HP of all allied units by {0}, with the increased maximum HP not exceeding 15% of Gaia's maximum HP upon entering battle, lasting 20 seconds\n\nDuring the buff duration, Gaia can use [Emergency Healing]\n\n[Emergency Healing]: Heals the allied unit with the lowest current HP percentage once, restoring HP equal to {1} of Gaia's maximum HP",
      levelValues: [["27.5%", "5.5%"], ["30%", "6%"], ["32.5%", "6.5%"], ["35%", "7%"], ["37.5%", "7.5%"], ["40%", "8%"], ["42.5%", "8.5%"], ["45%", "9%"], ["47.5%", "9.5%"], ["50%", "10%"], ["52.5%", "10.5%"], ["55%", "11%"], ["57.5%", "11.5%"], ["60%", "12%"]],
    },
    passive:     {
      name: "Primordial Return",
      description: "After entering battle, the allied unit with the lowest defense gains [Mother's Love]\n\nWhile under [Mother's Love], the unit's maximum HP increases by 60%, with the increased maximum HP not exceeding 15% of Gaia's maximum HP upon entering battle\n\nWhen a unit with [Mother's Love] takes fatal damage, the [Life Extension] effect triggers, immediately restoring HP to 100% and gradually losing HP afterward, with the rate of HP loss increasing each second. The HP loss stops if the unit successfully kills a target during this period\n\nEach unit can trigger this effect once per battle, and [Mother's Love] disappears if Gaia falls",
      template: "After entering battle, the allied unit with the lowest defense gains [Mother's Love]\n\nWhile under [Mother's Love], the unit's maximum HP increases by {0}, with the increased maximum HP not exceeding 15% of Gaia's maximum HP upon entering battle\n\nWhen a unit with [Mother's Love] takes fatal damage, the [Life Extension] effect triggers, immediately restoring HP to 100% and gradually losing HP afterward, with the rate of HP loss increasing each second. The HP loss stops if the unit successfully kills a target during this period\n\nEach unit can trigger this effect once per battle, and [Mother's Love] disappears if Gaia falls",
      levelValues: [["27.5%"], ["30%"], ["32.5%"], ["35%"], ["37.5%"], ["40%"], ["42.5%"], ["45%"], ["47.5%"], ["50%"], ["52.5%"], ["55%"], ["57.5%"], ["60%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Max HP increases by 10%\nAt battle start, every 5000 Max HP increases self Healing by 5%, up to 6 times",
    requirements: {
      faction: "Otis",
      element: "Holy",
      alternativeConditions: "Team contains 2 Otis characters or 2 Holy characters",
    },
  },

  // Awakening Effects
  awakenings: [
    {
      level: 1,
      effect: "Characters with [Maternal Love] gain 45% increased Defense\n\n[Lifeline] effect's HP loss effect lasts up to 10 seconds",
    },
    {
      level: 2,
      effect: "Upon entering battle, immediately cast Ultimate Skill with no cost\nUsing [Emergency Heal] also refreshes the duration of Ultimate Skill buff effects",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Healing Amount increased by 37.5%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Upon entering battle, the two allied characters with the lowest Defense also gain [Maternal Love]\n\nCharacters with [Maternal Love] gain an additional 50% Max HP",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "A Smile to Topple Cities",
    image: "Gaiacard",
    stats: {
      hp: "6,300",
      attack: "580",
      defense: "585",
    },
    effects: [  // awakening levels 1-5
      "HP increased by 24%, Healing Amount increased by 24%. When the wearer heals within 1 second, Healing Amount additionally increased by 24%",
      "HP increased by 28%, Healing Amount increased by 28%. When the wearer heals within 1 second, Healing Amount additionally increased by 28%",
      "HP increased by 32%, Healing Amount increased by 32%. When the wearer heals within 1 second, Healing Amount additionally increased by 32%",
      "HP increased by 36%, Healing Amount increased by 36%. When the wearer heals within 1 second, Healing Amount additionally increased by 36%",
      "HP increased by 40%, Healing Amount increased by 40%. When the wearer heals within 1 second, Healing Amount additionally increased by 40%",
    ],
    restriction: "Only effective for Healer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['HP Scale', 'Healing', 'Range', 'Revive', 'Increase MAX HP', 'AOE Healing'],
};

// SEO and Metadata
export const gaiaSEO = {
  title: '【Matriarch】Gaia - Zone Nova Character Guide | GachaWiki',
  description:
    'Complete guide for 【Matriarch】Gaia in Zone Nova. Learn about her healing abilities, Motherly Love passive, team skills, awakening effects, and optimal build strategies for this powerful Otis faction support character.',
};
