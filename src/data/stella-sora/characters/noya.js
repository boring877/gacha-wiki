// Noya Character Data
export const noyaData = {
  id: 18,
  name: 'Noya',
  slug: 'noya',
  detailUrl: '/guides/stella-sora/characters/noya',
  image: 'Noya.jpg',
  icon: 'Noya.jpg',
  rarity: '4-Star',
  element: 'Ventus',
  role: 'Vanguard',
  faction: 'New Star Guild',
  trekkerStyle: 'Creative',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 79602,
    attack: 6542,
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
      name: 'Nameless Style',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Swings the sword to attack.\n\n- **Strike 1**: **16% of ATK** as **Ventus DMG**.\n- **Strike 2**: **21.1% of ATK ×2** as **Ventus DMG**.\n- **Strike 3**: **10.6% of ATK ×8** as **Ventus DMG**.\n- **Strike 4**: **20% of ATK ×3** as **Ventus DMG**.',
    },
    {
      name: 'Sonic Slash',
      type: 'Main Skill',
      level: 10,
      cooldown: 5,
      energyCost: 0,
      description:
        'Unleashes a flurry of sword strikes, dealing **64% of ATK ×6** as **Ventus Skill DMG**. Sonic Slash (Main Skill) can trigger **Ventus Mark: Breeze**, generating a Cyclone that deals **23.9% of ATK ×3** as **AoE Ventus Mark DMG**.',
    },
    {
      name: 'Gale Storm',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      energyCost: 0,
      description:
        'Unleashes **4** minor sword auras and **1** major sword aura. Minor sword auras deal **84% of ATK** as **Ventus DMG**. Major sword auras deal **275% of ATK** as **Ventus DMG**. Major sword auras of the Support Skill Gale Storm can pierce through targets and trigger **Ventus Mark: Breeze**, generating a Cyclone that deals **23.9% of ATK ×3** as **AoE Ventus Mark DMG**.',
    },
    {
      name: 'Skyshatter Rend',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        'Performs a sweeping slash, dealing **1053% of ATK ×2** as **Ventus DMG**. Skyshatter Rend (Ultimate) can trigger **Ventus Mark: Breeze** to generate a Cyclone that deals **23.9% of ATK ×3** as **AoE Ventus Mark DMG**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Wind Rider',
      description:
        'After Noya deals Ultimate DMG to a target, her **ATK** is increased by **18%** for **20s**.',
    },
    {
      id: '02',
      name: 'Air Vibration',
      description:
        'When Noya triggers a **Ventus Mark: Breeze**, her **Skill DMG** is increased by **14%** for **8s**.',
    },
    {
      id: '03',
      name: 'Shadows from the Past',
      description:
        'When Noya deals DMG to a target, her **ATK** is increased by **1.2%** for **5s**, stacking up to **10 times**.',
    },
    {
      id: '04',
      name: "Today's Bond",
      description:
        'When Noya kills a target, her **Skill DMG** is increased by **14%** for **12s**.',
    },
    {
      id: '05',
      name: 'Unsolved Chapter',
      description:
        'When Noya deals Auto Attack DMG, her **Ultimate DMG** is increased by **40%** for **6s**.',
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: AOE SLASH BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Noya: Main Build 1',
      buildSubtitle: 'AoE Slash Build',
      buildDescription:
        'An AoE build that transforms skills into multi-phase attacks with slashes.',
    },
    {
      name: 'Slash: Dual Strike!',
      description:
        'Adds Dragon Slash as the second phase of the Main Skill, dealing **86% of ATK ×3**/**336% of ATK** as **Ventus Skill DMG**.',
      image: 'Slash_Dual_Strike.jpg',
    },
    {
      name: 'Slash: Chain Slash!',
      description:
        "Increases Noya's **Skill DMG** by **11.3%**. After casting Sonic Slash (Main Skill) or Dragon Slash, Noya immediately casts Devastating Wind, dealing **46.2% of ATK ×4** as **Ventus Skill DMG**.",
      image: 'Slash_Chain_Slash.jpg',
    },
    {
      name: 'Triple Blinks',
      level: 'Lv. 6',
      description:
        'When casting Sonic Slash (Main Skill) or Dragon Slash, unleashes multiple sword auras. Each sword aura deals **30.6% of ATK** as **Ventus Skill DMG**.',
      image: 'Triple_Blinks.jpg',
    },
    {
      name: 'Wind Slash',
      level: 'Lv. 6',
      description:
        'When Noya launches the final strike of Auto Attack or Devastating Wind, unleashes multiple sword auras. Each sword aura deals **22% of ATK** as **Ventus Skill DMG**.',
      image: 'Wind_Slash.jpg',
    },
    {
      name: 'Cloud Swirl',
      level: 'Lv. 6',
      description:
        'When Sonic Slash (Main Skill) hits a target, increases **ATK** by **49%** for **5s**.',
      image: 'Cloud_Swirl.jpg',
    },

    // === BUILD 2: RANGED CONTROL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Noya: Main Build 2',
      buildSubtitle: 'Ranged Control Build',
      buildDescription:
        'A ranged control build that enables ranged Auto Attacks after casting a skill.',
    },
    {
      name: 'Slash: Windfury!',
      description:
        'When Noya deals DMG with an Auto Attack, there is a **30%** chance to cast Multi Sword Aura, dealing **16% of ATK ×5** as **Ventus Auto Attack DMG** and granting Noya **1.93 Energy**. This effect can only be triggered once per second.',
      image: 'Slash_Windfury.jpg',
    },
    {
      name: 'Slash: Blade Storm!',
      description:
        'After casting Sonic Slash (Main Skill), Auto Attacks become sword aura Attacks for **6s**. Each sword aura deals **27.3% of ATK** as **Ventus Auto Attack DMG**.',
      image: 'Slash_Blade_Storm.jpg',
    },
    {
      name: 'Pebble Storm',
      level: 'Lv. 6',
      description:
        'When Noya deals DMG to the same target, increases her **Auto Attack DMG** to the target by **6.7%** for **3s**, stacking up to **10 times**.',
      image: 'Pebble_Storm.jpg',
    },
    {
      name: 'Flurry Stance',
      level: 'Lv. 6',
      description:
        'Within **7s** after Noya casts Sonic Slash (Main Skill) or Dragon Slash, each Auto Attack increases her **ATK SPD** by **3.9%** for **4s**, stacking up to **10 times**.',
      image: 'Flurry_Stance.jpg',
    },
    {
      name: 'Sandstorm Crush',
      level: 'Lv. 6',
      description:
        'When Noya deals DMG with an Auto Attack, increases her **Ultimate DMG** by **14.6%**, stacking up to **10 times**. Resets after casting an Ultimate.',
      image: 'Sandstorm_Crush.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Noya: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: "Hero's Instinct",
      level: 'Lv. 6',
      description:
        'Noya can dodge one more time. Increases her **Skill DMG** to nearby targets by **47%**.',
      image: "Hero's_Instinct.jpg",
    },
    {
      name: 'Sunset Clouds',
      level: 'Lv. 6',
      description:
        "When Noya deals DMG, reduces the target's **Resilience** by **12.8%**. This effect can only be triggered once every **10s**.",
      image: 'Sunset_Clouds.jpg',
    },
    {
      name: 'Blade Dominance',
      level: 'Lv. 6',
      description:
        'Noya can dodge through barriers. Increases her **Auto Attack Damage** to distant targets by **69%**.',
      image: 'Blade_Dominance.jpg',
    },
    {
      name: 'Mist Banisher',
      level: 'Lv. 6',
      description:
        'When Skyshatter Rend kills a target, Noya gains **19 Energy**. This effect can only be triggered **5 times** per Ultimate cast.',
      image: 'Mist_Banisher.jpg',
    },
    {
      name: 'Space Splitter',
      level: 'Lv. 6',
      description:
        "When casting Skyshatter Rend (Ultimate), increases the squad's **ATK** by **83%** for **10s**.",
      image: 'Space_Splitter.jpg',
    },
    {
      name: 'Choreographed Assault',
      level: 'Lv. 6',
      description:
        "When Skyshatter Rend (Ultimate) deals DMG, increases Noya's **ATK** by **87%** for **10s**, up to **3 stacks**.",
      image: 'Choreographed_Assault.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: AOE SWORD AURA BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Noya: Support Build 1',
      buildSubtitle: 'AoE Sword Aura Build',
      buildDescription: 'An AoE build that boosts the range and DMG of sword auras.',
    },
    {
      name: 'Gallop: Flurry!',
      description: 'Unleashes **1** additional major sword aura.',
      image: 'Gallop_Flurry.jpg',
    },
    {
      name: 'Gallop: Squall!',
      description:
        'Major sword auras become cross major sword auras, dealing an additional **81% of ATK** as **Ventus Skill DMG**.',
      image: 'Gallop_Squall.jpg',
    },
    {
      name: 'Corrosive Breeze',
      level: 'Lv. 6',
      description:
        "Increases the major sword auras' DMG to targets inflicted with **Ventus Mark: Breeze** by **62%**.",
      image: 'Corrosive_Breeze.jpg',
    },
    {
      name: 'Wind Glaive',
      level: 'Lv. 6',
      description: "Increases major sword auras' Attack Range, and increases their DMG by **93%**.",
      image: 'Wind_Glaive.jpg',
    },
    {
      name: 'Leaf Barrier',
      level: 'Lv. 6',
      description:
        "Increases major sword auras' DMG by **55%**. Also slightly reduces the target's Movement SPD.",
      image: 'Leaf_Barrier.jpg',
    },

    // === BUILD 2: SPLITTING SWORD AURA BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Noya: Support Build 2',
      buildSubtitle: 'Splitting Sword Aura Build',
      buildDescription:
        'A focused build that increases the number of sword auras and allows them to split.',
    },
    {
      name: 'Gallop: Cyclone!',
      description:
        'When the minor sword aura deals DMG for the first time, it splits into **3** even smaller sword auras, each dealing **4.7% of ATK** as **Ventus Skill DMG**.',
      image: 'Gallop_Cyclone.jpg',
    },
    {
      name: 'Gallop: Gale!',
      description: 'Can cast **4** additional minor sword auras.',
      image: 'Gallop_Gale.jpg',
    },
    {
      name: 'Dancing Airflow',
      level: 'Lv. 6',
      description:
        'Increases DMG of Gale Storm (Support Skill) by **85%**. Noya casts minor sword auras faster.',
      image: 'Dancing_Airflow.jpg',
    },
    {
      name: 'Gathering Storm',
      level: 'Lv. 6',
      description:
        "Increases minor sword auras' DMG by **57%**. Also triggers **Ventus Mark: Breeze**.",
      image: 'Gathering_Storm.jpg',
    },
    {
      name: 'Fierce Essence',
      level: 'Lv. 6',
      description:
        "Increases Noya's **Skill DMG** by **40%**. When Gale Storm (Support Skill) kills a target, its cooldown is reduced by **7s**.",
      image: 'Fierce_Essence.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Noya: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Charged Circulation',
      level: 'Lv. 6',
      description:
        'When Noya triggers **Ventus Mark: Breeze**, restores **22 Energy** for a random support Trekker. This effect can only be triggered once every **7s**.',
      image: 'Charged_Circulation.jpg',
    },
    {
      name: 'Cyclone Blades',
      level: 'Lv. 6',
      description:
        'When Noya triggers **Ventus Mark: Breeze**, increases her **ATK** by **36%** for **4s**.',
      image: 'Cyclone_Blades.jpg',
    },
    {
      name: 'Rupture Circulation',
      level: 'Lv. 6',
      description:
        'When Gale Storm (Support Skill) deals DMG to elite or higher-tier targets, increases its **Skill DMG** by **77%**.',
      image: 'Rupture_Circulation.jpg',
    },
    {
      name: 'Mist Banisher',
      level: 'Lv. 6',
      description:
        'When Skyshatter Rend kills a target, Noya gains **19 Energy**. This effect can only be triggered **5 times** per Ultimate cast.',
      image: 'Mist_Banisher.jpg',
    },
    {
      name: 'Space Splitter',
      level: 'Lv. 6',
      description:
        "When casting Skyshatter Rend (Ultimate), increases the squad's **ATK** by **83%** for **10s**.",
      image: 'Space_Splitter.jpg',
    },
    {
      name: 'Choreographed Assault',
      level: 'Lv. 6',
      description:
        "When Skyshatter Rend (Ultimate) deals DMG, increases Noya's **ATK** by **87%** for **10s**, up to **3 stacks**.",
      image: 'Choreographed_Assault.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Tranquil Retreat',
    image: 'Tranquil_Retreat.jpg',
    rarity: '4-Star',
    element: 'Ventus',
    tags: ['Ventus', 'Skills'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Tailwind Journey',
        effect:
          "Increases the **Skill DMG** of Ventus Trekkers in the squad by **15%**. If the main Trekker's HP is above **80%** when any Ventus Trekker deals Skill DMG, increases the DMG of this hit by **16%**.",
      },
      harmony: {
        name: "Companion's Bond",
        level: 5,
        effect:
          "When a support Ventus Trekker is on the battlefield, increases the main Ventus Trekker's **Skill DMG** dealt by **40%**.",
        requirements: {
          'Melody of Focus': '≥ Lv.70',
          'Melody of Stamina': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        ultimate: {
          baseEffect: 'Ultimate DMG +1%',
          maxEffect: 'Ultimate DMG +99%',
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
    "Noya uses techniques no one has ever seen, learned from an unknown source. Even skill-casting does not interrupt her long sword's movements.",

  fullStats: {
    speed: 100,
  },
};

export const noyaSEO = {
  title: 'Noya - Stella Sora Character Guide',
  description:
    'Complete guide for Noya, a 4-Star Ventus Vanguard in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Noya',
    'Stella Sora',
    '4-Star',
    'Ventus',
    'Vanguard',
    'character guide',
    'Tranquil Retreat',
    'New Star Guild',
    'Creative',
    'Nameless Style',
    'Sonic Slash',
    'Gale Storm',
    'Skyshatter Rend',
  ],
};
