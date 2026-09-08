// Maximilia Character Data - Horizon Walker
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawMaximiliaData = {
  name: 'Maximilia',
  image: 'Maximilia',
  rarity: 'EX',
  cost: 6,
  tags: [
    'Tank',
    'Warrior',
    'Shield User',
    'Legionnaire',
    'Shield of the Empire',
    'Great Guardian',
    'High Defense',
    'Slash Damage',
    'Crush Damage',
    'Area Damage',
    'Team Buffer',
    'Counterattack',
  ],

  stats: {
    strength: '6',
    technic: '5',
    intelligence: '5',
    vitality: '18',
    agility: '9',
    meleeAtk: '109',
    rangedAtk: '93',
    magicAtk: '78',
    maxHp: '1305',
    spd: '83',
    startingAp: '114',
    apRecovery: '102',
    accuracy: '102',
    evade: '115',
    critRate: '22',
    critDmg: '150',
    slashBoost: '0',
    pierceBoost: '0',
    crushBoost: '0',
    heatBoost: '0',
    coldBoost: '0',
    electricBoost: '0',
    immaterialBoost: '0',
    poisonBoost: '0',
    slashDef: '20',
    pierceDef: '20',
    crushDef: '20',
    heatDef: '0',
    coldDef: '0',
    electricDef: '0',
    immaterialDef: '40',
    poisonDef: '0',
    blockRate: '0',
  },

  description:
    'The First Princess of the Empire who led the Great Escape to Earth. A legendary shieldbearer whose martial prowess and leadership protect all who follow her.',

  profile: {
    age: '26',
    racial: 'Human (Noctis Nebula)',
    homeland: 'The Empire, Kaisersberg',
    height: '184cm',
    birthday: 'November 12th',
    bvhRatio: '102(I)-61-113',
  },

  story:
    'Maximilia, the First Princess of the Empire, was born as the rightful heir to the imperial throne. From a young age, she studied martial arts, politics, and military science, delving deeply into her duties and role. Though the Empire she sought to protect fell to ruin due to the Rifts, she understood her responsibility all too well. She was no longer a princess, but she rallied the survivors and successfully led the Great Escape. Thanks to her leadership, many of those she led arrived safely on Earth, and under her efforts, they were integrated into Earth\'s society in exchange for their pledge to fight on behalf of their new home. Since then, she has continued to support her people in their difficult settlement, contemplating whom she must now protect.',

  uniqueTraits: {
    imperialBond: {
      name: 'Imperial Bond',
      description:
        'When crisis strikes, the noble ties of blood grant strength to one another.',
    },
    marlon: {
      name: 'Marlon',
      description:
        'Humans from the planet Noctis Nebula, nearly identical to those on Earth but with a culture where magic advance beyond science.',
    },
    theLastHeir: {
      name: 'The Last Heir',
      description:
        'Though the Empire has fallen, the battle techniques honed across generations endure.',
    },
    interested: {
      name: 'Interested',
      description: 'Interested in the Human God. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  skills: {
    stingTheGap: {
      gameKey: 'StingTheGap',
      icon: 'UI_SkillIcon_OneHandedSword_BA',
      name: 'Sting the Gap',
      level: '10/10',
      type: 'Skill',
      apCost: 0,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '138%',
      },
      description:
        'Stabs with a sword to attack. Deals Pierce DMG equal to 138% of Melee ATK. Coefficient scales from 73% at Lv1 to 138% at Lv10.',
    },
    guardianWall: {
      gameKey: 'GuardianWall',
      icon: 'UI_SkillIcon_GuardianWall',
      name: 'Guardian Wall',
      level: '10/10',
      type: 'Skill',
      apCost: 70,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '276%',
      },
      description:
        'Raises a massive [Guardian Barrier] to protect allies from enemies. Deals Crush DMG equal to 276% of Melee ATK to enemies within a wide rectangular area, knocks them back 3m, and summons [Guardian Barrier] in front. While [Guardian Barrier] is active, All DEF increases by 200-650, the unit cannot be pushed or pulled, and cannot perform Responses. [Guardian Barrier] disappears at the start of the caster\'s next turn. [Guardian Barrier] inherits 100% of the caster\'s Max HP and 100% of DEF. Coefficient scales from 145% at Lv1 to 276% at Lv10. Requires Sting the Gap Lv3 to unlock.',
    },
    shatter: {
      gameKey: 'Shatter',
      icon: 'UI_SkillIcon_Shatter',
      name: 'Shatter',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'When attacking, reduces the target\'s AP by 5.5-10 with a chance equal to Crit Rate. For each point of Vitality above 16, the reduction increases by 1.',
    },
    majestyOfTheGuardian: {
      gameKey: 'MajestyOfTheGuardian',
      icon: 'UI_SkillIcon_MajestyOfTheGuardian',
      name: 'Majesty of the Guardian',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        'Emits an aura with an 8m radius. Allies within the aura gain [Guard], and enemies gain [Pressure]. [Guard]: Increases All DEF by 100-190 and Crit Rate by 22-40%. [Pressure]: Decreases All DEF by 150-420 and SPD by 20-38%. Requires Guardian Wall Lv3 to unlock.',
    },
  },

  weapon: {
    name: "Kaiserstolz",
    flavor: "The Empire's treasure, Kaiserstolz, was - true to its name - the very pride of the Empire. In the days when the Empire was but a small band of migrants, newly arrived from another world, the First Emperor forged a legend with a single sword and a single shield. It was with these that his great deeds were written. He drove back those who threatened the Empire, and stood as a bulwark for its trembling people. Thus, the enemies of the Empire came to fear the blade and shield known as Kaiserstolz - and that fear became the foundation upon which the Empire itself was built. These legendary arms, which gave rise to a great Empire, were passed down as its most treasured relic. With their unchanging symbolism and the powerful enchantments woven into them, their renown only grew…Yet, as with all things, fortune does not remain constant. Amid the chaos of the Rift catastrophe that engulfed the Noctis Nebula, Kaiserstolz vanished without a trace. And still, the people of the Empire remember its radiant form. They continue to hope - That Kaiserstolz, which once marked the beginning of their history, will return…to become a beacon of hope once more for those who were forced to leave their homeland. And that, through its power, it will protect them once again.",
    type: "One-handed Sword & Shield",
    rarity: 'EX',
    image: "Weapon_FullIMG_GoldenSwordOfTheEmpire_SS",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "77",
      "Crit Rate (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Grace of the Empire",
        type: 'Unique',
        description: "During battle, Max HP increases by {20,25,30,35,40}%. All allies (excluding self) gain +{200,240,280,320,360} Slash, Pierce, and Crush DEF.",
      },
      signature: {
        name: "Maximilia Signature: Will of Protection",
        type: 'Signature',
        description: "During battle, Crit Rate increases by 20%. If Crit Rate exceeds 100%, every 5% excess Crit Rate increases the AP reduction of [Sunder Strike] by 1, up to 5. The DEF reduction effect of [Pressure] increases proportional to your Crit Rate, up to 40% at 100% Crit Rate.",
        note: "This signature skill only activates when Maximilia equips this weapon.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [12.1, 77.0],
      "Crit Rate (%)": [7.7, 49.0],
    },
    exLevels: {
      effects: [
        { name: "During battle, Max HP increases", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
        { name: "All allies (excluding self) gain +", valuesByLevel: "200 / 240 / 280 / 320 / 360" },
      ],
    },
  },
  rarityStages: {
    'EX': {
      strength: 5,
      technic: 5,
      intelligence: 5,
      vitality: 14,
      agility: 8,
      maxHp: 1044,
      meleeAtk: 93,
      rangedAtk: 93,
      magicAtk: 78,
      evade: 102,
      apRecovery: 100,
      startingAp: 112
    },
    'EX 1': {
      strength: 5,
      technic: 5,
      intelligence: 5,
      vitality: 15,
      agility: 8,
      maxHp: 1109,
      meleeAtk: 93,
      rangedAtk: 93,
      magicAtk: 78,
      evade: 102,
      apRecovery: 100,
      startingAp: 112
    },
    'EX 2': {
      strength: 5,
      technic: 5,
      intelligence: 5,
      vitality: 16,
      agility: 8,
      maxHp: 1175,
      meleeAtk: 93,
      rangedAtk: 93,
      magicAtk: 78,
      evade: 102,
      apRecovery: 100,
      startingAp: 112
    },
    'EX 3': {
      strength: 5,
      technic: 5,
      intelligence: 5,
      vitality: 17,
      agility: 8,
      maxHp: 1240,
      meleeAtk: 93,
      rangedAtk: 93,
      magicAtk: 78,
      evade: 102,
      apRecovery: 100,
      startingAp: 112
    },
    'EX 4': {
      strength: 6,
      technic: 5,
      intelligence: 5,
      vitality: 17,
      agility: 8,
      maxHp: 1240,
      meleeAtk: 109,
      rangedAtk: 93,
      magicAtk: 78,
      evade: 102,
      apRecovery: 100,
      startingAp: 112
    },
    'EX 5': {
      strength: 6,
      technic: 5,
      intelligence: 5,
      vitality: 17,
      agility: 9,
      maxHp: 1240,
      meleeAtk: 109,
      rangedAtk: 93,
      magicAtk: 78,
      evade: 115,
      apRecovery: 102,
      startingAp: 114
    },
    'EX 6': {
      strength: 6,
      technic: 5,
      intelligence: 5,
      vitality: 18,
      agility: 9,
      maxHp: 1305,
      meleeAtk: 109,
      rangedAtk: 93,
      magicAtk: 78,
      evade: 115,
      apRecovery: 102,
      startingAp: 114
    },
  },
  heroId: 63,

};

