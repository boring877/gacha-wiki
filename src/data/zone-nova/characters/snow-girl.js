// Snow Girl Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const snowGirlData = {
  // Basic Character Information
  name: 'Snow Girl',
  chineseName: '雪女',
  image: 'Snow.png', // Use format: charactername (e.g., 'Snow')
  rarity: 'SR', // SSR, SR, R
  element: 'Ice', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Heikyo Castle', // Heijing Castle (平京城)

  // Base Stats (Level 80)
  stats: {
    hp: "5,000",
    attack: "500",
    defense: "500",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '7,650',
    attack: '837',
    defense: '608',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "DEF +21.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Energy Vial", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "DEF +4.8%",
        unlock: "After E1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 4000,
      },
      {
        node: "N2",
        stat: "ATK +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2000,
      },
      {
        node: "N3",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "Energy Vial", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "DEF +7.2%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Energy Vial", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "DEF +9.6%",
        unlock: "Lv 75",
        materials: [{"name": "Energy Vial", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_1.png"}],
        gold: 128000,
      },
    ],
    levels: [
      {
        level: 2,
        gold: 2000,
        materials: [],
      },
      {
        level: 3,
        gold: 4000,
        materials: [{"name": "Frost Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Frost Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Frost Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Frost Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Frost Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Frost Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Frost Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Frost Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Snow Rabbit Impact",
      cooldown: "2.0s",
      description: "Deals 120% Attack as ice damage to the targeted enemy unit",
      template: "Deals {0} Attack as ice damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Frost Healing",
      cooldown: "5.0s",
      description: "Heals all allied units, restoring 33.9% Attack + 78 HP",
      template: "Heals all allied units, restoring {0} Attack + {1} HP",
      levelValues: [["24.5%", "78"], ["25.2%", "78"], ["25.9%", "78"], ["26.7%", "78"], ["27.4%", "78"], ["28.1%", "78"], ["28.8%", "78"], ["29.6%", "78"], ["30.3%", "78"], ["31%", "155"], ["31.7%", "78"], ["32.4%", "78"], ["33.2%", "78"], ["33.9%", "78"]],
    },
    ultimate:     {
      name: "Frozen Sanctuary",
      energyCost: "3",
      cooldown: "1.0s",
      description: "Heals all allied units, restoring 47.8% Attack + 78 HP",
      template: "Heals all allied units, restoring {0} Attack + {1} HP",
      levelValues: [["29%", "78"], ["30.4%", "78"], ["31.9%", "78"], ["33.3%", "78"], ["34.8%", "78"], ["36.2%", "78"], ["37.7%", "78"], ["39.1%", "78"], ["40.6%", "78"], ["42%", "155"], ["43.4%", "78"], ["44.9%", "78"], ["46.3%", "78"], ["47.8%", "78"]],
    },
    passive:     {
      name: "Frost Blessing",
      description: "ULT healing applies a 5-second continuous healing effect to the target, restoring 5% Yuki-onna's Attack + 16 HP per second",
      template: "ULT healing applies a 5-second continuous healing effect to the target, restoring {0} Yuki-onna's Attack + {1} HP per second",
      levelValues: [["3.7%", "16"], ["3.8%", "16"], ["3.9%", "16"], ["4%", "16"], ["4.1%", "16"], ["4.2%", "16"], ["4.3%", "16"], ["4.4%", "16"], ["4.5%", "16"], ["4.6%", "31"], ["4.7%", "16"], ["4.8%", "16"], ["4.9%", "16"], ["5%", "16"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%, Healing increases by 12.5%",
    requirements: {
      faction: "Heikyo Castle",
      element: "Ice",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Ice characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "After an ULT heals an ally, the target's damage dealt increases by 10% for 10 seconds",
    },
    {
      level: 2,
      effect: "Normal attacks deal additional <color=#1ec1ff>Frost</color> damage equal to 50% of Attack",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "Healing increases by 20%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "Skill healing on allies also triggers the passive's continuous recovery effect",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "The Beauty of Heikyo Castle",
    image: "Snowcard",
    stats: {
      hp: "5,000",
      attack: "500",
      defense: "500",
    },
    effects: [  // awakening levels 1-5
      "Healing increases by 14%, when the healed target's HP is full, their damage increases by 12% for 10 seconds",
      "Healing increases by 18%, when the healed target's HP is full, their damage increases by 15% for 10 seconds",
      "Healing increases by 22%, when the healed target's HP is full, their damage increases by 18% for 10 seconds",
      "Healing increases by 26%, when the healed target's HP is full, their damage increases by 21% for 10 seconds",
      "Healing increases by 30%, when the healed target's HP is full, their damage increases by 24% for 10 seconds",
    ],
    restriction: "Only effective for Healer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Range', 'Healing Damage Increase', 'Continuously Heals', 'AOE Healing'],
};

// SEO data for Snow Girl
export const snowGirlSEO = {
  title: `${snowGirlData.name} (${snowGirlData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${snowGirlData.name}, a ${snowGirlData.rarity} ${snowGirlData.element} ${snowGirlData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export legacy structure for character registry compatibility
export const snowGirl = {
  id: 'snow-girl',
  name: 'Snow Girl',
  chineseName: '雪女',
  rarity: 'SR',
  element: 'Ice',
  role: 'Healer',
  faction: 'Heijing Castle',
  chineseFaction: '平京城',
  maxLevel: 80,

  baseStats: {
    hp: 7850,
    attack: 837,
    defense: 608,
    energyRecovery: 0.25,
    critRate: 0,
    critDamage: 50,
  },

  images: {
    portrait: '/images/characters/Snow.jpg',
    card: '/images/characters/Snowcard.jpg',
  },

  tags: ['Healer', 'Support', 'Heikyo Castle', 'Ice', 'Sustained Healing'],
};

// Export default for easy importing
export default snowGirlData;
