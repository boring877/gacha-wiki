// Nazuna Character Data
export const nazunaData = {
  id: 9,
  name: 'Nazuna',
  slug: 'nazuna',
  detailUrl: '/guides/stella-sora/characters/nazuna',
  image: 'Nazuna.jpg',
  icon: 'Nazuna.jpg',
  rarity: '5-Star',
  element: 'Terra',
  role: 'Support',
  faction: 'Petal Bloom Guild',
  trekkerStyle: 'Collector',
  level: 90,

  // Essential table stats (Level max)
  stats: {
    hp: 52791,
    attack: 6045,
    defense: 190,
    critRate: 5.0,
    critDmg: 150.0,
  },

  // Combat stats
  combatStats: {
    vulExploit: 0.0,
    defPen: 0,
    ignoreDef: 0.0,
  },

  // Energy stats
  energyStats: {
    maxEnergy: 285,
    chargeEfficiencyMain: 100.0,
    chargeEfficiencySupport: 75.0,
  },

  // Elemental damage stats
  elementalStats: {
    Terra: {
      dmg: 100.0,
      pen: 0,
      ignoreRes: 0.0,
    },
  },

  // Skills
  skills: [
    {
      name: 'Laid-back Shots',
      type: 'Attack',
      level: 10,
      cooldown: 0,
      energyCost: 0,
      description:
        'Shoots consecutively with the crossbow, each shot dealing **47.5% of ATK** as **Terra DMG**. Stores up to 6 arrows.',
    },
    {
      name: 'Plushie Dance',
      type: 'Main Skill',
      level: 10,
      cooldown: 8,
      energyCost: 0,
      description:
        "Generates a penguin plushie that keeps moving toward the target and explodes in 3s, dealing **423% of ATK** as **AoE Terra DMG** and inflicting **Terra Mark: Earth Vein**. When the penguin plushie deals DMG, the target's **Terra DMG Taken** increases by **129%** for **5s**.",
    },
    {
      name: 'Bingo Crush',
      type: 'Support Skill',
      level: 10,
      cooldown: 20,
      energyCost: 0,
      description:
        "Raffles 5 times and follows the main Trekker.\n\n- **Full penguins**: Throws the plushie and generates a penguin statue, dealing **32.3% of ATK x7** as **AoE Terra DMG**.\n- **Full hearts**: Shoots a heart arrow that restores the main Trekker's HP by **5.9%** and explodes, dealing **113% of ATK** as **AoE Terra DMG**.\n- **Hearts and penguins**: Shoots in a sweeping motion, dealing **53.3% of ATK x6** as **Terra DMG**.\n- All these attacks inflict **Terra Mark: Earth Vein**.\n- **More penguins than hearts**: The squad receive **Kiss of Penguin**, which increases **ATK** by **103%** for **3.5s**.\n- **More hearts than penguins**: The squad receive **Kiss of Love**, which increases **Terra DMG** by **52%** for **3.5s**.",
    },
    {
      name: 'Dream Spiral',
      type: 'Ultimate',
      level: 10,
      cooldown: 30,
      energyCost: 285,
      description:
        "Rides a shopping cart and spins rapidly. Moves to any direction while the skill is active, dealing **149% of ATK x11** as **AoE Terra DMG** and inflicting **Terra Mark: Earth Vein**. When the shopping cart explodes, increases the squad's **ATK** by **163%** for **15s**.",
    },
  ],

  // Talents (Dupes)
  talents: [
    {
      id: '01',
      name: 'Blanket Home',
      description:
        "When **Terra Mark** is triggered, increases the squad's **Terra DMG** by **14%** for **8s**.",
    },
    {
      id: '02',
      name: 'Snack Summoning Circle',
      description:
        "After Nazuna deals Ultimate DMG to a target, increases the main Trekker's **Terra DMG** to the same target by **40%** for **20s**.",
    },
    {
      id: '03',
      name: 'Fluffy Guardian',
      description:
        'After Nazuna inflicts **Terra Mark** to a target, increases the **Terra DMG taken** by the target by **14%** for **8s**.',
    },
    {
      id: '04',
      name: 'Expert Homebody',
      description:
        "When Nazuna deals Skill DMG to a target, increases the main Trekker's **ATK** by **20%** for **5s**.",
    },
    {
      id: '05',
      name: 'Lullaby of Sweet Dreams',
      description:
        "When there are 3 Terra Trekkers in the squad, increases the squad's **Terra DMG** by **14%**.",
    },
  ],

  // Potentials - Main Position
  mainPotentials: [
    // === BUILD 1: DOLL DAMAGE BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nazuna: Main Build 1',
      buildSubtitle: 'Doll DMG Build',
      buildDescription:
        'A build that increases doll DMG and adds recovery, improving sustained combat capability.',
    },
    {
      name: 'Small Force',
      description:
        "Significantly increases the penguin plushie's size and Movement Speed. When the penguin plushie deals DMG, increases the target's **Terra DMG Taken** by **10%** for **3s**, stacking up to 5 times.",
      image: 'small_force.jpg',
    },
    {
      name: 'Wobble Dance',
      description:
        'The penguin plushie dances while moving, dealing **4.6% of ATK x11** as **AoE Terra DMG** and inflicting **Terra Mark: Earth Vein**. Also restores **1.6% HP** to the main Trekker 5 times.',
      image: 'wobble_dance.jpg',
    },
    {
      name: 'Cuddle of Terror',
      level: 'Lv. 6',
      description:
        "When the penguin plushie stops and pounces on the target. Also increases the penguin plushie's DMG by **171%**.",
      image: 'cuddle_of_terror.jpg',
    },
    {
      name: "Cutie's Rally",
      level: 'Lv. 6',
      description:
        "While the penguin plushie is on the battlefield, increases the squad's **ATK** by **75%**.",
      image: "Cutie's_rally.jpg",
    },
    {
      name: 'Beat Maestro',
      level: 'Lv. 6',
      description:
        'When Nazuna reloads, increases **Skill DMG** by **48%** for **5s**, stacking up to 3 times.',
      image: 'beat_maestro.jpg',
    },

    // === BUILD 2: RELOAD SPEED BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nazuna: Main Build 2',
      buildSubtitle: 'Reload Speed Build',
      buildDescription:
        'A build that increases reload speed, allowing for more frequent activation of Whirlwind Shot.',
    },
    {
      name: 'Roll the Dice',
      description:
        "Nazuna's Auto Attacks have a **30%** chance to consume 2 ammo and fire 3 crossbow bolts. The chance is increased to **50%** while **Plushie Dance (Main Skill)** is on cooldown.",
      image: 'roll_the_dice.jpg',
    },
    {
      name: 'Graceful Turn',
      description:
        "When Nazuna reloads during an Auto Attack, she delivers a spinning shot, firing 6 tracking crossbow bolts, each dealing **19.8% of ATK** as **Terra Auto Attack DMG** and inflicting **Terra Mark: Earth Vein**. When reloading, increases all squadmates' **ATK** by **10%** for **4s**.",
      image: 'graceful_turn.jpg',
    },
    {
      name: 'Clean Sweep',
      level: 'Lv. 6',
      description:
        'When Nazuna performs an Auto Attack, there is a **20%** chance to throw a golden egg, dealing **86% of ATK** as **AoE Terra Auto Attack DMG** and inflicting **Terra Mark: Earth Vein**.',
      image: 'clean_sweep.jpg',
    },
    {
      name: 'Fill the Gap',
      level: 'Lv. 6',
      description:
        "When Nazuna reloads, increases support Trekkers' **Skill DMG** by **19%** for **6s**, stacking up to 5 times.",
      image: 'fill_the_gap.jpg',
    },
    {
      name: 'Focus Fire',
      level: 'Lv. 6',
      description:
        "While **Plushie Dance (Main Skill)** is on cooldown, increases the squad's **ATK** by **47%**.",
      image: 'focus_fire.jpg',
    },

    // === GENERIC MAIN ROLE CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Nazuna: Main Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Main role setup.',
    },
    {
      name: 'Touch of Nature',
      level: 'Lv. 6',
      description: "Increases all Terra squadmates' **Mark DMG** by **420%**.",
      image: 'touch_of_nature.jpg',
    },
    {
      name: 'Swiftstep',
      level: 'Lv. 6',
      description:
        "Nazuna can dodge one more time. When dodging, increases all squadmates' **ATK** by **43%** for **2s**.",
      image: 'swiftstep.jpg',
    },
    {
      name: 'Wily Wonder',
      level: 'Lv. 6',
      description:
        "When Nazuna casts **Plushie Dance (Main Skill)**, increases all squadmates' **Terra DMG** by **75%** for **5s**.",
      image: 'wily_wonder.jpg',
    },
    {
      name: 'Operation: Pandemonium',
      level: 'Lv. 6',
      description:
        "When casting **Dream Spiral (Ultimate)**, increases the squad's **Skill Crit Rate** by **36%** for **15s**.",
      image: 'operation_pandemonium.jpg',
    },
    {
      name: 'Balloonado',
      level: 'Lv. 6',
      description:
        'While Nazuna spins during **Dream Spiral**, she pulls in nearby targets. Also increases her **Ultimate DMG** by **172%**.',
      image: 'balloonado.jpg',
    },
    {
      name: 'Rocket Cart',
      level: 'Lv. 6',
      description:
        "When **Dream Spiral (Ultimate)** deals DMG, there is a **30%** chance to increase the targets' **Terra DMG Taken** by **58%** for **5s**, up to 5 stacks.",
      image: 'rocket_cart.jpg',
    },
  ],

  // Support Potentials - Support Position
  supportPotentials: [
    // === BUILD 1: PENGUIN BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nazuna: Support Build 1',
      buildSubtitle: 'Penguin Build',
      buildDescription:
        'A build that increases the probability of drawing a "penguin," throwing penguin statues and increases the main Trekker\'s DPS.',
    },
    {
      name: 'Bold Assertion',
      description:
        "Enhances **Kiss of Penguin**, increasing the squad's **ATK** by **113.3%** for **3.5s**. The penguin statue now launches 10 attacks.",
      image: 'bold_assertion.jpg',
    },
    {
      name: 'Feel the Beat',
      description:
        "The chance to draw penguins in raffles is **greatly increased**. When the penguin statue deals DMG, increases the target's **Terra DMG Taken** by **5%** for **3.5s**, up to 5 stacks. Also increases the penguin statue's **Attack Range**.",
      image: 'feel_the_beat.jpg',
    },
    {
      name: 'Jubilant Spin',
      level: 'Lv. 6',
      description:
        "After the penguin statue from the raffle appears, Nazuna unleashes a barrage and the main Trekker's **Skill DMG** is increased by **53%** for **7s**.",
      image: 'jubilant_spin.jpg',
    },
    {
      name: 'Feather Frenzy',
      level: 'Lv. 6',
      description:
        'When unleashing a barrage, if more penguins than hearts are drawn in this baffle, this barrage deals an additional **11.9% of ATK** as **AoE Terra DMG**.',
      image: 'feather_frenzy.jpg',
    },
    {
      name: 'Twinkle Toss',
      level: 'Lv. 6',
      description:
        'Upon vanishing, the penguin statue explodes, dealing **122% of ATK** as **AoE Terra DMG** and inflicting **Terra Mark: Earth Vein**.',
      image: 'twinkle_toss.jpg',
    },

    // === BUILD 2: HEART BUILD ===
    {
      isBuildHeader: true,
      buildTitle: 'Nazuna: Support Build 2',
      buildSubtitle: 'Heart Build',
      buildDescription:
        'A build that increases the probability of drawing a "heart," shoots heart arrows and enhances the main character\'s survivability.',
    },
    {
      name: 'Arrow of Affection',
      description:
        'The chance to draw hearts in raffles is **greatly increased**. The heart arrow can ricochet for **1 time**.',
      image: 'Arrow_of_affectionjpg.jpg',
    },
    {
      name: 'Sweetheart Bloom',
      description:
        "Enhances the effects of **Kiss of Love**: Increases the squad's **Terra DMG** by **57%** for **3.5s**. After a Heart Arrow explodes, nearby targets are pulled in and a **secondary explosion** is triggering.",
      image: 'sweetheart_bloom.jpg',
    },
    {
      name: 'Rain of Passion',
      level: 'Lv. 6',
      description:
        "After firing the heart arrow, Nazuna unleashes a barrage and increases the main Trekker's **Terra DMG** by **50%** for **7s**.",
      image: 'rain_of_passion.jpg',
    },
    {
      name: "Love's True Strike",
      level: 'Lv. 6',
      description:
        'When unleashing a barrage, if more hearts than penguins are drawn in this baffle, the crossbow bolts will **pierce through targets**.',
      image: 'Love_true_strike.jpg',
    },
    {
      name: 'Honeyed Arrow',
      level: 'Lv. 6',
      description:
        "Increases the barrage and heart arrow's **DMG** by **20%**. The heart arrow now restores **90% more HP**.",
      image: 'honeyed_arrow.jpg',
    },

    // === GENERIC SUPPORT CARDS ===
    {
      isBuildHeader: true,
      buildTitle: 'Nazuna: Support Generic Cards',
      buildSubtitle: 'Universal Enhancements',
      buildDescription: 'General purpose cards that work well in any Support role setup.',
    },
    {
      name: 'Lucky Drop',
      level: 'Lv. 6',
      description:
        "When Nazuna is on the battlefield, increases all Terra squadmates' **Terra DMG** by **104%**.",
      image: 'lucky_drop.jpg',
    },
    {
      name: 'Progressive Jackpot',
      level: 'Lv. 6',
      description:
        "During raffles, increases Nazuna's **ATK** by **21%** for **7s**, stacking up to 3 times.",
      image: 'progressive_jackpot.jpg',
    },
    {
      name: 'Double Delight',
      level: 'Lv. 6',
      description:
        "If the last 2 raffles are full penguins or full hearts, increases the squad's **Terra DMG** by **87%** for **10s**.",
      image: 'double_delight.jpg',
    },
    {
      name: 'Operation: Pandemonium',
      level: 'Lv. 6',
      description:
        "When casting **Dream Spiral (Ultimate)**, increases the squad's **Skill Crit Rate** by **36%** for **15s**.",
      image: 'operation_pandemonium.jpg',
    },
    {
      name: 'Balloonado',
      level: 'Lv. 6',
      description:
        'While Nazuna spins during **Dream Spiral**, she pulls in nearby targets. Also increases her **Ultimate DMG** by **172%**.',
      image: 'balloonado.jpg',
    },
    {
      name: 'Rocket Cart',
      level: 'Lv. 6',
      description:
        "When **Dream Spiral (Ultimate)** deals DMG, there is a **30%** chance to increase the targets' **Terra DMG Taken** by **58%** for **5s**, up to 5 stacks.",
      image: 'rocket_cart.jpg',
    },
  ],

  // Disc Information
  disc: {
    name: 'Claw the Claw',
    image: 'Claw_the_claw.jpg',
    rarity: '5-Star',
    element: 'Terra',
    tags: ['Terra', 'Element', 'Skills', 'VUL'],
    stats: {
      basicAtk: 1582,
      terraDmg: '15%',
    },
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
            "When a support Trekker deals Skill DMG, increases Terra squadmates' Skill DMG by **7%** for **8s**, stacking up to **6** times.",
          requirements: {
            'Melody of Luck': '≥ Lv.75',
            'Melody of Terra': '≥ Lv.75',
            'Melody of Skill': '≥ Lv.75',
          },
        },
      ],
    },
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
  },

  // Status Effects
  statusEffects: [
    {
      name: 'Terra Mark: Earth Vein',
      description:
        'A special status applied to the target by some Terra Trekkers, lasting for **10s**. Can be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.',
    },
    {
      name: 'Terra Mark',
      description:
        "The generic name for all Terra Marks. When triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
    },
  ],

  // Generic Cards (duplicate from supportPotentials for compatibility)
  genericCards: [
    {
      name: 'Lucky Drop',
      level: 'Lv. 6',
      description:
        "When Nazuna is on the battlefield, increases all Terra squadmates' **Terra DMG** by **104%**.",
      image: 'lucky_drop.jpg',
    },
    {
      name: 'Progressive Jackpot',
      level: 'Lv. 6',
      description:
        "During raffles, increases Nazuna's **ATK** by **21%** for **7s**, stacking up to 3 times.",
      image: 'progressive_jackpot.jpg',
    },
    {
      name: 'Double Delight',
      level: 'Lv. 6',
      description:
        "If the last 2 raffles are full penguins or full hearts, increases the squad's **Terra DMG** by **87%** for **10s**.",
      image: 'double_delight.jpg',
    },
    {
      name: 'Operation: Pandemonium',
      level: 'Lv. 6',
      description:
        "When casting **Dream Spiral (Ultimate)**, increases the squad's **Skill Crit Rate** by **36%** for **15s**.",
      image: 'operation_pandemonium.jpg',
    },
    {
      name: 'Balloonado',
      level: 'Lv. 6',
      description:
        'While Nazuna spins during **Dream Spiral**, she pulls in nearby targets. Also increases her **Ultimate DMG** by **172%**.',
      image: 'balloonado.jpg',
    },
    {
      name: 'Rocket Cart',
      level: 'Lv. 6',
      description:
        "When **Dream Spiral (Ultimate)** deals DMG, there is a **30%** chance to increase the targets' **Terra DMG Taken** by **58%** for **5s**, up to 5 stacks.",
      image: 'rocket_cart.jpg',
    },
  ],

  story:
    'Nazuna fights with her trusty hand crossbow and her puppet companions at her side. Her out-of-the-box ideas and uncanny luck always bring pleasant surprises to the squad.',

  fullStats: {
    speed: 100,
  },
};

export const nazunaSEO = {
  title: 'Nazuna - Stella Sora Character Guide',
  description:
    'Complete guide for Nazuna, an 5-Star Terra Support in Stella Sora. Stats, skills, talents, potentials, and detailed information.',
  keywords: [
    'Nazuna',
    'Stella Sora',
    '5-Star',
    'Terra',
    'Support',
    'character guide',
    'Claw the Claw',
    'Petal Bloom Guild',
    'Collector',
    'penguin plushie',
  ],
};
