// Daylight Garden Disc Data
// Nanoha's Ventus Element Disc

export const daylightGardenData = {
  id: 7,
  name: 'Daylight Garden',
  slug: 'daylight-garden',
  image: 'daylight_garden.jpg',
  rarity: '5-Star',
  element: 'Ventus',
  tags: ['Ventus', 'Auto Attack', 'Skills', 'Ultimate'],
  character: 'Nanoha',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    ventusDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Daylight Garden',
      effect:
        "Increases the Auto Attack DMG & Skill DMG of the main Ventus character by **28%**. When any character triggers Ventus Mark, increases the main Ventus character's Ventus DMG by **24%** for **4s**.",
    },
    harmony: {
      name: 'Fragrant Illusion',
      level: 5,
      effect:
        "Increases Ventus squadmates' Ultimate DMG by **40%**. When the main Ventus character deals Ultimate DMG, increases her Ventus DMG by **24%** for **20s**.",
      requirements: {
        'Melody of Ultimate': '≥ Lv.70',
        'Melody of Ventus': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Swaying Petals',
      level: 5,
      effect:
        "Increases Ventus squadmates' Auto Attack DMG by **30%**. When the main Ventus character deals Auto Attack DMG, increases her Ventus DMG by **15%** for **15s**.",
      requirements: {
        'Melody of Ultimate': '≥ Lv.75',
        'Melody of Auto Attack': '≥ Lv.75',
        'Melody of Ventus': '≥ Lv.75',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      autoAttack: {
        baseEffect: 'Auto Attack DMG +0.4% per level',
        maxEffect: 'Auto Attack DMG +39.6%',
      },
      ultimate: {
        baseEffect: 'Ultimate DMG +1% per level',
        maxEffect: 'Ultimate DMG +99%',
      },
    },
  },

  // Disc Description
  description:
    'Ventus-focused disc that provides comprehensive damage boosts for auto attacks, skills, and ultimate abilities.',
};

export const daylightGardenSEO = {
  title: 'Daylight Garden - Stella Sora Disc Guide',
  description:
    'Complete guide for Daylight Garden, a 5-Star Ventus disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Daylight Garden', 'Stella Sora', '5-Star', 'Ventus', 'Disc', 'Nanoha', 'disc guide'],
};
