// Sword Against Stream Disc Data
// Chitose's Aqua Element Disc

export const swordAgainstStreamData = {
  id: 1,
  name: 'Sword Against Stream',
  slug: 'sword-against-stream',
  image: 'sword_against_stream.jpg',
  rarity: '5-Star',
  element: 'Aqua',
  tags: ['Aqua', 'Element', 'Skills', 'ATK'],
  character: 'Chitose',

  // Basic Stats
  stats: {
    basicAtk: 1631,
    aquaDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Sword Against Stream',
      effect:
        "Increases the squad's Aqua DMG by **30%**. When any Trekker triggers **Aqua Mark**, increases the squad's Aqua DMG by **30%** for 4 seconds.",
    },
    harmony: {
      name: 'Splashing Moves',
      level: 5,
      effect:
        "After the main Aqua Trekker deals damage **20** times in total, increases Aqua squadmates' ATK by **70%** for **10** seconds. This effect can only be triggered once every **15** seconds.",
      requirements: {
        'Melody of Pummel': '≥ Lv.70',
        'Melody of Aqua': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Water Mirror',
      level: 5,
      effect:
        "Increases Aqua squadmates' Skill DMG dealt to elite or higher - tier targets by **60%**.",
      requirements: {
        'Melody of Luck': '≥ Lv.75',
        'Melody of Pummel': '≥ Lv.75',
        'Melody of Aqua': '≥ Lv.75',
      },
    },
  },

  // Support Information
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

  // Disc Description
  description:
    'Aqua-focused disc that boosts squad damage through mark triggers and provides significant ATK bonuses.',
};

export const swordAgainstStreamSEO = {
  title: 'Sword Against Stream - Stella Sora Disc Guide',
  description:
    'Complete guide for Sword Against Stream, a 5-Star Aqua disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: [
    'Sword Against Stream',
    'Stella Sora',
    '5-Star',
    'Aqua',
    'Disc',
    'Chitose',
    'disc guide',
  ],
};
