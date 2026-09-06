// Generates the 31 missing Zone Nova character build files (src/data/zone-nova/character-builds/<slug>.js)
// from live character data + tier lists + runes. Editorial layer (buildType/descriptions/reasons/synergy)
// is hand-curated per slug below; everything else (skill text, awakening text, card stats/effects, set bonuses)
// is pulled from the data files so it stays accurate. Run: bun gen_character_builds.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { ZONE_NOVA_CHARACTERS } from './src/data/zone-nova/characters.js';
import { ZONE_NOVA_MEMORIES } from './src/data/zone-nova/memories.js';
import { RUNE_SETS } from './src/data/zone-nova/runes.js';

const SLUGS = [
  'anubis', 'arthur', 'bastet', 'bedivere', 'belphegar', 'bors', 'cleopatra', 'erika',
  'greed-mammon', 'jeanne-darc', 'kela', 'keller', 'lancelot', 'leviathan', 'lavinia',
  'lyra', 'medusa', 'merlin', 'mordred', 'nephthys', 'nini', 'poseidon', 'rose', 'set',
  'shanna', 'shu', 'snow-girl', 'tefnut', 'veronica', 'yuis', 'zashiki-warashi',
];

const camelize = (s) => s.replace(/-(.)/g, (_, c) => c.toUpperCase());
const fmt = (n) => Number(n).toLocaleString('en-US');
const clean = (s) => (s || '').replace(/\r/g, '').replace(/<\/?color=[^>]*>/g, '').trim();

