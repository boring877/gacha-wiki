// Aggregates all character stats data
// Re-exports BUSTY_BURST_CHARACTER_STATS for backwards compatibility

// Character Stats Data for Busty Burst
// Auto-generated from CHARACTER_STATS.txt - 74 characters total
// Includes: Base stats, Level 90 stats, 5 Passive Abilities, Limit Break, GP Ability, Ability Grade, Max Stats

// Calculate stat at any level (linear interpolation)
export function calculateStatAtLevel(base, lv90, level) {
  if (level <= 1) return base;
  if (level >= 90) return lv90;
  const growth = lv90 - base;
  const perLevel = growth / 89;
  return Math.floor(base + perLevel * (level - 1));
}

// Calculate crit rate percentage from raw value
export function calculateCritRate(critValue) {
  return (critValue / 20).toFixed(2);
}

// Stat display names for UI
// Supports both camelCase (physCrit) and spaced format ("Phys Crit")
export const STAT_DISPLAY_NAMES = {
  // CamelCase format
  hp: 'HP',
  atk: 'ATK',
  matk: 'MATK',
  def: 'DEF',
  mdef: 'MDEF',
  accuracy: 'Accuracy',
  block: 'Block',
  physCrit: 'Crit Rate',
  magicCrit: 'M.Crit Rate',
  hpRegen: 'HP Regen',
  mpRegen: 'MP Charge',
  healPwr: 'Heal Pwr',
  mpCharge: 'MP Charge',
  hpDrain: 'HP Drain',
  mpCostDown: 'MP Cost',
  // Spaced format (from game data)
  'HP': 'HP',
  'ATK': 'ATK',
  'MATK': 'MATK',
  'DEF': 'DEF',
  'MDEF': 'MDEF',
  'Accuracy': 'Accuracy',
  'Block': 'Block',
  'Phys Crit': 'Crit Rate',
  'Magic Crit': 'M.Crit Rate',
  'HP Regen': 'HP Regen',
  'MP Regen': 'MP Charge',
  'Heal Pwr': 'Heal Pwr',
  'MP Charge': 'MP Charge',
  'HP Drain': 'HP Drain',
  'MP Cost Down': 'MP Cost',
};


