// Horizon Walker Weapons Database - Dynamic import from character files

// Import character data to extract weapon information dynamically
import { arahaData } from './characters/araha.js';
import { bellaData } from './characters/bella.js';
import { bergaData } from './characters/berga.js';
import { coraData } from './characters/cora.js';
import { efretiData } from './characters/efreeti.js';
import { ernesteData } from './characters/erneste.js';
import { everetteData } from './characters/everette.js';
import { fammeneData } from './characters/fammene.js';
import { grideldaData } from './characters/gridelda.js';
import { headlessKnightData } from './characters/headless-knight.js';
import { inesData } from './characters/ines.js';
import { juhaData } from './characters/juha.js';
import { kalinaData } from './characters/kalina.js';
import { kaulData } from './characters/kaul.js';
import { kalmaData } from './characters/kalma.js';
import { kilonData } from './characters/kilon.js';
import { korabiData } from './characters/korabi.js';
import { leahData } from './characters/leah.js';
import { lisandriaData } from './characters/lisandria.js';
import { luiseData } from './characters/luise.js';
import { mahariData } from './characters/mahari.js';
import { marhimData } from './characters/marhim.js';
import { matrothoData } from './characters/matrotho.js';
import { minEunSolData } from './characters/min-eun-sol.js';
import { nari } from './characters/nari.js';
import { nikaData } from './characters/nika.js';
import { nymsetData } from './characters/nymset.js';
import { oliviaData } from './characters/olivia.js';
import { oslaData } from './characters/osla.js';
import { pantheriData } from './characters/pantheri.js';
import { platinaData } from './characters/platina.js';
import { samarika } from './characters/samarika.js';
import { soJooHeeData } from './characters/so-joo-hee.js';
import { txManticoreData } from './characters/tx-manticore.js';
import { valetaData } from './characters/valeta.js';
import { vlissingData } from './characters/vlissing.js';
import { yeonChaeYoungData } from './characters/yeon-chae-young.js';
import { yeonwooData } from './characters/yeonwoo.js';
import { yuiData } from './characters/yui.js';
import { yvonnaData } from './characters/yvonna.js';

// Helper function to extract weapon skills from character data
function extractWeaponSkills(characterData) {
  if (!characterData.weapon || !characterData.weapon.uniqueSkills) {
    return { unique: null, signature: null };
  }

  const skills = characterData.weapon.uniqueSkills;
  const skillNames = Object.keys(skills);

  let unique = null;
  let signature = null;

  // Find unique and signature skills
  for (const skillKey of skillNames) {
    const skill = skills[skillKey];
    if (skill.type === 'Unique') {
      unique = skill;
    } else if (skill.type.includes('Signature') || skill.type === 'Signature') {
      signature = skill;
    }
  }

  return { unique, signature };
}

// Character data mapping with correct exports
const CHARACTER_DATA = {
  araha: arahaData,
  bella: bellaData,
  berga: bergaData,
  cora: coraData,
  efreeti: efretiData,
  erneste: ernesteData,
  everette: everetteData,
  fammene: fammeneData,
  gridelda: grideldaData,
  'headless-knight': headlessKnightData,
  ines: inesData,
  jua: juhaData, // Note: jua file exports as juhaData
  kalina: kalinaData,
  kaul: kaulData,
  kalma: kalmaData,
  leah: leahData,
  kilon: kilonData,
  korabi: korabiData,
  lisandria: lisandriaData,
  luise: luiseData,
  mahari: mahariData,
  marhim: marhimData,
  matrotho: matrothoData,
  'min-eun-sol': minEunSolData,
  nari: nari, // Note: nari file exports as nari
  nika: nikaData,
  nymset: nymsetData,
  olivia: oliviaData,
  osla: oslaData,
  pantheri: pantheriData,
  platina: platinaData,
  samarika: samarika, // Note: samarika file exports as samarika
  'so-joo-hee': soJooHeeData,
  'tx-manticore': txManticoreData,
  valeta: valetaData,
  vlissing: vlissingData,
  'yeon-chae-young': yeonChaeYoungData,
  yeonwoo: yeonwooData,
  yui: yuiData,
  yvonna: yvonnaData,
};

// Dynamically build weapon skills from character data
const WEAPON_SKILLS = {};

// Build weapon skills from character data
Object.entries(CHARACTER_DATA).forEach(([slug, characterData]) => {
  const weaponKey = `${slug}-weapon`;
  WEAPON_SKILLS[weaponKey] = extractWeaponSkills(characterData);
});

// Dynamically build weapons array from character data
const HORIZON_WALKER_WEAPONS = [];

// Build weapons array from character data
Object.entries(CHARACTER_DATA).forEach(([slug, characterData]) => {
  if (!characterData.weapon) {
    return; // Skip characters without weapon data
  }

  const weaponKey = `${slug}-weapon`;
  const weapon = characterData.weapon;

  // Extract weapon type - remove 'EX ' prefix if present
  const weaponType = weapon.type.replace(/^EX /, '');

  // Extract just the filename from the image path
  const imageFilename = weapon.image.split('/').pop();

  const weaponEntry = {
    id: weaponKey,
    name: weapon.name,
    type: weaponType,
    rarity: weapon.rarity,
    image: imageFilename,
    character: {
      name: characterData.name,
      slug: slug,
      rarity: characterData.rarity,
    },
    stats: weapon.stats,
    detailUrl: `/guides/horizon-walker/weapons/${slug.replace('-weapon', '')}/`,
    uniqueSkill: WEAPON_SKILLS[weaponKey]?.unique || null,
    signatureSkill: WEAPON_SKILLS[weaponKey]?.signature || null,
    // Pre-calculated lowercase values for faster client-side filtering
    searchName: weapon.name.toLowerCase(),
    searchCharacter: characterData.name.toLowerCase(),
  };

  HORIZON_WALKER_WEAPONS.push(weaponEntry);
});

export { HORIZON_WALKER_WEAPONS, WEAPON_SKILLS };

// Weapon type categories (extracted dynamically from data)
export const WEAPON_TYPES = [...new Set(HORIZON_WALKER_WEAPONS.map(w => w.type))].sort();

// Rarity order
export const WEAPON_RARITIES = ['EX', 'SS', 'S', 'A', 'B'];

// Metadata for the weapons database (dynamically calculated)
export const WEAPON_METADATA = {
  total: HORIZON_WALKER_WEAPONS.length,
  byRarity: WEAPON_RARITIES.reduce((acc, rarity) => {
    acc[rarity] = HORIZON_WALKER_WEAPONS.filter(w => w.rarity === rarity).length;
    return acc;
  }, {}),
  byType: WEAPON_TYPES.reduce((acc, type) => {
    acc[type] = HORIZON_WALKER_WEAPONS.filter(w => w.type === type).length;
    return acc;
  }, {}),
  types: WEAPON_TYPES,
};
