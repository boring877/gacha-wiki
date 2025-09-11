// Silver and Blood Characters Database
// This file contains character data and metadata for the Silver and Blood wiki
// All character stats are based on Level 200, which is the current maximum level

// Game Mechanics Reference
export const gameInfo = {
  rarities: ['SSR', 'SR', 'R'],
  classes: [
    {
      name: 'Warrior',
      description: 'Has strong survivability and DPS. Performs well in varying scenarios.',
    },
    {
      name: 'Assassin',
      description:
        'Adept at breaking through or avoiding the front line, directly striking the weaker middle and backline enemies.',
    },
    { name: 'Defender', description: 'A hero with reliable survivability and protection skills.' },
    {
      name: 'Marksman',
      description: 'Deals consistent, strong DMG to a single target or targets in a small area.',
    },
    {
      name: 'Sorcerer',
      description:
        'A hero with a versatile attack style who can destroy many enemies using various methods.',
    },
    {
      name: 'Enchanter',
      description:
        'Each possesses distinctive abilities, offering various benefits to their teams.',
    },
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
    {
      name: 'New Moon',
      effect:
        'Activate Moon Phase: New Moon by using Ultimate in battle. While Blood Moon is active, all Vassals gains Ultimate Bloodsoul Cost -1 and 25% more DMG',
    },
    {
      name: 'Crescent Moon',
      effect:
        'Activate Moon Phase: Crescent Moon by using Ultimate in battle. While Blood Moon is active, all Vassals gains Ultimate Bloodsoul Cost -1 and 25% more DMG',
    },
    {
      name: 'Full Moon',
      effect:
        'Activate Moon Phase: Full Moon by using Ultimate in battle. While Blood Moon is active, all Vassals gains Ultimate Bloodsoul Cost -1 and 25% more DMG.',
    },
  ],
  attackTypes: [
    {
      name: 'P.DMG',
      description:
        'DMG dealt through physical means like swords and bows. Increasing P. DEF reduces DMG taken from this type.',
    },
    {
      name: 'M.DMG',
      description:
        'DMG dealt throught magical means like blood formulas and alchemical formulas.Increasing M.DEF reduces DMG taken from this type.',
    },
    {
      name: 'Piercing DMG',
      description:
        'A special type of DMG. When inflicted, it ignores a certain amount of P. DEF and M. DEF and deals 200% DMG to Shields. This DMG type is not affected by P. DMG and M. DMG related effects.',
    },
  ],
  skillTypes: [
    { name: 'Normal Attack', description: 'Basic attack skill that generates Bloodsoul' },
    { name: 'Special', description: 'Enhanced ability with moderate Bloodsoul cost' },
    { name: 'Passive', description: 'Always-active ability that provides constant effects' },
    { name: 'Ultimate', description: 'Most powerful skill that activates Moon Phase effects' },
  ],
  stats: [
    'HP',
    'ATK',
    'P.DEF',
    'M.DEF',
    'ATK SPD',
    'Bloodsoul Recovery',
    'CRIT Rate',
    'CRIT DMG Increase',
    'All DMG Bonus',
    'All DMG Reduction',
    'P.DMG Bonus',
    'M.DMG Bonus',
    'Received Healing Bonus',
    'Blood Power',
  ],
};

// Import individual character files
import { transcendentHati } from './characters/transcendent-hati.js';
import { transcendentAmi } from './characters/transcendent-ami.js';
import { limine } from './characters/limine.js';
import { incendiaryAgares } from './characters/incendiary-agares.js';
import { hati } from './characters/hati.js';
import { vanHelsing } from './characters/van-helsing.js';
import { transcendentNoah } from './characters/transcendent-noah.js';
import { seth } from './characters/seth.js';
import { acappella } from './characters/acappella.js';
import { gilrain } from './characters/gilrain.js';
import { joan } from './characters/joan.js';
import { darcias } from './characters/darcias.js';
import { ressa } from './characters/ressa.js';
import { ottavia } from './characters/ottavia.js';
import { pavana } from './characters/pavana.js';
import { lamia } from './characters/lamia.js';
import { cecia } from './characters/cecia.js';
import { augustine } from './characters/augustine.js';
import { starryEyedAiona } from './characters/starry-eyed-aiona.js';
import { yggdrasill } from './characters/yggdrasill.js';
import { friedrich } from './characters/friedrich.js';
import { nicole } from './characters/nicole.js';
import { edina } from './characters/edina.js';
import { agares } from './characters/agares.js';
import { bella } from './characters/bella.js';
import { thibault } from './characters/thibault.js';
import { theophane } from './characters/theophane.js';
import { cain } from './characters/cain.js';
import { selena } from './characters/selena.js';
import { spectralGilrain } from './characters/spectral-gilrain.js';
import { piera } from './characters/piera.js';
import { ami } from './characters/ami.js';
import { tris } from './characters/tris.js';
import { mass } from './characters/mass.js';
import { dalcarlo } from './characters/dalcarlo.js';
import { sirene } from './characters/sirene.js';
import { jinxedSelena } from './characters/jinxed-selena.js';
import { lorelei } from './characters/lorelei.js';
import { fleetingBella } from './characters/fleeting-bella.js';
import { timelessAiona } from './characters/timeless-aiona.js';
import { quinn } from './characters/quinn.js';
import { agnes } from './characters/agnes.js';
import { valora } from './characters/valora.js';
import { julius } from './characters/julius.js';
import { stella } from './characters/stella.js';
import { regina } from './characters/regina.js';

// Characters array - Add new characters here
const baseCharacters = [
  transcendentHati,
  transcendentAmi,
  limine,
  incendiaryAgares,
  hati,
  vanHelsing,
  transcendentNoah,
  seth,
  acappella,
  gilrain,
  joan,
  darcias,
  ressa,
  ottavia,
  pavana,
  lamia,
  cecia,
  augustine,
  starryEyedAiona,
  yggdrasill,
  friedrich,
  nicole,
  edina,
  agares,
  bella,
  thibault,
  theophane,
  cain,
  selena,
  spectralGilrain,
  piera,
  ami,
  tris,
  mass,
  dalcarlo,
  sirene,
  jinxedSelena,
  lorelei,
  fleetingBella,
  timelessAiona,
  quinn,
  agnes,
  valora,
  julius,
  stella,
  regina,
  // Add more characters as they are created
];

// Add slug and detailUrl to characters
export const characters = baseCharacters.map(character => ({
  ...character,
  slug: character.id,
  detailUrl: `/guides/silver-and-blood/characters/${character.id}`,
}));

// Utility functions for character management
export function getCharacterById(id) {
  return characters.find(character => character.id === id);
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

// Character count by category
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

// Legacy exports for compatibility
export const SILVER_AND_BLOOD_CHARACTERS = characters;
export const CHARACTERS_BY_SLUG = new Map(characters.map(char => [char.id, char]));
