// Flora Character Data
export const floraData = {
  id: 13,
  name: 'Flora',
  slug: 'flora',
  detailUrl: '/guides/stella-sora/characters/flora',
  image: 'Flora.jpg',
  icon: 'Flora.jpg',
  rarity: '4-Star',
  element: 'Ignis',
  role: 'Support',
  faction: 'Freelance Trekker',
  trekkerStyle: 'Collector',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 43962,
    attack: 5600,
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
    Ignis: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Three-Act Show',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Consecutively spawns fiery birds to deal DMG.\n\n- **Strike 1**: **28.7% of ATK** as **Ignis DMG**.\n- **Strike 2**: **32.7% of ATK** as **Ignis DMG**.\n- **Strike 3**: **57.3% of ATK** as **Ignis DMG**.',
    },
    {
      name: 'Hat Toss',
      type: 'Main Skill',
      level: 10,
      cooldown: 12,
      energyCost: 0,
      description:
        "Throws the top hat, dealing **70% of ATK** as **Ignis DMG** every 0.5s for a total of 5s, and inflicting **Ignis Mark: Sacred Flame**. When casting this skill, increases the squad's **ATK** by **42.6%** for **8s**.",
    },
    {
      name: 'Flutter Flare',
      type: 'Support Skill',
      level: 10,
      cooldown: 14,
      energyCost: 0,
      description:
        "Spawns 3 Mindflare Butterflies and 3 Soulflare Butterflies with different effects.\n\n- **Mindflare Butterfly**: Increases the main Trekker's **Crit DMG** by **24.5%**. Each Mindflare Butterfly also boosts the main Trekker's **Crit Rate** by **3%** for **10s**.\n- **Soulflare Butterfly**: Deals **209% of ATK** as **Ignis DMG** and inflicts 1 stack of **Butterfly Mark** and **Ignis Mark: Sacred Flame**.",
    },
    {
      name: 'Undying Phoenix',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        'Spawns a Celestial Phoenix, dealing **661% of ATK** as **AoE Ignis DMG** before turning into a Phoenix Egg, lasting for 8s. The Phoenix Egg draws in nearby targets, dealing **142% of ATK** as **Ignis DMG** per second and inflicting **Ignis Mark: Sacred Flame**.',
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Withered Flower Show',
      description:
        'When any Trekker in the squad deals DMG to a target with **Ignis Mark**, increases **ATK** by **8.4%** for **6s**.',
    },
    {
      id: '02',
      name: 'Fate of Nirvana',
      description:
        'When the HP of the main Trekker is above 50%, increases **Skill Crit Rate** by **10%**.',
    },
    {
      id: '03',
      name: 'A Lonely Stage',
      description:
        "When Flora inflicts **Ignis Mark: Sacred Flame** on a target, increases the squad's **ATK** by **8.4%** for **6s**.",
    },
    {
      id: '04',
      name: 'Flickering Candle',
      description:
        "When **Ignis Mark** is triggered, increases the main Trekker's **Ignis DMG** by **12%** for **6s**.",
    },
    {
      id: '05',
      name: 'Lived as Play',
      description:
        "When there are 3 Ignis Trekkers in the squad, the squad's **Crit DMG** is increased by **12%**.",
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: SUSTAINED AOEE BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Flora: Main Build 1',
      buildSubtitle: 'Sustained AoE Build',
      buildDescription:
        'A sustained AoE build that increases the number of Top Hats and allows them to be recycled.',
    },
    {
      name: 'Spiral Dance',
      description:
        'When casting Hat Toss (Main Skill), throws **2** additional top hats, dealing **31.5% of ATK** as **Ignis Skill DMG** every 0.5s.',
      image: 'Spiral_Dance.jpg',
    },
    {
      name: 'Ending Song',
      description:
        "Increases Flora's **Skill DMG** by **10%**. Hat Toss now has two strikes. When launching the second strike or when the top hat reaches its max distance, it will return to Flora instantly.",
      image: 'Ending_Song.jpg',
    },
    {
      name: 'Perception of Psyche',
      level: 'Lv. 6',
      description:
        "When the top hat deals DMG, increases the target's **Ignis DMG Taken** by **5.4%** for **8s**, up to **8 stacks**.",
      image: 'Perception_of_psyche.jpg',
    },
    {
      name: 'Movement Artistry',
      level: 'Lv. 6',
      description:
        'Top hat can pull in weak targets constantly and its DMG is increased by **131%**.',
      image: 'Movement_artistry.jpg',
    },
    {
      name: 'Absurd Follies',
      level: 'Lv. 6',
      description:
        'Top hat will bounce off targets upon contact and its DMG is increased by **131%**.',
      image: 'Absured_Follies.jpg',
    },

    // === BUILD 2: PENETRATION BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Flora: Main Build 2',
      buildSubtitle: 'Penetration Build',
      buildDescription:
        'A penetration build that creates clones, causing Auto Attacks to split and continuously inflict marks.',
    },
    {
      name: 'Harmony Verse',
      description:
        'After casting Hat Toss (Main Skill), Flora will summon **3** fiery birds with her Auto Attacks, lasting for **8s**.',
      image: 'Harmony_verse.jpg',
    },
    {
      name: 'Other Self',
      description:
        "When casting Hat Toss (Main Skill), summons a clone. The clone has **33%** of Flora's ATK, deals Auto Attack DMG, and lasts for **8s**.",
      image: 'Other_self.jpg',
    },
    {
      name: "Chekhov's Arm",
      level: 'Lv. 6',
      description:
        "Increases Flora's **ATK** by **72%**. The fiery bird from her Auto Attacks can pierce through targets and has a 50% chance to inflict **Ignis Mark: Sacred Flame** after dealing DMG.",
      image: "Chekhov's_Arm.jpg",
    },
    {
      name: 'Emotional Catharsis',
      level: 'Lv. 6',
      description:
        "When the fiery bird from Auto Attacks deals DMG, increases the target's **Ignis DMG Taken** by **5.4%** for **3s**, up to **5 stacks**.",
      image: 'Emotional_Catharsis.jpg',
    },
    {
      name: "Hero's Halo",
      level: 'Lv. 6',
      description:
        "When the fiery bird from Auto Attacks deals DMG, increases the squad's **ATK** by **3.3%** for **3s**, up to **10 stacks**.",
      image: "Hero's_Halo.jpg",
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Flora: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Rhythm Surge',
      level: 'Lv. 6',
      description:
        "Increases Flora's **ATK** by **42%**. After casting Hat Toss (Main Skill), increases her **ATK SPD** by **50%** for **10s**.",
      image: 'rhythm_surge.jpg',
    },
    {
      name: 'Impromptu Performance',
      level: 'Lv. 6',
      description:
        "After dodging, increases Flora's **Movement SPD** by **40%** for **2.5s**. This effect can only be triggered once every **5s**.",
      image: 'impromptu_performance.jpg',
    },
    {
      name: 'Home Court Dominance',
      level: 'Lv. 6',
      description:
        "When Flora inflicts **Ignis Mark: Sacred Flame** on any target, increases the target's **Ignis DMG Taken** by **19.2%** for **6s**.",
      image: 'home_court_dominance.jpg',
    },
    {
      name: 'Lethal Inferno',
      level: 'Lv. 6',
      description:
        "When Undying Phoenix (Ultimate) deals DMG, increases the target's **Ignis DMG Taken** by **11%** for **10s**, up to **7 stacks**.",
      image: 'lethal_inferno.jpg',
    },
    {
      name: 'Weave of Annihilation',
      level: 'Lv. 6',
      description:
        'The Phoenix Egg will explode when it breaks, dealing **716% of ATK** as **Ignis Ultimate DMG**, inflicting **Ignis Mark: Sacred Flame** to nearby targets, and stunning them for **2s**.',
      image: 'weave_of_annihilation.jpg',
    },
    {
      name: 'Reincarnation of Fire',
      level: 'Lv. 6',
      description:
        "Reduces Phoenix Egg's Attack Interval. Also deals an additional **132% of ATK ×7** as **Ignis Ultimate DMG**.",
      image: 'reincarnation_of_fire.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: MARK INFLICTION BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Flora: Support Build 1',
      buildSubtitle: 'Mark Infliction Build',
      buildDescription:
        'A mark infliction build that increases the number of Soulflare Butterflies, allowing them to split continuously.',
    },
    {
      name: 'Ember of Tomorrow',
      description:
        "Spawns **2** more Soulflare Butterflies. Each stack of **Butterfly Mark** increases the target's **Ignis DMG Taken** by an additional **8%**.",
      image: 'ember_of_tomorrow.jpg',
    },
    {
      name: 'Ember Rekindled',
      description:
        'When the main Ignis Trekker deals DMG to a target, for each stack of **Butterfly Mark** on the target, there is a **35%** chance to spawn a Soulflare Butterfly, dealing **41.2% of ATK** as **Ignis Skill DMG**. This effect can only be triggered once per second.',
      image: 'ember_rekindled.jpg',
    },
    {
      name: 'Perfect Acting',
      level: 'Lv. 6',
      description:
        "When casting Flutter Flare (Support Skill), increases the main Trekker's **ATK** by **71%** for **10s**. When the main Trekker lands a Crit Hit, spawns a **Scorched Butterfly**, dealing **23.7% of ATK** as **Ignis Skill DMG**. This effect can only be triggered once per second.",
      image: 'perfect_acting.jpg',
    },
    {
      name: 'Foreshadowing Verification',
      level: 'Lv. 6',
      description:
        "Increases the main Ignis Trekker's **Crit DMG** to targets inflicted with **Butterfly Mark** by **83%**.",
      image: 'foreshadowing_verification.jpg',
    },
    {
      name: 'Crowd Effect',
      level: 'Lv. 6',
      description:
        "Each target inflicted with **Butterfly Mark** on the battlefield will increase the main Trekker's **ATK** by **7.4%**, up to **6 stacks**.",
      image: 'crowd_effect.jpg',
    },

    // === BUILD 2: CRIT BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Flora: Support Build 2',
      buildSubtitle: 'Crit Build',
      buildDescription:
        "A Crit build that increases the number of Mindflare Butterflies, increasing the main Trekker's DMG.",
    },
    {
      name: 'Ashes of the Past',
      description:
        "Spawns **2** more Mindflare Butterflies. While Mindflare Butterflies are present, increases the main Ignis Trekker's **Crit DMG** by **12%**.",
      image: 'ashes_of_the_past.jpg',
    },
    {
      name: 'Spark of Ashes',
      description:
        'When the main Ignis Trekker deals DMG to a target, for each Mindflare Butterfly present, there is a **20%** chance to increase the damage dealt by **14%** and spawn a **Scorched Butterfly**, dealing **26.4% of ATK** as **Ignis Skill DMG**. This effect can only be triggered once per sec.',
      image: 'spark_of_ashes.jpg',
    },
    {
      name: 'Reinforced Impression',
      level: 'Lv. 6',
      description:
        "Each Mindflare Butterfly increases the main Ignis Trekker's **Crit Rate** by **3.2%**.",
      image: 'reinforced_impression.jpg',
    },
    {
      name: 'Visual Impact',
      level: 'Lv. 6',
      description:
        'When the main Trekker lands a Crit Hit, increases their **ATK** by **59%** for **3s**.',
      image: 'visual_impact.jpg',
    },
    {
      name: 'Post-credits Scene',
      level: 'Lv. 6',
      description:
        'When Mindflare Butterflies die, they will transform into **Scorched Butterfly**, each dealing **38.7% of ATK** as **Ignis Skill DMG**.',
      image: 'post_credits_scene.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Flora: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Backstage Support',
      level: 'Lv. 6',
      description:
        "When an ally lands a Crit Hit, the main Trekker's HP is restored by **4.3%**. This effect can only be triggered once every **6s**.",
      image: 'backstage_support.jpg',
    },
    {
      name: 'Guest Performer',
      level: 'Lv. 6',
      description:
        "When casting Flutter Flare (Support Skill), increases all Ignis Trekkers' **ATK** by **75%** for **10s**.",
      image: 'guest_performer.jpg',
    },
    {
      name: 'Everlasting Show',
      level: 'Lv. 6',
      description:
        "When the Soulflare Butterfly deals DMG, reduces the target's **ATK** by **25%** for **8s**.",
      image: 'everlasting_show.jpg',
    },
    {
      name: 'Lethal Inferno',
      level: 'Lv. 6',
      description:
        "When Undying Phoenix (Ultimate) deals DMG, increases the target's **Ignis DMG Taken** by **11%** for **10s**, up to **7 stacks**.",
      image: 'lethal_inferno.jpg',
    },
    {
      name: 'Weave of Annihilation',
      level: 'Lv. 6',
      description:
        'The Phoenix Egg will explode when it breaks, dealing **716% of ATK** as **Ignis Ultimate DMG**, inflicting **Ignis Mark: Sacred Flame** to nearby targets, and stunning them for **2s**.',
      image: 'weave_of_annihilation.jpg',
    },
    {
      name: 'Reincarnation of Fire',
      level: 'Lv. 6',
      description:
        "Reduces Phoenix Egg's Attack Interval. Also deals an additional **132% of ATK ×7** as **Ignis Ultimate DMG**.",
      image: 'reincarnation_of_fire.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Cage of Roses',
    image: 'Cage_of_Roses.jpg',
    rarity: '4-Star',
    element: 'Ignis',
    tags: ['Ignis', 'Skills', 'Element'],
    stats: {
      baseHP: 5620,
      baseATK: 1077,
    },
    skills: {
      melody: {
        name: 'Fury in Bloom',
        effect:
          'Increases the Skill DMG of Ignis Trekkers in the squad by **15%**. When any Trekker casts an Ultimate, increases the effect by an additional **25%** for **16s**.',
      },
      harmony: {
        name: 'Thorning Rose',
        level: 5,
        effect:
          "When the main Ignis Trekker is hit, increases the squad's Ignis DMG by **20%** for **8s**.",
        requirements: {
          'Melody of Ultimate': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
          'Melody of Stamina': '≥ Lv.70',
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
      name: 'Butterfly Mark',
      description:
        "Each stack of Butterfly Mark increases the target's Ignis DMG Taken, up to 3 stacks, for **6s**.",
    },
    {
      name: 'Ignis Mark',
      description:
        "The generic name for all Ignis Marks. When triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
    {
      name: 'Ignis Mark: Sacred Flame',
      description:
        'A special status applied to the target by some Ignis Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.',
    },
    {
      name: 'Scorched Butterfly',
      description: 'Can apply Ignis Mark: Sacred Flame. Cannot apply Butterfly Mark.',
    },
  ],

  story:
    'Flora goes on tour in Nova to perform her original magic performance. Her fiery butterflies may seem fragile, but they are perfect fire starters that can burn her enemies into ashes.',

  fullStats: {
    speed: 100,
  },
};

export const floraSEO = {
  title: 'Flora - Stella Sora Character Guide',
  description:
    'Complete guide for Flora, a 4-Star Ignis Support in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Flora',
    'Stella Sora',
    '4-Star',
    'Ignis',
    'Support',
    'character guide',
    'Cage of Roses',
    'Freelance Trekker',
    'Collector',
    'Hat Toss',
    'Flutter Flare',
    'Undying Phoenix',
  ],
};