const validation = validateCharacterData(rawMaximiliaData);
if (!validation.isValid) {
  throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

export const maximiliaData = sanitizeCharacterData(rawMaximiliaData);

const rawHighlightPatterns = {
  damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
  effects: /\[([^[\]]{1,150})]/g,
  buffsDebuffs:
    /\b(?:Sting\s+the\s+Gap|Guardian\s+Wall|Shatter|Majesty\s+of\s+the\s+Guardian|Legionnaire|Shield\s+of\s+the\s+Empire|Great\s+Guardian|Imperial\s+Guard)\b/gi,
  percentages: /\b(\d{1,3}%)\b/g,
  statChanges:
    /\b(?:reduces?|increases?|decreases?|grants?|restores?)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
  keywords:
    /\b(?:Legionnaire|Shield\s+of\s+the\s+Empire|Great\s+Guardian|Empire|guardian|shield\s+wall)\b/gi,
  attributes:
    /\b(?:AP|Melee\s+ATK|Ranged\s+ATK|Magic\s+ATK|Slash|Pierce|Crush|Heat|Cold|Electric|Immaterial|Poison|SPD|ACC|Max\s+HP|HP|DEF|Crit\s+Rating|Intelligence|Agility|Vitality|Block)\b/gi,
};

export const maximiliaHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

export const maximiliaSEO = {
  title: 'Maximilia - Horizon Walker Character Guide',
  description:
    'Complete guide for Maximilia, an EX rarity Tank character in Horizon Walker. A Legionnaire turned Shield of the Empire with unmatched defensive capabilities.',
  keywords: [
    'Maximilia',
    'Horizon Walker',
    'EX rarity',
    'tank',
    'legionnaire',
    'shield of the empire',
    'great guardian',
    'high defense',
    'guide',
    'stats',
    'build',
  ],
};
