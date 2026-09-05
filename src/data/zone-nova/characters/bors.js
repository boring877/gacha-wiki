// Bors - Zone Nova Character Data
// SSR Supporter from Avalon faction with Fire element
// Generated from live master data; skill/passive values at max awakened level 14
export const borsData = {
  name: "Bors",
  image: "Bors.png",
  rarity: 'SSR',
  element: 'Fire',
  class: 'Supporter',
  role: "Supporter",
  faction: 'Avalon',
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
    hp: '10,524',
    attack: '600',
    defense: '999',
  },
  talentTree: {
    totals: ["HP +75.4%", "DEF +66.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "DEF +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "DEF +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "DEF +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
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
        stat: "HP +3.2%",
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
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
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
        stat: "DEF +9.6%",
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
        materials: [{"name": "Blaze Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Frenzied Strike",
      cooldown: "2.0s",
      description: "Deals 120% attack damage as fiery damage to the designated enemy unit.",
      template: "Deals {0} attack damage as fiery damage to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "fanaticism",
      cooldown: "6.0s",
      description: "Grants all allies [Frenzy], granting them immunity to knockback for 10 seconds. The two allied units with the highest attack power gain [Rage], increasing attack power by 61.1% and reducing all skill cooldowns by 5% for 10 seconds, stacking up to 4 times. The two allied units with the highest defense gain [Berserk Armor], increasing defense by 58.9% and all resistances by 3% for 10 seconds, stacking up to 4 times.",
      template: "Grants all allies [Frenzy], granting them immunity to knockback for 10 seconds. The two allied units with the highest attack power gain [Rage], increasing attack power by {0} and reducing all skill cooldowns by {1} for 10 seconds, stacking up to 4 times. The two allied units with the highest defense gain [Berserk Armor], increasing defense by {2} and all resistances by {3} for 10 seconds, stacking up to 4 times.",
      levelValues: [["25%", "5%", "30%", "3%"], ["27.8%", "5%", "32.2%", "3%"], ["30.6%", "5%", "34.4%", "3%"], ["33.3%", "5%", "36.7%", "3%"], ["36.1%", "5%", "38.9%", "3%"], ["38.9%", "5%", "41.1%", "3%"], ["41.7%", "5%", "43.3%", "3%"], ["44.4%", "5%", "45.6%", "3%"], ["47.2%", "5%", "47.8%", "3%"], ["50%", "5%", "50%", "3%"], ["52.8%", "5%", "52.2%", "3%"], ["55.6%", "5%", "54.4%", "3%"], ["58.3%", "5%", "56.7%", "3%"], ["61.1%", "5%", "58.9%", "3%"]],
    },
    ultimate:     {
      name: "Heart of Fury",
      energyCost: "3",
      cooldown: "2.0s",
      description: "A massive impact strikes the center of the battlefield, dealing 588.9% attack power as fiery damage to all enemy units and granting all allied units the [Frenzy] buff, increasing attack power by 171.1% and damage dealt by 73.3% for 10 seconds. The two allied units with the highest defense gain the [Berserk Armor] buff, increasing defense by 158.9% and maximum health by 97.8% for 10 seconds.",
      template: "A massive impact strikes the center of the battlefield, dealing {0} attack power as fiery damage to all enemy units and granting all allied units the [Frenzy] buff, increasing attack power by {1} and damage dealt by {2} for 10 seconds. The two allied units with the highest defense gain the [Berserk Armor] buff, increasing defense by {3} and maximum health by {4} for 10 seconds.",
      levelValues: [["300%", "70%", "30%", "65%", "40%"], ["322.2%", "77.8%", "33.3%", "72.2%", "44.4%"], ["344.4%", "85.6%", "36.7%", "79.4%", "48.9%"], ["366.7%", "93.3%", "40%", "86.7%", "53.3%"], ["388.9%", "101.1%", "43.3%", "93.9%", "57.8%"], ["411.1%", "108.9%", "46.7%", "101.1%", "62.2%"], ["433.3%", "116.7%", "50%", "108.3%", "66.7%"], ["455.6%", "124.4%", "53.3%", "115.6%", "71.1%"], ["477.8%", "132.2%", "56.7%", "122.8%", "75.6%"], ["500%", "140%", "60%", "130%", "80%"], ["522.2%", "147.8%", "63.3%", "137.2%", "84.4%"], ["544.4%", "155.6%", "66.7%", "144.4%", "88.9%"], ["566.7%", "163.3%", "70%", "151.7%", "93.3%"], ["588.9%", "171.1%", "73.3%", "158.9%", "97.8%"]],
    },
    passive:     {
      name: "Blood boiling",
      description: "Upon entering combat, immediately gain 2 energy points. At the start of combat, every 3 seconds, all allies gain 1 stack of [Berserk Blood]. Additionally, every time an allied unit casts a special attack, all allies gain 1 stack of [Berserk Blood]. [Berserk Blood]: Increases critical hit damage by 3.2%, healing by 18.3%, healing received by 18.3%, and energy regeneration efficiency by 4.8%, lasting 10 seconds. Berserk Blood can have a maximum of 10 stacks. If an allied unit reaches 10 stacks of [Berserk Blood] but is not in [Berserk Boiling] state, all of that unit's [Berserk Blood] will be consumed, entering the [Berserk Boiling] state. [Berserk Boiling]: Increases critical hit damage by 20%, healing by 10%, healing received by 10%, and energy regeneration efficiency by 30%. Restores 2% of the unit's maximum health per second, lasting 10 seconds.",
      template: "Upon entering combat, immediately gain 2 energy points. At the start of combat, every 3 seconds, all allies gain 1 stack of [Berserk Blood]. Additionally, every time an allied unit casts a special attack, all allies gain 1 stack of [Berserk Blood]. [Berserk Blood]: Increases critical hit damage by 3.2%, healing by 18.3%, healing received by 18.3%, and energy regeneration efficiency by 4.8%, lasting 10 seconds. Berserk Blood can have a maximum of 10 stacks. If an allied unit reaches 10 stacks of [Berserk Blood] but is not in [Berserk Boiling] state, all of that unit's [Berserk Blood] will be consumed, entering the [Berserk Boiling] state. [Berserk Boiling]: Increases critical hit damage by 20%, healing by 10%, healing received by 10%, and energy regeneration efficiency by 30%. Restores 2% of the unit's maximum health per second, lasting 10 seconds.",
      levelValues: [["1%", "7.5%", "7.5%", "2%"], ["1.2%", "8.3%", "8.3%", "2.2%"], ["1.3%", "9.1%", "9.1%", "2.4%"], ["1.5%", "10%", "10%", "2.6%"], ["1.6%", "10.8%", "10.8%", "2.8%"], ["1.8%", "11.6%", "11.6%", "3%"], ["2%", "12.5%", "12.5%", "3.2%"], ["2.2%", "13.3%", "13.3%", "3.5%"], ["2.3%", "14.1%", "14.1%", "3.7%"], ["2.5%", "15%", "15%", "4%"], ["2.6%", "15.8%", "15.8%", "4.2%"], ["2.8%", "16.6%", "16.6%", "4.4%"], ["3%", "17.5%", "17.5%", "4.6%"], ["3.2%", "18.3%", "18.3%", "4.8%"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "At the start of battle, the entire team's defense increases by 15%, health increases by 15%, and healing received increases by 25%. For every 750 attack power, the entire team's attack power and defense increase by 8%, and health increases by 5%, up to a maximum of 6 times.",
    requirements: {
      faction: "Avalon",
      element: "Fire",
      alternativeConditions: "Team contains 2 Avalon characters or 2 Fire characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "Upon entering the arena, Bors's first ultimate attack requires no energy. Upon entering, all allies gain the Bloodlust Master buff, restoring 5% of each unit's maximum HP per second for 20 seconds.",
    },
    {
      level: 2,
      effect: "The character's skills [Rage] and [Rage Armor] have a maximum stack of 6. Upon entering the arena, all allies immediately gain 3 stacks of [Bloodlust].",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Upon entering battle, immediately gain 2 energy points. All allies gain [Berserk], which instantly restores 75% of maximum health when HP drops to 35% or below. This effect can only be triggered once per battle.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All allies gain 20% increased all resistances. When an ally first gains [Blood Frenzy], all resistances are increased by an additional 20% for 10 seconds.",
    },
  ],
  memoryCard: {
    name: "Unholy Alliance",
    image: "Borscard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Increases the attack power, defense, and HP of all allies by 16%. Each time the wearer uses a skill, the maximum HP of all allies increases by 4%, and the cooldown time of all skills decreases by 1%, up to a maximum of 5 stacks.",
      "Increases the attack power, defense, and HP of all allies by 20%. Each time the wearer uses a skill, the maximum HP of all allies increases by 6%, and the cooldown time of all skills decreases by 2%, stacking up to 5 times.",
      "Our entire party's attack power, defense power, and HP are increased by 24%. Each time the wearer uses a skill, our entire party's maximum HP increases by 8% and all skill cooldowns decrease by 3%, stacking up to 5 times.",
      "Our entire party's attack power, defense power, and HP are increased by 28%. Each time the wearer uses a skill, our entire party's maximum HP is increased by 10%, and all skill cooldowns are reduced by 4%, up to a maximum of 5 stacks.",
      "Our entire party's attack power, defense power, and HP are increased by 32%. Each time the wearer uses a skill, our entire party's maximum HP increases by 14% and all skill cooldowns decrease by 5%, stacking up to 5 times.",
    ],
    restriction: "Only effective for Supporter",
  },
  tags: [
    "Healing",
    "Crit",
    "Energy",
    "DEF",
    "Buff",
    "Fire Damage",
  ],
};

export const borsSEO = {
  title: `Bors - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Bors, a SSR Fire Supporter in Zone Nova. Includes skills, awakenings, the Unholy Alliance memory card, and optimal build strategies.`,
};

export default borsData;