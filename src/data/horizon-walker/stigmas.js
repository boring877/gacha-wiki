export const stigmas = {
  EX: [
    {
      name: "Jester's Mask",
      twoSet: 'Magic ATK +10% during battle',
      fourSet:
        "During your turn, Skill DMG increases by 25%. When performing a Basic ATK, gain 1 stack of [Jester's Banter] lasting 2R.",
      specialEffect: {
        name: "Jester's Banter",
        description: 'Skill DMG +5% and Magic ATK +5%. Stacks up to 2 times.',
      },
      pieces: {
        top: {
          name: "Jester's Delusion",
          stat: 'Magic ATK',
        },
        bottom: {
          name: "Jester's Spite",
          stat: 'Crit Rate',
        },
        left: {
          name: "Jester's Hallucination",
          stat: 'Elemental Boost',
        },
        right: {
          name: "Jester's Jealousy",
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Reckoning of Sin',
      twoSet: 'AP Recovery +4% during battle',
      fourSet:
        'At the start of battle, gain 30 AP. Inflicts the [Price of Sin] effect on enemies hit by your attacks.',
      specialEffect: {
        name: 'Price of Sin',
        description: 'Elemental DEF -200. Effect ends after being struck.',
      },
      pieces: {
        top: {
          name: 'Purgatory',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'Abyss',
          stat: 'Max HP',
        },
        left: {
          name: 'Tartarus',
          stat: 'AP Recovery',
        },
        right: {
          name: 'Gehenna',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Jupiter',
      twoSet: 'Elemental Boost +6% during battle',
      fourSet:
        'When using a skill, Slash Boost +8% and All DEF +60 for 2R. If your Crit Rate is 25% or lower, Slash Boost +12% and All DEF +90 instead for 2R.',
      pieces: {
        top: {
          name: 'Europa',
          stat: 'Melee ATK',
        },
        bottom: {
          name: 'Ganymede',
          stat: 'Max HP',
        },
        left: {
          name: 'Io',
          stat: 'Melee ATK',
        },
        right: {
          name: 'Callisto',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Harmony',
      twoSet: 'All DEF increase by 160 during battle.',
      fourSet:
        'During combat, Melee ATK increases by 16% of base Max HP. Once per Round, when struck and HP falls to 40% or lower, recover 8% of Max HP and gain 45 AP.',
      pieces: {
        top: {
          name: 'Song of the Flames',
          stat: 'Melee ATK',
        },
        bottom: {
          name: 'Whisper of the River',
          stat: 'Crit Rate',
        },
        left: {
          name: 'Breath of the Wind',
          stat: 'Max HP',
        },
        right: {
          name: 'Pulse of the Earth',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Phantom Banquet',
      twoSet: 'Crit DMG +16% during battle',
      fourSet:
        'Basic ATK DMG and Skill DMG increase by 16% during battle. At the start of battle, SPD increases by 35%. This effect ends upon using a skill other than Wait. When using any active skill while Stealthed, ATK increases by 18% until the end of the turn.',
      pieces: {
        top: {
          name: "Phantom's Invitation",
          stat: 'Melee/Ranged/Magic ATK',
        },
        bottom: {
          name: "Phantom's Toast",
          stat: 'Crit Rate',
        },
        left: {
          name: "Phantom's Dance",
          stat: 'Pierce Boost',
        },
        right: {
          name: "Phantom's Feast",
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Brilliant Touch of Earth',
      twoSet: 'Physical DEF +200 during battle',
      fourSet:
        "AP Recovery +9% during battle. When using an active skill with a Healing effect on an ally, that ally's ATK increases by 20% for 2R.",
      pieces: {
        top: {
          name: 'The Brilliant Gift of Nature',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'The Brilliant Harmony of Elementals',
          stat: 'Max HP',
        },
        left: {
          name: 'The Brilliant Symphony of Fairies',
          stat: 'ACC',
        },
        right: {
          name: 'The Brilliant Dream in Green',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Eternal Battle',
      twoSet: 'Magic ATK +10% during battle',
      fourSet: 'If your attack targets 3 or more enemies, Magic ATK increases by 35% for 3R.',
      pieces: {
        top: {
          name: 'The Eternal Weapon of Ancient',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'The Eternal Crown of Glory',
          stat: 'Crit Rate',
        },
        left: {
          name: 'The Eternal Champion of Valor',
          stat: 'ACC',
        },
        right: {
          name: 'The Eternal Howl of Blood',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Knight of the Seven Petals',
      twoSet: 'Physical DEF +200 during battle',
      fourSet:
        'At the start of each round, grants allies with HP at 60% or lower a shield equal to 6% of your Max HP. The shield lasts for 2R.',
      pieces: {
        top: {
          name: 'The Seven-colored Dance',
          stat: 'Max HP',
        },
        bottom: {
          name: 'The Seven Paragraphs of Love',
          stat: 'Max HP',
        },
        left: {
          name: 'The Sevenfold Testimony',
          stat: 'Evasion',
        },
        right: {
          name: 'The Seven-petaled Oath',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Four Horsemen',
      twoSet: 'Crit DMG +20% during battle',
      fourSet:
        'When triggering a Basic ATK, Crit Rate increases by 7% for 3R. Stacks up to 5 times.',
      pieces: {
        top: {
          name: 'The White Horseman of Conquest',
          stat: 'Ranged ATK',
        },
        bottom: {
          name: 'The Red Horseman of War',
          stat: 'Crit DMG',
        },
        left: {
          name: 'The Black Horseman of Famine',
          stat: 'Pierce Boost',
        },
        right: {
          name: 'The Blue Horseman of Death',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Wind that Wanders the World',
      twoSet: 'SPD +10% during battle',
      fourSet: 'AP Recovery +20% during battle. This effect applies only while HP is at 100%.',
      pieces: {
        top: {
          name: 'Boreas the Slicer',
          stat: 'Max HP',
        },
        bottom: {
          name: 'Notus the Stormer',
          stat: 'ACC',
        },
        left: {
          name: 'Zephyrus the Conceiver',
          stat: 'AP Recovery',
        },
        right: {
          name: 'Eurus the Reaper',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Thousand Mile Weave',
      twoSet: 'Melee ATK +10% during battle',
      fourSet:
        'If even one enemy is struck by a Weak Point attack, Slash, Pierce, and Crush Boosts each increase by 40% temporarily.',
      pieces: {
        top: {
          name: 'The Thousand Mile Warp',
          stat: 'Melee ATK',
        },
        bottom: {
          name: 'The Thousand Mile Weft',
          stat: 'Crit Rate',
        },
        left: {
          name: 'The Thousand Mile Yarn',
          stat: 'SPD',
        },
        right: {
          name: 'The Thousand Mile Needle',
          stat: 'Max HP',
        },
      },
    },
  ],
  SS: [
    {
      name: "Jester's Mask",
      twoSet: 'Magic ATK +10% during battle',
      fourSet:
        "During your turn, Skill DMG increases by 25%. When performing a Basic ATK, gain 1 stack of [Jester's Banter] lasting 2R.",
      specialEffect: {
        name: "Jester's Banter",
        description: 'Skill DMG +5% and Magic ATK +5%. Stacks up to 2 times.',
      },
      pieces: {
        top: {
          name: "Jester's Delusion",
          stat: 'Magic ATK',
        },
        bottom: {
          name: "Jester's Spite",
          stat: 'Crit Rate',
        },
        left: {
          name: "Jester's Hallucination",
          stat: 'Elemental Boost',
        },
        right: {
          name: "Jester's Jealousy",
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Reckoning of Sin',
      twoSet: 'AP Recovery +4% during battle',
      fourSet:
        'At the start of battle, gain 30 AP. Inflicts the [Price of Sin] effect on enemies hit by your attacks.',
      specialEffect: {
        name: 'Price of Sin',
        description: 'Elemental DEF -200. Effect ends after being struck.',
      },
      pieces: {
        top: {
          name: 'Purgatory',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'Abyss',
          stat: 'Max HP',
        },
        left: {
          name: 'Tartarus',
          stat: 'AP Recovery',
        },
        right: {
          name: 'Gehenna',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Jupiter',
      twoSet: 'Elemental Boost +6% during battle',
      fourSet:
        'When using a skill, Slash Boost +8% and All DEF +60 for 2R. If your Crit Rate is 25% or lower, Slash Boost +12% and All DEF +90 instead for 2R.',
      pieces: {
        top: {
          name: 'Europa',
          stat: 'Melee ATK',
        },
        bottom: {
          name: 'Ganymede',
          stat: 'Max HP',
        },
        left: {
          name: 'Io',
          stat: 'Melee ATK',
        },
        right: {
          name: 'Callisto',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Harmony',
      twoSet: 'All DEF increase by 160 during battle.',
      fourSet:
        'During combat, Melee ATK increases by 16% of base Max HP. Once per Round, when struck and HP falls to 40% or lower, recover 8% of Max HP and gain 45 AP.',
      pieces: {
        top: {
          name: 'Song of the Flames',
          stat: 'Melee ATK',
        },
        bottom: {
          name: 'Whisper of the River',
          stat: 'Crit Rate',
        },
        left: {
          name: 'Breath of the Wind',
          stat: 'Max HP',
        },
        right: {
          name: 'Pulse of the Earth',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Ship of Theseus',
      twoSet: 'Magic ATK +9% during battle',
      fourSet:
        'Fire, Frost, Lightning, Poison, and Immaterial Boosts each increase by 20%. This effect applies only while HP is at 100%.',
      pieces: {
        top: {
          name: 'Patched Sail',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'Rebuilt Hull',
          stat: 'Crit Rate',
        },
        left: {
          name: 'Mended Plank',
          stat: 'SPD',
        },
        right: {
          name: 'Renewed Prow',
          stat: 'Max HP',
        },
      },
    },
    {
      name: "The Noble's Tactics",
      twoSet: 'Ranged ATK +9% during battle',
      fourSet: 'During your turn, Crit Rate increases by 20%. This effect is lost if you move.',
      pieces: {
        top: {
          name: 'Last Stand',
          stat: 'Ranged ATK',
        },
        bottom: {
          name: 'Winner-Takes-All',
          stat: 'Crit DMG',
        },
        left: {
          name: 'Indomitable',
          stat: 'ACC',
        },
        right: {
          name: 'Bitter Resolve',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Blacksmith Blessing',
      twoSet: 'Physical DEF +180 during battle',
      fourSet: 'When attacked, Physical DEF increases by 200 for 2R. Stacks up to 3 times.',
      pieces: {
        top: {
          name: 'Worn Anvil',
          stat: 'Max HP',
        },
        bottom: {
          name: 'Blazing Forge',
          stat: 'Evasion',
        },
        left: {
          name: 'Shining Gemstone',
          stat: 'SPD',
        },
        right: {
          name: "Artisan's Soul",
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Record of Orphan',
      twoSet: 'AP Recovery +3.6% during battle',
      fourSet:
        "When using a skill on an enemy, reduce the target's Physical DEF by 100 until the start of its next turn. Stacks up to 3 times.",
      pieces: {
        top: {
          name: "Artist's Comedia",
          stat: 'Max HP',
        },
        bottom: {
          name: "Cleric's Scripture",
          stat: 'ACC',
        },
        left: {
          name: 'Diary of the Premature One',
          stat: 'AP Recovery',
        },
        right: {
          name: "Elder's Memoir",
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'The Irreversible Box of Secrets',
      twoSet: 'Magic ATK +9% during battle',
      fourSet: 'At the start of each round, Slash Boost increases by 15%, stacking up to 4 times.',
      pieces: {
        top: {
          name: 'End of Greed',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'Cycle of Sin',
          stat: 'ACC',
        },
        left: {
          name: 'Price of Choice',
          stat: 'Slash Boost',
        },
        right: {
          name: 'Empty Chest',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Thorned Heart',
      twoSet: 'Melee ATK +9% during battle',
      fourSet: 'Upon a successful counterattack, Melee ATK increases by 35% for 2R.',
      pieces: {
        top: {
          name: 'Thorned Brawler',
          stat: 'Melee ATK',
        },
        bottom: {
          name: 'Barbed Tongue',
          stat: 'Crit DMG',
        },
        left: {
          name: 'Hand that Breaks Thorns',
          stat: 'Evasion',
        },
        right: {
          name: 'Heart with Broken Thorns',
          stat: 'Max HP',
        },
      },
    },
  ],
  S: [
    {
      name: 'Jester',
      twoSet: 'Magic ATK +8% during battle',
      fourSet: 'Crit DMG +20% during battle',
      pieces: {
        top: {
          name: 'Aerial Acrobatics',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'Magic Show',
          stat: 'Max HP',
        },
        left: {
          name: 'Stand-up Comedy',
          stat: 'AP Recovery',
        },
        right: {
          name: 'Unjust Hanging',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Beast',
      twoSet: 'Ranged ATK +8% during battle',
      fourSet: 'SPD +10% during battle',
      pieces: {
        top: {
          name: 'Chaser',
          stat: 'Ranged ATK',
        },
        bottom: {
          name: 'Hawkeye',
          stat: 'Max HP',
        },
        left: {
          name: 'Poise and Tranquility',
          stat: 'Crit Rate',
        },
        right: {
          name: 'Ruthless Assault',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Titan',
      twoSet: 'Melee ATK +8% during battle',
      fourSet: 'Physical DEF +200 during battle',
      pieces: {
        top: {
          name: 'The Prisoner Who Held Up Skies',
          stat: 'Melee ATK',
        },
        bottom: {
          name: 'The Fire Thief',
          stat: 'Max HP',
        },
        left: {
          name: 'The Unbreakable Man',
          stat: 'SPD',
        },
        right: {
          name: 'The Farseer',
          stat: 'Max HP',
        },
      },
    },
  ],
  A: [
    {
      name: 'Mage',
      description:
        'A Stigma that enhances stats suited for wielding arcane power, such as Magic ATK. Grants formidable power to Vanguards who command spells in battle.',
      pieces: {
        top: {
          name: 'Arcane Flow',
          stat: 'Magic ATK',
        },
        bottom: {
          name: 'Understanding Magic',
          stat: 'Max HP',
        },
        left: {
          name: 'Pure Strength',
          stat: 'SPD',
        },
        right: {
          name: 'Innate Talent',
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Marksman',
      description:
        'A Stigma that enhances stats suited for ranged combat, such as Ranged ATK. Grants formidable power to Vanguards who favor firearms in battle.',
      pieces: {
        top: {
          name: "Marksman's Caution",
          stat: 'Ranged ATK',
        },
        bottom: {
          name: "Marksman's Composure",
          stat: 'Max HP',
        },
        left: {
          name: "Marksman's Agility",
          stat: 'SPD',
        },
        right: {
          name: "Marksman's Precision",
          stat: 'Max HP',
        },
      },
    },
    {
      name: 'Fighter',
      description:
        'A Stigma that enhances stats suited for melee combat, such as Melee ATK. Grants formidable power to Vanguards who favor close-quarters battle.',
      pieces: {
        top: {
          name: "Fighter's Courage",
          stat: 'Melee ATK',
        },
        bottom: {
          name: "Fighter's Pride",
          stat: 'Max HP',
        },
        left: {
          name: "Fighter's Determination",
          stat: 'SPD',
        },
        right: {
          name: "Fighter's Resilience",
          stat: 'Max HP',
        },
      },
    },
  ],
};
