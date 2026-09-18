// Gene-Sys: Adam character roster (39 profiled characters).
// Source: live game data from BlueStacks (com.neversoft.cr.erolabs), Patch/_settings
// DES-CBC tables decrypted to pipe-text in D:/GeneSysAdam/output/tables_json.
// Skill descs resolved from SkillTemplateTextData + EN localization + SkillEffectData
// values (tools/skill_desc_resolver.py). Icons from versionshare img_hero bundles (R2).

export const gsaCharacters = [
  {
    "id": "133003100",
    "model": "cr031",
    "slug": "aira",
    "name": "Aira",
    "nameZh": "艾拉",
    "title": "Hot-Blooded Detective",
    "epithet": "Area Suppression, Judgment of Sin",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr031_Icon_Texture.webp",
    "sortOrder": 31,
    "element": {
      "id": 5,
      "name": "Light",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_5.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_5.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150003100",
        "name": "Covering Fire",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr031_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 58% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003110",
        "name": "Judgment Combo",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr031_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 80% Physical DMG to a target.\nOn final hit, inflict Judgment (6s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Judgement"
        ]
      },
      {
        "id": "150003120",
        "name": "Tactical Beacon",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr031_3.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Light ATK Up 20% (6s).\nGrant self ACC Up 10% (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "ACC Up",
          "Light ATK Up"
        ]
      },
      {
        "id": "150003130",
        "name": "Ties of Affection",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr031_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, High chance to grant self ATK SPD Up 20% (6s).",
        "detail": "Rachel is always on her mind; the thought of not wanting to make Rachel worry makes her stronger.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, High chance to grant self ATK SPD Up 25% (6s).",
          "detail": null
        }
      },
      {
        "id": "150003150",
        "name": "Tactical Dispatch",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr031_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Energy Damage Taken Decreased 6%.",
        "detail": "She excels at adapting quickly to changing situations, fully demonstrating a detective's on-the-spot judgment.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Energy Damage Taken Decreased 6%.",
          "detail": null
        }
      },
      {
        "id": "150003141",
        "name": "Location Lockdown",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr031_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Damage Taken Decreased 7% (24s).\nDeal three hits of 127% Physical DMG to up to 3 targets within the forward area.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Hot-Blooded Detective",
      "birthday": "4 / 1",
      "age": "23",
      "height": "166",
      "weight": "56",
      "interest": "Eastern crime dramas",
      "personality": "Impulsive and acts on instinct, yet driven by a strong sense of justice.",
      "resumeParas": [
        "She and Rachel are partners who often work on cases together, and they have excellent chemistry as a team. Although her tendency to act impulsively without thinking gives Rachel a headache, her strong sense of justice has also earned Rachel's complete trust. She has great confidence in her physical stamina, and most criminals are unable to escape her pursuit. She is also a huge fan of Eastern crime dramas."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133003200",
    "model": "cr032",
    "slug": "denice",
    "name": "Denice",
    "nameZh": "丹妮絲",
    "title": "Master Strategist",
    "epithet": "Silent Hunter, Stone-Piercing Bullet",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr032_Icon_Texture.webp",
    "sortOrder": 32,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 5,
      "name": "Breaker",
      "color": "#9433EA",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/master_2.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150003200",
        "name": "Rapid Fire",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal five hits of 11.5% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003210",
        "name": "Suppressing Fire",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr032_2.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes Petrify Medium targets, dealing seven hits of 24% Energy DMG.\nOn final hit, if the target has the Petrify status, trigger an Shatter S Pursuit.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Shatter"
        ]
      },
      {
        "id": "150003220",
        "name": "Threat Designation",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal four hits of 36.5% Energy DMG to a Random target.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003230",
        "name": "Biological Weakness",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, High chance to inflict Physical DMG Down 8% (6s) on the target.",
        "detail": "Purigen provides extensive knowledge of human anatomy, offering many unique methods for quickly disrupting enemy actions.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, High chance to inflict Physical DMG Down 10% (6s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150003250",
        "name": "Energy Drink",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self ATK SPD Up 15%.",
        "detail": "An energy drink developed by Purigen, it helps her maintain peak performance even under high-pressure assignments.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members ATK SPD Up 15%.",
          "detail": null
        }
      },
      {
        "id": "150003241",
        "name": "Piercing Blast",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Earth ATK Up 9% (24s).\nDeal fifteen hits of 44.5% Energy DMG to a Random target.\nOn final hit, grant Attack Up 10% (10s) to self.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Master Strategist",
      "birthday": "11 / 22",
      "age": "28",
      "height": "168",
      "weight": "60",
      "interest": "Trying new drinks, collecting soil and mineral specimens",
      "personality": "Low-key and quiet, highly observant, and deeply responsible.",
      "resumeParas": [
        "Denice is a former member of the Tobia Special Forces assault team. She gained recognition during a joint operation for her exceptional ability to protect VIPs and was later recruited by Rosian after her retirement. Although she specializes in tactical movement and firearms, she is reserved by nature and rarely shows her emotions, earning a reputation for making precise decisions under pressure. She always writes down her work plans in a notebook, regularly reviewing and checking them as needed."
      ]
    },
    "stats": {
      "atkRange": "600",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133003300",
    "model": "cr033",
    "slug": "vera",
    "name": "Vera",
    "nameZh": "維菈",
    "title": "Blood Moon Sentinel",
    "epithet": "Stunning Smash, Barrier Fortification",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr033_Icon_Texture.webp",
    "sortOrder": 33,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 1,
      "name": "Guardian",
      "color": "#957C7A",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/guard_2.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150003300",
        "name": "Collision Strike",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "18s",
        "desc": "Deal 100% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003310",
        "name": "Formation Shatter",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr033_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal two hits of 200% Physical DMG to a target.\nOn final hit, inflict Stun (2s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Stun"
        ]
      },
      {
        "id": "150003320",
        "name": "Defensive Tenacity",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Grants Regeneration to self, restoring 104% HP over 6s.\nGrant self Block Up 4% (6s).",
        "detail": null,
        "cooldown": "4s",
        "cost": null,
        "statuses": [
          "Heal",
          "Block Up"
        ]
      },
      {
        "id": "150003330",
        "name": "Indomitable Iron Will",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "When taking damage, Low chance to restore 66% HP to self.\nThis effect can only trigger once every 6 seconds.",
        "detail": "Tempered by the trials of the police force, Vera stands stronger than ever. Driven by an intense sense of duty, she has vowed to be an unbreakable shield for her allies.",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "When taking damage, Low chance to restore 92% HP to self.\nThis effect can only trigger once every 6 seconds.",
          "detail": null
        }
      },
      {
        "id": "150003350",
        "name": "Wall of Valor",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self DMG Block Up 7%.",
        "detail": "She never backs down easily, and always insists on protecting her comrades.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members DMG Block Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150003341",
        "name": "Fortified Bastion",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Water Res Up 9% (24s).\nGrant self Block Up 30% (24s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Blood Moon Sentinel",
      "birthday": "1 / 8",
      "age": "35",
      "height": "167",
      "weight": "58",
      "interest": "Fitness",
      "personality": "Calm, steady, resilient, and strong-willed.",
      "resumeParas": [
        "An orphan from a small southern island nation, she lost her parents while they were being smuggled into Tobia. She ended up homeless, was forced into child labor, and was abused by drug lords. When the cartel was busted, she was sent to live and grow up at House of Saint Violet. As an adult, she became a police officer, but soon after, the \"Blood Moon Night\" incident occurred. She rushed to the House of Saint Violet after receiving a report, only to find that many of her friends had been killed. Overwhelmed with guilt that she, as a police officer, had been powerless to stop the tragedy, she resigned from her post and began to train relentlessly. Vera started searching for the other survivors from that night, vowing to personally protect her friends from the House of Saint Violet."
      ]
    },
    "stats": {
      "atkRange": "130",
      "normalAttackGCD": "18000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "4000",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133003400",
    "model": "cr034",
    "slug": "mudia",
    "name": "Mudia",
    "nameZh": "穆蒂雅",
    "title": "Graffiti Brawler",
    "epithet": "Bloodthirsty Lash, Assault on Flesh",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr034_Icon_Texture.webp",
    "sortOrder": 34,
    "element": {
      "id": 6,
      "name": "Dark",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_6.webp"
    },
    "job": {
      "id": 1,
      "name": "Guardian",
      "color": "#957C7A",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/guard_6.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150003400",
        "name": "Whiplash",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr034_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal two hits of 29% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003410",
        "name": "Vicious Bloodrush",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr034_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 100% Physical DMG to a target.\nOn final hit, restore 380% HP to self.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Heal"
        ]
      },
      {
        "id": "150003420",
        "name": "Savage Sideswipe",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr034_3.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal two hits of 70% Physical DMG to a target.\nOn final hit, High chance to inflict Bleed (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Bleed"
        ]
      },
      {
        "id": "150003430",
        "name": "Street Survival",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr034_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, restore 30% HP to self.",
        "detail": "While surviving on the streets, she learned some simple first aid, enabling her to quickly patch up minor wounds on the spot.",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "On basic attack hit, restore 42% HP to self.",
          "detail": null
        }
      },
      {
        "id": "150003450",
        "name": "Guarding Protector",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr034_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Max HP Up 4.5%.",
        "detail": "She has extremely strong intuition and reflexes, which become even more impenetrable when she's pushed to the brink.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Max HP Up 4.5%.",
          "detail": null
        }
      },
      {
        "id": "150003441",
        "name": "Dark Shadow Bloodline",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr034_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self ATK SPD Up 20% (24s).\nDeal nine hits of 40% Physical DMG to a target.\nOn hit, restore 180% HP to self.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Graffiti Brawler",
      "birthday": "3 / 27",
      "age": "28",
      "height": "170",
      "weight": "58",
      "interest": "Tagging walls, watching underground fights",
      "personality": "Hot-headed and blunt; hates being looked down on",
      "resumeParas": [
        "In her youth, her rebellious nature led her to leave home and make a life on her own. She drifted between various gangs, taking work as a hired enforcer. After countless brutal street fights and brushes with death, she forged formidable combat skills and an unyielding will. During that time, graffiti became her only outlet for releasing stress and emotions. Her signature tags and symbols can be found on walls at the city's edge and on the concrete corners of old alleyways."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "4000",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133003500",
    "model": "cr035",
    "slug": "yulia",
    "name": "Yulia",
    "nameZh": "尤莉亞",
    "title": "Tonfa Brawler",
    "epithet": "Sweeping Thrust, Obsidian Brand",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr035_Icon_Texture.webp",
    "sortOrder": 35,
    "element": {
      "id": 6,
      "name": "Dark",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_6.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_6.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150003500",
        "name": "Intimidating Strike",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 58% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003510",
        "name": "Safe Distance",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr035_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal four hits of 54% Energy DMG to a target.\nOn hit, grant self Evasion UP 10% (6s).\nOn final hit, High chance to inflict Ebon (6s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Ebon",
          "Evasion UP"
        ]
      },
      {
        "id": "150003520",
        "name": "Whirling Reaper",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal two hits of 80% Energy DMG to a target.\nOn final hit, inflict Light ATK Down 5% (6s) on the target.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Light ATK Down"
        ]
      },
      {
        "id": "150003530",
        "name": "Decisive Triumph",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Medium chance to inflict Light ATK Down 8% (6s) on the target.",
        "detail": "\"To hesitate is to lose everything.\" This is the firm belief she holds close to her heart.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Medium chance to inflict Light ATK Down 10% (8s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150003550",
        "name": "Spoils of Victory",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Dark ATK Up 6%.",
        "detail": "Each attack is fiercer than the last—a testament to Yulia’s relentless training.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Dark ATK Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150003541",
        "name": "Savage Cyclone",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Dark ATK Up 9% (24s).\nDeal 615% Energy DMG to a target.\nOn hit, inflict Dark Res Down 5% (6s) on the target.\nOn hit, inflict Ebon (6s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Tonfa Brawler",
      "birthday": "10 / 26",
      "age": "23",
      "height": "165",
      "weight": "54",
      "interest": "Sparring and defensive drills",
      "personality": "Decisive, cautious, unyielding, and confident, willing to do whatever it takes to achieve her goals.",
      "resumeParas": [
        "Born in the slums, her older brother sold her to the Rosian Brotherhood to cover his gambling debts. She was taken to an escort agency to serve clients, but she attempted to escape by severely injuring a customer. She was later caught and brought back, but her fierce resistance caught the eye of a mid-ranking member, who took her under his wing to be trained."
      ]
    },
    "stats": {
      "atkRange": "130",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133003600",
    "model": "cr036",
    "slug": "lin-lan",
    "name": "Lin Lan",
    "nameZh": "凌嵐",
    "title": "Azure Gale Phantom",
    "epithet": "Verdant Dance, Refreshing Breeze",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr036_Icon_Texture.webp",
    "sortOrder": 36,
    "element": {
      "id": 3,
      "name": "Wind",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_3.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_3.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150003600",
        "name": "Jade Flash",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 58% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003610",
        "name": "Cerulean Shroud",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr036_2.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes Guardian Type party members, applying a 1785% Shield (8s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Shield"
        ]
      },
      {
        "id": "150003620",
        "name": "Shuriken Gale Shield",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes Guardian Type party members, granting Basic Attack Damage Taken Decreased 35% (10s).\nPrioritizes Guardian Type party members, granting Block Up 10% (10s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Block Up",
          "Basic Attack Damage Taken Decreased"
        ]
      },
      {
        "id": "150003630",
        "name": "Windborne Alliance",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Medium chance to apply a 160% Shield (6s) to Guardian Type party members first.\nThis effect can only trigger once every 6 seconds.",
        "detail": "She is skilled at uniting and encouraging her teammates, filling them with confidence.",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "Shield"
        ],
        "awakened": {
          "desc": "On basic attack hit, Medium chance to apply a 224% Shield (6s) to Guardian Type party members first.\nThis effect can only trigger once every 6 seconds.",
          "detail": null
        }
      },
      {
        "id": "150003650",
        "name": "Swift as the Wind",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self ATK SPD Up 15%.",
        "detail": "She loves fighting alongside her comrades. The lively atmosphere she creates is like a strong wind driving the team forward.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members ATK SPD Up 15%.",
          "detail": null
        }
      },
      {
        "id": "150003641",
        "name": "Ninefold Cyclone",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Attack Up 9% (24s).\nPrioritizes Guardian Type party members, applying a 3700% Shield (10s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Azure Gale Phantom",
      "birthday": "12 / 12",
      "age": "22",
      "height": "163",
      "weight": "45",
      "interest": "Collecting wind chimes, Tanghulu",
      "personality": "Outgoing and optimistic, a go-getter who always inspires others to move forward",
      "resumeParas": [
        "Lin Lan grew up in the slums, where she first showed her potential while protecting her neighbors and friends. She came into contact with the Azure Dragon Triad during a street brawl, where she displayed exceptional combat instincts and adaptability, leading to her recruitment into the gang. She has a cheerful and lively personality and excels at supporting her comrades in battle. Her desire to protect her allies is extremely strong."
      ]
    },
    "stats": {
      "atkRange": "360",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133003700",
    "model": "cr037",
    "slug": "takajou-ranka",
    "name": "Takajou Ranka",
    "nameZh": "高城 嵐花",
    "title": "Rebel Wildflower",
    "epithet": "Brawler's Pride, No Small Talk",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr037_Icon_Texture.webp",
    "sortOrder": 37,
    "element": {
      "id": 3,
      "name": "Wind",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_3.webp"
    },
    "job": {
      "id": 1,
      "name": "Guardian",
      "color": "#957C7A",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/guard_3.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150003700",
        "name": "Best Regards",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr037_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 58% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003710",
        "name": "Blowout Victory",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr037_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 130% Energy DMG to a target.\nOn final hit, inflict Silence (3s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Silence"
        ]
      },
      {
        "id": "150003720",
        "name": "Love Unto Death",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr037_3.webp",
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Restore 466% HP to self.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Heal"
        ]
      },
      {
        "id": "150003730",
        "name": "Declaration of Love",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr037_5.webp",
        "type": "Passive",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "When taking damage, Medium chance to restore 165% HP to self.\nThis effect can only trigger once every 15 seconds.",
        "detail": "When taking a heavy blow, she thinks of that special person in her heart. \"I'll never fall!\"",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "When taking damage, Medium chance to restore 235% HP to self.\nThis effect can only trigger once every 15 seconds.",
          "detail": null
        }
      },
      {
        "id": "150003750",
        "name": "Thank You",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr037_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Earth Res Up 6%.",
        "detail": "I'm the luckiest fool alive! — Gratitude for everyone who ever lent a hand transforms pure, innocent passion into an intangible shield.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Earth Res Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150003741",
        "name": "Demonic Void",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr037_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Healing Up 9% (24s).\nDeal five hits of 117% Energy DMG to up to 2 targets within the forward area.\nOn final hit, inflict Silence (4s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Rebel Wildflower",
      "birthday": "10 / 3",
      "age": "20",
      "height": "167",
      "weight": "48",
      "interest": "Cruising around town, brawling",
      "personality": "Arrogant, proud, willful, and deliberately provocative",
      "resumeParas": [
        "Takajou Ranka comes from an ancient family and showed a rebellious streak from an early age, leaving home before coming of age to spend her days on the streets with a group of hoodlums. The elders of her family, having maintained long-standing ties with the Moonflower Clan, secretly pulled strings to have her join the group. This arrangement allowed them to observe and protect her from nearby. After joining the Moonflower Clan, she began to push all sorts of boundaries to carve out her own status. Through her extreme actions, she seeks to find the meaning of her existence amid her inner confusion."
      ]
    },
    "stats": {
      "atkRange": "130",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "4000",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133003800",
    "model": "cr038",
    "slug": "katya",
    "name": "Katya",
    "nameZh": "卡緹亞",
    "title": "Bomber Matriarch",
    "epithet": "Suppression Fire, Glacial Shrapnel",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr038_Icon_Texture.webp",
    "sortOrder": 38,
    "element": {
      "id": 4,
      "name": "Water",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_4.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_4.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150003800",
        "name": "Firepower!",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr038_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "16.001s",
        "desc": "Deal 87% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003810",
        "name": "High-Pressure Airburst",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr038_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal two hits of 87% Physical DMG to up to 3 targets within the forward area.\nOn final hit, if the target has the Freeze status, trigger an Ice Break S Pursuit.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Ice Break"
        ]
      },
      {
        "id": "150003820",
        "name": "Torrential Burst",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr038_3.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 25% Physical DMG to up to 3 targets within the forward area.",
        "detail": null,
        "cooldown": "4s",
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003830",
        "name": "Intimidating Nature",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr038_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Medium chance to inflict ACC Down 6% (6s) on the target.",
        "detail": "She excels at bluffing to create advantageous situations, often using bursts of sound and bright flashes to distract her enemies.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Medium chance to inflict ACC Down 8% (6s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150003850",
        "name": "Ballistic Expertise",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr038_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Water ATK Up 6%.",
        "detail": "In her spare time, she tunes and maintain her grenade launcher, always keeping her weapon in top condition.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Water ATK Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150003841",
        "name": "Explosive Flurry Burst",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr038_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Water ATK Up 9% (24s).\nDeal five hits of 21% Physical DMG to all targets.\nOn final hit, if the target has the Freeze status, trigger an Ice Break S Pursuit.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Bomber Matriarch",
      "birthday": "7 / 6",
      "age": "28",
      "height": "168",
      "weight": "60",
      "interest": "Cooking and baking, maintaining and organizing everything, drinking beer",
      "personality": "Calm, strong, gentle; excels at caring for others and proactively manages all the small details the team needs",
      "resumeParas": [
        "Katya was born in a volatile region and trained in both demolitions and emergency medical care. Her countless missions on the battlefield, providing combat first aid, have forged a personality that is both unyielding and gentle. She joined the Carducci Family through her husband. After his death, she poured all her love and sense of duty into the other family members. She now manages their supplies and healthcare, and often comforts her comrades with homemade baked goods. Everyone calls Katya \"Mama\" or \"Bomber Matriarch.\". She also has a refrigerator dedicated entirely to beer."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "16001",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8000",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "2500"
    }
  },
  {
    "id": "133003900",
    "model": "cr039",
    "slug": "thalia",
    "name": "Thalia",
    "nameZh": "塔莉亞",
    "title": "Vulpine Reaper",
    "epithet": "War Phantom, Suppressive Snipe",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr039_Icon_Texture.webp",
    "sortOrder": 39,
    "element": {
      "id": 4,
      "name": "Water",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_4.webp"
    },
    "job": {
      "id": 5,
      "name": "Breaker",
      "color": "#9433EA",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/master_4.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150003900",
        "name": "Enemy Engaged!",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr039_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "16.001s",
        "desc": "Deal 74% Energy DMG to a Random target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003910",
        "name": "Armor-Piercing Suppression",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr039_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 212% Energy DMG to a highest ATK target.\nOn hit, inflict Physical DMG Down 5% (6s) on the target.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Physical DMG Down"
        ]
      },
      {
        "id": "150003920",
        "name": "Disruption Suppression",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr039_3.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal two hits of 50% Energy DMG to a highest ATK target.\nOn final hit, inflict Basic Damage Down 20% (6s) on the target.",
        "detail": null,
        "cooldown": "4s",
        "cost": null,
        "statuses": []
      },
      {
        "id": "150003930",
        "name": "Battlefield Analysis",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr039_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Medium chance to grant self Basic Damage Up 40% (6s).",
        "detail": "She observes every movement on the battlefield, striking mercilessly the moment she finds a weak point.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Medium chance to grant self Basic Damage Up 50% (6s).",
          "detail": null
        }
      },
      {
        "id": "150003950",
        "name": "Sniping Rhythm",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr039_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self ACC Up 5%.",
        "detail": "The battlefield is ever-changing. One must maintain their own combat rhythm to avoid unnecessary panic.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members ACC Up 5%.",
          "detail": null
        }
      },
      {
        "id": "150003941",
        "name": "Dynamic Suppression",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr039_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self ATK SPD Up 20% (24s).\nDeal three hits of 174% Energy DMG to a highest ATK target.\nOn final hit, inflict Knockdown (1s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Vulpine Reaper",
      "birthday": "6 / 18",
      "age": "29",
      "height": "174",
      "weight": "62",
      "interest": "Being alone, observing details in the surroundings",
      "personality": "Quiet, reserved, and self-assured; a lone wolf who takes pleasure in gunfire and the sight of blood",
      "resumeParas": [
        "Having lost her parents to the war, she grew up alone in a harsh, war-torn environment. Facing countless dangers, she developed a habit of coldly observing her surroundings in order to survive. By chance, she once came into possession of a hunting rifle and killed an enemy, only then did she discover her natural talent for sniping, and found unexpected satisfaction and pleasure in taking lives with a gun. Because of this, she joined Garmr to hone her advanced sniping and combat skills, and has since distinguished herself with outstanding achievements in numerous battles."
      ]
    },
    "stats": {
      "atkRange": "600",
      "normalAttackGCD": "16001",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004000",
    "model": "cr040",
    "slug": "belle",
    "name": "Belle",
    "nameZh": "貝兒",
    "title": "Spacey Sweetheart",
    "epithet": "Adorable Healing, Guardian Heart",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr040_Icon_Texture.webp",
    "sortOrder": 40,
    "element": {
      "id": 5,
      "name": "Light",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_5.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_5.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150004000",
        "name": "Panicked Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr040_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 58% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004010",
        "name": "Hasty Bandage",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr040_2.webp",
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Restore 800% HP to lowest HP percentage party members.",
        "detail": null,
        "cooldown": "8s",
        "cost": 1,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "Restore 1000% HP to lowest HP percentage party members.",
          "detail": null
        }
      },
      {
        "id": "150004020",
        "name": "Tender Hug",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr040_3.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant lowest HP percentage party members Healing Received Up 10% (8s).\nGrant lowest HP percentage party members Dark Res Up 10% (8s).",
        "detail": null,
        "cooldown": "5s",
        "cost": null,
        "statuses": [
          "Healing Received Up",
          "Dark Res Up"
        ],
        "awakened": {
          "desc": "Grant lowest HP percentage party members Healing Received Up 10% (10s).\nGrant lowest HP percentage party members Dark Res Up 10% (10s).",
          "detail": null
        }
      },
      {
        "id": "150004030",
        "name": "Surefire Success!",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr040_5.webp",
        "type": "Passive",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "When healing, Extremely Low chance to grant self Attack Up 8% (6s).",
        "detail": "Despite her frequent blunders, Belle’s words of encouragement fill her allies with a renewed sense of vigor.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "When healing, Extremely Low chance to grant self Attack Up 10% (6s).",
          "detail": null
        }
      },
      {
        "id": "150004050",
        "name": "That Was Close!",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr040_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Evasion UP 4%.",
        "detail": "She always manages to trip or fall at the most critical moments, dodging enemy attacks by sheer coincidence. This unconscious luck gives her an unusually high survival rate on the battlefield!",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Evasion UP 4%.",
          "detail": null
        }
      },
      {
        "id": "150004041",
        "name": "Clumsy Healing Miracle",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr040_4.webp",
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Evasion UP 5% (24s).\nRestore 1540% HP to lowest HP percentage party members.",
        "detail": null,
        "cooldown": "15s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Spacey Sweetheart",
      "birthday": "9 / 20",
      "age": "22",
      "height": "158",
      "weight": "52",
      "interest": "Shopping sprees, cooking, masturbating to romance novels",
      "personality": "Airheaded and carefree, a bit clueless; loves taking care of others, always willing to help and take on any task without complaint.",
      "resumeParas": [
        "A junior assistant at HL Entertainment, assigned by Anton to help Adele and Theodore with miscellaneous tasks. Her curvaceous figure frequently attracts attention, though she seems entirely oblivious to it herself. While conscientious about her work, her airheaded nature often leads to clumsy mistakes or accidental wardrobe malfunctions. She can drive and is highly skilled behind the wheel."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004100",
    "model": "cr041",
    "slug": "adele",
    "name": "Adele",
    "nameZh": "艾黛爾",
    "title": "Shadow Dagger",
    "epithet": "Fleeting Shadow, Searing Blade",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr041_Icon_Texture.webp",
    "sortOrder": 41,
    "element": {
      "id": 1,
      "name": "Fire",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_1.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_1.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150004100",
        "name": "Sky Cleaver",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr041_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "7.5s",
        "desc": "Deal 58% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004110",
        "name": "Ember Waltz",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr041_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 80% Energy DMG to a target.\nOn final hit, inflict Wind ATK Down 5% (6s) on the target.\nOn final hit, inflict Burn S (6s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Burn",
          "Wind ATK Down"
        ],
        "awakened": {
          "desc": "Deal three hits of 125% Energy DMG to a target.\nOn final hit, inflict Wind ATK Down 7.5% (6s) on the target.\nOn final hit, inflict Burn S (6s).",
          "detail": null
        }
      },
      {
        "id": "150004120",
        "name": "Galeblade Mirage",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr041_3.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Attack Up 20% (6s).\nGrant self ACC Up 10% (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Attack Up",
          "ACC Up"
        ],
        "awakened": {
          "desc": "Grant self Attack Up 20% (10s).\nGrant self ACC Up 10% (10s).",
          "detail": null
        }
      },
      {
        "id": "150004130",
        "name": "Intelligence Network",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr041_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Low chance to inflict Wind ATK Down 8% (6s) on the target.",
        "detail": "When faced with secrets that cut too close to home, anyone is liable to lose their cool.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Low chance to inflict Wind ATK Down 10% (6s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150004150",
        "name": "Power, Speed, and Grace",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr041_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Energy DMG Up 6%.",
        "detail": "Precise, swift attacks that also showcase the beautiful aesthetics of the human form.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Energy DMG Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150004141",
        "name": "Blade Hailstorm",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr041_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Skill Damage Up 11% (24s).\nDeal two hits of 330% Energy DMG to a target.\nOn the first hit, inflict ACC Down 10% (12s) on the target.\nOn the first hit, inflict Skill Damage Down 15% (12s) on the target.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Shadow Dagger",
      "birthday": "8 / 28",
      "age": "25",
      "height": "172",
      "weight": "51",
      "interest": "Fashion, yoga, collecting fine lifestyle goods for women",
      "personality": "Reserved and decisive; calm, competitive, rational, and steadfast. Although she may seem distant, she is actually gentle at heart.",
      "resumeParas": [
        "Special Operations Manager in the Human Resources Department at HL Entertainment, she is mainly responsible for matters related to the agency and its female artists. Secretly, she is an undercover agent for the \"Hell's Light\" organization, carrying out missions under direct orders from its leader."
      ]
    },
    "stats": {
      "atkRange": "360",
      "normalAttackGCD": "7500",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004200",
    "model": "cr042",
    "slug": "theodore",
    "name": "Theodore",
    "nameZh": "西奧多",
    "title": "Argent Wolf",
    "epithet": "Gunblade Onslaught, Infernal Detonation",
    "sex": "Male",
    "inGacha": false,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr042_Icon_Texture.webp",
    "sortOrder": 42,
    "element": {
      "id": 1,
      "name": "Fire",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_1.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_1.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150004200",
        "name": "Chilling Cleave",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr042_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal two hits of 29% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004210",
        "name": "Chasing Shadows",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr042_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal four hits of 27% Physical DMG to up to 2 targets within the forward area.\nOn hit, inflict Fire Res Down 5% (6s) on the target.\nOn final hit, if the target has the Burn status, trigger an Detonate S Pursuit.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Detonate",
          "Fire Res Down"
        ],
        "awakened": {
          "desc": "Deal four hits of 48% Physical DMG to up to 2 targets within the forward area.\nOn hit, inflict Fire Res Down 5% (6s) on the target.\nOn final hit, if the target has the Burn status, trigger an Detonate S Pursuit.",
          "detail": null
        }
      },
      {
        "id": "150004220",
        "name": "Decisive Gunshot",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr042_3.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal two hits of 80% Physical DMG to a target.\nOn hit, grant self Crit Chance Up 5% (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Crit Chance Up"
        ],
        "awakened": {
          "desc": "Deal two hits of 115% Physical DMG to a target.\nOn hit, grant self Crit Chance Up 5% (6s).",
          "detail": null
        }
      },
      {
        "id": "150004230",
        "name": "Wall of Dominion",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr042_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, High chance to inflict Fire Res Down 6% (6s) on the target.",
        "detail": "His broad physique provides both a sense of security and a powerful, overwhelming presence.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, High chance to inflict Fire Res Down 8% (6s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150004250",
        "name": "Silent Wolf",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr042_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical Damage Taken Decreased 6%.",
        "detail": "Her silence and focus are all in anticipation of the chance to sink her teeth into her enemy's throat.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Physical Damage Taken Decreased 6%.",
          "detail": null
        }
      },
      {
        "id": "150004241",
        "name": "Hell's Concerto",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr042_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Fire ATK Up 9% (24s).\nDeal eight hits of 47.5% Physical DMG to up to 3 targets within the forward area.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Argent Wolf",
      "birthday": "11 / 15",
      "age": "27",
      "height": "190",
      "weight": "91",
      "interest": "Physical training, spacing out (mental training)",
      "personality": "Kind and gentle by nature, but trauma has made her somewhat distant toward others.",
      "resumeParas": [
        "He is currently a consultant at HL Entertainment, assisting Adele in managing the company's female artists. He was once trained in Syssalus by the local liberation organization \"Hell's Light,\" where he earned the title \"Argent Wolf.\""
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004300",
    "model": "cr043",
    "slug": "ruo-lan",
    "name": "Ruo Lan",
    "nameZh": "若蘭",
    "title": "Fiscal Fixer",
    "epithet": "Monolith Alliance, Tactical Wit",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr043_Icon_Texture.webp",
    "sortOrder": 43,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_2.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150004300",
        "name": "Targeted Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr043_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal three hits of 25% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004310",
        "name": "Smokescreen",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr043_2.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes 2 Earth Type party members, granting Earth ATK Up 20% (10s).\nPrioritizes 2 Earth Type party members, granting Evasion UP 10% (10s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Evasion UP",
          "Earth ATK Up"
        ],
        "awakened": {
          "desc": "Prioritizes 2 Earth Type party members, granting Earth ATK Up 30% (10s).\nPrioritizes 2 Earth Type party members, granting Evasion UP 15% (10s).",
          "detail": null
        }
      },
      {
        "id": "150004320",
        "name": "Suppressing Fire",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr043_3.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal five hits of 42% Physical DMG to a target.\nOn the first hit, inflict Attack Down 10% (8s) on the target.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Attack Down"
        ],
        "awakened": {
          "desc": "Deal five hits of 50% Physical DMG to a target.\nOn the first hit, inflict Attack Down 10% (8s) on the target.\nOn the first hit, inflict Evasion Down 7% (8s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150004330",
        "name": "Field Maintenance",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr043_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "When active skills take effect on Earth Type allies, grant them Damage Up 5% (6s).",
        "detail": "Proactively helps teammates maintain and fine-tune their weapons, preventing malfunctions when they're needed most.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "When active skills take effect on Earth Type allies, grant them Damage Up 7% (6s).\nGrant all party members ATK SPD Up 8%.",
          "detail": null
        }
      },
      {
        "id": "150004350",
        "name": "Iron Wall",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr043_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical Damage Taken Decreased 8%.",
        "detail": "When she has free time, she inspects the Azure Dragon Triad's headquarters to see if any facilities need upgrading.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Physical Damage Taken Decreased 8%.",
          "detail": null
        }
      },
      {
        "id": "150004341",
        "name": "Improvised Outpost",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr043_4.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self ATK SPD Up 25% (24s).\nPrioritizes 3 Earth Type party members, applying a 1440% Shield (10s).\nPrioritizes 3 Earth Type party members, granting Attack Up 20% (10s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Fiscal Fixer",
      "birthday": "4 / 23",
      "age": "28",
      "height": "163",
      "weight": "42",
      "interest": "Following the stock market",
      "personality": "Shrewd and capable, calculating, gives off an aloof vibe but still longs for love.",
      "resumeParas": [
        "She is the money laundering and investment expert in the Azure Dragon Triad. As early as high school, she showed a natural talent and keen eye for investing, achieving great success and accumulating a small fortune. However, she later encountered a stock market crash that left her penniless and destroyed her family. Alone and helpless, she was found by the Azure Dragon Triad, from whom she learned that the crash had been orchestrated by a powerful financial consortium. To get her revenge, she decided to cooperate with the Azure Dragon Triad and retaliate against the consortium that caused her ruin."
      ]
    },
    "stats": {
      "atkRange": "360",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004400",
    "model": "cr044",
    "slug": "amber",
    "name": "Amber",
    "nameZh": "安柏",
    "title": "Elegant Croupier",
    "epithet": "Infinite Stakes, Body of Gold",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr044_Icon_Texture.webp",
    "sortOrder": 44,
    "element": {
      "id": 6,
      "name": "Dark",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_6.webp"
    },
    "job": {
      "id": 1,
      "name": "Guardian",
      "color": "#957C7A",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/guard_6.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150004400",
        "name": "Cardistry",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 100% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004410",
        "name": "Scarlet Purification",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Restore 1000% HP to self.\nCleanse debuffs from self.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Heal",
          "Dispel Debuffs"
        ],
        "awakened": {
          "desc": "Restore 1640% HP to self.\nCleanse debuffs from self.",
          "detail": null
        }
      },
      {
        "id": "150004420",
        "name": "Card Array",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Apply a 1920% Shield (6s) to self.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Shield"
        ],
        "awakened": {
          "desc": "Apply a 2240% Shield (6s) to self.\nWhile this Shield is active, grant the holder Light Res Up 10%.",
          "detail": null
        }
      },
      {
        "id": "150004430",
        "name": "All-in",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Upon gaining a Shield, grant self the Amplify effect: \"When taking damage, grant 0% (6s) to a random party member\" (6s).\nThe Amplify effect can only trigger once every 6 seconds.",
        "detail": "Amber's confident attitude means she never flinches, even when injured. Instead, her opponents are affected by this fearless aura, and their efficiency plummets.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Upon gaining a Shield, grant self the Amplify effect: \"When taking damage, grant 0% (6s) to a random party member\" (6s).\nThe Amplify effect can only trigger once every 6 seconds.\nGrant all party members Healing Received Up 12%.",
          "detail": null
        }
      },
      {
        "id": "150004450",
        "name": "Straight Flush",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Max HP Up 10%.",
        "detail": "Amber's elegance and confidence let her handle any situation at the card table with grace.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Max HP Up 10%.\nIn PVP mode, grant self Evasion UP 5%.",
          "detail": null
        }
      },
      {
        "id": "150004441",
        "name": "Ace's Barrier",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Max HP Up 10% (24s).\nApply a 2900% Shield (10s) to self.\nGrant self Phy Damage Reflect 40% (12s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Elegant Croupier",
      "birthday": "5 / 8",
      "age": "28",
      "height": "168",
      "weight": "54",
      "interest": "Spa & Self-care",
      "personality": "Confident, elegant, charming, loyal, never forgets a favor, distrustful of men.",
      "resumeParas": [
        "She was originally a bunny girl dealer at a Carducci casino, but was infected during the Great Plague outbreak. After Lola saved her with a vaccine, she awakened the ability to manipulate dark energy. Already a popular top bunny girl at the casino, her newfound powers earned her the recognition of Simon Carducci, who then put her in charge of managing the casino."
      ]
    },
    "stats": {
      "atkRange": "60",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "4000",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004500",
    "model": "cr045",
    "slug": "kurosawa-shion",
    "name": "Kurosawa Shion",
    "nameZh": "黑澤 詩音",
    "title": "Meta-Research Freak",
    "epithet": "Perpetual Motion Idea, Potion Boost",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr045_Icon_Texture.webp",
    "sortOrder": 45,
    "element": {
      "id": 6,
      "name": "Dark",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_6.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_6.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150004500",
        "name": "Phantasmal Combustion",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 67% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004510",
        "name": "Shadow Energy Shroud",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant all party members Basic Damage Up 15% (8s).\nThis effect can stack up to 3 times.\nGrant all party members Dark ATK Up 6% (8s).\nThis effect can stack up to 3 times.",
        "detail": null,
        "cooldown": "8s",
        "cost": 1,
        "statuses": [
          "Dark ATK Up",
          "Basic Damage Up"
        ],
        "awakened": {
          "desc": "Grant all party members Basic Damage Up 22% (8s).\nThis effect can stack up to 3 times.\nGrant all party members Dark ATK Up 8% (8s).\nThis effect can stack up to 3 times.",
          "detail": null
        }
      },
      {
        "id": "150004520",
        "name": "Dark Energy Recharge",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Increase the party's EN by 4.5.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "EN Gain Up"
        ],
        "awakened": {
          "desc": "Increase the party's EN by 6.2.",
          "detail": null
        }
      },
      {
        "id": "150004530",
        "name": "Ethereal Calm",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, increase the team's EN by 0.6.",
        "detail": "When she calms down, it's as if the chaos of the outside world can no longer affect her.",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "EN Gain Up"
        ],
        "awakened": {
          "desc": "On basic attack hit, increase the team's EN by 0.6.\nGrant all party members Crit Chance Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150004550",
        "name": "Abyssal Allure",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Dark ATK Up 7%.",
        "detail": "Her Esper ability can detect the fear in her enemies' hearts on the battlefield, which she then amplifies to disrupt their emotions.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Dark ATK Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150004541",
        "name": "Umbral Infusion",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Light Res Up 10% (24s).\nGrant all party members EN Gain Up 45% (24s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Meta-Research Freak",
      "birthday": "6 / 6",
      "age": "32",
      "height": "167",
      "weight": "62",
      "interest": "Research, research, research, research, research (it's the best!)",
      "personality": "Gloomy and obsessed with research; dislikes normies and fools",
      "resumeParas": [
        "A member of Syssalus's secretive organization, \"Hell's Light,\" she is also Lucien's attending physician. She is completely obsessed with research, to the point where she won't hesitate to experiment on her own body or the people around her. Despite her audacity in research, she is cowardly and gloomy by nature. When she speaks, she tends to stutter and will immediately apologize when scolded (though not sincerely). However, when discussing topics she's passionate about, she can talk endlessly. She dislikes sunlight, eating, and going outside, and especially hates traveling on business trips with Lucien. While she isn't much of a fighter, her research has made significant contributions to Hell's Light."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004600",
    "model": "cr046",
    "slug": "chloe",
    "name": "Chloe",
    "nameZh": "克蘿伊",
    "title": "Sacrificial Lamb",
    "epithet": "Masochistic Physique, Heartbeat of Pain",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr046_Icon_Texture.webp",
    "sortOrder": 46,
    "element": {
      "id": 6,
      "name": "Dark",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_6.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_6.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150004600",
        "name": "Blind Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr046_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 67% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004610",
        "name": "Sacrificial Restraint",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr046_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Apply Pain (8s) to self.\nDeal seven hits of 31% Physical DMG to up to 2 targets within the forward area.\nOn final hit, deal an additional 50% Physical DMG to the target.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [],
        "awakened": {
          "desc": "Apply Pain (8s) to self.\nDeal seven hits of 44% Physical DMG to up to 2 targets within the forward area.\nOn final hit, deal an additional 65% Physical DMG to the target.",
          "detail": null
        }
      },
      {
        "id": "150004620",
        "name": "Survival Instinct",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr046_3.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 55% Physical DMG to a target.\nOn hit, grant self Healing Received Up 15% (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Healing Received Up"
        ],
        "awakened": {
          "desc": "Deal three hits of 65% Physical DMG to a target.\nOn hit, grant self Healing Received Up 30% (8s).",
          "detail": null
        }
      },
      {
        "id": "150004630",
        "name": "Ache for Agony",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr046_5.webp",
        "type": "Passive",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "When taking damage, Low chance to grant self Damage Up 5% (6s).",
        "detail": "Watching wounds appear on her body and the blood that flows from them fills Chloe with immense excitement.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "When taking damage, Low chance to grant self Damage Up 8% (6s).\nGrant all party members Healing Crit Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150004650",
        "name": "Lamb's Metamorphosis",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr046_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical Damage Taken Decreased 8%.",
        "detail": "While Chloe enjoys the pain of her injuries, her body grows more and more durable.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Physical Damage Taken Decreased 8%.",
          "detail": null
        }
      },
      {
        "id": "150004641",
        "name": "Chaos Onslaught",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr046_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Attack Up 10% (24s).\nDeal thirteen hits of 45% Physical DMG to up to 2 targets within the forward area.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Sacrificial Lamb",
      "birthday": "9 / 9",
      "age": "23",
      "height": "170",
      "weight": "64",
      "interest": "Work, helping others",
      "personality": "Insecure, seeking validation from others through acts of service",
      "resumeParas": [
        "Burdened by her family's enormous debt since childhood, she endured discrimination and abuse, developing a deep-seated sense of original sin. During the Great Plague, she awakened unexpectedly as a dark-elemental esper. This power allows her to negate physical damage with dark energy, but her body still endures intense pain. Her abilities caught the attention of a mysterious detective agency. Its owner offered to help her pay off her debt in exchange for taking on combat-related cases, assignments so dangerous that few would dare accept them. Upon completing a mission, the agency owner rewards her with the pain she craves. Although she is always assigned dangerous work, for her, it is only in the soul-tearing agony that follows an attack that she truly feels her own worth."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004700",
    "model": "cr047",
    "slug": "charlotte",
    "name": "Charlotte",
    "nameZh": "夏洛特",
    "title": "Silvergun Sweetheart",
    "epithet": "Extreme Footwork, Silver Bullet of Judgment",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr047_Icon_Texture.webp",
    "sortOrder": 47,
    "element": {
      "id": 5,
      "name": "Light",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_5.webp"
    },
    "job": {
      "id": 1,
      "name": "Guardian",
      "color": "#957C7A",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/guard_5.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150004700",
        "name": "Reflex Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr047_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal two hits of 33.5% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004710",
        "name": "Rapid Fire",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr047_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal four hits of 55% Energy DMG to up to 2 targets within the forward area.\nOn hit, grant self Block Up 20% (8s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Block Up"
        ],
        "awakened": {
          "desc": "Deal four hits of 75% Energy DMG to up to 2 targets within the forward area.\nOn hit, grant self Block Up 30% (8s).",
          "detail": null
        }
      },
      {
        "id": "150004720",
        "name": "Barrier Force Field",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr047_3.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Apply a 1250% Shield (6s) to self.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Shield"
        ],
        "awakened": {
          "desc": "Apply a 1800% Shield (6s) to self.",
          "detail": null
        }
      },
      {
        "id": "150004730",
        "name": "Emotional First-Aid",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr047_5.webp",
        "type": "Passive",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "When taking damage, Low chance to apply a 180% Shield (6s) to self.",
        "detail": "Carrying emergency bandages and little essentials is just common sense for any sweetheart girl.",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "Shield"
        ],
        "awakened": {
          "desc": "When taking damage, Low chance to apply a 180% Shield (6s) to self.\nGrant all party members Crit Evasion Up 5%.",
          "detail": null
        }
      },
      {
        "id": "150004750",
        "name": "Close-Quarters Defense",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr047_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Dark Res Up 7%.",
        "detail": "Charlotte spares no expense to pay for her own self-defense classes, ensuring she can protect herself from any harassment.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Dark Res Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150004741",
        "name": "Death Mark",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr047_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self ACC Up 8% (24s).\nDeal nine hits of 34% Energy DMG to up to 3 targets within the forward area.\nOn hit, apply a 2900% Shield (4s) to self.\nThis effect can stack up to 1 times.\nOn final hit, Medium chance to inflict Judgment (6s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Silvergun Sweetheart",
      "birthday": "9 / 5",
      "age": "25",
      "height": "166",
      "weight": "48",
      "interest": "Playing action shooter games, tidying her room, cute animals",
      "personality": "Cute but competitive, and extremely confident in her figure",
      "resumeParas": [
        "A superstar streamer on the new live-streaming platform \"Glitch,\" she is known for her delicate, doll-like face and a contrasting F-cup figure. Her content focuses mostly on high-intensity action shooter games, and offline, she is active at various fan conventions, having also founded the player organization called \"Star Vanguard.\". Due to repeated harassment related to her work, she purchased a competition-grade handgun that was ill-suited for her needs, leading her fans to mock her for getting ripped off by the store. However, with her competitive spirit, she paid for extensive firearms training on her own and has achieved impressive results in regional competitive shooting matches."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "4000",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004800",
    "model": "cr048",
    "slug": "rachel",
    "name": "Rachel",
    "nameZh": "瑞秋",
    "title": "Iron Law Sentinel",
    "epithet": "Severing Sin, Light of Justice",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr048_Icon_Texture.webp",
    "sortOrder": 48,
    "element": {
      "id": 5,
      "name": "Light",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_5.webp"
    },
    "job": {
      "id": 5,
      "name": "Breaker",
      "color": "#9433EA",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/master_5.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150004800",
        "name": "Aimed Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 68% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004810",
        "name": "Penetrating Impact",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 150% Energy DMG in a straight line to a furthest target.\nOn hit, grant self Energy DMG Up 15% (12s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Energy DMG Up"
        ],
        "awakened": {
          "desc": "Deal 210% Energy DMG in a straight line to a furthest target.\nOn hit, grant self Energy DMG Up 20% (12s).",
          "detail": null
        }
      },
      {
        "id": "150004820",
        "name": "Converging Fire",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes furthest targets, dealing seven hits of 24% Energy DMG.\nOn final hit, Interrupt the target’s skill.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Interrupt"
        ],
        "awakened": {
          "desc": "Prioritizes furthest targets, dealing seven hits of 35% Energy DMG.\nOn final hit, Interrupt the target’s skill.",
          "detail": null
        }
      },
      {
        "id": "150004830",
        "name": "Pocket List",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Upon kill, inflict Sniper or Breaker Type targets with Damage Decrease 15% (12s).",
        "detail": "She secretly keeps a log of all criminals with prior convictions or bad records in her personal notebook, allowing her to instantly identify and monitor them on sight.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Upon kill, inflict Sniper or Breaker Type targets with Damage Decrease 20% (12s).\nGrant all party members Energy DMG Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150004850",
        "name": "Combat Modification",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Attack Up 10%.",
        "detail": "She frequently buys accessories for her beloved gun to enhances its capability, but the sheer number of attachments has led her colleagues to jokingly call it a \"Christmas tree.\"",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Attack Up 10%.\nIn PVP mode, grant self Energy DMG Up 8%.",
          "detail": null
        }
      },
      {
        "id": "150004841",
        "name": "Deathline Judgment",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Light ATK Up 15% (24s).\nDeal 240% Energy DMG in a straight line to a furthest target.\nOn final hit, if the target has the Judgment status, trigger an Sanction L Pursuit.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Iron Law Sentinel",
      "birthday": "12 / 25",
      "age": "31",
      "height": "176",
      "weight": "63",
      "interest": "Coffee, watching movies",
      "personality": "Serious and pragmatic, but somewhat inflexible and not good at reading social cues.",
      "resumeParas": [
        "She currently works at the police department. Due to her inflexible personality, she is often suppressed and brushed aside by her superiors despite her outstanding performance. Nevertheless, she sticks to her own methods, striving to protect the weak in a chaotic and absurd city. She is friends with Adele, and the two occasionally exchange information."
      ]
    },
    "stats": {
      "atkRange": "600",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133004900",
    "model": "cr049",
    "slug": "milena",
    "name": "Milena",
    "nameZh": "米蓮娜",
    "title": "Black-Sector Inker",
    "epithet": "Fracture Onslaught, Petrified Senses",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr049_Icon_Texture.webp",
    "sortOrder": 49,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_2.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150004900",
        "name": "On Your Feet!",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 67% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150004910",
        "name": "Crippling Assassination",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr049_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal five hits of 70% Physical DMG to a target.\nOn final hit, inflict Knockdown (1s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Knock Down"
        ],
        "awakened": {
          "desc": "Deal five hits of 105% Physical DMG to a target.\nOn final hit, inflict Knockdown (1s).",
          "detail": null
        }
      },
      {
        "id": "150004920",
        "name": "Fluttering Blade Blossom",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal five hits of 40% Physical DMG to a target.",
        "detail": null,
        "cooldown": "8s",
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Deal five hits of 55% Physical DMG to a target.",
          "detail": null
        }
      },
      {
        "id": "150004930",
        "name": "Tattoo Experience",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, if the target is Guardian Type, inflict DMG Block Down 3 (6s).\nThis effect can stack up to 3 times.",
        "detail": "She has tattooed herself so many times that she has grown accustomed to the pain—and even finds a sort of pleasure in it.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On hit, if the target is Guardian Type, inflict DMG Block Down 3 (6s).\nThis effect can stack up to 3 times.\nGrant all party members Earth ATK Up 4%.",
          "detail": null
        }
      },
      {
        "id": "150004950",
        "name": "Born Rebel",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Water Res Up 7%.",
        "detail": "Her rebellious nature means she never backs down. Instead, it only fuels her to become even more powerful.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Water Res Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150004941",
        "name": "Crimson Butterfly Waltz",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Damage Up 10% (24s).\nDeal ten hits of 80% Physical DMG to a target.\nOn final hit, inflict Petrify M (4s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Black-Sector Inker",
      "birthday": "3 / 21",
      "age": "22",
      "height": "168",
      "weight": "57",
      "interest": "Browsing blade markets, imagining tattoos for passersby, chewing gum",
      "personality": "Blunt and loyal, with a sharp tongue and a hint of aloofness",
      "resumeParas": [
        "Born in an industrial district on the edge of the city, she began hanging out with the rough, tattooed gangsters who lived in her neighborhood during her teenage years. Around the same time, while attempting to give herself her first tattoo with a homemade needle, she discovered her sensitivity to pain was far lower than that of the average person.. After coming of age, she became a tattoo artist in a rough, seedy area on the outskirts of the metropolis. A conflict in her shop led her to stab a troublemaking client. Only later did she find out he was an informant for a local gang, landing her in serious trouble. In that moment, she realized that if she wanted to survive, she would have to align herself with a powerful organization. As a result, she joined the formidable Rosian Brotherhood as one of their own."
      ]
    },
    "stats": {
      "atkRange": "160",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005000",
    "model": "cr050",
    "slug": "amelie",
    "name": "Amelie",
    "nameZh": "愛蜜莉",
    "title": "Heart-Stealer",
    "epithet": "Blooming Peacock, Storm of Bullets",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr050_Icon_Texture.webp",
    "sortOrder": 50,
    "element": {
      "id": 3,
      "name": "Wind",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_3.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_3.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150005000",
        "name": "Predictive Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr050_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 67% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005010",
        "name": "Crippling Break",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr050_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 180% Energy DMG to targets within the forward area.\nOn hit, Medium chance to inflict Bleed (6s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Bleed"
        ],
        "awakened": {
          "desc": "Deal 240% Energy DMG to targets within the forward area.\nOn hit, Medium chance to inflict Bleed (6s).",
          "detail": null
        }
      },
      {
        "id": "150005020",
        "name": "Morale Boost",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr050_3.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant Random party members ACC Up 15% (8s).\nGrant Random party members Wind ATK Up 15% (8s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "ACC Up",
          "Wind ATK Up"
        ],
        "awakened": {
          "desc": "Grant Random party members ACC Up 20% (10s).\nGrant Random party members Wind ATK Up 25% (10s).",
          "detail": null
        }
      },
      {
        "id": "150005030",
        "name": "Dignity First",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr050_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, Extremely Low chance to grant self Wind ATK Up 6% (6s).",
        "detail": "Life on the streets taught Amelie that you have to keep up a tough front, or else others will look down on you.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On hit, Low chance to grant self Wind ATK Up 6% (6s).\nGrant all party members EN Gain Up 18%.",
          "detail": null
        }
      },
      {
        "id": "150005050",
        "name": "Explosive Temper",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr050_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Crit Chance Up 10%.",
        "detail": "With a personality as fierce as a gale, Alina often grows furious with obnoxious customers and throws them out the door.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Crit Chance Up 10%.",
          "detail": null
        }
      },
      {
        "id": "150005041",
        "name": "Showstopping Finale",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr050_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Wind ATK Up 10% (24s).\nDeal five hits of 60% Energy DMG to all targets.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Heart-Stealer",
      "birthday": "5 / 19",
      "age": "21",
      "height": "166",
      "weight": "47",
      "interest": "Shopping sprees, racing sports cars",
      "personality": "Confident and arrogant, always putting personal interests first and valuing material pleasures",
      "resumeParas": [
        "She was born into an ordinary family, with a father who died young and a mother who worked at a laundromat. Exposed to the extravagant lifestyles of the wealthy on TV and on her phone, she quickly grew dissatisfied with her own life. She tried to make money by shooting short videos and even had a brief moment of online fame, but it quickly faded, leaving her unable to sustain the extravagant life she craved. Pursuing wealth, she decided to become an escort, while also running an anonymous online account where she regularly posted sensual photos and showcased a luxurious life.. When clients recognized her online, she would play the victim, sometimes using emotional manipulation to convince them that their relationship was about more than money, that there were unspoken feelings involved. As a result, her clients became fiercely loyal, and she soon rose to be the top girl of her escort agency. After becoming the top escort, she began to attract clients of increasingly high status. The Rosian Brotherhood offered her a great deal of money in exchange for helping them deal with certain targets during her appointments. Dazzled by the money, she agreed and was highly satisfied with the handsome rewards. She even developed some unusual kinks from the work, such as erotic asphyxiation."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8000",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "2500"
    }
  },
  {
    "id": "133005100",
    "model": "cr051",
    "slug": "annabelle",
    "name": "Annabelle",
    "nameZh": "安娜貝爾",
    "title": "Shackled Saintess",
    "epithet": "Lewd Devotion, Unholy Illumination",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr051_Icon_Texture1.webp",
    "sortOrder": 51,
    "element": {
      "id": 5,
      "name": "Light",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_5.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_5.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150005100",
        "name": "Holy Burstfire",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal four hits of 17% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005110",
        "name": "Rain of Retribution",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal six hits of 35% Energy DMG to up to 2 targets within the forward area.\nOn hit, grant self Light ATK Up 10% (6s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Light ATK Up"
        ],
        "awakened": {
          "desc": "Deal six hits of 50% Energy DMG to up to 2 targets within the forward area.\nOn hit, grant self Light ATK Up 10% (8s).",
          "detail": null
        }
      },
      {
        "id": "150005120",
        "name": "Divine Absolution",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 180% Energy DMG to a target.\nOn hit, inflict Light Res Down 5% (6s) on the target.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Light Res Down"
        ],
        "awakened": {
          "desc": "Deal 260% Energy DMG to a target.\nOn hit, inflict Light Res Down 5% (6s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150005130",
        "name": "Token of Atonement",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Medium chance to inflict ATK SPD Down 20% (6s) on the target.",
        "detail": "Annabelle firmly believes she bears terrible sins and accepts all suffering as her punishment. When she is controlled, she treats it as a form of confession. This very conviction paradoxically solidifies into a divine protection over herself.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Medium chance to inflict ATK SPD Down 20% (6s) on the target.\nGrant all party members Block Penetration Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150005150",
        "name": "Binding Sanctuary",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Dark Res Up 7%.",
        "detail": "Annabelle sees restraints as her personal \"sanctuary,\" a means of self-protection; the tighter the restraints, the less harm the outside world can cause her.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Dark Res Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150005141",
        "name": "Final Confession",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Light ATK Up 10% (24s).\nDeal seven hits of 55% Energy DMG to up to 2 targets within the forward area.\nOn hit, inflict Dark ATK Down 20% (10s) on the target.\nOn hit, inflict ATK SPD Down 30% (10s) on the target.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Shackled Saintess",
      "birthday": "12 / 25",
      "age": "26",
      "height": "168",
      "weight": "52",
      "interest": "Secretly reading forbidden books, gardening (especially white lilies), praying and meditating (or daydreaming)",
      "personality": "Outwardly gentle, disciplined, and polite; inwardly repressed and self-punishing",
      "resumeParas": [
        "An orphan from Tobia, she was adopted by the Carducci Church and became a nun. She is beloved by the followers for her gentle and considerate nature. During her training, she developed a highly sensitive constitution, and now finds a sense of security, as well as pleasure, in being restrained.. Now, she works as an informant for the Carducci Family under the guise of a nun. Beneath her pure and holy appearance lies a latent, sensual nature always on the verge of breaking free."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005300",
    "model": "cr053",
    "slug": "sugimoto-arina",
    "name": "Sugimoto Arina",
    "nameZh": "杉本 有菜",
    "title": "Soothing Touch",
    "epithet": "Loosened Limbs, Flowing Vitality",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr053_Icon_Texture.webp",
    "sortOrder": 53,
    "element": {
      "id": 4,
      "name": "Water",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_4.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_4.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150005300",
        "name": "Backline Support",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 67% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005310",
        "name": "Restorative Circulation",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr053_2.webp",
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Restore 630% HP to 2 lowest HP percentage party members.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "Restore 890% HP to 2 lowest HP percentage party members.",
          "detail": null
        }
      },
      {
        "id": "150005320",
        "name": "Relaxing Massage",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant 2 most debuffed party members Healing Received Up 10% (8s).\nGrant 2 most debuffed party members Block Up 15% (8s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Healing Received Up",
          "Block Up"
        ],
        "awakened": {
          "desc": "Grant 2 most debuffed party members Water ATK Up 10% (8s).\nGrant 2 most debuffed party members Healing Received Up 15% (8s).\nGrant 2 most debuffed party members Block Up 15% (8s).",
          "detail": null
        }
      },
      {
        "id": "150005330",
        "name": "Hot Spring Technique",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "When healing, High chance to grant the healed target Fire Res Up 8% (6s).",
        "detail": "During her time working at a massage parlor, Sugimoto Arina became very familiar with the best combinations of bath additives and water temperature, ensuring the body's optimal recovery.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "When healing, High chance to grant the healed target Fire Res Up 8% (6s).\nGrant all party members DMG Block Up 12%.",
          "detail": null
        }
      },
      {
        "id": "150005350",
        "name": "Massage Technique",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Healing Crit Up 10%.",
        "detail": "Sugimoto Arina may be timid and easily flustered, but once her hands touch skin, they instinctively find the perfect spot every time.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Healing Crit Up 10%.",
          "detail": null
        }
      },
      {
        "id": "150005341",
        "name": "Cinematic Sauna",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Healing Up 10% (24s).\nRestore 1000% HP to all party members.\nGrant all party members Stun Res Up 10% (12s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Soothing Touch",
      "birthday": "3 / 15",
      "age": "25",
      "height": "152",
      "weight": "52",
      "interest": "Eat desserts, making desserts, cooking",
      "personality": "Gentle and considerate, hardworking, and pure-hearted",
      "resumeParas": [
        "The only daughter of an ordinary family, she used to give her parents massages when she was a child. Because her technique was so good, they suggested she attend a specialized school for it. After graduating, she successfully obtained her license as a massage therapist. However, in the year she graduated, Tobia was in an economic downturn and jobs were hard to find. On someone's recommendation, she eventually took a position as a massage therapist at Moonview Bathhouse, a bathhouse run by Moonflower Clan.. Thanks to her superb massage skills and her gentle, attentive nature, many clients fell in love with her service. During their sessions, they would unconsciously confide in her, telling her many of their secrets. When the managers of Moonview Bathhouse noticed this, they began assigning her to clients who required \"special interrogation.\""
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005400",
    "model": "cr054",
    "slug": "ogino-rui",
    "name": "Ogino Rui",
    "nameZh": "荻野 瑠衣",
    "title": "Yandere Maid",
    "epithet": "Stud Hunter, Drained Essence",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr054_Icon_Texture.webp",
    "sortOrder": 54,
    "element": {
      "id": 1,
      "name": "Fire",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_1.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_1.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150005400",
        "name": "A Present for You♥",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": "10s",
        "desc": "Prioritizes Male targets, dealing 55% Physical DMG.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005410",
        "name": "Express Tribute",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes Male targets, dealing three hits of 85% Physical DMG.\nOn hit, restore 33% HP to self.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "Prioritizes Male targets, dealing three hits of 120% Physical DMG.\nOn hit, restore 43% HP to self.",
          "detail": null
        }
      },
      {
        "id": "150005420",
        "name": "Sweetheart Autograph",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical DMG Up 20% (8s).\nGrant self Crit Chance Up 18% (8s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Physical DMG Up",
          "Crit Chance Up"
        ],
        "awakened": {
          "desc": "Grant self Physical DMG Up 25% (8s).\nGrant self Crit Chance Up 25% (8s).",
          "detail": null
        }
      },
      {
        "id": "150005430",
        "name": "Toxic Devotion",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, High chance to inflict Evasion Down 6% (6s) on the target.",
        "detail": "Master, you mustn't let anyone but me serve you...♥",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, inflict Evasion Down 6% (6s) on the target.\nGrant all party members PHY PEN Up 10%.",
          "detail": null
        }
      },
      {
        "id": "150005450",
        "name": "Echoes of Affection",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical DMG Up 7%.",
        "detail": "When serving a new Master, Ogino Rui always secretly kisses her right fingertips and whispers, \"Maybe this will make him notice me...♥\"",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Physical DMG Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150005441",
        "name": "Lovey Dovey Special",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Attack Up 10% (24s).\nPrioritizes Male targets, dealing five hits of 170% Physical DMG.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Yandere Maid",
      "birthday": "10 / 25",
      "age": "20",
      "height": "161",
      "weight": "45",
      "interest": "Trendy cute outfits, collecting cute clothes and accessories, researching attention-grabbing outfit style",
      "personality": "Cynical, apathetic, and disdainful; often rude to customers. Has little sense of security in love and is emotionally unpredictable.",
      "resumeParas": [
        "She works at Moonveil Pavilion, an adult-themed maid café.. Normally, she is expressionless and aloof, speaking in a monotone. She shows clear disdain for men she finds uninteresting, but is very protective of her female friends. However, when it comes to a man she likes, she becomes abnormally obsessive and deeply insecure. She will not only repeatedly seek reassurance of his feelings, but will also use various means to track his whereabouts. She is even willing to resort to self-harm to threaten him or gain his attention and concern."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005500",
    "model": "cr055",
    "slug": "lin-lin",
    "name": "Lin Lin",
    "nameZh": "鈴鈴",
    "title": "Divine Oracle",
    "epithet": "Radiant Flame, Heavenly Calculation",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr055_Icon_Texture.webp",
    "sortOrder": 55,
    "element": {
      "id": 1,
      "name": "Fire",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_1.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_1.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150005500",
        "name": "Auspicious Blessing",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "9s",
        "desc": "Deal 56% Energy DMG to a Random target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005510",
        "name": "Out of Luck",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 70% Energy DMG to a lowest HP target.\nOn hit, inflict Crit Chance Down 10% (6s) on the target.\nOn hit, inflict Crit Evasion Down 10% (6s) on the target.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Crit Chance Down",
          "Crit Evasion Down"
        ],
        "awakened": {
          "desc": "Deal three hits of 105% Energy DMG to a lowest HP target.\nOn hit, inflict Crit Chance Down 10% (6s) on the target.\nOn hit, inflict Crit Evasion Down 10% (6s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150005520",
        "name": "Unfinished Business",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 50% Energy DMG to a Random target.\nOn hit, inflict Burn M (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Burn"
        ],
        "awakened": {
          "desc": "Deal 115% Energy DMG to a Random target.\nOn hit, inflict Burn M (s).",
          "detail": null
        }
      },
      {
        "id": "150005530",
        "name": "Twist of Fate",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Low chance to inflict Fire Res Down 8% (6s) on the target.",
        "detail": "Her cryptic way of speaking often leaves clients depressed or feeling down.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Low chance to inflict Fire Res Down 8% (6s) on the target.\nGrant all party members ATK SPD Up 12%.",
          "detail": null
        }
      },
      {
        "id": "150005550",
        "name": "Stroke of Luck",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Crit Evasion Up 7%.",
        "detail": "She does things on a whim and is naturally lucky, always managing to get out of trouble, no matter what kind of attack she faces.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Crit Evasion Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150005541",
        "name": "Blazing Fate Formation",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Fire ATK Up 10% (24s).\nDeal two hits of 260% Energy DMG to a lowest HP target.\nOn final hit, inflict Crit Evasion Down 10% (6s) on the target.\nOn final hit, inflict Burn M (6s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Divine Oracle",
      "birthday": "11 / 11",
      "age": "18？",
      "height": "152",
      "weight": "40",
      "interest": "Birdkeeping, watching soap operas, studying youth trends, making money",
      "personality": "Easygoing and stingy, with a sharp tongue but a soft heart.",
      "resumeParas": [
        "She is self-proclaimed fortune teller living in Tobia's Chinatown. Though she appears to be a young woman barely out of her teens, her true age is a mystery. Rumor has it she is even older than Long Yingtian, but she denies this and insists she is forever eighteen. She is proficient in various forms of both Western and Eastern divination (such as I Ching, physiognomy, tarot cards, Chinese Astrology and conventional astrology, etc.) but she is most famous for her skills in the I Ching and physiognomy. Thanks to her excellent reputation, she is quite well-known in Tobia, and many people vie for a chance to have their fortunes told by her. The upper echelons of the Azure Dragon Triad are also among her regular clients. An appointment with her must be booked about a year in advance, but she believes that fortune-telling is a matter of fate. If she senses that a client who arrives is not destined to know the secrets of heaven, she will refund their money and send them away, showing no fear even if they are members of the criminal underworld. Anyone who dares to use force against her or defy \"fate\" will be cursed and found dead on the streets within a few days. She has a fondness for handsome men, so most of her assistants are tall, well-built, and good-looking. If an attractive male client comes to see her, she might even offer him a discount or a free reading. She has connections with the Azure Dragon Triad and is willing to show them some favor. She keeps a white Java sparrow for divination purposes, named The Soul-Devouring Immortal of Demons and Sprites, or \"Mao Mao\" for short. She loves her pet dearly and is always afraid it isn't getting enough to eat, so she has fed it until it is quite plump."
      ]
    },
    "stats": {
      "atkRange": "600",
      "normalAttackGCD": "9000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005600",
    "model": "cr056",
    "slug": "ruby",
    "name": "Ruby",
    "nameZh": "露比",
    "title": "Radiant Diva",
    "epithet": "Dynamic Melody, Pulsing Beat",
    "sex": "Female",
    "inGacha": false,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr056_Icon_Texture.webp",
    "sortOrder": 56,
    "element": {
      "id": 3,
      "name": "Wind",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_3.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_3.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150005600",
        "name": "Basic Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr056_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 67% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005610",
        "name": "Radiant Shot",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr056_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 93% Physical DMG to a target.\nOn final hit, inflict Electrocute S (6s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Electrocute"
        ],
        "awakened": {
          "desc": "Deal three hits of 145% Physical DMG to a target.\nOn final hit, inflict Electrocute S (6s).",
          "detail": null
        }
      },
      {
        "id": "150005620",
        "name": "Rhythmic Barrage",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr056_3.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal four hits of 40% Physical DMG to a target.\nOn final hit, grant Attack Up 10% (6s) to self.",
        "detail": null,
        "cooldown": "5s",
        "cost": null,
        "statuses": [
          "Attack Up"
        ],
        "awakened": {
          "desc": "Deal four hits of 55% Physical DMG to a target.\nOn final hit, grant Attack Up 10% (8s) to self.",
          "detail": null
        }
      },
      {
        "id": "150005630",
        "name": "Scalding Aura",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr056_5.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, Low chance to inflict ACC Down 7% (6s) on the target.",
        "detail": "Her confident, radiant aura is like a spotlight that can't be ignored. Her opponents are always stunned by her sheer presence.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On hit, Low chance to inflict ACC Down 7% (8s) on the target.\nGrant all party members Block Penetration Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150005650",
        "name": "Trendy Shine",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr056_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Wind ATK Up 7%.",
        "detail": "Every time she takes the stage, all eyes are drawn to her, unable to look away. \\n \"The stage belongs only to those who truly shine!\"",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Wind ATK Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150005641",
        "name": "Overclocked Radiance",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr056_4.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Electrocute Hit Rate Up 30% (24s).\nDeal three hits of 300% Physical DMG to a target.\nOn final hit, inflict Electrocute S (6s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Radiant Diva",
      "birthday": "4 / 4",
      "age": "22",
      "height": "165",
      "weight": "52",
      "interest": "Singing, dancing",
      "personality": "Independent, lively, and cheerful; enjoys being in the spotlight, never follows the crowd, and is eager to prove herself.",
      "resumeParas": [
        "Driven by her dreams and a competitive spirit, she is lively, cheerful, confident, and independent. She refuses to follow trends and yearns to be noticed. Her singing style is innovative and distinctly her unique musical identity. Additionally, her fashion sense is bold, vibrant and sexy, making her a rare and unique artist in the Tobia entertainment industry.. To help Ruby achieve her dream of becoming a singer, her friends signed her up for the second Heaven's Door contest. Unfortunately, she was caught up in a media scandal during the competition, which caused a major setback, and she ultimately lost in the finals. Later, she was recognized by Adele, who invited her to sign with HL Entertainment as a trainee artist. She eventually became the resident singer at Club Vortex."
      ]
    },
    "stats": {
      "atkRange": "600",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005700",
    "model": "cr057",
    "slug": "liz",
    "name": "Liz",
    "nameZh": "莉茲",
    "title": "Bare-Knuckle Bodyguard",
    "epithet": "Evasive Recovery, Fierce Fist",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr057_Icon_Texture.webp",
    "sortOrder": 57,
    "element": {
      "id": 4,
      "name": "Water",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_4.webp"
    },
    "job": {
      "id": 1,
      "name": "Guardian",
      "color": "#957C7A",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/guard_4.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150005700",
        "name": "Thunderbolt Jab",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr057_1.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "2.4s",
        "desc": "Deal two hits of 33.5% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005710",
        "name": "Dual Shot",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr057_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 145% Physical DMG to a target.\nOn final hit, inflict Fire ATK Down 10% (10s) on the target.\nOn final hit, grant ATK SPD Up 10% (10s) to self.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "ATK SPD Up",
          "Fire ATK Down"
        ],
        "awakened": {
          "desc": "Deal three hits of 190% Physical DMG to a target.\nOn final hit, inflict Fire ATK Down 15% (10s) on the target.\nOn final hit, grant ATK SPD Up 20% (10s) to self.",
          "detail": null
        }
      },
      {
        "id": "150005720",
        "name": "Enhanced Breath",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr057_3.webp",
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Restore 530% HP to self.",
        "detail": null,
        "cooldown": "8s",
        "cost": null,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "Restore 740% HP to self.",
          "detail": null
        }
      },
      {
        "id": "150005730",
        "name": "Midnight Discipline",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr057_5.webp",
        "type": "Passive",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "When taking damage, Low chance to grant self ATK SPD Up 10% (6s).\nThis effect can stack up to 2 times.",
        "detail": "In a chaotic, dangerous environment, the most important thing is maintaining self-discipline so as not to lose yourself.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "When taking damage, Medium chance to grant self ATK SPD Up 14% (6s).\nThis effect can stack up to 2 times.\nGrant all party members Fire Res Up 5%.",
          "detail": null
        }
      },
      {
        "id": "150005750",
        "name": "Calm Response",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr057_6.webp",
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Block Up 7%.",
        "detail": "While on duty, she often encounters unruly customers, but many situations can be defused by guiding their emotions, without any need for force.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Block Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150005741",
        "name": "Waveguard Shield",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr057_4.webp",
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Healing Up 10% (24s).\nApply a 960% Shield (10s) to all party members.\nWhile this Shield is active, grant the holder Fire Res Up 10%.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Bare-Knuckle Bodyguard",
      "birthday": "8 / 1",
      "age": "23",
      "height": "175",
      "weight": "70",
      "interest": "Fitness and combat sports",
      "personality": "Independent, strong, tough, and fearless; fiercely loyal to those who treat her well.",
      "resumeParas": [
        "Formerly an illegal immigrant from the streets, she is now affiliated with the Carducci Group. She got on the wrong side of the Carducci Family during a street brawl and was cornered by them, but she fought relentlessly to the very end. Her indomitable fighting spirit impressed Bernardo, who recruited her as his subordinate and put her in charge of security at the nightclub."
      ]
    },
    "stats": {
      "atkRange": "120",
      "normalAttackGCD": "2400",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "4000",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005800",
    "model": "cr058",
    "slug": "li-mu",
    "name": "Li Mu",
    "nameZh": "李沐",
    "title": "Icy Femme Fatale",
    "epithet": "River-Crossing Dragon, Roaring Thunder",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr058_Icon_Texture.webp",
    "sortOrder": 58,
    "element": {
      "id": 3,
      "name": "Wind",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_3.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_3.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150005800",
        "name": "Phantom Staff",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal two hits of 33.5% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005810",
        "name": "Thunder Quintet Rod",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal five hits of 42% Physical DMG to up to 2 targets within the forward area.\nOn final hit, grant Wind ATK Up 10% (6s) to self.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Wind ATK Up"
        ],
        "awakened": {
          "desc": "Deal five hits of 61% Physical DMG to up to 2 targets within the forward area.\nOn final hit, grant Wind ATK Up 10% (6s) to self.",
          "detail": null
        }
      },
      {
        "id": "150005820",
        "name": "Storm Dragon Assault",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal six hits of 6.5% Physical DMG to a target.\nOn hit, inflict Electrocute M (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Electrocute"
        ],
        "awakened": {
          "desc": "Deal six hits of 20% Physical DMG to a target.\nOn hit, inflict Electrocute M (6s).",
          "detail": null
        }
      },
      {
        "id": "150005830",
        "name": "Meridian Lock",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Medium chance to inflict ATK SPD Down 20% (6s) on the target.",
        "detail": "Years of martial arts training allow Li Mu to spot the smallest openings in her opponent, even amidst a rapid flurry of attacks, and to strike their pressure points with lightning-fast precision.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Medium chance to inflict ATK SPD Down 20% (6s) on the target.\nGrant all party members Crit DMG Up 12%.",
          "detail": null
        }
      },
      {
        "id": "150005850",
        "name": "Seamless Motion",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Wind ATK Up 7%.",
        "detail": "During her training at the dojo, her master often said, \"Your movements should be as fluid as water and as fierce as the raging wind.\"",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Wind ATK Up 7%.",
          "detail": null
        }
      },
      {
        "id": "150005841",
        "name": "Dimensional Quake",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Electrocute Hit Rate Up 30% (24s).\nDeal four hits of 90% Physical DMG to up to 3 targets within the forward area.\nOn final hit, inflict Knockdown (1s).\nOn final hit, grant Damage Up 10% (10s) to self.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Icy Femme Fatale",
      "birthday": "1 / 3",
      "age": "32",
      "height": "170",
      "weight": "58",
      "interest": "Tea tasting, martial arts movies",
      "personality": "Wears her likes and dislikes openly, cold and unsmiling toward others, but takes bold and decisive action when necessary.",
      "resumeParas": [
        "An illegal immigrant who was smuggled into Tobia with her parents, her family lived a quiet and humble life on the lowest rungs of society. However, after her father died as a result of discrimination and persecution by the locals, she chose to join the Azure Dragon Triad to protect her mother. Within the Azure Dragon Triad, she is usually responsible for debt collection and guarding cash flows, often working closely with Ruo Lan. Over time, the two have become close friends with excellent chemistry. Because she has loved martial arts movies since she was a child, she worked hard to learn martial arts and now uses nunchucks as her primary weapon."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133005900",
    "model": "cr059",
    "slug": "bernardo",
    "name": "Bernardo",
    "nameZh": "貝爾納多",
    "title": "Apex Dominator",
    "epithet": "Rockbone Valor, Culling the Weak",
    "sex": "Male",
    "inGacha": false,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr059_Icon_Texture.webp",
    "sortOrder": 59,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_2.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150005900",
        "name": "Explosive Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 53% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150005910",
        "name": "Suppression Fire",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr059_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal four hits of 60% Physical DMG to a target.\nOn final hit, Medium chance to inflict Petrify S (3s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Petrify"
        ],
        "awakened": {
          "desc": "Deal four hits of 90% Physical DMG to a target.\nOn final hit, Medium chance to inflict Petrify S (3s).",
          "detail": null
        }
      },
      {
        "id": "150005920",
        "name": "Glorious Inspiration",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant 2 lowest HP party members Damage Up 5% (6s).\nGrant 2 lowest HP party members Earth ATK Up 5% (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Damage Up",
          "Earth ATK Up"
        ],
        "awakened": {
          "desc": "Grant 2 lowest HP party members Damage Up 5% (6s).\nGrant 2 lowest HP party members Earth ATK Up 10% (6s).",
          "detail": null
        }
      },
      {
        "id": "150005930",
        "name": "Ruthless Warning",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, Low chance to grant self Earth ATK Up 6% (8s).",
        "detail": "Bernardo is always decisive and ruthless, often using public trials as a devilish means of exerting control.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On basic attack hit, Low chance to grant self Earth ATK Up 6% (10s).",
          "detail": null
        }
      },
      {
        "id": "150005950",
        "name": "Coyote's Resolve",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Max HP Up 5%.",
        "detail": "His long experience with the Carducci Family conflicts allows him to survive dangerous situations and turn the tables when the odds are against him.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Max HP Up 5%.",
          "detail": null
        }
      },
      {
        "id": "150005941",
        "name": "Dominating Aura",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self ACC Up 6% (24s).\nDeal five hits of 160% Physical DMG to a target.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Apex Dominator",
      "birthday": "11 / 12",
      "age": "35",
      "height": "190",
      "weight": "120",
      "interest": "Boxing",
      "personality": "Decisive, cautious, and proud; ambitious and will not tolerate being challenged or questioned.",
      "resumeParas": [
        "As the second-in-command of the Carducci Family, he is responsible for managing all of its affairs, both large and small. Utterly loyal, he is driven by a single ambition: to make the Carducci Family the most powerful gang in Tobia.. However, he grows disappointed with Family Head Simon's passive leadership and begins to harbor thoughts of seizing power. First, he secretly enlisted Bass to sell low-grade catalysts at the family's bars. Later, he tried to leverage Anton's position at HL Entertainment to stage a takeover."
      ]
    },
    "stats": {
      "atkRange": "360",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133006000",
    "model": "cr060",
    "slug": "danxin",
    "name": "Danxin",
    "nameZh": "丹芯",
    "title": "Second Generation Dragon",
    "epithet": "Azure Flames, Subtle Deflection",
    "sex": "Male",
    "inGacha": false,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr060_Icon_Texture.webp",
    "sortOrder": 60,
    "element": {
      "id": 1,
      "name": "Fire",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_1.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_1.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150006000",
        "name": "Silk Whip Strike",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 83% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150006010",
        "name": "Dragon Flame Wall",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Apply a 2145% Shield (10s) to self.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Stun"
        ],
        "awakened": {
          "desc": "Apply a 3000% Shield (10s) to self.",
          "detail": null
        }
      },
      {
        "id": "150006020",
        "name": "Triple Stance Breaker",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 100% Physical DMG to a target.\nOn final hit, Medium chance to inflict Energy Damage Down 10% (8s) on the target.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Heal",
          "Damage Taken Decreased"
        ],
        "awakened": {
          "desc": "Deal three hits of 135% Physical DMG to a target.\nOn final hit, Medium chance to inflict Energy Damage Down 20% (8s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150006030",
        "name": "Spicy Instinct",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Upon gaining a Shield, grant self the Amplify effect: \"When taking damage, has a Low chance to inflict Burn S (6s) on Random targets\" (6s).\nThe Amplify effect can only trigger once every 6 seconds.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Upon gaining a Shield, grant self the Amplify effect: \"When taking damage, has a Low chance to inflict Burn S (6s) on Random targets\" (6s).\nThe Amplify effect can only trigger once every 6 seconds.\nGrant all party members Block Up 8%.",
          "detail": null
        }
      },
      {
        "id": "150006050",
        "name": "Silk Deflection",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Energy Damage Taken Decreased 10%.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Energy Damage Taken Decreased 10%.",
          "detail": null
        }
      },
      {
        "id": "150006041",
        "name": "Azure Dragon Flame Quake",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Basic Attack Damage Taken Decreased 40% (24s).\nDeal four hits of 93% Energy DMG to up to 2 targets within the forward area.\nGrant self Block Up 10% (12s).\nGrant self DMG Block Up 20% (12s).",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Kung Fu Beauty",
      "birthday": "7 / 23",
      "age": "22",
      "height": "165",
      "weight": "51",
      "interest": "Exchanging martial arts techniques, spicy snacks",
      "personality": "Lively and competitive; instantly accepts any challenge when provoked.",
      "resumeParas": [
        "From a young age, she traveled across various countries with her father, perfecting her family's inherited Silk-Reeling Martial Arts. Upon returning to Tobia at the age of 17, the young and impetuous Danxin frequently competed in underground martial arts matches in secret. Spotting her during an inspection of the fights, Long Yingtian was impressed by Danxin's martial prowess and recruited her to join the Azure Dragon Martial Arts Hall under his tutelage. After joining the Azure Dragon Gang, she combined her techniques with Long Yingtian's guidance, rechristening her style as Azure Dragon Silk-Reeling Fist. Thanks to her lively personality and mastery of martial arts, she was also appointed as the master of ceremonies for the martial arts tournament. Her father's current whereabouts are unknown, though he has presumably gone abroad once again for his martial training."
      ]
    },
    "stats": {
      "atkRange": "120",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133006100",
    "model": "cr061",
    "slug": "ojima-erina",
    "name": "Ojima Erina",
    "nameZh": "小島 繪里奈",
    "title": "Sugar-Sweet Maid",
    "epithet": "Seductive Whispers, Absolute Devotion",
    "sex": "Female",
    "inGacha": false,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr061_Icon_Texture.webp",
    "sortOrder": 61,
    "element": {
      "id": 6,
      "name": "Dark",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_6.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_6.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150006100",
        "name": "Dust Off",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 83% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150006110",
        "name": "Heart-Throb Echoes",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 48% Energy DMG to up to 2 targets within the forward area.\nEach time an enemy is hit, decrease their EN by 1.5.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "EN Gain Down"
        ],
        "awakened": {
          "desc": "Deal three hits of 48% Energy DMG to up to 4 targets within the forward area.\nEach time an enemy is hit, decrease their EN by 1.5.",
          "detail": null
        }
      },
      {
        "id": "150006120",
        "name": "Adorable Purity Boost",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant most debuffed party members Energy Damage Taken Decreased 25% (6s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Energy Damage Taken Decreased"
        ],
        "awakened": {
          "desc": "Grant 2 most debuffed party members Energy Damage Taken Decreased 25% (8s).",
          "detail": null
        }
      },
      {
        "id": "150006130",
        "name": "Adorable Energy Infusion",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, if the target is Guardian or Striker Type, inflict ATK SPD Down 25 (6s).\nThis effect can only be triggered on the same target once every 10 seconds.",
        "detail": "With her optimistic and unyielding spirit, her very presence is like a warm breeze that lifts everyone's morale.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On hit, if the target is Guardian or Striker Type, inflict ATK SPD Down 25 (6s).\nThis effect can only be triggered on the same target once every 10 seconds.\nGrant all party members Dark ATK Up 4%.",
          "detail": null
        }
      },
      {
        "id": "150006150",
        "name": "Adorable Smile",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Skill Damage Up 10%.",
        "detail": "Deep within her lies a tranquil spirit, like the moonlight, granting her a resilience beyond imagination.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Skill Damage Up 10%.\nIn PVP mode, grant self EN Gain Up 26%.",
          "detail": null
        }
      },
      {
        "id": "150006141",
        "name": "Adorable Twirling Lovesong",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Energy DMG Up 12% (24s).\nDeal three hits of 115% Energy DMG to all targets.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Sugar-Sweet Maid",
      "birthday": "4 / 8",
      "age": "22",
      "height": "158",
      "weight": "48",
      "interest": "Cooking, watching dramas",
      "personality": "Kind, amiable, positive, and persevering, but also a bit scatterbrained. Once she gets drunk, she can't help but reveal the dark past she keeps buried deep within her heart.",
      "resumeParas": [
        "Employed at the adult maid cafe Moonveil Pavilion, she goes by the stage name Nana. Kind-hearted and warm, she always greets every guest with a sweet smile, listens to them patiently, and offers genuine care. Her heartwarming gestures melt the hearts of visiting patrons, earning her the admiration of many regulars. Her family was infected during the Great Plague, and the enormous medical expenses drove her to seek work at Moonveil Pavilion. However, her time there took a tremendous toll on both her body and mind. Despite having been vaccinated, she was ultimately infected while serving a client. While critically ill, she was injected with an experimental drug claimed to cure the disease, inadvertently awakening the ability to manipulate psychokinetic energy. Even so, she has never been broken by adversity, continuing to bring warmth to her customers with her delightfully airheaded reactions and cheerful smile."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "2500"
    }
  },
  {
    "id": "133006200",
    "model": "cr062",
    "slug": "shiraishi-ai",
    "name": "Shiraishi Ai",
    "nameZh": "白石 愛",
    "title": "Gentle Manager",
    "epithet": "Thorny White Rose, Ultimate Counter",
    "sex": "Female",
    "inGacha": false,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr062_Icon_Texture.webp",
    "sortOrder": 62,
    "element": {
      "id": 5,
      "name": "Light",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_5.webp"
    },
    "job": {
      "id": 5,
      "name": "Breaker",
      "color": "#9433EA",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/master_5.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150006200",
        "name": "Elegance Can Be Efficient",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": "10s",
        "desc": "Prioritizes Support Type targets, dealing 55% Physical DMG.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150006210",
        "name": "You Should Do This Now",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr062_2.webp",
        "type": "Guiding",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 365% Physical DMG to a Counter Attack target.\nOn hit, inflict Light Res Down 10% (6s) on the target.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Light Res Down"
        ],
        "awakened": {
          "desc": "Deal 440% Physical DMG to a Counter Attack target.\nOn hit, inflict Light Res Down 20% (6s) on the target.\nOn hit, inflict Poison (12s).",
          "detail": null
        }
      },
      {
        "id": "150006220",
        "name": "Don't Get the Order Wrong",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes Support Type targets, dealing two hits of 80% Physical DMG.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Prioritizes Support Type targets, dealing two hits of 105% Physical DMG.\nOn final hit, inflict EN Gain Down 10% (10s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150006230",
        "name": "Do I Make You Nervous?",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, if the target is Support Type, inflict Healing Down 18 (8s).",
        "detail": "She acts with calm composure, always wearing a confident smile. Anyone she targets unconsciously loses their cool, becoming tense and agitated.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On hit, if the target is Support Type, inflict Healing Down 18 (8s).\nGrant all party members ACC Up 4%.",
          "detail": null
        }
      },
      {
        "id": "150006250",
        "name": "Anyone Can Do it",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical DMG Up 8.5%.",
        "detail": "She has a habit of taking meticulous care of everyone, and those around her always feel filled with confidence.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Physical DMG Up 8.5%.\nIn PVP mode, grant self Basic Damage Up 32%.",
          "detail": null
        }
      },
      {
        "id": "150006241",
        "name": "Last Step Is Key!",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Physical DMG Up 12% (24s).\nPrioritizes Support Type targets, dealing four hits of 208% Physical DMG.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Gentle Manager",
      "birthday": "3 / 15",
      "age": "25",
      "height": "166",
      "weight": "50",
      "interest": "Cooking, feeding others",
      "personality": "Elegant, dignified, and gentle, yet with a dark, calculating side hidden beneath her kind exterior.",
      "resumeParas": [
        "Going by the stage name Ai, she is now retired and no longer entertains guests, instead serving as the manager of both Moonveil Pavilion and Moonview Bathhouse. She was once the club's top star, ranking number one in popularity for five consecutive years. While she has a gentle personality, she can sometimes be mischievous and secretly manipulative. Her sweet, soothing voice makes her particularly skilled at comforting men. She has high standards for the maids and masseuses under her management, but she also takes excellent care of them."
      ]
    },
    "stats": {
      "atkRange": "600",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133006300",
    "model": "cr063",
    "slug": "andou-kana",
    "name": "Andou Kana",
    "nameZh": "安藤 加奈",
    "title": "Scholastic Agent",
    "epithet": "Radiant Vitality, Freezing Gaze",
    "sex": "Female",
    "inGacha": false,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr063_Icon_Texture.webp",
    "sortOrder": 63,
    "element": {
      "id": 4,
      "name": "Water",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_4.webp"
    },
    "job": {
      "id": 3,
      "name": "Sniper",
      "color": "#FFC405",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/archer_4.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150006300",
        "name": "Ah—Go Away!",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "9s",
        "desc": "Deal three hits of 18.75% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150006310",
        "name": "Let's Have Some Fun!",
        "slot": "Active",
        "unlockStar": 0,
        "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Icon_cr063_2.webp",
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal nine hits of 27% Energy DMG to up to 3 targets within the forward area.\nOn hit, Extremely High chance to inflict Freeze S (2s).\nAndou Kana’s Freeze chance is reduced each time a target is successfully frozen.",
        "detail": null,
        "cooldown": "8s",
        "cost": 1,
        "statuses": [
          "Frozen"
        ],
        "awakened": {
          "desc": "Deal nine hits of 40% Energy DMG to up to 3 targets within the forward area.\nOn hit, Extremely High chance to inflict Freeze S (2s).\nAndou Kana’s Freeze chance is reduced each time a target is successfully frozen.",
          "detail": null
        }
      },
      {
        "id": "150006320",
        "name": "Surprise for You!",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 32% Energy DMG to up to 3 targets within the forward area.",
        "detail": null,
        "cooldown": "5s",
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Deal three hits of 46% Energy DMG to up to 3 targets within the forward area.",
          "detail": null
        }
      },
      {
        "id": "150006330",
        "name": "I’m Your Fashion Guru~~",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, Low chance to grant self Water ATK Up 5% (6s).",
        "detail": "In order to create the perfect \"School Uniform Encyclopedia,\" Kana befriends with the students at every school. She excels at secretly observing every detail and recording it all in her notebook.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On hit, Low chance to grant self Water ATK Up 5% (8s).\nGrant all party members Crit Chance Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150006350",
        "name": "Are You Into Me?",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self ACC Up 7.5%.",
        "detail": "Kana's special agent training begins with observation and intelligence gathering. She tests and misleads her targets with cheerfulness or even slightly risqué jokes, thereby gaining an informational advantage.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members ACC Up 7.5%.",
          "detail": null
        }
      },
      {
        "id": "150006341",
        "name": "Time for Your Graduation Presents!",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self ATK SPD Up 25% (24s).\nDeal five hits of 95% Energy DMG to all targets.\nOn hit, inflict Freeze S (2s).\nAndou Kana’s Freeze chance is reduced each time a target is successfully frozen.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Scholastic Agent",
      "birthday": "9 / 29",
      "age": "20",
      "height": "165",
      "weight": "48",
      "interest": "Compiling a field guide of school uniforms",
      "personality": "Sweet and kind on the surface, but actually cheerful and a bit lewd. Possesses sharp intuition and excels at observing the people and surroundings around her.",
      "resumeParas": [
        "An operative affiliated with \"Hell's Light,\" she moves undercover between various high schools, posing as a student. Her chaotic and dangerous upbringing in Syssalus gave her an extraordinary intuition, which led to her being scouted by Hell's Light and trained as an agent. Thanks to her sweet and youthful appearance, she frequently disguises herself as a high school student to lower her targets' guard, allowing her to extract intelligence and execute her missions. To make it easier to customize each school's uniform to her personal taste, she created her very own dedicated uniform catalog."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "9000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8000",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "2500"
    }
  },
  {
    "id": "133006400",
    "model": "cr064",
    "slug": "komachi-sayaka",
    "name": "Komachi Sayaka",
    "nameZh": "小町 咲香",
    "title": "Moonlit Courtesan",
    "epithet": "Naginata Flurry, Frozen Shatter",
    "sex": "Female",
    "inGacha": true,
    "icon": null,
    "sortOrder": 64,
    "element": {
      "id": 4,
      "name": "Water",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_4.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_4.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150006400",
        "name": "Aquamoon",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "7.001s",
        "desc": "Deal two hits of 50% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150006410",
        "name": "Snowbind Duet",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 40% Physical DMG to up to 2 targets within the forward area.\nOn the first hit, inflict Water Res Down 10% (6s) on the target.\nOn final hit, if the target has the Freeze status, trigger an Ice Break L Pursuit.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Ice Break",
          "Water Res Down"
        ],
        "awakened": {
          "desc": "Deal three hits of 100% Physical DMG to up to 2 targets within the forward area.\nOn the first hit, inflict Water Res Down 10% (6s) on the target.\nOn final hit, if the target has the Freeze status, trigger an Ice Break L Pursuit.",
          "detail": null
        }
      },
      {
        "id": "150006420",
        "name": "Arctic Sandblast",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 52% Physical DMG to up to 2 targets within the forward area.\nOn final hit, inflict Attack Down 5% (6s) on the target.",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [
          "Attack Down"
        ],
        "awakened": {
          "desc": "Deal three hits of 75% Physical DMG to up to 2 targets within the forward area.\nOn final hit, inflict Attack Down 5% (6s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150006430",
        "name": "Frigid Core",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Upon a successful Ice Break Pursuit, grant self Water ATK Up8% (12s).\nThis effect can stack up to 2 times.",
        "detail": "With A heart of endurance and fortitude, she shows no weakness, even in the face of grave danger.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Upon a successful Ice Break Pursuit, grant self Water ATK Up8% (12s).\nThis effect can stack up to 3 times.\nGrant all party members Physical DMG Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150006450",
        "name": "Winter’s Twin Blades",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical DMG Up 10%.",
        "detail": "Her swordsmanship is both bold and delicate, allowing her to instantly seize the initiative in any battle.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Physical DMG Up 10%.\nIn PVP mode, grant self ACC Up 6%.",
          "detail": null
        }
      },
      {
        "id": "150006441",
        "name": "Frost Ring Moon Shatter",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Attack Up 15% (24s).\nDeal six hits of 55% Physical DMG to up to 3 targets within the forward area.\nOn the first hit, inflict Water Res Down 10% (6s) on the target.\nOn the first hit, inflict Skill Damage Taken Increased 15% (6s) on the target.\nOn final hit, if the target has the Freeze status, trigger an Ice Break L Pursuit.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Moonlit Courtesan",
      "birthday": "7 / 2",
      "age": "35",
      "height": "165",
      "weight": "48",
      "interest": "Tea ceremony, flower arranging",
      "personality": "Elegant and dignified, yet touched with a hint of gentleness. Quiet, rational, and well-mannered.",
      "resumeParas": [
        "The woman who manages the pleasure district of the Moonflower Clan. Once a high-ranking Oiran, she has attained her freedom yet remains exclusively bound to the Moonflower Clan's boss, Jingetsu Heihachi, and dances for his eyes only. Outsiders often mistake them for an enviably devoted husband and wife.. Once a glamorous and noble flower of the pleasure district, she was known for her cool, dignified beauty. These days, she is more reserved and composed, wearing only garments woven by the finest kimono artisans. She is highly skilled in the tea ceremony and flower arrangement, and having spent so much time by Jingetsu Heihachi's side, she has also acquired some knowledge of martial arts. She has no interest in participating in factional struggles. Instead, she pours all her energy into building a sanctuary for displaced women. She shelters the weak, guarding them so they do not become victims of power and violence again."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "7001",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133006500",
    "model": "cr065",
    "slug": "hijikata-chizuru",
    "name": "Hijikata Chizuru",
    "nameZh": "土方 千鶴",
    "title": "Immovable Sword Maiden",
    "epithet": "Immovable Strikes, Wisdom of Stone",
    "sex": "Female",
    "inGacha": true,
    "icon": null,
    "sortOrder": 65,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 1,
      "name": "Guardian",
      "color": "#957C7A",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/guard_2.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150006500",
        "name": "Morning Grump",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "17s",
        "desc": "Deal 141% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150006510",
        "name": "Slothful Titan",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical Damage Taken Decreased 20% (10s).\nGrant self Water Res Up 10% (10s).\nGrant self EN Gain Up 25% (10s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [
          "Physical Damage Taken Decreased",
          "Water Res Up",
          "EN Gain Up"
        ],
        "awakened": {
          "desc": "Grant self Physical Damage Taken Decreased 20% (10s).\nGrant self Water Res Up 20% (10s).\nGrant self EN Gain Up 35% (10s).",
          "detail": null
        }
      },
      {
        "id": "150006520",
        "name": "Somnolent Wheels",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal three hits of 40% Energy DMG to a target.\nOn final hit, Medium chance to inflict Petrify M (4s).",
        "detail": null,
        "cooldown": "4s",
        "cost": null,
        "statuses": [
          "Petrify"
        ],
        "awakened": {
          "desc": "Deal three hits of 65% Energy DMG to a target.\nOn final hit, Medium chance to inflict Petrify M (4s).",
          "detail": null
        }
      },
      {
        "id": "150006530",
        "name": "Vital Drain",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, restore 24% HP to self.",
        "detail": "As long as damage is dealt to the enemy, Fudomaru will greedily devours the opponent's life force and feeds it back to its master. This is also why Chizuru fights with such frenzy.",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "On hit, restore 34% HP to self.\nGrant all party members ATK SPD Up 12%.",
          "detail": null
        }
      },
      {
        "id": "150006550",
        "name": "Selfless Serenity",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Physical PEN RES Up 10%.",
        "detail": "When Fudomaru's personality takes over, it forcibly blocks all pain receptors, allowing the seemingly delicate girlish body to display the unshakeable defense of a Nio guardian statue.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Physical PEN RES Up 10%.\nIn PVP mode, grant self Healing Received Up 13%.",
          "detail": null
        }
      },
      {
        "id": "150006541",
        "name": "Inertial Avalanche",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Petrify Hit Rate Up 35% (24s).\nDeal five hits of 103% Energy DMG to up to 2 targets within the forward area.\nOn final hit, Medium chance to inflict Petrify M (4s).\nOn hit, restore 105% HP to self.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Immovable Sword Maiden",
      "birthday": "1 / 21",
      "age": "19",
      "height": "160",
      "weight": "48",
      "interest": "Cloud watching, collecting soft and cozy items, drinking (Japanese sake)",
      "personality": "Normally laid-back and lazy, often going about her day without wearing underwear; however, becomes intensely focused once entering combat.",
      "resumeParas": [
        "Frequently bullied as a child, she moved away with her family and returned to her hometown after growing up. At her ancestral home, she discovered Fudomaru, an Earth type nodachi passed down through generations. When wielding Fudomaru, Chizuru's personality turns fiercely aggressive and highly defensive. She later joined the Moonflower Clan, where Jingetsu Heihachi appointed her leader of the Defense Division due to Fudomaru's unique properties. But Chizuru only wants to live a carefree, easygoing life, so she often leaves her responsibilities to the hot-blooded and dependable Ishikawa Shouji. What she doesn't know is that Shouji was one of the children who bullied her in the past. Due to the difference in their positions, however, Shouji doesn't dare reveal his identity to her."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "17000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "4000",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133007000",
    "model": "cr070",
    "slug": "elena",
    "name": "Elena",
    "nameZh": "伊蓮娜",
    "title": "Rebellious Red Thorn",
    "epithet": "",
    "sex": "Female",
    "inGacha": true,
    "icon": null,
    "sortOrder": 70,
    "element": {
      "id": 1,
      "name": "Fire",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_1.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_1.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150007000",
        "name": "Agitated Notes",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 100% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150007010",
        "name": "Total Detonation",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 100% Energy DMG to up to 3 targets within the forward area.\nOn final hit, if the target has the Burn status, trigger an Detonate M Pursuit.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [],
        "awakened": {
          "desc": "Deal 170% Energy DMG to up to 3 targets within the forward area.\nOn final hit, if the target has the Burn status, trigger an Detonate M Pursuit.",
          "detail": null
        }
      },
      {
        "id": "150007020",
        "name": "Opening Act",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Block Penetration Up 20% (12s).\nGrant self Skill Damage Up 12% (12s).\nGrant self EN Gain Up 40% (12s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant self Block Penetration Up 24% (12s).\nGrant self Skill Damage Up 18% (12s).\nGrant self EN Gain Up 60% (12s).",
          "detail": null
        }
      },
      {
        "id": "150007030",
        "name": "I'm Telling My Mom!",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "When a Detonate Pursuit succeeds, grant self Fire ATK Up 6% (12s).\nWhen a Detonate Pursuit succeeds, grant self Crit Chance Up 9% (12s).",
        "detail": "With her mother backing her up, no matter what Elena does, she knows she'll be forgiven~",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "When a Detonate Pursuit succeeds, grant self Fire ATK Up 7% (12s).\nWhen a Detonate Pursuit succeeds, grant self Crit Chance Up 10% (12s).\nGrant all party members Crit DMG Up 12%.",
          "detail": null
        }
      },
      {
        "id": "150007050",
        "name": "Supreme Revelry",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Energy DMG Up 10%.",
        "detail": "Every gunshot is a beat for the party! In combat, Elena follows the rhythm of her attacks, gradually entering a frenzied state that greatly boosts her Fire Type damage and critical chance.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Energy DMG Up 10%.\nIn PVP mode, grant self Attack Up 8%.",
          "detail": null
        }
      },
      {
        "id": "150007041",
        "name": "Scarlet Thorn Frenzy",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Energy DMG Up 10% (24s).\nDeal 250% Energy DMG to all targets.\nOn final hit, inflict Fire Res Down 10% (12s) on the target.\nOn final hit, inflict Healing Crit Bonus Down 18% (12s) on the target.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Rebellious Red Thorn",
      "birthday": "12 / 12",
      "age": "20",
      "height": "165",
      "weight": "48",
      "interest": "Attending music festivals, partying, attending the opera",
      "personality": "Outgoing, lively, cocky, passionate, and rebellious.",
      "resumeParas": [
        "She grew up within the Rosian Brotherhood. Because of her parents' status and influence, no one dared to take advantage of her. Instead, people would go out of their way to curry favor with her in hopes of earning a promotion. She takes full advantage of this, ordering members of the organization around as long as it doesn't tarnish her mother's reputation. Because she grew up in an environment rife with deceit and treachery, her intuition about people is remarkably accurate. She also doesn't mind being used by others, as she seeks to extract benefits from them in return. Her mother intends for her to inherit her current position and has specifically arranged private tutors for her education. However, she frequently skips classes, causing constant worry for both her teachers and her mother. She shares her mother's love for opera but, out of sheer rebellion, pretends to hate it. Instead, she frequently attends music festivals that her mother deems unsophisticated."
      ]
    },
    "stats": {
      "atkRange": "600",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8000",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "2500"
    }
  },
  {
    "id": "133007100",
    "model": "cr071",
    "slug": "victoria",
    "name": "Victoria",
    "nameZh": "維多莉亞",
    "title": "Machiavellian Witch",
    "epithet": "",
    "sex": "Female",
    "inGacha": true,
    "icon": null,
    "sortOrder": 71,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 2,
      "name": "Striker",
      "color": "#EA3333",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/fighters_2.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150007100",
        "name": "Elegant Assassination",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 83% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150007110",
        "name": "Witch's Elegy",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal 360% Physical DMG to a target.\nOn hit, inflict Petrify M (s).",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [],
        "awakened": {
          "desc": "Deal 420% Physical DMG to a target.\nOn hit, inflict Petrify M (s).\nOn final hit, inflict Block Down 15% (8s) on the target.",
          "detail": null
        }
      },
      {
        "id": "150007120",
        "name": "Witch's Blessing",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Prioritizes 2 highest ATK party members, granting Crit DMG Up 40% (8s).",
        "detail": null,
        "cooldown": "6s",
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Prioritizes 2 highest ATK party members, granting Crit DMG Up 45% (10s).",
          "detail": null
        }
      },
      {
        "id": "150007130",
        "name": "Witch's Curse",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On hit, if the target is Petrified Buffed, grant self Healing Received Down 22% (6s).",
        "detail": "A rumor circulates within the Rosian Brotherhood—anyone who sees the witch's true identity will die a violent death.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "On hit, if the target is Petrified Buffed, grant self Healing Received Down 22% (6s).\nGrant all party members Block Penetration Up 6.5%.",
          "detail": null
        }
      },
      {
        "id": "150007150",
        "name": "Might is Supreme",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Earth ATK Up 8.5%.",
        "detail": "In Rosian, power and strength are everything.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Earth ATK Up 8.5%.\nIn PVP mode, grant self ATK SPD Up 13%.",
          "detail": null
        }
      },
      {
        "id": "150007141",
        "name": "Phantom Assault",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self EN Gain Up 45% (24s).\nDeal 425% Energy DMG to up to 3 targets within the forward area.\nOn final hit, inflict Crit Evasion Down 15% (12s) on the target.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Machiavellian Witch",
      "birthday": "11 / 11",
      "age": "37",
      "height": "168",
      "weight": "64",
      "interest": "Wine tasting, visiting art galleries, attending the opera",
      "personality": "Calm, distant.",
      "resumeParas": [
        "At 18, she married a former executive of the Rosian Brotherhood and gave birth to Elena; shortly after, her husband perished in a power struggle. For her daughter's future, she decided to succeed her late husband's position within the organization. With Nikola's aid, she successfully inherited her late husband's authority and status, ultimately rising even higher than he ever did. Her brutal methods earned her the nickname \"The Witch\" among Brotherhood members."
      ]
    },
    "stats": {
      "atkRange": "180",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "1500",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133007300",
    "model": "cr073",
    "slug": "connie",
    "name": "Connie",
    "nameZh": "昆妮",
    "title": "Flawless Goddess",
    "epithet": "",
    "sex": "Female",
    "inGacha": true,
    "icon": null,
    "sortOrder": 73,
    "element": null,
    "job": null,
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150007330",
        "name": "Passive 1",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": null,
        "detail": "Queenie is strict with herself, demanding perfection in every detail of her performances.",
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150007380",
        "name": "Passive 3",
        "slot": "Passive 3",
        "unlockStar": 7,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": null,
        "detail": "Queenie is strict with herself, demanding perfection in every detail of her performances.",
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150007350",
        "name": "Passive 2",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": null,
        "detail": "With just a glance and a smile, Connie can make anyone willingly become her most devoted fan.",
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150007390",
        "name": "Passive 3",
        "slot": "Passive 3",
        "unlockStar": 7,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": null,
        "detail": "With just a glance and a smile, Connie can make anyone willingly become her most devoted fan.",
        "cooldown": null,
        "cost": null,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Flawless Goddess",
      "birthday": "10 / 24",
      "age": "28",
      "height": "172",
      "weight": "43",
      "interest": "Observing humanity",
      "personality": "A meticulous and shrewd woman. Outward: Elegant, beautiful, and perfect. Inner: Scheming, ruthless, cunning, highly resilient, dominant.",
      "resumeParas": [
        "Tobia's idol of the people, boasting a near-perfect public image. Long before HL Entertainment was established, she was already a renowned influencer. Her decision to join the agency as its founding pillar was what put HL Entertainment on the map as a leading talent agency. In the public eye, she is refined, worldly, warm, and approachable. In reality, she isn't above complaining about her workload, though she only reveals this willful side to her manager or those she deeply trusts."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "9300",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133007400",
    "model": "cr074",
    "slug": "jessica",
    "name": "Jessica",
    "nameZh": "潔西卡",
    "title": "Seraphim Diva",
    "epithet": "Heavenly Resonance, Total Protection",
    "sex": "Female",
    "inGacha": true,
    "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/cr074_Icon_Texture.webp",
    "sortOrder": 74,
    "element": {
      "id": 5,
      "name": "Light",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_5.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_5.webp"
    },
    "attackType": {
      "id": 2,
      "name": "Energy",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_01.webp"
    },
    "skills": [
      {
        "id": "150007400",
        "name": "Basic Shot",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 117% Energy DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150007410",
        "name": "Poem of the Soul",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Chanting",
        "mainStat": null,
        "gcd": null,
        "desc": "Apply a 795% Shield (10s) to all party members.\nGrant all party members Stun Res Up 30% (10s).",
        "detail": null,
        "cooldown": "8s",
        "cost": 1,
        "statuses": [
          "Shield"
        ],
        "awakened": {
          "desc": "Apply a 940% Shield (10s) to all party members.\nGrant all party members Stun Res Up 30% (10s).\nGrant all party members Silence Res Up 30% (10s).",
          "detail": null
        }
      },
      {
        "id": "150007420",
        "name": "Seraphic Featherguard",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Restore 549% HP to 2 lowest HP percentage party members.",
        "detail": null,
        "cooldown": "5s",
        "cost": null,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "Restore 639% HP to 2 lowest HP percentage party members.\nGrant 2 lowest HP percentage party members Physical Damage Taken Decreased 10% (6s).",
          "detail": null
        }
      },
      {
        "id": "150007430",
        "name": "Soothing Melody",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "On basic attack hit, restore 59% HP to 2 lowest HP party members.",
        "detail": "Her singing can evoke emotional resonance, providing those around her with a sense of security and inner peace.",
        "cooldown": null,
        "cost": null,
        "statuses": [
          "Heal"
        ],
        "awakened": {
          "desc": "On basic attack hit, restore 63% HP to 2 lowest HP party members.\nGrant all party members Basic Attack Damage Taken Decreased 20%.",
          "detail": null
        }
      },
      {
        "id": "150007450",
        "name": "Fragile Resolve",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Damage Taken Decreased 9%.",
        "detail": "She turns pain and stress into an inner suit of armor, forging her unspoken burdens into a will of steel.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Damage Taken Decreased 9%.\nIn PVP mode, grant self Max HP Up 9%.",
          "detail": null
        }
      },
      {
        "id": "150007441",
        "name": "Sanctified Hymn",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": null,
        "gcd": null,
        "desc": "Enter the Awakening state, granting self Attack Up 17% (24s).\nCleanse debuffs from all party members.\nApply a 1285% Shield (10s) to all party members.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Seraphim Diva",
      "birthday": "3 / 12",
      "age": "20",
      "height": "155",
      "weight": "40",
      "interest": "Playing guitar, songwriting, crafting handmade journals",
      "personality": "Gentle, innocent, kind-hearted, deeply emotional, and submissive to hardship.",
      "resumeParas": [
        "The winner of the second Heaven's Door competition. A rising young singer from Tobia signed with HL Entertainment, she is widely known for her gentle, innocent personality and angelic appearance and demeanor. She specializes in singing sentimental ballads. Hailing from a impoverished background with limited education, she viewed Heaven's Door as her sole opportunity to change her fate. Fortunately, she stood out among the contestants to take the championship, fulfilling her dream. During her time on Heaven's Door, her immense popularity and winning streak in every round drew envy and bullying from other contestants. She was later saved by Ruby, and the two continued to compete against each other while supporting one another until the competition came to an end."
      ]
    },
    "stats": {
      "atkRange": "480",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8500",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "0"
    }
  },
  {
    "id": "133010700",
    "model": "cr107",
    "slug": "belle-clumsy-cowgirl",
    "name": "Belle",
    "nameZh": "貝兒",
    "title": "Clumsy Cowgirl",
    "epithet": "Creamy Fragrance, Dairy Barrage",
    "sex": "Male",
    "inGacha": true,
    "icon": null,
    "sortOrder": 107,
    "element": {
      "id": 2,
      "name": "Earth",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/battleelement_2.webp"
    },
    "job": {
      "id": 4,
      "name": "Support",
      "color": "#33EA62",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/priest_2.webp"
    },
    "attackType": {
      "id": 1,
      "name": "Physical",
      "icon": "https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam/Attributes_02.webp"
    },
    "skills": [
      {
        "id": "150010700",
        "name": "Super Pure & Rich, Delicious!",
        "slot": "Normal Attack",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": "10s",
        "desc": "Deal 92% Physical DMG to a target.",
        "detail": null,
        "cooldown": null,
        "cost": null,
        "statuses": []
      },
      {
        "id": "150010710",
        "name": "Fresh Milk... Eruption!",
        "slot": "Active",
        "unlockStar": 0,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Deal five hits of 40% Physical Spread DMG to up to 3 targets within the forward area.\nOn hit, deal an additional 5% Physical DMG to the target.\nOn final hit, if the target has the Petrify status, trigger an Shatter M Pursuit.",
        "detail": null,
        "cooldown": "10s",
        "cost": 1,
        "statuses": [],
        "awakened": {
          "desc": "Deal five hits of 60% Physical Spread DMG to up to 3 targets within the forward area.\nOn hit, deal an additional 9% Physical DMG to the target.\nOn final hit, if the target has the Petrify status, trigger an Shatter M Pursuit.",
          "detail": null
        }
      },
      {
        "id": "150010720",
        "name": "Chilled Milky Delivery",
        "slot": "Loop",
        "unlockStar": 1,
        "icon": null,
        "type": "Instant",
        "mainStat": "Healing",
        "gcd": null,
        "desc": "Restore 180% HP to lowest HP percentage party members.",
        "detail": null,
        "cooldown": "5s",
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Restore 220% HP to lowest HP percentage party members.\nGrant lowest HP percentage party members Block Up 10% (8s).",
          "detail": null
        }
      },
      {
        "id": "150010730",
        "name": "Essential Bedtime Ritual",
        "slot": "Passive 1",
        "unlockStar": 4,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Upon a successful Shatter Pursuit, restore 65% HP to lowest HP percentage party members.",
        "detail": "She can never bring herself to turn off the light once she starts reading her favorite romance novels before bed. She always says, \"Just one more page, then I’ll go to sleep,\" only to end up reading another half the book.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Upon a successful Shatter Pursuit, restore 65% HP to lowest HP percentage party members.\nGrant all party members Crit DMG Up 15%.",
          "detail": null
        }
      },
      {
        "id": "150010750",
        "name": "I Can Do Anything",
        "slot": "Passive 2",
        "unlockStar": 6,
        "icon": null,
        "type": "Passive",
        "mainStat": null,
        "gcd": null,
        "desc": "Grant self Earth ATK Up 9.5%.",
        "detail": "One time, the fresh milk pudding she made herself somehow didn’t collapse, and the surface even came out nice and glossy. She was walking on air that day, feeling like she could accomplish anything.",
        "cooldown": null,
        "cost": null,
        "statuses": [],
        "awakened": {
          "desc": "Grant all party members Earth ATK Up 9.5%.\nIn PVP mode, grant self EN Gain Up 28%.",
          "detail": null
        }
      },
      {
        "id": "150010741",
        "name": "Bovine Advent: Mega Udder Cannon",
        "slot": "Ultimate",
        "unlockStar": 2,
        "icon": null,
        "type": "Instant",
        "mainStat": "ATK",
        "gcd": null,
        "desc": "Enter the Awakening state, granting self ACC Up 10% (24s).\nDeal five hits of 143% Physical Spread DMG to all targets.\nOn hit, deal an additional 20% Physical DMG to the target.\nOn final hit, Low chance to inflict Petrify S (2s).\nOn final hit, inflict ATK SPD Down 15% (12s) on the target.",
        "detail": null,
        "cooldown": "24s",
        "cost": 3,
        "statuses": []
      }
    ],
    "profile": {
      "title": "Clumsy Cowgirl",
      "birthday": "9 / 20",
      "age": "22",
      "height": "158",
      "weight": "52",
      "interest": "Shopping sprees, cooking, masturbating to romance novels",
      "personality": "Airheaded and carefree, a bit clueless; loves taking care of others, always willing to help and take on any task without complaint.",
      "resumeParas": [
        "After being informed by her colleagues at HL Entertainment the the upcoming party had a \"Farmyard\" theme, Belle arrived at the venue meticulously dressed in a dairy cow themed outfit, only to discover that she was the only person at the event dressed for the theme."
      ]
    },
    "stats": {
      "atkRange": "360",
      "normalAttackGCD": "10000",
      "critPer": "1000",
      "critRstPer": "0",
      "critAmpPer": "5000",
      "critDmgRdcPer": "0",
      "hitPer": "8000",
      "ddgPer": "0",
      "blkPer": "2500",
      "blkPenPer": "0",
      "blkRdcPer": "2000",
      "healCritPer": "1000",
      "healCritAmpPer": "5000",
      "atkHastePer": "0",
      "cdHastePer": "2500"
    }
  }
]

export function getGsaCharacter(slug) {
  return gsaCharacters.find(c => c.slug === slug);
}
