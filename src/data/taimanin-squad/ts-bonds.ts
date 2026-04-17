// Taimanin Squad Bond & Synergy Data
// Bond groups from UnitRelations.json, skill synergies from skill descriptions

export const TS_BONDS = [
  { id: 1, name: "Alliance of the Igawa Sisters", unitIds: [1, 5, 23], skillName: "Light Shadow Bloom", skillDesc: "Asagi and Oboro cross blades and attack. Removes random buffs from the target. Inflicts Bleeding. When defeating an enemy, fills Turn Gauge of all allies.", multiplier: 147, scaling: "ATK", chargeSpeed: 1.0, bonus: "+15% Gold gain in Campaign" },
  { id: 2, name: "Taimanin Also Wants Romance", unitIds: [19, 4], skillName: "Unrivaled Yatsu", skillDesc: "The Yatsu siblings cooperate and attack. Performs HP drain on every attack. If either one has Immortal, performs an enhanced HP drain. Increases all buff durations.", multiplier: 147, scaling: "ATK", chargeSpeed: 1.25 },
  { id: 3, name: "The Mizuki Mother-Daughter Mission", unitIds: [7, 13], skillName: "Soaring Lightning", skillDesc: "The Mizuki family performs a powerful attack. Target is inflicted with Buff Block. When defeating an enemy, resets the cooldown of the 3rd skill of the character who used the bond skill.", multiplier: 118.1, scaling: "ATK", chargeSpeed: 1.25, bonus: "+5 Max AP" },
  { id: 4, name: "A Day In The Life Of Akiyama Clan", unitIds: [11, 12], skillName: "Itto Style: Dual Tempest", skillDesc: "The Akiyama siblings attack together. Gains Stealth. Increases SPD Up effect when buffed.", multiplier: 204.8, scaling: "ATK + SPD", chargeSpeed: 1.25 },
  { id: 13, name: "The Story of the DSO Base", unitIds: [16, 78], skillName: "Flying Flashwave", skillDesc: "Asuka fires a powerful beam at the enemy. Removes Damage Block and Protective Shield from the target. Each Bleeding on the target increases damage. Inflicts Confuse.", multiplier: 98, scaling: "ATK", chargeSpeed: 1.25 },
  { id: 17, name: "The Chaotic Duo, Up to No Good", unitIds: [72, 85], skillName: "Let's Go! Chaotic Cannon!", skillDesc: "Fires a cannon at all enemies. Removes Debuff Block and random buffs from targets. Target is guaranteed to be inflicted with Buff Block.", multiplier: 452, scaling: "ATK", chargeSpeed: 1.25 },
  { id: 19, name: "The Dark Elves' Kyoto Trip", unitIds: [3, 48], skillName: "Mystic Frost", skillDesc: "Blooms an ice flower under all enemies using nature power. Removes Shield from all enemies. If target has Freeze, increases its efficacy and inflicts SPD Down.", multiplier: 452, scaling: "ATK", chargeSpeed: 1.25 },
  { id: 20, name: "Tasks of Shinganji Servant", unitIds: [21, 83], skillName: "Formation: Crimson Storm", skillDesc: "Kurenai attacks while Ayame supports. Damage increases. When a critical lands, performs a drain attack. When defeating an enemy, refills Bond Gauge.", multiplier: 110.3, scaling: "ATK", chargeSpeed: 1.25 },
  { id: 22, name: "Gosha Academy Girls Trio", unitIds: [36, 51, 40], skillName: "Marika Special!", skillDesc: "The three high school girls attack together. Inflicts Burn and Poison on the target.", multiplier: 189, scaling: "ATK", chargeSpeed: 1.0, bonus: "+15% EXP Gain in Campaign" },
  { id: 23, name: "The Infiltrating Taimanins", unitIds: [29, 20], skillName: "Alluring Garden", skillDesc: "Shizuru and Natsume dance to seduce the enemies. Attacks all enemies and heals all allies. Inflicts Taunt.", multiplier: 367.5, scaling: "ATK + HP", chargeSpeed: 1.25 },
  { id: 24, name: "Hell Knight & Hell Knight", unitIds: [25, 50], skillName: null, chargeSpeed: 1.25 },
  { id: 25, name: "Chaos Arena Battle", unitIds: [71, 26], skillName: "Elimination Tempest", skillDesc: "Snake Lady encourages while Noah claws the target 3 times, then Snake Lady finishes with a drop kick. If target HP is below 50%, performs a drain attack. Inflicts Stun.", multiplier: 200.1, scaling: "ATK + HP Cost", chargeSpeed: 1.25 },
  { id: 27, name: "Hebiko's Seen It!!", unitIds: [49, 54], skillName: "Fuuma Volley", skillDesc: "Kotaro and Hebiko perform a joint attack. Inflicts Bleeding. Reduces cooldown of all skills for all allies.", multiplier: 189, scaling: "ATK", chargeSpeed: 1.25 },
  { id: 6, name: "I'm Not Even Called Sister!", unitIds: [28, 107], skillName: null, chargeSpeed: 1.25 },
  { id: 7, name: "Those Who Returned and Those Who Did Not", unitIds: [47, 106], skillName: null, chargeSpeed: 1.25 },
  { id: 8, name: "Spring T, The Mysterious Fashion Model", unitIds: [73, 74], skillName: null, chargeSpeed: 1.25 },
  { id: 10, name: "A Day In The Life Of The Momochi Father-Daughter", unitIds: [53, 52], skillName: null, chargeSpeed: 1.25 },
  { id: 12, name: "The Beginning of the Two", unitIds: [2, 43], skillName: null, chargeSpeed: 1.25 },
  { id: 14, name: "Madmen of UFS", unitIds: [15, 101], skillName: null, chargeSpeed: 1.25 },
  { id: 15, name: "The Queen's...", unitIds: [27, 65], skillName: null, chargeSpeed: 1.25 },
  { id: 16, name: "A Tale of UFS Experiments", unitIds: [59, 58], skillName: null, chargeSpeed: 1.25 },
  { id: 26, name: "Taimanin and Ramen", unitIds: [121, 69], skillName: null, chargeSpeed: 1.25 },
];

