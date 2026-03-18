// Silver and Blood Characters Database
// Aggregates per-character data from characters/ directory
// All character stats are based on Level 200, the current maximum level

import { allStats, allInfoEntries, allMeta } from './characters/index.js';

export const characterStatsData = { characters: allStats };
export const charactersInfoData = { characters: allInfoEntries };

export const gameInfo = {
  rarities: ['SSR', 'SR', 'R'],
  classes: [
    { name: 'Warrior', description: 'Has strong survivability and DPS. Performs well in varying scenarios.' },
    { name: 'Assassin', description: 'Adept at breaking through or avoiding the front line, directly striking the weaker middle and backline enemies.' },
    { name: 'Defender', description: 'A hero with reliable survivability and protection skills.' },
    { name: 'Marksman', description: 'Deals consistent, strong DMG to a single target or targets in a small area.' },
    { name: 'Sorcerer', description: 'A hero with a versatile attack style who can destroy many enemies using various methods.' },
    { name: 'Enchanter', description: 'Each possesses distinctive abilities, offering various benefits to their teams.' },
  ],
  factions: [
    { name: 'Kingdom', description: 'Noble houses defending traditional order' },
    { name: 'Ancestors', description: 'Ancient beings with forgotten wisdom' },
    { name: 'Church', description: 'Holy order wielding divine power' },
    { name: 'Bloodborn', description: 'Those who embraced forbidden blood magic' },
  ],
  equipmentTypes: [
    { name: 'Light', description: 'Attack-focused gear with high offensive stats' },
    { name: 'Medium', description: 'It fits medium equipment, offering balanced attributes.' },
    { name: 'Heavy', description: 'Survival-focused gear with maximum protection' },
  ],
  moonPhases: [
    { name: 'New Moon', effect: 'Activate Moon Phase: New Moon by using Ultimate in battle. While Blood Moon is active, all Vassals gains Ultimate Bloodsoul Cost -1 and 25% more DMG' },
    { name: 'Crescent Moon', effect: 'Activate Moon Phase: Crescent Moon by using Ultimate in battle. While Blood Moon is active, all Vassals gains Ultimate Bloodsoul Cost -1 and 25% more DMG' },
    { name: 'Full Moon', effect: 'Activate Moon Phase: Full Moon by using Ultimate in battle. While Blood Moon is active, all Vassals gains Ultimate Bloodsoul Cost -1 and 25% more DMG.' },
  ],
  attackTypes: [
    { name: 'P.DMG', description: 'DMG dealt through physical means like swords and bows. Increasing P. DEF reduces DMG taken from this type.' },
    { name: 'M.DMG', description: 'DMG dealt throught magical means like blood formulas and alchemical formulas.Increasing M.DEF reduces DMG taken from this type.' },
    { name: 'Piercing DMG', description: 'A special type of DMG. When inflicted, it ignores a certain amount of P. DEF and M. DEF and deals 200% DMG to Shields. This DMG type is not affected by P. DMG and M. DMG related effects.' },
  ],
  skillTypes: [
    { name: 'Normal Attack', description: 'Basic attack skill that generates Bloodsoul' },
    { name: 'Special', description: 'Enhanced ability with moderate Bloodsoul cost' },
    { name: 'Passive', description: 'Always-active ability that provides constant effects' },
    { name: 'Ultimate', description: 'Most powerful skill that activates Moon Phase effects' },
  ],
  stats: [
    'HP', 'ATK', 'P.DEF', 'M.DEF', 'ATK SPD', 'Bloodsoul Recovery',
    'CRIT Rate', 'CRIT DMG Increase', 'All DMG Bonus', 'All DMG Reduction',
    'P.DMG Bonus', 'M.DMG Bonus', 'Received Healing Bonus', 'Blood Power',
  ],
};

const generateSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const charactersWithImages = new Set([
  'acappella', 'agares', 'agnes', 'albrecht', 'alene', 'alexi', 'ami', 'augustine', 'bella', 'blooming-empousa', 'cain',
  'cecia', 'dalcarlo', 'darcias', 'edina', 'ethereal-joan', 'fanny', 'fleeting-bella', 'friedrich',
  'genevieve', 'gilrain', 'hati', 'incendiary-agares', 'jinxed-selena', 'joan',
  'julius', 'lamia', 'letitia', 'limine', 'livian', 'lorelei', 'lucille', 'mass', 'nicole', 'ottavia', 'pavana',
  'piera', 'quinn', 'regina', 'ressa', 'resurgent-setti', 'selena', 'seraphina', 'seth', 'sirene', 'spectral-gilrain',
  'starry-eyed-aiona', 'stella', 'theophane', 'thibault', 'timeless-aiona',
  'transcendent-ami', 'transcendent-hati', 'transcendent-jestel', 'transcendent-noah', 'tris', 'valora',
  'van-helsing', 'yggdrasill'
]);

const infoMap = new Map();
charactersInfoData.characters.forEach((char) => {
  if (char) infoMap.set(char.id, char);
});

const baseCharacters = characterStatsData.characters
  .filter((c) => c && ['SSR', 'SR', 'R'].includes(c.rarity))
  .filter((c) => charactersWithImages.has(generateSlug(c.name)))
  .map((statsChar) => {
    const infoChar = infoMap.get(statsChar.id) || {};
    const gallery = statsChar.gallery || {};
    const slug = generateSlug(statsChar.name);

    return {
      id: slug,
      numericId: statsChar.id,
      name: statsChar.name,
      title: infoChar.title || statsChar.title || '',
      rarity: statsChar.rarity,
      class: statsChar.class,
      faction: infoChar.camp || '',
      moonPhase: infoChar.moonPhase || '',
      attackType: infoChar.damageType || '',
      equipmentType: infoChar.equipmentType || '',
      image: slug,
      tags: infoChar.tags || [],
      stats: {
        hp: gallery.MaxHp || 0,
        atk: gallery.Attack || 0,
        pDef: gallery.PhyDefence || 0,
        mDef: gallery.MagDefence || 0,
        bloodPower: gallery.bloodPower || 0,
      },
      slug: slug,
      detailUrl: `/guides/silver-and-blood/characters/${slug}`,
    };
  });

export const characters = baseCharacters;

export function getCharacterById(id) {
  return characters.find(character => character.id === id || character.numericId === id);
}

export function getCharactersByRarity(rarity) {
  return characters.filter(character => character.rarity === rarity);
}

export function getCharactersByClass(className) {
  return characters.filter(character => character.class === className);
}

export function getCharactersByFaction(faction) {
  return characters.filter(character => character.faction === faction);
}

export function getCharactersByMoonPhase(moonPhase) {
  return characters.filter(character => character.moonPhase === moonPhase);
}

export function getCharactersByAttackType(attackType) {
  return characters.filter(character => character.attackType === attackType);
}

export function getCharacterStats() {
  return {
    total: characters.length,
    byRarity: gameInfo.rarities.reduce((acc, rarity) => {
      acc[rarity] = getCharactersByRarity(rarity).length;
      return acc;
    }, {}),
    byClass: gameInfo.classes.reduce((acc, cls) => {
      acc[cls.name] = getCharactersByClass(cls.name).length;
      return acc;
    }, {}),
    byFaction: gameInfo.factions.reduce((acc, faction) => {
      acc[faction.name] = getCharactersByFaction(faction.name).length;
      return acc;
    }, {}),
  };
}

export const SILVER_AND_BLOOD_CHARACTERS = characters;
export const CHARACTERS_BY_SLUG = new Map(characters.map(char => [char.id, char]));