import { stats as _artemis } from "./artemis.js";
import { stats as _artia } from "./artia.js";
import { stats as _bianca } from "./bianca.js";
import { stats as _chocolate_frey } from "./chocolate-frey.js";
import { stats as _chocolate_hildis } from "./chocolate-hildis.js";
import { stats as _chocolate_shaty } from "./chocolate-shaty.js";
import { stats as _dragon_crusher_medusa } from "./dragon-crusher-medusa.js";
import { stats as _elegant_portrait_aysis } from "./elegant-portrait-aysis.js";
import { stats as _elegant_portrait_shamshel } from "./elegant-portrait-shamshel.js";
import { stats as _epic_fishing_meinias } from "./epic-fishing-meinias.js";
import { stats as _estiriel } from "./estiriel.js";
import { stats as _festival_attire_estiriel } from "./festival-attire-estiriel.js";
import { stats as _festival_dress_up_natasha } from "./festival-dress-up-natasha.js";
import { stats as _festival_empress_shamshel } from "./festival-empress-shamshel.js";
import { stats as _frey } from "./frey.js";
import { stats as _gemini } from "./gemini.js";
import { stats as _golem_summoner_nerys } from "./golem-summoner-nerys.js";
import { stats as _gracie } from "./gracie.js";
import { stats as _hildis } from "./hildis.js";
import { stats as _hisara } from "./hisara.js";
import { stats as _holy_night_succubus_yu_rima_elca } from "./holy-night-succubus-yu-rima-elca.js";
import { stats as _hypnotic_dancer_messeria } from "./hypnotic-dancer-messeria.js";
import { stats as _kaguya } from "./kaguya.js";
import { stats as _killer_bikini_theresia } from "./killer-bikini-theresia.js";
import { stats as _lapis } from "./lapis.js";
import { stats as _liesel } from "./liesel.js";
import { stats as _luca } from "./luca.js";
import { stats as _lynette } from "./lynette.js";
import { stats as _mage_of_bastinton_sobrina } from "./mage-of-bastinton-sobrina.js";
import { stats as _magical_holy_night_festival_kaguya } from "./magical-holy-night-festival-kaguya.js";
import { stats as _magical_princess_luceria } from "./magical-princess-luceria.js";
import { stats as _marina } from "./marina.js";
import { stats as _meinias } from "./meinias.js";
import { stats as _mischievous_mermaid_princess_lorelia } from "./mischievous-mermaid-princess-lorelia.js";
import { stats as _natasha } from "./natasha.js";
import { stats as _new_years_calligraphy_pastel } from "./new-years-calligraphy-pastel.js";
import { stats as _noble_succubus_empress_shamshel } from "./noble-succubus-empress-shamshel.js";
import { stats as _nora } from "./nora.js";
import { stats as _ophelio } from "./ophelio.js";
import { stats as _pastel } from "./pastel.js";
import { stats as _pious_cleric_ishtovia } from "./pious-cleric-ishtovia.js";
import { stats as _queen_of_pies_and_cookies_aphrodia } from "./queen-of-pies-and-cookies-aphrodia.js";
import { stats as _r_aphrodia } from "./r-aphrodia.js";
import { stats as _r_aristera } from "./r-aristera.js";
import { stats as _r_aysis } from "./r-aysis.js";
import { stats as _r_celebria } from "./r-celebria.js";
import { stats as _r_destra } from "./r-destra.js";
import { stats as _r_drowatt } from "./r-drowatt.js";
import { stats as _r_elythia } from "./r-elythia.js";
import { stats as _r_eskelda } from "./r-eskelda.js";
import { stats as _r_estria } from "./r-estria.js";
import { stats as _r_lorelia } from "./r-lorelia.js";
import { stats as _r_luceria } from "./r-luceria.js";
import { stats as _r_nadine } from "./r-nadine.js";
import { stats as _r_rosalyn } from "./r-rosalyn.js";
import { stats as _r_roxanne } from "./r-roxanne.js";
import { stats as _r_shahar } from "./r-shahar.js";
import { stats as _r_shamshel } from "./r-shamshel.js";
import { stats as _r_xevia } from "./r-xevia.js";
import { stats as _rosa } from "./rosa.js";
import { stats as _seductive_high_cut_swimsuit_nerys } from "./seductive-high-cut-swimsuit-nerys.js";
import { stats as _setsuka } from "./setsuka.js";
import { stats as _shaty } from "./shaty.js";
import { stats as _soltina } from "./soltina.js";
import { stats as _sr_athena } from "./sr-athena.js";
import { stats as _sr_azura } from "./sr-azura.js";
import { stats as _sr_celestia } from "./sr-celestia.js";
import { stats as _sr_constantia } from "./sr-constantia.js";
import { stats as _sr_emelaria } from "./sr-emelaria.js";
import { stats as _sr_farneria } from "./sr-farneria.js";
import { stats as _sr_gladys } from "./sr-gladys.js";
import { stats as _sr_guinevia } from "./sr-guinevia.js";
import { stats as _sr_irina } from "./sr-irina.js";
import { stats as _sr_ishtovia } from "./sr-ishtovia.js";
import { stats as _sr_lucrezia } from "./sr-lucrezia.js";
import { stats as _sr_medusa } from "./sr-medusa.js";
import { stats as _sr_messeria } from "./sr-messeria.js";
import { stats as _sr_nerys } from "./sr-nerys.js";
import { stats as _sr_nue } from "./sr-nue.js";
import { stats as _sr_paia } from "./sr-paia.js";
import { stats as _sr_rui } from "./sr-rui.js";
import { stats as _sr_sobrina } from "./sr-sobrina.js";
import { stats as _sr_veronica } from "./sr-veronica.js";
import { stats as _sr_zoe } from "./sr-zoe.js";
import { stats as _ssr_lucie } from "./ssr-lucie.js";
import { stats as _stenlina } from "./stenlina.js";
import { stats as _the_dark_knight } from "./the-dark-knight.js";
import { stats as _theresia } from "./theresia.js";
import { stats as _venus } from "./venus.js";
import { stats as _yu_lima_elka } from "./yu-lima-elka.js";

