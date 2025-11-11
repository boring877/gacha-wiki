// Mystic Brushstrokes Disc Data
// Chixia's Ignis Element Disc

export const mysticBrushstrokesData = {
  id: 2,
  name: 'Mystic Brushstrokes',
  slug: 'mystic-brushstrokes',
  image: 'Mystic_brushstrokes.jpg',
  rarity: '5-Star',
  element: 'Ignis',
  tags: ['Ignis', 'Element', 'Skills', 'Minion'],
  character: 'Chixia',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    ignisDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Mystic Brushstrokes',
      effect:
        "Increases the squad's Ignis DMG by **20%**. When any character triggers Ignis Mark, increases Ignis squadmates' Skill DMG by **30%** for 4s.",
    },
    harmony: {
      name: 'Wild Brushstrokes',
      level: 5,
      effect:
        "Increases Ignis squadmates' Skill DMG by **20%**. When the target is inflicted with Ignite, increases by an additional **20%**.",
      requirements: {
        'Melody of Ignis': '≥ Lv.70',
        'Melody of Skill': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Power Unleashed',
      level: 5,
      effect:
        'When any Ignis Trekker casts a Support Skill, increases the ATK of the main Ignis Trekker and minions by **15%** for 8s.',
      requirements: {
        'Melody of Ultimate': '≥ Lv.75',
        'Melody of Ignis': '≥ Lv.75',
        'Melody of Skill': '≥ Lv.75',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      skill: {
        baseEffect: 'Skill DMG +0.5% per level',
        maxEffect: 'Skill DMG +49.5%',
      },
      hp: {
        baseEffect: 'HP +0.3% per level',
        maxEffect: 'HP +29.7%',
      },
    },
  },

  // Disc Description
  description:
    'Ignis-focused disc that enhances skill damage and minion attacks through mark triggers.',
};

export const mysticBrushstrokesSEO = {
  title: 'Mystic Brushstrokes - Stella Sora Disc Guide',
  description:
    'Complete guide for Mystic Brushstrokes, a 5-Star Ignis disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: [
    'Mystic Brushstrokes',
    'Stella Sora',
    '5-Star',
    'Ignis',
    'Disc',
    'Chixia',
    'disc guide',
  ],
};
