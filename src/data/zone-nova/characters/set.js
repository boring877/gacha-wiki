// Set - Zone Nova Character Data
// SSR Attacker from Kemich faction with Fire element
// Generated from live master data; skill/passive values at max awakened level 14
export const setData = {
  name: "Set",
  image: "Set.png",
  rarity: 'SSR',
  element: 'Fire',
  class: 'Attacker',
  role: "DPS",
  faction: 'Kemich',
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '7,711',
    attack: '1,305',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "Fire DMG +14.4%"],
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
        stat: "HP +3.2%",
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
        stat: "HP +4.8%",
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
  skills: {
    normal:     {
      name: "Sovereign's Execution Edict",
      cooldown: "2.0s",
      description: "Deals fire damage equal to 120% of Attack Power to the nearest enemy unit.",
      template: "Deals fire damage equal to {0} of Attack Power to the nearest enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Sandstorm Vortex Hunt",
      cooldown: "3.0s",
      description: "Rotates and moves behind the farthest enemy unit,\ndealing fire damage equal to 66% of Attack Power and knocking back 1 meters to enemy units in the movement path.\nUpon completion, deals fire damage equal to 412.2% of Attack Power and knocks back 3 meters to that unit.",
      template: "Rotates and moves behind the farthest enemy unit,\ndealing fire damage equal to {0} of Attack Power and knocking back {1} meters to enemy units in the movement path.\nUpon completion, deals fire damage equal to {2} of Attack Power and knocks back {3} meters to that unit.",
      levelValues: [["33.6%", "1", "210%", "3"], ["36.1%", "1", "225.6%", "3"], ["38.6%", "1", "241.1%", "3"], ["41.1%", "1", "256.7%", "3"], ["43.6%", "1", "272.2%", "3"], ["46%", "1", "287.8%", "3"], ["48.5%", "1", "303.3%", "3"], ["51%", "1", "318.9%", "3"], ["53.5%", "1", "334.4%", "3"], ["56%", "1", "350%", "3"], ["58.5%", "1", "365.6%", "3"], ["61%", "1", "381.1%", "3"], ["63.5%", "1", "396.7%", "3"], ["66%", "1", "412.2%", "3"]],
    },
    ultimate:     {
      name: "Crimson Sands Triple Break",
      energyCost: "3",
      cooldown: "1.0s",
      description: "After casting ULT, can cast the next stage of the skill within 4 seconds based on the number of [Infernal fire] stacks.\nFirst Stage: Powerfully slashes with the greatsword, dealing fire damage equal to 512.8% of Attack Power to the nearest enemy unit, and knocks back all enemy units within 5 meters in a straight line in front of the caster (except the target) by 2 meters, dealing fire damage equal to 51.3% of Attack Power.\nSecond Stage (No consumption): Can be activated when holding 20 stacks of [Infernal fire]: Powerfully slashes with the greatsword, dealing fire damage equal to 336.1% of Attack Power to all enemy units within a sector of 3 meters in the direction of the nearest enemy unit.\nThird Stage (No consumption): Can be activated when holding 40 stacks of [Infernal fire]: Jumps to the enemy unit with the highest Attack Power and deals fire damage equal to 694.4% of Attack Power to that unit, consuming all stacks of [Infernal fire].",
      template: "After casting ULT, can cast the next stage of the skill within {0} seconds based on the number of [Infernal fire] stacks.\nFirst Stage: Powerfully slashes with the greatsword, dealing fire damage equal to {1} of Attack Power to the nearest enemy unit, and knocks back all enemy units within {2} meters in a straight line in front of the caster (except the target) by 2 meters, dealing fire damage equal to {3} of Attack Power.\nSecond Stage (No consumption): Can be activated when holding {4} stacks of [Infernal fire]: Powerfully slashes with the greatsword, dealing fire damage equal to {6} of Attack Power to all enemy units within a sector of {5} meters in the direction of the nearest enemy unit.\nThird Stage (No consumption): Can be activated when holding {7} stacks of [Infernal fire]: Jumps to the enemy unit with the highest Attack Power and deals fire damage equal to {8} of Attack Power to that unit, consuming all stacks of [Infernal fire].",
      levelValues: [["4", "260%", "5", "26%", "20", "3", "170%", "40", "355%"], ["4", "279.4%", "5", "27.9%", "20", "3", "182.8%", "40", "381.1%"], ["4", "298.9%", "5", "29.9%", "20", "3", "195.6%", "40", "407.2%"], ["4", "318.3%", "5", "31.8%", "20", "3", "208.3%", "40", "433.3%"], ["4", "337.8%", "5", "33.8%", "20", "3", "221.1%", "40", "459.4%"], ["4", "357.2%", "5", "35.7%", "20", "3", "233.9%", "40", "485.6%"], ["4", "376.7%", "5", "37.7%", "20", "3", "246.7%", "40", "511.7%"], ["4", "396.1%", "5", "39.6%", "20", "3", "259.4%", "40", "537.8%"], ["4", "415.6%", "5", "41.6%", "20", "3", "272.2%", "40", "563.9%"], ["4", "435%", "5", "43.5%", "20", "3", "285%", "40", "590%"], ["4", "454.4%", "5", "45.4%", "20", "3", "297.8%", "40", "616.1%"], ["4", "473.9%", "5", "47.4%", "20", "3", "310.6%", "40", "642.2%"], ["4", "493.3%", "5", "49.3%", "20", "3", "323.3%", "40", "668.3%"], ["4", "512.8%", "5", "51.3%", "20", "3", "336.1%", "40", "694.4%"]],
    },
    passive:     {
      name: "Calamity's Verdict",
      description: "Each hit during the skill adds 1 stack of [Infernal fire] to self, up to 50 stacks.\nIf each stage of the ULT hits only 1 enemy unit(s), for every 5 stacks of [Infernal fire], a [Pursue] is triggered against that enemy unit, dealing fire damage equal to 171.2% of Attack Power.",
      template: "Each hit during the skill adds {0} stack of [Infernal fire] to self, up to {1} stacks.\nIf each stage of the ULT hits only {2} enemy unit(s), for every {3} stacks of [Infernal fire], a [Pursue] is triggered against that enemy unit, dealing fire damage equal to {4} of Attack Power.",
      levelValues: [["1", "50", "1", "5", "86%"], ["1", "50", "1", "5", "92.6%"], ["1", "50", "1", "5", "99.1%"], ["1", "50", "1", "5", "105.7%"], ["1", "50", "1", "5", "112.2%"], ["1", "50", "1", "5", "118.8%"], ["1", "50", "1", "5", "125.3%"], ["1", "50", "1", "5", "131.9%"], ["1", "50", "1", "5", "138.4%"], ["1", "50", "1", "5", "145%"], ["1", "50", "1", "5", "151.6%"], ["1", "50", "1", "5", "158.1%"], ["1", "50", "1", "5", "164.7%"], ["1", "50", "1", "5", "171.2%"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "Attack Power increased by 12%.\nAt the start of the battle, your ULT damage increases by 6% for every 500 Attack Power, up to 6 times.",
    requirements: {
      faction: "Kemich",
      element: "Fire",
      alternativeConditions: "Team contains 2 Kemich characters or 2 Fire characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "At the start of the battle, gain 10 stacks of [Infernal Blaze].",
    },
    {
      level: 2,
      effect: "During Sandstorm Vortex Hunt, damage taken is reduced by 31%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "<color=#c90d0d>Blaze</color> damage increased by 35%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All damage dealt by Set ignores 34% of the target's Elemental Resistance. When [Infernal Blaze] is below 40 stacks, damage taken is reduced by 47%.",
    },
  ],
  memoryCard: {
    name: "Sunlit sweetness awaits ",
    image: "Setcard.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Critical Damage increased by 39%.\nWhen the wearer lands a hit with any skill/ULT, Critical Rate increases by 2.6% for 6 seconds (up to 20 stacks).",
      "Critical Damage increased by 45%.\nWhen the wearer lands a hit with any skill/ULT, Critical Rate increases by 3% for 6 seconds (up to 20 stacks).",
      "Critical Damage increased by 52%.\nWhen the wearer lands a hit with any skill/ULT, Critical Rate increases by 3.5% for 6 seconds (up to 20 stacks).",
      "Critical Damage increased by 58%.\nWhen the wearer lands a hit with any skill/ULT, Critical Rate increases by 3.9% for 6 seconds (up to 20 stacks).",
      "Critical Damage increased by 65%.\nWhen the wearer lands a hit with any skill/ULT, Critical Rate increases by 4.3% for 6 seconds (up to 20 stacks).",
    ],
    restriction: "Only effective for Attacker",
  },
  tags: [
    "Damage Reduction",
    "Fire Damage",
  ],
};

export const setSEO = {
  title: `Set - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Set, a SSR Fire Attacker in Zone Nova. Includes skills, awakenings, the Sunlit sweetness awaits  memory card, and optimal build strategies.`,
};

export default setData;