// Gene-Sys: Adam tier list: kit-based placements (updated 2026-09-22: Qing Yin,
// Leng Zhen added, Connie rescored now that her kit ships readable data),
// grouped by job like the majo list. Placements are editorial, grounded in
// each character's skill data in characters.js (multipliers, cooldowns, EN
// costs, buff values). Day-one launch assessment: no community consensus
// exists yet, dupes and star upgrades are not factored.
// Rarities come from the gacha tables, not guesswork: joining DrawSingleData
// buckets to DrawMachineChanceTitleData makes group 3 = SR (cr031-cr041 plus
// quest-only Theodore on the same qualification tier) and group 4+ = SSR
// (cr043 and up; Amber and Rachel also appear in an explicit Pick UP SSR
// bucket). The beginner callout below carries the early-game reality the
// tiers cannot show: class upgrades are dupe-gated, so invested SRs carry
// progression.
// NEW CHARACTERS MUST BE ADDED TO GSA_TIER_PLACEMENTS or they land in C with
// a console warning in dev.

import { gsaCharacters } from './characters.js';

// Same tier ladder colors as the majo list so tiers read the same site-wide.
// SSS is RESERVED for a future "broken" unit; it stays empty and hidden until
// one actually ships.
export const GSA_TIERS = [
  { tier: 'SSS', color: '#f87171' },
  { tier: 'SS', color: '#f2c14e' },
  { tier: 'S', color: '#dbb06e' },
  { tier: 'A', color: '#a89bd1' },
  { tier: 'B', color: '#6d93bd' },
  { tier: 'C', color: '#736f85' },
];

const R2 = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam';

// The game's own rarity badges (Icon_SR / Icon_SSR from the gacha UI bundles).
// No Icon_R has shipped in any pulled bundle yet; R falls back to a text chip.
// When an R badge lands on device, extract it, upload, and add it here.
export const GSA_RARITY_BADGES = {
  SR: `${R2}/Icon_SR.webp`,
  SSR: `${R2}/Icon_SSR.webp`,
};

export function gsaRarityBadge(rarity) {
  return GSA_RARITY_BADGES[rarity] || null;
}

// element-neutral job icons (JobData.jobicon base with element 0)
export const GSA_JOB_SECTIONS = [
  { job: 'Guardian', zh: '防護', icon: `${R2}/guard_0.webp` },
  { job: 'Striker', zh: '突擊', icon: `${R2}/fighters_0.webp` },
  { job: 'Sniper', zh: '狙擊', icon: `${R2}/archer_0.webp` },
  { job: 'Support', zh: '支援', icon: `${R2}/priest_0.webp` },
  { job: 'Breaker', zh: '破壞', icon: `${R2}/master_0.webp` },
];

export const GSA_TIER_UPDATED = 'September 22, 2026';

// Early-game callout rendered above the job sections. The tiers rate end-state
// power; this box explains why low placements still carry your account early.
export const GSA_BEGINNER_NOTE = {
  title: 'Early-game priorities',
  intro: 'Tiers rate late-game power, but progression runs on dupes: the class system is tied to duplicate count, and a character cannot class up past the dupes she owns. SR units are far easier to pull and duplicate, which makes them the cheapest units to class up and max, so invested SRs carry your account early.',
  picks: [
    { slug: 'theodore', note: 'Weapon obtainable, quick SR dupes' },
    { slug: 'adele', note: 'Weapon obtainable, quick SR dupes' },
    { slug: 'belle', note: 'Weapon obtainable, quick SR dupes' },
    { slug: 'ruby', note: 'SSR: dupes from a quest, weapon obtainable' },
  ],
  lastSlot: {
    name: 'Last slot',
    note: 'Your highest-dupe SSR, or an SR with good dupes from missions. Prioritize a DPS.',
  },
};

