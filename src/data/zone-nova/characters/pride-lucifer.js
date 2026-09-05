// Pride-Lucifer Character Data - Zone Nova
// SSR Warrior from Bikta faction with Chaos element
// Defense-scaling tank/shield character with Pride stack mechanic

export const prideLuciferData = {
  // Basic Character Information
  name: 'Pride-Lucifer',
  image: 'Lucifer.png', // Image identifier
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Warrior', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
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
    hp: '11,048',
    attack: '696',
    defense: '772',
  },
  talentTree: {
    totals: ["HP +67.4%", "ATK +45%", "Chaos DMG +14.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Chaos DMG +3.2%",
        unlock: "After E1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Chaos DMG +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "HP +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Chaos DMG +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Dawn Slash",
      cooldown: "1.5s",
      description: "Deals chaos damage equal to 120% of the user's own defense to the designated enemy unit.",
      template: "Deals chaos damage equal to {0} of the user's own defense to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Perfect suppression",
      cooldown: "5.0s",
      description: "Pride - Lucifer deals chaos damage to the target equal to her own defense 633.3%, while granting herself a shield equal to her own defense 97.8% and gaining 1 stack of [Pride].",
      template: "Pride - Lucifer deals chaos damage to the target equal to her own defense {0}, while granting herself a shield equal to her own defense {1} and gaining 1 stack of [Pride].",
      levelValues: [["200%", "40%"], ["233.3%", "44.4%"], ["266.7%", "48.9%"], ["300%", "53.3%"], ["333.3%", "57.8%"], ["366.7%", "62.2%"], ["400%", "66.7%"], ["433.3%", "71.1%"], ["466.7%", "75.6%"], ["500%", "80%"], ["533.3%", "84.4%"], ["566.7%", "88.9%"], ["600%", "93.3%"], ["633.3%", "97.8%"]],
    },
    ultimate:     {
      name: "The End of Pain",
      energyCost: "3",
      cooldown: "1.0s",
      description: "All allied characters gain [Armour of Pride]: Grants a shield equal to Lucifer's defense 388.9% and reduces damage taken by 48.9% for 10 seconds. While Lucifer possesses [Armour of Pride], her ultimate skill becomes an enhanced ultimate skill. \nEnhanced Ultimate Skill: Consumes 2 energy. Grants all allied characters a shield equal to Lucifer's defense 511.1% and reduces damage taken by 58.9% for 5 seconds. Then unleashes a dimensional slash at the target location, dealing chaos damage equal to the user's defense 833.3% to all enemy units. \nNote: The damage reduction effects of the ultimate skill and the enhanced ultimate skill do not stack. The shield's maximum value is 30% of the character's maximum HP.",
      template: "All allied characters gain [Armour of Pride]: Grants a shield equal to Lucifer's defense {0} and reduces damage taken by {1} for 10 seconds. While Lucifer possesses [Armour of Pride], her ultimate skill becomes an enhanced ultimate skill. \nEnhanced Ultimate Skill: Consumes 2 energy. Grants all allied characters a shield equal to Lucifer's defense {2} and reduces damage taken by {3} for 5 seconds. Then unleashes a dimensional slash at the target location, dealing chaos damage equal to the user's defense {4} to all enemy units. \nNote: The damage reduction effects of the ultimate skill and the enhanced ultimate skill do not stack. The shield's maximum value is 30% of the character's maximum HP.",
      levelValues: [["100%", "20%", "150%", "30%", "400%"], ["122.2%", "22.2%", "177.8%", "32.2%", "433.3%"], ["144.4%", "24.4%", "205.6%", "34.4%", "466.7%"], ["166.7%", "26.7%", "233.3%", "36.7%", "500%"], ["188.9%", "28.9%", "261.1%", "38.9%", "533.3%"], ["211.1%", "31.1%", "288.9%", "41.1%", "566.7%"], ["233.3%", "33.3%", "316.7%", "43.3%", "600%"], ["255.6%", "35.6%", "344.4%", "45.6%", "633.3%"], ["277.8%", "37.8%", "372.2%", "47.8%", "666.7%"], ["300%", "40%", "400%", "50%", "700%"], ["322.2%", "42.2%", "427.8%", "52.2%", "733.3%"], ["344.4%", "44.4%", "455.6%", "54.4%", "766.7%"], ["366.7%", "46.7%", "483.3%", "56.7%", "800%"], ["388.9%", "48.9%", "511.1%", "58.9%", "833.3%"]],
    },
    passive:     {
      name: "No need to say more",
      description: "Each time Lucifer uses a skill, she gains 1 stack of [Pride], increasing her defense by 12.2%, up to a maximum of 8 stacks, lasting until the end of the battle.",
      template: "Each time Lucifer uses a skill, she gains 1 stack of [Pride], increasing her defense by {0}, up to a maximum of 8 stacks, lasting until the end of the battle.",
      levelValues: [["5%"], ["5.6%"], ["6.1%"], ["6.7%"], ["7.2%"], ["7.8%"], ["8.3%"], ["8.9%"], ["9.4%"], ["10%"], ["10.6%"], ["11.1%"], ["11.7%"], ["12.2%"]],
    },
  },

  // Team Skill (Combination Skill)
  teamSkill: {
    name: "Combo Skill",
    description: "Defense increased by 10%, HP increased by 10%. At the start of battle, every 500 defense grants 1.5% damage reduction for the entire team, stacking up to 8 times.",
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
      effect: "At the start of battle, all allies gain the [Armour of Pride] effect.",
    },
    {
      level: 2,
      effect: "After Pride-Lucifer uses her ultimate skill, she grants all allies the [Blessing of Pride]. When a unit with [Blessing of Pride] takes damage, all allies will recover HP equal to 1% of Pride-Lucifer's maximum HP + 150 per second for 5 seconds. Once the effect is triggered, [Blessing of Pride] will be consumed.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Defense increased by 50%",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Increases all resistances by 20%, chaos resistance by an additional 20%, and grants 4 stacks of Pride upon entering the arena.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Pride or Tsundere?",
    image: "Lucifercard.png",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Increases HP by 16% and defense by 44%. When an ally is attacked by a normal attack, the damage taken is reduced by 30%.",
      "Increases HP by 20% and defense by 48%. When an ally is attacked by a normal attack, the damage taken is reduced by 30%.",
      "Increases HP by 24% and defense by 52%. When an ally is attacked by a normal attack, the damage taken is reduced by 30%.",
      "Increases HP by 28% and defense by 56%. When an ally is attacked by a normal attack, the damage taken is reduced by 30%.",
      "Increases HP by 32% and defense by 60%. When an ally is attacked by a normal attack, the damage taken is reduced by 30%.",
    ],
    restriction: "Only effective for Warrior",
  },

  // Character Tags - For search and filtering
  tags: [
    'Chaos',
    'Shield',
    'Defense Scaling',
    'Team Buff',
    'Enhanced Ultimate',
    'Warrior',
    'SSR',
  ],
};

// SEO data for Pride-Lucifer
export const prideLuciferSEO = {
  title: `${prideLuciferData.name} - Zone Nova Character Guide | Pride or Tsundere?`,
  description: `Complete guide for ${prideLuciferData.name}, a ${prideLuciferData.rarity} ${prideLuciferData.element} ${prideLuciferData.class} in Zone Nova. Includes Pride stack mechanics, skills, awakenings, Pride or Tsundere? memory card, and optimal team compositions.`,
  keywords: `Pride-Lucifer, Zone Nova, Pride or Tsundere, Bikta, Chaos Warrior, ${prideLuciferData.rarity}, character guide, skills, awakenings`,
};

// Export default for easy importing
export default prideLuciferData;
