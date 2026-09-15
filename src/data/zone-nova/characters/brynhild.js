// Brynhild - Zone Nova Character Data
// SSR Warrior from A.S.A faction with Holy element
// Generated from decrypted live master data (2026-09-03); skills at max level (Lv.10)
export const brynhildData = {
  name: "Brynhild",
  image: "Brynhild.png",
  rarity: 'SSR',
  element: 'Holy',
  class: 'Warrior',
  role: "DPS",
  faction: "A.S.A",
  stats: {
    hp: "6,600",
    attack: "480",
    defense: "690",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '55.8%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '6,600',
    attack: '480',
    defense: '1,232',
  },
  talentTree: {
    totals: ["DEF +78.6%", "Crit Rate +55.8%", "Holy DMG +8%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "DEF +10%, Crit Rate +10%",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "DEF +15%, Crit Rate +15%",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "DEF +20%, Crit Rate +20%",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Crit Rate +2.4%",
        unlock: "After E1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "DEF +4.8%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "Holy DMG +3.2%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "Holy DMG +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Crit Rate +3.6%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "DEF +9.6%",
        unlock: "Lv 80",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Crit Rate +4.8%",
        unlock: "Lv 75",
        materials: [{"name": "Scarab Stone", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Cold Radiance Slash",
      cooldown: "2.0s",
      description: "Deals holy damage equal to 120% of own DEF to the nearest enemy unit.",
      template: "Deals holy damage equal to {0} of own DEF to the nearest enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Soul Guidance",
      cooldown: "0.1s",
      description: "Performs 3 leaping dashes toward the farthest enemy unit. Each dash deals holy damage equal to 228.3% of own DEF to all enemies within 1.5 meters of self and inflicts [Nethermark].\nAfter the third dash, gains a shield equal to 211.1% of own DEF.\nNormal attacks and ultimate skills can be used between the three dashes.\nCD:0.1/0.1/5s\n[Nethermark]: Healing received is reduced by 153.6% and shields received are reduced by 62.3%. Takes holy damage equal to 65.8% of Brynhild's DEF every second for 7 seconds. Does not stack.",
      template: "Performs {0} leaping dashes toward the farthest enemy unit. Each dash deals holy damage equal to {1} of own DEF to all enemies within 1.5 meters of self and inflicts [Nethermark].\nAfter the third dash, gains a shield equal to {2} of own DEF.\nNormal attacks and ultimate skills can be used between the three dashes.\nCD:0.1/0.1/5s\n[Nethermark]: Healing received is reduced by {3} and shields received are reduced by {4}. Takes holy damage equal to {5} of Brynhild's DEF every second for {6} seconds. Does not stack.",
      levelValues: [["3", "120%", "110%", "77%", "32%", "34%", "7"], ["3", "128.3%", "117.8%", "82.9%", "34.3%", "36.4%", "7"], ["3", "136.7%", "125.6%", "88.8%", "36.7%", "38.9%", "7"], ["3", "145%", "133.3%", "94.7%", "39%", "41.3%", "7"], ["3", "153.3%", "141.1%", "100.6%", "41.3%", "43.8%", "7"], ["3", "161.7%", "148.9%", "106.4%", "43.7%", "46.2%", "7"], ["3", "170%", "156.7%", "112.3%", "46%", "48.7%", "7"], ["3", "178.3%", "164.4%", "118.2%", "48.3%", "51.1%", "7"], ["3", "186.7%", "172.2%", "124.1%", "50.7%", "53.6%", "7"], ["3", "195%", "180%", "130%", "53%", "56%", "7"], ["3", "203.3%", "187.8%", "135.9%", "55.3%", "58.4%", "7"], ["3", "211.7%", "195.6%", "141.8%", "57.7%", "60.9%", "7"], ["3", "220%", "203.3%", "147.7%", "60%", "63.3%", "7"], ["3", "228.3%", "211.1%", "153.6%", "62.3%", "65.8%", "7"]],
    },
    ultimate:     {
      name: "Einherjar Judgment",
      energyCost: "4",
      cooldown: "3.0s",
      description: "Targets the enemy unit with the lowest current HP percentage and leaps above it, first inflicting [Nethermark], then bringing down a giant sword to deal holy damage equal to 1035.6% of own DEF. Remains beside the target after landing.\nIf the target's HP before the damage is dealt is no higher than 50%, this ultimate skill gains 230.6% increased damage, 110.9% increased DEF Penetration Rate, and 90.8% increased holy Resistance Penetration.\nIf the target has a death prevention effect after this ultimate skill's damage is resolved, inflicts [Pending Judgment].\n[Pending Judgment]: Does not stack and lasts until triggered. When the bearer no longer has a death prevention effect, it immediately takes another instance of [Einherjar Judgment] damage.\nRegardless of its HP at that time, this damage applies the damage increase and penetration bonuses above, then removes [Pending Judgment]. This effect remains active after Brynhild dies.",
      template: "Targets the enemy unit with the lowest current HP percentage and leaps above it, first inflicting [Nethermark], then bringing down a giant sword to deal holy damage equal to {0} of own DEF. Remains beside the target after landing.\nIf the target's HP before the damage is dealt is no higher than {1}, this ultimate skill gains {2} increased damage, {3} increased DEF Penetration Rate, and {4} increased holy Resistance Penetration.\nIf the target has a death prevention effect after this ultimate skill's damage is resolved, inflicts [Pending Judgment].\n[Pending Judgment]: Does not stack and lasts until triggered. When the bearer no longer has a death prevention effect, it immediately takes another instance of [Einherjar Judgment] damage.\nRegardless of its HP at that time, this damage applies the damage increase and penetration bonuses above, then removes [Pending Judgment]. This effect remains active after Brynhild dies.",
      levelValues: [["530%", "50%", "115%", "56%", "46%"], ["568.9%", "50%", "123.9%", "60.2%", "49.4%"], ["607.8%", "50%", "132.8%", "64.4%", "52.9%"], ["646.7%", "50%", "141.7%", "68.7%", "56.3%"], ["685.6%", "50%", "150.6%", "72.9%", "59.8%"], ["724.4%", "50%", "159.4%", "77.1%", "63.2%"], ["763.3%", "50%", "168.3%", "81.3%", "66.7%"], ["802.2%", "50%", "177.2%", "85.6%", "70.1%"], ["841.1%", "50%", "186.1%", "89.8%", "73.6%"], ["880%", "50%", "195%", "94%", "77%"], ["918.9%", "50%", "203.9%", "98.2%", "80.4%"], ["957.8%", "50%", "212.8%", "102.4%", "83.9%"], ["996.7%", "50%", "221.7%", "106.7%", "87.3%"], ["1035.6%", "50%", "230.6%", "110.9%", "90.8%"]],
    },
    passive:     {
      name: "Soul Spectrum Analysis",
      description: "After being attacked, permanently gains 1 stacks of [Soul Hue] based on the attacker's innate element.\nEach element can grant up to 1 stacks every 5 seconds, with separate timers for each element. Enemies without an element share one timer.\n[Soul Hue] stacks up to 12 times. No more stacks can be gained at the cap.\nEach stack of [Soul Hue] increases own DEF by 11.8% and shields received by 8.3%.\nWhen Brynhild is attacked, each stack of [Soul Hue] reduces the attack's DEF Penetration Rate against her by 5.8%.\nAny reduction below 0% is treated as additional DEF for Brynhild against that instance of damage.",
      template: "After being attacked, permanently gains {0} stacks of [Soul Hue] based on the attacker's innate element.\nEach element can grant up to {2} stacks every {1} seconds, with separate timers for each element. Enemies without an element share one timer.\n[Soul Hue] stacks up to {3} times. No more stacks can be gained at the cap.\nEach stack of [Soul Hue] increases own DEF by {4} and shields received by {5}.\nWhen Brynhild is attacked, each stack of [Soul Hue] reduces the attack's DEF Penetration Rate against her by {6}.\nAny reduction below {7}% is treated as additional DEF for Brynhild against that instance of damage.",
      levelValues: [["1", "5", "1", "12", "6%", "4.1%", "2.9%", "0"], ["1", "5", "1", "12", "6.4%", "4.4%", "3.1%", "0"], ["1", "5", "1", "12", "6.9%", "4.7%", "3.3%", "0"], ["1", "5", "1", "12", "7.3%", "5.1%", "3.6%", "0"], ["1", "5", "1", "12", "7.8%", "5.4%", "3.8%", "0"], ["1", "5", "1", "12", "8.2%", "5.7%", "4%", "0"], ["1", "5", "1", "12", "8.7%", "6%", "4.2%", "0"], ["1", "5", "1", "12", "9.1%", "6.4%", "4.5%", "0"], ["1", "5", "1", "12", "9.6%", "6.7%", "4.7%", "0"], ["1", "5", "1", "12", "10%", "7%", "4.9%", "0"], ["1", "5", "1", "12", "10.4%", "7.3%", "5.1%", "0"], ["1", "5", "1", "12", "10.9%", "7.6%", "5.3%", "0"], ["1", "5", "1", "12", "11.3%", "8%", "5.6%", "0"], ["1", "5", "1", "12", "11.8%", "8.3%", "5.8%", "0"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "Own DEF increases by 10%.\nAt the start of battle, every 500 DEF increases own holy damage by 5%, up to 6 times.",
    requirements: {
      faction: "A.S.A",
      element: "Holy",
      alternativeConditions: "Team contains 2 A.S.A characters or 2 Holy characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "Each time 1 stack of [Soul Hue] is successfully gained, gains an additional shield equal to 67% of own DEF.",
    },
    {
      level: 2,
      effect: "Own damage over time increases by 29%. When attacked by a unit with [Pending Judgment], damage dealt by that unit is reduced by 51%.",
    },
    {
      level: 3,
      effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
    },
    {
      level: 4,
      effect: "Holy damage increases by 46%.",
    },
    {
      level: 5,
      effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
    },
    {
      level: 6,
      effect: "All damage penetrates 45% Holy Resistance.\nWhen Brynhild is attacked, each stack of [Soul Hue] additionally reduces the attack's Resistance Penetration against her by 5.5%. Any reduction below 0% is treated as additional Resistance for Brynhild against that instance of damage.",
    },
  ],
  memoryCard: {
    name: "Afternoon Waiting",
    image: "Brynhildcard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "DEF increases by 41%.\nThe wearer's Holy damage increases by 20%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 32% of their Max HP. This effect can trigger at most once every 3 seconds.",
      "DEF increases by 48%.\nThe wearer's Holy damage increases by 23%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 37% of their Max HP. This effect can trigger at most once every 3 seconds.",
      "DEF increases by 55%.\nThe wearer's Holy damage increases by 26%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 43% of their Max HP. This effect can trigger at most once every 3 seconds.",
      "DEF increases by 62%.\nThe wearer's Holy damage increases by 29%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 48% of their Max HP. This effect can trigger at most once every 3 seconds.",
      "DEF increases by 69%.\nThe wearer's Holy damage increases by 33%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 53% of their Max HP. This effect can trigger at most once every 3 seconds.",
    ],
    restriction: "Only effective for Warrior",
  },
  tags: [
    "Shield",
    "Anti-Heal",
    "DOT",
    "Holy Damage",
  ],
};

export const brynhildSEO = {
  title: `Brynhild - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Brynhild, a SSR Holy Warrior in Zone Nova. Includes skills, awakenings, the Afternoon Waiting memory card, and optimal build strategies.`,
};

export default brynhildData;