// ---------------------------------------------------------------------------
// Editorial layer — hand-curated, kit-grounded
// ---------------------------------------------------------------------------
const E = {
  anubis: {
    bt: 'DoT-Scaling Chaos Healer',
    desc: 'A healer who wants the enemy to burn. Every skill applies [Underworld Burn] stacks, and once a target reaches 20 DoT stacks his passive heals the ENTIRE team and unlocks an [Enhanced ULT] that heals everyone plus a 10% damage-taken reduction. He scales off ATK, so he does real chip damage while healing. Pair him with DoT stackers (Odin, Hera, Cleopatra, Tefnut) so targets cross the 20-stack threshold fast and his passive fires constantly.',
    order: ['ultimate', 'passive', 'auto', 'normal'],
    reasons: {
      ultimate: 'Team-wide healing that scales hardest with level, and the Enhanced version adds a 10% damage-taken reduction',
      passive: 'The engine — 20+ DoT stacks on a target triggers a full-team heal AND an Enhanced ULT charge',
      auto: 'Applies [Underworld Burn] stacks that feed the passive threshold',
    },
    runes: { rec: ['Daleth', 'Zane'], alt: ['Alpha', 'Daleth'], buildNote: 'Healing scales off his ATK, so Daleth 4-piece (healing +10%, battle-start energy) with HP keeps him alive; the Alpha alternative leans into his damage side.' },
    alts: ['The Beauty of Heikyo Castle', 'A Break Amidst the Hustle', 'Ancient Fatigue Relief'],
    ownNote: 'Exclusive card — +50% healing and every heal grants the target +40% ATK for 3s, turning his healing rotation into team damage.',
    syn: ['Odin', 'Hera', 'Cleopatra', 'Bors'],
    synNote: 'DoT teams keep his 20-stack passive triggering; Bors keeps the whole comp alive longer.',
  },
  arthur: {
    bt: 'Supporter-Synergy Holy Crit DPS',
    desc: 'Arthur is an [Enhanced ULT] attacker: whenever a Supporter casts their ULT, he gets a 5-second window to fire an Enhanced ULT (720% + a 36% ATK self-buff). His auto stacks Crit DMG per target hit and his passive stacks ATK/DEF after every ULT. His damage ceiling literally depends on having a Supporter in the team — run him with one and he never stops casting.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Alpha', 'Beth'], alt: ['Beth', 'Epsilon'] },
    alts: ['The Way of Revenge', 'Hero Never Resting', 'Awkward Appearance'],
    ownNote: 'Exclusive card — +40% ATK, and after a team Supporter ULTs his ULT damage +40% for 5s. Directly multiplies his Enhanced ULT windows.',
    syn: ['Sharin', 'Tamamo-no-Mae', 'Bors', 'Naiya'],
    synNote: 'Any Supporter ULT unlocks his Enhanced ULT — more Supporter ULTs means more 720% nukes.',
  },
  bastet: {
    bt: 'Normal-Attack AOE Ranger',
    desc: 'Bastet is a cheap wind AOE carry. Her passive makes every 5th Normal Attack a 120% AOE explosion, and both her auto and ULT hit the target plus everything within 4 meters. She is SR-easy to build and shreds wave content; her single-target falls off against bosses, which is where her crit gear has to carry.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Every 5th Normal Attack becomes a 120% AOE — her real clearing tool',
      ultimate: 'Cheap (EC 5) 120% AOE burst on a 4-meter radius',
      auto: '72% AOE filler on a 5s cooldown',
    },
    nl: 'Level 10',
    runes: { rec: ['Anemos', 'Beth'], alt: ['Alpha', 'Beth'] },
    alts: ['During Military Training', 'Awkward Appearance', 'Hero Never Resting'],
    syn: ['Freya', 'Athena', 'Bors'],
    synNote: 'Normal-attack teams (Freya/Athena buffs) maximize her passive AOE procs.',
  },
  bedivere: {
    bt: 'DEF-Shred Ice Disruptor',
    desc: 'Bedivere deletes enemy defenses: his auto hits a fan for 235.6% ATK and shreds 64.8% DEF for 6 seconds, and his ULT slams a 7m rectangle for 647.8% ATK while cutting the target\'s total damage dealt. His passive punishes attackers with [Ice Lock] stacks that slow their cooldowns and, at 30 stacks, drain 2 energy. He amplifies your whole team\'s damage just by showing up.',
    order: ['auto', 'ultimate', 'passive', 'normal'],
    reasons: {
      auto: '235.6% fan hit with a −64.8% DEF shred on a 6s cooldown — his core debuff and damage in one',
      ultimate: '647.8% AOE plus a −123.7% total damage dealt cut and the [Winter Domain] zone',
      passive: '[Ice Lock] slows attacker cooldowns and drains 2 energy at 30 stacks',
    },
    runes: { rec: ['Iota', 'Beth'], alt: ['Kryos', 'Iota'] },
    alts: ['Flower of the Battlefield', 'The Reason for Slumber'],
    ownNote: 'Exclusive card — +40% ATK and his ULT applies [Frontline Edict] DEF shred in an area, stacking even more armor deletion.',
    syn: ['Nephthys', 'Keller', 'Bors'],
    synNote: 'His DEF shred multiplies physical damage dealers like Nephthys and Keller.',
  },
  belphegar: {
    bt: 'Slow & Pacify Control Disruptor',
    desc: 'Belphegar is a pure control specialist: his ULT raises ALL enemy skill cooldowns by 58% for 10 seconds, his auto cuts the strongest enemy\'s Crit Rate and Crit DMG by 24%, and his passive applies [Sloth] (−58% Attack Speed) with every skill and ULT. In PvP he turns the enemy team off; in PvE he is situational but trivializes rage-timer content.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Skota', 'Epsilon'], alt: ['Iota', 'Skota'] },
    alts: ['The Reason for Slumber', 'Flower of the Battlefield'],
    syn: ['Nini', 'Gluttony - Beelzebub', 'Erika'],
    synNote: 'Stack him with other control Disruptors to chain-cooldown-lock enemy teams in PvP.',
  },
  bors: {
    bt: 'Offensive Team Supporter',
    desc: 'Bors is the game\'s premier offensive support. His ULT deals 588.9% AOE and grants the whole team +171.1% ATK and +73.3% damage dealt for 10 seconds, his auto hands [Rage] (ATK + cooldown reduction) to your two hardest hitters, and his passive feeds the team energy plus [Berserk Blood] stacks on every special attack. He single-handedly doubles a DPS carry\'s output.',
    order: ['ultimate', 'passive', 'auto', 'normal'],
    reasons: {
      ultimate: '+171.1% ATK / +73.3% damage to the ENTIRE team — the strongest offensive burst in the game',
      passive: 'Battle-start energy, [Berserk Blood] stacks every 3s and on every ally special attack',
      auto: '[Rage] on your two highest-ATK allies — stacking ATK + cooldown reduction',
    },
    runes: { rec: ['Kappa', 'Epsilon'], alt: ['Epsilon', 'Beth'], pos4: 'Attack (%) / HP (%)', pos5: 'Fire Attribute Damage (%)', pos6: 'HP (%)', buildNote: 'Kappa 4-piece rushes team energy so the whole comp ults sooner — his EC 3 ULT is the win condition. He also deals a real 588.9% AOE himself, so Fire damage is not wasted.' },
    alts: ['Sleep Treasure', 'The Loneliest Moment'],
    ownNote: 'Exclusive card — +32% ATK/DEF/HP for the whole party on equip, and every skill he casts adds +6% team max HP (up to 60%). Pure team stat bloat.',
    syn: ['Keller', 'Nephthys', 'Yuis', 'Medusa'],
    synNote: 'Give the +171% ATK window to a transformed Keller, a 5-stack Nephthys, or Zeus\'s sword rain.',
  },
  cleopatra: {
    bt: 'DoT-Stacking Chaos Nuker',
    desc: 'Cleopatra converts DoT stacks into raw damage: her ULT deals 480% to all targets PLUS 48% per DoT stack on each (up to 20 extra hits — that is up to 1,440% per target), and her passive fires free 120% hits and applies [Foul Harvest] whenever an ally ULTs. Stack her own [Foul Harvest] DoT first, then let the ULT detonate everything.',
    order: ['ultimate', 'passive', 'auto', 'normal'],
    runes: { rec: ['Gimel', 'Beth'], alt: ['Skota', 'Gimel'] },
    alts: ['A Break Amidst the Hustle', 'Secret Room Livestream'],
    ownNote: 'Exclusive card — +40% ATK and every skill hit applies a [Corrosion] Chaos DoT, pre-stacking her ULT multiplier.',
    syn: ['Anubis', 'Odin', 'Hera'],
    synNote: 'DoT teams pre-stack her ULT bonus; Anubis heals off the same 20-stack threshold.',
  },
  erika: {
    bt: 'Anti-Shield Disciplinarian',
    desc: 'Erika is the anti-shield/anti-heal specialist: targets with shields get flagged [Violation Vulnerability] (+11.8% damage taken), her ULT can INTERRUPT a casting skill while applying [Disciplinary Action], and her memory card cuts enemy healing and shield gain on every hit. Against shielded bosses and sustain comps she deletes their defenses — in PvE she is a top-tier SS debuffer.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Iota', 'Beth'], alt: ['Anemos', 'Iota'] },
    alts: ['Flower of the Battlefield', 'The Reason for Slumber'],
    ownNote: 'Exclusive card — +40% ATK and every skill/ULT hit reduces the target\'s healing received AND shield gain. The full anti-sustain package.',
    syn: ['Nephthys', 'Keller', 'Bors'],
    synNote: 'Her amplifiers stack with Nephthys\'s anti-shield passive and Keller\'s [icefang] shield-gain shred.',
  },
  'greed-mammon': {
    bt: 'Supporter-Synergy AOE Nuker',
    desc: 'Greed Mammon is a budget Enhanced-ULT nuker: after a Supporter ULTs he can fire an Enhanced ULT (240% AOE), and his passive adds +29% damage after every Enhanced ULT cast. Simple loop, real AOE output for an SR — his damage is entirely gated on running a Supporter, so never field him without one.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Skota', 'Beth'], alt: ['Beth', 'Skota'] },
    alts: ['The Way of Revenge', 'Summer Nap Time'],
    syn: ['Sharin', 'Zashiki-warashi', 'Bors'],
    synNote: 'Any Supporter ULT unlocks his Enhanced ULT — the cheaper the Supporter\'s ULT, the more he nukes.',
  },
  'jeanne-darc': {
    bt: 'Revival Sustain Healer',
    desc: 'Jeanne is the safety-net healer: her passive banks [holy Healing] stacks from her ULT and auto-converts them into reactive heals when allies take damage — and when an ally would die, she REVIVES them after 5 seconds (once per battle). Her ULT heals the whole team for 91.7% ATK + flat and her auto triple-heals the lowest ally. In content with burst damage, her revive is the difference between a clear and a wipe.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Reactive healing on every ally hit PLUS a once-per-battle revive — her defining skill',
      ultimate: 'Full-team heal that banks 3 [holy Healing] stacks for the passive',
      auto: 'Three consecutive heals on the lowest-HP ally',
    },
    runes: { rec: ['Daleth', 'Zane'], alt: ['Zane', 'Daleth'] },
    alts: ['The Beauty of Heikyo Castle', 'Realm of Solitude'],
    ownNote: 'Exclusive card — +50% healing, and while casting she gains up to +75% additional healing. Turns her cast windows into massive bursts.',
    syn: ['Keller', 'Wrath-Samael', 'Bors'],
    synNote: 'Her revive protects your carry through boss burst phases nothing else covers.',
  },
  kela: {
    bt: 'Budget Emergency Healer',
    desc: 'Kela is a straightforward SR spot-healer: her auto and ULT both dump big heals into the lowest-HP ally, and her passive adds +24% healing when that ally is under 50% HP. No revive, no team utility — just cheap, efficient single-target triage that keeps a tank or carry alive through heavy focus.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Daleth', 'Zane'], alt: ['Zane', 'Daleth'] },
    alts: ['Realm of Solitude', 'The Beauty of Heikyo Castle'],
    syn: ['Mordred', 'Lancelot', 'Shanna'],
  },
  keller: {
    bt: 'Normal-Attack Ice Giant Carry',
    desc: 'Keller is a SSS normal-attack carry who transforms: his ULT deals 1711.1% AOE and puts him into [Ice Giant] (+172.2% ATK, +73.3% max HP, +344.4% DEF, +58.9% all resist), his auto stacks normal-attack damage and cooldown reduction, and every normal hit applies [icefang] (−shield gain, −healing) and [Shatter] (−9.8% DEF, up to 10). In Ice Giant form his normals ARE the damage — and they disable enemy sustain while shredding armor.',
    order: ['auto', 'ultimate', 'passive', 'normal'],
    reasons: {
      auto: '[Dance of the Glacier] stacks +29.4% normal attack damage and −12.2% normal cooldown, up to 5 layers — the engine of the build',
      ultimate: '1711.1% AOE nuke PLUS the [Ice Giant] transformation that defines his carry phase',
      passive: 'Every normal hit shreds DEF (−9.8%, 10 stacks) and cuts enemy shield gain/healing',
    },
    nl: 'Level 10',
    runes: { rec: ['Kryos', 'Beth'], alt: ['Alpha', 'Beth'], buildNote: 'Kryos 4-piece is made for him: it converts his normal-attack cooldown reduction (which he stacks constantly) directly into Frost damage and Crit DMG. Alpha 4-piece is the simpler fallback.' },
    alts: ['During Military Training', 'Awkward Appearance', 'Hero Never Resting'],
    ownNote: 'Exclusive card — +70% ATK, +90% Crit DMG and +100% normal attack damage, with an extra 75% hit every 3rd normal. His BiS by a mile.',
    syn: ['Bors', 'Medusa', 'Veronica'],
    synNote: 'Bors\'s +171% ATK window during Ice Giant form is the strongest combo in the game.',
  },
  lancelot: {
    bt: 'HP-Scaling Shield Tank',
    desc: 'Lancelot is an SR tank who scales everything off max HP: his normal attack deals 12% max HP damage, his auto shields him for 6.1% max HP (stacking to 30%), and his ULT cuts ALL allies\' damage taken by 24% for 15 seconds while diving the enemy backline. His passive regens 4.8% max HP per second when he drops below half. Cheap, durable, and the ULT is a genuine team-wide damage cut.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Zane', 'Poki'], alt: ['Poki', 'Zane'], pos4: 'HP (%)', pos6: 'HP (%)' },
    alts: ['Drowning Lake Knight', 'Pennie Trying on New Clothes'],
    syn: ['Tefnut', 'Kela', 'Shu'],
  },
  leviathan: {
    bt: 'Pursue-Trigger Crit Attacker',
    desc: 'Leviathan is a Pursue engine: whenever ANY ally\'s skill hits an enemy, his passive consumes a [Mark] to fire a 143.9% Pursue attack, and his ULT deals 600% AND triggers a free Pursue. His auto banks 2 Marks per cast. In a busy team he attacks constantly without ever taking a turn — pair him with fast skill-cycling allies and Zeus, who gains stacks from every Pursue.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Ally skill hits → free 143.9% Pursue attacks. The busier the team, the more he attacks',
      ultimate: '600% single-target nuke plus a free Pursue that does not consume a [Mark]',
      auto: 'Banks 2 [Mark] stacks per cast to fuel the passive',
    },
    runes: { rec: ['Het', 'Beth'], alt: ['Anemos', 'Beth'], buildNote: 'Het 4-piece (Pursue Damage +20%, and Pursuing grants +15% Crit Rate) is literally his kit; Anemos is the raw damage alternative.' },
    alts: ['Perverted Little Nurse', 'Hero Never Resting'],
    ownNote: 'Themed SR card — +36% Crit Rate for 10s after every Pursue. He pursues constantly, so this is near-permanent.',
    syn: ['Yuis', 'Freya', 'Athena'],
    synNote: 'Zeus gains 2 [Celestial Pivot] stacks per Pursue — Leviathan is one of his best batteries.',
  },
  lavinia: {
    bt: 'Crit-Scaling Battle Healer',
    desc: 'Lavinia heals by critting: every 1% Crit Rate becomes +0.5% healing, every crit from any of her attacks heals the lowest ally for 24% ATK, and her auto/ULT are 5- and 4-stage damage casts that heal after EVERY stage (720%/960% total damage). She is a healer who plays like a DPS — build her crit and Fire damage, because her damage IS her healing.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Crit Rate converts to Healing at 0.5% per 1%, and every crit heals the lowest ally — the whole build lives here',
      ultimate: '960% total damage in 4 stages, healing after each stage, with an interrupt on the first',
      auto: '720% total damage in 5 stages with a heal after each — her consistent healing rotation',
    },
    runes: { rec: ['Daleth', 'Beth'], alt: ['Beth', 'Daleth'], pos4: 'Healing Effectiveness (%) / Critical Rate (%)', pos5: 'Fire Attribute Damage (%)', buildNote: 'Unusual for a healer: Beth 2-piece crit rate is a HEALING stat for her, and Fire damage amplifies her damage-heal hybrid casts.' },
    alts: ['Hero Never Resting', 'The Beauty of Heikyo Castle'],
    ownNote: 'Exclusive card — +34% Crit Rate, crits boost her healing +50%, and every heal grants her +ATK. Perfectly mirrors her kit.',
    syn: ['Set', 'Nephthys', 'Bors'],
  },
  lyra: {
    bt: 'Mark-Detonation Fire Duelist',
    desc: 'Lyra is a fire mark-detonator: her auto slams 480% and applies [fire Mark], and her ULT deals 360% — then consumes the Mark to fire a SECOND 360% line through the target and everything behind it. Her passive grants up to +76% ATK on a full field. Simple, brutal single-target rotation with a built-in AoE pierce on marked targets.',
    order: ['auto', 'ultimate', 'passive', 'normal'],
    reasons: {
      auto: '480% single hit PLUS applies [fire Mark] — half of her ULT combo',
      ultimate: '360%, and consuming [fire Mark] adds a second 360% piercing line (720% total)',
      passive: '+19% ATK per enemy on the field, up to 4 stacks',
    },
    runes: { rec: ['Hepha', 'Beth'], alt: ['Beth', 'Hepha'] },
    alts: ['Hero Never Resting', 'Summer Nap Time'],
    ownNote: 'Exclusive card — +40% ULT damage plus +10% more per enemy on field. Straight multiplier on her 720% combo.',
    syn: ['Sharin', 'Bors', 'Veronica'],
  },
  medusa: {
    bt: 'Revive-Shield Sustain Healer',
    desc: 'Medusa is a UR healer built around the [Resurrection Coffin]: at battle start every ally gains +24.4% max HP, a 30%-HP shield, and a revive charge (they resurrect at 150% HP when they would die). Her ULT enters [Stone Princess] form — team-wide per-second healing, shields, and enhanced normal attacks — while her auto sustains 43.9% ATK + 350 HP per second for 8s and stacks team DEF. She makes teams unkillable in burst content.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Battle-start team shields, +24.4% max HP and the [Resurrection Coffin] revive — the single strongest defensive passive in the game',
      ultimate: '[Stone Princess] form: team heal + shield every second for 5s and enhanced normals',
      auto: '8 seconds of 43.9% ATK + 350 HP/s team healing plus stacking [Rock Scale] DEF',
    },
    runes: { rec: ['Poki', 'Daleth'], alt: ['Daleth', 'Poki'], pos4: 'HP (%) / Healing Effectiveness (%)', buildNote: 'Poki 4-piece (+20% shield effect) amplifies her opening 30%-HP shields and every shield her ULT pumps out.' },
    alts: ['Drowning Lake Knight', 'The Beauty of Heikyo Castle'],
    ownNote: 'Exclusive card — +33.5% ATK and +40% DEF/HP for ALL allies on equip, scaling further on battle start. Team-wide stat bloat.',
    syn: ['Keller', 'Bors', 'Nephthys'],
    synNote: 'Her revive + shields let a transformed Keller or 5-stack Nephthys play with zero defensive attention.',
  },
  merlin: {
    bt: 'Enhanced-ULT Burst Attacker',
    desc: 'Merlin is a one-target nuke machine: his auto deals 780% and applies [Mark] (+20% ULT damage on marked targets), his ULT hits 1080% — 1200% enhanced after a Supporter ULT — and his passive adds a free 120% fire hit on every ULT crit. He is the classic "hold his ULT for the Supporter window" attacker, and with crit built he chains bonus hits endlessly.',
    order: ['auto', 'ultimate', 'passive', 'normal'],
    reasons: {
      auto: '780% single hit plus [Mark] — marked targets take +20% more from his ULT',
      ultimate: '1080% (1200% Enhanced after a Supporter ULT) — one of the highest single-target multipliers',
      passive: 'Every ULT crit fires a bonus 120% hit',
    },
    runes: { rec: ['Hepha', 'Beth'], alt: ['Beth', 'Hepha'] },
    alts: ['The Way of Revenge', 'Hero Never Resting'],
    ownNote: 'Exclusive card — +40% ATK and +40% ULT damage against lone targets. Boss-room multiplier on his already-huge ULT.',
    syn: ['Sharin', 'Bors', 'Tamamo-no-Mae'],
    synNote: 'A Supporter ULT unlocks his 1200% Enhanced ULT — always cycle them together.',
  },
  mordred: {
    bt: 'HP-Scaling Sustain Warrior',
    desc: 'Mordred is a self-sustaining bruiser who scales off max HP: his ULT heals him for 36% max HP while dealing 144% max HP damage, his auto deals 36% max HP, and his passive lifesteals 5.8% max HP per normal attack (plus +60% healing received under half HP). He is hard to kill, hits surprisingly hard, and never needs a healer\'s attention.',
    order: ['ultimate', 'passive', 'auto', 'normal'],
    runes: { rec: ['Zane', 'Alpha'], alt: ['Alpha', 'Zane'], pos4: 'HP (%) / Attack (%)', pos6: 'HP (%)' },
    alts: ['Behind the Laziness', 'Drowning Lake Knight'],
    syn: ['Kela', 'Jeanne D Arc', 'Lancelot'],
  },
  nephthys: {
    bt: 'Anti-Shield Fire AOE Destroyer',
    desc: 'Nephthys is a SSS fire AOE destroyer who punishes shields: her passive deals +36.7% damage to shielded enemies (and +75.6% more at 5 [Hellfire Sin] stacks), her auto nukes ALL enemies for 488.9% while stacking [Hellfire Sin], and her ULT channels 12 meteor hits that each shred DEF. She deletes shielded packs and bosses while stacking her own damage amplifier.',
    order: ['auto', 'ultimate', 'passive', 'normal'],
    reasons: {
      auto: '488.9% to ALL enemies plus [Hellfire Sin] stacks — damage and her amplifier in one button',
      ultimate: '12 meteor hits over 6s, each applying −1.25% DEF [Molten Armor]',
      passive: '+36.7% damage vs shielded targets, +75.6% at 5 [Hellfire Sin] stacks',
    },
    runes: { rec: ['Hepha', 'Beth'], alt: ['Beth', 'Hepha'] },
    alts: ['Hero Never Resting', 'Summer Nap Time'],
    ownNote: 'Exclusive card — +60% ATK, +50% ULT damage and +24% ULT defense penetration. Every line multiplies her meteor channel.',
    syn: ['Bors', 'Veronica', 'Medusa'],
    synNote: 'Bors\'s ATK window on top of her 5-stack passive is her peak damage combo.',
  },
  nini: {
    bt: 'Vulnerability Debuffer',
    desc: 'Nini is an SR amplifier: her ULT applies [ice Erosion] (+38% damage taken, 10s) to a front AoE, her auto stacks [Weakness] (−17.4% enemy damage dealt at 3 stacks), and her passive gives her +38% damage against any debuffed target. She makes the whole team hit harder and rewards herself for it — a solid budget Disruptor for debuff-heavy comps.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Iota', 'Epsilon'], alt: ['Epsilon', 'Iota'] },
    alts: ['Flower of the Battlefield', 'The Reason for Slumber'],
    ownNote: 'Themed SR card — +20% damage per debuff on the target (up to 3). She stacks debuffs herself, so it self-synergizes.',
    syn: ['Belphegar', 'Shu', 'Keller'],
  },
  poseidon: {
    bt: 'Max-HP Sea Wall Tank',
    desc: 'Poseidon is an SS tank who becomes a wall: her ULT grants +123.7% max HP and raises a moving [Sea Wall] that gives allies behind it block rate and damage reduction, her passive stacks [Tide Law] (+27% DEF each, up to 12) and opens in [High Tide] immediately, and her auto permanently stacks +15.2% max HP while dragging ranged enemies closer. Positioning matters — your team stands behind the wall.',
    order: ['ultimate', 'passive', 'auto', 'normal'],
    reasons: {
      ultimate: '[High Tide]: +123.7% max HP and the [Sea Wall] that shields everyone behind it',
      passive: '[Tide Law] stacks up to +324% DEF across the fight and opens in [High Tide] at battle start',
      auto: 'Permanent +15.2% max HP stacking (8x) plus a 22% max HP hit that pulls ranged enemies in',
    },
    runes: { rec: ['Zane', 'Poki'], alt: ['Poki', 'Zane'], pos4: 'HP (%) / Defense (%)', pos6: 'HP (%)', buildNote: 'Everything scales off max HP — Zane 4-piece (HP +8%, post-ULT damage reduction) keeps the wall standing through the whole [High Tide].' },
    alts: ['Drowning Lake Knight', 'Pennie Trying on New Clothes'],
    ownNote: 'Exclusive card — +40% max HP and her ULT grants the whole team [Tideguard]. More HP is more Sea Wall for everyone.',
    syn: ['Nephthys', 'Keller', 'Bors'],
  },
  rose: {
    bt: 'Attack-Speed Ice Gunner',
    desc: 'Rose is an SR attack-speed carry: her ULT enters [ice Cannon] state (+58% Attack Speed, enhanced AOE normal attacks and skills for 10s) and her passive stacks +2.4% Crit Rate per normal attack up to 20 times (+48% total). During her ULT window she sprays enhanced AoEs — a genuinely strong budget DPS if you feed her attack speed and crit.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Up to +48% Crit Rate from normal attacks — free crit scaling the longer she shoots',
      ultimate: '[ice Cannon]: +58% Attack Speed and enhanced AoE normals/skills for 10 seconds',
      auto: '180% hit that becomes a 4-meter AoE during [ice Cannon]',
    },
    nl: 'Level 10',
    runes: { rec: ['Kryos', 'Beth'], alt: ['Alpha', 'Beth'] },
    alts: ['During Military Training', 'Awkward Appearance'],
    syn: ['Freya', 'Athena', 'Bors'],
  },
  set: {
    bt: 'Infernal-Fire Multi-Stage Attacker',
    desc: 'Set is a SSS multi-stage attacker: his ULT chains up to three stages (512.8% and rising) based on [Infernal fire] stacks, his passive grants a stack per hit (up to 50) and triggers free Pursues against lone targets every 5 stacks, and his auto dashes behind the enemy line for 412.2%. Against bosses he becomes a self-feeding Pursue machine — the more he hits, the more he hits.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Every hit banks [Infernal fire] (up to 50); against lone targets every 5 stacks fires a free Pursue',
      ultimate: 'Multi-stage greatsword chain (512.8%+ per stage) unlocked by his stack count',
      auto: 'Repositions behind the farthest enemy and hits for 412.2% with knockback',
    },
    runes: { rec: ['Hepha', 'Beth'], alt: ['Het', 'Beth'], buildNote: 'Hepha 4-piece (Blaze ULT grants +12% Crit Rate and +16% ATK) supercharges his ULT stages; Het leans into his lone-target Pursue spam.' },
    alts: ['Perverted Little Nurse', 'Hero Never Resting'],
    ownNote: 'Exclusive card — +65% Crit DMG and every skill/ULT hit stacks +4.3% Crit Rate (up to 20). He hits constantly, so stacks stay maxed.',
    syn: ['Bors', 'Medusa', 'Leviathan'],
  },
  shanna: {
    bt: 'Crit-Stacking Fire Duelist',
    desc: 'Shanna (Saya) is an SR crit duelist: her passive stacks [Focus] (+3.7% Crit Rate, up to 10 stacks = +37%) just from hitting the same target with normal attacks, her ULT dashes in for 480%, and her auto hits 240%. Against bosses her free crit stacking makes her punch far above her rarity — keep her locked on one target.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: '+37% Crit Rate for free just from normal-attacking the same target',
      ultimate: 'Dash + 480% single-target burst',
      auto: '240% filler on a 5s cooldown',
    },
    runes: { rec: ['Hepha', 'Beth'], alt: ['Beth', 'Alpha'] },
    alts: ['Hero Never Resting', "Great Wizard's Roleplay"],
    ownNote: 'Themed SR card — +72% Crit DMG when fewer than 2 enemies remain. Her free crit rate makes this brutal in boss rooms.',
    syn: ['Zashiki-warashi', 'Kela', 'Mordred'],
  },
  shu: {
    bt: 'Vulnerability Wind Disruptor',
    desc: 'Shu is an SR AoE amplifier: her ULT applies [Vulnerability] (+34% damage taken for 15 seconds) to a 4-meter radius, her passive applies [Wind Erosion] DoT stacks with every skill, and her auto covers the same radius. A 15-second +34% team damage window on a 3-cost ULT is excellent budget amplification for any AoE comp.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Anemos', 'Iota'], alt: ['Iota', 'Anemos'] },
    alts: ['A Break Amidst the Hustle', 'Flower of the Battlefield'],
    ownNote: 'Themed SR card — dealing DoT increases the target\'s damage taken by 12%. Stacks with her own [Vulnerability].',
    syn: ['Nini', 'Belphegar', 'Bastet'],
  },
  'snow-girl': {
    bt: 'AoE HoT Healer',
    desc: 'Snow Girl (Yuki-onna) is the budget AoE healer: her auto heals ALL allies (33.9% ATK + flat) and her ULT does the same for more — while her passive adds a 5-second heal-over-time to every ULT-healed target. Simple, cheap, and one of the few SRs with true team-wide healing; her sustained output covers wave content comfortably.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Daleth', 'Zane'], alt: ['Zane', 'Daleth'] },
    alts: ['The Beauty of Heikyo Castle', 'Realm of Solitude'],
    ownNote: 'Themed SR card — +30% healing, and overhealing converts into +24% damage for the target. Loves her constant AoE topping.',
    syn: ['Rose', 'Tefnut', 'Lancelot'],
  },
  tefnut: {
    bt: 'Holy DoT Attacker',
    desc: 'Tefnut is an SR DoT duelist: her passive applies [holy Corrosion] (24% ATK every 2s, up to 5 stacks) with skills, and at max stacks her ULT adds [Light Scourge] (180% every 3s) on top of its 960% burst. Stack the DoTs, then let the ULT land on a fully-corroded target — one of the best sustained single-target SR kits.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: '[holy Corrosion] stacks up to 5 — the sustained damage engine',
      ultimate: '960% burst, and at max [holy Corrosion] it applies [Light Scourge] (180% every 3s)',
      auto: '240% hit that applies the DoT stacks',
    },
    runes: { rec: ['Gimel', 'Alpha'], alt: ['Alpha', 'Gimel'] },
    alts: ['Secret Room Livestream', 'A Break Amidst the Hustle'],
    ownNote: 'Themed SR card — +36% DoT Penetration. Every tick of her Corrosion ignores more resistance.',
    syn: ['Anubis', 'Hera', 'Snow Girl'],
  },
  veronica: {
    bt: 'DEF-Scaling Shield Tank',
    desc: 'Veronica is a SSS defense-scaling shield tank: her auto shields ALL allies for 158.3% of HER defense, her ULT grants [Divine Body] (−58.9% damage taken, +61.1% healing/shield gain, plus a shield every second equal to 183.3% of her DEF), and her passive stacks +14.7% DEF per skill use (up to 8). Every point of DEF is multiplied across the entire team — build her purely defensive.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    reasons: {
      ultimate: '[Divine Body]: −58.9% damage taken team-wide and per-second shields — the strongest team mitigation ULT',
      auto: 'Team-wide shields scaling directly off her DEF, plus healing/crit-resist/DEF buffs',
      passive: '[Light] stacks up to +117.6% DEF across the fight, and shielded allies gain even more DEF',
    },
    runes: { rec: ['Poki', 'Zane'], alt: ['Zane', 'Poki'], pos4: 'Defense (%)', pos5: 'HP (%) / Defense (%)', pos6: 'Defense (%)', buildNote: 'Poki 4-piece (+20% shield effect) multiplies shields that already scale off her DEF — pure defense is pure team value.' },
    alts: ['Drowning Lake Knight', 'Pennie Trying on New Clothes'],
    ownNote: 'Exclusive card — +25% team HP and +70% self DEF, and every skill grants allies [Radiant Protection] damage reduction. Her BiS by a mile.',
    syn: ['Nephthys', 'Keller', 'Medusa'],
    synNote: 'Her [Divine Body] window lets any carry facetank boss rotations.',
  },
  yuis: {
    bt: 'Celestial-Pivot Sword Rain',
    desc: 'Yuis (Zeus) is a SSS flying-sword attacker: ally ULTs and Pursues each grant 2 [Celestial Pivot] stacks, and at 16 stacks he can unleash an [Enhanced ULT] — a continuous sword rain on the locked target. His auto already fires 4 swords for 720%, and post-Enhanced-ULT his crit keeps climbing. He rewards busy teams that ult and Pursue often; run him with Leviathan and watch the stacks pour in.',
    order: ['passive', 'ultimate', 'auto', 'normal'],
    reasons: {
      passive: 'Ally ULTs and Pursues grant [Celestial Pivot] — 16 stacks unlocks the Enhanced ULT sword rain',
      ultimate: '720% from one giant sword, and the Enhanced version rains swords continuously',
      auto: '720% across 4 flying swords plus 2 free stacks',
    },
    runes: { rec: ['Alpha', 'Beth'], alt: ['Beth', 'Het'], buildNote: 'Alpha 4-piece (+30% normal attack damage) feeds his sword spam; Het 4-piece is the alternative if you lean on his Pursue-triggered stacks.' },
    alts: ['Perverted Little Nurse', 'Hero Never Resting'],
    ownNote: 'Exclusive card — +34% Crit Rate and Pursue Damage raises his Crit DMG by 68%. Stacks beautifully with his stack-hungry rotation.',
    syn: ['Leviathan', 'Bors', 'Freya'],
    synNote: 'Leviathan\'s constant Pursues are free [Celestial Pivot] stacks for him.',
  },
  'zashiki-warashi': {
    bt: 'ATK-Buff Team Supporter',
    desc: 'Zashiki-warashi is the budget buffer: her auto grants ALL allies +36% ATK for 15 seconds, her ULT grants +36% damage dealt team-wide, and her passive hands the highest-ATK ally a +60% ATK [Blessing] after every skill. For an SR she covers nearly every offensive buff slot — an excellent stand-in until Sharin or Tamamo.',
    order: ['ultimate', 'auto', 'passive', 'normal'],
    runes: { rec: ['Kappa', 'Epsilon'], alt: ['Epsilon', 'Zane'] },
    alts: ["Dawn's Sunlight", 'The Loneliest Moment'],
    ownNote: 'Exclusive card — after her ULT, +24% team damage for 10s with a 50% chance of +20% team Crit DMG. On a buffer whose whole job is ulting.',
    syn: ['Shanna', 'Mordred', 'Tefnut'],
  },
};

