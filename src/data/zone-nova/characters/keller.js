// Keller - Zone Nova Character Data
// SSR Warrior from Monochrome Realm faction with Ice element
// Normal attack focused DPS with Ice Giant transformation

export const kellerData = {
  name: 'Keller',
  image: 'Keller.png',
  rarity: 'SSR',
  element: 'Ice',
  class: 'Warrior',
  role: 'DPS',
  faction: 'Monochrome Realm',

  stats: {
    hp: "6,600",
    attack: "480",
    defense: "690",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '10.8%',
    maxCritDmg: '62%',
  },
  maxStats: {
    hp: '9,570',
    attack: '803',
    defense: '690',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +45%", "Crit DMG +12%", "Crit Rate +10.8%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Crit Rate +2.4%",
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
        stat: "Crit DMG +4.8%",
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
        stat: "Crit DMG +7.2%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Crit Rate +3.6%",
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
        stat: "Crit Rate +4.8%",
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
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  skills: {
    normal:     {
      name: "Ice Mang",
      cooldown: "2.0s",
      description: "Deals ice damage equal to 90.6% attack power to all enemy units.",
      template: "Deals ice damage equal to {0} attack power to all enemy units.",
      levelValues: [["40%"], ["43.9%"], ["47.8%"], ["51.7%"], ["55.6%"], ["59.4%"], ["63.3%"], ["67.2%"], ["71.1%"], ["75%"], ["78.9%"], ["82.8%"], ["86.7%"], ["90.6%"]],
    },
    auto:     {
      name: "Glacier Dance",
      cooldown: "5.0s",
      description: "Grants the user the [Dance of the Glacier] buff. While possessing [Dance of the Glacier]， normal attack damage is increased by 29.4%， and normal attack cooldown is reduced by 12.2%. [Dance of the Glacier] can stack up to 5 times and lasts for 8 seconds. When [Dance of the Glacier] reaches 5 stacks and deals normal attack damage to an enemy， it will additionally deal ice damage equal to 12.2% of the user's attack power. This additional damage is treated as normal attack damage.",
      template: "Grants the user the [Dance of the Glacier] buff. While possessing [Dance of the Glacier]， normal attack damage is increased by {0}， and normal attack cooldown is reduced by {1}. [Dance of the Glacier] can stack up to 5 times and lasts for 8 seconds. When [Dance of the Glacier] reaches 5 stacks and deals normal attack damage to an enemy， it will additionally deal ice damage equal to {2} of the user's attack power. This additional damage is treated as normal attack damage.",
      levelValues: [["15%", "5%", "5%"], ["16.1%", "5.6%", "5.6%"], ["17.2%", "6.1%", "6.1%"], ["18.3%", "6.7%", "6.7%"], ["19.4%", "7.2%", "7.2%"], ["20.6%", "7.8%", "7.8%"], ["21.7%", "8.3%", "8.3%"], ["22.8%", "8.9%", "8.9%"], ["23.9%", "9.4%", "9.4%"], ["25%", "10%", "10%"], ["26.1%", "10.6%", "10.6%"], ["27.2%", "11.1%", "11.1%"], ["28.3%", "11.7%", "11.7%"], ["29.4%", "12.2%", "12.2%"]],
    },
    ultimate:     {
      name: "Ice Age",
      energyCost: "4",
      cooldown: "5.0s",
      description: "Deals ice damage equal to 1711.1% attack power to all enemies and increase their skill cooldown by 40% for 8 seconds. Enters the [Ice Giant] state， increasing MaxHP by 73.3%， attack power by 172.2%， defense by 344.4%， and resistance to all attributes by 58.9% for 8 seconds. When performing a normal attack while in the [Ice Giant] ultimate skill state， an additional ice damage equal to 51.7% attack power will be dealt as normal attack damage.",
      template: "Deals ice damage equal to {0} attack power to all enemies and increase their skill cooldown by 40% for 8 seconds. Enters the [Ice Giant] state， increasing MaxHP by {1}， attack power by {2}， defense by {3}， and resistance to all attributes by {4} for 8 seconds. When performing a normal attack while in the [Ice Giant] ultimate skill state， an additional ice damage equal to {5} attack power will be dealt as normal attack damage.",
      levelValues: [["700%", "30%", "100%", "200%", "30%", "30%"], ["777.8%", "33.3%", "105.6%", "211.1%", "32.2%", "31.7%"], ["855.6%", "36.7%", "111.1%", "222.2%", "34.4%", "33.3%"], ["933.3%", "40%", "116.7%", "233.3%", "36.7%", "35%"], ["1011.1%", "43.3%", "122.2%", "244.4%", "38.9%", "36.7%"], ["1088.9%", "46.7%", "127.8%", "255.6%", "41.1%", "38.3%"], ["1166.7%", "50%", "133.3%", "266.7%", "43.3%", "40%"], ["1244.4%", "53.3%", "138.9%", "277.8%", "45.6%", "41.7%"], ["1322.2%", "56.7%", "144.4%", "288.9%", "47.8%", "43.3%"], ["1400%", "60%", "150%", "300%", "50%", "45%"], ["1477.8%", "63.3%", "155.6%", "311.1%", "52.2%", "46.7%"], ["1555.6%", "66.7%", "161.1%", "322.2%", "54.4%", "48.3%"], ["1633.3%", "70%", "166.7%", "333.3%", "56.7%", "50%"], ["1711.1%", "73.3%", "172.2%", "344.4%", "58.9%", "51.7%"]],
    },
    passive:     {
      name: "Cold Moon Flowing Light",
      description: "Each time a normal attack hits an enemy， apply [icefang]， reducing the enemy's shield gain 7.3% and healing received 4.9%， up to 15 stacks. Each time a normal attack hits an enemy， apply [Shatter]， reducing their defense 9.8% for 10 seconds， up to 10 stacks.",
      template: "Each time a normal attack hits an enemy， apply [icefang]， reducing the enemy's shield gain {0} and healing received {1}， up to 15 stacks. Each time a normal attack hits an enemy， apply [Shatter]， reducing their defense {2} for 10 seconds， up to 10 stacks.",
      levelValues: [["3%", "2%", "4%"], ["3.3%", "2.2%", "4.4%"], ["3.7%", "2.4%", "4.9%"], ["4%", "2.7%", "5.3%"], ["4.3%", "2.9%", "5.8%"], ["4.7%", "3.1%", "6.2%"], ["5%", "3.3%", "6.7%"], ["5.3%", "3.6%", "7.1%"], ["5.7%", "3.8%", "7.6%"], ["6%", "4%", "8%"], ["6.3%", "4.2%", "8.4%"], ["6.7%", "4.4%", "8.9%"], ["7%", "4.7%", "9.3%"], ["7.3%", "4.9%", "9.8%"]],
    },
  },

  teamSkill: {
    name: "Combo Skill",
    description: "Increases own attack power by 20% and critical hit rate by 10%. At the start of battle， every 500 attack power increases the entire team's critical hit damage by 7.5%， up to 8 times. At the start of battle， every 15% critical hit rate increases own critical hit damage by 12%， up to 5 times.",
    requirements: {
      faction: "Monochrome Realm",
      element: "Ice",
      alternativeConditions: "Team contains 2 Monochrome Realm characters or 2 Ice characters",
    },
  },

  awakenings: [
    {
      level: 1,
      effect: "Critical hit rate increased by 15%， first ultimate skill used upon entering the arena does not consume energy.Gains 1 stack of [Ice Power] after using a skill， increasing normal attack damage by 12.5%， up to a maximum of 5 stacks.",
    },
    {
      level: 2,
      effect: "Upon entering the arena， you immediately gain 3 stacks of [Dance of the Glacier]， increasing critical hit damage by 30%. When [Dance of the Glacier] reaches 5 stacks， your basic attack damage is increased by 50%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Increases <color=#1ec1ff>frost</color> damage by 50%. When health drops to 35% or below， instantly restores 75% of maximum health. Can trigger once per battle.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All damage penetrates 20% of frost resistance.",
    },
  ],

  memoryCard: {
    name: "Afternoon tantrums",
    image: "Kellercard.png",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Increases own attack power by 32%\uff0c critical hit damage by 50%\uff0c and normal attack damage by 40%. Every 3rd normal attack will deal an additional 25% of attack power as normal attack damage.",
      "Increases own attack power by 40%\uff0c critical hit damage by 60%\uff0c and normal attack damage by 50%. Every 3rd normal attack will deal an additional 35% of attack power as normal attack damage.",
      "Increases own attack power by 48%\uff0c critical hit damage by 70%\uff0c and normal attack damage by 60%. Every 3rd normal attack will deal an additional 45% of attack power as normal attack damage.",
      "Increases own attack power by 56%\uff0c critical hit damage by 80%\uff0c and normal attack damage by 80%. Every 3rd normal attack will deal an additional 55% of attack power as normal attack damage.",
      "Increases own attack power by 70%\uff0c critical hit damage by 90%\uff0c and normal attack damage by 100%. Every 3rd normal attack will deal an additional 75% of attack power as normal attack damage.",
    ],
    restriction: "Only effective for Warrior",
  },

  tags: [
    'Normal Attack',
    'Crit Rate',
    'Crit Damage',
    'Ice Damage',
    'Transformation',
    'AOE',
    'DEF Shred',
    'Anti-Heal',
    'Anti-Shield',
  ],
};

export const kellerSEO = {
  title: `${kellerData.name} - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for ${kellerData.name}, a ${kellerData.rarity} ${kellerData.element} ${kellerData.class} in Zone Nova. Includes Ice Age ultimate, Glacier Dance skill, Winter Blade passive, awakenings, Afternoon Tantrums memory card, and optimal build strategies.`,
};

export default kellerData;
