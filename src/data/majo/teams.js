// MAJO team builds: curated comps from kit analysis and CN/JP/KR community
// meta (Bahamut, Bilibili, Gamerch, DC Inside, September 2026). Members are
// referenced by slug and resolved against characters.js at import time.

import { majoCharacters } from './characters.js';

const RAW_TEAMS = [
  {
    id: 'magic-ult-engine',
    name: 'Magic Ult Engine',
    tagline: 'The strongest ceiling in the game: shred magic resistance, then unload every ultimate at once',
    availability: 'Premium',
    archetype: 'Magic burst + Mental executes',
    members: [
      { slug: 'patra', role: 'Magic shred' },
      { slug: 'macak', role: 'Main nuker' },
      { slug: 'xuanji', role: 'Execution finisher' },
      { slug: 'emily', role: 'Ult battery + heals' },
    ],
    description: 'Emily charges the whole team\'s ultimates, Patra drops Magic Resistance by up to 20% for 30 seconds, and Macak\'s 12-hit Extreme lands inside that window. Note the split damage types: Patra, Macak and Emily are Magic, but Xuanji\'s executions are Mental, so the shred amplifies Macak while Xuanji deletes knocked-down and low-HP targets on her own. Patra\'s Class Skill also auto-reloads whenever an allied Arcanist ults, so the shred keeps refreshing itself.',
    rotation: 'Open with Emily\'s ultimate to fill every bar, then Patra\'s Extreme for the shred, then Macak and Xuanji unload into the weakened field. Reset and repeat: Patra\'s skill comes back online with each allied ultimate.',
    flex: 'Bazhuli\'s Interference (+magic attack and charge speed for high-cost wearers) goes straight to Macak. Swapping Xuanji for Lucia adds more burst but loses the execution safety net.',
  },
  {
    id: 'physical-meta-deck',
    name: 'The Physical Meta Deck',
    tagline: 'The proven standard comp: what CN, JP and KR players actually run',
    availability: 'Standard',
    archetype: 'Physical sustain-burst',
    members: [
      { slug: 'yuhong', role: 'Main carry' },
      { slug: 'yun', role: 'Break gauge + taunt' },
      { slug: 'alice', role: 'Crit-support breaker' },
      { slug: 'zhijie', role: 'Healer' },
    ],
    description: 'The deck Korean players call the standard: Yuhong carries with her dodge-cannon rotation while Yun tears the Break gauge open and Alice\'s crit support makes both physical attackers shine (JP players call that pairing "unrivaled"). Zhijie heals and buffs defense.',
    rotation: 'Yun taunts and breaks the gauge, Alice counters and stacks crit support, Yuhong rotates dodge-counters into her +200% Special window, and Zhijie keeps everyone topped up. Free swap: run Peseshet instead of Zhijie, she is the budget version of the same slot.',
    flex: 'This is a whale-leaning version only because of Zhijie; with Peseshet the whole deck is farmable. Huarui can replace Alice on wave-heavy stages.',
  },
  {
    id: 'execution-squad',
    name: 'Execution Squad',
    tagline: 'Stagger, knock down, delete: the knockdown loop as a team identity',
    availability: 'Standard',
    archetype: 'Mental knockdown burst',
    members: [
      { slug: 'jenny', role: 'Stagger + AoE burst' },
      { slug: 'xuanji', role: 'Execution finisher' },
      { slug: 'maro', role: 'Damage amp + heals' },
      { slug: 'carmen', role: 'Anchor tank' },
    ],
    description: 'Every witch in this squad deals Mental damage. Jenny and Xuanji pile on Stagger until the target drops, then the execution skills come out while Maro\'s auto is giving the whole team +10% damage and 16% extra vulnerability on the victim. Carmen holds the line so the casters never have to dodge-cancel their rotations.',
    rotation: 'Carmen opens with taunt, Jenny staggers the pack, and once the target is down Xuanji and Jenny\'s execution windows delete it inside Maro\'s amplified damage. Keep Maro\'s Class Skill on cooldown: her Interference skill turns each cast into a +15% Mental Attack aura for allies around her.',
    flex: 'Dusan and Leed are the budget execution spares, but both are also Mental damage, so on Mental-resisting bosses the real fix is swapping Jenny for a Physical or Magic carry like Tomoe instead of another Mental attacker.',
  },
  {
    id: 'sustain-wall',
    name: 'The Sustain Wall',
    tagline: 'The safest hard-content comp: two SS tanks and nothing dies',
    availability: 'Premium',
    archetype: 'Double-tank sustain',
    members: [
      { slug: 'carmen', role: 'Anchor tank-healer' },
      { slug: 'dayu', role: 'Team damage reduction' },
      { slug: 'emily', role: 'Ult battery + heals' },
      { slug: 'jenny', role: 'Main damage' },
    ],
    description: 'Carmen and Dayu stack taunts, Toughness and team-wide damage reduction while Emily keeps the ultimates flowing, and Jenny handles all the damage with her 2320% Extreme. Slow, boring, and nearly impossible to lose with.',
    rotation: 'Keep both taunts on cooldown, use Dayu\'s damage reduction before big enemy swings, and spend Emily\'s charges to keep Jenny\'s Extreme cycling. There is no damage check this comp cannot outlast.',
    flex: 'Garana swaps in for Dayu on stages that need Dizzy crowd control. Maro replaces Jenny if the content punishes squishy carries.',
  },
  {
    id: 'budget-starter',
    name: 'Budget Starter',
    tagline: 'The free and farmable core that clears the whole game',
    availability: 'Free-friendly',
    archetype: 'F2P starter',
    members: [
      { slug: 'xinzi', role: 'Main single-target DPS' },
      { slug: 'xuanji', role: 'Execution + AoE' },
      { slug: 'peseshet', role: 'All-team heals + amp' },
      { slug: 'garana', role: 'Tank + Dizzy CC' },
    ],
    description: 'The comp all three regions agree on for free players: Xinzi and Xuanji are the dupe-farmable starter duo everyone tells you to invest in, Peseshet is the SR healer the community calls SSR-tier, and Garana rounds out the front with taunts and Dizzy.',
    rotation: 'Garana taunts and Dizzies, Xinzi deletes priority targets with her guaranteed-crit auto, Xuanji cleans up waves and executes the leftovers, and Peseshet\'s all-team heal plus Extreme damage amp covers the rest.',
    flex: 'Tomoe and Lumi are the next farmable upgrades; Tomoe\'s damage zone eventually makes her a permanent fixture. When you pull any SS-tier witch, this team is what it replaces.',
  },
];

function withCharacters(team) {
  return {
    ...team,
    members: team.members.map(m => {
      const character = majoCharacters.find(c => c.slug === m.slug);
      if (!character) console.warn(`[majo/teams] unknown slug "${m.slug}"`);
      return { ...m, character };
    }),
  };
}

export const majoTeams = RAW_TEAMS.map(withCharacters);
