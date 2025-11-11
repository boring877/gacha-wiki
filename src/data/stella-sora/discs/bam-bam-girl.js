// Bam Bam Girl Disc Data
// Jinglin's Lux Element Disc

export const bamBamGirlData = {
  id: 10,
  name: 'Bam Bam Girl',
  slug: 'bam-bam-girl',
  image: 'bam-bam-girl.jpg',
  rarity: '4-Star',
  element: 'Lux',
  tags: ['Lux', 'Ultimate'],
  character: 'Jinglin',

  // Basic Stats
  stats: {
    baseHP: 5620,
    baseATK: 1077,
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Glimmer Bubbles',
      effect:
        "Increases the ATK of Lux Trekkers in the squad by 10%. When a Lux Trekker casts a skill, increases Lux Trekkers' Ultimate DMG by 50% for 5s.",
    },
    harmony: {
      name: 'Shining Burst',
      level: 5,
      effect: "When any Trekker triggers Lux Mark, increases Lux squadmates' ATK by 20% for 4s.",
      requirements: {
        'Melody of Burst': '≥ Lv.70',
        'Melody of Focus': '≥ Lv.70',
        'Melody of Stamina': '≥ Lv.70',
      },
    },
  },

  // Support Information
  support: {
    musicalNotesSource: 'Monolith Ascension',
    melodies: {
      stamina: {
        baseEffect: 'Max HP +0.3%',
        maxEffect: 'Max HP +29.7%',
      },
      pummel: {
        baseEffect: 'ATK +0.3% per level',
        maxEffect: 'ATK +29.7%',
      },
    },
  },

  // Disc Description
  description:
    'Lux-focused disc that boosts ATK and provides Ultimate DMG bonuses through skill activation and mark triggers.',
};

export const bamBamGirlSEO = {
  title: 'Bam Bam Girl - Stella Sora Disc Guide',
  description:
    'Complete guide for Bam Bam Girl, a 4-Star Lux disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Bam Bam Girl', 'Stella Sora', '4-Star', 'Lux', 'Disc', 'Jinglin', 'disc guide'],
};
