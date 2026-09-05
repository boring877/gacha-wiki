// Erika - Zone Nova Character Data
// SSR Disruptor from Safir faction with Wind element
// Anti-shield debuffer with Violation mechanics and Disciplinary Action system

export const erikaData = {
  name: 'Erika',
  image: 'Erika.png',
  rarity: 'SSR',
  element: 'Wind',
  class: 'Disruptor',
  role: 'Disruptor',
  faction: 'Safir',

  stats: {
    hp: "6,000",
    attack: "600",
    defense: "600",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '6,480',
    attack: '966',
    defense: '600',
  },
  talentTree: {
    totals: ["Wind DMG +65.8%", "ATK +61%", "HP +8%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, Wind DMG +10%",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, Wind DMG +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, Wind DMG +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "ATK +3.2%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "Wind DMG +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "Wind DMG +3.2%",
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
        stat: "Wind DMG +3.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "ATK +6.4%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Wind DMG +4.8%",
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
        stat: "Wind DMG +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "ATK +6.4%",
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
        materials: [{"name": "Storm Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Storm Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Storm Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Storm Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Wind_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Storm Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Wind_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  skills: {
    normal:     {
      name: "On Record",
      cooldown: "2.0s",
      description: "Deals 120% attack power as wind damage to the designated enemy unit.",
      template: "Deals {0} attack power as wind damage to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Violation Confirmed",
      cooldown: "3.0s",
      description: "Deals 223.3% attack power as wind damage to the enemy unit with the highest Attack Power.\nIf the skill target has a shield before being hit inflict [Violation Vulnerability] for 5 seconds.\n[Violation Vulnerability]: Damage taken increases by 11.8%.",
      template: "Deals {0} attack power as wind damage to the enemy unit with the highest Attack Power.\nIf the skill target has a shield before being hit inflict [Violation Vulnerability] for {1} seconds.\n[Violation Vulnerability]: Damage taken increases by {2}.",
      levelValues: [["115%", "5", "6%"], ["123.3%", "5", "6.4%"], ["131.7%", "5", "6.9%"], ["140%", "5", "7.3%"], ["148.3%", "5", "7.8%"], ["156.7%", "5", "8.2%"], ["165%", "5", "8.7%"], ["173.3%", "5", "9.1%"], ["181.7%", "5", "9.6%"], ["190%", "5", "10%"], ["198.3%", "5", "10.4%"], ["206.7%", "5", "10.9%"], ["215%", "5", "11.3%"], ["223.3%", "5", "11.8%"]],
    },
    ultimate:     {
      name: "Disciplinary Verdict",
      energyCost: "5",
      cooldown: "6.0s",
      description: "Deals 341.1% attack power as wind damage to all enemy units within 5 meters of the enemy unit with the highest Attack Power and inflicts [Disciplinary Action] for 4 seconds.\nThis damage can [Interrupt] a skill the target is casting.\n[Disciplinary Action]: Healing received is reduced by 16.4%; shielding received is reduced by 11.8%; if the target has a shield when attacking damage dealt is reduced by 43.7%.",
      template: "Deals {1} attack power as wind damage to all enemy units within {0} meters of the enemy unit with the highest Attack Power and inflicts [Disciplinary Action] for {2} seconds.\nThis damage can [Interrupt] a skill the target is casting.\n[Disciplinary Action]: Healing received is reduced by {3}; shielding received is reduced by {4}; if the target has a shield when attacking damage dealt is reduced by {5}.",
      levelValues: [["5", "175%", "4", "8.5%", "6%", "22%"], ["5", "187.8%", "4", "9.1%", "6.4%", "23.7%"], ["5", "200.6%", "4", "9.7%", "6.9%", "25.3%"], ["5", "213.3%", "4", "10.3%", "7.3%", "27%"], ["5", "226.1%", "4", "10.9%", "7.8%", "28.7%"], ["5", "238.9%", "4", "11.6%", "8.2%", "30.3%"], ["5", "251.7%", "4", "12.2%", "8.7%", "32%"], ["5", "264.4%", "4", "12.8%", "9.1%", "33.7%"], ["5", "277.2%", "4", "13.4%", "9.6%", "35.3%"], ["5", "290%", "4", "14%", "10%", "37%"], ["5", "302.8%", "4", "14.6%", "10.4%", "38.7%"], ["5", "315.6%", "4", "15.2%", "10.9%", "40.3%"], ["5", "328.3%", "4", "15.8%", "11.3%", "42%"], ["5", "341.1%", "4", "16.4%", "11.8%", "43.7%"]],
    },
    passive:     {
      name: "Disciplinary Patrol",
      description: "When an allied unit is attacked by an enemy unit with a shield that enemy unit is inflicted with [Violation Warning]. Damage dealt is reduced by 26% for 6 seconds. This effect cannot stack.\nAfter this unit's skill or ultimate hits an enemy unit if the target has no shield the target gains a shield equal to 1% of this unit's Attack Power.",
      template: "When an allied unit is attacked by an enemy unit with a shield that enemy unit is inflicted with [Violation Warning]. Damage dealt is reduced by {0} for {1} seconds. This effect cannot stack.\nAfter this unit's skill or ultimate hits an enemy unit if the target has no shield the target gains a shield equal to {2}% of this unit's Attack Power.",
      levelValues: [["13%", "6", "1"], ["14%", "6", "1"], ["15%", "6", "1"], ["16%", "6", "1"], ["17%", "6", "1"], ["18%", "6", "1"], ["19%", "6", "1"], ["20%", "6", "1"], ["21%", "6", "1"], ["22%", "6", "1"], ["23%", "6", "1"], ["24%", "6", "1"], ["25%", "6", "1"], ["26%", "6", "1"]],
    },
  },

  teamSkill: {
    name: "Combo Skill",
    description: "After battle starts reduce the total damage dealt by all enemy units by 9.5%.\nFor every 1000 Attack Power this character has",
    requirements: {
      faction: "Safir",
      element: "Wind",
      alternativeConditions: "Team contains 2 Safir characters or 2 Wind characters",
    },
  },

  awakenings: [
    {
      level: 1,
      effect: "After battle starts inflict [Martial Law] on all enemy units for 10 seconds.\n[Martial Law]: Damage dealt is reduced by 11%; if the enemy unit has a shield when attacking this reduction increases to 79%.",
    },
    {
      level: 2,
      effect: "When an allied character attacks a target with [Violation Vulnerability] damage dealt increases by 18% and Critical Rate increases by 38%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "When allies attack if the target has any 2 of [Violation Warning] / [Violation Vulnerability] / [Disciplinary Action] that target's Defense is reduced by 17%. If all 3 are present at the same time this effect is tripled.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "During [Disciplinary Action] the target's healing received is additionally reduced by 49% and shielding received is additionally reduced by 27%.",
    },
  ],

  memoryCard: {
    name: "Discipline Director",
    image: "Erikacard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Attack Power increases by 24%.\nWhen the wearer's skill or ultimate hits a target that target's healing received is reduced by 7% and shielding received is reduced by 6% for 3 seconds. This effect cannot stack.\nIf the target has a shield at that time the target's damage dealt is reduced by 11% for 3 seconds. This effect cannot stack.",
      "Attack Power increases by 28%.\nWhen the wearer's skill or ultimate hits a target that target's healing received is reduced by 8.5% and shielding received is reduced by 7% for 3 seconds. This effect cannot stack.\nIf the target has a shield at that time the target's damage dealt is reduced by 12% for 3 seconds. This effect cannot stack.",
      "Attack Power increases by 32%.\nWhen the wearer's skill or ultimate hits a target that target's healing received is reduced by 9.5% and shielding received is reduced by 8% for 3 seconds. This effect cannot stack.\nIf the target has a shield at that time the target's damage dealt is reduced by 14% for 3 seconds. This effect cannot stack.",
      "Attack Power increases by 36%.\nWhen the wearer's skill or ultimate hits a target that target's healing received is reduced by 11% and shielding received is reduced by 9.5% for 3 seconds. This effect cannot stack.\nIf the target has a shield at that time the target's damage dealt is reduced by 16% for 3 seconds. This effect cannot stack.",
      "Attack Power increases by 40%.\nWhen the wearer's skill or ultimate hits a target that target's healing received is reduced by 12% and shielding received is reduced by 10% for 3 seconds. This effect cannot stack.\nIf the target has a shield at that time the target's damage dealt is reduced by 18% for 3 seconds. This effect cannot stack.",
    ],
    restriction: "Only effective for Disruptor",
  },

  tags: [
    'Anti-Shield',
    'Disruptor',
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
