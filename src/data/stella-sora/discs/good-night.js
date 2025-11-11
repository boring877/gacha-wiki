// Good Night Disc Data
// Tilia's Lux Element Disc

export const goodNightData = {
  id: 9,
  name: 'Good Night',
  slug: 'good-night',
  image: 'Good_night.jpg',
  rarity: '4-Star',
  element: 'Lux',
  tags: ['Lux', 'Element', 'HP', 'Auto Attack'],
  character: 'Tilia',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    luxDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Good Night',
      effect:
        "Increases the squad's Terra DMG by **20%**. When any Terra Trekker restores HP, increases Terra squadmates' HP by **15%** for 10s.",
    },
    harmony: {
      name: 'Sweet Dreams',
      level: 5,
      effect:
        "Increases Terra squadmates' HP by **30%**. When any Terra Trekker restores HP, increases their Terra DMG by **25%** for 10s.",
      requirements: {
        'Melody of HP': '≥ Lv.70',
        'Melody of Terra': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Nightly Vigil',
      level: 5,
      effect:
        "Increases Terra squadmates' Auto Attack DMG by **30%**. When any Terra Trekker restores HP, increases their Auto Attack DMG by an additional **20%** for 8s.",
      requirements: {
        'Melody of Auto Attack': '≥ Lv.75',
        'Melody of HP': '≥ Lv.75',
        'Melody of Terra': '≥ Lv.75',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      hp: {
        baseEffect: 'HP +0.3% per level',
        maxEffect: 'HP +29.7%',
      },
      autoAttack: {
        baseEffect: 'Auto Attack DMG +0.4% per level',
        maxEffect: 'Auto Attack DMG +39.6%',
      },
    },
  },

  // Disc Description
  description:
    'Lux-focused disc that combines HP restoration effects with auto attack enhancement for sustained combat.',
};

export const goodNightSEO = {
  title: 'Good Night - Stella Sora Disc Guide',
  description:
    'Complete guide for Good Night, a 4-Star Lux disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Good Night', 'Stella Sora', '4-Star', 'Lux', 'Disc', 'Tilia', 'disc guide'],
};
