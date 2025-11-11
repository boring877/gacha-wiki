// Stella Sora Potential Data
// Centralized potential information for all characters
// This eliminates duplication and ensures consistency across character pages and team builds

// Shia Potentials
export const shiaPotentials = {
  // SNOW RABBIT BUILD
  'Phantom Step Radiance': {
    name: 'Phantom Step Radiance',
    description:
      "When Snow Rabbit deals Auto Attack DMG, it inflicts Electro Music, stacking up to **20 times**. Upon reaching the max stack limit, Electro Music's stacks are removed, dealing **369% of ATK** as **Lux Skill DMG**.",
    image: 'Phantom_step_rediance.jpg',
    character: 'Shia',
  },
  'Rimecrystal Edge': {
    name: 'Rimecrystal Edge',
    description:
      "Whirling Waves (Main Skill) summons a Snow Rabbit, dealing **592% of ATK** as **Lux Skill DMG** upon entering combat. Every time Snow Rabbit deals Skill DMG, it inflicts Electro Music, stacking up to **20 times**. Upon reaching the max stack limit, Electro Music's stacks are removed, dealing **369% of ATK** as **Lux Skill DMG**.",
    image: 'Rimecrystal_edge.jpg',
    character: 'Shia',
  },
  'Subzero Dominion': {
    name: 'Subzero Dominion',
    level: 'Lv. 6',
    description:
      "Whirling Waves (Main Skill) summons **1 additional Snow Rabbit**. While the Main Skill is active, increases all Snow Rabbits' **Lux DMG** by **171%**.",
    image: 'Subzero_dominion.jpg',
    character: 'Shia',
  },
  'Glacial Dash': {
    name: 'Glacial Dash',
    level: 'Lv. 6',
    description:
      "Increases Snow Rabbit's Auto Attack DMG by **603%**. Bullets from Auto Attacks can pierce through targets.",
    image: 'Glacial_dash.jpg',
    character: 'Shia',
  },
  'Rimeheart Pulse': {
    name: 'Rimeheart Pulse',
    level: 'Lv. 6',
    description:
      "When a Snow Rabbit triggers **Lux Mark**, increases all the Snow Rabbits' **ATK** by **22%** for **5s**, stacking up to **6 times**.",
    image: 'Rimeheart_pulse.jpg',
    character: 'Shia',
  },

  // NIGHT RABBIT BUILD
  'Moonlight Overflow': {
    name: 'Moonlight Overflow',
    description:
      'During Auto Attacks, Night Rabbit locks up to **4 targets** and fires a tracking bullet at each, each dealing **118% of ATK** as **AoE Lux DMG**.',
    image: 'Moonlight_overflow.jpg',
    character: 'Shia',
  },
  'Astral Pirouette': {
    name: 'Astral Pirouette',
    description:
      'Night Rabbit summoned by the Main Skill locks up to **2 targets** and fires a tracking bullet at each, each dealing **120% of ATK** as **AoE Lux DMG**.',
    image: 'Astral_pirouette.jpg',
    character: 'Shia',
  },
  'Lunar Detonation': {
    name: 'Lunar Detonation',
    level: 'Lv. 6',
    description:
      "Night Rabbit's missile splits after hitting a target, dealing DMG to up to **3 nearby targets**, dealing **63% of ATK** as **Lux Skill DMG** to each.",
    image: 'Lunar_detonation.jpg',
    character: 'Shia',
  },
  'Final Crescent': {
    name: 'Final Crescent',
    level: 'Lv. 6',
    description:
      'During Auto Attacks, every time Night Rabbit deals DMG to a different target, increases the DMG of its next Auto Attack by **117%**, stacking up to **5 times**.',
    image: 'Final_crescent.jpg',
    character: 'Shia',
  },
  'Lunar Combo': {
    name: 'Lunar Combo',
    level: 'Lv. 6',
    description:
      'Reduces the Attack Interval of Night Rabbits summoned by Whirling Waves (Main Skill) by **40%**, and increases Skill DMG by **73%**.<br><br><em>Note: This gives nice damage for skill damage. Skill damage means main skill and support skill!</em>',
    image: 'Lunar_combo.jpg',
    character: 'Shia',
  },

  // GENERIC MAIN ROLE
  'Leporine Gale': {
    name: 'Leporine Gale',
    level: 'Lv. 6',
    description:
      "While Whirling Waves (Main Skill) is active, increases Shia's Movement Speed by **30%**. When there are no nearby targets, increases Shia's **Lux DMG** by **96%**.",
    image: 'Leporing_gale.jpg',
    character: 'Shia',
  },
  "Hare's Pursuit": {
    name: "Hare's Pursuit",
    level: 'Lv. 6',
    description:
      "Shia can dodge one more time. When Shia triggers **Lux Mark**, increases her **ATK** by **19%** for **8s**, stacking up to **2 times**.<br><br><em>Note: You do not need Lv. 6 - we only care about the 'dodge one more time' effect!</em>",
    image: "Hare's_Pursuit.jpg",
    character: 'Shia',
  },
  "Rabbit's Beam": {
    name: "Rabbit's Beam",
    level: 'Lv. 6',
    description:
      "Increases Shia's **Lux DMG** to a target with less than **50% HP** by **96%**.<br><br><em>Note: We are not sure if this works on Boss Blitz or other event bosses that have multiple HP bars!</em>",
    image: "Rabbit's_Beam.jpg",
    character: 'Shia',
  },
  'Howl to the Moon': {
    name: 'Howl to the Moon',
    level: 'Lv. 6',
    description:
      "Every time Divine Deluge (Ultimate) lands a Crit Hit, increases Shia's **ATK** by **8%** for **10s**, stacking up to **20 times**.",
    image: 'Howl_to_the_moon.jpg',
    character: 'Shia',
  },
  'Silent Tide': {
    name: 'Silent Tide',
    level: 'Lv. 6',
    description:
      "When Shia casts Divine Deluge (Ultimate), if other squadmates' Ultimates are all on cooldown, increases this cast's Ultimate DMG by **129%**.",
    image: 'Silent_tide.jpg',
    character: 'Shia',
  },
  'Wave to Oblivion': {
    name: 'Wave to Oblivion',
    level: 'Lv. 6',
    description:
      'Reduces the interval between bombs of Divine Deluge (Ultimate) by **30%** and increases its Ultimate DMG by **129%**.<br><br><em>Note: This potential is quite popular, seems people like it. I personally do not use it because my build is not for ultimate. There is another build for full ultimate!</em>',
    image: 'Wave_to_oblivion.jpg',
    character: 'Shia',
  },
};