// slug -> { tier, rarity, reason }
export const GSA_TIER_PLACEMENTS = {
  'kurosawa-shion': { tier: 'SS', rarity: 'SSR', reason: 'The energy battery. Her loop refills 4.5 team EN every 6 seconds, her ultimate grants the whole party EN Gain Up 45% for 24s, and her active stacks up to 15% party Basic Damage three times. Every ultimate in the team comes online faster with her on the field.' },
  'jessica': { tier: 'SS', rarity: 'SSR', reason: 'Best defensive support: a 795% party shield on an 8s cooldown, constant top-up healing on her loop and passive, and an ultimate that cleanses all debuffs and applies a 1285% party shield.' },
  'ogino-rui': { tier: 'SS', rarity: 'SSR', reason: 'Highest raw damage in the roster: 850% combined rotation, a permanent self Physical DMG Up 20% and Crit 18% loop, self-healing, and a five-hit 170% ultimate.' },
  'victoria': { tier: 'SS', rarity: 'SSR', reason: 'Amplifier and carry in one: her loop grants Crit DMG Up 40% to the two highest-ATK allies, and her ultimate brings EN Gain 45%, a 425% strike to up to 3 targets and a Petrify finisher.' },
  'lin-lan': { tier: 'SS', rarity: 'SR', reason: 'The Guardian partner: 1785% shields on a 10s cooldown, a loop that cuts basic attack damage taken by 35%, and a 3700% ultimate shield. Rating assumes you run a Guardian, which you should.' },
  'adele': { tier: 'S', rarity: 'SR', reason: 'Best SR damage dealer: a 660% ultimate, a self Attack Up 20% and ACC loop, plus Burn and Wind ATK Down utility. Strong enough that dupes are a bonus, not a requirement. Early-game cornerstone: SR dupes class her up fast and her weapon is obtainable.' },
  'yulia': { tier: 'S', rarity: 'SR', reason: 'Dark nuker: a 615% single-target ultimate with Dark Res Down follow-up, Light ATK Down debuffs for the mirror matchup, and Evasion uptime for survivability.' },
  'thalia': { tier: 'S', rarity: 'SR', reason: 'Boss-killer: everything targets the highest-ATK enemy, her loop shreds their Basic Damage by 20%, a passive proc gives her Basic Damage Up 40%, and the ultimate adds Knockdown.' },
  'milena': { tier: 'S', rarity: 'SSR', reason: 'A ten-hit 800% ultimate on a single target, Knockdown and Petrify control, and a passive that shreds Guardian-type blocks. An SSR whose dupes are still worth the investment.' },
  'hijikata-chizuru': { tier: 'S', rarity: 'SSR', reason: 'The best tank: Physical damage taken cut 20%, EN Gain 25% for the team, a Petrify on a 4s loop and a five-hit AoE ultimate with 35% Petrify rate. Deals real damage while holding the line.' },
  'vera': { tier: 'A', rarity: 'SR', reason: 'Textbook Guardian: a two-hit 400% stun active, a regeneration loop, Block 30% on the ultimate and passive self-healing. Dependable, if unexciting next to Hijikata Chizuru.' },
  'takajou-ranka': { tier: 'S', rarity: 'SR', reason: 'A Guardian that carries: a 466% self-heal loop, a five-hit forward-area ultimate and Silence utility. Lets you keep the tank slot without giving up damage.' },
  'elena': { tier: 'S', rarity: 'SSR', reason: 'Fire-team engine: her loop grants EN Gain 40% and Skill Damage 12%, and her ultimate hits all targets for 250% while shredding Fire Res 10% for 12s. Pairs with any Burn source.' },
  'shiraishi-ai': { tier: 'S', rarity: 'SSR', reason: 'Nuclear numbers (832% rotation, a four-hit 208% ultimate) but nearly all of it prioritizes Support-type enemies and cuts their healing. A PvP and anti-healer weapon first, general DPS second.' },
  'andou-kana': { tier: 'S', rarity: 'SSR', reason: 'Freeze is hard CC and her kit is built on it: Freeze on a nine-hit active and a five-hit all-targets ultimate with wide forward coverage. Freeze also feeds Ice Break pursuits.' },
  'sugimoto-arina': { tier: 'A', rarity: 'SSR', reason: 'Honest healer: 630% heals to the two lowest-HP allies, a full-party 1000% heal ultimate and Stun Res attached. Jessica simply does more for the same slot.' },
  'aira': { tier: 'A', rarity: 'SR', reason: 'Solid Light Striker with a Judgment passive stun combo and a defensive ultimate. Mid multipliers keep her out of the top ranks, nothing to fault otherwise.' },
  'amelie': { tier: 'A', rarity: 'SSR', reason: 'AoE specialist: the ultimate hits all targets five times and Bleed uptime is reliable, but her loop buffs random allies and her single-target numbers trail the SR damage queens.' },
  'komachi-sayaka': { tier: 'A', rarity: 'SSR', reason: 'Ice Break specialist: a six-hit forward-area ultimate, Water Res Down and stacking self-buffs on frozen targets. Wants Andou Kana or Katya to freeze first.' },
  'ojima-erina': { tier: 'A', rarity: 'SSR', reason: 'Reliable 345% rotation Sniper with a clean three-hit ultimate. No team buffs, no weaknesses, no drama.' },
  'li-mu': { tier: 'A', rarity: 'SSR', reason: 'A steady 360% Striker with a four-hit ultimate and Crit chance procs. Perfectly playable, outshone by the SSR carry tier.' },
  'danxin': { tier: 'A', rarity: 'SSR', reason: 'A Striker that tanks: a 2145% self-shield on the active, Energy damage taken cut 10%, and an ultimate that cuts basic attack damage taken 40%. Great in content that hits hard.' },
  'annabelle': { tier: 'A', rarity: 'SSR', reason: 'Light nuker with a seven-hit forward-area ultimate, a Light Res Down loop and ATK SPD Down control. Solid and unremarkable in equal measure.' },
  'chloe': { tier: 'A', rarity: 'SSR', reason: 'Her thirteen-hit 585% ultimate is sneaky good, and the self-inflicted Pain cost is manageable behind any healing support.' },
  'charlotte': { tier: 'A', rarity: 'SSR', reason: 'Shield-tank hybrid: Block procs on her active, a nine-hit ultimate that applies a 2900% shield on hit, and passive self-shielding. Fine wherever a second Guardian fits.' },
  'mudia': { tier: 'A', rarity: 'SR', reason: 'Lifesteal Guardian: heals on her active, on hits and on every ultimate strike, bleeds on loop, and buffs her own Max HP. Hard to kill, moderate damage.' },
  'amber': { tier: 'A', rarity: 'SSR', reason: 'The self-sufficient tank: 1920% loop shields, self-cleanse with a 1000% heal, Max HP stacking and a reflecting 2900% ultimate shield. Needs no support to hold the line.' },
  'liz': { tier: 'A', rarity: 'SSR', reason: 'Half tank, half support: a 960% party-wide shield ultimate with Fire ATK Down 10% attached, self-sustain on loop and stacking ATK SPD when hit.' },
  'rachel': { tier: 'A', rarity: 'SSR', reason: 'Utility Breaker: her loop interrupts enemy skills from range, the ultimate is a line nuke with a conditional execute, and kills debuff enemy Snipers and Breakers by 15%.' },
  'katya': { tier: 'A', rarity: 'SR', reason: 'Freeze-and-punish support: multi-hit forward-area attacks that trigger Ice Break pursuits on frozen targets, plus ACC Down and Water ATK self-buffs. Wants freeze partners.' },
  'lin-lin': { tier: 'A', rarity: 'SSR', reason: 'Fire debuffer and cleanup crew: Fire Res Down 8%, Burn on loop, Crit Chance cuts, and everything aims at the lowest-HP target. The executioner slot for fire teams.' },
  'ruby': { tier: 'A', rarity: 'SSR', reason: 'Wildcard: 900% combined damage and an Electrocute-focused ultimate with 30% hit rate up, but on a Support frame whose ATK scaling could not be verified from the tables. Promising, unproven. The cheap SSR: quest dupes and an obtainable weapon make her the easiest premium unit to actually build.' },
  'theodore': { tier: 'B', rarity: 'SR', reason: 'The protagonist starter: functional Fire shred and a serviceable eight-hit ultimate, but every limited unit outclasses him. He is free, be kind. Early on he is a core build anyway: his weapon is obtainable and SR dupes come quickly.' },
  'denice': { tier: 'B', rarity: 'SR', reason: 'A fifteen-hit ultimate sounds fun until you see Random targeting. The Petrify-synergy active is real, the base multipliers are not.' },
  'ruo-lan': { tier: 'B', rarity: 'SSR', reason: 'All value is locked behind Earth allies: Earth ATK Up 20%, shields and damage procs for Earth teams only. Off-element she is a plain Sniper.' },
  'bernardo': { tier: 'B', rarity: 'SSR', reason: 'Support numbers too small to matter (a 5% Damage Up loop) and a Petrify chance that is Medium at best. The attitude is carrying the kit.' },
  'belle': { tier: 'B', rarity: 'SR', reason: 'A healer on a Sniper frame whose numbers lose to Jessica and Sugimoto Arina at every line. The Evasion quirks do not save the slot. Early on she is a real pick: her weapon is obtainable and SR dupes let you fully max her while your SSRs are still class-starved.' },
  'belle-clumsy-cowgirl': { tier: 'B', rarity: 'SSR', reason: 'Physical Spread support with tiny heals and a five-hit all-targets ultimate. Fun, forgettable.' },
  'connie': { tier: 'B', rarity: 'SSR', reason: 'An anti-healer: her loop and active aim at the lowest-HP targets and stack Healing Down with Healing Received Down 25%, and the awakened passive gives the whole team ATK SPD Up 23%. The ultimate\u0027s Abyss pursuit needs the Ebon status, which nobody on the roster applies yet. Real PvP utility, modest raw numbers.' },
  'qing-yin': { tier: 'S', rarity: 'SSR', reason: 'CC-and-burst Breaker: a 6s loop that stuns at Extremely High chance, an 827% double-strike ultimate with Attack Up 15% and ATK SPD Up 30% attached, and Wind Res Down 12% shredding. Every line prioritizes Electrocuted targets, so she wants Li Mu or Ruby applying Shock, and the awakened passives spread Crit Chance 14% and Energy DMG Up 6% to the team.' },
  'leng-zhen': { tier: 'S', rarity: 'SSR', reason: 'A second energy battery with Freeze attached: her active injects +2 team EN per hit (+2.5 awakened, on her normal attack too), the loop lands three Freeze M rolls every 6s, and the ultimate is a 900% three-hit with Freeze Hit Rate Up 35% and a freeze on every strike. Awakened passive adds party Skill Damage Up 12.5%. Random targeting keeps the numbers unfocused, but Freeze feeds the Ice Break core.' },
};

