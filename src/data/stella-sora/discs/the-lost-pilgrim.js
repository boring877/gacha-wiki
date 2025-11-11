// The Lost Pilgrim Disc Data
// Gerie's Terra Element Disc

export const theLostPilgrimData = {
  id: 8,
  name: 'The Lost Pilgrim',
  slug: 'the-lost-pilgrim',
  image: 'The_lost_pilgrim.jpg',
  rarity: '5-Star',
  element: 'Terra',
  tags: ['Terra', 'Element', 'Skills', 'ATK'],
  character: 'Gerie',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    terraDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'The Lost Pilgrim',
      effect:
        "Increases the squad's Terra DMG by **20%**. When any Trekker triggers Terra Mark, increases the main Terra Trekker's Skill & Auto Attack DMG by **28%** for **4s**.",
    },
    harmony: {
      name: 'Iron Love Embrace',
      level: 5,
      effect:
        "Increases Terra squadmates' ATK by **12.5%**. When any Terra Trekker deals Skill DMG, if a support Terra Trekker is on the battlefield, increases the Skill DMG by **25%**.",
      requirements: {
        'Melody of Ultimate': '≥ Lv.70',
        'Melody of Terra': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Prison of Passion',
      level: 5,
      effect:
        "When any Trekker triggers Terra Mark, increases Terra squadmates' ATK by **5%** for **5s**, stacking up to **4** times.",
      requirements: {
        'Melody of Ultimate': '≥ Lv.75',
        'Melody of Pummel': '≥ Lv.75',
        'Melody of Terra': '≥ Lv.75',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      skill: {
        baseEffect: 'Skill DMG +0.46% per level',
        maxEffect: 'Skill DMG +45.54%',
      },
      ultimate: {
        baseEffect: 'Ultimate DMG +1% per level',
        maxEffect: 'Ultimate DMG +99%',
      },
    },
  },

  // Disc Description
  description:
    'Terra-focused disc that enhances both skill and auto attack damage through mark triggers and stacking effects.',
};

export const theLostPilgrimSEO = {
  title: 'The Lost Pilgrim - Stella Sora Disc Guide',
  description:
    'Complete guide for The Lost Pilgrim, a 5-Star Terra disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['The Lost Pilgrim', 'Stella Sora', '5-Star', 'Terra', 'Disc', 'Gerie', 'disc guide'],
};
