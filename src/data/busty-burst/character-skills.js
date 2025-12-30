// Character Skills Data for Busty Burst
// Parsed from CHARACTER_SKILLS_COMBINED.txt

export const SKILL_FORMULAS = {
  buff: {
    description: 'Base + (Growth × Character Level)',
    examples: [
      'Physical/Magic ATK: +X% +Y (grow: +Z) → +X% +(Y + Z×Lv)',
      'Physical/Magic DEF: +X% +Y (grow: +Z) → +X% +(Y + Z×Lv)',
      'Accuracy/Block: +Y (grow: +Z) → +(Y + Z×Lv)',
      'Action Speed: +X% (no growth)',
      'Crit Damage: +Y (grow: +Z) → +(Y + Z×Lv)',
    ],
  },
  healing: {
    description: 'Heal = (Healing Power × Scale) + Base + (Growth × Level)',
    format: '(Healing Power × X) + Base (+Growth/lv)',
  },
  damage: {
    description: 'Skill Raw Damage = (ATK × Scale%) + Base + (Growth × Level)',
    format: '[X% ATK + Base (+Growth/lv)]',
    example:
      '[350% ATK + 150 (+20/lv)] at Level 50 with 1000 ATK: Raw Damage = (1000 × 3.5) + 150 + (20 × 50) = 4650',
    notes: [
      'Final Damage = Raw Damage reduced by target DEF (exact formula unknown)',
      'Critical Hit = Final Damage × Crit Multiplier',
      'Physical damage uses ATK stat, reduced by Physical DEF',
      'Magic damage uses MATK stat, reduced by Magic DEF',
    ],
  },
};

export const STAT_EXPLANATIONS = [
  {
    stat: 'Physical Critical',
    description: 'Base stat that affects critical physical damage (varies per character: 22-391)',
  },
  {
    stat: 'Magic Critical',
    description: 'Base stat that affects critical magical damage (varies per character: 22-234)',
  },
  {
    stat: 'Crit Damage +X',
    description: 'Adds +X to critical damage (stacks with base Physical/Magic Critical)',
  },
  {
    stat: 'Accuracy',
    description: 'Increases chance to hit. Higher = more likely to hit enemies with high Block',
  },
  { stat: 'Block', description: 'Reduces chance to be hit. Higher = more likely to dodge attacks' },
  {
    stat: 'Action Speed +X%+Y',
    description: 'Increases attack/skill speed. +X% is percentage, +Y is flat bonus',
  },
  {
    stat: 'Shield -X% (N hits)',
    description: 'Reduces incoming damage by X% for N hits before breaking',
  },
  { stat: 'Debuff Resistance +X%', description: 'Reduces chance to be affected by debuffs by X%' },
  { stat: 'Healing Amount +X%', description: 'Increases healing output by X% (for healers)' },
  { stat: 'Healing Received +X%', description: 'Increases healing received by X% (for targets)' },
  { stat: 'Skill Damage +X%', description: 'Increases damage dealt by skills by X%' },
  { stat: 'Ultimate Damage +X%', description: 'Increases damage dealt by ultimate skill by X%' },
  {
    stat: 'Type ATK +X%',
    description: 'Increases damage against that element type (Fire/Wind/etc)',
  },
  { stat: 'Type DEF -X%', description: 'Reduces target resistance to that element' },
];

