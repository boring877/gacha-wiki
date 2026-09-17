// MAJO tier list: kit-based placements (updated 2026-09-16), grouped by class.
// Placements are editorial, grounded in each witch's full skill data in
// characters.js and cross-checked with community lists (OSLink 2026-08-18,
// GamingPile 2026-08-30, Bilibili + Gamerch 2026-09-16). Emily and bazhuli
// are community-checked; luoqin and lucia (banner 2026-09-30) are kit-only.
// NEW WITCHES MUST BE ADDED TO MAJO_TIER_PLACEMENTS or they land in C with a
// console warning in dev.

import { majoCharacters } from './characters.js';

export const MAJO_TIERS = [
  // SSS is RESERVED for a future "broken" unit (so strong nothing compares);
  // it stays empty and hidden until one actually ships.
  { tier: 'SSS', color: '#f87171' },
  { tier: 'SS', color: '#f2c14e' },
  { tier: 'S', color: '#dbb06e' },
  { tier: 'A', color: '#a89bd1' },
  { tier: 'B', color: '#6d93bd' },
  { tier: 'C', color: '#736f85' },
];

export const MAJO_CLASS_SECTIONS = ['Fighter', 'Mage', 'Tank', 'Healer'];

const CLASS_ZH = { Fighter: '破阵', Mage: '飞袭', Tank: '守护', Healer: '支援' };

export const MAJO_TIER_UPDATED = 'September 16, 2026';

