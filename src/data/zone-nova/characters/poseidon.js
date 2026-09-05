// Poseidon - Zone Nova Character Data
// SSR Tank from Otis faction with Ice element
// Generated from live master data; skill/passive values at max awakened level 14
export const poseidonData = {
  name: "Poseidon",
  image: "Poseidon.png",
  rarity: 'SSR',
  element: 'Ice',
  class: 'Tank',
  role: "Tank",
  faction: 'Otis',
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
    attack: '480',
    defense: '1,149',
  },
  talentTree: {
    totals: ["HP +67.4%", "DEF +66.6%", "Healing +10%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "HP +10%, DEF +10%",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "HP +15%, DEF +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "HP +20%, DEF +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
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
        stat: "Healing +4%",
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
        stat: "Healing +6%",
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
        materials: [{"name": "Frost Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Frost Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Frost Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Frost Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Frost Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Tidal Shot",
      cooldown: "2.0s",
      description: "Deal ice damage equal to 12% of max HP to the designated enemy unit.",
      template: "Deal ice damage equal to {0} of max HP to the designated enemy unit.",
      levelValues: [["5.5%"], ["6%"], ["6.5%"], ["7%"], ["7.5%"], ["8%"], ["8.5%"], ["9%"], ["9.5%"], ["10%"], ["10.5%"], ["11%"], ["11.5%"], ["12%"]],
    },
    auto:     {
      name: "Siren Song Undertow",
      cooldown: "8.0s",
      description: "Max HP increases permanently by 15.2% up to 8 times. Gain 2 stacks of [Tide Law].\nDeal ice damage equal to 22% of max HP to the enemy unit with the highest ATK more than 4.0 meters away and pull it 3 meters closer.\nAfter casting the skill if Poseidon is not in [High Tide] she enters [Low Tide] for 8 seconds.\n[Low Tide]\nCreate a 3-meter radius [Vortex] centered on Poseidon that moves with her.\nEnemies inside [Vortex] have CRIT Rate reduced by 78% and DEF reduced by 23.6%.\nWhen allies attack an enemy inside [Vortex]\nPoseidon deals ice damage equal to 11.8% of max HP to all enemies inside [Vortex]. (Triggers at most once every 0.1 seconds)\nThis damage is treated as [Follow-Up] damage.\nGain 1 stacks of [Tide Law] after every 4 [Follow-Up] triggers.",
      template: "Max HP increases permanently by {0} up to 8 times. Gain {1} stacks of [Tide Law].\nDeal ice damage equal to {4} of max HP to the enemy unit with the highest ATK more than {2}.{3} meters away and pull it {5} meters closer.\nAfter casting the skill if Poseidon is not in [High Tide] she enters [Low Tide] for {6} seconds.\n[Low Tide]\nCreate a {7}-meter radius [Vortex] centered on Poseidon that moves with her.\nEnemies inside [Vortex] have CRIT Rate reduced by {8} and DEF reduced by {9}.\nWhen allies attack an enemy inside [Vortex]\nPoseidon deals ice damage equal to {10} of max HP to all enemies inside [Vortex]. (Triggers at most once every 0.{11} seconds)\nThis damage is treated as [Follow-Up] damage.\nGain {12} stacks of [Tide Law] after every 4 [Follow-Up] triggers.",
      levelValues: [["8%", "2", "4", "0", "9%", "3", "8", "3", "39%", "12%", "6%", "1", "1"], ["8.6%", "2", "4", "0", "10%", "3", "8", "3", "42%", "12.9%", "6.4%", "1", "1"], ["9.1%", "2", "4", "0", "11%", "3", "8", "3", "45%", "13.8%", "6.9%", "1", "1"], ["9.7%", "2", "4", "0", "12%", "3", "8", "3", "48%", "14.7%", "7.3%", "1", "1"], ["10.2%", "2", "4", "0", "13%", "3", "8", "3", "51%", "15.6%", "7.8%", "1", "1"], ["10.8%", "2", "4", "0", "14%", "3", "8", "3", "54%", "16.4%", "8.2%", "1", "1"], ["11.3%", "2", "4", "0", "15%", "3", "8", "3", "57%", "17.3%", "8.7%", "1", "1"], ["11.9%", "2", "4", "0", "16%", "3", "8", "3", "60%", "18.2%", "9.1%", "1", "1"], ["12.4%", "2", "4", "0", "17%", "3", "8", "3", "63%", "19.1%", "9.6%", "1", "1"], ["13%", "2", "4", "0", "18%", "3", "8", "3", "66%", "20%", "10%", "1", "1"], ["13.6%", "2", "4", "0", "19%", "3", "8", "3", "69%", "20.9%", "10.4%", "1", "1"], ["14.1%", "2", "4", "0", "20%", "3", "8", "3", "72%", "21.8%", "10.9%", "1", "1"], ["14.7%", "2", "4", "0", "21%", "3", "8", "3", "75%", "22.7%", "11.3%", "1", "1"], ["15.2%", "2", "4", "0", "22%", "3", "8", "3", "78%", "23.6%", "11.8%", "1", "1"]],
    },
    ultimate:     {
      name: "Sea Wall Sanctuary",
      energyCost: "5",
      cooldown: "8.0s",
      description: "After casting Poseidon enters [High Tide] for 8 seconds.\n[High Tide]\nMax HP increases by 123.7%. A moving [Sea Wall] rises in front of Poseidon.\nAllied units behind [Sea Wall] within a 5-meter fan-shaped area including Poseidon gain:\nBlock Rate increases by 70.7%. Block Damage Reduction increases by 44.7%. Damage taken is reduced by 40.2%.\nWhen an allied unit inside [Sea Wall] is hit and does not already have [Backflow] while Poseidon has [Tide Law] consume 1 stacks of [Tide Law] to grant the target [Backflow] for 10 seconds.\n[Backflow]: Gain an additional 26% Block Rate. Gain an additional 6.4% Block Damage Reduction. Damage taken is additionally reduced by 26%.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.",
      template: "After casting Poseidon enters [High Tide] for {0} seconds.\n[High Tide]\nMax HP increases by {1}. A moving [Sea Wall] rises in front of Poseidon.\nAllied units behind [Sea Wall] within a {2}-meter fan-shaped area including Poseidon gain:\nBlock Rate increases by {3}. Block Damage Reduction increases by {4}. Damage taken is reduced by {5}.\nWhen an allied unit inside [Sea Wall] is hit and does not already have [Backflow] while Poseidon has [Tide Law] consume {6} stacks of [Tide Law] to grant the target [Backflow] for {7} seconds.\n[Backflow]: Gain an additional {8} Block Rate. Gain an additional {9} Block Damage Reduction. Damage taken is additionally reduced by {10}.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.",
      levelValues: [["8", "63%", "5", "36%", "23%", "20%", "1", "10", "13%", "3.4%", "13%"], ["8", "67.7%", "5", "38.7%", "24.7%", "21.6%", "1", "10", "14%", "3.6%", "14%"], ["8", "72.3%", "5", "41.3%", "26.3%", "23.1%", "1", "10", "15%", "3.9%", "15%"], ["8", "77%", "5", "44%", "28%", "24.7%", "1", "10", "16%", "4.1%", "16%"], ["8", "81.7%", "5", "46.7%", "29.7%", "26.2%", "1", "10", "17%", "4.3%", "17%"], ["8", "86.3%", "5", "49.3%", "31.3%", "27.8%", "1", "10", "18%", "4.6%", "18%"], ["8", "91%", "5", "52%", "33%", "29.3%", "1", "10", "19%", "4.8%", "19%"], ["8", "95.7%", "5", "54.7%", "34.7%", "30.9%", "1", "10", "20%", "5%", "20%"], ["8", "100.3%", "5", "57.3%", "36.3%", "32.4%", "1", "10", "21%", "5.3%", "21%"], ["8", "105%", "5", "60%", "38%", "34%", "1", "10", "22%", "5.5%", "22%"], ["8", "109.7%", "5", "62.7%", "39.7%", "35.6%", "1", "10", "23%", "5.7%", "23%"], ["8", "114.3%", "5", "65.3%", "41.3%", "37.1%", "1", "10", "24%", "6%", "24%"], ["8", "119%", "5", "68%", "43%", "38.7%", "1", "10", "25%", "6.2%", "25%"], ["8", "123.7%", "5", "70.7%", "44.7%", "40.2%", "1", "10", "26%", "6.4%", "26%"]],
    },
    passive:     {
      name: "Tidal Backflow",
      description: "[High Tide] and [Low Tide] cannot coexist.\nEnter [High Tide] immediately at the start of battle for 8 seconds.\n[Tide Law]: Up to 12 stacks. Each stack of [Tide Law] increases Poseidon's DEF by 27%.\n[Tidal Backflow]: Every time Poseidon consumes a total of 4 stacks of [Tide Law], she immediately restores HP equal to 81.4% of max HP.",
      template: "[High Tide] and [Low Tide] cannot coexist.\nEnter [High Tide] immediately at the start of battle for {0} seconds.\n[Tide Law]: Up to {1} stacks. Each stack of [Tide Law] increases Poseidon's DEF by {2}.\n[Tidal Backflow]: Every time Poseidon consumes a total of {3} stacks of [Tide Law], she immediately restores HP equal to {4} of max HP.",
      levelValues: [["8", "12", "14%", "4", "41%"], ["8", "12", "15%", "4", "44.1%"], ["8", "12", "16%", "4", "47.2%"], ["8", "12", "17%", "4", "50.3%"], ["8", "12", "18%", "4", "53.4%"], ["8", "12", "19%", "4", "56.6%"], ["8", "12", "20%", "4", "59.7%"], ["8", "12", "21%", "4", "62.8%"], ["8", "12", "22%", "4", "65.9%"], ["8", "12", "23%", "4", "69%"], ["8", "12", "24%", "4", "72.1%"], ["8", "12", "25%", "4", "75.2%"], ["8", "12", "26%", "4", "78.3%"], ["8", "12", "27%", "4", "81.4%"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "After battle starts Poseidon gains 20% max HP.\nFor every 5000 max HP she additionally gains 6% healing received, up to an additional 30%.",
    requirements: {
      faction: "Otis",
      element: "Ice",
      alternativeConditions: "Team contains 2 Otis characters or 2 Ice characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "At the start of battle Poseidon immediately gains 4 stacks of [Tide Law].\n The number of [Follow-Up] triggers needed to gain [Tide Law] is reduced from 4 to 3.",
    },
    {
      level: 2,
      effect: "When [Tidal Backflow] is triggered, Poseidon's healing received increases by 50% for 15 seconds.",
    },
    {
      level: 3,
      effect: "[Normal Attack] [Skill] [Ultimate Skill] and [Passive] levels increase by 2.",
    },
    {
      level: 4,
      effect: "Max HP increases by 65%.\n[Tide Law] additionally increases all resistances by 3.6%.",
    },
    {
      level: 5,
      effect: "[Normal Attack] [Skill] [Ultimate Skill] and [Passive] levels increase by 2.",
    },
    {
      level: 6,
      effect: "Casting an ultimate skill to enter [High Tide] while in [Low Tide] retains the [Low Tide] effect for 4 more seconds.\nUsing skills during [High Tide] can still grant [Low Tide] but it lasts only 4 seconds.",
    },
  ],
  memoryCard: {
    name: "Sea Deity's Soft Ritual",
    image: "Poseidoncard.png",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Max HP increases by 24%.\nWhen the wearer casts an ultimate skill all allies gain [Tideguard] for 8 seconds. If [Tideguard] is gained again remove the existing [Tideguard] and its accumulated Critical Resistance bonus first.\n[Tideguard]:\nDEF increases by 17%.\nBlock Rate increases by 3%.\nEach time an allied unit with [Tideguard] is hit its Critical Resistance increases by 9% up to 5 stacks until [Tideguard] ends.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.",
      "Max HP increases by 28%.\nWhen the wearer casts an ultimate skill all allies gain [Tideguard] for 8 seconds. If [Tideguard] is gained again remove the existing [Tideguard] and its accumulated Critical Resistance bonus first.\n[Tideguard]:\nDEF increases by 20%.\nBlock Rate increases by 3.5%.\nEach time an allied unit with [Tideguard] is hit its Critical Resistance increases by 10.5% up to 5 stacks until [Tideguard] ends.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.",
      "Max HP increases by 32%.\nWhen the wearer casts an ultimate skill all allies gain [Tideguard] for 8 seconds. If [Tideguard] is gained again remove the existing [Tideguard] and its accumulated Critical Resistance bonus first.\n[Tideguard]:\nDEF increases by 23%.\nBlock Rate increases by 4%.\nEach time an allied unit with [Tideguard] is hit its Critical Resistance increases by 12% up to 5 stacks until [Tideguard] ends.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.",
      "Max HP increases by 36%.\nWhen the wearer casts an ultimate skill all allies gain [Tideguard] for 8 seconds. If [Tideguard] is gained again remove the existing [Tideguard] and its accumulated Critical Resistance bonus first.\n[Tideguard]:\nDEF increases by 26%.\nBlock Rate increases by 4.5%.\nEach time an allied unit with [Tideguard] is hit its Critical Resistance increases by 13.5% up to 5 stacks until [Tideguard] ends.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.",
      "Max HP increases by 40%.\nWhen the wearer casts an ultimate skill all allies gain [Tideguard] for 8 seconds. If [Tideguard] is gained again remove the existing [Tideguard] and its accumulated Critical Resistance bonus first.\n[Tideguard]:\nDEF increases by 28%.\nBlock Rate increases by 5%.\nEach time an allied unit with [Tideguard] is hit its Critical Resistance increases by 15% up to 5 stacks until [Tideguard] ends.\n[Block]: Has a chance to reduce that instance of damage by 30%. Damage over time ignores Block.",
    ],
    restriction: "Only effective for Tank",
  },
  tags: [
    "Healing",
    "Crit Rate",
    "Crit",
    "DOT",
    "Damage Reduction",
    "Ice Damage",
  ],
};

export const poseidonSEO = {
  title: `Poseidon - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Poseidon, a SSR Ice Tank in Zone Nova. Includes skills, awakenings, the Sea Deity's Soft Ritual memory card, and optimal build strategies.`,
};

export default poseidonData;