// ---------------------------------------------------------------------------
// Class defaults
// ---------------------------------------------------------------------------
const ELEM_SET = { Fire: 'Hepha', Ice: 'Kryos', Wind: 'Anemos', Chaos: 'Skota', Holy: null };
const ELEM_STAT = { Fire: 'Fire', Ice: 'Ice', Wind: 'Wind', Chaos: 'Chaos', Holy: 'Holy' };

const CLASS_RUNES = {
  Attacker: (el) => ELEM_SET[el] ? [ELEM_SET[el], 'Beth'] : ['Alpha', 'Beth'],
  Destroyer: (el) => ELEM_SET[el] ? [ELEM_SET[el], 'Beth'] : ['Alpha', 'Beth'],
  Warrior: () => ['Alpha', 'Zane'],
  Disruptor: () => ['Iota', 'Beth'],
  Tank: () => ['Poki', 'Zane'],
  Healer: () => ['Daleth', 'Zane'],
  Supporter: () => ['Kappa', 'Epsilon'],
};
const CLASS_RUNES_ALT = {
  Attacker: () => ['Alpha', 'Beth'],
  Destroyer: () => ['Alpha', 'Beth'],
  Warrior: () => ['Zane', 'Alpha'],
  Disruptor: (el) => ELEM_SET[el] ? [ELEM_SET[el], 'Iota'] : ['Epsilon', 'Iota'],
  Tank: () => ['Zane', 'Poki'],
  Healer: () => ['Poki', 'Daleth'],
  Supporter: () => ['Epsilon', 'Zane'],
};
const CLASS_STATS = {
  Attacker: ['Attack%', 'Crit Rate', ['ATK%', 'Crit Rate%'], ['Crit DMG%', 'Penetration', 'ATK']],
  Destroyer: ['Attack%', 'Crit Rate', ['ATK%', 'Crit Rate%'], ['Crit DMG%', 'Penetration', 'ATK']],
  Warrior: ['Attack% / HP%', 'HP%', ['ATK%', 'HP%'], ['Crit DMG%', 'HP']],
  Disruptor: ['Attack%', 'Crit Rate', ['ATK%', 'Crit Rate%'], ['Crit DMG%', 'Penetration', 'ATK']],
  Tank: ['Defense%', 'HP%', ['DEF%', 'HP%'], ['DEF', 'HP', 'Healing Effectiveness%']],
  Healer: ['Healing Effectiveness', 'HP%', ['Healing Effectiveness%', 'HP%'], ['HP', 'DEF']],
  Supporter: ['HP% / ATK%', 'HP%', ['HP%', 'ATK%'], ['HP', 'DEF']],
};
const CLASS_POS4 = {
  Attacker: 'Attack (%) / Critical Rate (%)', Destroyer: 'Attack (%) / Critical Rate (%)',
  Warrior: 'Attack (%) / HP (%)', Disruptor: 'Attack (%) / Critical Rate (%)',
  Tank: 'Defense (%) / HP (%)', Healer: 'Healing Effectiveness (%)', Supporter: 'Attack (%) / HP (%)',
};
const CLASS_POS5 = {
  Attacker: 'ELEM', Destroyer: 'ELEM', Warrior: 'ELEM', Disruptor: 'ELEM',
  Tank: 'HP (%)', Healer: 'HP (%)', Supporter: 'HP (%)',
};
const CLASS_POS6 = {
  Attacker: 'Attack (%)', Destroyer: 'Attack (%)', Warrior: 'Attack (%)', Disruptor: 'Attack (%)',
  Tank: 'Defense (%)', Healer: 'HP (%)', Supporter: 'HP (%)',
};
const DEFAULT_REASONS = {
  DPS: {
    ultimate: 'Highest damage multiplier and the core of the rotation — level first',
    auto: 'Reliable cooldown damage between ultimates',
    passive: 'The kit engine — stacks and marks amplify everything else',
    normal: 'Lowest value per level — raise last',
  },
  Tank: {
    ultimate: 'Team protection values scale directly with level',
    auto: 'Frequent shield/protection uptime on a short cooldown',
    passive: 'Stacking defense/mitigation engine',
    normal: 'Damage filler — level last',
  },
  Healer: {
    ultimate: 'Healing numbers scale hardest here',
    auto: 'Consistent healing between ultimates',
    passive: 'Sustain and emergency-healing engine',
    normal: 'Level last',
  },
  Supporter: {
    ultimate: 'Buff magnitude scales with level',
    auto: 'Uptime on the core team buffs',
    passive: 'Stacking team-wide engine',
    normal: 'Level last',
  },
  Disruptor: {
    ultimate: 'Biggest debuff/damage swing in the kit',
    auto: 'Core debuff uptime on cooldown',
    passive: 'Constant passive pressure between skills',
    normal: 'Level last',
  },
};
const CLASS_BUILDNOTE = {
  Attacker: 'Multipliers are large, so % damage and crit scale harder than flat ATK — element damage on position 5, crit on position 4.',
  Destroyer: 'Multipliers are large, so % damage and crit scale harder than flat ATK — element damage on position 5, crit on position 4.',
  Warrior: 'Balance ATK with HP — he needs to stay in the fight, and % damage beats flat ATK at these multipliers.',
  Disruptor: 'Debuffs land regardless, but ATK keeps the damage relevant — balance offensive stats with debuff uptime.',
  Tank: 'Shields and mitigation scale with DEF/HP — a dead tank protects nothing. Pure defensive main stats.',
  Healer: 'Healing scales off ATK for most healers, but survivability keeps the healing flowing — balance Healing Effectiveness with HP.',
  Supporter: 'Her buffs are flat percentages — survival stats (HP/DEF) keep her alive to keep the team buffed.',
};

