// Horizon Walker combat mechanics data, extracted from the game client
// (LevelPanalty table + CharacterManager.GetDamage / UtilityEx.GetCalLevelDiffDamage, Steam build 2026-09)

// Damage multiplier (per 10000) when the attacker's level is BELOW the target's, by level gap.
// Example: 5 levels under the target = 6000 = 60% damage.
export const LEVEL_PENALTY = [
  { diff: 1, value: 9200 },
  { diff: 2, value: 8400 },
  { diff: 3, value: 7600 },
  { diff: 4, value: 6800 },
  { diff: 5, value: 6000 },
  { diff: 6, value: 5200 },
  { diff: 7, value: 4420 },
  { diff: 8, value: 3757 },
  { diff: 9, value: 3193 },
  { diff: 10, value: 2714 },
  { diff: 11, value: 2307 },
  { diff: 12, value: 1961 },
  { diff: 13, value: 1667 },
  { diff: 14, value: 1417 },
  { diff: 15, value: 1204 },
  { diff: 16, value: 1024 },
  { diff: 17, value: 870 },
  { diff: 18, value: 740 },
  { diff: 19, value: 629 },
  { diff: 20, value: 534 },
  { diff: 21, value: 454 },
  { diff: 22, value: 386 },
  { diff: 23, value: 328 },
  { diff: 24, value: 279 },
  { diff: 25, value: 237 },
  { diff: 26, value: 202 },
  { diff: 27, value: 171 },
  { diff: 28, value: 146 },
  { diff: 29, value: 124 },
  { diff: 30, value: 105 },
  { diff: 31, value: 89 },
  { diff: 32, value: 76 },
  { diff: 33, value: 65 },
  { diff: 34, value: 55 },
  { diff: 35, value: 47 },
  { diff: 36, value: 40 },
  { diff: 37, value: 34 },
  { diff: 38, value: 29 },
  { diff: 39, value: 24 },
  { diff: 40, value: 21 },
  { diff: 41, value: 18 },
  { diff: 42, value: 15 },
  { diff: 43, value: 13 },
  { diff: 44, value: 11 },
  { diff: 45, value: 9 },
  { diff: 46, value: 8 },
  { diff: 47, value: 7 },
  { diff: 48, value: 6 },
  { diff: 49, value: 5 },
  { diff: 50, value: 4 },
  { diff: 51, value: 3 },
  { diff: 52, value: 3 },
  { diff: 53, value: 3 },
  { diff: 54, value: 2 },
  { diff: 55, value: 2 },
  { diff: 56, value: 2 },
  { diff: 57, value: 1 },
  { diff: 58, value: 1 },
  { diff: 59, value: 1 }
];

// Damage bonus when the attacker's level is at or above the target's: 1 + 0.08 x overlevel (no cap).
export const OVERLEVEL_BONUS_PER_LEVEL = 0.08;

// Defense formula constants (CharacterManager.GetDamage):
// DEF >= 0: multiplier = 1 - DEF / (DEF + DEF_CONSTANT)
// DEF < 0:  multiplier = 1 + |DEF| / DEF_CONSTANT * NEGATIVE_DEFENSE_CONTROL (BattleManager, GlobalValue 82)
export const DEF_CONSTANT = 1000;
export const NEGATIVE_DEFENSE_CONTROL = 1.0;

// Which stat each damage type rolls against: a skill's elemental property REPLACES the physical defense.
export const ATK_TYPES = [
  { skill: 'Melee skills', stat: 'Melee ATK (Strength scaling)' },
  { skill: 'Shooting skills', stat: 'Shoot ATK (Dexterity scaling)' },
  { skill: 'Arcane / magic skills', stat: 'Magic ATK (Intelligence scaling)' },
];

export const DEFENSE_MAPPING = [
  { damage: 'Fire (Heat)', stat: 'FireResist' },
  { damage: 'Ice', stat: 'IceResist' },
  { damage: 'Lightning', stat: 'LightningResist' },
  { damage: 'Poison', stat: 'PoisonResist' },
  { damage: 'Odd (Immaterial)', stat: 'OddResist' },
  { damage: 'Hack (Slash), physical only', stat: 'HackDefense' },
  { damage: 'Stab (Pierce), physical only', stat: 'StabDefense' },
  { damage: 'Blow (Blunt), physical only', stat: 'BlowDefense' },
];

// Worked defense multiplier examples for the table on the damage formula page
export const DEF_EXAMPLES_POSITIVE = [
  { def: 0, taken: '100%' },
  { def: 125, taken: '88.9%' },
  { def: 250, taken: '80%' },
  { def: 500, taken: '66.7%' },
  { def: 1000, taken: '50%' },
  { def: 1500, taken: '40%' },
  { def: 3000, taken: '25%' },
  { def: 9000, taken: '10%' },
];

export const DEF_EXAMPLES_NEGATIVE = [
  { def: -250, taken: '125%' },
  { def: -500, taken: '150%' },
  { def: -1000, taken: '200%' },
  { def: -1140, taken: '214%', note: 'Palekar [Unstable]' },
  { def: -1340, taken: '234%', note: 'Palekar [Unstable] with Evasion scaling' },
];