export const TS_SKILL_SYNERGIES = [
  {
    unitId: 19,
    unitName: "Yatsu Murasaki",
    skillName: "Fortification",
    requiresUnitId: 1,
    requiresName: "Igawa Asagi",
    condition: "When Igawa Asagi is in the same squad",
    bonus: "Additionally grants Strengthen to self",
  },
  {
    unitId: 28,
    unitName: "Fuuma Tokiko",
    skillName: "Evil Eye: Clairvoyance",
    requiresType: "Agility",
    condition: "When targeting an Agility type ally",
    bonus: "Additionally grants Debuff Block",
  },
  {
    unitId: 80,
    unitName: "Uehara Shikanosuke",
    skillName: "Elec Art: Lightning Tackle",
    requiresUnitId: 32,
    requiresName: "Uehara Rin",
    condition: "When Uehara Rin is deployed",
    bonus: "Applies the same effect to Uehara Rin",
  },
  {
    unitId: 83,
    unitName: "Makishima Ayame",
    skillName: "Lightning Tackle (weapon)",
    requiresUnitId: 32,
    requiresName: "Uehara Rin",
    condition: "When Uehara Rin is deployed",
    bonus: "Applies the same effect to Uehara Rin",
  },
  {
    unitId: 83,
    unitName: "Makishima Ayame",
    skillName: "Ninja Art: Wind Reading",
    requiresUnitId: 21,
    requiresName: "Shinganji Kurenai",
    condition: "When Shinganji Kurenai is deployed",
    bonus: "Applies the same buffs to Kurenai and gains an Extra Turn",
  },
  {
    unitId: 122,
    unitName: "Echizen Saya",
    skillName: "Sky Slash (weapon)",
    requiresType: "Same type",
    condition: "All allies with the same type as the character",
    bonus: "Grants the same ATK Up buff to all allies of the same type",
  },
  {
    unitId: 70,
    unitName: "Kuonji R. Spica",
    skillName: "Water Art: Bubble",
    requiresType: "Destruction",
    condition: "When targeting a Destruction type ally",
    bonus: "Additionally grants Shield equal to % of target's Max HP",
  },
];

export function getBondsForUnit(unitId) {
  return TS_BONDS.filter(b => b.unitIds.includes(unitId));
}

export function getSynergiesForUnit(unitId) {
  return TS_SKILL_SYNERGIES.filter(s => s.unitId === unitId || s.requiresUnitId === unitId);
}