// Memory card editorial summaries for the shared alt pool (grounded in card effect text)
const ALT_NOTES = {
  "Sleep Treasure": 'Team damage +24% for 10s after every ULT, plus a 50% chance of +20% team Crit DMG. Cheap, unconditional team amplification.',
  "Dawn's Sunlight": '+20% ATK and +20% team Skill Damage — a simple, solid SR stat stick for supporters.',
  'The Loneliest Moment': 'SSR team amp: +40% damage (and +40% Pursue) from battle start, and 100% team Energy Gain after an 8+ energy ULT.',
  'Drowning Lake Knight': '+36% DEF and −8% damage taken for the whole team on battle start — tank bread and butter.',
  'Pennie Trying on New Clothes': '+24% HP and −10% damage taken for 5 seconds after each ULT.',
  'The Beauty of Heikyo Castle': '+30% Healing; overhealed targets gain +24% damage — turns overheal into team damage.',
  'Realm of Solitude': '+30% Healing; healing targets under 50% HP also reduces their damage taken by 8%.',
  'Ancient Fatigue Relief': '+30% Healing; every heal grants the target +20% ATK for 3s — offensive healer support.',
  "Great Wizard's Roleplay": '+20% ATK and +36% Crit DMG against lone targets — boss-room stat stick.',
  'Hero Never Resting': '+72% Crit DMG when fewer than 2 enemies remain — huge boss-phase nuking.',
  'Perverted Little Nurse': '+36% Crit Rate for 10s after dealing Pursue Damage — made for Pursue-triggered kits.',
  'Secret Room Livestream': '+36% DoT Penetration — multiplies every DoT tick.',
  'Flower of the Battlefield': '+20% damage per debuff on the target (up to 3 stacks) — rewards full debuff stacking.',
  'A Break Amidst the Hustle': 'Dealing DoT increases the target\'s damage taken by 12% — amplifies the whole DoT team.',
  'The Reason for Slumber': 'ULTs reduce the target\'s Energy Gain Efficiency by 18% — extra control on top of debuffs.',
  'Annoying Classroom': '+12% ULT damage per enemy on field (up to 5 stacks) — mob-wave amplifier.',
  'Summer Nap Time': '+20% ATK plus 5% more per enemy (up to +40% total) — AoE farming stat stick.',
  'The Way of Revenge': 'When a Supporter uses an ULT, your ULT damage +60% for 10s — a direct multiplier for Enhanced-ULT kits.',
  'During Military Training': 'After your ULT, Normal Attack and Skill Damage +60% for 10s — normal-attack carry fuel.',
  'Behind the Laziness': '+24% HP and +30% self Healing — cheap sustain for HP-scaling warriors.',
  'Awkward Appearance': 'SSR: +40% team damage and +40% team normal attack damage from battle start, plus +40% team ATK on every 5th normal attack.',
};

