// Ripples of Nostalgia Disc Data
// Shia's Lux Element Disc

export const ripplesOfNostalgiaData = {
  id: 6,
  name: 'Ripples of Nostalgia',
  slug: 'ripples-of-nostalgia',
  image: 'ripples_of_nostalgia.jpg',
  rarity: '5-Star',
  element: 'Lux',
  tags: ['Lux', 'Element', 'VUL', 'Skills'],
  character: 'Shia',

  // Basic Stats
  stats: {
    basicAtk: 1631,
    luxDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Ripples of Nostalgia',
      effect:
        "Increases the squad's Lux DMG by **30%**. When the main Lux Trekkers deals Ultimate DMG to a target, the target takes **5%** more Lux DMG for **15s**, stacking up to **9** times.",
    },
    harmony: {
      name: 'Dance of Shimmers',
      level: 5,
      effect:
        "Increases the main Lux Trekker's Auto Attack and Skill DMG by **25%**. When the main Lux Trekker deals Skill DMG, increases this effect by an additional **22.5%** for **6s**.",
      requirements: {
        'Melody of Lux': '≥ Lv.70',
        'Melody of Skill': '≥ Lv.70',
      },
    },
    skill: {
      name: 'Glaring Steps',
      level: 5,
      effect:
        "After the main Lux Trekker deals Skill DMG **30** times in total, increases the squad's Lux DMG by **45%** for **10s**.",
      requirements: {
        'Melody of Ultimate': '≥ Lv.75',
        'Melody of Skill': '≥ Lv.75',
        'Melody of Lux': '≥ Lv.75',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      vul: {
        baseEffect: 'Vulnerability Exploit +0.3% per level',
        maxEffect: 'Vulnerability Exploit +29.7%',
      },
      skill: {
        baseEffect: 'Skill DMG +0.5% per level',
        maxEffect: 'Skill DMG +49.5%',
      },
    },
  },

  // Disc Description
  description:
    'Lux-focused disc that builds damage through ultimate vulnerability stacking and sustained skill damage.',
};

export const ripplesOfNostalgiaSEO = {
  title: 'Ripples of Nostalgia - Stella Sora Disc Guide',
  description:
    'Complete guide for Ripples of Nostalgia, a 5-Star Lux disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Ripples of Nostalgia', 'Stella Sora', '5-Star', 'Lux', 'Disc', 'Shia', 'disc guide'],
};