export const BUSTY_BURST_CHARACTER_STATS = {
  "artemis": _artemis,
  "artia": _artia,
  "bianca": _bianca,
  "chocolate-frey": _chocolate_frey,
  "chocolate-hildis": _chocolate_hildis,
  "chocolate-shaty": _chocolate_shaty,
  "dragon-crusher-medusa": _dragon_crusher_medusa,
  "elegant-portrait-aysis": _elegant_portrait_aysis,
  "elegant-portrait-shamshel": _elegant_portrait_shamshel,
  "epic-fishing-meinias": _epic_fishing_meinias,
  "estiriel": _estiriel,
  "festival-attire-estiriel": _festival_attire_estiriel,
  "festival-dress-up-natasha": _festival_dress_up_natasha,
  "festival-empress-shamshel": _festival_empress_shamshel,
  "frey": _frey,
  "gemini": _gemini,
  "golem-summoner-nerys": _golem_summoner_nerys,
  "gracie": _gracie,
  "hildis": _hildis,
  "hisara": _hisara,
  "holy-night-succubus-yu-rima-elca": _holy_night_succubus_yu_rima_elca,
  "hypnotic-dancer-messeria": _hypnotic_dancer_messeria,
  "kaguya": _kaguya,
  "killer-bikini-theresia": _killer_bikini_theresia,
  "lapis": _lapis,
  "liesel": _liesel,
  "luca": _luca,
  "lynette": _lynette,
  "mage-of-bastinton-sobrina": _mage_of_bastinton_sobrina,
  "magical-holy-night-festival-kaguya": _magical_holy_night_festival_kaguya,
  "magical-princess-luceria": _magical_princess_luceria,
  "marina": _marina,
  "meinias": _meinias,
  "mischievous-mermaid-princess-lorelia": _mischievous_mermaid_princess_lorelia,
  "natasha": _natasha,
  "new-years-calligraphy-pastel": _new_years_calligraphy_pastel,
  "noble-succubus-empress-shamshel": _noble_succubus_empress_shamshel,
  "nora": _nora,
  "ophelio": _ophelio,
  "pastel": _pastel,
  "pious-cleric-ishtovia": _pious_cleric_ishtovia,
  "queen-of-pies-and-cookies-aphrodia": _queen_of_pies_and_cookies_aphrodia,
  "r-aphrodia": _r_aphrodia,
  "r-aristera": _r_aristera,
  "r-aysis": _r_aysis,
  "r-celebria": _r_celebria,
  "r-destra": _r_destra,
  "r-drowatt": _r_drowatt,
  "r-elythia": _r_elythia,
  "r-eskelda": _r_eskelda,
  "r-estria": _r_estria,
  "r-lorelia": _r_lorelia,
  "r-luceria": _r_luceria,
  "r-nadine": _r_nadine,
  "r-rosalyn": _r_rosalyn,
  "r-roxanne": _r_roxanne,
  "r-shahar": _r_shahar,
  "r-shamshel": _r_shamshel,
  "r-xevia": _r_xevia,
  "rosa": _rosa,
  "seductive-high-cut-swimsuit-nerys": _seductive_high_cut_swimsuit_nerys,
  "setsuka": _setsuka,
  "shaty": _shaty,
  "soltina": _soltina,
  "sr-athena": _sr_athena,
  "sr-azura": _sr_azura,
  "sr-celestia": _sr_celestia,
  "sr-constantia": _sr_constantia,
  "sr-emelaria": _sr_emelaria,
  "sr-farneria": _sr_farneria,
  "sr-gladys": _sr_gladys,
  "sr-guinevia": _sr_guinevia,
  "sr-irina": _sr_irina,
  "sr-ishtovia": _sr_ishtovia,
  "sr-lucrezia": _sr_lucrezia,
  "sr-medusa": _sr_medusa,
  "sr-messeria": _sr_messeria,
  "sr-nerys": _sr_nerys,
  "sr-nue": _sr_nue,
  "sr-paia": _sr_paia,
  "sr-rui": _sr_rui,
  "sr-sobrina": _sr_sobrina,
  "sr-veronica": _sr_veronica,
  "sr-zoe": _sr_zoe,
  "ssr-lucie": _ssr_lucie,
  "stenlina": _stenlina,
  "the-dark-knight": _the_dark_knight,
  "theresia": _theresia,
  "venus": _venus,
  "yu-lima-elka": _yu_lima_elka,
};

// Helper function to get all character stats as array
export function getAllCharacterStats() {
  return Object.values(BUSTY_BURST_CHARACTER_STATS);
}

// Helper function to get character stats by ID
export function getCharacterStatsById(id) {
  return BUSTY_BURST_CHARACTER_STATS[id] || null;
}

// Helper function to get character stats by numeric character ID
export function getCharacterStatsByCharacterId(characterId) {
  return Object.values(BUSTY_BURST_CHARACTER_STATS).find(c => c.characterId === characterId) || null;
}
