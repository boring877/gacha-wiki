// Fenrir Build - Zone Nova Character Build
// SSR Ice Disruptor - Anti-Shield Energy Denial
// Editorial content hand-curated 2026-09-29; skill text matches the live character data (Lv.14).

export const fenrirBuild = {
    name: "Fenrir",
    role: "Disruptor",
    buildType: "Anti-Shield Energy Denial",
    description: "Fenrir is a denial Disruptor whose entire kit scales off ATK: every skill deals Ice damage on ATK, and her combo skill's opening DEF debuff (-8%, up to -48%) grows with her ATK on top. Her auto skill punishes the two scariest enemies (highest ATK and highest DEF) with [Broken Edict] (-48% shield received, -21.6% Energy Recovery) and strips 1 Energy from shielded targets, her ultimate applies [Final Judgment] to ALL enemies (-58.9% Energy Recovery, -58.9% shield received), and her passive converts repeated hits into [Edict], which locks the enemy out of their Ultimate entirely. Against shield comps and ult-reliant bosses she removes both defenses at once.",
    skillPriority: [
      {
        skill: "Auto Skill: Order to Decision",
        priority: 1,
        level: "Level 14",
        reason: "The core denial tool: 480% ATK on the highest-ATK and highest-DEF enemies, [Broken Edict] for 6s, and 1 Energy stripped from any target that had a shield before the hit",
        description: "Cooldown: 8.0s\nDeals ice damage equal to 480% ATK to the enemies with the highest ATK and highest DEF, applying [Broken Edict] for 6s to each. If both selections identify the same enemy, the effects apply only once.\n[Broken Edict]: Shield received -48%, Energy Recovery -21.6%. Does not stack.\nIf the target has a shield before this hit, the hit reduces enemy Energy by 1, at most once per target every 8s from this Skill."
      },
      {
        skill: "Ultimate: Final verdict",
        priority: 2,
        level: "Level 14",
        reason: "661.1% ATK to every enemy plus the team-wide [Final Judgment] debuff: -58.9% Energy Recovery and -58.9% shield received for 4s. Only 3 Energy, so it cycles fast",
        description: "Energy Cost: 3\nCooldown: 3.0s\nDeals ice damage equal to 661.1% ATK to all enemies and applies [Final Judgment].\n[Final Judgment]: Energy Recovery -58.9%, shield received -58.9%, lasting 4s. Can only be applied once per target every 10s."
      },
      {
        skill: "Passive: Judgment Seal",
        priority: 3,
        level: "Level 14",
        reason: "Two seals from any Skill or Ultimate hit convert into [Edict]: the target CANNOT use its Ultimate for 2s (3s at Awakening 6). Levels do not change the numbers, so level it last",
        description: "When a Skill or Ultimate hits an enemy, applies 1 [Judgment Seal], up to 2 stacks, lasting 8s.\nWhen her Normal Attack, Skill or Ultimate hits an enemy that already has 2 seals, consumes the seals and applies [Edict] for 2s and [Judgment Cooldown] for 12s.\n[Edict]: Cannot use Ultimate.\n[Judgment Cooldown]: Cannot gain [Judgment Seal]."
      },
      {
        skill: "Normal Attack: Frost Law",
        priority: 4,
        level: "Level 14",
        reason: "120% ATK filler that also triggers the 2-seal [Edict] conversion. Keep it at cap, lowest priority",
        description: "Cooldown: 2.0s\nDeals ice damage equal to 120% ATK to the nearest enemy."
      }
    ],
    recommendedMemoryCards: [
      {
        name: "Wolf and Snowman",
        effect: "Exclusive card: ATK +40%, and Skill or Ultimate hits on shielded enemies reduce their shield received by 24% and Energy Recovery by 16% for 5s.",
        priority: "Must Have",
        note: "Her signature card.",
        characterSpecific: true
      },
      {
        name: "The Knight and the Fuzzy",
        effect: "ATK +40%. Enemies hit by the Ultimate gain [Frontline Edict] for 7s. Targets within 3m also gain [Enhanced Frontline Edict]. [Frontline Edict]: DEF -12.5%. Energy Gain Efficiency -10%. [Enhanced Frontline Edict]: DEF -45%. Energy Gain Efficiency -30%.",
        priority: "Great",
        note: "Best non-exclusive option.",
        characterSpecific: false,
        memoryImage: "the-knight-and-the-fuzzy.png",
        memoryStats: {
          hp: "6,000",
          attack: "600",
          defense: "600"
        }
      },
      {
        name: "A perfect makeup look?",
        effect: "Attack power increased by 40%. When a Ultimate Skill deals damage, the target takes 36% more damage and receives 40% less healing for 5 seconds.",
        priority: "Good",
        note: "Ultimate amplification option.",
        characterSpecific: false,
        memoryImage: "Ibaraki-dojicard.jpg",
        memoryStats: {
          hp: "6,000",
          attack: "600",
          defense: "600"
        }
      }
    ],
    runes: {
      primary: "Attack % / Ice Attribute Damage %",
      secondary: "HP %",
      stats: [
        "Attack %",
        "Ice Attribute Damage %"
      ],
      additionalStats: [
        "HP %",
        "Crit Rate %"
      ],
      buildNote: "Iota is a Disruptor-only set and she triggers its 4-piece with every ultimate: +10% damage taken on all enemies hit. Kryos 2-piece adds Frost damage directly. Every point of ATK also feeds her combo skill's DEF debuff scaling (every 800 ATK adds +100% of the base -8%, up to +500%), so ATK% pieces pull double duty.",
      recommendedSets: [
        {
          name: "Iota 4-piece + Kryos 2-piece",
          englishName: "Iota 4-piece + Kryos 2-piece",
          mainRune: "Iota",
          secondaryRune: "Kryos",
          description: "Disruptor-locked ultimate amplification plus Frost damage on every piece of her kit."
        }
      ],
      alternativeSets: [
        {
          name: "Epsilon 4-piece + Kryos 2-piece",
          englishName: "Epsilon 4-piece + Kryos 2-piece",
          mainRune: "Epsilon",
          secondaryRune: "Kryos",
          description: "Team damage route: +10% team damage for 10s after each ultimate cast."
        },
        {
          threeSets: ["Iota", "Kryos", "Alpha"],
          description: "16% ATK plus 10% Frost damage with no conditions."
        }
      ]
    },
    mainStatsByPosition: {
      "1": {
        name: "Position 1: Fixed Main Stat",
        stat: "HP (Flat Value)",
        description: "Always HP - no other options",
        isFixed: true
      },
      "2": {
        name: "Position 2: Fixed Main Stat",
        stat: "Attack (Flat Value)",
        description: "Always Attack - no other options",
        isFixed: true
      },
      "3": {
        name: "Position 3: Fixed Main Stat",
        stat: "Defense (Flat Value)",
        description: "Always Defense - no other options",
        isFixed: true
      },
      "4": {
        name: "Position 4: Variable Main Stats",
        recommendedStat: "Attack (%)",
        availableStats: [
          "Healing Effectiveness (%)",
          "Critical Rate (%)",
          "Critical Damage (%)",
          "Attack Penetration (%)",
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "Attack % scales all of her damage and her combo skill debuff."
      },
      "5": {
        name: "Position 5: Variable Main Stats",
        recommendedStat: "Ice Attribute Damage (%)",
        availableStats: [
          "Wind Attribute Damage (%)",
          "Fire Attribute Damage (%)",
          "Ice Attribute Damage (%)",
          "Holy Attribute Damage (%)",
          "Chaos Attribute Damage (%)",
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "100% of her damage is Ice: this is her elemental damage multiplier outside talents and the memory card."
      },
      "6": {
        name: "Position 6: Variable Main Stats",
        recommendedStat: "Attack (%)",
        availableStats: [
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ]
      }
    },
    awakenings: {
      priority: "A1 first: enemies enter the battle with a Judgment Seal already applied, so the [Edict] Ultimate lock comes online one hit earlier. A6 is the amplification node (3s Edict, -15% all resistance, +15% damage taken). A4 refunds allied Energy on every [Edict]. A3/A5 raise skill levels by 2 and are dupe-gated.",
      keyMilestones: [
        {
          level: 1,
          effect: "At battle start all enemies gain 1 Judgment Seal.",
          importance: 1,
          importanceLabel: "Very Good"
        },
        {
          level: 2,
          effect: "Skill hits reduce the target's DEF by 20% for 6s.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 3,
          effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 4,
          effect: "Applying Ultimate Ban restores 1 allied Energy once every 12s.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 5,
          effect: "[Normal Attack], [Skill], [ULT] and [Passive] level and level cap +2",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 6,
          effect: "Ultimate Ban lasts 3s; the target loses 15% all resistance and takes 15% more damage.",
          importance: 1,
          importanceLabel: "Very Good"
        }
      ]
    },
    teamSkill: {
      name: "Combo Skill",
      description: "At the start of battle, all enemies lose 8% DEF and 8% Energy Recovery. For every 800 ATK this character has, the DEF reduction increases by 100% of its base value, up to an additional 500%. Requires 2 A.S.A or 2 Ice characters."
    },
    teamSynergy: {
      goodWith: [
        "Brynhild",
        "Odin",
        "Poseidon",
        "Keller",
        "Freya",
        "Thor"
      ],
      note: "Her combo skill needs 2 A.S.A or 2 Ice: pair her with Brynhild, Odin or Thor (A.S.A), or Poseidon, Keller or Freya (Ice). Keller stacks her own anti-shield and DEF shred on top of Fenrir's, Poseidon holds the frontline while enemy shields and Energy collapse, and Freya's crit damage cleans up everything Fenrir locks out of their ultimates."
    }
  };
