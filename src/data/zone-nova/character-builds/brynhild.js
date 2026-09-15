// Brynhild Build - Zone Nova Character Build
// SSR Holy Warrior - DEF-Scaling Holy Bruiser
// Editorial content hand-curated 2026-09-15; skill text matches the live character data (Lv.14).

export const brynhildBuild = {
    name: "Brynhild",
    role: "DPS",
    buildType: "DEF-Scaling Holy Bruiser",
    description: "Brynhild is a self-sufficient bruiser whose ENTIRE damage kit scales off DEF, never attack: her normals (120% DEF), her 3-dash auto (685% DEF in AOE + [Nethermark]), and her executing ultimate (1035.6% DEF) all convert defense into Holy damage. Her passive [Soul Hue] banks a permanent stack (+11.8% DEF, +8.3% shields received, −5.8% enemy DEF pen) every time she is hit by a new element, up to 12 stacks. Build her with pure defense and crit: attack power is a dead stat on her.",
    skillPriority: [
      {
        skill: "Auto Skill: Soul Guidance",
        priority: 1,
        level: "Level 14",
        reason: "The damage engine: 3 AOE dashes at 228.3% DEF each, applies [Nethermark] (65.8% DEF per second anti-heal DOT), and ends with a 211.1% DEF shield. Cast it every 5 seconds, forever",
        description: "Cooldown: 0.1s\nPerforms 3 leaping dashes toward the farthest enemy unit. Each dash deals holy damage equal to 228.3% of own DEF to all enemies within 1.5 meters of self and inflicts [Nethermark].\nAfter the third dash, gains a shield equal to 211.1% of own DEF.\nNormal attacks and ultimate skills can be used between the three dashes.\nCD:0.1/0.1/5s\n[Nethermark]: Healing received is reduced by 153.6% and shields received are reduced by 62.3%. Takes holy damage equal to 65.8% of Brynhild's DEF every second for 7 seconds. Does not stack."
      },
      {
        skill: "Ultimate: Einherjar Judgment",
        priority: 2,
        level: "Level 14",
        reason: "1035.6% DEF on the lowest-HP enemy, with +230.6% damage and massive penetration below 50% HP: the execution phase. [Pending Judgment] deletes cheat-death buffs",
        description: "Energy Cost: 4\nCooldown: 3.0s\nTargets the enemy unit with the lowest current HP percentage and leaps above it, first inflicting [Nethermark], then bringing down a giant sword to deal holy damage equal to 1035.6% of own DEF. Remains beside the target after landing.\nIf the target's HP before the damage is dealt is no higher than 50%, this ultimate skill gains 230.6% increased damage, 110.9% increased DEF Penetration Rate, and 90.8% increased holy Resistance Penetration.\nIf the target has a death prevention effect after this ultimate skill's damage is resolved, inflicts [Pending Judgment].\n[Pending Judgment]: Does not stack and lasts until triggered. When the bearer no longer has a death prevention effect, it immediately takes another instance of [Einherjar Judgment] damage.\nRegardless of its HP at that time, this damage applies the damage increase and penetration bonuses above, then removes [Pending Judgment]. This effect remains active after Brynhild dies."
      },
      {
        skill: "Passive: Soul Spectrum Analysis",
        priority: 3,
        level: "Level 14",
        reason: "The snowball: +11.8% DEF per hit taken (12 stacks = +141.6% DEF and +99.6% shields received), plus stacking DEF-penetration reduction that makes her stronger the longer she frontlines",
        description: "After being attacked, permanently gains 1 stacks of [Soul Hue] based on the attacker's innate element.\nEach element can grant up to 1 stacks every 5 seconds, with separate timers for each element. Enemies without an element share one timer.\n[Soul Hue] stacks up to 12 times. No more stacks can be gained at the cap.\nEach stack of [Soul Hue] increases own DEF by 11.8% and shields received by 8.3%.\nWhen Brynhild is attacked, each stack of [Soul Hue] reduces the attack's DEF Penetration Rate against her by 5.8%.\nAny reduction below 0% is treated as additional DEF for Brynhild against that instance of damage."
      },
      {
        skill: "Normal Attack: Cold Radiance Slash",
        priority: 4,
        level: "Level 14",
        reason: "120% DEF filler between dashes. Keep it at cap since everything scales off DEF, but it is the last priority",
        description: "Cooldown: 2.0s\nDeals holy damage equal to 120% of own DEF to the nearest enemy unit."
      }
    ],
    recommendedMemoryCards: [
      {
        name: "Afternoon Waiting",
        effect: "Exclusive card: DEF +69%, Holy damage +33%, and a 53% Max HP shield after every ultimate.",
        priority: "Must Have",
        note: "Her signature card.",
        characterSpecific: true
      },
      {
        name: "Wrong time of appearance",
        effect: "Defense +64%. When HP is below 50%, the wearer recovers 2% of maximum HP after attacking. When HP is above 50%, damage taken is reduced by 10%, and damage dealt is increased by 40%.",
        priority: "Great",
        note: "Best non-exclusive option.",
        characterSpecific: false,
        memoryImage: "Apepcard.jpg",
        memoryStats: {
          hp: "6,600",
          attack: "480",
          defense: "690"
        }
      },
      {
        name: "Halloween candy",
        effect: "Increases critical hit damage by 60%. When HP is above 30%, the wearer recovers 2% of their maximum HP after attacking, and all damage is increased by 40%.",
        priority: "Good",
        note: "Crit damage option.",
        characterSpecific: false,
        memoryImage: "Ninacard.jpg",
        memoryStats: {
          hp: "6,600",
          attack: "480",
          defense: "690"
        }
      }
    ],
    runes: {
      primary: "Defense % / Crit Damage %",
      secondary: "Crit Rate %",
      stats: [
        "Defense %",
        "Crit Damage %"
      ],
      additionalStats: [
        "Crit Rate %",
        "HP %"
      ],
      buildNote: "All-DEF 2-piece sets: every point of DEF is damage, shields, and [Soul Hue] value at once. If your client only activates two sets, run Beth 4-piece + Poki 2-piece. Attack and element sets are bait on her: she never uses attack power, and there is no Holy rune set.",
      recommendedSets: [
        {
          threeSets: ["Poki", "Kappa", "Beth"],
          description: "24% DEF plus 6% Crit Rate, with no HP conditions."
        }
      ],
      alternativeSets: [
        {
          name: "Beth 4-piece + Poki 2-piece",
          englishName: "Beth 4-piece + Poki 2-piece",
          mainRune: "Beth",
          secondaryRune: "Poki",
          mainRune2Piece: "2-piece: Critical Rate increases by 6%",
          mainRune4Piece: "4-piece: When HP is above 80%, Critical Damage increases by 24%",
          secondaryRuneEffect: "2-piece: Defense increases by 12%",
          description: "Two-set fallback if 2+2+2 is not active in your client."
        },
        {
          name: "Poki 4-piece + Beth 2-piece",
          englishName: "Poki 4-piece + Beth 2-piece",
          mainRune: "Poki",
          secondaryRune: "Beth",
          mainRune2Piece: "2-piece: Defense increases by 12%",
          mainRune4Piece: "4-piece: Shield effect increases by 20%",
          secondaryRuneEffect: "2-piece: Critical Rate increases by 6%",
          description: "Frontline tank variant for tower and long fights."
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
        recommendedStat: "Defense (%)",
        availableStats: [
          "Healing Effectiveness (%)",
          "Critical Rate (%)",
          "Critical Damage (%)",
          "Attack Penetration (%)",
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "Defense % for damage and shields, or Crit Damage % for offense."
      },
      "5": {
        name: "Position 5: Variable Main Stats",
        recommendedStat: "Holy Attribute Damage (%)",
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
        description: "100% of her damage is Holy: this is her only elemental damage multiplier outside talents and the memory card."
      },
      "6": {
        name: "Position 6: Variable Main Stats",
        recommendedStat: "Defense (%)",
        availableStats: [
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ]
      }
    },
    awakenings: {
      priority: "A1 first: every [Soul Hue] stack gained also grants a 67% DEF shield, which is the core of her frontline loop. A4 and A6 are the damage nodes. A3/A5 raise skill levels by 2 and are dupe-gated.",
      keyMilestones: [
        {
          level: 1,
          effect: "Each time 1 stack of [Soul Hue] is successfully gained, gains an additional shield equal to 67% of own DEF.",
          importance: 1,
          importanceLabel: "Very Good"
        },
        {
          level: 2,
          effect: "Own damage over time increases by 29%. When attacked by a unit with [Pending Judgment], damage dealt by that unit is reduced by 51%.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 3,
          effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 4,
          effect: "Holy damage increases by 46%.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 5,
          effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 6,
          effect: "All damage penetrates 45% Holy Resistance.\nWhen Brynhild is attacked, each stack of [Soul Hue] additionally reduces the attack's Resistance Penetration against her by 5.5%. Any reduction below 0% is treated as additional Resistance for Brynhild against that instance of damage.",
          importance: 2,
          importanceLabel: "Good"
        }
      ]
    },
    teamSkill: {
      name: "Combo Skill",
      description: "Own DEF increases by 10%. At the start of battle, every 500 DEF increases own holy damage by 5%, up to 6 times. Requires 2 A.S.A or 2 Holy characters: with her talent DEF alone she caps the +30% Holy damage, so treat the teammate condition as mandatory."
    },
    teamSynergy: {
      goodWith: [
        "Veronica",
        "Odin",
        "Frigga",
        "Medusa",
        "Bors"
      ],
      note: "Her combo skill needs 2 A.S.A or 2 Holy: pair her with Veronica (Holy tank, double shield frontline), Odin or Thor (A.S.A), or Frigga/Sigurd/Athena/Jill (Holy) to switch it on. Bors's team-wide +73% damage window amplifies her ults, and Medusa keeps everyone topped up while Brynhild frontlines."
    }
  };
