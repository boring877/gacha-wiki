// Veronica - Zone Nova Character Data
// SSR Tank from Safir faction with Holy element
// Generated from live master data; skill/passive values at max awakened level 14
export const veronicaData = {
  name: "Veronica",
  image: "Veronica.png",
  rarity: 'SSR',
  element: 'Holy',
  class: 'Tank',
  role: "Tank",
  faction: 'Safir',
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
    defense: '1,232',
  },
  talentTree: {
    totals: ["DEF +78.6%", "HP +67.4%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "DEF +10%, HP +10%",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "DEF +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "DEF +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
        unlock: "After E1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "HP +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "DEF +9.6%",
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
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Holy Shield",
      cooldown: "2.0s",
      description: "Deals holy damage equal to 120% of the user's own defense to the designated enemy unit.",
      template: "Deals holy damage equal to {0} of the user's own defense to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Shield of Light",
      cooldown: "5.0s",
      description: "All allies gain a shield equal to Veronica 158.3% defense, and are also granted the [Shield of Light] buff, increasing healing received by 5%, critical hit resistance by 5%, and defense by 10%. Maximum 5 stacks, lasts 10 seconds.",
      template: "All allies gain a shield equal to Veronica {0} defense, and are also granted the [Shield of Light] buff, increasing healing received by 5%, critical hit resistance by 5%, and defense by 10%. Maximum 5 stacks, lasts 10 seconds.",
      levelValues: [["50%"], ["58.3%"], ["66.7%"], ["75%"], ["83.3%"], ["91.7%"], ["100%"], ["108.3%"], ["116.7%"], ["125%"], ["133.3%"], ["141.7%"], ["150%"], ["158.3%"]],
    },
    ultimate:     {
      name: "Divine Body",
      energyCost: "2",
      cooldown: "4.0s",
      description: "All allies gain [Divine Body], reducing damage taken by 58.9%, increasing healing received and shield gain by 61.1%, lasting 8 seconds. During this effect, they gain a shield every second equal to Veronica's defense 183.3%.",
      template: "All allies gain [Divine Body], reducing damage taken by {0}, increasing healing received and shield gain by {1}, lasting 8 seconds. During this effect, they gain a shield every second equal to Veronica's defense {2}.",
      levelValues: [["30%", "25%", "75%"], ["32.2%", "27.8%", "83.3%"], ["34.4%", "30.6%", "91.7%"], ["36.7%", "33.3%", "100%"], ["38.9%", "36.1%", "108.3%"], ["41.1%", "38.9%", "116.7%"], ["43.3%", "41.7%", "125%"], ["45.6%", "44.4%", "133.3%"], ["47.8%", "47.2%", "141.7%"], ["50%", "50%", "150%"], ["52.2%", "52.8%", "158.3%"], ["54.4%", "55.6%", "166.7%"], ["56.7%", "58.3%", "175%"], ["58.9%", "61.1%", "183.3%"]],
    },
    passive:     {
      name: "bright",
      description: "Each skill use grants 1 stack of [Light], increasing the user's defense by 14.7%, up to a maximum of 8 stacks, lasting until the end of the battle. If any allied unit has a shield when attacked, that unit's defense against that attack is increased by 50%.",
      template: "Each skill use grants 1 stack of [Light], increasing the user's defense by {0}, up to a maximum of 8 stacks, lasting until the end of the battle. If any allied unit has a shield when attacked, that unit's defense against that attack is increased by 50%.",
      levelValues: [["7.5%"], ["8.1%"], ["8.6%"], ["9.2%"], ["9.7%"], ["10.3%"], ["10.8%"], ["11.4%"], ["11.9%"], ["12.5%"], ["13.1%"], ["13.6%"], ["14.2%"], ["14.7%"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "Defense increased by 15%, health increased by 15%, and healing received increased by 25%. At the start of battle, every 500 defense reduces damage taken by the entire team by 2%, up to a maximum of 10 times. At the start of battle, every 500 defense increases healing received by the entire team by 2%, up to a maximum of 10 times.",
    requirements: {
      faction: "Safir",
      element: "Holy",
      alternativeConditions: "Team contains 2 Safir characters or 2 Holy characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "Defense increased by 25%, and the first ultimate skill used upon entering the battlefield does not consume energy. Gain 4 stacks of [Light] upon entering the battlefield.",
    },
    {
      level: 2,
      effect: "Increases maximum HP by 25% and defense by 40%. Upon entering the arena, all allies gain the Deity's Love buff. When receiving a fatal wound, all allies gain the Tenacity effect for 3 seconds. The Deity's Love effect can only be triggered once. Tenacity: HP cannot fall below 1 point.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Defense increased by 50%, health increased by 20%. For the first 5 seconds upon entering the battlefield, critical hit resistance is increased by 100%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Our entire team's all resistances increased by 15%.",
    },
  ],
  memoryCard: {
    name: "Under the Holy Armor",
    image: "Veronicacard.png",
    stats: {
      hp: "6,600",
      attack: "480",
      defense: "690",
    },
    effects: [  // awakening levels 1-5
      "Our HP increases by 8%, and self defense increases by 44%. After each skill use, all allies gain [Radiant Protection], reducing damage taken by 2% and increasing critical hit resistance by 1%, stacking up to 5 times, lasting 10 seconds.",
      "Our HP increases by 12%, and self defense increases by 48%. After each skill use, all allies gain [Radiant Protection], reducing damage taken by 3% and increasing critical hit resistance by 2%, stacking up to 5 times, lasting 10 seconds.",
      "Our HP increases by 16%, and self defense increases by 52%. After each skill use, all allies gain [Radiant Protection], reducing damage taken by 4% and increasing critical hit resistance by 3%, stacking up to 5 times, lasting 10 seconds.",
      "Our HP increases by 20%, and self defense increases by 56%. After each skill use, all allies gain [Radiant Protection], reducing damage taken by 5% and increasing critical hit resistance by 4%, stacking up to 5 times, lasting 10 seconds.",
      "Our HP increases by 25%, and self defense increases by 70%. After each skill use, all allies gain [Radiant Protection], reducing damage taken by 6% and increasing critical hit resistance by 5%, stacking up to 5 times, lasting 10 seconds.",
    ]], reducing damage taken by 6% and increasing critical hit resistance by 5%, stacking up to 5 times, lasting 10 seconds.",
    ],
    restriction: "Only effective for Tank",
  },
  tags: [
    "Shield",
    "Healing",
    "Crit",
    "Energy",
    "Damage Reduction",
    "DEF",
    "Holy Damage",
  ],
};

export const veronicaSEO = {
  title: `Veronica - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Veronica, a SSR Holy Tank in Zone Nova. Includes skills, awakenings, the Under the Holy Armor memory card, and optimal build strategies.`,
};

export default veronicaData;