// Gene-Sys: Adam tier list: kit-based assessment from the decrypted skill
// numbers (multipliers, cooldowns, EN costs, buff values). Ladder follows the
// house convention: SSS reserved for broken units, SS = meta-defining,
// S = strong, A = solid, B = fringe, C = unrated or pending data.
// Rarity on the cards is derived from the gacha rate buckets (group 3 = SR,
// group 4 = SSR); the SSR side is confirmed in-game, SR labels are implied.
// Day-one launch assessment: no community consensus exists yet, dupes and
// star upgrades are not factored.

export const GSA_TIER_UPDATED = '2026-09-17';

export const GSA_TIER_META = [
  { id: 'SSS', label: 'SSS', note: 'Reserved. Nothing is broken yet.' },
  { id: 'SS', label: 'SS', note: 'Meta-defining. Build your team around them.' },
  { id: 'S', label: 'S', note: 'Strong picks that carry their slot.' },
  { id: 'A', label: 'A', note: 'Solid, playable, no regrets.' },
  { id: 'B', label: 'B', note: 'Fringe. Needs a niche, a partner or dupes.' },
  { id: 'C', label: 'C', note: 'Awaiting data or thoroughly outclassed.' },
];

export const GSA_TIER_PLACEMENTS = {
  'kurosawa-shion': { tier: 'SS', rarity: 'SR', reason: 'The energy battery. Her loop refills 4.5 team EN every 6 seconds, her ultimate grants the whole party EN Gain Up 45% for 24s, and her active stacks up to 15% party Basic Damage three times. Every ultimate in the team comes online faster with her on the field.' },
  'jessica': { tier: 'SS', rarity: 'SSR', reason: 'Best defensive support: a 795% party shield on an 8s cooldown, constant top-up healing on her loop and passive, and an ultimate that cleanses all debuffs and applies a 1285% party shield.' },
  'ogino-rui': { tier: 'SS', rarity: 'SSR', reason: 'Highest raw damage in the roster: 850% combined rotation, a permanent self Physical DMG Up 20% and Crit 18% loop, self-healing, and a five-hit 170% ultimate.' },
  'victoria': { tier: 'SS', rarity: 'SSR', reason: 'Amplifier and carry in one: her loop grants Crit DMG Up 40% to the two highest-ATK allies, and her ultimate brings EN Gain 45%, a 425% strike to up to 3 targets and a Petrify finisher.' },
  'lin-lan': { tier: 'SS', rarity: 'SR', reason: 'The Guardian partner: 1785% shields on a 10s cooldown, a loop that cuts basic attack damage taken by 35%, and a 3700% ultimate shield. Rating assumes you run a Guardian, which you should.' },
  'adele': { tier: 'S', rarity: 'SR', reason: 'Best SR damage dealer: a 660% ultimate, a self Attack Up 20% and ACC loop, plus Burn and Wind ATK Down utility. Strong enough that dupes are a bonus, not a requirement.' },
  'yulia': { tier: 'S', rarity: 'SR', reason: 'Dark nuker: a 615% single-target ultimate with Dark Res Down follow-up, Light ATK Down debuffs for the mirror matchup, and Evasion uptime for survivability.' },
  'thalia': { tier: 'S', rarity: 'SR', reason: 'Boss-killer: everything targets the highest-ATK enemy, her loop shreds their Basic Damage by 20%, a passive proc gives her Basic Damage Up 40%, and the ultimate adds Knockdown.' },
  'milena': { tier: 'S', rarity: 'SR', reason: 'A ten-hit 800% ultimate on a single target, Knockdown and Petrify control, and a passive that shreds Guardian-type blocks. The SR you can actually dupe without guilt.' },
  'hijikata-chizuru': { tier: 'S', rarity: 'SSR', reason: 'The best tank: Physical damage taken cut 20%, EN Gain 25% for the team, a Petrify on a 4s loop and a five-hit AoE ultimate with 35% Petrify rate. Deals real damage while holding the line.' },
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
  'chloe': { tier: 'A', rarity: 'SR', reason: 'Her thirteen-hit 585% ultimate is sneaky good, and the self-inflicted Pain cost is manageable behind any healing support.' },
  'charlotte': { tier: 'A', rarity: 'SR', reason: 'Shield-tank hybrid: Block procs on her active, a nine-hit ultimate that applies a 2900% shield on hit, and passive self-shielding. Fine wherever a second Guardian fits.' },
  'mudia': { tier: 'A', rarity: 'SR', reason: 'Lifesteal Guardian: heals on her active, on hits and on every ultimate strike, bleeds on loop, and buffs her own Max HP. Hard to kill, moderate damage.' },
  'amber': { tier: 'A', rarity: 'SR', reason: 'The self-sufficient tank: 1920% loop shields, self-cleanse with a 1000% heal, Max HP stacking and a reflecting 2900% ultimate shield. Needs no support to hold the line.' },
  'liz': { tier: 'A', rarity: 'SSR', reason: 'Half tank, half support: a 960% party-wide shield ultimate with Fire ATK Down 10% attached, self-sustain on loop and stacking ATK SPD when hit.' },
  'rachel': { tier: 'A', rarity: 'SR', reason: 'Utility Breaker: her loop interrupts enemy skills from range, the ultimate is a line nuke with a conditional execute, and kills debuff enemy Snipers and Breakers by 15%.' },
  'katya': { tier: 'A', rarity: 'SR', reason: 'Freeze-and-punish support: multi-hit forward-area attacks that trigger Ice Break pursuits on frozen targets, plus ACC Down and Water ATK self-buffs. Wants freeze partners.' },
  'lin-lin': { tier: 'A', rarity: 'SSR', reason: 'Fire debuffer and cleanup crew: Fire Res Down 8%, Burn on loop, Crit Chance cuts, and everything aims at the lowest-HP target. The executioner slot for fire teams.' },
  'ruby': { tier: 'A', rarity: 'SSR', reason: 'Wildcard: 900% combined damage and an Electrocute-focused ultimate with 30% hit rate up, but on a Support frame whose ATK scaling could not be verified from the tables. Promising, unproven.' },
  'theodore': { tier: 'B', rarity: 'SR', reason: 'The protagonist starter: functional Fire shred and a serviceable eight-hit ultimate, but every limited unit outclasses him. He is free, be kind.' },
  'denice': { tier: 'B', rarity: 'SR', reason: 'A fifteen-hit ultimate sounds fun until you see Random targeting. The Petrify-synergy active is real, the base multipliers are not.' },
  'ruo-lan': { tier: 'B', rarity: 'SR', reason: 'All value is locked behind Earth allies: Earth ATK Up 20%, shields and damage procs for Earth teams only. Off-element she is a plain Sniper.' },
  'bernardo': { tier: 'B', rarity: 'SSR', reason: 'Support numbers too small to matter (a 5% Damage Up loop) and a Petrify chance that is Medium at best. The attitude is carrying the kit.' },
  'belle': { tier: 'B', rarity: 'SR', reason: 'A healer on a Sniper frame whose numbers lose to Jessica and Sugimoto Arina at every line. The Evasion quirks do not save the slot.' },
  'belle-clumsy-cowgirl': { tier: 'B', rarity: 'SSR', reason: 'Physical Spread support with tiny heals and a five-hit all-targets ultimate. Fun, forgettable.' },
  'connie': { tier: 'C', rarity: 'SSR', reason: 'Her kit text is not readable in the current data tables, so she cannot be scored yet. The assessment lands when the tables do.' },
};
