// Mordred Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const mordredData = {
  // Basic Character Information
  name: 'Mordred',
  image: 'Mordred.png',
  rarity: 'SR',
  element: 'Fire',
  class: 'Warrior', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'DPS', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Avalon',

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
    hp: '7,970',
    attack: '837',
    defense: '560',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +59.4%", "DEF +12%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
        gold: 4000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Scarab Stone", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 16000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 128000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "HP +3.2%",
        unlock: "After E1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 8000,
      },
      {
        node: "N4",
        stat: "DEF +4.8%",
        unlock: "After N1",
        materials: [{"name": "Scarab Stone", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 8000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 2, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 16000,
      },
      {
        node: "N6",
        stat: "DEF +7.2%",
        unlock: "After N2",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 128000,
      },
      {
        node: "N7",
        stat: "HP +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 36000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Scarab Stone", "amount": 4, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 36000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
        gold: 128000,
      },
      {
        node: "N10",
        stat: "HP +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Scarab Stone", "amount": 8, "icon": "Icon_Talent_Rankup_Rare_4.png"}],
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
        materials: [{"name": "Blaze Aether", "amount": 2, "icon": "Icon_Talent_Rankup_Fire_1.png"}],
      },
      {
        level: 4,
        gold: 8000,
        materials: [{"name": "Blaze Aetherstone", "amount": 2, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 5,
        gold: 16000,
        materials: [{"name": "Blaze Aetherstone", "amount": 4, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 6,
        gold: 24000,
        materials: [{"name": "Blaze Aetherstone", "amount": 6, "icon": "Icon_Talent_Rankup_Fire_2.png"}],
      },
      {
        level: 7,
        gold: 36000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 2, "icon": "Icon_Talent_Rankup_Fire_3.png"}],
      },
      {
        level: 8,
        gold: 64000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 4, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}],
      },
      {
        level: 9,
        gold: 128000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 6, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 240000,
        materials: [{"name": "Blaze Aether Lany.", "amount": 11, "icon": "Icon_Talent_Rankup_Fire_3.png"}, {"name": "Tech Core", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_1.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Blade of the Trickster",
      cooldown: "2.0s",
      description: "Deals 120% Attack as fire damage to the targeted enemy unit",
      template: "Deals {0} Attack as fire damage to the targeted enemy unit",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Vengeance Blade",
      cooldown: "5.0s",
      description: "Deals fire damage to the targeted enemy unit equal to 36% of self max HP",
      template: "Deals fire damage to the targeted enemy unit equal to {0} of self max HP",
      levelValues: [["16.5%"], ["18%"], ["19.5%"], ["21%"], ["22.5%"], ["24%"], ["25.5%"], ["27%"], ["28.5%"], ["30%"], ["31.5%"], ["33%"], ["34.5%"], ["36%"]],
    },
    ultimate:     {
      name: "Wrath of Destruction",
      energyCost: "5",
      cooldown: "1.0s",
      description: "Restores 36% of self max HP And deals fire damage to the target equal to 144% of self max HP",
      template: "Restores {0} of self max HP And deals fire damage to the target equal to {1} of self max HP",
      levelValues: [["16.5%", "66%"], ["18%", "72%"], ["19.5%", "78%"], ["21%", "84%"], ["22.5%", "90%"], ["24%", "96%"], ["25.5%", "102%"], ["27%", "108%"], ["28.5%", "114%"], ["30%", "120%"], ["31.5%", "126%"], ["33%", "132%"], ["34.5%", "138%"], ["36%", "144%"]],
    },
    passive:     {
      name: "Deep-Seated Vendetta",
      description: "Each Normal Attack restores 5.8% max HP\nWhen HP is below 50%, all healing received increases by 60%",
      template: "Each Normal Attack restores {0} max HP\nWhen HP is below 50%, all healing received increases by {1}",
      levelValues: [["3.2%", "27.5%"], ["3.4%", "30%"], ["3.6%", "32.5%"], ["3.8%", "35%"], ["4%", "37.5%"], ["4.2%", "40%"], ["4.4%", "42.5%"], ["4.6%", "45%"], ["4.8%", "47.5%"], ["5%", "50%"], ["5.2%", "52.5%"], ["5.4%", "55%"], ["5.6%", "57.5%"], ["5.8%", "60%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "Self Attack increases by 10%, Healing increases by 12.5%",
    requirements: {
      faction: "Avalon",
      element: "Fire",
      alternativeConditions: "Team contains 2 Avalon characters or 2 Fire characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Damage taken decreases by 10%",
    },
    {
      level: 2,
      effect: "Each normal attack increases self Defense by 5%, stacking up to 10 times",
    },
    {
      level: 3,
      effect: "[Skill] and [Normal Attack] level and level cap +4",
    },
    {
      level: 4,
      effect: "HP increases by 30%",
    },
    {
      level: 5,
      effect: "[ULT] and [Passive] level and level cap +4",
    },
    {
      level: 6,
      effect: "Normal attacks deal additional <color=#c90d0d>Blaze</color> damage equal to 5% of max HP",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Behind the Laziness",
    image: "mordredcard",
    stats: {
      hp: "5,000",
      attack: "500",
      defense: "500",
    },
    effects: [  // awakening levels 1-5
      "HP increases by 12%, self Healing increases by 14%",
      "HP increases by 15%, self Healing increases by 18%",
      "HP increases by 18%, self Healing increases by 22%",
      "HP increases by 21%, self Healing increases by 26%",
      "HP increases by 24%, self Healing increases by 30%",
    ],
    restriction: "Only effective for Warrior",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Melee', 'Healing', 'HP-Scale', 'Damage Reduction'],
};

// SEO data for Mordred
export const mordredSEO = {
  title: `${mordredData.name} - Zone Nova Character Guide`,
  description: `Complete guide for ${mordredData.name}, a ${mordredData.rarity} ${mordredData.element} ${mordredData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default mordredData;