export const BUSTY_BURST_CHARACTER_SKILLS = {
  festive_attire_estiriel: {
    id: 'festive_attire_estiriel',
    name: '【Festive Attire】Estiriel',
    rarity: 'SSR',
    element: 'Light',
    role: 'Support',
    skill2: {
      name: 'Ripples of the Abyss',
      description:
        'Restores HP by [(Healing Power × 20) + 370 (+40/lv)] to all allies and applies Physical DEF +15%+100 (+1/lv) and Magic DEF +15%+100 (+1/lv) for 8 seconds',
      type: 'heal',
      target: 'all allies',
    },
    skill3: {
      name: 'Slumber of the Seashell',
      description:
        'Applies Action Speed +14% and Accuracy +9 (+0.1/lv) to all allies for 6 seconds',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'Spirits, sing—offer blessings for this new birth',
      description:
        'Restores HP to all allies and applies Debuff Resistance UP(Lv5: +60%) and Block UP(Lv5: +20) for 7 seconds',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: 'Heal [(Healing Power × 27) + 1200] | Debuff Resist +30%, Block +10',
        R2: 'Heal [(Healing Power × 31) + 1400] | Debuff Resist +40%, Block +13',
        R3: 'Heal [(Healing Power × 32.5) + 1600] | Debuff Resist +50%, Block +16',
        R4: 'Heal [(Healing Power × 35) + 1750] | Debuff Resist +55%, Block +18',
        R5: 'Heal [(Healing Power × 36.5) + 1900] | Debuff Resist +60%, Block +20',
      },
    },
    passive1: 'Grants: Action Speed 15%+15, Debuff Resistance +30%',
    passive2: 'All allies receive Max HP +1447, Block +15',
  },

  liesel: {
    id: 'liesel',
    name: 'Liesel',
    rarity: 'SR',
    element: 'Mind',
    role: 'Support',
    skill2: {
      name: 'We must make lots of delicious food!',
      description:
        'Applies Physical ATK +10%+20 (+1/lv) and Magic ATK +10%+20 (+1/lv) to all allies for 9 seconds',
      type: 'buff',
      target: 'all allies',
    },
    skill3: {
      name: 'You must be thirsty, right?',
      description:
        'Applies Physical DEF +15%+100 (+1/lv) and Magic DEF +15%+100 (+1/lv) to all allies for 9 seconds',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'Delicious Praise Punch',
      description:
        'Applies MP Regen(Lv5: +50) for 5 seconds and Action Speed UP(Lv5: +15%+15) for 8 seconds to all allies',
      type: 'buff',
      target: 'all allies',
      ranks: {
        R1: 'MP Regen +25 (5s), Action Speed +8%+8 (8s)',
        R2: 'MP Regen +31 (5s), Action Speed +10%+10 (8s)',
        R3: 'MP Regen +37 (5s), Action Speed +12%+12 (8s)',
        R4: 'MP Regen +43 (5s), Action Speed +13%+13 (8s)',
        R5: 'MP Regen +50 (5s), Action Speed +15%+15 (8s)',
      },
    },
    passive1: 'Grants: Block +15',
    passive2: 'Middle Row allies receive Physical Def +70, Magic Def +70',
  },

  frey: {
    id: 'frey',
    name: 'Frey',
    rarity: 'SSR',
    element: 'Light',
    role: 'Support',
    skill2: {
      name: 'Area Heal',
      description:
        'Restores HP by [(Healing Power × 25) + 1000 (+40/lv)] to all allies and applies HP Regen +5%+150 for 3 seconds',
      type: 'heal',
      target: 'all allies',
    },
    skill3: {
      name: 'Cam',
      description:
        'Restores HP by [(Healing Power × 15) + 500 (+40/lv)] to all allies and removes all debuffs',
      type: 'heal',
      target: 'all allies',
    },
    ultimate: {
      name: "Gentle White Lily's Embrace",
      description:
        'Restores HP to all allies and applies Physical Shield(Lv5: -50%, 5 hits) and Magic Shield(Lv5: -50%, 5 hits) for 20 seconds',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: 'Heal [(Healing Power × 40) + 1000] | Physical Shield -30% (3 hits), Magic Shield -30% (3 hits)',
        R2: 'Heal [(Healing Power × 48) + 1500] | Physical Shield -35% (3 hits), Magic Shield -35% (3 hits)',
        R3: 'Heal [(Healing Power × 55) + 2000] | Physical Shield -40% (4 hits), Magic Shield -40% (4 hits)',
        R4: 'Heal [(Healing Power × 60) + 2300] | Physical Shield -45% (4 hits), Magic Shield -45% (4 hits)',
        R5: 'Heal [(Healing Power × 65) + 2500] | Physical Shield -50% (5 hits), Magic Shield -50% (5 hits)',
      },
    },
    passive1: 'Front Row allies receive Physical Def +141, Magic Def +141',
    passive2: 'Middle Row allies receive Skill Damage +10%, Action Speed 10%+10',
  },

  messeria: {
    id: 'messeria',
    name: '【Trance Dancer】Messeria',
    rarity: 'SSR',
    element: 'Wind',
    role: 'Support',
    skill2: {
      name: 'Londo of Light',
      description:
        'Deals [90% ATK + 50 (+6/lv)] physical damage to the 3 nearest enemies and inflicts Physical DEF -21%-40 (-2/lv) and Accuracy -11 (-0.13/lv) for 10 seconds',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: 'Dancing Performance',
      description:
        'Applies Physical ATK +15%+30 (+5/lv) and Phys Crit Damage +40 (+5/lv) to all allies for 10 seconds',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'Prayer in the Sea of Stars',
      description:
        'Restores HP to all allies and applies Action Speed UP(Lv5: +20%+20) and Block UP(Lv5: +20) for 12 seconds',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: 'Heal [(Healing Power × 20) + 1097] | Action Speed +10%+10, Block +10',
        R2: 'Heal [(Healing Power × 23) + 1250] | Action Speed +13%+13, Block +13',
        R3: 'Heal [(Healing Power × 25) + 1394] | Action Speed +16%+16, Block +16',
        R4: 'Heal [(Healing Power × 27) + 1489] | Action Speed +18%+18, Block +18',
        R5: 'Heal [(Healing Power × 28) + 1563] | Action Speed +20%+20, Block +20',
      },
    },
    passive1: 'All allies receive: Skill Damage +10%, Physical ATK +130',
    passive2: 'All allies receive: Block +10, Action Speed 10%+10',
  },

  teresia: {
    id: 'teresia',
    name: 'Teresia',
    rarity: 'SSR',
    element: 'Mind',
    role: 'Attacker',
    skill2: {
      name: 'Lightning Blade Strike',
      description:
        'Deals [310% ATK + 160 (+20/lv)] magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic DEF -18%-30 (-2/lv) for 8 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Winged Lightning',
      description:
        'Applies Magic ATK +18%+35 (+7/lv) and Magic Crit +50 (+7/lv) to self for 10 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Storm Claw',
      description:
        'Deals magic damage to the nearest enemy and applies Mind Type ATK UP(Lv5: +20%) to self for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[1000% ATK + 885] | Mind Type ATK +10%',
        R2: '[1200% ATK + 1022] | Mind Type ATK +12%',
        R3: '[1350% ATK + 1153] | Mind Type ATK +15%',
        R4: '[1450% ATK + 1307] | Mind Type ATK +18%',
        R5: '[1500% ATK + 1461] | Mind Type ATK +20%',
      },
    },
    passive1: 'Grants: Action Speed 10%',
    passive2: 'Grants: Mind Type ATK +10%',
  },

  dark_knight: {
    id: 'dark_knight',
    name: 'The Dark Knight',
    rarity: 'SSR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: 'Dual Demon Swords',
      description:
        'Deals [210% ATK + 160 (+20/lv)] magic damage to the nearest enemy and inflicts Magic DEF -21%-40 (-2/lv) for 10 seconds and Magic Type DEF -10% for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Enchantment Blade',
      description:
        'Deals [240% ATK + 160 (+20/lv)] magic damage to the nearest enemy and inflicts Physical ATK -12%-30 (-2/lv) and Magic ATK -12%-30 (-2/lv) for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: "Taboo of the Calamity God of the Dead's Sin Mark",
      description:
        'Deals magic damage to the 3 nearest enemies and inflicts Curse (no HP/MP regen) and Fear(Lv5: MP -100/s, Block 0) for 6 seconds',
      type: 'damage',
      target: '3 nearest enemies',
      ranks: {
        R1: '[300% ATK + 402] | Curse (no HP/MP regen), Fear (MP -50/s, Block 0)',
        R2: '[360% ATK + 457] | Curse (no HP/MP regen), Fear (MP -62/s, Block 0)',
        R3: '[405% ATK + 501] | Curse (no HP/MP regen), Fear (MP -75/s, Block 0)',
        R4: '[434% ATK + 566] | Curse (no HP/MP regen), Fear (MP -87/s, Block 0)',
        R5: '[450% ATK + 611] | Curse (no HP/MP regen), Fear (MP -100/s, Block 0)',
      },
    },
    passive1: 'Grants: Magic Crit Damage +90',
    passive2: 'Grants: Magic Type ATK +10%',
  },

  shaty: {
    id: 'shaty',
    name: 'Shaty',
    rarity: 'SSR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Weakness Exploit',
      description:
        'Deals [270% ATK + 150 (+25/lv)] physical damage to the farthest enemy and applies Wind Type ATK +20%+40 (+9/lv) to self for 6 seconds',
      type: 'damage',
      target: 'farthest enemy',
    },
    skill3: {
      name: 'Analysis',
      description:
        'Applies Wind Type DEF -21%-40 (-2/lv) and Block -11 (-0.13/lv) to the farthest enemy for 8 seconds',
      type: 'debuff',
      target: 'farthest enemy',
    },
    ultimate: {
      name: 'Stardust Radiance of Seven Colors',
      description:
        'Deals physical damage to the farthest enemy and applies Wind Type ATK UP(Lv5: +50%) and Hit Damage UP(Lv5: +140%, 6 hits) to self for 10 seconds',
      type: 'damage',
      target: 'farthest enemy',
      ranks: {
        R1: '[400% ATK + 1200] | Wind ATK +25%, Hit Damage 80% (4 hits)',
        R2: '[450% ATK + 1600] | Wind ATK +31%, Hit Damage 95% (4 hits)',
        R3: '[480% ATK + 1900] | Wind ATK +37%, Hit Damage 110% (5 hits)',
        R4: '[509% ATK + 2200] | Wind ATK +43%, Hit Damage 125% (5 hits)',
        R5: '[535% ATK + 2500] | Wind ATK +50%, Hit Damage 140% (6 hits)',
      },
    },
    passive1: 'Grants: Physical ATK +259, Accuracy +15',
    passive2: 'Grants: Ultimate Damage +15%, Accuracy +15',
  },

  artia: {
    id: 'artia',
    name: 'Artia',
    rarity: 'SSR',
    element: 'Fire',
    role: 'Tank',
    skill2: {
      name: "Royal Knight's Teachings",
      description:
        'Restores own HP by [(Healing Power × 25) + 416 (+50/lv)] and applies Block +15 (+0.18/lv) for 10 seconds',
      type: 'heal',
      target: 'self',
    },
    skill3: {
      name: 'Beorn Holy Sword Arts: Heroic Strike',
      description:
        'Deals [300% ATK + 100 (+25/lv)] physical damage to the nearest enemy and inflicts Accuracy -15 (-0.18/lv) for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: 'Meteor Trestias',
      description:
        'Deals physical damage to the nearest enemy and applies Shield(Lv5: -60%, unlimited hits) and Taunt to self for 12 seconds',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[300% ATK + 338] | Shield -35% (unlimited hits), Taunt',
        R2: '[360% ATK + 380] | Shield -41% (unlimited hits), Taunt',
        R3: '[405% ATK + 425] | Shield -47% (unlimited hits), Taunt',
        R4: '[434% ATK + 469] | Shield -53% (unlimited hits), Taunt',
        R5: '[450% ATK + 512] | Shield -60% (unlimited hits), Taunt',
      },
    },
    passive1: 'Grants: Physical ATK +159',
    passive2: 'Grants: Physical Def +141',
  },

  gemini: {
    id: 'gemini',
    name: 'Gemini',
    rarity: 'SSR',
    element: 'Fire',
    role: 'Attacker',
    skill2: {
      name: "Don't underestimate a treasure hunter!",
      description: 'Deals [400% ATK + 160 (+30/lv)] physical damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: "This isn't something an idiot could pull off, you know?",
      description:
        'Deals [120% ATK + 50 (+6/lv)] physical damage to the nearest enemy and inflicts Physical DEF -18%-30 (-2/lv) for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: 'Cruel Destroyer',
      description:
        'Deals massive physical damage to the nearest enemy with guaranteed critical hit (Pure Damage - ignores buffs)',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[500% ATK + 500]',
        R2: '[600% ATK + 650]',
        R3: '[750% ATK + 750]',
        R4: '[800% ATK + 800]',
        R5: '[850% ATK + 850]',
      },
    },
    passive1: 'Grants: Physical ATK +159',
    passive2: 'Grants: Physical Crit Damage +90',
  },

  luca: {
    id: 'luca',
    name: 'Luca',
    rarity: 'SSR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Goddess, grant me strength!',
      description: 'Applies Physical ATK +18%+35 (+7/lv) to self for 10 seconds',
      type: 'buff',
      target: 'self',
    },
    skill3: {
      name: 'Do as you please, roa!',
      description:
        'Deals [360% ATK + 160 (+25/lv)] physical damage to the nearest enemy and inflicts Physical Crit Damage -60 (-9/lv) for 7 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: 'Full-Power Strike!',
      description:
        'Deals physical damage to the nearest enemy with guaranteed hit and inflicts Physical ATK DOWN(Lv5: -30%) and Accuracy DOWN(Lv5: -30) for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[450% ATK + 400] | Physical ATK -15%, Accuracy -15',
        R2: '[540% ATK + 470] | Physical ATK -18%, Accuracy -18',
        R3: '[605% ATK + 540] | Physical ATK -22%, Accuracy -22',
        R4: '[660% ATK + 600] | Physical ATK -26%, Accuracy -26',
        R5: '[700% ATK + 650] | Physical ATK -30%, Accuracy -30',
      },
    },
    passive1: 'Grants: Physical ATK +259, Physical Crit Damage +179',
    passive2: 'Front Row allies receive Skill Damage +20%, Action Speed 10%+10',
  },

  festival_empress_shamshel: {
    id: 'festival_empress_shamshel',
    name: '【Festival Empress】Shamshel',
    rarity: 'SSR',
    element: 'Fire',
    role: 'Attacker',
    skill2: {
      name: 'Higher than usual',
      description: 'Applies Magic ATK +18%+35 (+7/lv) to self for 8 seconds',
      type: 'buff',
      target: 'self',
    },
    skill3: {
      name: 'Faster than usual',
      description:
        'Deals [90% ATK + 50 (+8/lv)] magic damage to the nearest enemy and applies Action Speed +20% to self for 6 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: 'Dance with the princess in her gown',
      description:
        'Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(Lv5: -25%) for 10 seconds',
      type: 'damage',
      target: '3 nearest enemies',
      ranks: {
        R1: '[360% ATK + 394] | Magic Def -15%',
        R2: '[450% ATK + 445] | Magic Def -17%',
        R3: '[522% ATK + 496] | Magic Def -20%',
        R4: '[579% ATK + 532] | Magic Def -22%',
        R5: '[612% ATK + 565] | Magic Def -25%',
      },
    },
    passive1: 'Grants: Charm Resistance 100%, Magic ATK +259',
    passive2: 'Grants: Skill Damage +30%, Accuracy +20',
  },

  elegant_shamshel: {
    id: 'elegant_shamshel',
    name: '【Elegant Portrait】Shamshel',
    rarity: 'SSR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: 'Juuump—up we go~',
      description: 'Deals [110% ATK + 50 (+10/lv)] magic damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'The noble princess makes her entrance~',
      description:
        'Deals [90% ATK + 35 (+6/lv)] magic damage to the nearest enemy and inflicts Charm for 3 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: "I'll eat you up and bring peace to the world",
      description:
        'Deals magic damage to the 3 nearest enemies and absorbs 6% of damage dealt as HP',
      type: 'damage',
      target: '3 nearest enemies',
      ranks: {
        R1: '[360% ATK + 394]',
        R2: '[450% ATK + 445]',
        R3: '[522% ATK + 496]',
        R4: '[579% ATK + 532]',
        R5: '[612% ATK + 565]',
      },
    },
    passive1: 'Grants: Charm Resistance 100%',
    passive2: 'Grants: Magic ATK +389',
  },

  nerys: {
    id: 'nerys',
    name: 'Nerys',
    rarity: 'SSR',
    element: 'Mind',
    role: 'Support',
    skill2: {
      name: 'Shockwave',
      description: 'Deals [320% ATK + 120 (+25/lv)] magic damage to the farthest enemy',
      type: 'damage',
      target: 'farthest enemy',
    },
    skill3: {
      name: 'Light Orb',
      description:
        'Deals [280% ATK + 100 (+20/lv)] magic damage to the farthest enemy and inflicts Magic DEF -21%-40 (-2/lv) for 10 seconds',
      type: 'damage',
      target: 'farthest enemy',
    },
    ultimate: {
      name: 'Shining Spear',
      description: 'Deals magic damage to the 2 farthest enemies and inflicts Stun for 3 seconds',
      type: 'damage',
      target: '2 farthest enemies',
      ranks: {
        R1: '[600% ATK + 500]',
        R2: '[720% ATK + 524]',
        R3: '[810% ATK + 599]',
        R4: '[869% ATK + 653]',
        R5: '[930% ATK + 707]',
      },
    },
    passive1: 'Grants: MP Recovery +21',
    passive2: 'Grants: Magic ATK +259',
  },

  soltina: {
    id: 'soltina',
    name: 'Soltina',
    rarity: 'SSR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: 'Shikomaru',
      description:
        'Deals [350% ATK + 140 (+20/lv)] physical damage to the nearest enemy and inflicts Paralysis for 6 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Millionfold',
      description: 'Applies Physical DEF +30%+190 (+3/lv) to self for 10 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Iron Immortal Blossom',
      description: 'Deals physical damage to the nearest enemy with debuff effects',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[360% ATK + 338]',
        R2: '[420% ATK + 379]',
        R3: '[470% ATK + 421]',
        R4: '[509% ATK + 465]',
        R5: '[550% ATK + 501]',
      },
    },
    passive1: 'Grants: Physical ATK +159',
    passive2: 'Grants: Physical Crit Damage +176',
  },

  estiriel: {
    id: 'estiriel',
    name: 'Estiriel',
    rarity: 'SSR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Sylvesto',
      description:
        'Deals [320% ATK + 150 (+25/lv)] magic damage to the farthest enemy and inflicts Physical DEF -18%-30 (-2/lv) and Magic DEF -18%-30 (-2/lv) for 5 seconds',
      type: 'damage',
      target: 'farthest enemy',
    },
    skill3: {
      name: 'Guardian of the Little Dwarves',
      description: 'Applies HP Regen +3%+50 and Block +9 (+0.1/lv) to all allies for 10 seconds',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'O spirits, dance Become the guiding wisdom of all things',
      description:
        'Deals magic damage to all enemies and inflicts Block DOWN(Lv5: -20) and Action Speed DOWN(Lv5: -20%-20) for 10 seconds',
      type: 'damage',
      target: 'all enemies',
      ranks: {
        R1: '[550% ATK + 700] | Block -10, Action Speed -10%-10',
        R2: '[750% ATK + 500] | Block -12, Action Speed -12%-12',
        R3: '[900% ATK + 550] | Block -15, Action Speed -15%-15',
        R4: '[1000% ATK + 600] | Block -17, Action Speed -17%-17',
        R5: '[1100% ATK + 680] | Block -20, Action Speed -20%-20',
      },
    },
    passive1: 'Grants: Magic ATK +259, Action Speed 10%+10',
    passive2: 'All allies receive Healing Received +20%, Block +10',
  },

  hildis: {
    id: 'hildis',
    name: 'Hildis',
    rarity: 'SSR',
    element: 'Fire',
    role: 'Attacker',
    skill2: {
      name: 'Thunderfire',
      description:
        'Deals [350% ATK + 150 (+20/lv)] physical damage to the nearest enemy and inflicts Physical DEF -30%+190 (-3/lv) for 5 seconds and Burn for 12 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Armor-Sleeve Touch',
      description:
        'Applies Physical ATK +15%+30 (+5/lv) and Action Speed +14% to self for 10 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Heaven Sever',
      description:
        'Deals physical damage to the 3 nearest enemies and inflicts Physical DEF DOWN(Lv5: -25%) and Block DOWN(Lv5: -25) for 8 seconds',
      type: 'damage',
      target: '3 nearest enemies',
      ranks: {
        R1: '[420% ATK + 390] | Physical Def -15%, Block -15',
        R2: '[505% ATK + 450] | Physical Def -17%, Block -17',
        R3: '[570% ATK + 515] | Physical Def -20%, Block -20',
        R4: '[610% ATK + 562] | Physical Def -22%, Block -22',
        R5: '[650% ATK + 610] | Physical Def -25%, Block -25',
      },
    },
    passive1: 'Grants: Max HP +3444, Physical ATK +259',
    passive2: 'Front Row allies receive Physical Crit Damage +90, Physical ATK +130',
  },

  marina: {
    id: 'marina',
    name: 'Marina',
    rarity: 'SSR',
    element: 'Water',
    role: 'Support',
    skill2: {
      name: 'Star Procession',
      description:
        'Deals [100% ATK + 50 (+6/lv)] physical damage to the nearest enemy and inflicts Action Speed -20% and Block -13 (-0.15/lv) for 6 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Future Sight',
      description:
        'Applies Physical Crit Damage +40 (+5/lv) and Magic Crit +40 (+5/lv) to all allies for 6 seconds',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'La Roue de Fortune',
      description:
        'Applies Action Speed UP(Lv5: +20%+20) for 8 seconds and Shield(Lv5: -40%, unlimited hits, 6s) to all allies',
      type: 'buff',
      target: 'all allies',
      ranks: {
        R1: 'Action Speed +10%+10, Shield -30% (unlimited hits, 4s)',
        R2: 'Action Speed +12%+12, Shield -32% (unlimited hits, 4s)',
        R3: 'Action Speed +15%+15, Shield -35% (unlimited hits, 5s)',
        R4: 'Action Speed +17%+17, Shield -37% (unlimited hits, 5s)',
        R5: 'Action Speed +20%+20, Shield -40% (unlimited hits, 6s)',
      },
    },
    passive1: 'Middle Row allies receive Physical Crit Damage +90, Magic Crit Damage +90',
    passive2: 'Middle Row allies receive Skill Damage +20%, Action Speed 5%+5',
  },

  stenlina: {
    id: 'stenlina',
    name: 'Stenlina',
    rarity: 'SSR',
    element: 'Light',
    role: 'Attacker',
    skill2: {
      name: 'Pillar of Sanctity',
      description: 'Deals [150% ATK + 70 (+10/lv)] magic damage to the 3 nearest enemies',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: 'Feather Dance',
      description:
        'Deals [130% ATK + 50 (+6/lv)] magic damage to the 3 nearest enemies and inflicts Physical ATK -9%-20 (-2/lv) and Magic ATK -9%-20 (-2/lv) for 10 seconds',
      type: 'damage',
      target: '3 nearest enemies',
    },
    ultimate: {
      name: 'Trail that Destroys Evil',
      description:
        'Deals magic damage to the 3 nearest enemies and inflicts Physical Crit DOWN(Lv5: -20%) and Magic Crit DOWN(Lv5: -20%) for 10 seconds',
      type: 'damage',
      target: '3 nearest enemies',
      ranks: {
        R1: '[430% ATK + 400] | Physical Crit -10%, Magic Crit -10%',
        R2: '[480% ATK + 409] | Physical Crit -12%, Magic Crit -12%',
        R3: '[540% ATK + 453] | Physical Crit -15%, Magic Crit -15%',
        R4: '[580% ATK + 468] | Physical Crit -17%, Magic Crit -17%',
        R5: '[600% ATK + 482] | Physical Crit -20%, Magic Crit -20%',
      },
    },
    passive1: 'Grants: Magic ATK +259, Action Speed 10%+10',
    passive2: 'Grants: Block +15, Skill Damage +30%',
  },

  hisara: {
    id: 'hisara',
    name: 'Hisara',
    rarity: 'SSR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Spinning Blade',
      description:
        'Deals [110% ATK + 50 (+8/lv)] physical damage to the 3 enemies with lowest HP and inflicts Action Speed -20% for 8 seconds',
      type: 'damage',
      target: '3 enemies with lowest HP',
    },
    skill3: {
      name: 'Ring Blade',
      description: 'Deals [130% ATK + 60 (+10/lv)] physical damage to the 3 enemies with lowest HP',
      type: 'damage',
      target: '3 enemies with lowest HP',
    },
    ultimate: {
      name: 'Eradicator',
      description:
        'Deals physical damage to 3 enemies and applies Action Speed UP(Lv5: +30%+30) to self for 12 seconds',
      type: 'damage',
      target: '3 enemies',
      ranks: {
        R1: '[450% ATK + 400] | Action Speed +20%+20',
        R2: '[550% ATK + 480] | Action Speed +22%+22',
        R3: '[600% ATK + 560] | Action Speed +25%+25',
        R4: '[650% ATK + 600] | Action Speed +27%+27',
        R5: '[680% ATK + 640] | Action Speed +30%+30',
      },
    },
    passive1: 'Grants: MP Recovery +42 (on kill), Physical ATK +420 (on kill, 5s)',
    passive2: 'Grants: Physical ATK +259, Physical Crit Damage +176',
  },

  bianca: {
    id: 'bianca',
    name: 'Bianca',
    rarity: 'SSR',
    element: 'Mind',
    role: 'Attacker',
    skill2: {
      name: 'Cross Slash',
      description: 'Deals [145% ATK + 100 (+10/lv)] physical damage to the 3 nearest enemies',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: "Paladin's Awakening",
      description:
        'Applies Physical ATK +20%+40 (+9/lv) and Mind Type ATK +10% to self for 10 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Oracle of the Demon-Slaying Goddess',
      description:
        'Deals physical damage to all enemies and inflicts Silence for 6 seconds and Curse for 3 seconds',
      type: 'damage',
      target: 'all enemies',
      ranks: {
        R1: '[560% ATK + 700]',
        R2: '[760% ATK + 500]',
        R3: '[930% ATK + 550]',
        R4: '[1019% ATK + 600]',
        R5: '[1110% ATK + 680]',
      },
    },
    passive1: 'Grants: Physical ATK +159, Action Speed 15%+15',
    passive2: 'Grants: Mind Type ATK +10%, Block +20',
  },

  natasha: {
    id: 'natasha',
    name: 'Natasha',
    rarity: 'SSR',
    element: 'Water',
    role: 'Tank',
    skill2: {
      name: 'Shield Bash',
      description:
        'Deals [350% ATK + 130 (+20/lv)] physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17% for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Solid Defense',
      description: 'Applies Physical DEF +40%+200 (+4/lv) and Taunt to self for 12 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Reflective Impact',
      description:
        'Applies Physical Reflect Shield(Lv5: 500% +5000/lv, unlimited hits) to self for 15 seconds - reflects damage back to attackers',
      type: 'buff',
      target: 'self',
      ranks: {
        R1: 'Physical Reflect 250% (+2500/lv, unlimited hits)',
        R2: 'Physical Reflect 312% (+3125/lv, unlimited hits)',
        R3: 'Physical Reflect 375% (+3750/lv, unlimited hits)',
        R4: 'Physical Reflect 437% (+4375/lv, unlimited hits)',
        R5: 'Physical Reflect 500% (+5000/lv, unlimited hits)',
      },
    },
    passive1: 'Grants: Physical Def +141, Max HP +3444',
    passive2: 'Grants: Physical Def +211, Healing Received +30%',
  },

  venus: {
    id: 'venus',
    name: 'Venus',
    rarity: 'SR',
    element: 'Light',
    role: 'Support',
    skill2: {
      name: 'Charming Smile',
      description: 'Applies Physical Crit Damage +40 (+5/lv) to the frontmost ally for 8 seconds',
      type: 'buff',
      target: 'frontmost ally',
    },
    skill3: {
      name: 'Blessing of the Love Goddess',
      description: 'Applies Physical DEF +20%+140 (+2/lv) to the frontmost ally for 8 seconds',
      type: 'buff',
      target: 'frontmost ally',
    },
    ultimate: {
      name: 'Grace Granted by the Love Goddess',
      description:
        'Applies Physical ATK UP(Lv5: +35%) and Magic ATK UP(Lv5: +35%) to front row allies for 10 seconds',
      type: 'buff',
      target: 'front row allies',
      ranks: {
        R1: 'Physical ATK +20%, Magic ATK +20%',
        R2: 'Physical ATK +23%, Magic ATK +23%',
        R3: 'Physical ATK +27%, Magic ATK +27%',
        R4: 'Physical ATK +31%, Magic ATK +31%',
        R5: 'Physical ATK +35%, Magic ATK +35%',
      },
    },
    passive1: 'Grants: Physical ATK +300',
    passive2: 'Grants: Physical Crit Damage +120',
  },

  artemis: {
    id: 'artemis',
    name: 'Artemis',
    rarity: 'SR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Iokaela',
      description:
        'Deals [170% ATK + 100 (+15/lv)] physical damage to the nearest enemy (guaranteed hit and crit)',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Aporosa',
      description:
        'Applies Physical ATK +18%+35 (+7/lv) and Action Speed +14%+14 to self for 10 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: "The Maiden Goddess's Arrow that Purges Impurity",
      description:
        'Deals physical damage to the nearest enemy (guaranteed hit/crit) and inflicts Wind Type DEF DOWN(Lv5: -30%) for 8 seconds',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[600% ATK + 785] | Wind Type Def -15%',
        R2: '[660% ATK + 912] | Wind Type Def -18%',
        R3: '[700% ATK + 1033] | Wind Type Def -22%',
        R4: '[740% ATK + 1137] | Wind Type Def -26%',
        R5: '[770% ATK + 1201] | Wind Type Def -30%',
      },
    },
    passive1: 'Grants: Physical ATK +259',
    passive2: 'Grants: Action Speed 10%+10, Skill Damage +10%',
  },

  queen_of_pies_and_cookies_aphrodia: {
    id: 'queen_of_pies_and_cookies_aphrodia',
    name: '【Queen of Pies and Cookies】Aphrodia',
    rarity: 'SSR',
    element: 'Mind',
    role: 'Attacker',
    skill2: {
      name: "Won't you taste my sweets?",
      description:
        'Deals [330% ATK + 150 (+20/lv)] physical damage to the nearest enemy and inflicts Poison for 8 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Come now, have some.',
      description: 'Applies Hit-Based Damage +18%+35 (+7/lv) to all allies for 15 seconds',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'Accept it—this is your reward.',
      description:
        'Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(Lv5: -30%-30) and Block DOWN(Lv5: -30) for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[1170% ATK + 800] | Action Speed -15%-15, Block -15',
        R2: '[1400% ATK + 1000] | Action Speed -18%-18, Block -18',
        R3: '[1560% ATK + 1100] | Action Speed -22%-22, Block -22',
        R4: '[1670% ATK + 1200] | Action Speed -26%-26, Block -26',
        R5: '[1730% ATK + 1300] | Action Speed -30%-30, Block -30',
      },
    },
    passive1: 'Grants: Physical ATK +389',
    passive2: 'Grants: Skill Damage +30%',
  },

  luceria: {
    id: 'luceria',
    name: 'Luceria',
    rarity: 'SSR',
    element: 'Light',
    role: 'Attacker',
    skill2: {
      name: 'Heart Racing',
      description:
        'Applies Physical ATK +12%+25 (+3/lv) and Physical DEF +15%+100 (+1/lv) to the 3 nearest allies for 8 seconds',
      type: 'buff',
      target: '3 nearest allies',
    },
    skill3: {
      name: 'Mm, good idea!',
      description:
        'Restores HP by [(Healing Power × 8) + 500 (+12/lv)] to the 3 nearest allies and removes all debuffs',
      type: 'heal',
      target: '3 nearest allies',
    },
    ultimate: {
      name: 'Super Breast Smothering',
      description: 'Restores HP to the 3 nearest allies and applies Physical ATK UP and Block UP',
      type: 'heal',
      target: '3 nearest allies',
      ranks: {
        R1: 'Heal [(Healing Power × 13) + 1123]',
        R2: 'Heal [(Healing Power × 16) + 1239]',
        R3: 'Heal [(Healing Power × 18) + 1376]',
        R4: 'Heal [(Healing Power × 20) + 1555]',
        R5: 'Heal [(Healing Power × 21) + 1734]',
      },
    },
    passive1: 'Grants: Max HP +1447',
    passive2: 'Grants: Healing Amount +10%',
  },

  ishtovia: {
    id: 'ishtovia',
    name: 'Ishtovia',
    rarity: 'SSR',
    element: 'Light',
    role: 'Support',
    skill2: {
      name: 'Receive the punishment of the gods',
      description:
        'Deals [170% ATK + 100 (+13/lv)] magic damage to the enemy with the lowest HP (guaranteed hit and crit)',
      type: 'damage',
      target: 'enemy with lowest HP',
    },
    skill3: {
      name: 'Divine Love',
      description:
        'Restores HP by [(Healing Power × 20) + 600 (+35/lv)] to the ally with the lowest HP',
      type: 'heal',
      target: 'ally with lowest HP',
    },
    ultimate: {
      name: 'Radiance of the Gods',
      description:
        'Deals magic damage to the nearest enemy (guaranteed hit/crit) and inflicts Magic DEF DOWN and Silence for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[810% ATK + 783]',
        R2: '[972% ATK + 920]',
        R3: '[1090% ATK + 1022]',
        R4: '[1175% ATK + 1115]',
        R5: '[1255% ATK + 1209]',
      },
    },
    passive1: 'When enemy is defeated, gain MP Recovery +21',
    passive2: 'Grants: Magic ATK +259, Magic Def +70',
  },

  nora: {
    id: 'nora',
    name: 'Nora',
    rarity: 'SSR',
    element: 'Fire',
    role: 'Tank',
    skill2: {
      name: 'Rock Burst',
      description:
        'Deals [105% ATK + 60 (+6/lv)] physical damage to the 3 nearest enemies and inflicts Physical Crit -50 (-7/lv) and Magic Crit -50 (-7/lv) for 11 seconds',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: 'Arm of Growth',
      description:
        'Applies Physical Crit Damage +50 (+7/lv) and Shield to the 3 nearest allies for 10 seconds',
      type: 'buff',
      target: '3 nearest allies',
    },
    ultimate: {
      name: "Gigant's Hammer",
      description:
        'Deals physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(Lv5: -20%-20) for 10 seconds',
      type: 'damage',
      target: 'all enemies',
      ranks: {
        R1: '[450% ATK + 630] | Action Speed -10%-10',
        R2: '[630% ATK + 748] | Action Speed -12%-12',
        R3: '[765% ATK + 851] | Action Speed -15%-15',
        R4: '[855% ATK + 963] | Action Speed -17%-17',
        R5: '[900% ATK + 1076] | Action Speed -20%-20',
      },
    },
    passive1: 'Grants: Max HP +3444, Block +15',
    passive2: 'Front Row allies receive: Physical Def +141, Magic Def +141',
  },

  sobrina: {
    id: 'sobrina',
    name: 'Sobrina',
    rarity: 'SSR',
    element: 'Mind',
    role: 'Attacker',
    skill2: {
      name: 'This is an order from your superior',
      description:
        'Restores HP by [(Healing Power × 33) + 834 (+60/lv)] to the ally with the lowest HP and applies Block +9 (+0.1/lv) for 8 seconds',
      type: 'heal',
      target: 'ally with lowest HP',
    },
    skill3: {
      name: 'Lacking self-awareness',
      description:
        'Applies Physical DEF +20%+140 (+2/lv) to the ally with the lowest HP for 8 seconds',
      type: 'buff',
      target: 'ally with lowest HP',
    },
    ultimate: {
      name: "It's break time now",
      description:
        'Restores HP to all allies and applies Debuff Resistance UP(Lv5: +30%) for 6 seconds',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: 'Heal [(Healing Power × 23) + 698]',
        R2: 'Heal [(Healing Power × 26.45) + 752]',
        R3: 'Heal [(Healing Power × 28.75) + 810]',
        R4: 'Heal [(Healing Power × 31.05) + 862]',
        R5: 'Heal [(Healing Power × 32.2) + 908]',
      },
    },
    passive1: 'Grants: Healing Amount +15%',
    passive2: 'Grants: Physical Def +70',
  },

  meinias: {
    id: 'meinias',
    name: 'Meinias',
    rarity: 'SSR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Oboro Night',
      description:
        'Deals [100% ATK + 40 (+6/lv)] physical damage to the 3 nearest enemies and inflicts Accuracy -11 (-0.13/lv) and Block -11 (-0.13/lv) for 8 seconds',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: 'Shadow Dance',
      description:
        'Applies Physical ATK +18%+35 (+7/lv) and Block +11 (+0.13/lv) to self for 12 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Limit Arrow',
      description:
        'Deals physical damage to the nearest enemy and applies Hit-Based Damage UP(Lv5: +200%, 5 hits, +2000/lv) to self for 10 seconds',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[500% ATK + 1400] | Hit Damage +100% (3 hits, +600/lv)',
        R2: '[540% ATK + 2000] | Hit Damage +125% (4 hits, +950/lv)',
        R3: '[570% ATK + 2400] | Hit Damage +150% (4 hits, +1300/lv)',
        R4: '[600% ATK + 2700] | Hit Damage +175% (5 hits, +1650/lv)',
        R5: '[630% ATK + 3000] | Hit Damage +200% (5 hits, +2000/lv)',
      },
    },
    passive1: 'Grants: Accuracy +25, Action Speed 10%+10',
    passive2: 'Grants: Physical ATK +259, Ultimate Damage +15%',
  },

  yu_lima_elka: {
    id: 'yu_lima_elka',
    name: 'Yu Lima Elka',
    rarity: 'SSR',
    element: 'Dark',
    role: 'Tank',
    skill2: {
      name: 'Let Me Play With You',
      description:
        'Deals [110% ATK + 60 (+6/lv)] physical damage to the 3 nearest enemies and inflicts Physical ATK -9%-20 (-2/lv) and Magic ATK -9%-20 (-2/lv) for 7 seconds',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: 'Become My Captive',
      description:
        'Deals [300% ATK + 150 (+25/lv)] physical damage to the nearest enemy and inflicts Charm for 3 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: 'Phantom Nail',
      description:
        'Deals physical damage to the nearest enemy and inflicts Paralysis(Lv5: 8s) and Curse(Lv5: 8s, no HP/MP regen, Speed -50%)',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[900% ATK + 850] | Paralysis (6s), Curse (6s)',
        R2: '[1080% ATK + 920] | Paralysis (6s), Curse (6s)',
        R3: '[1170% ATK + 1010] | Paralysis (7s), Curse (7s)',
        R4: '[1260% ATK + 1150] | Paralysis (7s), Curse (7s)',
        R5: '[1350% ATK + 1300] | Paralysis (8s), Curse (8s)',
      },
    },
    passive1: 'Grants: Max HP +3444, Block +15',
    passive2: 'Grants: Skill Damage +20%, Action Speed 10%+10',
  },

  festive_natasha: {
    id: 'festive_natasha',
    name: '【Festive Costume】Natasha',
    rarity: 'SR',
    element: 'Light',
    role: 'Tank',
    skill2: {
      name: 'The gown feels so light!',
      description:
        'Deals [240% ATK + 125 (+20/lv)] physical damage to the nearest enemy and inflicts Poison for 8 seconds',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'I must keep it perfectly clean.',
      description: 'Applies Block +13 (+0.15/lv) and Taunt to self for 12 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'The princess stands for justice!',
      description:
        'Deals physical damage to the 3 nearest enemies and inflicts Confusion and Fear for 10 seconds',
      type: 'damage',
      target: '3 nearest enemies',
      ranks: {
        R1: '[225% ATK + 404]',
        R2: '[280% ATK + 509]',
        R3: '[325% ATK + 553]',
        R4: '[358% ATK + 568]',
        R5: '[380% ATK + 602]',
      },
    },
    passive1: 'Grants: Physical Def +141',
    passive2: 'Grants: Max HP +2896, Healing Received +20%',
  },

  holy_night_succubus_yu_rima_elca: {
    id: 'holy_night_succubus_yu_rima_elca',
    name: '【Holy Night Succubus】Yu Rima Elca',
    rarity: 'SR',
    element: 'Mind',
    role: 'Attacker',
    skill2: {
      name: 'Alright, this is for you.',
      description:
        'Deals [100% ATK + 50 (+6/lv)] magic damage to the 3 nearest enemies and inflicts Burn for 12 seconds',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: "Even if Santa gets it, it's fine, right?",
      description:
        'Inflicts Charm for 1 second and Magic DEF -18%-30 (-2/lv) for 8 seconds on the 3 nearest enemies (no damage)',
      type: 'debuff',
      target: '3 nearest enemies',
    },
    ultimate: {
      name: 'The gift... is... me.',
      description:
        'Deals magic damage to all enemies and absorbs 6% of damage as HP, removes enemy buffs (Dispel, Lv5: 3s)',
      type: 'damage',
      target: 'all enemies',
      ranks: {
        R1: '[1100% ATK + 500] | Dispel (1s)',
        R2: '[1300% ATK + 600] | Dispel (2s)',
        R3: '[1430% ATK + 700] | Dispel (2s)',
        R4: '[1500% ATK + 750] | Dispel (3s)',
        R5: '[1550% ATK + 800] | Dispel (3s)',
      },
    },
    passive1: 'Grants: Magic ATK +259',
    passive2: 'Grants: Skill Damage +20%, Max HP +2896',
  },

  magical_holy_night_festival_kaguya: {
    id: 'magical_holy_night_festival_kaguya',
    name: '【Magical Holy Night Festival】Kaguya',
    rarity: 'SSR',
    element: 'Mind',
    role: 'Tank',
    skill2: {
      name: 'Someone is waiting for me.',
      description:
        'Deals [130% ATK + 100 (+7/lv)] magic damage to the nearest enemy and inflicts Poison and Block DOWN',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Please... just for tonight.',
      description:
        'Applies Hit-Based Healing Shield (-30%+90, heals 40% of absorbed, 9 hits) and Block +13 (+0.15/lv) to self for 15 seconds',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'I, too, can make someone happy.',
      description:
        'Restores HP to all allies and applies Physical DEF UP(Lv5: +40%+500) and Magic DEF UP(Lv5: +40%+500) for 10 seconds',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: 'Heal [(Healing Power × 26) + 1500] | Physical Def +20%+250, Magic Def +20%+250',
        R2: 'Heal [(Healing Power × 30) + 1800] | Physical Def +25%+312, Magic Def +25%+312',
        R3: 'Heal [(Healing Power × 32.5) + 2000] | Physical Def +30%+375, Magic Def +30%+375',
        R4: 'Heal [(Healing Power × 35) + 2100] | Physical Def +35%+437, Magic Def +35%+437',
        R5: 'Heal [(Healing Power × 37) + 2200] | Physical Def +40%+500, Magic Def +40%+500',
      },
    },
    passive1: 'Grants: Healing Amount +15%, Max HP +3444',
    passive2: 'All allies receive: Physical Def +141, Magic Def +141',
  },

  kaguya: {
    id: 'kaguya',
    name: 'Kaguya',
    rarity: 'SSR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: "Poison Princess's Embrace",
      description:
        'Deals [250% MATK + 150 (+20/lv)] magic damage to the nearest enemy and inflicts Poison LvMax (HP -300 -30/lv per sec) for 10s and Block DOWN Lv5 (-13 -0.15/lv) for 8s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Calamity of Serpent Venom',
      description:
        'Deals [85% MATK + 70 (+6/lv)] magic damage to the 3 nearest enemies and inflicts Curse (No HP/MP recovery, Action Speed -50%, Crit Rate 0) for 5s and Accuracy DOWN Lv4 (-11 -0.13/lv) for 8s',
      type: 'damage',
      target: '3 nearest enemies',
    },
    ultimate: {
      name: 'Endless Wailing Black Lotus',
      description:
        'Deals magic damage to all enemies and inflicts Confusion + Fear. Confusion: Attacks indiscriminately, cannot use Ultimates. Fear: MP drain per tick, Block = 0',
      type: 'damage',
      target: 'all enemies',
      ranks: {
        R1: '[450% ATK + 350] | Confusion 5s, Fear Lv1 (MP -30/tick)',
        R2: '[550% ATK + 450] | Confusion 6s, Fear Lv2 (MP -40/tick)',
        R3: '[630% ATK + 500] | Confusion 6s, Fear Lv3 (MP -50/tick)',
        R4: '[700% ATK + 550] | Confusion 7s, Fear Lv4 (MP -60/tick)',
        R5: '[750% ATK + 600] | Confusion 8s, Fear Lv5 (MP -70/tick)',
      },
    },
    passive1: 'Grants: Action Speed +10%+10, Magic ATK +259',
    passive2: 'Grants: Ultimate Damage +15%, Magic Crit +90 (+4.5% crit rate)',
  },

  // ========================================
  // 38 MISSING CHARACTERS - R, SR, SSR
  // ========================================

  // R Characters
  shamshel_r: {
    id: 'shamshel_r',
    name: 'Shamshel',
    rarity: 'R',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: 'Annoying!',
      description: 'Deals [235% ATK + 70 (+20/lv)] magic damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: "Mm-hmm, I'm the First Queen♪",
      description:
        'Deals [188% ATK + 100 (+16/lv)] magic damage to the nearest enemy and inflicts Charm for 2s',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: "I'll eat you up!",
      description: 'Deals magic damage to the nearest enemy with 6% lifesteal',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[300% ATK + 221] + 6% lifesteal',
        R2: '[360% ATK + 266] + 6% lifesteal',
        R3: '[405% ATK + 301] + 6% lifesteal',
        R4: '[434% ATK + 349] + 6% lifesteal',
        R5: '[465% ATK + 367] + 6% lifesteal',
      },
    },
    passive1: 'Charm Resistance +100%',
    passive2: 'Magic ATK +130',
  },

  aysis: {
    id: 'aysis',
    name: 'Aysis',
    rarity: 'R',
    element: 'Mind',
    role: 'Tank',
    skill2: {
      name: 'Edelrant-Style Swordsmanship: Earthstride',
      description: 'Deals [160% ATK + 100 (+10/lv)] physical damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Pride of the Royal Guards',
      description: 'Applies Physical DEF +15%+100 to self for 7s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Edelrant-Style Swordsmanship Ultimate: Aurora Blade',
      description:
        'Deals physical damage to the nearest enemy and inflicts Physical ATK DOWN for 10s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[1300% ATK + 615] | Physical ATK -10',
        R2: '[1450% ATK + 706] | Physical ATK -13',
        R3: '[1570% ATK + 818] | Physical ATK -16',
        R4: '[1689% ATK + 951] | Physical ATK -18',
        R5: '[1750% ATK + 1064] | Physical ATK -20',
      },
    },
    passive1: 'Physical DEF +70',
    passive2: 'Physical Crit Damage +59',
  },

  roxanne: {
    id: 'roxanne',
    name: 'Roxanne',
    rarity: 'R',
    element: 'Mind',
    role: 'Support',
    skill2: {
      name: 'Skillet Smash',
      description:
        'Deals [233% ATK + 70 (+16/lv)] physical damage to the nearest enemy and inflicts Stun for 2s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Come Drink Some Milk',
      description: 'Heals [3100% ATK + 652 (+50/lv)] HP to the ally with lowest HP',
      type: 'heal',
      target: 'ally with lowest HP',
    },
    ultimate: {
      name: "Roxanne's Special Thick Soup",
      description:
        'Heals all allies and applies Physical ATK UP for 10s',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: '[1800% ATK + 1712] | Physical ATK +15',
        R2: '[2150% ATK + 1833] | Physical ATK +20',
        R3: '[2400% ATK + 1945] | Physical ATK +24',
        R4: '[2600% ATK + 2056] | Physical ATK +27',
        R5: '[2750% ATK + 2134] | Physical ATK +30',
      },
    },
    passive1: 'Physical Crit Damage +59',
    passive2: 'Healing Amount +10%',
  },

  luceria_r: {
    id: 'luceria_r',
    name: 'Luceria',
    rarity: 'R',
    element: 'Mind',
    role: 'Tank',
    skill2: {
      name: 'Heart Racing',
      description: 'Applies Physical ATK +12%+25 to the nearest ally for 8s',
      type: 'buff',
      target: 'nearest ally',
    },
    skill3: {
      name: 'Mm, good idea!',
      description:
        'Heals [800% ATK + 500 (+12/lv)] HP to the nearest ally and applies Debuff Resistance',
      type: 'heal',
      target: 'nearest ally',
    },
    ultimate: {
      name: 'Super Breast Smothering',
      description: 'Heals allies and applies Block UP for 10s',
      type: 'heal',
      target: 'allies',
      ranks: {
        R1: '[1300% ATK + 1123] | Block +10',
        R2: '[1600% ATK + 1239] | Block +13',
        R3: '[1800% ATK + 1376] | Block +16',
        R4: '[2000% ATK + 1555] | Block +18',
        R5: '[2100% ATK + 1734] | Block +20',
      },
    },
    passive1: 'Max HP +1447',
    passive2: 'Healing Amount +10%',
  },

  aphrodia_r: {
    id: 'aphrodia_r',
    name: 'Aphrodia',
    rarity: 'R',
    element: 'Mind',
    role: 'Support',
    skill2: {
      name: "Queen's Rejection",
      description: 'Applies Physical Crit Damage +20 to all allies for 8s',
      type: 'buff',
      target: 'all allies',
    },
    skill3: {
      name: "Queen's Reward",
      description: 'Applies Physical ATK +10%+20 to all allies for 8s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: "The Continent's Shining Treasure",
      description: 'Deals damage and applies Hit-Based Shield to all allies for 10s',
      type: 'buff',
      target: 'all allies',
      ranks: {
        R1: '[2400% ATK + 309] | Shield +20%',
        R2: '[2760% ATK + 339] | Shield +25%',
        R3: '[3000% ATK + 380] | Shield +25%',
        R4: '[3240% ATK + 414] | Shield +30%',
        R5: '[3360% ATK + 498] | Shield +30%',
      },
    },
    passive1: 'Block +10',
    passive2: 'Healing Amount +10%',
  },

  drowatt: {
    id: 'drowatt',
    name: 'Drowatt',
    rarity: 'R',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Even though you want to get so close…',
      description:
        'Deals [225% ATK + 100 (+20/lv)] physical damage to the enemy with highest Physical ATK',
      type: 'damage',
      target: 'enemy with highest Physical ATK',
    },
    skill3: {
      name: "Drowatt just doesn't knooow♪",
      description:
        'Deals [178% ATK + 90 (+16/lv)] physical damage to the enemy with highest Physical ATK and inflicts Charm for 3s',
      type: 'damage',
      target: 'enemy with highest Physical ATK',
    },
    ultimate: {
      name: 'Alluring Bounce♪',
      description: 'Deals physical damage and inflicts Physical ATK DOWN for 10s',
      type: 'damage',
      target: 'enemy with highest Physical ATK',
      ranks: {
        R1: '[750% ATK + 650] | Physical ATK -5',
        R2: '[900% ATK + 730] | Physical ATK -8',
        R3: '[1050% ATK + 790] | Physical ATK -11',
        R4: '[1150% ATK + 850] | Physical ATK -14',
        R5: '[1200% ATK + 900] | Physical ATK -15',
      },
    },
    passive1: 'Physical DEF +70',
    passive2: 'Physical ATK +130',
  },

  aristera: {
    id: 'aristera',
    name: 'Aristera',
    rarity: 'R',
    element: 'Mind',
    role: 'Attacker',
    skill2: {
      name: 'I want to make you feel even better',
      description:
        'Deals [270% ATK + 100 (+20/lv)] magic damage to the enemy with highest Magic ATK',
      type: 'damage',
      target: 'enemy with highest Magic ATK',
    },
    skill3: {
      name: 'As you like it♪',
      description:
        'Deals [216% ATK + 90 (+16/lv)] magic damage to the enemy with highest Magic ATK and inflicts Blind for 8s',
      type: 'damage',
      target: 'enemy with highest Magic ATK',
    },
    ultimate: {
      name: 'Seductive Bounce♪',
      description: 'Deals magic damage and inflicts Petrify for 2s',
      type: 'damage',
      target: 'enemy with highest Magic ATK',
      ranks: {
        R1: '[1035% ATK + 711] | Petrify (2s)',
        R2: '[1242% ATK + 802] | Petrify (2s)',
        R3: '[1400% ATK + 892] | Petrify (2s)',
        R4: '[1502% ATK + 952] | Petrify (2s)',
        R5: '[1605% ATK + 1032] | Petrify (2s)',
      },
    },
    passive1: 'Magic DEF +70',
    passive2: 'Magic ATK +130',
  },

  rosalyn: {
    id: 'rosalyn',
    name: 'Rosalyn',
    rarity: 'R',
    element: 'Water',
    role: 'Attacker',
    skill2: {
      name: "Princess Pirate's Strike",
      description:
        'Deals [265% ATK + 80 (+16/lv)] physical damage to the nearest enemy and inflicts Physical DEF -18%-30 for 8s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Women are full of love and mystery, you know',
      description: 'Applies Block +5 to all allies for 10s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'Let me punish you',
      description: 'Deals physical damage and inflicts Stun for 3s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[310% ATK + 266] | Stun (3s)',
        R2: '[370% ATK + 307] | Stun (3s)',
        R3: '[416% ATK + 346] | Stun (3s)',
        R4: '[447% ATK + 379] | Stun (3s)',
        R5: '[478% ATK + 402] | Stun (3s)',
      },
    },
    passive1: 'Physical DEF +70',
    passive2: 'Physical Crit Damage +59',
  },

  estria: {
    id: 'estria',
    name: 'Estria',
    rarity: 'R',
    element: 'Mind',
    role: 'Tank',
    skill2: {
      name: 'Torlild Schuthein',
      description:
        'Deals [180% ATK + 90 (+12/lv)] physical damage to the nearest enemy and inflicts Physical ATK -7%-15 for 8s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Will of the Queen of Nordrant',
      description: 'Applies Taunt to self for 10s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Supreme Orb that Resonates Across the World',
      description: 'Deals physical damage and applies HP Regen to self for 3s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[700% ATK + 527] | HP Regen +10',
        R2: '[840% ATK + 709] | HP Regen +13',
        R3: '[955% ATK + 787] | HP Regen +16',
        R4: '[1025% ATK + 863] | HP Regen +18',
        R5: '[1100% ATK + 939] | HP Regen +20',
      },
    },
    passive1: 'Physical DEF +70',
    passive2: 'Max HP +1447',
  },

  celebria: {
    id: 'celebria',
    name: 'Celebria',
    rarity: 'R',
    element: 'Water',
    role: 'Tank',
    skill2: {
      name: 'Curient Kon Lemolinos',
      description:
        'Deals [220% ATK + 100 (+16/lv)] magic damage to the enemy with highest Magic ATK and inflicts Magic ATK -9%-20 for 8s',
      type: 'damage',
      target: 'enemy with highest Magic ATK',
    },
    skill3: {
      name: 'Abresa El Agua',
      description: 'Heals [2203% ATK + 1010 (+50/lv)] HP to self and applies Block +9 for 8s',
      type: 'heal',
      target: 'self',
    },
    ultimate: {
      name: "Sea's Love that Leads to Calamity",
      description: 'Deals magic damage and inflicts Action Speed DOWN for 8s',
      type: 'damage',
      target: 'enemies',
      ranks: {
        R1: '[240% ATK + 329] | Action Speed -8%-8',
        R2: '[300% ATK + 381] | Action Speed -10%-10',
        R3: '[350% ATK + 428] | Action Speed -12%-12',
        R4: '[385% ATK + 465] | Action Speed -14%-14',
        R5: '[470% ATK + 501] | Action Speed -15%-15',
      },
    },
    passive1: 'Magic ATK +130',
    passive2: 'Healing Received +20%',
  },

  xevia: {
    id: 'xevia',
    name: 'Xevia',
    rarity: 'R',
    element: 'Wind',
    role: 'Tank',
    skill2: {
      name: 'Double Strike',
      description: 'Deals [180% ATK + 150 (+11/lv)] physical damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Instinct',
      description: 'Applies Physical ATK +15%+30 to self for 12s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Sword Slash',
      description: 'Deals physical damage to the nearest enemy (guaranteed hit/crit)',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[700% ATK + 400]',
        R2: '[840% ATK + 500]',
        R3: '[950% ATK + 550]',
        R4: '[1030% ATK + 580]',
        R5: '[1100% ATK + 600]',
      },
    },
    passive1: 'Physical ATK +130',
    passive2: 'Max HP +1447',
  },

  shahar: {
    id: 'shahar',
    name: 'Shahar',
    rarity: 'R',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: 'Scattering Claws',
      description: 'Deals [270% ATK + 80 (+20/lv)] physical damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Temptation',
      description:
        'Deals [125% ATK + 60 (+6/lv)] physical damage to the nearest enemy and inflicts Physical ATK -7%-15 for 10s',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: 'Temptation Leading to Glory and Pleasure',
      description: 'Deals physical damage to the nearest enemy with 6% lifesteal',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[1030% ATK + 692] + 6% lifesteal',
        R2: '[1236% ATK + 785] + 6% lifesteal',
        R3: '[1390% ATK + 864] + 6% lifesteal',
        R4: '[1490% ATK + 923] + 6% lifesteal',
        R5: '[1600% ATK + 1005] + 6% lifesteal',
      },
    },
    passive1: 'Charm Resistance +100%',
    passive2: 'Physical Crit Damage +59',
  },

  elythia: {
    id: 'elythia',
    name: 'Elythia',
    rarity: 'R',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Thrust',
      description:
        'Deals [260% ATK + 100 (+20/lv)] physical damage to the enemy with lowest HP',
      type: 'damage',
      target: 'enemy with lowest HP',
    },
    skill3: {
      name: 'Lionheart',
      description: 'Applies Accuracy +5 to all allies for 10s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: "Proud Maiden's Strike",
      description: 'Deals physical damage and inflicts Blind for 7s',
      type: 'damage',
      target: 'enemy with lowest HP',
      ranks: {
        R1: '[950% ATK + 811] | Blind',
        R2: '[1140% ATK + 1092] | Blind',
        R3: '[1280% ATK + 1212] | Blind',
        R4: '[1380% ATK + 1252] | Blind',
        R5: '[1470% ATK + 1292] | Blind',
      },
    },
    passive1: 'Block +10',
    passive2: 'Physical Crit Damage +59',
  },

  nadine: {
    id: 'nadine',
    name: 'Nadine',
    rarity: 'R',
    element: 'Fire',
    role: 'Attacker',
    skill2: {
      name: 'Lightning',
      description:
        'Deals [240% ATK + 110 (+20/lv)] magic damage to the enemy with highest MP and inflicts Burn for 10s',
      type: 'damage',
      target: 'enemy with highest MP',
    },
    skill3: {
      name: 'Flame Lightning',
      description: 'Applies Physical DEF +10%+50 to all allies for 10s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'Behold the Radiance of Nobility',
      description: 'Deals magic damage and inflicts Burn for 12s',
      type: 'damage',
      target: 'enemies',
      ranks: {
        R1: '[450% ATK + 300] | Burn (-800 HP/tick)',
        R2: '[630% ATK + 401] | Burn (-1000 HP/tick)',
        R3: '[765% ATK + 485] | Burn (-1200 HP/tick)',
        R4: '[855% ATK + 576] | Burn (-1400 HP/tick)',
        R5: '[900% ATK + 655] | Burn (-1500 HP/tick)',
      },
    },
    passive1: 'Max HP +1447',
    passive2: 'Magic Crit Damage +59',
  },

  lorelia: {
    id: 'lorelia',
    name: 'Lorelia',
    rarity: 'R',
    element: 'Water',
    role: 'Attacker',
    skill2: {
      name: 'Gentle Slap',
      description: 'Deals [240% ATK + 120 (+20/lv)] physical damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'It is my honor to be of assistance to you',
      description: 'Applies Physical Crit Damage +30 to the nearest ally for 12s',
      type: 'buff',
      target: 'nearest ally',
    },
    ultimate: {
      name: 'Angering a merfolk is a frightening thing, you know!',
      description: 'Deals physical damage and inflicts Stun for 2.5s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[320% ATK + 286] | Stun (2.5s)',
        R2: '[380% ATK + 327] | Stun (2.5s)',
        R3: '[426% ATK + 366] | Stun (2.5s)',
        R4: '[458% ATK + 399] | Stun (2.5s)',
        R5: '[488% ATK + 422] | Stun (2.5s)',
      },
    },
    passive1: 'Physical DEF +70',
    passive2: 'Physical Crit Damage +59',
  },

  destra: {
    id: 'destra',
    name: 'Destra',
    rarity: 'R',
    element: 'Dark',
    role: 'Tank',
    skill2: {
      name: 'Just a little…',
      description:
        'Deals [240% ATK + 90 (+16/lv)] physical damage to the nearest enemy and applies Taunt for 8s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Please come with me～♪',
      description: 'Heals [2500% ATK + 950 (+50/lv)] HP to self',
      type: 'heal',
      target: 'self',
    },
    ultimate: {
      name: "Now, let us head to Hades's realm♪",
      description: 'Deals physical damage and inflicts Physical DEF DOWN for 10s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[220% ATK + 304] | Physical DEF -10',
        R2: '[275% ATK + 409] | Physical DEF -13',
        R3: '[320% ATK + 453] | Physical DEF -16',
        R4: '[352% ATK + 488] | Physical DEF -18',
        R5: '[374% ATK + 512] | Physical DEF -20',
      },
    },
    passive1: 'Physical ATK +130',
    passive2: 'Max HP +1447',
  },

  eskelda: {
    id: 'eskelda',
    name: 'Eskelda',
    rarity: 'R',
    element: 'Water',
    role: 'Tank',
    skill2: {
      name: "I'm very busy",
      description: 'Deals [280% ATK + 110 (+20/lv)] physical damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Fall♪',
      description: 'Applies Block +11 to self for 10s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Prepare yourself♪',
      description: 'Deals physical damage and inflicts Accuracy DOWN for 10s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[225% ATK + 404] | Accuracy -10',
        R2: '[280% ATK + 509] | Accuracy -12',
        R3: '[325% ATK + 553] | Accuracy -13',
        R4: '[358% ATK + 568] | Accuracy -14',
        R5: '[380% ATK + 602] | Accuracy -15',
      },
    },
    passive1: 'Magic DEF +70',
    passive2: 'Paralysis Resistance +100%',
  },

  lucrezia: {
    id: 'lucrezia',
    name: 'Lucrezia',
    rarity: 'R',
    element: 'Water',
    role: 'Attacker',
    skill2: {
      name: 'Hypnotic Embrace',
      description:
        'Deals [210% ATK + 80 (+16/lv)] physical damage to the nearest enemy and inflicts Physical DEF -21%-40 for 15s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Trance Embrace',
      description:
        'Deals [170% ATK + 60 (+12/lv)] physical damage to the nearest enemy and inflicts Charm for 3s',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: 'Divine Enchanting Embrace',
      description: 'Deals physical damage and inflicts Paralysis for 6s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[800% ATK + 685] | Paralysis (6s)',
        R2: '[960% ATK + 922] | Paralysis (6s)',
        R3: '[1080% ATK + 1023] | Paralysis (6s)',
        R4: '[1160% ATK + 1057] | Paralysis (6s)',
        R5: '[1240% ATK + 1091] | Paralysis (6s)',
      },
    },
    passive1: 'Physical DEF +70',
    passive2: 'Block +10',
  },

  // SR Characters
  gladys: {
    id: 'gladys',
    name: 'Gladys',
    rarity: 'SR',
    element: 'Fire',
    role: 'Attacker',
    skill2: {
      name: 'Armor-Breaker Slash',
      description:
        'Deals [276% ATK + 105 (+20/lv)] physical damage to the enemy with lowest HP and applies Physical ATK +18%+35 to self for 6s',
      type: 'damage',
      target: 'enemy with lowest HP',
    },
    skill3: {
      name: 'Charging Slash',
      description:
        'Deals [220% ATK + 83 (+20/lv)] physical damage to the enemy with lowest HP and inflicts Physical DEF -21%-40 for 10s',
      type: 'damage',
      target: 'enemy with lowest HP',
    },
    ultimate: {
      name: 'Valkenheim-Style Ultimate: Samidare Thrust',
      description: 'Deals physical damage to the enemy with 6% lifesteal',
      type: 'damage',
      target: 'enemy with lowest HP',
      ranks: {
        R1: '[1060% ATK + 820] + 6% lifesteal',
        R2: '[1270% ATK + 934] + 6% lifesteal',
        R3: '[1430% ATK + 1026] + 6% lifesteal',
        R4: '[1537% ATK + 1187] + 6% lifesteal',
        R5: '[1643% ATK + 1267] + 6% lifesteal',
      },
    },
    passive1: 'Max HP +2896',
    passive2: 'On enemy defeat: Physical ATK +389, Physical Crit Damage +176',
  },

  emelaria: {
    id: 'emelaria',
    name: 'Emelaria',
    rarity: 'SR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: "Looks like your luck isn't so good",
      description:
        'Deals [180% ATK + 110 (+20/lv)] magic damage to the nearest enemy and inflicts Confusion for 6s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Seems you need a little punishment',
      description:
        'Deals [150% ATK + 120 (+20/lv)] magic damage to the farthest enemy and inflicts Sleep for 5s',
      type: 'damage',
      target: 'farthest enemy',
    },
    ultimate: {
      name: 'Magic of Light and Shadow',
      description: 'Deals magic damage and inflicts Fear for 4s',
      type: 'damage',
      target: 'enemies',
      ranks: {
        R1: '[409% ATK + 297] | Fear (MP -20/tick)',
        R2: '[574% ATK + 365] | Fear (MP -25/tick)',
        R3: '[697% ATK + 493] | Fear (MP -30/tick)',
        R4: '[779% ATK + 532] | Fear (MP -35/tick)',
        R5: '[819% ATK + 602] | Fear (MP -40/tick)',
      },
    },
    passive1: 'Physical DEF +70, Magic DEF +70',
    passive2: 'Max HP +1447, Magic ATK +259',
  },

  nerys_sr: {
    id: 'nerys_sr',
    name: 'Nerys',
    rarity: 'SR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Shockwave',
      description: 'Deals [320% ATK + 120 (+25/lv)] magic damage to the farthest enemy',
      type: 'damage',
      target: 'farthest enemy',
    },
    skill3: {
      name: 'Light Orb',
      description:
        'Deals [280% ATK + 100 (+20/lv)] magic damage to the farthest enemy and inflicts Magic DEF -21%-40 for 10s',
      type: 'damage',
      target: 'farthest enemy',
    },
    ultimate: {
      name: 'Shining Spear',
      description: 'Deals magic damage and inflicts Stun for 3s',
      type: 'damage',
      target: 'farthest enemies',
      ranks: {
        R1: '[600% ATK + 500] | Stun (3s)',
        R2: '[720% ATK + 524] | Stun (3s)',
        R3: '[810% ATK + 599] | Stun (3s)',
        R4: '[869% ATK + 653] | Stun (3s)',
        R5: '[930% ATK + 707] | Stun (3s)',
      },
    },
    passive1: 'On enemy defeat: MP Recovery +21',
    passive2: 'Magic ATK +259',
  },

  irina: {
    id: 'irina',
    name: 'Irina',
    rarity: 'SR',
    element: 'Light',
    role: 'Support',
    skill2: {
      name: 'Punishment for the servants of the demon',
      description:
        'Deals [210% ATK + 110 (+20/lv)] magic damage to the enemy with highest Physical ATK and inflicts Physical ATK -11%-25 for 10s',
      type: 'damage',
      target: 'enemy with highest Physical ATK',
    },
    skill3: {
      name: 'Blessing to the brave',
      description:
        'Heals [3000% ATK + 852 (+60/lv)] HP to the ally with lowest HP and applies HP Regen +5%+150 for 3s',
      type: 'heal',
      target: 'ally with lowest HP',
    },
    ultimate: {
      name: 'A helping hand to the devout',
      description: 'Heals all allies and applies Debuff Resistance +30% for 6s',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: '[2600% ATK + 788]',
        R2: '[3000% ATK + 842]',
        R3: '[3250% ATK + 910]',
        R4: '[3500% ATK + 962]',
        R5: '[3640% ATK + 1008]',
      },
    },
    passive1: 'Healing Amount +15%',
    passive2: 'Front Row allies: Physical DEF +70, Magic DEF +70',
  },

  sobrina_sr: {
    id: 'sobrina_sr',
    name: 'Sobrina',
    rarity: 'SR',
    element: 'Mind',
    role: 'Support',
    skill2: {
      name: 'This is an order from your superior',
      description:
        'Heals [3300% ATK + 834 (+60/lv)] HP to the ally with lowest HP and applies Block +9 for 8s',
      type: 'heal',
      target: 'ally with lowest HP',
    },
    skill3: {
      name: 'Lacking self-awareness',
      description: 'Applies Physical DEF +20%+140 to the ally with lowest HP for 8s',
      type: 'buff',
      target: 'ally with lowest HP',
    },
    ultimate: {
      name: "It's break time now",
      description: 'Heals all allies and applies Debuff Resistance +30% for 6s',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: '[2300% ATK + 698]',
        R2: '[2645% ATK + 752]',
        R3: '[2875% ATK + 810]',
        R4: '[3105% ATK + 862]',
        R5: '[3220% ATK + 908]',
      },
    },
    passive1: 'Healing Amount +15%',
    passive2: 'Front Row allies: Physical DEF +70, Magic DEF +70',
  },

  messeria_sr: {
    id: 'messeria_sr',
    name: 'Messeria',
    rarity: 'SR',
    element: 'Wind',
    role: 'Support',
    skill2: {
      name: 'Rhythm and Beat',
      description:
        'Deals [280% ATK + 110 (+20/lv)] physical damage to the enemy with lowest HP and inflicts Action Speed -14%-14 for 5s',
      type: 'damage',
      target: 'enemy with lowest HP',
    },
    skill3: {
      name: 'Dance of Resistance',
      description:
        'Heals [1350% ATK + 301 (+35/lv)] HP to all allies and applies Action Speed +7%+7 for 8s',
      type: 'heal',
      target: 'all allies',
    },
    ultimate: {
      name: 'Wish Upon the Soaring Stars',
      description: 'Deals physical damage and inflicts Burn for 15s',
      type: 'damage',
      target: 'enemies',
      ranks: {
        R1: '[450% ATK + 352] | Burn (-1000 HP/tick)',
        R2: '[540% ATK + 472] | Burn (-1300 HP/tick)',
        R3: '[620% ATK + 554] | Burn (-1600 HP/tick)',
        R4: '[700% ATK + 625] | Burn (-1800 HP/tick)',
        R5: '[750% ATK + 714] | Burn (-2000 HP/tick)',
      },
    },
    passive1: 'Block +15',
    passive2: 'All allies: Block +8',
  },

  paia: {
    id: 'paia',
    name: 'Paia',
    rarity: 'SR',
    element: 'Fire',
    role: 'Support',
    skill2: {
      name: 'Poison Mushroom!',
      description:
        'Deals [267% ATK + 110 (+20/lv)] physical damage to the nearest enemy and inflicts Poison for 10s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: "Lady Medusa's Mushroom!",
      description: 'Applies Debuff Resistance +15% to all allies for 8s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'Battle Mushroom!',
      description: 'Heals all allies and applies Block UP for 11s',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: '[2450% ATK + 785] | Block +10',
        R2: '[2817% ATK + 822] | Block +13',
        R3: '[3062% ATK + 923] | Block +16',
        R4: '[3310% ATK + 1027] | Block +18',
        R5: '[3429% ATK + 1091] | Block +20',
      },
    },
    passive1: 'Block +15',
    passive2: 'Poison Resistance +100%, Magic DEF +70',
  },

  azura: {
    id: 'azura',
    name: 'Azura',
    rarity: 'SR',
    element: 'Fire',
    role: 'Tank',
    skill2: {
      name: 'Great Cleave',
      description:
        'Deals [270% ATK + 120 (+15/lv)] physical damage to the nearest enemy and inflicts Physical ATK -9%-20 for 8s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'You can at least do something, right?',
      description: 'Applies HP Regen +3%+50 to self for 10s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Steelbreaker Twin Blades',
      description: 'Deals physical damage and applies Physical Crit Damage UP to self for 12s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[1050% ATK + 1010] | Physical Crit +300',
        R2: '[1260% ATK + 1166] | Physical Crit +400',
        R3: '[1418% ATK + 1253] | Physical Crit +450',
        R4: '[1522% ATK + 1342] | Physical Crit +500',
        R5: '[1628% ATK + 1456] | Physical Crit +550',
      },
    },
    passive1: 'Max HP +2896',
    passive2: 'Physical ATK +259, Physical Crit Damage +90',
  },

  zoe: {
    id: 'zoe',
    name: 'Zoe',
    rarity: 'SR',
    element: 'Dark',
    role: 'Tank',
    skill2: {
      name: 'Dark vortex!',
      description:
        'Deals [114% ATK + 80 (+7/lv)] magic damage to the nearest enemy and inflicts Physical ATK -9%-20 for 10s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Grant me an unbreakable soul!',
      description: 'Applies Debuff Resistance +70% to self for 12s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Fall into Tartarus!',
      description: 'Deals magic damage and inflicts Fear for 3s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[700% ATK + 826] | Fear (MP -20/tick)',
        R2: '[840% ATK + 952] | Fear (MP -25/tick)',
        R3: '[944% ATK + 1045] | Fear (MP -30/tick)',
        R4: '[1015% ATK + 1121] | Fear (MP -35/tick)',
        R5: '[1085% ATK + 1237] | Fear (MP -40/tick)',
      },
    },
    passive1: 'Physical DEF +70, Magic DEF +70',
    passive2: 'Magic ATK +259, Block +15',
  },

  constantia: {
    id: 'constantia',
    name: 'Constantia',
    rarity: 'SR',
    element: 'Water',
    role: 'Support',
    skill2: {
      name: "Sestertius's Weight",
      description: 'Applies Physical ATK +12%+25 to all allies for 8s',
      type: 'buff',
      target: 'all allies',
    },
    skill3: {
      name: "Denarius's Stride",
      description: 'Applies Action Speed +11%+11 to all allies for 10s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: "Aureus's Radiance",
      description: 'Applies Magic DEF UP to all allies for 10s',
      type: 'buff',
      target: 'all allies',
      ranks: {
        R1: 'Magic DEF +20%+150',
        R2: 'Magic DEF +25%+250',
        R3: 'Magic DEF +30%+300',
        R4: 'Magic DEF +35%+350',
        R5: 'Magic DEF +40%+400',
      },
    },
    passive1: 'Action Speed +10%+10, Block +20',
    passive2: 'Front Row allies: Max HP +955, Physical DEF +70',
  },

  farneria: {
    id: 'farneria',
    name: 'Farneria',
    rarity: 'SR',
    element: 'Water',
    role: 'Attacker',
    skill2: {
      name: 'Blizzard',
      description:
        'Deals [270% ATK + 120 (+20/lv)] magic damage to the enemy with highest Physical ATK and inflicts Freeze for 2s',
      type: 'damage',
      target: 'enemy with highest Physical ATK',
    },
    skill3: {
      name: 'Avalanche',
      description: 'Applies Magic ATK +18%+35 to self for 10s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'A Prison of Lament for the Loveless',
      description: 'Deals magic damage and inflicts Freeze for 3s',
      type: 'damage',
      target: 'enemy',
      ranks: {
        R1: '[1000% ATK + 943] | Freeze (2500 HP threshold)',
        R2: '[1200% ATK + 1020] | Freeze (3500 HP threshold)',
        R3: '[1350% ATK + 1082] | Freeze (4000 HP threshold)',
        R4: '[1450% ATK + 1155] | Freeze (4500 HP threshold)',
        R5: '[1550% ATK + 1249] | Freeze (5000 HP threshold)',
      },
    },
    passive1: 'Freeze Resistance +100%',
    passive2: 'Magic Crit Damage +118, Block +15',
  },

  athena_sr: {
    id: 'athena_sr',
    name: 'Athena',
    rarity: 'SR',
    element: 'Light',
    role: 'Tank',
    skill2: {
      name: 'Poliucos',
      description:
        'Deals [280% ATK + 90 (+15/lv)] physical damage to the nearest enemy and inflicts Physical ATK -9%-20 for 5s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Palladion',
      description: 'Heals [2000% ATK + 416 (+60/lv)] HP to self and applies Block +13 for 10s',
      type: 'heal',
      target: 'self',
    },
    ultimate: {
      name: 'Knowledge That Brings Regret to Fools',
      description: 'Deals physical damage and inflicts Silence for 5s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[1200% ATK + 1000] | Silence (5s)',
        R2: '[1440% ATK + 1146] | Silence (5s)',
        R3: '[1520% ATK + 1296] | Silence (5s)',
        R4: '[1639% ATK + 1385] | Silence (5s)',
        R5: '[1760% ATK + 1515] | Silence (5s)',
      },
    },
    passive1: 'Physical DEF +70, Magic DEF +70',
    passive2: 'Max HP +1447, Block +15',
  },

  medusa: {
    id: 'medusa',
    name: 'Medusa',
    rarity: 'SR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: "I'm going to curse you～!",
      description:
        'Deals [90% ATK + 50 (+7/lv)] magic damage to the nearest enemy and inflicts Paralysis for 6s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Aauyaaahhh!',
      description: 'Applies Magic ATK +18%+35 to self for 10s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'All of you, turn to stone～～～!',
      description: 'Deals magic damage and inflicts Petrify for 3s',
      type: 'damage',
      target: 'enemies',
      ranks: {
        R1: '[450% ATK + 398] | Petrify (3s)',
        R2: '[630% ATK + 499] | Petrify (3s)',
        R3: '[765% ATK + 583] | Petrify (3s)',
        R4: '[855% ATK + 677] | Petrify (3s)',
        R5: '[900% ATK + 752] | Petrify (3s)',
      },
    },
    passive1: 'Petrify Resistance +100%',
    passive2: 'Magic Crit Damage +118, Magic DEF +141',
  },

  ishtovia_sr: {
    id: 'ishtovia_sr',
    name: 'Ishtovia',
    rarity: 'SR',
    element: 'Light',
    role: 'Attacker',
    skill2: {
      name: 'Receive the punishment of the gods',
      description:
        'Deals [170% ATK + 100 (+13/lv)] magic damage to the enemy with lowest HP (guaranteed hit/crit)',
      type: 'damage',
      target: 'enemy with lowest HP',
    },
    skill3: {
      name: 'Divine Love',
      description: 'Heals [2000% ATK + 600 (+35/lv)] HP to the ally with lowest HP',
      type: 'heal',
      target: 'ally with lowest HP',
    },
    ultimate: {
      name: 'Radiance of the Gods',
      description:
        'Deals magic damage (guaranteed hit/crit) and inflicts Magic DEF DOWN and Silence for 10s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[810% ATK + 783] | Magic DEF -15',
        R2: '[972% ATK + 920] | Magic DEF -20',
        R3: '[1090% ATK + 1022] | Magic DEF -24',
        R4: '[1175% ATK + 1115] | Magic DEF -27',
        R5: '[1255% ATK + 1209] | Magic DEF -30',
      },
    },
    passive1: 'On enemy defeat: MP Recovery +21',
    passive2: 'Magic ATK +259, Magic DEF +70',
  },

  veronica: {
    id: 'veronica',
    name: 'Veronica',
    rarity: 'SR',
    element: 'Water',
    role: 'Support',
    skill2: {
      name: 'This costs quite a bit, you know',
      description:
        'Deals [240% ATK + 110 (+20/lv)] physical damage to the nearest enemy and inflicts Physical DEF -18%-30 for 12s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: "I'm very fond of you",
      description: 'Applies Physical Crit Damage +50 to the nearest ally for 12s',
      type: 'buff',
      target: 'nearest ally',
    },
    ultimate: {
      name: 'Financial Support!',
      description: 'Applies Physical ATK UP to nearest ally for 12s',
      type: 'buff',
      target: 'nearest ally',
      ranks: {
        R1: 'Physical ATK +15',
        R2: 'Physical ATK +20',
        R3: 'Physical ATK +24',
        R4: 'Physical ATK +27',
        R5: 'Physical ATK +30',
      },
    },
    passive1: 'Physical DEF +141, Magic DEF +141',
    passive2: 'Front Row allies: Physical ATK +130, Block +10',
  },

  celestia: {
    id: 'celestia',
    name: 'Celestia',
    rarity: 'SR',
    element: 'Wind',
    role: 'Support',
    skill2: {
      name: 'Protected by "Thorns"',
      description:
        'Deals [240% ATK + 110 (+20/lv)] physical damage to the nearest enemy and inflicts Physical DEF -18%-30 for 5s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Blessing to the brave',
      description: 'Heals [1500% ATK + 310 (+25/lv)] HP to the nearest ally',
      type: 'heal',
      target: 'nearest ally',
    },
    ultimate: {
      name: 'For the prosperity of the Sun and Moon',
      description: 'Deals physical damage and inflicts Paralysis for 8s',
      type: 'damage',
      target: 'enemy',
      ranks: {
        R1: '[800% ATK + 590] | Paralysis (8s)',
        R2: '[960% ATK + 754] | Paralysis (8s)',
        R3: '[1080% ATK + 881] | Paralysis (8s)',
        R4: '[1160% ATK + 991] | Paralysis (8s)',
        R5: '[1240% ATK + 1085] | Paralysis (8s)',
      },
    },
    passive1: 'Paralysis Resistance +100%',
    passive2: 'Physical ATK +259, Max HP +1447',
  },

  guinevia: {
    id: 'guinevia',
    name: 'Guinevia',
    rarity: 'SR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: 'Anger',
      description: 'Deals [240% ATK + 125 (+25/lv)] physical damage to the nearest enemy',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Silence',
      description: 'Applies Physical ATK +18%+35 to self for 10s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Raise a Gale of Madness',
      description: 'Deals physical damage and inflicts Action Speed DOWN for 10s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[800% ATK + 857] | Action Speed -10%-10',
        R2: '[960% ATK + 842] | Action Speed -13%-13',
        R3: '[1080% ATK + 933] | Action Speed -16%-16',
        R4: '[1160% ATK + 1027] | Action Speed -18%-18',
        R5: '[1240% ATK + 1091] | Action Speed -20%-20',
      },
    },
    passive1: 'Physical ATK +259',
    passive2: 'Action Speed +10%+10, Physical Crit Damage +59',
  },

  // SSR Characters (Base versions of existing characters)
  estiriel_base: {
    id: 'estiriel_base',
    name: 'Estiriel',
    rarity: 'SSR',
    element: 'Wind',
    role: 'Attacker',
    skill2: {
      name: 'Sylvesto',
      description:
        'Deals [320% ATK + 150 (+25/lv)] magic damage to the farthest enemy and inflicts Physical DEF -18%-30 for 5s',
      type: 'damage',
      target: 'farthest enemy',
    },
    skill3: {
      name: 'Guardian of the Little Dwarves',
      description: 'Applies HP Regen +3%+50 to all allies for 10s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'O spirits, dance Become the guiding wisdom of all things',
      description:
        'Deals magic damage to all enemies and inflicts Block DOWN and Action Speed DOWN for 10s',
      type: 'damage',
      target: 'all enemies',
      ranks: {
        R1: '[550% ATK + 700] | Block -10, Action Speed -10%-10',
        R2: '[750% ATK + 500] | Block -13, Action Speed -13%-13',
        R3: '[900% ATK + 550] | Block -16, Action Speed -16%-16',
        R4: '[1000% ATK + 600] | Block -18, Action Speed -18%-18',
        R5: '[1100% ATK + 680] | Block -20, Action Speed -20%-20',
      },
    },
    passive1: 'Magic ATK +259, Action Speed +10%+10',
    passive2: 'All allies: Healing Received +20%, Block +10',
  },

  hildis_base: {
    id: 'hildis_base',
    name: 'Hildis',
    rarity: 'SSR',
    element: 'Fire',
    role: 'Attacker',
    skill2: {
      name: 'Thunderfire',
      description:
        'Deals [350% ATK + 150 (+20/lv)] physical damage to the nearest enemy and inflicts Physical DEF -23%-50 for 5s and Burn for 12s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Armor-Sleeve Touch',
      description: 'Applies Physical ATK +15%+30 and Action Speed +14% to self for 10s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'Heaven Sever',
      description:
        'Deals physical damage to the 3 nearest enemies and inflicts Physical DEF DOWN and Block DOWN for 8s',
      type: 'damage',
      target: '3 nearest enemies',
      ranks: {
        R1: '[420% ATK + 390] | Physical DEF -15%, Block -15',
        R2: '[505% ATK + 450] | Physical DEF -19%, Block -17',
        R3: '[570% ATK + 515] | Physical DEF -22%, Block -20',
        R4: '[610% ATK + 562] | Physical DEF -24%, Block -22',
        R5: '[650% ATK + 610] | Physical DEF -25%, Block -25',
      },
    },
    passive1: 'Max HP +3444, Physical ATK +259',
    passive2: 'Front Row allies: Physical Crit Damage +90, Physical ATK +130',
  },

  marina_base: {
    id: 'marina_base',
    name: 'Marina',
    rarity: 'SSR',
    element: 'Water',
    role: 'Support',
    skill2: {
      name: 'Star Procession',
      description:
        'Deals [100% ATK + 50 (+6/lv)] physical damage to the nearest enemy and inflicts Action Speed -20%-20 for 6s',
      type: 'damage',
      target: 'nearest enemy',
    },
    skill3: {
      name: 'Future Sight',
      description: 'Applies Physical Crit Damage +40 to all allies for 6s',
      type: 'buff',
      target: 'all allies',
    },
    ultimate: {
      name: 'La Roue de Fortune',
      description: 'Applies Action Speed UP to all allies for 8s',
      type: 'buff',
      target: 'all allies',
      ranks: {
        R1: 'Action Speed +10%+10',
        R2: 'Action Speed +13%+13',
        R3: 'Action Speed +16%+16',
        R4: 'Action Speed +18%+18',
        R5: 'Action Speed +20%+20',
      },
    },
    passive1: 'Middle Row allies: Physical Crit Damage +90, Magic Crit Damage +90',
    passive2: 'Middle Row allies: Skill Damage +20%, Action Speed +5%+5',
  },

  // 2024 New Year Characters
  dragon_crusher_medusa: {
    id: 'dragon_crusher_medusa',
    name: '【Dragon Crusher】Medusa',
    rarity: 'SSR',
    element: 'Dark',
    role: 'Attacker',
    skill2: {
      name: "You're so shameless",
      description:
        'Deals [120% ATK + 100 (+7/lv)] magic damage to the 3 nearest enemies and inflicts Petrify for 2s and Block- Lv5 for 12s',
      type: 'damage',
      target: '3 nearest enemies',
    },
    skill3: {
      name: 'Mmh~ haa~',
      description:
        'Applies Hit-Based Magic Damage +LvMax (+60 / +4) to self for 15s and Magic Attack +Lv5 for 12s and silences all enemies for 1.5s',
      type: 'buff',
      target: 'self',
    },
    ultimate: {
      name: 'You all should try it too!',
      description:
        'Deals magic damage to the nearest enemy and inflicts Magic Type Damage Taken+ and applies Action Speed+ to self for 10s',
      type: 'damage',
      target: 'nearest enemy',
      ranks: {
        R1: '[950% ATK + 800] | Magic Damage Taken +10 (8s) | Action Speed +10%+10',
        R2: '[1130% ATK + 1000] | Magic Damage Taken +13 (8s) | Action Speed +13%+13',
        R3: '[1270% ATK + 1150] | Magic Damage Taken +16 (8s) | Action Speed +16%+16',
        R4: '[1350% ATK + 1250] | Magic Damage Taken +18 (8s) | Action Speed +18%+18',
        R5: '[1450% ATK + 1300] | Magic Damage Taken +20 (8s) | Action Speed +20%+20',
      },
    },
    passive1: 'Self: Magic Critical Damage +176, Accuracy +20',
    passive2: 'Self: Ultimate Damage +15%, Magic Attack +259',
  },

  new_years_calligraphy_pastel: {
    id: 'new_years_calligraphy_pastel',
    name: "【New Year's Calligraphy】Pastel",
    rarity: 'SSR',
    element: 'Water',
    role: 'Support',
    skill2: {
      name: '"Longevity"',
      description:
        'Restores HP by [2000% ATK + 600 (+40/lv)] to all allies and applies Debuff Resistance Lv2 (+30%) for 10s and Accuracy +Lv3 for 10s',
      type: 'heal',
      target: 'all allies',
    },
    skill3: {
      name: '"Crane and Turtle"',
      description:
        'Deals [110% ATK + 120 (+6/lv)] physical damage to the 3 nearest enemies and inflicts Physical Attack -Lv4 for 7s and Magic Attack -Lv4 for 7s',
      type: 'damage',
      target: '3 nearest enemies',
    },
    ultimate: {
      name: '"Bird-and-Beast Caricatures"',
      description:
        'Deals physical damage to all enemies and inflicts Dispel and Action Speed- for 8s',
      type: 'damage',
      target: 'all enemies',
      ranks: {
        R1: '[380% ATK + 600] | Dispel (3s) | Action Speed -10%',
        R2: '[450% ATK + 800] | Dispel (4s) | Action Speed -13%',
        R3: '[509% ATK + 950] | Dispel (4s) | Action Speed -16%',
        R4: '[550% ATK + 1100] | Dispel (5s) | Action Speed -18%',
        R5: '[580% ATK + 1200] | Dispel (5s) | Action Speed -20%',
      },
    },
    passive1: 'Self: Action Speed +10%+10, Max HP +3444',
    passive2: 'All Allies: Block +15, Max HP +2896',
  },

  overflowing_jubako_lynette: {
    id: 'overflowing_jubako_lynette',
    name: '【Overflowing Jubako】Lynette',
    rarity: 'SR',
    element: 'Mind',
    role: 'Support',
    skill2: {
      name: 'New outfit for the new year',
      description:
        'Inflicts Physical Attack -Lv3 on the 3 nearest enemies for 8s and Magic Attack -Lv3 for 8s',
      type: 'debuff',
      target: '3 nearest enemies',
    },
    skill3: {
      name: 'Beauty is a deadly weapon',
      description:
        'Deals [250% ATK + 120 (+15/lv)] physical damage to the nearest enemy and inflicts Accuracy -Lv4 for 7s',
      type: 'damage',
      target: 'nearest enemy',
    },
    ultimate: {
      name: "Come, everyone — enjoy this New Year's feast!",
      description: 'Restores HP to all allies and applies Block+ for 8s',
      type: 'heal',
      target: 'all allies',
      ranks: {
        R1: 'Heal [2200% ATK + 1400] | Block +10',
        R2: 'Heal [2700% ATK + 1600] | Block +13',
        R3: 'Heal [3000% ATK + 1800] | Block +16',
        R4: 'Heal [3200% ATK + 1900] | Block +18',
        R5: 'Heal [3400% ATK + 2000] | Block +20',
      },
    },
    passive1: 'Self: Healing Amount +15%',
    passive2: 'All Allies: Healing Received +20%, Block +10',
  },
};

// Helper functions
export const getCharacterSkills = id => {
  return BUSTY_BURST_CHARACTER_SKILLS[id] || null;
};

export const getAllCharacterSkills = () => {
  return Object.values(BUSTY_BURST_CHARACTER_SKILLS);
};

export const getSkillsByElement = element => {
  return Object.values(BUSTY_BURST_CHARACTER_SKILLS).filter(
    char => char.element.toLowerCase() === element.toLowerCase()
  );
};

export const getSkillsByRole = role => {
  return Object.values(BUSTY_BURST_CHARACTER_SKILLS).filter(
    char => char.role.toLowerCase() === role.toLowerCase()
  );
};

export const getSkillsByRarity = rarity => {
  return Object.values(BUSTY_BURST_CHARACTER_SKILLS).filter(
    char => char.rarity.toLowerCase() === rarity.toLowerCase()
  );
};
