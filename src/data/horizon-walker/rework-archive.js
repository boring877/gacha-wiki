// Rework archive: pre-rework ("before") vs current ("after") game text for
// characters that were reworked, keyed by character slug. Rendered by
// CharacterPageTemplate.astro as the Rework Archive section at the end of
// the character page so both versions stay documented on one page.
// Texts are verbatim from the game data ({} = per-raise-rank values, N = the
// skill's listed damage value). Sources: official patch notes (Jan 15 2026,
// Mar 12 2026, Jun 4 2026, Sep 10 2026 maintenance) + decrypted game tables
// (D:\HorizonWalker) for current text; wiki git history for pre-rework text.
export const REWORK_ARCHIVE = {
  kalina: {
    date: 'January 15, 2026',
    patchLabel: 'January 15th maintenance patch notes',
    patchHref: '/guides/horizon-walker/updates/update-2026-01-14/',
    intro:
      "Kalina and her signature weapon Tyrant Edge were reworked in the January 15, 2026 update, which overhauled the shared Swamp Elf class kit. The sections above show the current version; the pre-rework text is preserved below for reference. Values in {} list every raise rank.",
    unchangedNote:
      "Harpe Art and Assault were not changed by this rework. Blades of Tyranny's cooldown was also reduced from 2R to 1R.",
    items: [
      {
        title: 'Class Passive: Hunter on the Vine',
        before:
          'Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
        after:
          'Increases SPD by {20,23,26,29,32,35,38,41,44,47}. Additionally, when attacking, temporarily increases Melee ATK based on the straight-line distance moved.\nAt 10 m, Melee ATK increases by up to {60,66,72,78,84,90,96,102,108,114}%.',
      },
      {
        title: 'Class Passive: Survival Expert',
        before: 'Once per battle, survives with 1 HP and immediately gains 150 AP.',
        after:
          'Once per battle, survives a fatal blow with 1 HP and immediately gains {105,110,115,120,125,130,135,140,145,150} AP. Then restores {12,14,16,18,20,22,24,26,28,30}% of own HP.',
      },
      {
        title: 'Class Active: Blades of Tyranny',
        before:
          'The harpe slashes around with lightning-like speed. Deals Slash DMG equal to 380% of melee ATK to all enemies within a 2.5m circular radius.',
        after:
          "Slashes the area in a blinding flash of speed with twin harpes. Deals N% Slash DMG to all enemies within a 2.5m radius. Upon use, temporarily increases Crit Rate by {12.8,13.6,14.4,15.2,16,16.8,17.6,18.4,19.2,20}% of the user's Base Evasion. This bonus can reach up to a maximum of {32,34,36,38,40,42,44,46,48,50}%.",
      },
      {
        title: 'Special Trait: Double Down',
        before:
          'Activates the Level 3 Active Skill [Full Extent]. [Full Extent]: AP cost 60, pushes self to prepare for more intense actions. For 4R, AP Recovery increases by 36 and Evasion increases by 24%.',
        after:
          "Activates the Level 3 Active Skill [Full Extent].\n[Full Extent]: Consumes 60 AP to drive oneself to prepare for more intense action.\nFor 4 rounds, increases Melee ATK by 80% of the user's Base Evasion, and grants +36 AP Recovery and +24% Evasion.\nMelee ATK gained from this effect caps at 200.\nThe AP Recovery and Evasion bonuses also apply to allies with the [Swamp Elf] trait.",
      },
      {
        title: 'Tyrant Edge, Unique Skill: The Edge Runner',
        before:
          'On successful attack, lifesteals 24% of the damage dealt. When an enemy attacks self, turns to face the attacker, and on evasion, Slash Boost increases by 24%, stacking up to 3 times. On attack, increases CRIT DMG based on the straight-line distance moved during the turn. Increases up to 180% at a maximum of 6m.',
        after:
          "Increases Slash Boost by {12,15,18,21,24}% of the user's Base Evasion during battle. This effect can stack up to a maximum of {30,37.5,45,52.5,60}%. When targeted by an enemy attack, the user turns to face the attacker. If an attack hits, restores HP equal to {4,6,8,10,12}% of the damage dealt.",
      },
      {
        title: 'Kalina Signature: Persistence',
        before:
          'When you evade, you counterattack with the "Blades of Tyranny" skill and it has a separate 2R cooldown. If the "Survival Expert" skill effect is triggered, you recover 30% of the Max HP.',
        after:
          'At the start of battle, gains 30 AP and increases Melee ATK by 20%. Hunter on the Vine now increases Melee ATK and Crit DMG based on movement distance and AP spent. The increase in Crit DMG matches the percentage of Melee ATK gained through this skill. (1 AP is treated as 0.1m of linear distance.) Once per round, using Blades of Tyranny restores 55 AP and resets its cooldown.',
      },
    ],
  },

  samarika: {
    date: 'January 15, 2026',
    patchLabel: 'January 15th maintenance patch notes',
    patchHref: '/guides/horizon-walker/updates/update-2026-01-14/',
    intro:
      "Samarika and her signature weapon Nocturnal Watcher were reworked in the January 15, 2026 update, which overhauled the shared Swamp Elf class kit. The sections above show the current version; the pre-rework text is preserved below for reference. Values in {} list every raise rank.",
    unchangedNote:
      "Harpe Art, Swamp's Arrest, and the Nocturnal Watcher unique skill Silent Wings were not changed by this rework. Fang of the Swamp's cooldown was also reduced from 3R to 2R.",
    items: [
      {
        title: 'Class Passive: Hunter on the Vine',
        before:
          'Increases Mobility by 10. After attacking, Evasion increases by 570% until the end of the turn. Additionally, during a basic attack, Melee ATK increases proportionally to the straight distance moved. Up to 10m movement grants a maximum of 114% increase.',
        after:
          'Increases SPD by {20,23,26,29,32,35,38,41,44,47}. Additionally, when attacking, temporarily increases Melee ATK based on the straight-line distance moved.\nAt 10 m, Melee ATK increases by up to {60,66,72,78,84,90,96,102,108,114}%.',
      },
      {
        title: 'Class Active: Fang of the Swamp',
        before:
          'Leaps low towards the enemy, delivering a deadly strike while passing by with two Harpe blades. Deals Slash DMG equal to 257% of melee ATK while leaping over the enemy. If the target has the [Slow] effect, deals additional Slash DMG equal to 190% of melee ATK.',
        after:
          "Leaps low toward the enemy, slashing past them with a deadly dual strike from both Harpes. Deals Slash DMG equal to N% of Melee ATK as the user vaults over the target. If the target is afflicted with [Slow], deals additional Slash DMG equal to {100,110,120,130,140,150,160,170,180,190}% of the user's combined Melee ATK and Base Evasion.",
      },
      {
        title: "Special Trait: Swamp Hunting",
        before:
          "Activates the Level 3 passive skill [Hunter's Intuition]. [Hunter's Intuition]: After an attack, has a 90% chance to follow up with [Throw Swamp Trap]. [Throw Swamp Trap]: Throws a swamp trap at the enemy, dealing Poison DMG equal to 36% of Melee ATK to the target and nearby enemies, and apply [Slow] effect for 2R with a probability proportional to the enemy's size. [Slow]: Reduces SPD by 40%.",
        after:
          "Activates the Level 3 passive skill [Hunter's Intuition].\n[Hunter's Intuition]: At the end of a turn in which the user attacks, there is a 90% chance to trigger the Throw Swamp Trap follow-up skill.\n[Throw Swamp Trap]: Throws a swamp trap at the enemy, dealing Poison DMG equal to 36% of Melee ATK and has a 65% chance to reduce the target's SPD by 40%.\nEach time this skill is used, the user's Crit Rate increases by 5%, stacking up to 5 times.",
      },
      {
        title: 'Samarika Signature: Owl Huntress',
        before:
          'During combat, Poison Boost increases by 85% of base Slash Boost, and Slash Boost increases by 85% of base Poison Boost. When successfully attacking an enemy with the [Slow] effect during your turn, deals Additional Poison DMG equal to 9% of base Melee ATK × the amount of AP spent on skills that turn. This Additional Poison DMG can crit. After using Fang of the Swamp, its cooldown is reduced by 2R. On a successful hit, restores 30 AP.',
        after:
          'At the start of battle, gains 30 AP and increases Slash Boost and Poison Boost by 12% of base Evasion. This bonus can reach up to 30%. When successfully hitting an enemy afflicted with [Slow] during your turn, deal additional Poison DMG equal to 9% of base Melee ATK × the total AP spent on skills that turn. This Additional DMG can Crit. The additional Slash DMG dealt by Fang of the Swamp can also Crit. After using this skill, its cooldown is reduced by 2 rounds and you recover 55 AP. Cooldown reduction and AP recovery effect can trigger once every 2 rounds.',
      },
    ],
  },

  lisandria: {
    date: 'March 12, 2026',
    patchLabel: 'March 12th maintenance patch notes',
    patchHref: '/guides/horizon-walker/updates/update-2026-03-11/',
    intro:
      "Lisandria and her signature weapon Vengeful Thornblade were reworked in the March 12, 2026 update. The sections above show the current version; the pre-rework text is preserved below for reference. Values in {} list every raise rank.",
    unchangedNote:
      "Lisandria's other skills and unique traits were not changed by this rework.",
    items: [
      {
        title: 'Class Active: Blood Judgment',
        before:
          'Creates a [Blood Judgment] area on the battlefield. At the end of any turn, deals additional Immaterial DMG equal to 76% of melee ATK to all enemies within the area and loses 1 stack of [Salvation] effect. As long as the user possesses the [Salvation] effect, this continues to activate repeatedly. If the [Salvation] effect is no longer possessed, the [Blood Judgment] area dissipates.',
        after:
          'Creates a [Blood Judgment] zone on the battlefield and earns 1 stack of [Salvation] effect.\nAt the end of any turn, enemies within the zone take Additional Immaterial DMG equal to {200,225,250,275,300,325,350,375,400,425}% of Melee ATK, and 1 [Salvation] effect and 9% of Max HP are lost.\nThis effect repeatedly triggers while [Salvation] is possessed.\nIf [Salvation] is no longer possessed, the [Blood Judgment] zone disappears.',
      },
      {
        title: 'Vengeful Thornblade, Unique Skill: Bloomed by Revelation',
        before:
          "During combat, increases Magic ATK by 40% and Aggro Adjustment by 24. During your turn, increases allies' Support ATK DMG (excluding yourself) by 80%.",
        after:
          "During battle, Melee ATK increases by {20,25,30,35,40}% and Aggro Adjustment increases by {12,15,18,21,24}. During the weapon holder's turn, Support Attack DMG of allies other than self increases by {40,50,60,70,80}%.",
      },
      {
        title: 'Lisandria Signature: Vow Beneath the Thorned Bloom',
        before:
          'During combat, reduces Healing Output by 40% and decreases AP cost of Basic ATK by 16%. Grants the [Shatterbloom] effect. When using the skill "Sword of the Unknown", gain 60 AP and reduce its cooldown by 1R. [Shatterbloom]: Within the [Blood Judgment] zone, Additional Immaterial DMG increases by 1.5% for every 1 AP consumed during your turn, stacking gradually. Additional Immaterial DMG can increase up to a maximum of 640%. The effect resets upon becoming incapacitated.',
        after:
          'During battle, AP cost of Basic Attacks decreases by 16%. Using "Sword of the Unknown" grants 60 AP and reduces its cooldown by 1R. Using Blood Judgment grants [Penance].\n[Penance]: If current HP is 50% or higher, gains 1 [Salvation] at the end of any turn and Additional DMG Boost increases by 10%. At the end of the effect holder\'s turn, these effects are doubled.\nThis Additional DMG Boost can stack up to 20 times. If [Salvation] is not possessed, [Penance] and all Additional DMG Boost gained from this effect are removed.',
      },
    ],
  },

  valeta: {
    date: 'March 12, 2026',
    patchLabel: 'March 12th maintenance patch notes',
    patchHref: '/guides/horizon-walker/updates/update-2026-03-11/',
    intro:
      "Valeta was reworked in the March 12, 2026 update alongside Lisandria. The sections above show the current version; the pre-rework text is preserved below for reference. Values in {} list every raise rank.",
    unchangedNote:
      "Valeta's other skills and unique traits were not changed by this rework.",
    items: [
      {
        title: 'Class Active: Dark Sacrament (with Thornwhip of Condemnation)',
        before:
          "Can only be activated when possessing 3 or more [Judgment] effects. Grants self 3 stacks of [Angel of Condemnation] effect. [Angel of Condemnation]: Changes the 'Spinning Slash' skill to 'Thornwhip of Judgment'. Consumes 1 stack of [Angel of Condemnation] at the end of own turn. Cannot gain [Judgment] or [Salvation] effects while possessing [Angel of Condemnation].\nThornwhip of Judgment: Attacks enemies with divine power. Deals Slash DMG equal to 114% of melee ATK to enemies within a 5m, 120° fan range, and additional Immaterial DMG equal to 95% of magic ATK for each [Judgment] effect possessed.",
        after:
          'Can only be activated while possessing 3 or more [Judgment] effects. Grants 3 stacks of [Angel of Judgment].\n[Angel of Judgment]: Replaces the "Spinning Slash" skill with "Thornwhip of Condemnation."\nAt the end of the turn, 1 stack of [Angel of Judgment] is consumed.\nWhile [Angel of Judgment] is active, [Judgment] and [Salvation] effects cannot be gained.\nThornwhip of Condemnation: Strikes enemies with divine power.\nDeals Slash DMG equal to {90,99,108,117,126,135,144,153,162,171}% of Melee ATK to enemies within a 5m 120° fan-shaped area, and deals additional Immaterial DMG equal to {100,110,120,130,140,150,160,170,180,190}% of Magic ATK for each [Judgment] effect possessed.',
      },
    ],
  },

  everette: {
    date: 'June 4, 2026',
    patchLabel: 'June 4th maintenance patch notes',
    patchHref: '/guides/horizon-walker/updates/update-2026-06-03/',
    intro:
      "Everette and her signature weapon The Queen's Platinum Staff were reworked in the June 4, 2026 update. The sections above show the current version; the pre-rework text is preserved below for reference.",
    unchangedNote:
      "Everette's stats and the staff's unique skill Epilogue were not changed by this rework. The same update wove her skills into the Mira & Mirana [Bound Master] / [Radiance of Oath] synergy, so the skill descriptions above now reflect that shared kit.",
    items: [
      {
        title: 'Special Trait: Ancient Archmage',
        before:
          'Activates the unique trait [Ancient Archmage]. [Ancient Archmage]: Magic ATK 20%',
        after:
          'Activates the Level 1 Passive Skill [Ancient Archmage].\n[Ancient Archmage]: Whenever Everette uses a skill other than Standby or a Combat skill, her Magic ATK increases by 100%. This effect is removed at the end of the turn in which she uses a Standby or Attack skill. Can stack up to 5 times.',
      },
      {
        title: "Everette Signature: The Eternal Queen",
        before: 'AP Recovery increases by 12%.',
        after:
          "AP Recovery increases by 12%. Additionally, when Everette hits 3 / 4 / 5 or more enemies in a single attack, special effects are granted to her.\n[Beautiful Queen]: Everette's Crit Rate increases by 100% for 2R.\n[Elegant Queen]: Everette's Immaterial Boost increases by 300% for 2R.\n[Eternal Queen]: Everette's Crit DMG increases by 300% for 2R.",
      },
    ],
  },

  erneste: {
    date: 'September 10, 2026',
    patchLabel: 'September 10th maintenance patch notes',
    patchHref: '/guides/horizon-walker/updates/update-2026-09-09/',
    intro:
      "Erneste and her signature weapon Dawnbringer were reworked in the September 10, 2026 update. The sections above show the current version; the pre-rework text is preserved below for reference. Values in {} list every raise rank.",
    unchangedNote:
      "Erneste's five skills, her stats, and her rarity stages were not changed by this rework.",
    items: [
      {
        title: 'Dawnbringer, Unique Skill: Frontline Charisma',
        before:
          'During battle, increases Block Chance by {12,15,18,21,24}%. After using a Support, Charge, Leap, Teleportation, or Self-Mobility skill, at the end of the turn, increases all allies\' SPD by {36%,42.75%,49.5%,56.25%,63%} for 2 Rounds. Stacks up to 3 times.',
        after:
          "Increases Block Chance by {22,32,42,52,62}% during battle. On a successful attack, increases the target's DMG Taken by {10,15,20,25,30}% for 2R. Block Chance is capped at 75%.",
      },
      {
        title: 'Dawnbringer, Signature: Our Protector (with Frontline Disruptor)',
        before:
          "Increases the caster's SPD by 70% during battle and boosts all allies' Basic ATK DMG (excluding the caster) by 10%. Extends the duration of [Declaration of Victory] to 3 rounds, additionally increasing the target ally's Melee ATK by 36% of the caster's base Melee ATK. Also increases each ally's Ranged ATK and Magic ATK by 55% of the total Melee ATK gained from [Declaration of Victory]. Unlocks the skill [Frontline Disruptor] for use.\nFrontline Disruptor: Leaps forward in a sweeping motion, striking nearby enemies. Gains the [Courageous Charge] effect for 2 rounds and deals Slash DMG equal to 120% of Melee ATK to enemies within a 2.5m radius at the target location. Knocks targets back and inflicts [Faultline].\n- [Courageous Charge]: Increases Elemental DEF by 60. Inflicts Fixed DMG equal to 340% of Melee ATK to countered enemies.\n- [Faultline]: Increases DMG taken by 8%. Ends at the start of the caster's turn.",
        after:
          "Increases SPD by 100% and Melee ATK by 300% during battle. Extends the duration of [Declaration of Victory] to 3R and additionally increases the affected target's Melee ATK by 200% of the caster's Melee ATK. On a successful attack, creates an aftershock in a 4m-radius circular area around the caster, pulling in enemies and dealing additional Slash DMG equal to 180% of Melee ATK. Unlocks the skill [Frontline Disruptor] for use.\nFrontline Disruptor: Leaps low toward the designated location, sweeping through the surrounding area with a slash. Deals Slash DMG equal to 120% of Melee ATK to enemies within a 2.5m-radius circular area around the designated location. Knocks back enemies hit by the attack.",
      },
      {
        title: 'Unique Trait: Snake-tongue',
        before:
          "Activates the Level 1 passive skill [Snake-tongue]. [Snake-tongue]: Once per round, at the end of own turn, delivers an encouraging word (?) to boost morale among allies. Increases SPD of all allies except self by 10% for 1 round. Has a low chance to decrease ACC of enemies by 20%.",
        after:
          'Activates the Level 1 passive skill [Snake-tongue]. [Snake-tongue]: Delivers some encouraging words (?) to boost the morale of the allies deployed alongside her. At the start of each Round, grants allies [Now That You Mention It...!] for 1R and enemies [Now That You Mention It...?] for 1R. [Now That You Mention It...!]: Increases Melee ATK by 10%. [Now That You Mention It...?]: Reduces Melee ATK by 10%.',
      },
      {
        title: 'Unique Trait: Tactical Commander',
        before:
          'Activates the Level 3 passive skill [Command]. [Command]: At the start of any turn until the end, for each ally within a 5m radius, increases melee ATK of self and nearby allies by 5%.',
        after:
          'Activates the Level 3 passive skill [Command]. [Command]: From the start of any turn until the end of that turn, increases Melee ATK for self and nearby allies by 10% for each ally within 5m.',
      },
    ],
  },
};

export function getReworkArchive(slug) {
  return REWORK_ARCHIVE[slug] || null;
}
