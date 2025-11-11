// Sunlit Blossom Disc Data
// Freesia's Aqua Element Disc

export const sunlitBlossomData = {
  id: 3,
  name: 'Sunlit Blossom',
  slug: 'sunlit-blossom',
  image: 'Sunlit_blossom.jpg',
  rarity: '5-Star',
  element: 'Aqua',
  tags: ['Aqua', 'Auto Attack', 'Skills'],
  character: 'Freesia',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    skillDmg: '24%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Sunlit Blossom',
      effect:
        "Increases the squad's Aqua DMG by **20%**. Increases the Aqua DMG dealt by Aqua Trekkers in the squad to targets inflicted with Chill or Freeze by an additional **20%**.",
    },
    harmony: {
      name: 'Tears of Joy',
      level: 5,
      effect:
        "When any Aqua Trekker casts an Ultimate, increases Aqua Trekkers' Auto Attack and Skill DMG by **50%** for **18s**.",
      requirements: {
        'Melody of Aqua': '≥ Lv.70',
        'Melody of Ultimate': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Bygone Echoes',
      level: 5,
      effect:
        "Increases Aqua Trekkers' Skill DMG by **20%**. When any Aqua Trekker deals Skill DMG, if a support Aqua Trekker is on the battlefield, increases the DMG of this hit by **24%**.",
      requirements: {
        'Melody of Ultimate': '≥ Lv.75',
        'Melody of Skill': '≥ Lv.75',
        'Melody of Aqua': '≥ Lv.75',
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
      hp: {
        baseEffect: 'HP +0.3% per level',
        maxEffect: 'HP +29.7%',
      },
    },
  },

  // Disc Description
  description:
    'Aqua-element disc that provides versatile Aqua support with skill damage bonuses and status condition synergy.',
};

export const sunlitBlossomSEO = {
  title: 'Sunlit Blossom - Stella Sora Disc Guide',
  description:
    'Complete guide for Sunlit Blossom, a 5-Star Aqua disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Sunlit Blossom', 'Stella Sora', '5-Star', 'Aqua', 'Disc', 'Freesia', 'disc guide'],
};
