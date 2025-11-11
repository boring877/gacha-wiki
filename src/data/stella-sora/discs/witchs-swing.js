// Witch's Swing Disc Data
// Mistique's Umbra Element Disc

export const witchsSwingData = {
  id: 4,
  name: "Witch's Swing",
  slug: 'witchs-swing',
  image: "Witch's_swing.jpg",
  rarity: '5-Star',
  element: 'Umbra',
  tags: ['Umbra', 'Element', 'Ultimate', 'Minion'],
  character: 'Mistique',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    umbraDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: "Witch's Swing",
      effect:
        "Increases the squad's Umbra DMG by **20%**. When any Umbra Trekker casts a Support Skill, increases the effect by an additional **30%** for 8s.",
    },
    harmony: {
      name: 'Spectral Fragrance',
      level: 5,
      effect:
        "When any Umbra Trekker casts a Support Skill, increases Umbra squadmates' ATK by **12.5%** for 8s. For every minion summoned by an Umbra squadmate, increases the DMG of all allied Umbra minions on the battlefield by **2.5%** for 10s, stacking up to 10 times.",
      requirements: {
        'Melody of Umbra': '≥ Lv.70',
        'Melody of Skill': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Dark Trace',
      level: 5,
      effect:
        "Increases Umbra squadmates' Ultimate DMG by **30%**. When any character triggers **Umbra Mark**, increases this effect by an additional **25%** and the DMG of all allied Umbra minions on the battlefield by an additional **12.5%** for 4s.",
      requirements: {
        'Melody of Ultimate': '≥ Lv.75',
        'Melody of Skill': '≥ Lv.75',
        'Melody of Umbra': '≥ Lv.75',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      ultimate: {
        baseEffect: 'Ultimate DMG +1% per level',
        maxEffect: 'Ultimate DMG +99%',
      },
      luck: {
        baseEffect: 'Crit Rate +0.1% per level',
        maxEffect: 'Crit Rate +9.9%',
      },
    },
  },

  // Disc Description
  description:
    'Umbra-focused disc that enhances support skills and ultimate damage while boosting minion capabilities.',
};

export const witchsSwingSEO = {
  title: "Witch's Swing - Stella Sora Disc Guide",
  description:
    "Complete guide for Witch's Swing, a 5-Star Umbra disc in Stella Sora. Stats, skills, and detailed information.",
  keywords: ["Witch's Swing", 'Stella Sora', '5-Star', 'Umbra', 'Disc', 'Mistique', 'disc guide'],
};
