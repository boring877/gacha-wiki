// Midnight Mayhem Disc Data
// Minova's Lux Element Disc

export const midnightMayhemData = {
  id: 11,
  name: 'Midnight Mayhem',
  slug: 'midnight-mayhem',
  image: 'Midnight_mayhem.jpg',
  rarity: '5-Star',
  element: 'Lux',
  tags: ['Lux', 'ATK', 'Skills', 'VUL'],
  character: 'Minova',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    luxDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Midnight Mayhem',
      effect:
        "Increases the Skill DMG & Ultimate DMG of Lux Trekkers in the squad by **24%**. When any Trekker triggers **Lux Mark**, increases the main Lux Trekker' Auto Attack & Ultimate DMG by **27.5%** for 4s.",
    },
    harmony: {
      name: 'Decisive Strike',
      level: 5,
      effect:
        "When a Lux main Trekker hits a target, increases all Lux squadmates' ATK by **12.5%** for 15s. When any Lux Trekker hits a stunned target, increases this effect by an additional **12.5%** for 15s.",
      requirements: {
        'Melody of Lux': '≥ Lv.70',
        'Melody of Ultimate': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Reach of Radiance',
      level: 5,
      effect:
        'When a Lux Support Skill hits a target, increases the Lux DMG taken by the target by **20%** for 10s.',
      requirements: {
        'Melody of Pummel': '≥ Lv.75',
        'Melody of Lux': '≥ Lv.75',
        'Melody of Ultimate': '≥ Lv.75',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      skill: {
        baseEffect: 'Skill DMG +0.46%',
        maxEffect: 'Skill DMG +45.54%',
      },
      ultimate: {
        baseEffect: 'Ultimate DMG +1%',
        maxEffect: 'Ultimate DMG +99%',
      },
    },
  },

  // Disc Description
  description:
    'Lux-focused disc that provides balanced damage enhancements for skills and ultimate abilities with mark-based bonuses.',
};

export const midnightMayhemSEO = {
  title: 'Midnight Mayhem - Stella Sora Disc Guide',
  description:
    'Complete guide for Midnight Mayhem, a 5-Star Lux disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Midnight Mayhem', 'Stella Sora', '5-Star', 'Lux', 'Disc', 'Minova', 'disc guide'],
};
