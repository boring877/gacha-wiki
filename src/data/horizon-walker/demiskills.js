// Demiskill data for Horizon Walker Demi-Ascension characters
// Maps character names to their unique Authority skill and random Might skill pool

export const DEMI_MIGHT_SKILLS = {
  westWind: {
    name: 'Might of the West Wind',
    icon: 'UI_SkillIcon_DivineAuthorityOfZephyr',
    tiers: [
      { tier: 1, value: 100, description: 'At the start of battle, increases SPD by 100 for 1 round.' },
      { tier: 2, value: 125, description: 'At the start of battle, increases SPD by 125 for 1 round.' },
      { tier: 3, value: 150, description: 'At the start of battle, increases SPD by 150 for 1 round.' },
      { tier: 4, value: 175, description: 'At the start of battle, increases SPD by 175 for 1 round.' },
      { tier: 5, value: 200, description: 'At the start of battle, increases SPD by 200 for 1 round.' },
    ],
  },
  plunder: {
    name: 'Might of Plunder',
    icon: 'UI_SkillIcon_DivineAuthorityOfPlunder',
    tiers: [
      { tier: 1, value: 4, description: 'Gain 4% Lifesteal when HP is at or below 70%.' },
      { tier: 2, value: 5, description: 'Gain 5% Lifesteal when HP is at or below 70%.' },
      { tier: 3, value: 6, description: 'Gain 6% Lifesteal when HP is at or below 70%.' },
      { tier: 4, value: 7, description: 'Gain 7% Lifesteal when HP is at or below 70%.' },
      { tier: 5, value: 8, description: 'Gain 8% Lifesteal when HP is at or below 70%.' },
    ],
  },
  pursuit: {
    name: 'Might of Pursuit',
    icon: 'UI_SkillIcon_DivineAuthorityOfChase',
    tiers: [
      { tier: 1, value: 12.5, description: 'During own turn, on kill: gain 12.5 AP. Max 3 activations per round.' },
      { tier: 2, value: 15, description: 'During own turn, on kill: gain 15 AP. Max 3 activations per round.' },
      { tier: 3, value: 17.5, description: 'During own turn, on kill: gain 17.5 AP. Max 3 activations per round.' },
      { tier: 4, value: 20, description: 'During own turn, on kill: gain 20 AP. Max 3 activations per round.' },
      { tier: 5, value: 22.5, description: 'During own turn, on kill: gain 22.5 AP. Max 3 activations per round.' },
    ],
  },
  distortion: {
    name: 'Might of Distortion',
    icon: 'UI_SkillIcon_DivineAuthorityOfDistortion',
    tiers: [
      { tier: 1, value: 40, description: 'On attack: 40% chance to apply Slow for 2R (SPD -40%).' },
      { tier: 2, value: 50, description: 'On attack: 50% chance to apply Slow for 2R (SPD -40%).' },
      { tier: 3, value: 60, description: 'On attack: 60% chance to apply Slow for 2R (SPD -40%).' },
      { tier: 4, value: 70, description: 'On attack: 70% chance to apply Slow for 2R (SPD -40%).' },
      { tier: 5, value: 80, description: 'On attack: 80% chance to apply Slow for 2R (SPD -40%).' },
    ],
  },
  fightingSpirit: {
    name: 'Might of Fighting Spirit',
    icon: 'UI_SkillIcon_DivineAuthorityOfFightingSpirit',
    tiers: [
      { tier: 1, value: 10, description: 'At turn start: +1 Melee ATK per 10 HP lost.' },
      { tier: 2, value: 7.5, description: 'At turn start: +1 Melee ATK per 7.5 HP lost.' },
      { tier: 3, value: 6.25, description: 'At turn start: +1 Melee ATK per 6.25 HP lost.' },
      { tier: 4, value: 5.5, description: 'At turn start: +1 Melee ATK per 5.5 HP lost.' },
      { tier: 5, value: 5, description: 'At turn start: +1 Melee ATK per 5 HP lost.' },
    ],
  },
  protection: {
    name: 'Might of Protection',
    icon: 'UI_SkillIcon_DivineAuthorityOfProtection',
    tiers: [
      { tier: 1, value: 24, description: 'At turn end, shield an ally with lower HP% for 24% of max HP.' },
      { tier: 2, value: 26, description: 'At turn end, shield an ally with lower HP% for 26% of max HP.' },
      { tier: 3, value: 28, description: 'At turn end, shield an ally with lower HP% for 28% of max HP.' },
      { tier: 4, value: 32, description: 'At turn end, shield an ally with lower HP% for 32% of max HP.' },
      { tier: 5, value: 36, description: 'At turn end, shield an ally with lower HP% for 36% of max HP.' },
    ],
  },
  frost: {
    name: 'Might of Frost',
    icon: 'UI_SkillIcon_DivineAuthorityOfFrost',
    tiers: [
      { tier: 1, value: 10, description: 'On attack: target all ATK -10% and Frost DEF -200.' },
      { tier: 2, value: 12.5, description: 'On attack: target all ATK -12.5% and Frost DEF -250.' },
      { tier: 3, value: 15, description: 'On attack: target all ATK -15% and Frost DEF -300.' },
      { tier: 4, value: 17.5, description: 'On attack: target all ATK -17.5% and Frost DEF -350.' },
      { tier: 5, value: 20, description: 'On attack: target all ATK -20% and Frost DEF -400.' },
    ],
  },
  insight: {
    name: 'Might of Insight',
    icon: 'UI_SkillIcon_DivineAuthorityOfInsight',
    tiers: [
      { tier: 1, value: 20, description: 'When not your turn: Crit DMG +20%.' },
      { tier: 2, value: 25, description: 'When not your turn: Crit DMG +25%.' },
      { tier: 3, value: 30, description: 'When not your turn: Crit DMG +30%.' },
      { tier: 4, value: 35, description: 'When not your turn: Crit DMG +35%.' },
      { tier: 5, value: 40, description: 'When not your turn: Crit DMG +40%.' },
    ],
  },
  shattering: {
    name: 'Might of Shattering',
    icon: 'UI_SkillIcon_DivineAuthorityOfCrushing',
    tiers: [
      { tier: 1, value: 40, description: 'CRIT Rate -20%, Crit DMG +40%.' },
      { tier: 2, value: 50, description: 'CRIT Rate -25%, Crit DMG +50%.' },
      { tier: 3, value: 60, description: 'CRIT Rate -30%, Crit DMG +60%.' },
      { tier: 4, value: 70, description: 'CRIT Rate -35%, Crit DMG +70%.' },
      { tier: 5, value: 80, description: 'CRIT Rate -40%, Crit DMG +80%.' },
    ],
  },
  flame: {
    name: 'Might of Flame',
    icon: 'UI_SkillIcon_DivineAuthorityOfFlame',
    tiers: [
      { tier: 1, value: 20, description: 'At battle start: Heat Boost +20.' },
      { tier: 2, value: 25, description: 'At battle start: Heat Boost +25.' },
      { tier: 3, value: 30, description: 'At battle start: Heat Boost +30.' },
      { tier: 4, value: 35, description: 'At battle start: Heat Boost +35.' },
      { tier: 5, value: 40, description: 'At battle start: Heat Boost +40.' },
    ],
  },
};

