// Jorogumo Character Data - Zone Nova
// Based on ZoneNovaCharacterTemplate.js

export const jorogumoData = {
  // Basic Character Information
  name: 'Jorogumo',
  chineseName: '絡新婦',
  image: 'Jorogumo.png', // Use format: charactername (e.g., 'Jorogumo')
  rarity: 'SSR', // SSR, SR, R
  element: 'Chaos', // Fire, Ice, Wind, Holy, Chaos
  class: 'Healer', // Tank, Warrior, Attacker, Destroyer, Supporter, Disruptor, Healer - Determines memory compatibility
  role: 'Healer', // Tank, DPS, Supporter, Disruptor, Healer - Functional description
  faction: 'Heikyo Castle', // 平京城

  // Base Stats (Level 80)
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
    hp: '9,180',
    attack: '1,004',
    defense: '729',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "DEF +21.6%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
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
        stat: "HP +3.2%",
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
        materials: [{"name": "Chaos Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Chaos Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Dark_3.png"}, {"name": "Mother's Hovercharm", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_4.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },

  // Skills
  skills: {
    normal:     {
      name: "Eclipse Silk",
      cooldown: "2.0s",
      description: "Deals 120% ATK chaos Damage to a target enemy.",
      template: "Deals {0} ATK chaos Damage to a target enemy.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Blooming Sweet Rain",
      cooldown: "3.0s",
      description: "The friendly unit with the lowest current health percentage gains a continuous health regeneration of 21.6% + 180 of its own attack power for 3 seconds; during the continuous regeneration, gain 10% all resistance. ",
      template: "The friendly unit with the lowest current health percentage gains a continuous health regeneration of {0} + {1} of its own attack power for 3 seconds; during the continuous regeneration, gain {2} all resistance. ",
      levelValues: [["10%", "180", "10%"], ["10.9%", "180", "10%"], ["11.8%", "180", "10%"], ["12.7%", "180", "10%"], ["13.6%", "180", "10%"], ["14.4%", "180", "10%"], ["15.3%", "180", "10%"], ["16.2%", "180", "10%"], ["17.1%", "180", "10%"], ["18%", "360", "10%"], ["18.9%", "180", "10%"], ["19.8%", "180", "10%"], ["20.7%", "180", "10%"], ["21.6%", "180", "10%"]],
    },
    ultimate:     {
      name: "Umbrella Blossom",
      energyCost: "2",
      cooldown: "1.0s",
      description: "After a shot casting time, a healing area with a range of 5 is created, restoring the caster's attack power by 46% + 100 HP per second for 5 seconds. Allied characters within the area gain 1 stack of [Umbrella Blossom], up to a maximum of 5 stacks.",
      template: "After a shot casting time, a healing area with a range of 5 is created, restoring the caster's attack power by {0} + {1} HP per second for 5 seconds. Allied characters within the area gain 1 stack of [Umbrella Blossom], up to a maximum of 5 stacks.",
      levelValues: [["20%", "100", "0.6%", "0.3%"], ["22%", "100", "0.6%", "0.3%"], ["24%", "100", "0.6%", "0.3%"], ["26%", "100", "0.6%", "0.3%"], ["28%", "100", "0.6%", "0.3%"], ["30%", "100", "0.6%", "0.3%"], ["32%", "100", "0.6%", "0.3%"], ["34%", "100", "0.6%", "0.3%"], ["36%", "100", "0.6%", "0.3%"], ["38%", "200", "0.6%", "0.3%"], ["40%", "100", "0.6%", "0.3%"], ["42%", "100", "0.6%", "0.3%"], ["44%", "100", "0.6%", "0.3%"], ["46%", "100", "0.6%", "0.3%"]],
    },
    passive:     {
      name: "Umbrella Heal",
      description: "After an ally is attacked, if HP is below 30%, consume 1 stack of [Umbrella Flower] to gain 3 rapid heals of 16.1% Max HP within 1 second. The first 2 times  gain 6 rapid heals.",
      template: "After an ally is attacked, if HP is below {0}, consume 1 stack of [Umbrella Flower] to gain 3 rapid heals of {1} Max HP within 1 second. The first 2 times  gain 6 rapid heals.",
      levelValues: [["30%", "6%"], ["30%", "6.8%"], ["30%", "7.6%"], ["30%", "8.3%"], ["30%", "9.1%"], ["30%", "9.9%"], ["30%", "10.7%"], ["30%", "11.4%"], ["30%", "12.2%"], ["30%", "13%"], ["30%", "13.8%"], ["30%", "14.6%"], ["30%", "15.3%"], ["30%", "16.1%"]],
    },
  },

  // Team Skill
  teamSkill: {
    name: "Combo Skill",
    description: "At the start of combat, healing is increased by 5% for every 500 attack power, up to 6 times. Self-generated energy gain efficiency is increased by 10%. ",
    requirements: {
      faction: "Heikyo Castle",
      element: "Chaos",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Chaos characters",
    },
  },

  // Awakening Effects (6 levels)
  awakenings: [
    {
      level: 1,
      effect: "Ultimate range increased to 7.",
    },
    {
      level: 2,
      effect: "Immediately activates Ultimate without cost upon entering battle. After using Ultimate, gain [Umbrella Protection]: Allied units gain 40% increased resistance to all attributes except Chaos, and take 12.5% ​​less damage (lasts 5 seconds).",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Healing increased by 45%.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "【Umbrella Healing+】The passive effect is added once for the first two activations, and also grants a shield equal to 50% of Jorogumo's maximum HP. ",
    },
  ],

  // Memory Card
  memoryCard: {
    name: "Beautiful Moon",
    image: "Jorogumocard",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "Healing increased by 15%. When healing a target with 'Damage Over Time' status, healing is increased by an additional 5%. If target HP is below 50%, grant continuous healing effect, restoring 5% of caster's ATK as HP per second for 3 seconds, max 1 stack.",
      "Healing increased by 20%. When healing a target with 'Damage Over Time' status, healing is increased by an additional 10%. If target HP is below 50%, grant continuous healing effect, restoring 6% of caster's ATK as HP per second for 3 seconds, max 1 stack.",
      "Healing increased by 25%. When healing a target with 'Damage Over Time' status, healing is increased by an additional 15%. If target HP is below 50%, grant continuous healing effect, restoring 7% of caster's ATK as HP per second for 3 seconds, max 1 stack.",
      "Healing increased by 30%. When healing a target with 'Damage Over Time' status, healing is increased by an additional 20%. If target HP is below 50%, grant continuous healing effect, restoring 8% of caster's ATK as HP per second for 3 seconds, max 1 stack.",
      "Healing increased by 35%. When healing a target with 'Damage Over Time' status, healing is increased by an additional 25%. If target HP is below 50%, grant continuous healing effect, restoring 9% of caster's ATK as HP per second for 3 seconds, max 1 stack.",
    ],
    restriction: "Only effective for Healer",
  },

  // Character Tags - Reusable across multiple characters
  tags: ['Healing', 'Ranged', 'AOE Healing', 'Resistance', 'Shield'],
};

// SEO data for Jorogumo
export const jorogumoSEO = {
  title: `${jorogumoData.name} (${jorogumoData.chineseName}) - Zone Nova Character Guide`,
  description: `Complete guide for ${jorogumoData.name}, a ${jorogumoData.rarity} ${jorogumoData.element} ${jorogumoData.class} in Zone Nova. Includes skills, awakenings, builds, and team compositions.`,
};

// Export default for easy importing
export default jorogumoData;
