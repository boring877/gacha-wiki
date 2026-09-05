// Jill Character Data - Zone Nova
// Character ID: 4032

export const jillData = {
  name: 'Jill',
  image: 'Jill.png',
  rarity: 'SSR',
  element: 'Holy',
  class: 'Healer',
  role: 'Healer',
  faction: 'Monochrome Realm',

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
    attack: '994',
    defense: '600',
  },
  talentTree: {
    totals: ["ATK +65.8%", "Healing +65%", "HP +8%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "Healing +10%, ATK +10%",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "Healing +15%, ATK +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "Healing +20%, ATK +20%",
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
        stat: "ATK +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "ATK +3.2%",
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
        stat: "ATK +3.2%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "Healing +8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "ATK +4.8%",
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
        stat: "ATK +6.4%",
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

  skills: {
    normal:     {
      name: "Morning Drill",
      cooldown: "2.0s",
      description: "Deals holy DMG equal to 120% ATK to the target enemy.",
      template: "Deals holy DMG equal to {0} ATK to the target enemy.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Bliss Brand",
      cooldown: "5.0s",
      description: "All allies gain [Bliss Brand] for 3s. After a unit with [Bliss Brand] is attacked, it recovers HP equal to Jill's ATK 18.7% + 150 (up to 10 times).",
      template: "All allies gain [Bliss Brand] for {0}s. After a unit with [Bliss Brand] is attacked, it recovers HP equal to Jill's ATK {1} + {2} (up to {3} times).",
      levelValues: [["3", "10%", "150", "10"], ["3", "10.7%", "150", "10"], ["3", "11.3%", "150", "10"], ["3", "12%", "150", "10"], ["3", "12.7%", "150", "10"], ["3", "13.3%", "150", "10"], ["3", "14%", "150", "10"], ["3", "14.7%", "150", "10"], ["3", "15.3%", "150", "10"], ["3", "16%", "250", "10"], ["3", "16.7%", "150", "10"], ["3", "17.3%", "150", "10"], ["3", "18%", "150", "10"], ["3", "18.7%", "150", "10"]],
    },
    ultimate:     {
      name: "All-Out Assault",
      energyCost: "6",
      cooldown: "6.0s",
      description: "After a brief cast, all allies gain [Bloodthirsty Sanction], and the nearest enemy gains 20 stacks of [Surrounded] (the stack count resets when this is cast) for 10s.\n[Bloodthirsty Sanction]: After attacking an enemy, recover HP for self equal to Jill's ATK 30.4% + 264 (up to 20 times), and ATK increases by 17.7% during this period.\n[Surrounded]: Loses 1 stack each time it is attacked. When all stacks are lost, all allies recover HP equal to Jill's ATK 104% + 126.\n",
      template: "After a brief cast, all allies gain [Bloodthirsty Sanction], and the nearest enemy gains {0} stacks of [Surrounded] (the stack count resets when this is cast) for {1}s.\n[Bloodthirsty Sanction]: After attacking an enemy, recover HP for self equal to Jill's ATK {2} + {3} (up to {4} times), and ATK increases by {5} during this period.\n[Surrounded]: Loses 1 stack each time it is attacked. When all stacks are lost, all allies recover HP equal to Jill's ATK {6} + {7}.\n",
      levelValues: [["20", "10", "16%", "264", "20", "9%", "52%", "126"], ["20", "10", "17.1%", "264", "20", "9.7%", "56%", "126"], ["20", "10", "18.2%", "264", "20", "10.3%", "60%", "126"], ["20", "10", "19.3%", "264", "20", "11%", "64%", "126"], ["20", "10", "20.4%", "264", "20", "11.7%", "68%", "126"], ["20", "10", "21.6%", "264", "20", "12.3%", "72%", "126"], ["20", "10", "22.7%", "264", "20", "13%", "76%", "126"], ["20", "10", "23.8%", "264", "20", "13.7%", "80%", "126"], ["20", "10", "24.9%", "264", "20", "14.3%", "84%", "126"], ["20", "10", "26%", "440", "20", "15%", "88%", "210"], ["20", "10", "27.1%", "264", "20", "15.7%", "92%", "126"], ["20", "10", "28.2%", "264", "20", "16.3%", "96%", "126"], ["20", "10", "29.3%", "264", "20", "17%", "100%", "126"], ["20", "10", "30.4%", "264", "20", "17.7%", "104%", "126"]],
    },
    passive:     {
      name: "Commander's Gaze",
      description: "After an ally is attacked, Jill marks the attacked ally's position for 1s.\nWhen marked, if there are:\n2 or more different marks: All allies recover HP equal to Jill's ATK 14.2% + 50 (up to once every 1s)\n3 or more different marks: All allies recover HP equal to Jill's ATK 36.8% + 77; all allies' chaos RES increases by 20% for 2s (up to once every 1s)\n4 or more different marks: All allies recover HP equal to Jill's ATK 100.6% + 210; all allies gain [Tenacity] for 1s (up to once every 1s)\n[Tenacity]: While active, the unit cannot die and survives with 1 HP.\n",
      template: "After an ally is attacked, Jill marks the attacked ally's position for {0}s.\nWhen marked, if there are:\n2 or more different marks: All allies recover HP equal to Jill's ATK {1} + {2} (up to once every {3}s)\n3 or more different marks: All allies recover HP equal to Jill's ATK {4} + {5}; all allies' chaos RES increases by {6} for {7}s (up to once every {8}s)\n4 or more different marks: All allies recover HP equal to Jill's ATK {9} + {10}; all allies gain [Tenacity] for {11}s (up to once every {12}s)\n[Tenacity]: While active, the unit cannot die and survives with 1 HP.\n",
      levelValues: [["1", "7%", "50", "1", "18%", "77", "20%", "2", "1", "50%", "210", "1", "1"], ["1", "7.6%", "50", "1", "19.4%", "77", "20%", "2", "1", "53.9%", "210", "1", "1"], ["1", "8.1%", "50", "1", "20.9%", "77", "20%", "2", "1", "57.8%", "210", "1", "1"], ["1", "8.7%", "50", "1", "22.3%", "77", "20%", "2", "1", "61.7%", "210", "1", "1"], ["1", "9.2%", "50", "1", "23.8%", "77", "20%", "2", "1", "65.6%", "210", "1", "1"], ["1", "9.8%", "50", "1", "25.2%", "77", "20%", "2", "1", "69.4%", "210", "1", "1"], ["1", "10.3%", "50", "1", "26.7%", "77", "20%", "2", "1", "73.3%", "210", "1", "1"], ["1", "10.9%", "50", "1", "28.1%", "77", "20%", "2", "1", "77.2%", "210", "1", "1"], ["1", "11.4%", "50", "1", "29.6%", "77", "20%", "2", "1", "81.1%", "210", "1", "1"], ["1", "12%", "85", "1", "31%", "128", "20%", "2", "1", "85%", "350", "1", "1"], ["1", "12.6%", "50", "1", "32.4%", "77", "20%", "2", "1", "88.9%", "210", "1", "1"], ["1", "13.1%", "50", "1", "33.9%", "77", "20%", "2", "1", "92.8%", "210", "1", "1"], ["1", "13.7%", "50", "1", "35.3%", "77", "20%", "2", "1", "96.7%", "210", "1", "1"], ["1", "14.2%", "50", "1", "36.8%", "77", "20%", "2", "1", "100.6%", "210", "1", "1"]],
    },
  },

  teamSkill: {
    name: "Combo Skill",
    description: "ATK increases by 13%\nAt the start of battle, for every 500 ATK, own healing increases by 9.5%, up to 6 times.",
    requirements: {
      faction: "Monochrome Realm",
      element: "Holy",
      alternativeConditions: "Team contains 2 Monochrome Realm characters or 2 Holy characters",
    },
  },

  awakenings: [
    {
      level: 1,
      effect: "At the start of battle, all allies gain [Tenacity] for 9s.",
    },
    {
      level: 2,
      effect: "Each time [Surrounded] loses 1 stack, all allies additionally recover HP equal to 5% of Jill's ATK. The duration of [Bliss Brand] is extended to 5s.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "ATK increases by 45%. When all allies receive healing, the healing amount is additionally increased by 20%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "The first 3 Ultimate casts additionally grant all allies [Tenacity] for 6s.",
    },
  ],

  memoryCard: {
    name: "Gentle Morning Command",
    image: "Jillcard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "ATK increases by 20%\nAfter an ally is healed, the wearer gains [Military Order] (up to 50 stacks) for 6s.\nFor every 10 stacks of [Military Order], all allies' healing received additionally increases by 10%, and damage taken is reduced by 2%.\nWhen the wearer casts their Ultimate, consume all [Military Order]. Every 10 stacks increase all allies' ATK by 3% for 6s.",
      "ATK increases by 23%\nAfter an ally is healed, the wearer gains [Military Order] (up to 50 stacks) for 6s.\nFor every 10 stacks of [Military Order], all allies' healing received additionally increases by 11.5%, and damage taken is reduced by 2.3%.\nWhen the wearer casts their Ultimate, consume all [Military Order]. Every 10 stacks increase all allies' ATK by 3.5% for 6s.",
      "ATK increases by 26.5%\nAfter an ally is healed, the wearer gains [Military Order] (up to 50 stacks) for 6s.\nFor every 10 stacks of [Military Order], all allies' healing received additionally increases by 13.5%, and damage taken is reduced by 2.6%.\nWhen the wearer casts their Ultimate, consume all [Military Order]. Every 10 stacks increase all allies' ATK by 4% for 6s.",
      "ATK increases by 30%\nAfter an ally is healed, the wearer gains [Military Order] (up to 50 stacks) for 6s.\nFor every 10 stacks of [Military Order], all allies' healing received additionally increases by 15%, and damage taken is reduced by 3%.\nWhen the wearer casts their Ultimate, consume all [Military Order]. Every 10 stacks increase all allies' ATK by 4.5% for 6s.",
      "ATK increases by 33.5%\nAfter an ally is healed, the wearer gains [Military Order] (up to 50 stacks) for 6s.\nFor every 10 stacks of [Military Order], all allies' healing received additionally increases by 16.5%, and damage taken is reduced by 3.3%.\nWhen the wearer casts their Ultimate, consume all [Military Order]. Every 10 stacks increase all allies' ATK by 5% for 6s.",
    ]] (up to 50 stacks) for 6s.",
      "For every 10 stacks of [Military Order], all allies' healing received additionally increases by 16.5%, and damage taken is reduced by 3.3%.",
      "When the wearer casts their Ultimate, consume all [Military Order]. Every 10 stacks increase all allies' ATK by 5% for 6s.",
    ],
    restriction: "Only effective for Healer",
  },

  tags: ['Healing', 'Tenacity', 'Team Buff', 'ATK Buff', 'Ranged', 'Holy'],
};

export const jillSEO = {
  title: `${jillData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${jillData.name}, a ${jillData.rarity} ${jillData.element} ${jillData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

export const jill = {
  id: 'jill',
  name: 'Jill',
  rarity: 'SSR',
  element: 'Holy',
  role: 'Healer',
  class: 'Healer',
  faction: 'Monochrome Realm',
  maxLevel: 80,

  baseStats: {
    hp: 6480,
    attack: 1264,
    defense: 600,
    energyRecovery: 0.25,
    critRate: 0,
    critDamage: 50,
  },

  images: {
    portrait: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/characters/Jill.png',
    card: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/zone-nova/memories/Jillcard.jpg',
  },

  tags: [
    'Healer',
    'Holy',
    'Monochrome Realm',
    'Healing',
    'Tenacity',
    'Team Buff',
    'ATK Buff',
    'Ranged',
  ],
};

export default jillData;
