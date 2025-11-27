// Amber Character Data
export const amberData = {
  id: 15,
  name: 'Amber',
  slug: 'amber',
  detailUrl: '/guides/stella-sora/characters/amber',
  image: 'Amber.jpg',
  icon: 'Amber.jpg',
  rarity: '4-Star',
  element: 'Ignis',
  role: 'Vanguard',
  faction: 'New Star Guild',
  trekkerStyle: 'Collector',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 45794,
    attack: 6490,
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
    maxEnergy: 190,
    chargeEfficiencyMain: 100.0,
    chargeEfficiencySupport: 75.0,
  },

  // Elemental damage stats
  elementalStats: {
    Ignis: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Duet',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Fires both pistols. Each shot deals **22.7% of ATK** as **Ignis DMG**. Magazine holds **12** ammo.',
    },
    {
      name: 'Fireworks Jam',
      type: 'Main Skill',
      level: 10,
      cooldown: 8,
      energyCost: 0,
      description:
        'Fires both pistols in a sweeping motion, dealing **106% of ATK x2** and **7.6% of ATK x4** as **AoE Ignis DMG**, and increasing Auto Attack DMG by **25%** for **10s**.\n\nFireworks Jam (Main Skill) can trigger **Ignis Mark: Sacred Flame**, dealing **142% of ATK** as **AoE Ignis Mark DMG**.',
    },
    {
      name: 'Bullet Waltz',
      type: 'Support Skill',
      level: 10,
      cooldown: 14,
      energyCost: 0,
      description:
        'Charges forward swiftly, dealing **68% of ATK** as **AoE Ignis DMG**.\n\nBullet Waltz (Support Skill) can trigger **Ignis Mark: Sacred Flame**, dealing **142% of ATK** as **AoE Ignis Mark DMG**.',
    },
    {
      name: 'Spark of Finality',
      type: 'Ultimate',
      level: 10,
      cooldown: 20,
      energyCost: 190,
      description:
        'Shoots a beam at the target, dealing **1101% of ATK** as **AoE Ignis DMG**.\n\nSpark of Finality (Ultimate) can trigger **Ignis Mark: Sacred Flame**, dealing **142% of ATK** as **AoE Ignis Mark DMG**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'A Dance with Bullets',
      description:
        'When Amber deals DMG to a target, her Skill DMG is increased by **1.6%** for **10s**, stacking up to **10** times.',
    },
    {
      id: '02',
      name: 'Barrel is Still Hot',
      description:
        'When Amber triggers **Ignis Mark: Sacred Flame**, her Crit Rate is increased by **10%** for **8s**.',
    },
    {
      id: '03',
      name: 'Ethereal Memory',
      description:
        'After Amber casts a skill, her Ultimate DMG is increased by **60%** for **10s**.',
    },
    {
      id: '04',
      name: 'A Silent Long Road',
      description:
        'After Amber deals DMG to a target with her Ultimate, her Skill DMG is increased by **30%** for **15s**.',
    },
    {
      id: '05',
      name: 'Farsight Vision',
      description:
        "Increases Amber's Ultimate DMG dealt to elite or higher-tier targets by **60%**.",
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: SUSTAINED DPS BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Amber: Main Build 1',
      buildSubtitle: 'Sustained DPS Build',
      buildDescription:
        'An AoE build that reloads additional ammo after casting a skill, enhancing Auto Attack DMG.',
    },
    {
      name: 'Dominant Firepower',
      description:
        'After casting Fireworks Jam (Main Skill), immediately reloads **36** rounds in the magazine. Increases Auto Attack DMG by **50%** before the magazine is depleted.',
      image: 'Dominant_Firepower.jpg',
    },
    {
      name: 'Bullet Storm',
      description:
        'After casting Fireworks Jam (Main Skill), immediately **fully reloads** the magazine. Auto Attacks become AoE Attacks before the magazine is depleted, and deal **29.7% of ATK** as **AoE Ignis DMG**.',
      image: 'Bullet_Storm.jpg',
    },
    {
      name: 'Confident Mode',
      level: 'Lv. 6',
      description:
        'After casting Fireworks Jam (Main Skill), Amber gains Super Armor, increasing ATK SPD by **35%** and Auto Attack Damage by **61%** for **8s**.',
      image: 'Confident_Mode.jpg',
    },
    {
      name: 'Greed Gunfire',
      level: 'Lv. 6',
      description:
        'When Amber lands **7** Crit Hits, immediately fully reloads the magazine, and increases Auto Attack DMG by **53%** for **10s**. This effect can only be triggered once every **14s**.',
      image: 'Greed_Gunfire.jpg',
    },
    {
      name: 'Ardent Trigger',
      level: 'Lv. 6',
      description:
        'Each time Amber deals Auto Attack DMG, increases her Auto Attack Damage by **2.7%**. This effect can stack up to **36** times and resets upon reloading.',
      image: 'Ardent_Trigger.jpg',
    },

    // === BUILD 2: CONSECUTIVE SKILL BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Amber: Main Build 2',
      buildSubtitle: 'Consecutive Skill Build',
      buildDescription:
        'An AoE build that enhances skills, allowing them to be cast consecutively.',
    },
    {
      name: 'Precise Temperature Control',
      description:
        'Within **2s** after casting Fireworks Jam (Main Skill), can immediately cast again. When Fireworks Jam triggers an **Ignis Mark: Sacred Flame**, casting the Skill again increases its DMG by **65%**.',
      image: 'Precise_Temperature_Control.jpg',
    },
    {
      name: 'Echo of Hospitality',
      description:
        'When Fireworks Jam (Main Skill) hits a target, deals an additional **62% of ATK** as **AoE Ignis Skill DMG**. This effect can only be triggered **5** times/s.',
      image: 'Echo_of_Hospitality.jpg',
    },
    {
      name: 'Grand Finale',
      level: 'Lv. 6',
      description:
        'Increases the DMG of Fireworks Jam (Main Skill) by **55%**, and the Skill shoots **2** extra rounds.',
      image: 'Grand_Finale.jpg',
    },
    {
      name: 'Weakness Mark',
      level: 'Lv. 6',
      description:
        'After casting Fireworks Jam (Main Skill), increases ATK by **37%** for **4s**, up to **2** stacks.',
      image: 'Weakness_Mark.jpg',
    },
    {
      name: 'Spectacular Finale',
      level: 'Lv. 6',
      description:
        'Every time Fireworks Jam (Main Skill) kills a target with **Ignis Mark: Sacred Flame**, the next time when Amber casts the Main Skill, increases Skill DMG by **57%**, up to **3** stacks.',
      image: 'Spectacular_Finale.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Amber: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Keen Accent',
      level: 'Lv. 6',
      description:
        'When Amber lands a Crit Hit on a target with **Ignis Mark: Sacred Flame**, increases her ATK by **30%** for **5s**, stacking up to **3** times.',
      image: 'Keen_Accent.jpg',
    },
    {
      name: 'Fiery Rhythm',
      level: 'Lv. 6',
      description:
        'Amber can dodge one more time. When Amber deals DMG to an elite or boss target, increases her ATK by **40%** for **8s**. This effect can only be triggered once every **12s**.',
      image: 'Fiery_Rhythm.jpg',
    },
    {
      name: 'Blazing Waltz',
      level: 'Lv. 6',
      description: "Increases Amber's ATK by **43%** while she is moving.",
      image: 'Blazing_Waltsz.jpg',
    },
    {
      name: 'Bursting Spark',
      level: 'Lv. 6',
      description:
        "After casting Spark of Finality (Ultimate), increases Amber's ATK by **84%** for **14s**.",
      image: 'Bursting_Spark.jpg',
    },
    {
      name: 'Overloaded Spark',
      level: 'Lv. 6',
      description:
        "Casting Spark of Finality resets Skill Cooldown. Within **8s** after the Ultimate ends, reduces Amber's Skill Cooldown by **50%** and increases Skill DMG by **27%**.",
      image: 'Overloaded_Spark.jpg',
    },
    {
      name: 'Soul-Hunting Spark',
      level: 'Lv. 6',
      description:
        "Within **5s** after Amber hit but didn't kill a target with Spark of Finality (Ultimate), increases her Ignis DMG dealt to the target by **96%**.",
      image: 'Soul-Hunting_Spark.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: SUSTAINED DPS BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Amber: Support Build 1',
      buildSubtitle: 'Sustained DPS Build',
      buildDescription: 'A sustained DPS build that extends skill duration and generates Shadows.',
    },
    {
      name: 'Hunting Waltz',
      description:
        'While casting Bullet Waltz (Support Skill), Amber **follows the target**, dealing **51.7% of ATK** as **Ignis Skill DMG** for **6s**.',
      image: 'Hunting_Waltz.jpg',
    },
    {
      name: 'Scattering Waltz',
      description:
        'While casting Bullet Waltz (Support Skill), generates **2** Shadows every **2s**. Shadows deal **4.7% of ATK** as **AoE Ignis Skill DMG** every **0.25s** for a total of **2.5s**.',
      image: 'Scattering_Waltz.jpg',
    },
    {
      name: 'Nimble Catwalk',
      level: 'Lv. 6',
      description:
        'Increases the Attack Range of Bullet Waltz (Support Skill), as well as its DMG by **31%**.',
      image: 'Nimble_Catwalk.jpg',
    },
    {
      name: 'Crescendo Beat',
      level: 'Lv. 6',
      description:
        'Every **4s**, increases the DMG of Bullet Waltz (Support Skill) by **13%**, up to **4** stacks. Resets when the Support Skill ends.',
      image: 'Crescendo_Beat.jpg',
    },
    {
      name: 'Bullet Echoes',
      level: 'Lv. 6',
      description:
        "When casting Bullet Waltz (Support Skill), increases Amber's ATK by **63%** for **8s**. This effect can only be triggered once every **14s**.",
      image: 'Bullet_Echoes.jpg',
    },

    // === BUILD 2: BURST DPS BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Amber: Support Build 2',
      buildSubtitle: 'Burst DPS Build',
      buildDescription: 'A burst DPS build that allows skills to quickly deal DMG multiple times.',
    },
    {
      name: 'Echoing Waltz',
      description:
        "After casting Bullet Waltz (Support Skill), there is a **20%** chance to **automatically** cast it again. Increasing Amber's Crit Hit can improve this effect's trigger chance.",
      image: 'Echoing_Waltz.jpg',
    },
    {
      name: 'Flame Waltz',
      description:
        'When Bullet Waltz (Support Skill) ends, Amber fires **one additional hit**, dealing **113% of ATK** as **AoE Ignis Skill DMG**.',
      image: 'Flame_Waltz.jpg',
    },
    {
      name: 'Lingering Gunfire',
      level: 'Lv. 6',
      description:
        'After casting Bullet Waltz (Support Skill), Amber gains **10** stacks of buff. Each stack increases ATK by **5.4%**, up to **20** stacks.',
      image: 'Lingering_Gunfire.jpg',
    },
    {
      name: 'Blazing Dance',
      level: 'Lv. 6',
      description:
        "After casting Bullet Waltz (Support Skill), increases Amber's Ultimate DMG by **60%** for **8s**, up to **2** stacks.",
      image: 'Blazing_Dance.jpg',
    },
    {
      name: 'Sky Splitter',
      level: 'Lv. 6',
      description:
        'Each time Amber hits a target with **Ignis Mark: Sacred Flame**, increases her Ultimate DMG by **18%**, stacking up to **10** times. This effect can only be triggered once every **2s**. Resets after casting her Ultimate.',
      image: 'Sky_Splitter.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Amber: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Thermal Sync',
      level: 'Lv. 6',
      description: "Increases all Ignis Trekkers' Skill DMG by **58%**.",
      image: 'Thermal_Sync.jpg',
    },
    {
      name: 'Trajectory Enhancement',
      level: 'Lv. 6',
      description: "Increases Amber's Crit DMG by **72%**.",
      image: 'Trajectory_Enhancement.jpg',
    },
    {
      name: 'Pressure Amp',
      level: 'Lv. 6',
      description: "Increases Amber's ATK by **36%**.",
      image: 'Pressure_Amp.jpg',
    },
    {
      name: 'Bursting Spark',
      level: 'Lv. 6',
      description:
        "After casting Spark of Finality (Ultimate), increases Amber's ATK by **84%** for **14s**.",
      image: 'Bursting_Spark.jpg',
    },
    {
      name: 'Overloaded Spark',
      level: 'Lv. 6',
      description:
        "Casting Spark of Finality resets Skill Cooldown. Within **8s** after the Ultimate ends, reduces Amber's Skill Cooldown by **50%** and increases Skill DMG by **27%**.",
      image: 'Overloaded_Spark.jpg',
    },
    {
      name: 'Soul-Hunting Spark',
      level: 'Lv. 6',
      description:
        "Within **5s** after Amber hit but didn't kill a target with Spark of Finality (Ultimate), increases her Ignis DMG dealt to the target by **96%**.",
      image: 'Soul-Hunting_Spark.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: "Scorching Night's End",
    image: "Scorching_Night's_End.jpg",
    rarity: '4-Star',
    element: 'Ignis',
    tags: ['Ignis', 'Ultimate'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Rock Party',
        effect:
          "Increases the ATK of Ignis Trekkers in the squad by **10%**. When an Ignis Trekker casts a skill, increases Ignis Trekkers' Ultimate DMG by **50%** for **5s**.",
      },
      harmony: {
        name: 'Lingering Heatwave',
        level: 5,
        effect:
          "When any Trekker triggers **Ignis Mark**, increases Ignis squadmates' ATK by **20%** for **4s**.",
        requirements: {
          'Melody of Stamina': '≥ Lv.70',
          'Melody of Focus': '≥ Lv.70',
          'Melody of Burst': '≥ Lv.70',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        stamina: {
          baseEffect: 'Max HP +0.3%',
          maxEffect: 'Max HP +29.7%',
        },
        ultimate: {
          baseEffect: 'Ultimate DMG +1%',
          maxEffect: 'Ultimate DMG +99%',
        },
      },
    },
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Ignis Mark: Sacred Flame',
      description:
        'A special status applied to the target by some Ignis Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large **AoE DMG**.',
    },
  ],

  story:
    '"The agile dual pistols allow Amber to sashay across the battlefield. Enemies who try to get close to her will turn into ashes long before they can reach her perimeter..',

  fullStats: {
    speed: 100,
  },
};

export const amberSEO = {
  title: 'Amber - Stella Sora Character Guide',
  description:
    'Complete guide for Amber, a 4-Star Ignis Vanguard in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Amber',
    'Stella Sora',
    '4-Star',
    'Ignis',
    'Vanguard',
    'character guide',
    "Scorching Night's End",
    'New Star Guild',
    'Collector',
    'Fireworks Jam',
    'Bullet Waltz',
    'Spark of Finality',
  ],
};