// Tilia Potentials
export const tiliaPotentials = {
  'Holy Inscription': {
    name: 'Holy Inscription',
    description:
      'When Aegis of Light hits a target, summons a Lux sphere lasting for 8s, up to 4 Lux spheres can be created. Increases the Lux DMG taken by targets within the sphere by 18% and inflicts Lux Mark: Light on them.',
    image: 'holy_inscription.jpg',
    character: 'Tilia',
  },
  'Renewed Spectrum': {
    name: 'Renewed Spectrum',
    description:
      'When Aegis of Light deals DMG, reduces Support Skill Cooldown by 1s. This effect can only be triggered 3 times per Support Skill cast.',
    image: 'renewed_spectrum.jpg',
    character: 'Tilia',
  },
  'Enemy Counter': {
    name: 'Enemy Counter',
    level: 'Lv. 6',
    description:
      'When Aegis of Light hits a target immune to stun, deals 15.2% of ATK as AoE Lux Skill DMG and increases the Lux DMG taken by the target by 57% for 10s.',
    image: 'enemy_counter.jpg',
    character: 'Tilia',
  },
  "Knight's Seal": {
    name: "Knight's Seal",
    level: 'Lv. 6',
    description:
      "When an ally triggers a Lux Mark, increases the squad's ATK by 47% for 3s, and grants Tilia 5 Energy.<br><br><em>Note: My only problem with this is its only 3 seconds, really low time.</em>",
    image: 'Knight_seal.jpg',
    character: 'Tilia',
  },
  'Brilliant Relay': {
    name: 'Brilliant Relay',
    level: 'Lv. 6',
    description:
      'When Aegis of Light reaches the main Trekker, increases their ATK by 15% for 15s, up to 4 stacks.',
    image: 'brilliant_relay.jpg',
    character: 'Tilia',
  },
  'Trick Boost': {
    name: 'Trick Boost',
    level: 'Lv. 6',
    description:
      "When Aegis of Light ricochets, increases the squad's ATK by 15% for 6s, up to 6 stacks.",
    image: 'trick_boost.jpg',
    character: 'Tilia',
  },
  'Knight Oath: Courage': {
    name: 'Knight Oath: Courage',
    level: 'Lv. 6',
    description:
      "When casting Glorious Smite (Ultimate), increases the squad's ATK by 98% for 10s.",
    image: 'knight_oath_courage.jpg',
    character: 'Tilia',
  },
  "Guardian's Resolve": {
    name: "Guardian's Resolve",
    level: 'Lv. 6',
    description: "When Tilia enters combat, increases the main Trekker's ATK by 41% for 10s.",
    image: 'Guardian_resolve.jpg',
    character: 'Tilia',
  },
  'Knight Oath Chalk Armor': {
    name: 'Knight Oath Chalk Armor',
    level: 'Lv. 6',
    description:
      "When casting Glorious Smite (Ultimate), grants shields to all allies equal to 120% of Tilia's DEF for 8s.",
    image: 'Knight_oath_chalk_armor.jpg',
    character: 'Tilia',
  },
};

