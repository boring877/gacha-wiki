// Canace Character Data
export const canaceData = {
  id: 19,
  name: 'Canace',
  slug: 'canace',
  detailUrl: '/guides/stella-sora/characters/canace',
  image: 'Canace.jpg',
  icon: 'Canace.jpg',
  rarity: '4-Star',
  element: 'Ventus',
  role: 'Versatile',
  faction: 'Grace Imperium',
  trekkerStyle: 'Adventurous',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 43962,
    attack: 6385,
    defense: 190,
    critRate: 5.0,
    critDmg: 150.0,
  },

  // Combat stats
  combatStats: {
    vulExploit: 0.0,
    defPen: 0,
    ignoreDef: 0.0,
  },

  // Energy stats
  energyStats: {
    maxEnergy: 285,
    chargeEfficiencyMain: 100.0,
    chargeEfficiencySupport: 75.0,
  },

  // Elemental damage stats
  elementalStats: {
    Ventus: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Gush Shots',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Fires consecutive Ventus-imbued bullets to deal DMG.\n\n- **Strike 1-4**: **25.6% of ATK** as **Ventus DMG**.\n- **Strike 5**: **38.8% of ATK ×2** as **Ventus DMG**.',
    },
    {
      name: 'Verdant Shroud',
      type: 'Main Skill',
      level: 10,
      cooldown: 12,
      energyCost: 0,
      description:
        'Deals **15.2% of ATK** as **Ventus DMG** to nearby targets, and then summons **2 Flying Leaves**. A Flying Leaf can pierce through the target and deal **37.5% of ATK** as **Ventus DMG** for **7.2s**. Verdant Shroud (Main Skill) can trigger **Ventus Mark: Breeze**, dealing **65.7% of ATK** as **AoE Ventus Mark DMG**.',
    },
    {
      name: 'Laurel Halo',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      energyCost: 0,
      description:
        'Tosses a Laurel Wreath at the main Trekker. The Laurel Wreath deals **62% of ATK** as **Ventus DMG** every **0.4s** for a total of **6s**, and inflicts **Ventus Mark: Breeze**.',
    },
    {
      name: 'Double Tempest',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        'Creates **2** cyclones, each dealing **184% of ATK ×9** as **AoE Ventus DMG**, lasting for **4s**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Lost Youth',
      description:
        "When Canace's Flying Leave or Laurel Wreath is on the battlefield, the squad's **ATK** is increased by **16.8%**.",
    },
    {
      id: '02',
      name: 'Imminent Dawn',
      description:
        'When Canace kills a target, her **Skill DMG** is increased by **12%** for **10s**.',
    },
    {
      id: '03',
      name: 'Hidden Past',
      description:
        "For each target hit by Canace's Ultimate, increases the squad's **ATK** by **3.4%** for **15s**, stacking up to **5 times**.",
    },
    {
      id: '04',
      name: "Mentor's Duty",
      description:
        "When **Ventus Mark** is triggered, increases Canace's **Skill DMG** by **12%** for **6s**.",
    },
    {
      id: '05',
      name: 'Yearning for Truth',
      description:
        "Increases Canace's **Ventus DMG** dealt to normal and elite targets by **14.4%**.",
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: AOE FLYING LEAVES BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Canace: Main Build 1',
      buildSubtitle: 'AoE Flying Leaves Build',
      buildDescription:
        'An AoE build that increases the number and rotation speed of Flying Leaves, continuously attacking multiple targets along their path.',
    },
    {
      name: 'Most Admired',
      description: 'Summons **3** additional Flying Leaves.',
      image: 'Most_Admired.jpg',
    },
    {
      name: 'Ring Blitz',
      description: 'Flying Leaves will rotate twice as fast.',
      image: 'Ring_Blitz.jpg',
    },
    {
      name: 'Comprehensive Praise',
      level: 'Lv. 6',
      description:
        'Increases the size of the Flying Leaf. Also increases its **Skill DMG** by **121%**.',
      image: 'Comprehensive_Praise.jpg',
    },
    {
      name: 'Subject Boost',
      level: 'Lv. 6',
      description: "Each Flying Leaf increases the squad's **ATK** by **7.4%**.",
      image: 'Subject_Boost.jpg',
    },
    {
      name: 'Strength Leverage',
      level: 'Lv. 6',
      description:
        "Increases Canace's **ATK** by **27%**. Reduces the **ATK** of targets caught in the Attack Range of Flying Leaves by **10.8%**.",
      image: 'Strength_Leverage.jpg',
    },

    // === BUILD 2: SINGLE-TARGET AUTO ATTACK BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Canace: Main Build 2',
      buildSubtitle: 'Single-Target Auto Attack Build',
      buildDescription:
        'A single-target build that enhances Auto Attacks after casting a skill, with a chance to fire additional bullets.',
    },
    {
      name: 'Erratic Weather',
      description:
        "Increases Canace's **ATK SPD** by **30%**. There is **25%** chance to fire additional Ventus-imbued bullets with Auto Attacks.",
      image: 'Erratic_Weather.jpg',
    },
    {
      name: 'Positive Score',
      description:
        'When Canace casts Verdant Shroud (Main Skill), she gains **5 Vortex Energy**. When a squadmate casts a Support Skill, she gains **3 Vortex Energy**, capped at **5**. When performing an Auto Attack, consumes **1 Vortex Energy** to increase **Auto Attack Damage** by **300%**.',
      image: 'Positive_Score.jpg',
    },
    {
      name: 'Friendly Mentor',
      level: 'Lv. 6',
      description:
        "When Canace casts Verdant Shroud (Main Skill) or when a squadmate casts a Support Skill, increases Canace's **Auto Attack Damage** by **37%** for **8s**, up to **3 stacks**.",
      image: 'Friendly_Mentor.jpg',
    },
    {
      name: 'Unique Teaching',
      level: 'Lv. 6',
      description: 'When Canace triggers **Ventus Mark: Breeze**, increases its DMG by **306%**.',
      image: 'Unique_Teaching.jpg',
    },
    {
      name: 'Counterstrike Tutorial',
      level: 'Lv. 6',
      description:
        "Canace will launch the final strike of her Auto Attack right after dodging, and this strike's **Auto Attack Damage** is increased by **659%**. This effect can only be triggered once every **5s**.",
      image: 'Counterstrike_Tutorial.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Canace: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Lone Star Twinkle',
      level: 'Lv. 6',
      description:
        'Double Tempest (Ultimate) can trigger **Ventus Mark: Breeze**. When the mark is triggered, increases **ATK** by **22%** for **8s**, up to **8 stacks**.',
      image: 'Lone_Star_Twinkle.jpg',
    },
    {
      name: 'Weakness Analysis',
      level: 'Lv. 6',
      description:
        "When the Ventus-imbued bullets deal DMG, there is a **30%** chance to increase the target's **Ventus DMG Taken** by **54%** for **8s**.",
      image: 'Weakness_Analysis.jpg',
    },
    {
      name: 'Shadow Stride',
      level: 'Lv. 6',
      description:
        'Canace can dodge one more time. After dodging, increases her **ATK** by **42%** for **8s**.',
      image: 'Shadow_Stride.jpg',
    },
    {
      name: 'Storm Suppression',
      level: 'Lv. 6',
      description:
        "Increases Double Tempest's DMG by **21%**. The Ultimate will attack **17×2 times** instead of **9×2 times**.",
      image: 'Storm_Suppression.jpg',
    },
    {
      name: 'Structure Shatter',
      level: 'Lv. 6',
      description:
        "When Double Tempest deals DMG, increases Canace's **Ultimate DMG** by **10%**, up to **15 stacks**. Resets when the Ultimate ends.",
      image: 'Structure_Shatter.jpg',
    },
    {
      name: 'Downwind Area',
      level: 'Lv. 6',
      description:
        "When casting Double Tempest (Ultimate), increases Canace's **ATK** by **147%** for **20s**.",
      image: 'Downwind_Area.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: MELEE AOE LAUREL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Canace: Support Build 1',
      buildSubtitle: 'Melee AoE Laurel Build',
      buildDescription:
        'A melee AoE build that increases the range of Laurel Wreaths and shortens the Attack Interval.',
    },
    {
      name: 'Grants Efficient Delving',
      description:
        "Reduces Laurel Wreath's Attack Interval by **50%**. Also increases its DMG by **13.5%**.",
      image: 'Grants_Efficient_Delving.jpg',
    },
    {
      name: 'Grants Transformative Insight',
      description:
        'Increases the Attack Range of the Laurel Wreath by **30%** and its DMG by **13.5%**.',
      image: 'Grants_Transformative_Insight.jpg',
    },
    {
      name: 'Conclusion Analysis',
      level: 'Lv. 6',
      description:
        "Increases Laurel Wreath's DMG by **49%**. After breaking a target's Resilience, increases the target's **Ventus DMG Taken** by **20%** for **15s**.",
      image: 'Conclusion_Analysis.jpg',
    },
    {
      name: 'Structure Analysis',
      level: 'Lv. 6',
      description:
        "When the Laurel Wreath deals DMG, increases the targets' **Ventus DMG Taken** by **8%** for **8s**, up to **6 stacks**.",
      image: 'Structure_Analysis.jpg',
    },
    {
      name: 'Conundrum Solving',
      level: 'Lv. 6',
      description:
        "Increases Laurel Wreath's DMG to elite or higher-tier targets by **65%**. It can now knock back stronger enemies.",
      image: 'Conundrum_Solving.jpg',
    },

    // === BUILD 2: RANGED AOE SPINNING BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Canace: Support Build 2',
      buildSubtitle: 'Ranged AoE Spinning Build',
      buildDescription:
        'A ranged AoE build that increases the rotation speed of Laurel Wreaths and adds extra DMG per orbit.',
    },
    {
      name: 'Grants Speedup Notion',
      description:
        "Increases Canace's **Skill DMG** by **50%**. Increases the rotation speed of the Laurel Wreath by **50%**.",
      image: 'Grants_Speedup_Notion.jpg',
    },
    {
      name: 'Grants Blooming Esthetics',
      description:
        'The Laurel Wreath spins around the main Trekker, deals **98% of ATK** as **Ventus Skill DMG** to surrounding targets and inflicts **Ventus Mark: Breeze**.',
      image: 'Grants_Blooming_Esthetics.jpg',
    },
    {
      name: 'Cyclone Acceleration',
      level: 'Lv. 6',
      description:
        'With each full spin of the Laurel Wreath, increases subsequent DMG of the Skill by **33%**.',
      image: 'Cyclone_Acceleration.jpg',
    },
    {
      name: 'High Pressure Reflux',
      level: 'Lv. 6',
      description:
        'When the Laurel Wreath deals DMG, increases subsequent DMG of the Skill by **23%**. This effect can only be triggered once per second.',
      image: 'High_Pressure_Reflux.jpg',
    },
    {
      name: 'Storm Eye Expansion',
      level: 'Lv. 6',
      description:
        "With each full spin of the Laurel Wreath, increases the main Trekker's **ATK** by **8%** for **3s**, up to **6 stacks**.",
      image: 'Storm_Eye_Expansion.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Canace: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Finale Deduction',
      level: 'Lv. 6',
      description: "For each Ventus Trekker on the squad, increases Canace's **ATK** by **33%**.",
      image: 'Finale_Deduction.jpg',
    },
    {
      name: 'My Thoughts',
      level: 'Lv. 6',
      description:
        'Double Tempest (Ultimate) can inflict **Ventus Mark: Breeze** and **Ultimate DMG** is increased by **89%**.',
      image: 'My_Thoughts.jpg',
    },
    {
      name: 'My Presence',
      level: 'Lv. 6',
      description: "Increases Canace's **ATK** by **36%**.",
      image: 'My_Presence.jpg',
    },
    {
      name: 'Storm Suppression',
      level: 'Lv. 6',
      description:
        "Increases Double Tempest's DMG by **21%**. The Ultimate will attack **17×2 times** instead of **9×2 times**.",
      image: 'Storm_Suppression.jpg',
    },
    {
      name: 'Structure Shatter',
      level: 'Lv. 6',
      description:
        "When Double Tempest deals DMG, increases Canace's **Ultimate DMG** by **10%**, up to **15 stacks**. Resets when the Ultimate ends.",
      image: 'Structure_Shatter.jpg',
    },
    {
      name: 'Downwind Area',
      level: 'Lv. 6',
      description:
        "When casting Double Tempest (Ultimate), increases Canace's **ATK** by **147%** for **20s**.",
      image: 'Downwind_Area.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Unknown Fragrance',
    image: 'Unknown_Fragrance.jpg',
    rarity: '4-Star',
    element: 'Ventus',
    tags: ['Ventus', 'Skills', 'Element'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Lingering Fragrance',
        effect:
          'Increases the **Skill DMG** of Ventus Trekkers in the squad by **15%**. When any Trekker casts an Ultimate, increases the effect by an additional **25%** for **16s**.',
      },
      harmony: {
        name: 'Caressing Breeze',
        level: 5,
        effect:
          "When the main Ventus Trekker is hit, increases the squad's **Ventus DMG** by **20%** for **8s**.",
        requirements: {
          'Melody of Stamina': '≥ Lv.70',
          'Melody of Ultimate': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        focus: {
          baseEffect: 'Auto Attack DMG +1.2%',
          maxEffect: 'Auto Attack DMG +118.8%',
        },
        burst: {
          baseEffect: 'Crit DMG +0.46%',
          maxEffect: 'Crit DMG +45.54%',
        },
      },
    },
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Ventus Mark',
      description:
        "The generic name for all Ventus Marks. When triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
    {
      name: 'Ventus Mark: Breeze',
      description:
        'A special status applied to the target by some Ventus Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.',
    },
  ],

  story:
    'The legendary "Devil Teacher" as the students called. Her mysterious laurel bracelet can unleashes unexpected effects in battle.',

  fullStats: {
    speed: 100,
  },
};

export const canaceSEO = {
  title: 'Canace - Stella Sora Character Guide',
  description:
    'Complete guide for Canace, a 4-Star Ventus Versatile in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Canace',
    'Stella Sora',
    '4-Star',
    'Ventus',
    'Versatile',
    'character guide',
    'Unknown Fragrance',
    'Grace Imperium',
    'Adventurous',
    'Gush Shots',
    'Verdant Shroud',
    'Laurel Halo',
    'Double Tempest',
  ],
};
