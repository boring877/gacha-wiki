// Rework archive: pre-rework ("before") vs current ("after") game text for
// characters that were reworked, keyed by character slug. Rendered by
// CharacterPageTemplate.astro as the Rework Archive section at the end of
// the character page so both versions stay documented on one page.
// Texts are verbatim from the game data ({} = per-raise-rank values).
export const REWORK_ARCHIVE = {
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
        title: "Dawnbringer, Unique Skill: Frontline Charisma",
        before:
          "During battle, increases Block Chance by {12,15,18,21,24}%. After using a Support, Charge, Leap, Teleportation, or Self-Mobility skill, at the end of the turn, increases all allies' SPD by {36%,42.75%,49.5%,56.25%,63%} for 2 Rounds. Stacks up to 3 times.",
        after:
          "Increases Block Chance by {22,32,42,52,62}% during battle. On a successful attack, increases the target's DMG Taken by {10,15,20,25,30}% for 2R. Block Chance is capped at 75%.",
      },
      {
        title: "Dawnbringer, Signature: Our Protector (with Frontline Disruptor)",
        before:
          "Increases the caster's SPD by 70% during battle and boosts all allies' Basic ATK DMG (excluding the caster) by 10%. Extends the duration of [Declaration of Victory] to 3 rounds, additionally increasing the target ally's Melee ATK by 36% of the caster's base Melee ATK. Also increases each ally's Ranged ATK and Magic ATK by 55% of the total Melee ATK gained from [Declaration of Victory]. Unlocks the skill [Frontline Disruptor] for use.\nFrontline Disruptor: Leaps forward in a sweeping motion, striking nearby enemies. Gains the [Courageous Charge] effect for 2 rounds and deals Slash DMG equal to 120% of Melee ATK to enemies within a 2.5m radius at the target location. Knocks targets back and inflicts [Faultline].\n- [Courageous Charge]: Increases Elemental DEF by 60. Inflicts Fixed DMG equal to 340% of Melee ATK to countered enemies.\n- [Faultline]: Increases DMG taken by 8%. Ends at the start of the caster's turn.",
        after:
          "Increases SPD by 100% and Melee ATK by 300% during battle. Extends the duration of [Declaration of Victory] to 3R and additionally increases the affected target's Melee ATK by 200% of the caster's Melee ATK. On a successful attack, creates an aftershock in a 4m-radius circular area around the caster, pulling in enemies and dealing additional Slash DMG equal to 180% of Melee ATK. Unlocks the skill [Frontline Disruptor] for use.\nFrontline Disruptor: Leaps low toward the designated location, sweeping through the surrounding area with a slash. Deals Slash DMG equal to 120% of Melee ATK to enemies within a 2.5m-radius circular area around the designated location. Knocks back enemies hit by the attack.",
      },
      {
        title: "Unique Trait: Snake-tongue",
        before:
          "Activates the Level 1 passive skill [Snake-tongue]. [Snake-tongue]: Once per round, at the end of own turn, delivers an encouraging word (?) to boost morale among allies. Increases SPD of all allies except self by 10% for 1 round. Has a low chance to decrease ACC of enemies by 20%.",
        after:
          "Activates the Level 1 passive skill [Snake-tongue]. [Snake-tongue]: Delivers some encouraging words (?) to boost the morale of the allies deployed alongside her. At the start of each Round, grants allies [Now That You Mention It...!] for 1R and enemies [Now That You Mention It...?] for 1R. [Now That You Mention It...!]: Increases Melee ATK by 10%. [Now That You Mention It...?]: Reduces Melee ATK by 10%.",
      },
      {
        title: "Unique Trait: Tactical Commander",
        before:
          "Activates the Level 3 passive skill [Command]. [Command]: At the start of any turn until the end, for each ally within a 5m radius, increases melee ATK of self and nearby allies by 5%.",
        after:
          "Activates the Level 3 passive skill [Command]. [Command]: From the start of any turn until the end of that turn, increases Melee ATK for self and nearby allies by 10% for each ally within 5m.",
      },
    ],
  },
};

export function getReworkArchive(slug) {
  return REWORK_ARCHIVE[slug] || null;
}