// Minova Potentials
export const minovaPotentials = {
  'Four-Star Wanted Level': {
    name: 'Four-Star Wanted Level',
    description:
      'Increases the DMG of Gi: Supernova Burst (Support Skill) by 15%. Gi: Supernova Burst will apply 4 stacks of Astral Hex.',
    image: 'Four-Star_Wanted_Level.jpg',
    character: 'Minova',
  },
  'Star Core Crumbled': {
    name: 'Star Core Crumbled',
    description:
      'When Astral Hex deals DMG, summons a Meteor. When the main Trekker picks it up, gains a stack of Astral Hex, and their ATK is increased by 18% for 8s.',
    image: 'Star_core_crumbled.jpg',
    character: 'Minova',
  },
  'Radiant Synergy': {
    name: 'Radiant Synergy',
    level: 'Lv. 6',
    description:
      "For each Lux Trekker on the squad, increases the squad's ATK by 20%, up to 3 stacks.",
    image: 'Radiant_synergy.jpg',
    character: 'Minova',
  },
  'Fervent Applause': {
    name: 'Fervent Applause',
    level: 'Lv. 6',
    description:
      'When Astral Hex deals DMG, increases the ATK of the main Trekker within its Attack Range by 25% for 8s, up to 8 stacks.',
    image: 'Fervent_applause.jpg',
    character: 'Minova',
  },
};

// Centralized potential object containing all character potentials
export const ALL_POTENTIALS = {
  Shia: shiaPotentials,
  Tilia: tiliaPotentials,
  Minova: minovaPotentials,
};

// Helper functions
export const getPotentialByName = (characterName, potentialName) => {
  const characterPotentials = ALL_POTENTIALS[characterName];
  if (!characterPotentials) return null;

  return characterPotentials[potentialName] || null;
};

export const getAllPotentialsForCharacter = characterName => {
  return ALL_POTENTIALS[characterName] || {};
};

export const getPotentialImage = (characterName, potentialName) => {
  const potential = getPotentialByName(characterName, potentialName);
  return potential ? potential.image : null;
};

export default ALL_POTENTIALS;
