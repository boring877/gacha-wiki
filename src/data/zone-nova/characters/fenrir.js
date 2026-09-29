// Fenrir - Zone Nova Character Data
// SSR Disruptor from A.S.A faction with Ice element
// Generated from decrypted live master data (2026-09-29); skills at max level (Lv.10)
export const fenrirData = {
  name: "Fenrir",
  image: "Fenrir.png",
  rarity: 'SSR',
  element: 'Ice',
  class: 'Debuffer',
  role: "Disruptor",
  faction: "A.S.A",
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
    attack: '1,090',
    defense: '600',
  },
  talentTree: {
    totals: ["ATK +81.8%", "HP +53%"],
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
        stat: "ATK +3.2%",
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
        stat: "ATK +4.8%",
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
        stat: "ATK +6.4%",
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
        materials: [{"name": "Frost Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Frost Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Frost Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Frost Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Frost Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Frost Law",
      cooldown: "2.0s",
      description: "Deals ice damage equal to 120% ATK to the nearest enemy.",
      template: "Deals ice damage equal to {0} ATK to the nearest enemy.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Order to Decision",
      cooldown: "8.0s",
      description: "Deals ice damage equal to 480% ATK to the enemies with the highest ATK and highest DEF, applying [Broken Edict] for 6s to each. If both selections identify the same enemy, the effects apply only once.\n[Broken Edict]: Shield received -48%, Energy Recovery -21.6%. Does not stack.\nIf the target has a shield before this hit, the hit reduces enemy Energy by 1, at most once per target every 8s from this Skill.",
      template: "Deals ice damage equal to {0} ATK to the enemies with the highest ATK and highest DEF, applying [Broken Edict] for {3}s to each. If both selections identify the same enemy, the effects apply only once.\n[Broken Edict]: Shield received -{1}, Energy Recovery -{2}. Does not stack.\nIf the target has a shield before this hit, the hit reduces enemy Energy by {4}, at most once per target every {5}s from this Skill.",
      levelValues: [["220%", "22%", "10%", "6", "1", "8"], ["240%", "24%", "10.9%", "6", "1", "8"], ["260%", "26%", "11.8%", "6", "1", "8"], ["280%", "28%", "12.7%", "6", "1", "8"], ["300%", "30%", "13.6%", "6", "1", "8"], ["320%", "32%", "14.4%", "6", "1", "8"], ["340%", "34%", "15.3%", "6", "1", "8"], ["360%", "36%", "16.2%", "6", "1", "8"], ["380%", "38%", "17.1%", "6", "1", "8"], ["400%", "40%", "18%", "6", "1", "8"], ["420%", "42%", "18.9%", "6", "1", "8"], ["440%", "44%", "19.8%", "6", "1", "8"], ["460%", "46%", "20.7%", "6", "1", "8"], ["480%", "48%", "21.6%", "6", "1", "8"]],
    },
    ultimate:     {
      name: "Final verdict",
      energyCost: "3",
      cooldown: "3.0s",
      description: "Deals ice damage equal to 661.1% ATK to all enemies and applies [Final Judgment].\n[Final Judgment]: Energy Recovery -58.9%, shield received -58.9%, lasting 4s. Can only be applied once per target every 10s.",
      template: "Deals ice damage equal to {0} ATK to all enemies and applies [Final Judgment].\n[Final Judgment]: Energy Recovery -{1}, shield received -{2}, lasting {3}s. Can only be applied once per target every {4}s.",
      levelValues: [["300%", "30%", "30%", "4", "10"], ["327.8%", "32.2%", "32.2%", "4", "10"], ["355.6%", "34.4%", "34.4%", "4", "10"], ["383.3%", "36.7%", "36.7%", "4", "10"], ["411.1%", "38.9%", "38.9%", "4", "10"], ["438.9%", "41.1%", "41.1%", "4", "10"], ["466.7%", "43.3%", "43.3%", "4", "10"], ["494.4%", "45.6%", "45.6%", "4", "10"], ["522.2%", "47.8%", "47.8%", "4", "10"], ["550%", "50%", "50%", "4", "10"], ["577.8%", "52.2%", "52.2%", "4", "10"], ["605.6%", "54.4%", "54.4%", "4", "10"], ["633.3%", "56.7%", "56.7%", "4", "10"], ["661.1%", "58.9%", "58.9%", "4", "10"]],
    },
    passive:     {
      name: "Judgment Seal",
      description: "When a Skill or Ultimate hits an enemy, applies 1 [Judgment Seal], up to 2 stacks, lasting 8s.\nWhen her Normal Attack, Skill or Ultimate hits an enemy that already has 2 seals, consumes the seals and applies [Edict] for 2s and [Judgment Cooldown] for 12s.\n[Edict]: Cannot use Ultimate.\n[Judgment Cooldown]: Cannot gain [Judgment Seal].",
      template: "When a Skill or Ultimate hits an enemy, applies 1 [Judgment Seal], up to {0} stacks, lasting {1}s.\nWhen her Normal Attack, Skill or Ultimate hits an enemy that already has 2 seals, consumes the seals and applies [Edict] for 2s and [Judgment Cooldown] for 12s.\n[Edict]: Cannot use Ultimate.\n[Judgment Cooldown]: Cannot gain [Judgment Seal].",
      levelValues: [["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"], ["2", "8"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "At the start of battle, all enemies lose 8% DEF and 8% Energy Recovery.\nFor every 800 ATK this character has, the DEF reduction increases by 100% of its base value, up to an additional 500%.",
    requirements: {
      faction: "A.S.A",
      element: "Ice",
      alternativeConditions: "Team contains 2 A.S.A characters or 2 Ice characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "At battle start all enemies gain 1 Judgment Seal.",
    },
    {
      level: 2,
      effect: "Skill hits reduce the target's DEF by 20% for 6s.",
    },
    {
      level: 3,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 4,
      effect: "Applying Ultimate Ban restores 1 allied Energy once every 12s.",
    },
    {
      level: 5,
      effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
    },
    {
      level: 6,
      effect: "Ultimate Ban lasts 3s; the target loses 15% all resistance and takes 15% more damage.",
    },
  ],
  memoryCard: {
    name: "Wolf and Snowman",
    image: "Fenrircard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [  // awakening levels 1-5
      "ATK +24%.\nWhen a Skill or Ultimate hits a shielded enemy, reduces their shield received by 12% and Energy Recovery by 8% for 5s. Can only trigger once per target every 8s.",
      "ATK +28%.\nWhen a Skill or Ultimate hits a shielded enemy, reduces their shield received by 15% and Energy Recovery by 10% for 5s. Can only trigger once per target every 8s.",
      "ATK +32%.\nWhen a Skill or Ultimate hits a shielded enemy, reduces their shield received by 18% and Energy Recovery by 12% for 5s. Can only trigger once per target every 8s.",
      "ATK +36%.\nWhen a Skill or Ultimate hits a shielded enemy, reduces their shield received by 21% and Energy Recovery by 14% for 5s. Can only trigger once per target every 8s.",
      "ATK +40%.\nWhen a Skill or Ultimate hits a shielded enemy, reduces their shield received by 24% and Energy Recovery by 16% for 5s. Can only trigger once per target every 8s.",
    ],
    restriction: "Only effective for Disruptor",
  },
  tags: [
    "Shield",
    "Energy",
    "Ice Damage",
  ],
};

export const fenrirSEO = {
  title: `Fenrir - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Fenrir, a SSR Ice Disruptor in Zone Nova. Includes skills, awakenings, the Wolf and Snowman memory card, and optimal build strategies.`,
};

export default fenrirData;