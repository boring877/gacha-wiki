// Claw the Claw Disc Data
// Nazuna's Terra Element Disc

export const clawTheClawData = {
  id: 5,
  name: 'Claw the Claw',
  slug: 'claw-the-claw',
  image: 'Claw_the_claw.jpg',
  rarity: '5-Star',
  element: 'Terra',
  tags: ['Terra', 'Element', 'Skills', 'VUL'],
  character: 'Nazuna',

  // Basic Stats
  stats: {
    basicAtk: 1582,
    terraDmg: '15%',
  },

  // Disc Skills
  skills: {
    melody: {
      name: 'Claw the Claw',
      effect:
        "Increases the squad's Terra DMG by **20%**. When a target's Terra Mark is triggered, the target takes **15%** more Terra DMG for **4s**.",
    },
    harmony: [
      {
        name: 'Lucky Clip',
        level: 5,
        effect:
          "When any Terra Trekker restores HP, increases the squad's Terra DMG by **25%** for **10s**.",
        requirements: {
          'Melody of Terra': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
      {
        name: 'Record Breaker',
        level: 5,
        effect:
          "When any Terra Trekker's damage exceeds a threshold, increases the squad's Terra DMG by **25%** for **10s**.",
        requirements: {
          'Melody of Luck': '≥ Lv.70',
          'Melody of Skill': '≥ Lv.70',
        },
      },
    ],
    skill: {
      name: 'Unleashed Fury',
      level: 5,
      effect:
        "Increases Terra squadmates' Skill DMG by **40%**. When triggering Terra Mark, increases this effect by an additional **20%**.",
      requirements: {
        'Melody of Luck': '≥ Lv.75',
        'Melody of Skill': '≥ Lv.75',
        'Melody of Terra': '≥ Lv.75',
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
      skill: {
        baseEffect: 'Skill DMG +0.5% per level',
        maxEffect: 'Skill DMG +49.5%',
      },
    },
  },

  // Disc Description
  description:
    'Terra-focused disc that amplifies damage through mark vulnerability and provides flexible harmony options.',
};

export const clawTheClawSEO = {
  title: 'Claw the Claw - Stella Sora Disc Guide',
  description:
    'Complete guide for Claw the Claw, a 5-Star Terra disc in Stella Sora. Stats, skills, and detailed information.',
  keywords: ['Claw the Claw', 'Stella Sora', '5-Star', 'Terra', 'Disc', 'Nazuna', 'disc guide'],
};
