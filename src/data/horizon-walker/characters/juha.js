// Juha Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawJuhaData = {
  // Basic Character Information
  name: 'Juha',
  image: 'Juha', // Character image filename without extension
  rarity: 'EX', // EX, SS, S, A, B
  cost: 4, // Deployment cost
  tags: [
    'Archer',
    'Ranged DPS',
    'Shaman',
    'Mental Energy',
    'Pierce Damage',
    'Team Buffer',
    'AP Support',
    'Stealth Detection',
    'Firearm User',
    'Orke',
    'Mercenary',
    'High Technic',
    'Accuracy Support',
    'Debuffer',
    'Saint of Bullet',
    'Bullet Priestess',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '7',
    technic: '18',
    intelligence: '9',
    vitality: '8',
    agility: '13',

    // Key Stats
    meleeAtk: '89',
    rangedAtk: '230',
    magicAtk: '115',
    maxHp: '512',
    spd: '87',
    startingAp: '123',
    apRecovery: '114',
    accuracy: '107',
    evade: '174',
    critRate: '10',
    critDmg: '150',

    // Attribute Boost
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',

    // Attribute Defense
    slashDef: '0',
    pierceDef: '0',
    crushDef: '0',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '40',
    poisonDef: '40',
    blockRate: '0',
  },

  // Character Description
  description:
    'An Orke shaman mercenary from the prestigious Daeyeon family, channeling mental energy through firearms with uncontrolled telepathic abilities.',

  // Character Profile
  profile: {
    age: '22',
    racial: 'Orke',
    homeland: 'Orke Republic, Morrim Island',
    height: '172cm',
    birthday: '22nd-Month 22nd',
    bwhRatio: '84(E)-51-93',
  },

  // Character Story
  story:
    'The Orke, a race of mercenaries across the universe, are particularly fond of firearms, but some of them, those who awaken their mental abilities, replace bullets and grenades with their own mental energy. These individuals are called "shamans," and Juha of the prestigious Daeyeon family is one of the most talented among them. Born into the renowned Daeyeon family, Juha joined her clan\'s mercenary business as soon as she turned twenty. During battle, she awakened as a shaman, gaining the ability to channel her mental energy through her gun. However, this wasn\'t entirely a good thing for Juha. Her mental energy was so powerful that she began to lose control, and her thoughts started to become audible to those around her. Fortunately, those in her vicinity kept this fact from her, considering her high status, and, taking the political ramifications into account, they decided to send her off-world for training until she could master her abilities and suppress her thoughts. Not knowing the real reason, Juha was resentful about being suddenly dispatched to Earth, almost like an exile, but she is determined to prove her worth as a capable mercenary. She hopes to find the Human Gods, the combat leaders of Earth, and offer the combat prowess of herself and her subordinates.',

  // Unique Traits
  uniqueTraits: {
    ferventSoul: {
      name: 'Fervent Soul',
      description:
        'Activates the level 1 passive skill [Fervent Soul]. [Fervent Soul]: Juha has inherited the mental strength of the Orke race in an exceptionally potent way. At the start of the round, gains the [Fervent Soul] effect for 1R. [Fervent Soul]: Immune to [Taunt] and [Stun] effects, and Immaterial DEF increases by 150.',
    },
    whisperOfTheGun: {
      name: 'Whisper of the Gun',
      description:
        'Activates the Level 3 passive skill [Stealth Detection]. [Stealth Detection]: At the start of each of own turns, detects any stealthed enemies within a 5m radius. Also, at the start of each of own turns, decreases Pierce DEF of all enemies within a 5m radius by 300 for 1R.',
    },
    orke: {
      name: 'Orke',
      description: 'Technic 1, Ranged ATK 5%, Accuracy 5%',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Skills and Passive
  skills: {
    militaryShooting: {
      gameKey: 'StandardizedShooting',
      icon: 'UI_SkillIcon_Rifle',
      name: 'Military Shooting',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      damage: {
        type: 'Ranged ATK',
        value: '114%',
      },
      description:
        'Fires an accurate shot at the enemy with a rifle. On hit, deals 114% of Ranged ATK as Pierce DMG.',
    },
    combatRoll: {
      gameKey: 'RollingMove',
      icon: 'UI_SkillIcon_RollingMove',
      name: 'Combat Roll',
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 2,
      description: 'Jump low to the designated location and gain AP of 38.',
    },
    mentalCorrosion: {
      gameKey: 'SpiritDecay',
      icon: 'UI_SkillIcon_SpiritDecay',
      name: 'Mental Corrosion',
      level: '10/10',
      type: 'Skill',
      apCost: 20,
      cooldown: 1,
      description:
        'Applies the [Mental Defeat] effect to enemies within a 45°, 12m cone for 2R. [Mental Defeat]: Reduces Pierce DEF by 315.',
    },
    blazingZeal: {
      gameKey: 'BurningFanaticism',
      icon: 'UI_SkillIcon_BurningFanaticism',
      name: 'Blazing Zeal',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Allies with over 50% HP who attack using a <Firearm> based skill receive the [Blessing of Firepower] effect from the Bullet Priestess. [Blessing of Firepower]: Increases AP Recovery by 28.5%, Ranged ATK by 52%, and Pierce Boost and Crush Boost by 12% until the start of the next round. When the effect ends, inflicts fixed damage equal to 5% of current HP.',
    },
    theExecutioner: {
      gameKey: 'EnforcementShooter',
      icon: 'UI_SkillIcon_EnforcementShooter',
      name: 'The Executioner',
      level: '10/10',
      type: 'Skill',
      apCost: 90,
      cooldown: 2,
      description:
        "Blesses an ally with Orke's divinity for an inevitable victory. The designated ally gains 136 AP and enters [The Executioner] state for 1 round. At the end of any turn during which the ally in [The Executioner] state attacks, they gain the [Executioner's Bullet] effect, lasting for 1 round. [The Executioner]: Increases Ranged ATK by 76% of the Saint of Bullet's base Ranged ATK. [Executioner's Bullet]: Increases All ATK by 17% of the Saint of Bullet's base Ranged ATK. Can stack up to 3 times.",
    },
    brothersAndSistersOfFaith: {
      gameKey: 'FaithfulBrothersAndSisters',
      icon: 'UI_SkillIcon_FaithfulBrothersAndSisters',
      name: 'Brothers and Sisters of Faith',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description: 'Increases ACC of allies within a 3m radius by 76%.',
    },
  },

  // Weapon
  weapon: {
    name: "The Wings of Glory",
    flavor: "This execution tool in the form of a rifle is blessed by the Gun Spirit and has the ability to amplify psychic powers, aiding the Saint of Bullets in delivering fair and swift judgment. Those waiting for the Saint's judgment exist across the universe in countless numbers, and the tribunal burns with the passion of those who seek justice. When the rightful verdict of the Saint is delivered at the end of a long silence, the intense gunshot that echoes carries the power of the Gun Spirit, becoming a sacred resonance that elevates both the will of the Saint of Bullet and those who wield firearms in execution.",
    type: "Rifle",
    rarity: 'EX',
    image: "Weapon_FullIMG_SignsOfTheHolySpirit",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Ranged ATK (weapon)": "91",
      "Ranged ATK (%)": "+35%",
    },
    uniqueSkills: {
      unique: {
        name: "May the Honor Be in the Bullet",
        type: 'Unique',
        description: "Increases personal AP Recovery by {20,25,30,35,40}%, and raises Pierce boost for all allies by {12,15,18,21,24}%. When allies other than the user utilize any skill aside from Standby, they gain the [Glory] effect, stacking up to a maximum of 30 times. At the start of each round, all [Glory] effects are consumed, distributing AP to each ally (other than the user) equal to {2,2.5,3,3.5,4}% of the user's base AP Recovery for each stack. All effects granted to allies by \"Unique: May the Honor Be in the Bullet\" will not stack if they share the same name.",
      },
      signature: {
        name: "Juha Signature: The One Who Judges",
        type: 'Signature',
        description: "On Basic Attack, there is a 50% chance to reduce the cooldown of the skills [Combat Roll], [Mental Corrosion], and [The Executioner] by 1 round.",
      },
    },
    levelStats: {
      "Ranged ATK (weapon)": [14.3, 91.0],
      "Ranged ATK (%)": [5.5, 35.0],
    },
    exLevels: {
      effects: [
        { name: "Increases personal AP Recovery", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "%, and raises Pierce boost for all allies", valuesByLevel: "12% / 15% / 18% / 21% / 24%" },
        { name: "...tart of each round, all [Glory] effects are consumed, distributing AP to each ally (other than the user) equal", valuesByLevel: "2% / 2.5% / 3% / 3.5% / 4%" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 7,
      technic: 14,
      intelligence: 9,
      vitality: 8,
      agility: 11,
      maxHp: 512,
      meleeAtk: 89,
      rangedAtk: 179,
      magicAtk: 115,
      evade: 147,
      apRecovery: 109,
      startingAp: 118
    },
    'EX 1': {
      strength: 7,
      technic: 15,
      intelligence: 9,
      vitality: 8,
      agility: 11,
      maxHp: 512,
      meleeAtk: 89,
      rangedAtk: 192,
      magicAtk: 115,
      evade: 147,
      apRecovery: 109,
      startingAp: 118
    },
    'EX 2': {
      strength: 7,
      technic: 16,
      intelligence: 9,
      vitality: 8,
      agility: 11,
      maxHp: 512,
      meleeAtk: 89,
      rangedAtk: 204,
      magicAtk: 115,
      evade: 147,
      apRecovery: 109,
      startingAp: 118
    },
    'EX 3': {
      strength: 7,
      technic: 16,
      intelligence: 9,
      vitality: 8,
      agility: 12,
      maxHp: 512,
      meleeAtk: 89,
      rangedAtk: 204,
      magicAtk: 115,
      evade: 161,
      apRecovery: 112,
      startingAp: 121
    },
    'EX 4': {
      strength: 7,
      technic: 17,
      intelligence: 9,
      vitality: 8,
      agility: 12,
      maxHp: 512,
      meleeAtk: 89,
      rangedAtk: 217,
      magicAtk: 115,
      evade: 161,
      apRecovery: 112,
      startingAp: 121
    },
    'EX 5': {
      strength: 7,
      technic: 17,
      intelligence: 9,
      vitality: 8,
      agility: 13,
      maxHp: 512,
      meleeAtk: 89,
      rangedAtk: 217,
      magicAtk: 115,
      evade: 174,
      apRecovery: 114,
      startingAp: 123
    },
    'EX 6': {
      strength: 7,
      technic: 18,
      intelligence: 9,
      vitality: 8,
      agility: 13,
      maxHp: 512,
      meleeAtk: 89,
      rangedAtk: 230,
      magicAtk: 115,
      evade: 174,
      apRecovery: 114,
      startingAp: 123
    },
  },
  heroId: 33,

};

// Validate and sanitize the character data
const validation = validateCharacterData(rawJuhaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const juhaData = sanitizeCharacterData(rawJuhaData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Fervent\s+Soul|Whisper\s+of\s+the\s+Gun|Stealth\s+Detection|Mental\s+Defeat|Blessing\s+of\s+Firepower|The\s+Executioner|Executioner's\s+Bullet|Brothers\s+and\s+Sisters\s+of\s+Faith|Glory|May\s+the\s+Honor\s+Be\s+in\s+the\s+Bullet|The\s+One\s+Who\s+Judges|mental\s+energy|telepathic|shaman|orke's\s+divinity|inevitable\s+victory|saint\s+of\s+bullet|bullet\s+priestess)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|gains?|inflicts?|immune|detects?|consumed|distributing)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:mercenaries|universe|firearms|mental\s+abilities|shamans|prestigious|Daeyeon\s+family|awakened|channel|mental\s+energy|lose\s+control|thoughts\s+audible|political\s+ramifications|off-world\s+training|exile|Human\s+Gods|combat\s+leaders|subordinates|Orke\s+Republic|Morrim\s+Island|cone|firearm\s+based\s+skill|fixed\s+damage|cooldown|basic\s+attack)\b/gi,
  attributes:
    /\b(?:AP|Ranged\s+ATK|Pierce|ACC|Immaterial\s+DEF|Poison\s+DEF|Pierce\s+DEF|Pierce\s+Boost|Crush\s+Boost|All\s+ATK|AP\s+Recovery|Technic|Accuracy|Current\s+HP|Base\s+Ranged\s+ATK|Base\s+AP\s+Recovery|Cooldown)\b/gi,
};

// Export sanitized highlighting patterns
export const juhaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const juhaSEO = {
  title: 'Juha - Horizon Walker Character Guide',
  description:
    'Complete guide for Juha, an EX rarity Orke shaman archer in Horizon Walker. Mental energy specialist with firearm mastery, team buffs, and stealth detection abilities.',
  keywords: [
    'Juha',
    'Horizon Walker',
    'EX rarity',
    'archer',
    'orke',
    'shaman',
    'mental energy',
    'firearm user',
    'team buffer',
    'stealth detection',
    'pierce damage',
    'ap support',
    'mercenary',
    'bullet priestess',
    'guide',
    'stats',
    'build',
  ],
};