export const TIER_PROBABILITIES = [
  { tier: 1, weight: 350, probability: '35%' },
  { tier: 2, weight: 300, probability: '30%' },
  { tier: 3, weight: 200, probability: '20%' },
  { tier: 4, weight: 100, probability: '10%' },
  { tier: 5, weight: 50, probability: '5%' },
];

export const DEMI_CHARACTERS = {
  'Yeon Chae-young': {
    authoritySkill: {
      name: 'Trajectory of Providence',
      description: `During combat, Crit DMG +{20,26,32,38,44}% and SPD +{20,24,28,32,36}%.
When allies other than yourself take their turn and land a Weak Point Attack, gain <b>[Briefing]</b> (stacks up to 2 times).
At the start of your turn, if <b>[Briefing]</b> is at max stacks, gain <b>[Keen Insight]</b>.

<b>[Keen Insight]</b>: Increases Pierce Boost by {24,32,40,48,56}%.`,
      enhancedDescription: `Increases Ranged ATK +10% during combat.
When Crit Rate exceeds 100%, half of the excess value is temporarily converted into Crit DMG.
At the start of your turn, if you have <b>[Keen Insight]</b>, gain <b>[Extra Action]</b> once, and the AP cost of "Assassination" and "Mass Execution" is reduced by 18 for that turn.
During combat, "Conceal" is enhanced.

<b>Conceal</b>
During combat, Crit DMG +10%.
At the start of combat and after landing a Weak Point Attack, enter Stealth until the end of your turn.`,
    },
  },
  'Platina': {
    authoritySkill: {
      name: 'Causality of Steel',
      description: `During battle, Max HP increases by {30,33,36,39,42,45,48}%, and Aggro Adjustment increases by {100,110,120,130,140,150,160}.
All enemies attacked by Platina have All ATK reduced by {15,18,21,24,27,30,33}% and DMG Taken increased by {10,12,14,16,18,20,22}% for 2R.
Once per battle, when Platina receives damage that would reduce her HP to 0, her HP is fully restored, and she immediately gains 150 AP.`,
    },
  },
  'Pantheri': {
    authoritySkill: {
      name: 'Sacred Duel',
      description: `When using <b>[Outlaw's Mockery]</b>, increases all attack ranges by 1m for 2R.

When evading an Active Skill (excluding Counterattacks), has a {40,50,60,70,80,90,100}% chance to perform a Support Counterattack with <b>[That One Strike]</b>.
Each Support Counterattack increases Combat Skill DMG by {20,22,24,26,28,30,32}%.
Stacks up to 10 times.

If an enemy hit by <b>[That One Strike]</b> has <b>[Archnemesis' aura]</b>, grants <b>[Sacred Duel]</b>.

<b>[Sacred Duel]</b>: At the start of your turn, increases Aggro Adjustment by 200.`,
    },
  },
  'Luise': {
    authoritySkill: {
      name: 'Hellfire of Longing',
      description: `For each target successfully hit, gain 1 stack of <b>[Hellfire Fragment]</b> with a {70,75,80,85,90,95,100}% chance.

When 8 stacks of <b>[Hellfire Fragment]</b> are reached, all stacks are consumed at the start of your next turn, entering <b>[Ember of Longing]</b> and gaining 3 Extra Actions.

<b>[Ember of Longing]</b>:
Increases Magic ATK by {100,110,120,130,140,150,160}%, and sets AP cost and Cooldown of all skills to 0.
However, <b>[Fireflake Explosion]</b> does not activate.

While active, for each enemy damaged, [Fireflake Explosion] damage increases by {30,36,42,48,52,60,66}%.
This effect stacks up to 10 times and lasts until the start of your next turn.

<b>[Ember of Longing]</b> expires after 3 Extra Actions.`,
    },
  },
  'Ines': {
    authoritySkill: {
      name: 'Genesis Sword',
      description: 'Authority skill data pending - not found in localization files.',
    },
  },
  'Marhim': {
    authoritySkill: {
      name: 'Slaughtering Fangs',
      description: `<b>[Bloodsoaked Execution]</b> is changed to target the selected enemy and all enemies within a 3m radius, and its Cooldown decreases by 1R.
During your turn, gain <b>[Slaughtering Fangs]</b>.

<b>[Slaughtering Fangs]</b>:
Increases Melee ATK by {30,36,42,48,54,60,66}% of base Melee ATK and increases Combat Skill DMG by {15,18,21,24,27,30,33}%.
This effect is removed at the end of your turn.

When using <b>[Bloodsoaked Execution]</b> while in <b>[Stealth]</b>, the attack is treated as a Back Attack, and if an enemy is killed by this skill, the <b>[Slaughtering Fangs]</b> effect is doubled. Stacks up to 5 times.`,
    },
  },
  'Matrotho': {
    authoritySkill: {
      name: 'Blooming Wind',
      type: 'Passive',
      description: `During battle, Melee ATK increases by {40,44,48,52,56,60,64}% and AP Recovery increases by {5,7,9,11,13,15,17}%. On successful attack, if Crit Rate exceeds 50%, performs a Support Attack with a chance equal to the excess amount.

When defeating an enemy, immediately performs an additional Reaction against the nearest enemy using <b>[First Strike Blade]</b>, reduces the Cooldown of <b>[Mark of Rival]</b> by 1R, and increases AP of all allies except yourself by {30,33,36,39,42,45,48}. Triggers {1,1,1,2,2,2,2} times per round.

When using a Basic Attack against an enemy affected by <b>[Mark of Rival]</b>, increases allied Basic Attack and Support Attack DMG by {10,11,12,13,14,15,16}% for 1R. Stacks up to 5 times.

When using <b>[First Strike Blade]</b>, DMG Taken is reduced by 75% until the end of the turn.`,
    },
  },
};

export function getDemiskillData(characterName) {
  return DEMI_CHARACTERS[characterName] || null;
}

export function getMightSkillList() {
  return Object.values(DEMI_MIGHT_SKILLS);
}