// Legacy icon key used by ZNRunesImage for the 10 original sets; element sets use <Name>.webp
const ICON = {
  Alpha: 'Alpha', Beth: 'Beth', Daleth: 'Daleth', Epsilon: 'Epsilon', Gimel: 'Gimel-Continuous-Damage',
  Poki: 'Shattered-Foundation', Zane: 'Zahn', Het: 'Hert-Pursuit-Damage', Iota: 'Giants', Kappa: 'Tide',
  Kryos: 'Kryos.webp', Anemos: 'Anemos.webp', Hepha: 'Hepha.webp', Skota: 'Skota.webp',
};

const SLOT_LABEL = { ultimate: 'Ultimate', auto: 'Auto Skill', passive: 'Passive', normal: 'Normal Attack' };
const ROLE_OF = { Attacker: 'DPS', Destroyer: 'DPS', Warrior: 'DPS', Tank: 'Tank', Healer: 'Healer', Supporter: 'Supporter', Disruptor: 'Disruptor' };

const AVAILABLE_4 = ['Healing Effectiveness (%)', 'Critical Rate (%)', 'Critical Damage (%)', 'Attack Penetration (%)', 'Attack (%)', 'HP (%)', 'Defense (%)'];
const AVAILABLE_5 = ['Wind Attribute Damage (%)', 'Fire Attribute Damage (%)', 'Ice Attribute Damage (%)', 'Holy Attribute Damage (%)', 'Chaos Attribute Damage (%)', 'Attack (%)', 'HP (%)', 'Defense (%)'];
const AVAILABLE_6 = ['Attack (%)', 'HP (%)', 'Defense (%)'];

