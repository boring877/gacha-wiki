// Hera Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const heraData = {
  // Basic Character Information
  name: 'Hera',
  chineseName: '赫拉',
  image: 'Hera.png', // Use explicit PNG filename
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Attacker', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Otis', // Otis (奥蒂斯)

  // Base Stats (Level 80)
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
    hp: '8,033',
    attack: '1,305',
    defense: '530',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
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
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
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
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Queen's Torment",
      cooldown: "2.0s",
      description: "Deals 120% Attack as chaos damage to the targeted enemy unit",
      template: "Deals {0} Attack as chaos damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Trial and Chastisement",
      cooldown: "8.0s",
      description: "Simultaneously launches eight flying swords, dealing 720% Attack as chaos damage to the targeted enemy unit",
      template: "Simultaneously launches eight flying swords, dealing {0} Attack as chaos damage to the targeted enemy unit",
      levelValues: [["330%"], ["360%"], ["390%"], ["420%"], ["450%"], ["480%"], ["510%"], ["540%"], ["570%"], ["600%"], ["630%"], ["660%"], ["690%"], ["720%"]],
    },
    ultimate:     {
      name: "Despair Strangle",
      energyCost: "6",
      cooldown: "1.0s",
      description: "Summons numerous flying swords to attack the targeted enemy unit, dealing 1440% Attack as chaos damage\nAfter attacking a target with 20 stacks of damage over time, can cast [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Summons more flying swords to attack the targeted enemy unit, dealing 1920% Attack as chaos damage",
      template: "Summons numerous flying swords to attack the targeted enemy unit, dealing {0} Attack as chaos damage\nAfter attacking a target with 20 stacks of damage over time, can cast [Enhanced ULT] within 5 seconds\n[Enhanced ULT]: Summons more flying swords to attack the targeted enemy unit, dealing {1} Attack as chaos damage",
      levelValues: [["660%", "880%"], ["720%", "960%"], ["780%", "1040%"], ["840%", "1120%"], ["900%", "1200%"], ["960%", "1280%"], ["1020%", "1360%"], ["1080%", "1440%"], ["1140%", "1520%"], ["1200%", "1600%"], ["1260%", "1680%"], ["1320%", "1760%"], ["1380%", "1840%"], ["1440%", "1920%"]],
    },
    passive:     {
      name: "Deity's Authority",
      description: "Every 5 flying sword hits, the next attack can apply [Void Erosion]\n[Void Erosion]: Deals 36% Attack as chaos damage every 3 seconds, up to 10 stacks, for 10 seconds",
      template: "Every 5 flying sword hits, the next attack can apply [Void Erosion]\n[Void Erosion]: Deals {0} Attack as chaos damage every 3 seconds, up to 10 stacks, for 10 seconds",
      levelValues: [["16.5%"], ["18%"], ["19.5%"], ["21%"], ["22.5%"], ["24%"], ["25.5%"], ["27%"], ["28.5%"], ["30%"], ["31.5%"], ["33%"], ["34.5%"], ["36%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%\nAt battle start, every 500 Attack increases self Penetration by 3%, up to 6 times",
    requirements: {
      faction: "Otis",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Otis characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Attack increases by 20%",
    },
    {
      level: 2,
      effect: "Required attack count to apply [Void Erosion] decreases by 1",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "<color=#9754d5>Chaos</color> damage increases by 30%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "ULT ignores 20% of the target's Chaos resistance",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Black-Faced Fool",
    image: "Heracard",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Attack increases by 24%, when attacking targets affected by Damage Over Time, damage increases by 24%",
      "Attack increases by 28%, when attacking targets affected by Damage Over Time, damage increases by 28%",
      "Attack increases by 32%, when attacking targets affected by Damage Over Time, damage increases by 32%",
      "Attack increases by 36%, when attacking targets affected by Damage Over Time, damage increases by 36%",
      "Attack increases by 40%, when attacking targets affected by Damage Over Time, damage increases by 40%",
    ],
    restriction: "Only effective for Attacker",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'DOT', 'Enhanced Ultimate'],
};

// SEO data for Hera
export const heraSEO = {
  title: `${heraData.name} (${heraData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${heraData.name}, a ${heraData.rarity} ${heraData.element} ${heraData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const hera = {
  id: 'hera',
  name: 'Hera',
  chineseName: '赫拉',
  rarity: 'SSR',
  element: 'Chaos',
  role: 'DPS',
  faction: 'Otis',
  chineseFaction: '奥蒂斯',
  maxLevel: 80,

  baseStats: {
    hp: 8033,
    attack: 1461,
    defense: 530,
    energyRecovery: 0.25,
    critRate: 0,
    critDamage: 50,
  },

  images: {
    portrait: '/images/characters/Hera.jpg',
    card: '/images/characters/Heracard.jpg',
  },

  tags: ['DPS', 'Chaos', 'Otis', 'DOT', 'Enhanced Ultimate'],
};

// Export default for easy importing
export default heraData;
