// Wrath-Samael Character Data - Zone Nova
// SSR Tank from Bikta faction with Chaos element
// Defense-scaling tank with Neutralize mechanics and Wrath stack system

export const wrathSamaelData = {
  // Basic Character Information
  name: 'Wrath-Samael',
  image: 'Wrath_Samael.png', // Image identifier
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Tank', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Tank', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Bikta', // Bikta faction for combination skill compatibility

  // Base Stats (Level 80)
  stats: {
    hp: "6,600",
    attack: "480",
    defense: "690",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '11,576',
    attack: '480',
    defense: '1,149',
  },
  talentTree: {
    totals: ["HP +75.4%", "DEF +66.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "DEF +10%, HP +10%",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "DEF +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "DEF +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
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
        stat: "HP +3.2%",
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
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
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
        stat: "DEF +9.6%",
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
        materials: [{"name": "Chaos Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Chaos Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Chaos Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Chaos Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Dark_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Dark_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Wrath Strike",
      cooldown: "2.0s",
      description: "Deals chaos DMG equal to 120% of DEF to target.",
      template: "Deals chaos DMG equal to {0} of DEF to target.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Trial of Original Sin",
      cooldown: "5.0s",
      description: "Allies gain +57.4% Neutralize Rate for 5s\n[Neutralize]: Chance to reduce DMG taken by 30%. Critical DMG ignores Neutralize.\n[Sin] Unleashed:\n  When [Wrath] stacks reach 20, consumes 20 stacks of [Wrath] to activate:\nPulls in the 1 enemies with the highest ATK.\nDeals chaos DMG equal to 294.4% of DEF in a 3 radius fan area in front, causing minor Knockback.\nSelf DEF +13.8% for 7s (max 10 stacks).",
      template: "Allies gain +{0} Neutralize Rate for {1}s\n[Neutralize]: Chance to reduce DMG taken by {2}. Critical DMG ignores Neutralize.\n[Sin] Unleashed:\n  When [Wrath] stacks reach {3}, consumes {4} stacks of [Wrath] to activate:\nPulls in the {5} enemies with the highest ATK.\nDeals chaos DMG equal to {7} of DEF in a {6} radius fan area in front, causing minor Knockback.\nSelf DEF +{8} for {9}s (max {10} stacks).",
      levelValues: [["30%", "5", "30%", "20", "20", "1", "3", "150%", "8%", "7", "10"], ["32.1%", "5", "30%", "20", "20", "1", "3", "161.1%", "8.4%", "7", "10"], ["34.2%", "5", "30%", "20", "20", "1", "3", "172.2%", "8.9%", "7", "10"], ["36.3%", "5", "30%", "20", "20", "1", "3", "183.3%", "9.3%", "7", "10"], ["38.4%", "5", "30%", "20", "20", "1", "3", "194.4%", "9.8%", "7", "10"], ["40.6%", "5", "30%", "20", "20", "1", "3", "205.6%", "10.2%", "7", "10"], ["42.7%", "5", "30%", "20", "20", "1", "3", "216.7%", "10.7%", "7", "10"], ["44.8%", "5", "30%", "20", "20", "1", "3", "227.8%", "11.1%", "7", "10"], ["46.9%", "5", "30%", "20", "20", "1", "3", "238.9%", "11.6%", "7", "10"], ["49%", "5", "30%", "20", "20", "1", "3", "250%", "12%", "7", "10"], ["51.1%", "5", "30%", "20", "20", "1", "3", "261.1%", "12.4%", "7", "10"], ["53.2%", "5", "30%", "20", "20", "1", "3", "272.2%", "12.9%", "7", "10"], ["55.3%", "5", "30%", "20", "20", "1", "3", "283.3%", "13.3%", "7", "10"], ["57.4%", "5", "30%", "20", "20", "1", "3", "294.4%", "13.8%", "7", "10"]],
    },
    ultimate:     {
      name: "Divine Punishment: Absolute Territory",
      energyCost: "5",
      cooldown: "7.0s",
      description: "After a short delay,\nAllies' Neutralize Rate +68.9%, Neutralize DMG Reduction Multiplier +44.7%, Damage Taken -18.7%.\nAll enemies' Crit Rate significantly reduced by 60.9%.\nAll enemies enter [Frenzy], reducing their Normal Attack and Skill Cooldowns by 31.4%.\nLasts 5s.",
      template: "After a short delay,\nAllies' Neutralize Rate +{0}, Neutralize DMG Reduction Multiplier +{1}, Damage Taken -{2}.\nAll enemies' Crit Rate significantly reduced by {3}.\nAll enemies enter [Frenzy], reducing their Normal Attack and Skill Cooldowns by {4}.\nLasts {5}s.",
      levelValues: [["40%", "23%", "10%", "32%", "17%", "5"], ["42.2%", "24.7%", "10.7%", "34.2%", "18.1%", "5"], ["44.4%", "26.3%", "11.3%", "36.4%", "19.2%", "5"], ["46.7%", "28%", "12%", "38.7%", "20.3%", "5"], ["48.9%", "29.7%", "12.7%", "40.9%", "21.4%", "5"], ["51.1%", "31.3%", "13.3%", "43.1%", "22.6%", "5"], ["53.3%", "33%", "14%", "45.3%", "23.7%", "5"], ["55.6%", "34.7%", "14.7%", "47.6%", "24.8%", "5"], ["57.8%", "36.3%", "15.3%", "49.8%", "25.9%", "5"], ["60%", "38%", "16%", "52%", "27%", "5"], ["62.2%", "39.7%", "16.7%", "54.2%", "28.1%", "5"], ["64.4%", "41.3%", "17.3%", "56.4%", "29.2%", "5"], ["66.7%", "43%", "18%", "58.7%", "30.3%", "5"], ["68.9%", "44.7%", "18.7%", "60.9%", "31.4%", "5"]],
    },
    passive:     {
      name: "Tank of Paradox",
      description: "[Opening Burst]:\nAt start of battle, Self Neutralize Rate +36%, Neutralize DMG Reduction +38.8% for 7s.\n[Neutralize Feedback]:\nWhen an ally successfully Neutralizes:\nThey gain a Shield equal to 51.6% of Samael's Defense.\nWrath - Samael gains 1 stacks of [Wrath].\n[Limit Break]:\nWhen [Wrath] reaches 200 stacks, Samael cannot use Ultimate.\n[Sin] Unleashed consumes 10x [Wrath] to trigger effect 10 times continuously. Self DMG Reduction +23.6%.",
      template: "[Opening Burst]:\nAt start of battle, Self Neutralize Rate +{0}, Neutralize DMG Reduction +{1} for {2}s.\n[Neutralize Feedback]:\nWhen an ally successfully Neutralizes:\nThey gain a Shield equal to {3} of Samael's Defense.\nWrath - Samael gains {4} stacks of [Wrath].\n[Limit Break]:\nWhen [Wrath] reaches {5} stacks, Samael cannot use Ultimate.\n[Sin] Unleashed consumes {6}x [Wrath] to trigger effect {7} times continuously. Self DMG Reduction +{8}.",
      levelValues: [["36%", "20%", "7", "27%", "1", "200", "10", "10", "12%"], ["36%", "21.4%", "7", "28.9%", "1", "200", "10", "10", "12.9%"], ["36%", "22.9%", "7", "30.8%", "1", "200", "10", "10", "13.8%"], ["36%", "24.3%", "7", "32.7%", "1", "200", "10", "10", "14.7%"], ["36%", "25.8%", "7", "34.6%", "1", "200", "10", "10", "15.6%"], ["36%", "27.2%", "7", "36.4%", "1", "200", "10", "10", "16.4%"], ["36%", "28.7%", "7", "38.3%", "1", "200", "10", "10", "17.3%"], ["36%", "30.1%", "7", "40.2%", "1", "200", "10", "10", "18.2%"], ["36%", "31.6%", "7", "42.1%", "1", "200", "10", "10", "19.1%"], ["36%", "33%", "7", "44%", "1", "200", "10", "10", "20%"], ["36%", "34.4%", "7", "45.9%", "1", "200", "10", "10", "20.9%"], ["36%", "35.9%", "7", "47.8%", "1", "200", "10", "10", "21.8%"], ["36%", "37.3%", "7", "49.7%", "1", "200", "10", "10", "22.7%"], ["36%", "38.8%", "7", "51.6%", "1", "200", "10", "10", "23.6%"]],
    },
  },

  // Team Skill (Combination Skill)
  teamSkill: {
    name: "Combo Skill",
    description: "DEF +15%\nAt the start of battle, for every 500 DEF, Self Neutralize DMG Reduction +2%, max 6 times.",
    requirements: {
      faction: "Bikta",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Bikta characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "The integration threshold and stack consumption of [Sin] are reduced to 16.\nThe trigger threshold of [Limit Break] is reduced to 160 stacks.",
    },
    {
      level: 2,
      effect: "During Ultimate, if an ally successfully Neutralizes, restores HP equal to 12% of Wrath - Samael's Defense to them.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Defense +58%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All Resistances +16%, Chaos Resistance additionally +27%.\nEnemies hit by [Sin] have -40% Crit Rate for 5s.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Suffocating Grace ",
    image: "SuffocatingGrace.png",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Defense increased by 48%. After a successful parry, damage taken is reduced by 6% for 5 seconds. The wearer gains a [Stigmata] (maximum 400 stacks) for 3 seconds. For every 40 stacks of [Stigmata], the wearer's all resistances increase by 1%.",
      "Defense increased by 52%. After a successful parry, damage taken is reduced by 7% for 5 seconds. The wearer gains a [Stigmata] (maximum 400 stacks) for 3 seconds. For every 40 stacks of [Stigmata], the wearer's all resistances increase by 2%.",
      "Defense increased by 56%. After a successful parry, damage taken is reduced by 8% for 5 seconds. The wearer gains a [Stigmata] (maximum 400 stacks) for 3 seconds. For every 40 stacks of [Stigmata], the wearer's all resistances increase by 3%.",
      "Defense increased by 60%. After a successful parry, damage taken is reduced by 9% for 5 seconds. The wearer gains a [Stigmata] (maximum 400 stacks) for 3 seconds. For every 40 stacks of [Stigmata], the wearer's all resistances increase by 4%.",
      "Defense increased by 64%. After a successful parry, damage taken is reduced by 10% for 5 seconds. The wearer gains a [Stigmata] (maximum 400 stacks) for 3 seconds. For every 40 stacks of [Stigmata], the wearer's all resistances increase by 5%.",
    ],
    restriction: "Only effective for Tank",
  },

  // Character Tags - For search and filtering
  tags: [
    'Chaos',
    'Shield',
    'Defense Scaling',
    'Team Buff',
    'Neutralize',
    'Tank',
    'SSR',
    'Damage Reduction',
    'Taunt',
  ],
};

// SEO data for Wrath-Samael
export const wrathSamaelSEO = {
  title: `${wrathSamaelData.name} - Zone Nova Character Guide | Suffocating Grace`,
  description: `Complete guide for ${wrathSamaelData.name}, a ${wrathSamaelData.rarity} ${wrathSamaelData.element} ${wrathSamaelData.class} in Zone Nova. Includes Wrath stack mechanics, Neutralize system, skills, awakenings, Suffocating Grace memory card, and optimal team compositions.`,
  keywords: `Wrath-Samael, Zone Nova, Suffocating Grace, Bikta, Chaos Tank, ${wrathSamaelData.rarity}, character guide, skills, awakenings, tank`,
};

// Export default for easy importing
export default wrathSamaelData;