function runeSet(mainKey, secKey) {
  const m = RUNE_SETS[mainKey], s = RUNE_SETS[secKey];
  if (!m || !s) throw new Error(`Unknown rune set: ${mainKey}/${secKey}`);
  return {
    name: `${m.name} 4-piece + ${s.name} 2-piece`,
    englishName: `${m.name} 4-piece + ${s.name} 2-piece`,
    mainRune: ICON[mainKey],
    secondaryRune: ICON[secKey],
    mainRune2Piece: `2-piece: ${m.twoPiece}`,
    mainRune4Piece: `4-piece: ${m.fourPiece}`,
    secondaryRuneEffect: `2-piece: ${s.twoPiece}`,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const roster = new Map(ZONE_NOVA_CHARACTERS.map((c) => [c.slug, c]));
const cardsByName = new Map(ZONE_NOVA_MEMORIES.map((c) => [c.name.trim(), c]));

// Image coverage check against ZNMemoryImage map keys
const znMemSrc = readFileSync(new URL('./src/components/zone-nova/ZNMemoryImage.astro', import.meta.url), 'utf8');
const memMapKeys = new Set([...znMemSrc.matchAll(/'([^']+)'\s*:/g)].map((x) => x[1]));

const outDir = new URL('./src/data/zone-nova/character-builds/', import.meta.url);
const problems = [];

for (const slug of SLUGS) {
  const e = E[slug];
  if (!e) { problems.push(`no editorial entry for ${slug}`); continue; }
  const rosterChar = roster.get(slug);
  const mod = await import(new URL(`./src/data/zone-nova/characters/${slug}.js`, import.meta.url).href);
  const c = mod.default || Object.values(mod)[0];

  // --- skill priority
  const skillPriority = e.order.map((slot, i) => {
    const sk = c.skills[slot];
    let desc = '';
    if (sk.energyCost) desc += `Energy Cost: ${sk.energyCost}\n`;
    if (sk.cooldown) desc += `Cooldown: ${sk.cooldown}s\n`;
    desc += clean(sk.description);
    const reason = (e.reasons && e.reasons[slot]) || DEFAULT_REASONS[rosterChar.role || ROLE_OF[c.class]][slot];
    const level = slot === 'normal' ? (e.nl || 'Level 7') : 'Level 10';
    return {
      skill: sk.name ? `${SLOT_LABEL[slot]}: ${sk.name}` : SLOT_LABEL[slot],
      priority: i + 1,
      level,
      reason,
      description: desc,
    };
  });

  // --- own / themed memory card
  const ownName = clean(c.memoryCard.name);
  const ownCard = cardsByName.get(ownName);
  if (!ownCard) { problems.push(`${slug}: own card "${ownName}" not found in memories.js`); continue; }
  const ownImg = ownCard.image.split('/').pop();
  if (!memMapKeys.has(ownImg)) problems.push(`${slug}: own card image "${ownImg}" missing from ZNMemoryImage map`);
  const recommendedMemoryCards = [{
    name: ownName,
    effect: e.ownNote || `${c.name}'s exclusive memory card.`,
    priority: ownCard.rarity === 'SSR' ? 'Must Have' : 'Highly Recommended',
    note: e.ownNote,
    characterSpecific: true,
    memoryImage: ownImg,
    memoryStats: { hp: fmt(ownCard.stats.hp), attack: fmt(ownCard.stats.attack), defense: fmt(ownCard.stats.defense) },
    description: clean(ownCard.effects[4] || ownCard.effects[0]),
  }];

  // --- alternative cards
  const alternativeMemoryCards = (e.alts || []).map((n) => {
    const card = cardsByName.get(n);
    if (!card) { problems.push(`${slug}: alt card "${n}" not found`); return null; }
    const img = card.image.split('/').pop();
    if (!memMapKeys.has(img)) problems.push(`${slug}: alt card image "${img}" missing from ZNMemoryImage map`);
    return {
      name: n,
      effect: ALT_NOTES[n] || '',
      characterSpecific: false,
      memoryImage: img,
      memoryStats: { hp: fmt(card.stats.hp), attack: fmt(card.stats.attack), defense: fmt(card.stats.defense) },
      description: clean(card.effects[4] || card.effects[0]),
    };
  }).filter(Boolean);

  // --- runes
  const recPair = (e.runes && e.runes.rec) || CLASS_RUNES[c.class](c.element);
  const altPair = (e.runes && e.runes.alt) || CLASS_RUNES_ALT[c.class](c.element);
  const [dPrimary, dSecondary, dStats, dAdditional] = CLASS_STATS[c.class];
  const runes = {
    primary: (e.runes && e.runes.primary) || dPrimary,
    secondary: (e.runes && e.runes.secondary) || dSecondary,
    stats: (e.runes && e.runes.stats) || dStats,
    additionalStats: (e.runes && e.runes.additional) || dAdditional,
    buildNote: (e.runes && e.runes.buildNote) || CLASS_BUILDNOTE[c.class],
    recommendedSets: [runeSet(recPair[0], recPair[1])],
    alternativeSets: [runeSet(altPair[0], altPair[1])],
  };

  // --- main stats by position
  const pos5 = (e.runes && e.runes.pos5) || (CLASS_POS5[c.class] === 'ELEM' ? `${ELEM_STAT[c.element]} Attribute Damage (%)` : CLASS_POS5[c.class]);
  const mainStatsByPosition = {
    1: { name: 'Position 1 — Fixed Main Stat', stat: 'HP (Flat Value)', description: 'Always HP - no other options', isFixed: true },
    2: { name: 'Position 2 — Fixed Main Stat', stat: 'Attack (Flat Value)', description: 'Always Attack - no other options', isFixed: true },
    3: { name: 'Position 3 — Fixed Main Stat', stat: 'Defense (Flat Value)', description: 'Always Defense - no other options', isFixed: true },
    4: { name: 'Position 4 — Variable Main Stats', recommendedStat: (e.runes && e.runes.pos4) || CLASS_POS4[c.class], availableStats: AVAILABLE_4, description: 'Pick the recommended stat pair that matches the rune build below.' },
    5: { name: 'Position 5 — Variable Main Stats', recommendedStat: pos5, availableStats: AVAILABLE_5 },
    6: { name: 'Position 6 — Variable Main Stats', recommendedStat: (e.runes && e.runes.pos6) || CLASS_POS6[c.class], availableStats: AVAILABLE_6 },
  };

  // --- awakenings (verbatim effect text from character data)
  const IMPORTANCE = [2, 1, 3, 2, 3, 2];
  const LABEL = { 1: 'Very Good', 2: 'Good', 3: 'Mid' };
  const awakenings = {
    priority: 'A2 is the biggest early jump, then A4. A3/A5 raise skill level caps (+2 each) and are dupe-gated — take A6 last for the team-wide bonus.',
    keyMilestones: c.awakenings.map((a, i) => ({
      level: a.level ?? i + 1,
      effect: clean(a.effect || a.description),
      importance: IMPORTANCE[i] ?? 2,
      importanceLabel: LABEL[IMPORTANCE[i] ?? 2],
    })),
  };

  // --- team synergy
  for (const name of e.syn || []) {
    if (!ZONE_NOVA_CHARACTERS.some((x) => x.name === name)) problems.push(`${slug}: synergy name "${name}" not in roster`);
  }
  const teamSynergy = { goodWith: e.syn || [], note: e.synNote };

  const build = {
    name: rosterChar.name,
    role: rosterChar.role || ROLE_OF[c.class],
    buildType: e.bt,
    description: e.desc,
    skillPriority,
    recommendedMemoryCards,
    alternativeMemoryCards,
    runes,
    mainStatsByPosition,
    awakenings,
    teamSkill: { name: c.teamSkill?.name || 'Combination Skill', description: clean(c.teamSkill?.description) },
    teamSynergy,
  };

  const varName = `${camelize(slug)}Build`;
  const body = `// ${rosterChar.name} Build - Zone Nova Character Build (generated by gen_character_builds.mjs)
// ${rosterChar.rarity} ${rosterChar.element} ${rosterChar.class} - ${e.bt}

export const ${varName} = ${serialize(build, 2)};
`;
  writeFileSync(new URL(`${slug}.js`, outDir), body);
  console.log(`wrote ${slug}.js`);
}

function serialize(v, indent) {
  const pad = ' '.repeat(indent);
  const padIn = ' '.repeat(indent + 2);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return `[\n${v.map((x) => padIn + serialize(x, indent + 2)).join(',\n')}\n${pad}]`;
  }
  if (v && typeof v === 'object') {
    const keys = Object.keys(v);
    return `{\n${keys.map((k) => `${padIn}${/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : JSON.stringify(k)}: ${serialize(v[k], indent + 2)}`).join(',\n')}\n${pad}}`;
  }
  return JSON.stringify(v);
}

// --- wire imports + entries into character-builds.js
const aggPath = new URL('./src/data/zone-nova/character-builds.js', import.meta.url);
let agg = readFileSync(aggPath, 'utf8');
const NL = agg.includes('\r\n') ? '\r\n' : '\n';
const imports = SLUGS.map((s) => `import { ${camelize(s)}Build } from './character-builds/${s}.js';`).join(NL);
const entries = SLUGS.map((s) => `  // ${roster.get(s).name} Build - ${roster.get(s).rarity} ${roster.get(s).element} ${roster.get(s).class}${NL}  '${s}': ${camelize(s)}Build,`).join(NL + NL);
if (!agg.includes('anubisBuild')) {
  if (!agg.includes("import { jillBuild } from './character-builds/jill.js';")) throw new Error('aggregator anchor (jill import) not found');
  agg = agg.replace(
    "import { jillBuild } from './character-builds/jill.js';",
    "import { jillBuild } from './character-builds/jill.js';" + NL + imports,
  );
}
if (!agg.includes("'anubis': anubisBuild")) {
  const entryAnchor = new RegExp('(  jill: jillBuild,' + String.raw`\r?\n)` + String.raw`\r?\n?\};`);
  if (!entryAnchor.test(agg)) throw new Error('aggregator anchor (jill entry) not found');
  agg = agg.replace(entryAnchor, '$1' + NL + NL + entries + NL + '};');
}
writeFileSync(aggPath, agg);
console.log('aggregator updated');

if (problems.length) {
  console.log('\nPROBLEMS:');
  for (const p of problems) console.log(' - ' + p);
  process.exit(1);
}
console.log('\nAll OK');
