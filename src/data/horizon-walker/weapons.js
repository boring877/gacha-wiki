// Horizon Walker Weapons Database - Dynamic import from character files

import { NON_EX_WEAPONS } from './non-ex-weapons.js';

// Import character data to extract weapon information dynamically
import { arahaData } from './characters/araha.js';
import { bellaData } from './characters/bella.js';
import { bergaData } from './characters/berga.js';
import { coraData } from './characters/cora.js';
import { efretiData } from './characters/efreeti.js';
import { echidnaData } from './characters/echidna.js';
import { ernesteData } from './characters/erneste.js';
import { everetteData } from './characters/everette.js';
import { fammeneData } from './characters/fammene.js';
import { griseldaData } from './characters/griselda.js';
import { headlessKnightData } from './characters/headless-knight.js';
import { inesData } from './characters/ines.js';
import { juhaData } from './characters/juha.js';
import { kalinaData } from './characters/kalina.js';
import { kimGaYoungData } from './characters/kim-ga-young.js';
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
import { maximiliaData } from './characters/maximilia.js';
import { eugeniaData } from './characters/eugenia.js';
import { emiliaData } from './characters/emilia.js';
import { palekarData } from './characters/palekar.js';
import { miraData } from './characters/mira.js';
import { miranaData } from './characters/mirana.js';
import { ahramData } from './characters/ahram.js';
import { kotohaData } from './characters/kotoha.js';
import { nonohaData } from './characters/nonoha.js';
import { garudData } from './characters/garud.js';
import { dorotheaData } from './characters/dorothea.js';
import { marikaData } from './characters/marika.js';
import { juzaData } from './characters/juza.js';

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
  echidna: echidnaData,
  erneste: ernesteData,
  everette: everetteData,
  fammene: fammeneData,
  griselda: griseldaData,
  'headless-knight': headlessKnightData,
  ines: inesData,
  juha: juhaData,
  kalina: kalinaData,
  'kim-ga-young': kimGaYoungData,
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
  maximilia: maximiliaData,
  eugenia: eugeniaData,
  emilia: emiliaData,
  palekar: palekarData,
  mira: miraData,
  mirana: miranaData,
  ahram: ahramData,
  kotoha: kotohaData,
  nonoha: nonohaData,
  garud: garudData,
  dorothea: dorotheaData,
  marika: marikaData,
  juza: juzaData,
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

// Numeric weapon-ATK values for sorting, from levelStats Lv60 (new data) or legacy stat keys
function weaponAtkValues(weapon) {
  const out = { melee: 0, magic: 0, ranged: 0 };
  const ls = weapon.levelStats || {};
  const pick = (needle, legacy) => {
    const key = Object.keys(ls).find(k => k.includes(needle));
    if (key) return Number(ls[key][1]) || 0;
    return parseFloat(weapon.stats?.[legacy]) || 0;
  };
  out.melee = pick('Melee ATK (weapon)', 'weaponMeleeAtk');
  out.magic = pick('Magic ATK (weapon)', 'weaponMagicAtk');
  out.ranged = pick('Ranged ATK (weapon)', 'weaponRangedAtk');
  return out;
}

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

  const atk = weaponAtkValues(weapon);

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
    maxLevel: weapon.maxLevel || 60,
    flavor: weapon.flavor || null,
    levelStats: weapon.levelStats || null,
    exLevels: weapon.exLevels || null,
    detailUrl: `/guides/horizon-walker/weapons/${slug.replace('-weapon', '')}/`,
    uniqueSkill: WEAPON_SKILLS[weaponKey]?.unique || null,
    signatureSkill: WEAPON_SKILLS[weaponKey]?.signature || null,
    // Pre-calculated lowercase values for faster client-side filtering
    searchName: weapon.name.toLowerCase(),
    searchCharacter: characterData.name.toLowerCase(),
    sortMelee: atk.melee,
    sortMagic: atk.magic,
    sortRanged: atk.ranged,
  };

  HORIZON_WALKER_WEAPONS.push(weaponEntry);
});

// Legacy stat key -> display name matching the EX weapon convention
const NON_EX_LABELS = {
  weaponMeleeAtk: 'Melee ATK (rating)',
  weaponRangedAtk: 'Ranged ATK (rating)',
  weaponMagicAtk: 'Magic ATK (rating)',
  meleeAtkPercent: 'Melee ATK (%)',
  rangedAtkPercent: 'Ranged ATK (%)',
  magicAtkPercent: 'Magic ATK (%)',
  critDmgPercent: 'Crit DMG (%)',
  critRatePercent: 'Crit Rate (%)',
  apRecovery: 'AP Recovery (%)',
  hpPercent: 'Max HP (%)',
  hpFlat: 'Max HP',
  def: 'Defense',
  slashBoost: 'Slash Boost (%)',
  pierceBoost: 'Pierce Boost (%)',
  crushBoost: 'Crush Boost (%)',
  heatBoost: 'Heat Boost (%)',
  coldBoost: 'Cold Boost (%)',
  electricBoost: 'Electric Boost (%)',
};

// Merge non-EX weapons (SS, S, A, B) from extracted game data
NON_EX_WEAPONS.forEach(weapon => {
  // Lv 1 -> Lv 60 growth from stats + statGrowth, same shape as EX weapons
  const levelStats = {};
  const maxLevel = weapon.maxLevel || 60;
  Object.entries(weapon.stats || {}).forEach(([key, base]) => {
    const name = NON_EX_LABELS[key] || key.replace(/([A-Z])/g, ' $1').trim();
    const growth = Number(weapon.statGrowth?.[key]) || 0;
    const lv1 = Number(base);
    levelStats[name] = [lv1, +(lv1 + growth * (maxLevel - 1)).toFixed(2)];
  });
  HORIZON_WALKER_WEAPONS.push({
    id: `non-ex-${weapon.id}`,
    name: weapon.name,
    description: weapon.description || '',
    type: weapon.type,
    rarity: weapon.rarity,
    maxLevel,
    image: weapon.image,
    character: null,
    stats: weapon.stats,
    specialEffect: weapon.specialEffect || null,
    levelStats: Object.keys(levelStats).length ? levelStats : null,
    detailUrl: `/guides/horizon-walker/weapons/non-ex-${weapon.id}/`,
    uniqueSkill: null,
    signatureSkill: null,
    searchName: weapon.name.toLowerCase(),
    searchCharacter: '',
    sortMelee: parseFloat(weapon.stats?.weaponMeleeAtk) || 0,
    sortMagic: parseFloat(weapon.stats?.weaponMagicAtk) || 0,
    sortRanged: parseFloat(weapon.stats?.weaponRangedAtk) || 0,
  });
});

// DB display order: rarity tiers first (EX, SS, S, A, B), then alphabetically
// (EX by owning character name, non-EX by weapon name)
const RARITY_ORDER = { EX: 0, SS: 1, S: 2, A: 3, B: 4 };
HORIZON_WALKER_WEAPONS.sort((a, b) => {
  const r = (RARITY_ORDER[a.rarity] ?? 9) - (RARITY_ORDER[b.rarity] ?? 9);
  if (r !== 0) return r;
  const an = (a.character?.name || a.name).toLowerCase();
  const bn = (b.character?.name || b.name).toLowerCase();
  return an.localeCompare(bn);
});

export { HORIZON_WALKER_WEAPONS };

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