// slug -> { tier, reason, isNew? }
export const MAJO_TIER_PLACEMENTS = {
  // Fighters (破阵)
  xinzi: {
    tier: 'S',
    reason: 'Single-target breaker: a +100% Crit Rate Salvo auto, a teleport Extreme with heavy Stagger, and a 90% damage-reduction Dodge Counter. The all-region community core: strongest free DPS in the game.',
  },
  huarui: {
    tier: 'A',
    reason: 'Best crowd fighter: an expanding 5-hit Extreme that fully resets its own cooldown, Dodge Counter chains, and a Special unlock after the second Normal hit.',
  },
  luoqin: {
    tier: 'A',
    reason: 'New. Burst-window fighter: her Extreme self-buffs +50% Attack Speed, +25% Crit Rate and +50% Crit Damage while locking both skill cooldowns to 4 seconds. Her Crit Damage Interference fits every crit DPS.',
    isNew: true,
  },
  alice: {
    tier: 'A',
    reason: 'Counter DPS that responds to dodges AND blocks, with an Extreme that stacks Dodge Value and removes Class Skill activation restrictions. Self-sufficient but counter-reliant.',
  },
  lena: {
    tier: 'B',
    reason: 'Super-armor mobile DPS with a fun circling Extreme and strong knockdown resistance; survivability is real, the damage is middling.',
  },
  xini: {
    tier: 'B',
    reason: 'Backline-chasing skater with Super Armor on her Extreme and crit-rate Interference; needs dodge setups to keep pace with the top fighters.',
  },
  leed: {
    tier: 'B',
    reason: 'Stagger-focused shadow DPS whose whole kit wants knocked-down targets; fine in Execution teams, weak outside them.',
  },

  // Mages (飞袭)
  xuanji: {
    tier: 'SS',
    reason: 'Best execution mage: knockdown-locked Charge skills, an Extreme that drops a damage zone, and Attack Speed that snowballs (up to 20 stacks) whenever allies execute. JP ranks her #1 Assault and #1 Mental attacker.',
  },
  jenny: {
    tier: 'SS',
    reason: '2320% AoE Extreme with 10 Stagger, a 405% Charge skill on a shortening cooldown, and a Mental damage Interference that buffs any team attacking downed targets.',
  },
  patra: {
    tier: 'SS',
    reason: 'AoE magic DPS whose Extreme shreds Magic Resistance by up to 20% and whose Class Skill instantly reloads whenever an allied Arcanist uses her Extreme. Star-gated: CN players say she is only truly good at max stars, so expect to invest dupes.',
  },
  macak: {
    tier: 'SS',
    reason: 'UR storm nuker: a 12-hit self-centered Extreme (about 3600% total), a full-field Ultimate Salvo auto, and 20s self Crit buffs plus 32% charge speed.',
  },
  yuhong: {
    tier: 'SS',
    reason: 'Dodge-cannon DPS: 100% Dodge Value uptime, a fixed 2s dodge cooldown, and a +200% Special bonus during her Extreme; crits stack off every ally dodge too. CN players rate her T0 (strongest Flyer) and KR players prefer her over Jenny on auto.',
  },
  tomoe: {
    tier: 'A',
    reason: 'Support-mage: her Charge zone drips +8% team damage per second, her Extreme self-buffs +50/80% Crit Damage, and her Interference spawns an ally Attack zone after every ult.',
  },
  lucia: {
    tier: 'A',
    reason: 'New. Execution sword-mage: a multi-hit Extreme ending in a 1008% blast with 30 total Stagger, a knockdown-locked 600% Execution auto, and a Crit Power Interference.',
    isNew: true,
  },
  bazhuli: {
    tier: 'SS',
    reason: "New. UR ult-cycler: her awakened Extreme drops 4 lingering zones at 50% damage per second each, her kit self-stacks up to +80 Extreme charge speed, and every ally ult refunds her Class cooldown and feeds her passive up to +40% Extreme damage (10 stacks x 4%). CN players already call her the top DPS efficiency in the game and JP ranks her the #1 magic attacker, with one caveat: she is welded to Patra's ult cycle and wants heavy investment.",
    isNew: true,
  },
  grina: {
    tier: 'B',
    reason: 'Honest burst mage: a 6-9 hit AoE Extreme and Crit Damage passive, but outclassed by every SSR nuker in the same class.',
  },
  lumi: {
    tier: 'B',
    reason: 'Graffiti AoE with zone damage and dodge synergy, carried by utility rather than multipliers; weak numbers for an SSR.',
  },
  dusan: {
    tier: 'B',
    reason: 'Execution-team spice: attack zones on her Execution auto and Attack Speed whenever allies execute. SR stat ceiling limits her elsewhere.',
  },

  // Tanks (守护)
  carmen: {
    tier: 'SS',
    reason: 'Tank-healer hybrid: heals on Normal attacks, taunt-parry counters that debuff enemy damage, a team Toughness and Defense Extreme, and the lowest-maintenance survivability in the game.',
  },
  garana: {
    tier: 'A',
    reason: 'Dizzy-tank: a taunt Extreme that also raises ally Defense, a damage-reduction debuff on her Salvo auto, and Block Counter Dizzies for crowd control.',
  },
  isabelle: {
    tier: 'A',
    reason: 'UR aggro tank: a 950% taunt Extreme with a big Defense buff, a 40s passive that refills her own Extreme gauge, and stacking 1% Attack shred per hit.',
  },
  dayu: {
    tier: 'SS',
    reason: 'UR support-tank: team-wide 4% x3 damage reduction on her auto, a taunt Extreme with a 25% damage cut, and Special cooldown refunds whenever allies ult.',
  },
  qing: {
    tier: 'B',
    reason: 'Solid Block Counter tank with enemy Attack debuffs on block, but SR stats and little team utility behind Carmen, Garana and Dayu.',
  },
  budi: {
    tier: 'B',
    reason: 'Self-sustaining axe tank (self-heal and Max HP on her Extreme) with solid taunt coverage; brings no buffs for the rest of the team.',
  },
  yun: {
    tier: 'A',
    reason: 'Parry-counter tank that JP communities rank #1 Guardian, and the cornerstone of KR physical decks (biggest Break-gauge contributor in the game). Her Class and Special keep resetting each other for near-permanent taunt uptime.',
  },

  // Healers (支援)
  maro: {
    tier: 'S',
    reason: 'Offense healer: her Execution auto gives every ally +10% damage (plus 16% vulnerability on the target) on top of AoE heals and an ally Magic Attack aura on her Interference. Strong on paper, but most CN/JP/KR players still run free Peseshet for sustained healing.',
  },
  emily: {
    tier: 'SS',
    reason: 'New. The only team-wide Ultimate charger in the game (+320 charge, +640 for high-cost allies, on her auto) plus all-ally Extreme damage from her own ult and a hybrid heal-damage Extreme. Ult-cycle teams want her everywhere.',
    isNew: true,
  },
  peseshet: {
    tier: 'A',
    reason: 'Budget-but-real team amp: all-ally Extreme damage +8% from her auto and +20% from her save-heal, with free extra casts after each ult. SR stats keep her out of S.',
  },
  doroa: {
    tier: 'B',
    reason: 'Pure heals (AoE, zone and single-target) with a healing Interference; no damage contribution, so Maro, Peseshet and Emily leave her behind.',
  },
  zhijie: {
    tier: 'A',
    reason: 'The physical meta deck\'s healer and the highest healer ceiling in the game (CN players rate her T0, JP S): area heals with Defense buffs, get-up and posture support on her auto, and an Extreme that heals then attacks. Whale-spec to acquire and limit-break, which is the only thing keeping her out of SS. Free players should run Peseshet.',
  },
};

const RARITY_RANK = { UR: 0, SSR: 1, SR: 2, R: 3 };

function placementOf(slug) {
  const p = MAJO_TIER_PLACEMENTS[slug];
  if (p) return p;
  console.warn(`[majo/tier-list] no placement for "${slug}", defaulting to C`);
  return { tier: 'C', reason: 'Not yet reviewed.' };
}

export const majoTierByClass = MAJO_CLASS_SECTIONS.map(cls => ({
  cls,
  clsZh: CLASS_ZH[cls],
  tiers: MAJO_TIERS.map(({ tier, color }) => ({
    tier,
    color,
    characters: majoCharacters
      .filter(c => c.cls === cls && placementOf(c.slug).tier === tier)
      .map(c => ({ ...c, placement: placementOf(c.slug) }))
      .sort((a, b) =>
        ((RARITY_RANK[a.rarity] ?? 9) - (RARITY_RANK[b.rarity] ?? 9)) ||
        a.nameEn.localeCompare(b.nameEn)
      ),
  })).filter(t => t.characters.length > 0),
}));