const RARITY_RANK = { SSR: 0, SR: 1 };

const placementOf = slug =>
  GSA_TIER_PLACEMENTS[slug] || {
    tier: 'C',
    rarity: null,
    reason: 'No written assessment yet. Defaulted to C.',
  };

// Job sections -> tier rows -> compact character cards (reasons stay here in
// the data file, they are not rendered on the page, matching the majo list).
export const gsaTierByJob = GSA_JOB_SECTIONS.concat([{
  // characters with no job data yet would land here
  job: 'Unclassified',
  zh: '未分類',
}]).map(({ job, zh, icon }) => ({
  job,
  zh,
  icon,
  tiers: GSA_TIERS.map(({ tier, color }) => ({
    tier,
    color,
    characters: gsaCharacters
      .filter(c => (c.job ? c.job.name === job : job === 'Unclassified') && placementOf(c.slug).tier === tier)
      .map(c => ({ ...c, placement: placementOf(c.slug) }))
      .sort((a, b) =>
        ((RARITY_RANK[placementOf(a.slug).rarity] ?? 9) - (RARITY_RANK[placementOf(b.slug).rarity] ?? 9)) ||
        a.name.localeCompare(b.name)
      ),
  })).filter(t => t.characters.length > 0),
})).filter(g => g.tiers.length > 0);

if (import.meta.env.DEV) {
  const unplaced = gsaCharacters.filter(c => !GSA_TIER_PLACEMENTS[c.slug]);
  if (unplaced.length) {
    console.warn('[gsa-tier-list] characters without a placement (rendered as C):', unplaced.map(c => c.slug));
  }
}
