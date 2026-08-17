// Agent X stat tables (star-up flats, class weights, formation buffs) + verified battle formulas.
// Source: master-data.bytes tables (D:/AgentX/decoded) + Share.Battle.DamageContent.CalcDamage
//   disassembly (libil2cpp.so) — constants verified in binary: K=4000, lvl×100, 1.5x/0.75x, 1000 divisors.

export const axStarFlats = [
  {
    rarity: 1,
    attack: [50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75],
    defense: [22, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49],
    health: [500, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750],
    speed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    rarity: 2,
    attack: [50, 75, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    defense: [22, 49, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76],
    health: [500, 750, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    speed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    rarity: 3,
    attack: [50, 110, 170, 220, 278, 334, 390, 446, 502, 558, 614, 670, 726, 782, 838],
    defense: [28, 61, 94, 121, 153, 184, 215, 245, 276, 307, 338, 369, 399, 430, 461],
    health: [150, 330, 510, 660, 834, 1002, 1170, 1338, 1506, 1674, 1842, 2010, 2178, 2346, 2514],
    speed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    rarity: 4,
    attack: [50, 110, 170, 220, 278, 334, 390, 446, 502, 558, 614, 670, 726, 782, 838],
    defense: [28, 61, 94, 121, 153, 184, 215, 245, 276, 307, 338, 369, 399, 430, 461],
    health: [150, 330, 510, 660, 834, 1002, 1170, 1338, 1506, 1674, 1842, 2010, 2178, 2346, 2514],
    speed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
];

export const axClassWeights = [
  { class: 'Defender', hp: 325, atk: 35, def: 33, spd: 1 },
  { class: 'Fighter', hp: 250, atk: 45, def: 25, spd: 1 },
  { class: 'Caster', hp: 215, atk: 55, def: 22, spd: 1 },
  { class: 'Support', hp: 220, atk: 38, def: 22, spd: 1 },
  { class: 'Ranger', hp: 200, atk: 60, def: 20, spd: 1 },
];

export const axFormationBuffs = [
  { element: 'Fire', statType: 21, values: [0, 7, 11, 16, 22] },
  { element: 'Fire', statType: 22, values: [0, 5, 8, 12, 16] },
  { element: 'Fire', statType: 10, values: [0, 0, 0, 0, 3] },
  { element: 'Wood', statType: 21, values: [0, 7, 11, 16, 22] },
  { element: 'Wood', statType: 22, values: [0, 5, 8, 12, 16] },
  { element: 'Wood', statType: 12, values: [0, 0, 0, 0, 3] },
  { element: 'Water', statType: 21, values: [0, 7, 11, 16, 22] },
  { element: 'Water', statType: 22, values: [0, 5, 8, 12, 16] },
  { element: 'Water', statType: 12, values: [0, 0, 0, 0, 3] },
  { element: 'Light', statType: 21, values: [6, 10, 15, 22, 30] },
  { element: 'Light', statType: 22, values: [4, 7, 11, 15, 20] },
  { element: 'Light', statType: 20, values: [0, 0, 0, 0, 3] },
  { element: 'Dark', statType: 21, values: [6, 10, 15, 22, 30] },
  { element: 'Dark', statType: 22, values: [4, 7, 11, 15, 20] },
  { element: 'Dark', statType: 19, values: [0, 0, 0, 0, 3] },
];

// Battle formulas verified from Share.Battle.DamageContent.CalcDamage (client battle sim).
export const axDamageFormula = {
  defenseK: 4000,
  levelScale: 100,
  defenseDivisor: 1000,
  advantageMultiplier: 1.5,
  disadvantageMultiplier: 0.75,
  basicCritMulti: 1.0,
  // attacker element -> element it beats (Fire>Wood>Water>Fire, Light<->Dark mutual)
  advantage: { Fire: 'Wood', Wood: 'Water', Water: 'Fire', Light: 'Dark', Dark: 'Light' },
  disadvantage: { Fire: 'Water', Wood: 'Fire', Water: 'Wood', Light: 'Dark', Dark: 'Light' },
};
