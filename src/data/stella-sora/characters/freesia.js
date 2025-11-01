// Freesia Character Data
export const freesiaData = {
  id: 4,
  name: 'Freesia',
  slug: 'freesia',
  detailUrl: '/guides/stella-sora/characters/freesia',
  image: 'Freesia.jpg',
  icon: 'Freesia.jpg',
  rarity: '5-Star',
  element: 'Aqua',
  role: 'Versatile',
  faction: 'Post Haste',
  trekkerStyle: 'Adventurous',
  level: 90,
  tags: [],

  // Essential table stats (Level max)
  stats: {
    hp: 84195,
    attack: 7369,
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
    Aqua: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Power of Reason',
      type: 'Attack',
      level: 10,
      description: 'Swings the great axe to attack the target.',
      damage: {
        type: 'Aqua DMG',
        normal: [
          '136% of **ATK** as **Aqua DMG**',
          '189% of **ATK** as **Aqua DMG**',
          '73.9% of **ATK** as **Aqua DMG**',
          '118% of **ATK** as **Aqua DMG**',
          '354% of **ATK** as **Aqua DMG**',
        ],
        berserk: [
          '134% of **ATK** × 2 as **Aqua DMG**',
          '100% of **ATK** × 2 as **Aqua DMG**',
          '88% of **ATK**, 58.6% of **ATK** × 4, and 176% of **ATK** as **Aqua DMG**',
        ],
      },
      effects: [
        {
          type: 'state',
          description: 'In **Berserk** state, rapidly hacks at enemies instead.',
        },
      ],
    },
    {
      name: 'Freezing Swirl',
      type: 'Main Skill',
      level: 10,
      cooldown: 8,
      description:
        "Charges up to unleash a Whirlwind Slash, dealing AoE Aqua DMG to nearby targets. Charging increases the skill's duration.",
      damage: {
        type: 'Aqua DMG',
        continuous: '70.2% of **ATK** as **Aqua DMG** to nearby targets every 0.3s',
        trigger: '175% of **ATK** as **AoE Aqua Mark DMG**',
      },
      effects: [
        {
          type: 'trigger',
          description:
            '**Freezing Swirl** (Main Skill) can trigger **Aqua Mark**, dealing **175% of ATK** as AoE Aqua Mark DMG and inflicting **Chill**.',
        },
      ],
    },
    {
      name: 'Frost Bloom',
      type: 'Support Skill',
      level: 10,
      cooldown: 12,
      description:
        'Creates a field of Ice Flowers ahead, dealing AoE Aqua DMG. After 1s, the Ice Flowers burst, dealing additional AoE Aqua DMG.',
      damage: {
        type: 'Aqua DMG',
        initial: '193% of **ATK** as **AoE Aqua DMG**',
        burst: '173% of **ATK** as **AoE Aqua DMG**',
      },
      effects: [
        {
          type: 'inflict',
          description: '**Frost Bloom** (Support Skill) can inflict **Aqua Mark: Stream**.',
        },
      ],
    },
    {
      name: 'Elegy of Frost',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        'Freesia growls furiously, dealing massive Aqua DMG in a large area. She then deals additional AoE Aqua DMG and enters the **Berserk** status for 20s.',
      damage: {
        type: 'Aqua DMG',
        roar: ['111% of **ATK** as **Aqua DMG**', '156% of **ATK** as **Aqua DMG**'],
        final: '254% of **ATK** as **AoE Aqua DMG**',
      },
      effects: [
        {
          type: 'status',
          description: 'Enters **Berserk** status for 20s.',
        },
        {
          type: 'support',
          description:
            'When Freesia is in **Berserk** status as a support character, she will automatically attack nearby enemies.',
        },
      ],
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'The Runaway: Rebirth',
      description:
        'When Freesia casts her Ultimate, targets who take DMG from her roar take **21%** more Aqua DMG for 20s.',
    },
    {
      id: '02',
      name: 'The Fugitive: Judgment',
      description:
        'When Freesia deals DMG to targets inflicted with **Chill** and **Freeze**, her Crit DMG is increased by **40%** for 6s.',
    },
    {
      id: '03',
      name: 'Correction of Opinions',
      description:
        'Each time Freesia deals Skill DMG to a target, increases the Aqua DMG taken by the target by **1.4%** for 14s, stacking up to 10 times.',
    },
    {
      id: '04',
      name: 'Debate of Truth',
      description:
        'When Freesia is in the **Berserk** state, her Crit Rate is increased by **10%**.',
    },
    {
      id: '05',
      name: 'Justice, Reason and Kindness',
      description: "Increases Freesia's Crit DMG dealt to elite or higher-tier targets by **48%**.",
    },
  ],

  // Potentials - Main
  mainPotentials: [
    // === BUILD 1: SPINNING SLASHES + AUTO ATTACKS ===
    {
      isBuildHeader: true,
      buildTitle: 'Freesia: Main Build 1',
      buildSubtitle: 'DPS Build',
      buildDescription: 'A DPS build that combines multiple spinning slashes with Auto Attacks.',
    },
    {
      name: 'Ice Mist Barrier',
      description:
        'When Freezing Swirl (Main Skill) ends, leaves a cloud of icy mist, lasting for 10s. For enemies caught inside the mist, reduces their Movement Speed by **35%**; for allies within the same area, increases their Auto Attack DMG by **13%**.',
      image: 'Ice_mist_barrier.jpg',
    },
    {
      name: 'Rapid Verdict',
      description:
        'Freezing Swirl (Main Skill) cannot be charged. When it ends, deals **179% of ATK** as AoE Aqua Skill DMG. For each target hit, reduces Skill Cooldown by **2s**, up to a total of **6s**.',
      image: 'Rapid_verdict.jpg',
    },
    {
      name: 'Elemental Sublimation',
      level: 'Lv. 6',
      description:
        'Casting Freezing Swirl (Main Skill) increases the damage of the next Ultimate by **200%**. While Freesia is in **Berserk**, increases her Auto Attack DMG by **45%**, up to 3 stacks.',
      image: 'Elemental_sublimation.jpg',
    },
    {
      name: 'Doomsday Blessing',
      level: 'Lv. 6',
      description:
        "When Freezing Swirl (Main Skill) ends, increases Freesia's ATK by **109%** for 9s.",
      image: 'Doomsday_blessing.jpg',
    },
    {
      name: 'Soul Extraction',
      level: 'Lv. 6',
      description:
        'While Freesia is in **Berserk**, casting Freezing Swirl (Main Skill) increases her ATK by **141%** for 7s.',
      image: 'Soul_extraction.jpg',
    },

    // === BUILD 2: CONTINUOUS SPINNING SLASHES ===
    {
      isBuildHeader: true,
      buildTitle: 'Freesia: Main Build 2',
      buildSubtitle: 'Continuous DPS',
      buildDescription: 'A build that deals DMG through continuous spinning slashes.',
    },
    {
      name: 'Whirlwind Frenzy',
      description:
        'Increases the DMG of Freezing Swirl (Main Skill) by **120%**. The skill will launch **2** additional attacks. For every **0.5s** charge time, it launches **2** more attacks.',
      image: 'Whirlwind_frenzy.jpg',
    },
    {
      name: 'Unstoppable March',
      description:
        'While casting Freezing Swirl (Main Skill), Freesia is **immune to control**, and her Attack Range is increased by **50%**. When she deals damage, increases Skill DMG by **4.6%**, up to 24 stacks.',
      image: 'Unstoppable_march.jpg',
    },
    {
      name: 'Limits of Oblivion',
      level: 'Lv. 6',
      description:
        'While casting Freezing Swirl (Main Skill), falling ice axes deal **154% of ATK** as AoE Aqua Skill DMG every 1.5s.',
      image: 'Limits_of_oblivion.jpg',
    },
    {
      name: 'Frost Gift',
      level: 'Lv. 6',
      description:
        'When Freezing Swirl (Main Skill) deals DMG to a normal target with **Freeze**, there is a 50% chance to trigger **Shatter**. When dealing DMG to an elite or boss target with **Chill**/**Freeze**, there is a 50% chance to increase the DMG dealt by **77%**.',
      image: 'Frost_gift.jpg',
    },
    {
      name: 'Frost Ward',
      level: 'Lv. 6',
      description:
        "While Freesia is in **Berserk**, casting Freezing Swirl (Main Skill) won't reduce the duration of Berserk and its DMG will be increased by **37%** per second.",
      image: 'Frost_ward.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Freesia: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Victorious Pursuit',
      level: 'Lv. 6',
      description:
        'When Freesia triggers **Aqua Mark**, if she is in **Berserk**, extends the duration of her Berserk by **4s**. This effect can only be triggered **3** times.',
      image: 'Victorious_pursuit.jpg',
    },
    {
      name: 'Tit-for-Tat',
      level: 'Lv. 6',
      description:
        "Elegy of Frost (Ultimate) can trigger **Aqua Mark**, dealing **175% of ATK** as AoE Aqua Mark DMG and inflicting **Chill**. Also increases Freesia's ATK by **8%** for 8s, up to 5 stacks.",
      image: 'Tit_for_tat.jpg',
    },
    {
      name: 'Desperate Counterattack',
      level: 'Lv. 6',
      description:
        'Freesia can dodge one more time. When Freesia triggers **Aqua Mark**, she gains **11** Energy. This effect can only be triggered once every 5s.',
      image: 'Desperate_counterattack.jpg',
    },
    {
      name: 'Ice Vortex',
      level: 'Lv. 6',
      description:
        "While Freesia is in **Berserk**, every time Elegy of Frost (Ultimate) hits a target, increases Freesia's Crit DMG by **73%**, up to 20 stacks.",
      image: 'Ice_vortex.jpg',
    },
    {
      name: 'Wuthering Cold Snap',
      level: 'Lv. 6',
      description:
        'While Freesia is in **Berserk**, casting any skill increases her Auto Attack DMG by **103%** for 15s, stacking up to 3 times.',
      image: 'Wuthering_cold_snap.jpg',
    },
    {
      name: 'Frost Slash',
      level: 'Lv. 6',
      description:
        'When Freesia enters the **Berserk** status, she inflicts **Freeze** on nearby targets for 3s. Within 10s after casting the Ultimate, Auto Attack DMG dealt on an elite or boss target with **Chill**/**Freeze** have a 50% chance to increase by **249%**. Auto Attack DMG dealt on a normal target with **Freeze** have a 50% chance to trigger **Shatter**.',
      image: 'Frost_slash.jpg',
    },
  ],

  supportPotentials: [
    // === BUILD 1: ICE BLOSSOMS BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Freesia: Support Build 1',
      buildSubtitle: 'Ice Blossoms Build',
      buildDescription:
        'A build that generates numerous Ice Blossoms, ideal for fighting large enemies.',
    },
    {
      name: 'Realm of Frost',
      description:
        'Increases the DMG of Frost Bloom (Support Skill) by **10%**. Also increases the Attack Range of Ice Flowers by **60%**.',
      image: 'Realm_of_frost.jpg',
    },
    {
      name: 'Chill Forecast',
      description:
        'Increases the DMG of Frost Bloom (Support Skill) by **10%**. Freesia will summon more Ice Flowers.',
      image: 'Chill_forecast.jpg',
    },
    {
      name: 'Penetrating Chill',
      level: 'Lv. 6',
      description:
        'When Frost Bloom (Support Skill) deals damage to the same target, increases Skill DMG by **15%**, up to 12 stacks.',
      image: 'Penetrating_chill.jpg',
    },
    {
      name: "Winter's Grip",
      level: 'Lv. 6',
      description:
        'When Frost Bloom (Support Skill) hits a target, increases the Aqua DMG taken by the target by **8.6%** for 7s, up to 8 stacks.',
      image: "Winter's_grip.jpg",
    },
    {
      name: 'Crackling Zero',
      level: 'Lv. 6',
      description:
        'When the Ice Flowers summoned by Frost Bloom (Support Skill) disappear, leaves behind Ice Seeds. After 2s, the Ice Seeds deal **145% of ATK** as AoE Aqua Skill DMG.',
      image: 'Crackling_zero.jpg',
    },

    // === BUILD 2: BERSERK ICE BLOSSOMS ===
    {
      isBuildHeader: true,
      buildTitle: 'Freesia: Support Build 2',
      buildSubtitle: 'Berserk Ice Blossoms',
      buildDescription:
        'A build that continuously generates Ice Blossoms to attack enemies while Berserk.',
    },
    {
      name: 'Localized Snowfall',
      description:
        'After Freesia casts Frost Bloom (Support Skill) while in **Berserk**, there is a **30%** chance to summon one Ice Flower with an Auto Attack within **6s**.',
      image: 'Localized_snowfall.jpg',
    },
    {
      name: 'Frost Warning',
      description:
        'When Freesia hits targets inflicted with **Chill**/**Freeze**, deals an additional **224% of ATK** as AoE Aqua Skill DMG.',
      image: 'Frost_warning.jpg',
    },
    {
      name: 'Ocean of Law',
      level: 'Lv. 6',
      description:
        'While Freesia is in **Berserk**, after her Auto Attacks hit targets inflicted with **Chill**/**Freeze**, increases her ATK by **13.4%** for 3s, stacking up to 10 times.',
      image: 'Ocean_of_law.jpg',
    },
    {
      name: 'Power of Redemption',
      level: 'Lv. 6',
      description:
        'When Freesia is on the battlefield, increases her ATK by **7%** per second, up to 25 times. This effect will be removed when she leaves the battlefield.',
      image: 'Power_of_redemption.jpg',
    },
    {
      name: 'Blessing of Faith',
      level: 'Lv. 6',
      description:
        'While Freesia is in **Berserk**, casting Frost Bloom (Support Skill) extends the duration of **Berserk** by **3s**, and increases Skill DMG by **37%** for 15s, up to 3 stacks.',
      image: 'Blessing_of_faith.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Freesia: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Temporal Revival',
      level: 'Lv. 6',
      description:
        "After casting Frost Bloom (Support Skill), there is a **50%** chance to increase the squad's Auto Attack Damage by **120%** for 15s, stacking up to 2 times.",
      image: 'Temporal_revival.jpg',
    },
    {
      name: "Guardian's Heart",
      level: 'Lv. 6',
      description:
        "When Freesia squads up with Aqua Trekkers only, increases the squad's Crit DMG by **14%**.",
      image: "Guardian's_heart.jpg",
    },
    {
      name: 'Silent Prayer',
      level: 'Lv. 6',
      description:
        "Increases Elegy of Frost (Ultimate)'s DMG by **400%** and inflicts **Aqua Mark: Stream**.",
      image: 'Silent_prayer.jpg',
    },
    {
      name: 'Ice Vortex',
      level: 'Lv. 6',
      description:
        "While Freesia is in **Berserk**, every time Elegy of Frost (Ultimate) hits a target, increases Freesia's Crit DMG by **73%**, up to 20 stacks.",
      image: 'Ice_vortex.jpg',
    },
    {
      name: 'Wuthering Cold Snap',
      level: 'Lv. 6',
      description:
        'While Freesia is in **Berserk**, casting any skill increases her Auto Attack DMG by **103%** for 15s, stacking up to 3 times.',
      image: 'Wuthering_cold_snap.jpg',
    },
    {
      name: 'Frost Slash',
      level: 'Lv. 6',
      description:
        'When Freesia enters the **Berserk** status, she inflicts **Freeze** on nearby targets for 3s. Within 10s after casting the Ultimate, Auto Attack DMG dealt on an elite or boss target with **Chill**/**Freeze** have a 50% chance to increase by **249%**. Auto Attack DMG dealt on a normal target with **Freeze** have a 50% chance to trigger **Shatter**.',
      image: 'Frost_slash.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Sunlit Blossom',
    image: 'Sunlit_blossom.jpg',
    rarity: '5-Star',
    element: 'Aqua',
    tags: ['Aqua', 'Auto Attack', 'Skills'],
    stats: {
      basicAtk: 1582,
      skillDmg: '24%',
    },
    skills: {
      melody: {
        name: 'Sunlit Blossom',
        effect:
          "Increases the squad's Aqua DMG by **20%**. Increases the Aqua DMG dealt by Aqua Trekkers in the squad to targets inflicted with Chill or Freeze by an additional **20%**.",
      },
      harmony: {
        name: 'Tears of Joy',
        level: 5,
        effect:
          "When any Aqua Trekker casts an Ultimate, increases Aqua Trekkers' Auto Attack and Skill DMG by **50%** for **18s**.",
        requirements: {
          'Melody of Aqua': '≥ Lv.70',
          'Melody of Ultimate': '≥ Lv.70',
        },
      },
      skill: {
        name: 'Bygone Echoes',
        level: 5,
        effect:
          "Increases Aqua Trekkers' Skill DMG by **20%**. When any Aqua Trekker deals Skill DMG, if a support Aqua Trekker is on the battlefield, increases the DMG of this hit by **24%**.",
        requirements: {
          'Melody of Ultimate': '≥ Lv.75',
          'Melody of Skill': '≥ Lv.75',
          'Melody of Aqua': '≥ Lv.75',
        },
      },
    },
    support: {
      musicalNotesSource: 'Monolith Ascension',
      melodies: {
        luck: {
          baseEffect: 'Crit Rate +0.1% per level',
          maxEffect: 'Crit Rate +9.9%',
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
      name: 'Berserk',
      description: 'Freesia enters a frenzied state, increase ATK by **46%**. Auto Attack changes.',
    },
    {
      name: 'Aqua Mark: Stream',
      description:
        'A special status applied to the target by some Aqua Trekkers, lasting for 10s. Can be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Cold.',
    },
    {
      name: 'Aqua Mark',
      description:
        "The generic name for all **Aqua Marks**. When triggered by specific **Aqua Trekkers'** attacks, the status is removed, and a special effect is activated.",
    },
    {
      name: 'Chill',
      description:
        'Reduces movement speed by **25%** for **10s**, up to **3** stacks. At **3** stacks, it converts into **Freeze** for **3s**.',
    },
    {
      name: 'Freeze',
      description: '**Frozen** and incapacitated. Unable to take action.',
    },
    {
      name: 'Shatter',
      description:
        'When a specific DMG type hits a Frozen normal target, it immediately kills the target.',
    },
  ],

  // Generic Cards
  genericCards: [
    {
      name: 'Temporal Revival',
      description:
        "After casting Frost Bloom (Support Skill), there is a **50%** chance to increase the squad's Auto Attack Damage by **120%** for 15s, stacking up to 2 times.",
      image: 'Temporal_revival.jpg',
    },
    {
      name: "Guardian's Heart",
      description:
        "When Freesia squads up with Aqua Trekkers only, increases the squad's Crit DMG by **14%**.",
      image: "Guardian's_heart.jpg",
    },
    {
      name: 'Silent Prayer',
      description:
        "Increases Elegy of Frost (Ultimate)'s DMG by **400%** and inflicts **Aqua Mark: Stream**.",
      image: 'Silent_prayer.jpg',
    },
    {
      name: 'Ice Vortex',
      description:
        "While Freesia is in **Berserk**, every time Elegy of Frost (Ultimate) hits a target, increases Freesia's Crit DMG by **73%**, up to 20 stacks.",
      image: 'Ice_vortex.jpg',
    },
    {
      name: 'Wuthering Cold Snap',
      description:
        'While Freesia is in **Berserk**, casting any skill increases her Auto Attack DMG by **103%** for 15s, stacking up to 3 times.',
      image: 'Wuthering_cold_snap.jpg',
    },
    {
      name: 'Frost Slash',
      description:
        'When Freesia enters the **Berserk** status, she inflicts **Freeze** on nearby targets for 3s. Within 10s after casting the Ultimate, Auto Attack DMG dealt on an elite or boss target with **Chill**/**Freeze** have a 50% chance to increase by **249%**. Auto Attack DMG dealt on a normal target with **Freeze** have a 50% chance to trigger **Shatter**.',
      image: 'Frost_slash.jpg',
    },
  ],

  story:
    'The ancient "Frenzy" magic fuels Freesia to keep fighting until utter exhaustion. This is the dark side of the usually graceful girl—one that should be kept from others.',

  fullStats: {
    speed: 100,
  },
};

export const freesiaSEO = {
  title: 'Freesia - Stella Sora Character Guide',
  description:
    'Complete guide for Freesia, an 5-Star Aqua Vanguard in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Freesia', 'Stella Sora', '5-Star', 'Aqua', 'Vanguard', 'character guide'],
};
