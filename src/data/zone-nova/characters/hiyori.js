// Hiyori Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const hiyoriData = {
  gameId: 4030,
  // Basic Character Information
  name: 'Hiyori',
  chineseName: '',
  image: 'Hiyori.png',
  rarity: 'SSR',
  element: 'Chaos',
  class: 'Destroyer',
  role: 'DPS',
  faction: 'Monochrome Realm',

  // Base Stats (Level 80)
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '57%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '5,040',
    attack: '1,293',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +65.8%", "Crit Rate +57%", "DEF Pen +6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "Crit Rate +10%, ATK +10%",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "Crit Rate +15%, ATK +15%",
        materials: [{"name": "Energy Vial", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "Crit Rate +20%, ATK +20%",
        materials: [{"name": "Energy Vial", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Crit Rate +2.4%",
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
        stat: "DEF Pen +2.4%",
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
        stat: "Crit Rate +4.8%",
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
        stat: "DEF Pen +3.6%",
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
        stat: "Crit Rate +4.8%",
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
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Oops, a Stain",
      cooldown: "2.0s",
      description: "Deal chaos DMG equal to 120% of ATK to a designated enemy target.",
      template: "Deal chaos DMG equal to {0} of ATK to a designated enemy target.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Corridor Sweep",
      cooldown: "2.0s",
      description: "Locks onto the target with the lowest HP percentage on the field and launches a straight-line piercing attack, dealing chaos DMG equal to 218.9% of ATK to all enemy targets in its path.",
      template: "Locks onto the target with the lowest HP percentage on the field and launches a straight-line piercing attack, dealing chaos DMG equal to {0} of ATK to all enemy targets in its path.",
      levelValues: [["112%"], ["120.2%"], ["128.4%"], ["136.7%"], ["144.9%"], ["153.1%"], ["161.3%"], ["169.6%"], ["177.8%"], ["186%"], ["194.2%"], ["202.4%"], ["210.7%"], ["218.9%"]],
    },
    ultimate:     {
      name: "Operation: Dustless",
      energyCost: "5",
      cooldown: "5.0s",
      description: "Instantly dashes in front of the target and fires a vacuum compression shot at close range to knock the enemy back, while using the recoil to quickly perform a backflip.\nThe vacuum compression shot explodes immediately upon landing, destroying all of the target's Shields and dealing chaos DMG equal to 1060% of ATK.\nDuring the Ultimate, own CRIT Rate is additionally increased by 114%.",
      template: "Instantly dashes in front of the target and fires a vacuum compression shot at close range to knock the enemy back, while using the recoil to quickly perform a backflip.\nThe vacuum compression shot explodes immediately upon landing, destroying all of the target's Shields and dealing chaos DMG equal to {0} of ATK.\nDuring the Ultimate, own CRIT Rate is additionally increased by {1}.",
      levelValues: [["540%", "114%"], ["580%", "114%"], ["620%", "114%"], ["660%", "114%"], ["700%", "114%"], ["740%", "114%"], ["780%", "114%"], ["820%", "114%"], ["860%", "114%"], ["900%", "114%"], ["940%", "114%"], ["980%", "114%"], ["1020%", "114%"], ["1060%", "114%"]],
    },
    passive:     {
      name: "Explosive Cleanup",
      description: "All DMG dealt by Hiyori to enemy targets with a Shield is additionally increased by 26.5%.\n[Shield Burst]: When Hiyori's attack successfully breaks an enemy's Shield, it immediately triggers a powerful area explosion around the target, dealing chaos DMG equal to 680.7% of ATK to enemies within the area.",
      template: "All DMG dealt by Hiyori to enemy targets with a Shield is additionally increased by {0}.\n[Shield Burst]: When Hiyori's attack successfully breaks an enemy's Shield, it immediately triggers a powerful area explosion around the target, dealing chaos DMG equal to {1} of ATK to enemies within the area.",
      levelValues: [["13.5%", "347%"], ["14.5%", "372.7%"], ["15.5%", "398.3%"], ["16.5%", "424%"], ["17.5%", "449.7%"], ["18.5%", "475.3%"], ["19.5%", "501%"], ["20.5%", "526.7%"], ["21.5%", "552.3%"], ["22.5%", "578%"], ["23.5%", "603.7%"], ["24.5%", "629.3%"], ["25.5%", "655%"], ["26.5%", "680.7%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "ATK increases by 10%.\nAt the start of battle, for every 500 ATK, own Ultimate DMG increases by 5%, up to 6 times.",
    requirements: {
      faction: "Monochrome Realm",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Monochrome Realm characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "When using Ultimate, ignore 74% of the target's DEF.",
    },
    {
      level: 2,
      effect: "DMG dealt to enemies with current HP below 15% is increased by 70%.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "ATK +50%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "[Shield Burst] <color=#9754d5>Chaos</color> DMG multiplier is increased by 50%.\nAdditionally, all attacks ignore an extra 40% of the target's Chaos Resistance.",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "The maid's bath",
    image: "Hiyoricard.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "The wearer's CRIT Rate increases by 12%.\nWhen the wearer attacks an enemy target with a Shield, they gain the [Descale] state for 8s.\nWhile in the [Descale] state, CRIT DMG increases by 12%, and when using an Ultimate on an enemy target without a Shield, Ultimate DMG increases by an additional 36%.",
      "The wearer's CRIT Rate increases by 14%.\nWhen the wearer attacks an enemy target with a Shield, they gain the [Descale] state for 8s.\nWhile in the [Descale] state, CRIT DMG increases by 14%, and when using an Ultimate on an enemy target without a Shield, Ultimate DMG increases by an additional 42%.",
      "The wearer's CRIT Rate increases by 16%.\nWhen the wearer attacks an enemy target with a Shield, they gain the [Descale] state for 8s.\nWhile in the [Descale] state, CRIT DMG increases by 16%, and when using an Ultimate on an enemy target without a Shield, Ultimate DMG increases by an additional 48%.",
      "The wearer's CRIT Rate increases by 18%.\nWhen the wearer attacks an enemy target with a Shield, they gain the [Descale] state for 8s.\nWhile in the [Descale] state, CRIT DMG increases by 18%, and when using an Ultimate on an enemy target without a Shield, Ultimate DMG increases by an additional 54%.",
      "The wearer's CRIT Rate increases by 20%.\nWhen the wearer attacks an enemy target with a Shield, they gain the [Descale] state for 8s.\nWhile in the [Descale] state, CRIT DMG increases by 20%, and when using an Ultimate on an enemy target without a Shield, Ultimate DMG increases by an additional 60%.",
    ]] state for 8s.",
      "While in the [Descale] state, CRIT DMG increases by 20%, and when using an Ultimate on an enemy target without a Shield, Ultimate DMG increases by an additional 60%.",
    ],
    restriction: "Only effective for Destroyer",
  },

  tags: ['Ranged', 'Shield Destroy', 'Chaos DMG', 'Knockback', 'Limited'],
};

// SEO data for Hiyori
export const hiyoriSEO = {
  title: `${hiyoriData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${hiyoriData.name}, an SSR ${hiyoriData.element} ${hiyoriData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const hiyori = {
  id: 'hiyori',
  name: 'Hiyori',
  rarity: 'SSR',
  element: 'Chaos',
  role: 'DPS',
  faction: 'Monochrome Realm',
  maxLevel: 80,

  baseStats: {
    hp: 5040,
    attack: 1683,
    defense: 474,
    energyRecovery: 0.25,
    critRate: 57,
    critDamage: 50,
  },

  tags: ['DPS', 'Chaos', 'Monochrome Realm', 'Ranged', 'Shield Destroy', 'Limited'],
};

// Export default for easy importing
export default hiyoriData;
