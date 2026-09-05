// Medusa - Zone Nova Character Data
// SSR Healer from Otis faction with Wind element
// Generated from live master data; skill/passive values at max awakened level 14
export const medusaData = {
  name: "Medusa",
  image: "Medusa.png",
  rarity: 'SSR',
  element: 'Wind',
  class: 'Healer',
  role: "Healer",
  faction: 'Otis',
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
        materials: [{"name": "Storm Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Storm Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Storm Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Wind_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Precision shooting",
      cooldown: "2.0s",
      description: "Deals 120% attack power wind damage to the designated enemy unit. When Medusa enters the [Stone Princess] form, her normal attacks will deal 73.3% ​​attack power wind damage to the enemy unit, and also inflict [Serpent's Gaze], increasing the cooldown of all skills by 3.5% for 10 seconds, up to 10 stacks.",
      template: "Deals {0} attack power wind damage to the designated enemy unit. When Medusa enters the [Stone Princess] form, her normal attacks will deal {1} ​​attack power wind damage to the enemy unit, and also inflict [Serpent's Gaze], increasing the cooldown of all skills by 3.5% for 10 seconds, up to 10 stacks.",
      levelValues: [["55%", "30%"], ["60%", "33.3%"], ["65%", "36.7%"], ["70%", "40%"], ["75%", "43.3%"], ["80%", "46.7%"], ["85%", "50%"], ["90%", "53.3%"], ["95%", "56.7%"], ["100%", "60%"], ["105%", "63.3%"], ["110%", "66.7%"], ["115%", "70%"], ["120%", "73.3%"]],
    },
    auto:     {
      name: "Azure Mirror",
      cooldown: "11.0s",
      description: "Unleash [Azure Mirror] for 8 seconds. Each second, all allies recover 43.9% + 350 of Medusa's attack power as HP. Each time this skill is used, all allies gain 1 stack of [Rock Scale], up to a maximum of 5 stacks. [Rock Scale]: Increases defense by 15% and reduces damage taken by 10%.",
      template: "Unleash [Azure Mirror] for 8 seconds. Each second, all allies recover {0} + {1} of Medusa's attack power as HP. Each time this skill is used, all allies gain 1 stack of [Rock Scale], up to a maximum of 5 stacks. [Rock Scale]: Increases defense by 15% and reduces damage taken by 10%.",
      levelValues: [["15%", "350"], ["17.2%", "350"], ["19.4%", "350"], ["21.7%", "350"], ["23.9%", "350"], ["26.1%", "350"], ["28.3%", "350"], ["30.6%", "350"], ["32.8%", "350"], ["35%", "450"], ["37.2%", "350"], ["39.4%", "350"], ["41.7%", "350"], ["43.9%", "350"]],
    },
    ultimate:     {
      name: "Medusa's Kiss",
      energyCost: "3",
      cooldown: "5.0s",
      description: "Medusa enters [Stone Princess] form for 5 seconds. Her normal attacks are enhanced, and all allies recover 5% of their own HP per second for 5 seconds, gaining a shield equal to 30% of their own HP. Simultaneously, all allies gain [Medusa's Kiss], up to 1 stack. [Medusa's Kiss]: While active, healing received is increased by 73.3%. When attacked, if HP is below 50%, immediately recovers Medusa's attack power 733.3% + 1800 HP. Triggering this effect consumes [Medusa's Kiss].",
      template: "Medusa enters [Stone Princess] form for 5 seconds. Her normal attacks are enhanced, and all allies recover 5% of their own HP per second for 5 seconds, gaining a shield equal to 30% of their own HP. Simultaneously, all allies gain [Medusa's Kiss], up to 1 stack. [Medusa's Kiss]: While active, healing received is increased by {0}. When attacked, if HP is below 50%, immediately recovers Medusa's attack power {1} + {2} HP. Triggering this effect consumes [Medusa's Kiss].",
      levelValues: [["30%", "300%", "1800"], ["33.3%", "333.3%", "1800"], ["36.7%", "366.7%", "1800"], ["40%", "400%", "1800"], ["43.3%", "433.3%", "1800"], ["46.7%", "466.7%", "1800"], ["50%", "500%", "1800"], ["53.3%", "533.3%", "1800"], ["56.7%", "566.7%", "1800"], ["60%", "600%", "3600"], ["63.3%", "633.3%", "1800"], ["66.7%", "666.7%", "1800"], ["70%", "700%", "1800"], ["73.3%", "733.3%", "1800"]],
    },
    passive:     {
      name: "Resurrect, my love.",
      description: "At the start of battle, all allies gain a maximum HP of 24.4% and a shield equal to 30% of their own HP, and are granted 1 stack of the [Resurrection Coffin] effect. [Resurrection Coffin]: When near death, the character is resurrected with 150% of their maximum HP and gains [Tenacity] for 5 seconds. [Resurrection Coffin] takes effect once per battle. [Tenacity]: HP cannot fall below 1 point.",
      template: "At the start of battle, all allies gain a maximum HP of {0} and a shield equal to 30% of their own HP, and are granted 1 stack of the [Resurrection Coffin] effect. [Resurrection Coffin]: When near death, the character is resurrected with 150% of their maximum HP and gains [Tenacity] for 5 seconds. [Resurrection Coffin] takes effect once per battle. [Tenacity]: HP cannot fall below 1 point.",
      levelValues: [["10%"], ["11.1%"], ["12.2%"], ["13.3%"], ["14.4%"], ["15.6%"], ["16.7%"], ["17.8%"], ["18.9%"], ["20%"], ["21.1%"], ["22.2%"], ["23.3%"], ["24.4%"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "At the start of battle, the entire team's attack increases by 20%, health increases by 20%, and healing received increases by 25%. Medusa's healing is increased by 30%. At the start of battle, for every 500 attack power, individual healing increases by 10%, up to a maximum of 7 times. At the start of battle, for every 500 attack power, the entire team's damage increase increases by 5%, up to a maximum of 7 times.",
    requirements: {
      faction: "Otis",
      element: "Wind",
      alternativeConditions: "Team contains 2 Otis characters or 2 Wind characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "The first ultimate attack after entering the arena does not consume energy, and all allies gain 2 stacks of [Rock Scale] upon entering the arena.",
    },
    {
      level: 2,
      effect: "Upon entering the arena, all allies' maximum HP increases by 30%, defense increases by 40%, and the maximum number of stacks of the enhanced ultimate skill [Medusa's Kiss] increases from 1 to 2.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Attack power increased by 45%, healing received by all allies increased by 30%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "All allies gain 10% increased resistance. Medusa's passive effect, which grants all allies 1 stack of [Resurrection Coffin] at the start of battle, is increased to 2 stacks, and the [Resurrection Coffin] effect is enhanced. [Resurrection Coffin Enhanced Version]: When near death, the user revives with 150% of their maximum HP and gains [Tenacity] for 8 seconds. [Resurrection Coffin] activates twice per battle.",
    },
  ],
  memoryCard: {
    name: "Serpentine Frenzy ",
    image: "Medusacard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "The wearer's attack power is increased by 20%, and the defense and health of allied units are increased by 20%. Upon entering the battlefield, all allies are granted the [Geo Boundary] buff every 3 seconds, which decreases by 1% when damaged, up to a maximum of 15 stacks.",
      "The wearer's attack power is increased by 23%, and the defense and health of allied units are increased by 24%. Upon entering the battlefield, all allies are granted the [Geo Boundary] buff every 3 seconds, which is reduced by 2% when taking damage, up to a maximum of 15 stacks.",
      "The wearer's attack power is increased by 26.5%, and the defense and health of allied units are increased by 28%. Upon entering the battlefield, the wearer is granted the [Geo Boundary] buff every 3 seconds, which is reduced by 3% when taking damage, up to a maximum of 15 stacks.",
      "The wearer's attack power is increased by 30%, and the defense and health of allied units are increased by 32%. Upon entering the battlefield, all allies are granted the [Geo Boundary] buff every 3 seconds, which is reduced by 4% when taking damage, up to a maximum of 15 stacks.",
      "The wearer's attack power is increased by 33.5%, and the defense and health of allied units are increased by 40%. Upon entering the battlefield, the wearer is granted the [Geo Boundary] buff every 3 seconds, which is reduced by 5% when taking damage, up to a maximum of 15 stacks.",
    ]] buff every 3 seconds, which is reduced by 5% when taking damage, up to a maximum of 15 stacks.",
    ],
    restriction: "Only effective for Healer",
  },
  tags: [
    "Shield",
    "Healing",
    "Energy",
    "Damage Reduction",
    "DEF",
    "Wind Damage",
  ],
};

export const medusaSEO = {
  title: `Medusa - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Medusa, a SSR Wind Healer in Zone Nova. Includes skills, awakenings, the Serpentine Frenzy  memory card, and optimal build strategies.`,
};

export default medusaData;