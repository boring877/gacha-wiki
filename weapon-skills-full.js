// Weapon Skills Data
export const WEAPON_SKILLS = {
  'araha-weapon': {
    phantomMenace: {
      name: 'The Phantom Menace',
      type: 'Unique',
      description:
        'During battle, Ranged ATK increases by 30%, and Counterattack DMG and Support Counterattack DMG increase by 32% respectively. At the start of own turn, gains a shield equal to 10% of Max HP. When an ally, excluding self, is attacked, the [Support Ready] effect is granted. Enemies hit by a Support Counterattack will have the [Intimidated] effect applied in a 3m radius around the target for 1 turn. [Intimidated]: All ATK decreases by 25%. [Support Ready]: Ranged ATK increases by 5%, and the effect ends at the end of own turn. Can stack up to 5 times.',
    },
    ghost: {
      name: 'Araha Signature: Ghost',
      type: 'Signature',
      description:
        'The existing [Camouflage: Stealth] effect now allows support counterattacks even while in stealth. Upon defeating an enemy or successfully performing a support counterattack while in stealth, this skill will reactivate and grant the [Camouflage: Stealth] effect again for 3R. When using the',
    },
  },
  'bella-weapon': {
    prayerForGrace: {
      name: 'Prayer for Grace',
      type: 'Unique',
      description:
        'During combat increases Magic ATK by 40%, All DEF by 220, and reduces Aggro Adjustment by 24. At the start of battle, grants all allies the [Merciful Touch] effect. [Merciful Touch]: Increases Max HP by 55%. Does not restore current HP. This effect does not stack.',
    },
    devotionOfTheDivine: {
      name: 'Bella Signature: Devotion of the Divine',
      type: 'Signature',
      description:
        'During combat, increases SPD by 43% and Crush Boost by 86%. At the start of each round, gain 3 stacks of [Devoted Servant]. Gain 1 stack of [Guidance of the Divine] when using an active healing skill. [Devoted Servant]: When an ally takes damage and their HP falls below 68.7%, consumes 1 stack to follow up with',
    },
  },
  'berga-weapon': {
    crimsonBeastStrike: {
      name: 'Crimson Beast Strike',
      type: 'Unique',
      description:
        'Increases Slash Boost by 3.2% of Max HP during combat. When hit by a Weak Point Attack, All DEF increases by 2000 for the rest of the turn. After using a Charge, Leap, Teleportation, or Self-Mobility skill, gain 3 stacks of [Wild Rush] for 2 rounds. At the start of your turn, if you have [Wild Rush], Slash Boost increases by 40% for that turn. [Wild Rush]: Can stack up to 5 times. Loses 1 stack at the end of your turn after attacking.',
    },
    mirrorOfTheWild: {
      name: 'Berga Signature: Mirror of the Wild',
      type: 'Berga Signature',
      description:
        'At the start of battle, gain 2 stacks of [The Fire Within]. At the start of your first turn, gain 45 AP and increase SPD by 40% for that turn. When gaining the [Bloodrush] effect, CRIT Chance increases by an additional 33% for 2 rounds and grants immunity to [Taunt], [Fear], [Sleep], [Madness], [Stun], and [Focus Disruption].',
    },
  },
  'efreeti-weapon': {
    endlessHeat: {
      name: 'Endless Heat',
      type: 'Unique',
      description:
        'Increases Crit Rate by 4% of base Max HP during combat. After a successful support attack, grants all allies the [Thermal Saturation] effect at the start of the next turn. [Thermal Saturation]: Increases Elemental Boost by 12% and Additional DMG Boost by 32%. The effect expires at the end of the holder',
    },
    efreotiSignature: {
      name: 'Efreeti Signature: The Unextinguishable Flame',
      type: 'Signature',
      description:
        'Increases Crit Rate by 30% during combat. Basic ATK grants allies with [Emberbound] a 8% increase in Crit Rate and Additional DMG Boost for 1R. When an ally with [Emberbound] attacks, the caster also performs a support attack with Ember Vortex, even if the ally doesn',
    },
  },
  'everette-weapon': {
    epilogue: {
      name: 'Epilogue',
      type: 'Unique',
      description:
        'Once per round, at the start of your turn, your magic ATK increases by 0.8% for each unit of AP you hold above 100. (For example, holding 300 AP results in a magic ATK increase of 160%)',
    },
    eternalQueen: {
      name: 'The Eternal Queen',
      type: 'Everette Signature',
      description: 'AP Recovery increases by 12%.',
    },
  },
  'fammene-weapon': {
    sadEnding: {
      name: 'Sad Ending',
      type: 'Unique',
      description: 'When using a skill (excluding standby) during the turn, restores all allies',
    },
    windOfTragedy: {
      name: 'Fammene Signature: Wind of Tragedy',
      type: 'Fammene Signature',
      description:
        'Increases AP Recovery by 8%. Gains the [Whirling Wind] effect at the start of battle. (Same as the [Whirling Wind] effect caused by the level 1',
    },
  },
  'gridelda-weapon': {
    theRiverOfStars: {
      name: 'The River of Stars',
      type: 'Unique',
      description:
        'During battle, Magic ATK increases by 80% and Crush Boost increases by 40%. Each ally',
    },
    theRendezvous: {
      name: 'The Rendezvous',
      type: 'Griselda Signature',
      description: 'Once per Round, when using the',
    },
  },
  'headless-knight-weapon': {
    theEye: {
      name: 'The Eye',
      type: 'Unique',
      description: 'On successful attack, reduces the enemy',
    },
    madGeneral: {
      name: 'Headless Knight Signature: The Mad General',
      type: 'Headless Knight Signature',
      description:
        'On successful attack, increases CRIT rate by 2% and CRIT DMG by 4%. Can stack up to 20 times.',
    },
  },
  'ines-weapon': {
    destiny: {
      name: 'Destiny',
      type: 'Unique',
      description:
        'CRIT rate is increased by 40%. Applies [Fate] effect to enemies successfully hit for 1R. [Fate]: When attacking an enemy with this effect, reduces their Slash DEF by 1200 until the end of the turn.',
    },
    theWinterDuchess: {
      name: 'Ines Signature: The Winter Duchess',
      type: 'Character Signature',
      description: 'Reduces AP consumption for the',
    },
  },
  'jua-weapon': {
    mayTheHonorBeInTheBullet: {
      name: 'May the Honor Be in the Bullet',
      type: 'Unique',
      description:
        'Increases personal AP Recovery by 40%, and raises Pierce boost for all allies by 24%. When allies other than the user utilize any skill aside from Standby, they gain the [Glory] effect, stacking up to a maximum of 30 times. At the start of each round, all [Glory] effects are consumed, distributing AP to each ally (other than the user) equal to 4% of the user\\',
    },
    juaSignature: {
      name: 'Jua Signature: The One Who Judges',
      type: 'Signature',
      description:
        'On Basic Attack, there is a 50% chance to reduce the cooldown of the skills [Combat Roll], [Mental Corrosion], and [The Executioner] by 1 round.',
    },
  },
  'kalina-weapon': {
    edgeRunner: {
      name: 'The Edge Runner',
      type: 'Unique',
      description:
        'On successful attack, lifesteals 24% of the damage dealt. When an enemy attacks self, turns to face the attacker, and on evasion, Slash Boost increases by 24%, stacking up to 3 times. On attack, increases CRIT DMG based on the straight-line distance moved during the turn. Increases up to 180% at a maximum of 6m.',
    },
    persistence: {
      name: 'Persistence',
      type: 'Kalina Signature',
      description: 'When you evade, you counterattack with the',
    },
  },
  'kalma-weapon': {
    cruiseSystem: {
      name: 'Cruise System',
      type: 'Unique',
      description:
        'During combat, Magic ATK increases by 40%. When using a skill other than Standby, gain [Overvoltage] for 1 Round. [Overvoltage]: Increases Electric Boost by 24%. If the skill used was a charge, leap, teleportation, or self-mobility skill refreshes the effect to increase Electric Boost by 64% instead.',
    },
    clearYourMindAndShoot: {
      name: 'Kalma Signature: Clear Your Mind and Shoot',
      type: 'Kalma Signature',
      description: 'During combat, Increases Crit Rate by 6.8%, and',
    },
  },
  'kilon-weapon': {
    unbreakableWrath: {
      name: 'Unbreakable Wrath',
      type: 'Unique',
      description:
        'Increases Melee ATK by 72% during combat. When hit or healed, gain a stack that increases Max HP by 12% and Aggro Adjustment by 12. Stacks up to 9 times. On Basic ATK, gain 1 stack of [Composure]. [Composure]: Stacks up to 6 times. At max stacks, at the start of your turn, gain 55 AP and the [Fortitude] effect, then Composure resets. [Fortitude]: Consumes 50% of your HP and increases Melee ATK by 160% of the HP consumed. Lasts until the end of the turn. If you Standby, recover HP equal to the amount consumed.',
    },
    wastelandsEnforcer: {
      name: 'Wastelands',
      type: 'Kilon Signature',
      description:
        'Increases Lifesteal by 4% during combat. While holding the [Fortitude] effect, using the',
    },
  },
  'korabi-weapon': {
    painborneBoom: {
      name: 'Painborne Bloom',
      type: 'Unique',
      description:
        'Magic ATK increases by 40% during battle. Enemies hit by your attacks are afflicted with [Pulse of the Rift] for 2 rounds. [Pulse of the Rift]: SPD increases by 32% and Physical DEF decreases by 480.',
    },
    bloomingBloodlust: {
      name: 'Blooming Bloodlust',
      type: 'Korabi Signature',
      description:
        'During combat, Additional Response triggered by the skill Timid, Yet Explosive! always activates at 100% chance. The [Burning Desire] effect granted by the skill Blood Pact increases the target ally',
    },
  },
  'lisandria-weapon': {
    bloomedByRevelation: {
      name: 'Bloomed by Revelation',
      type: 'Unique',
      description:
        'During combat, increases Magic ATK by 40% and Aggro Adjustment by 24. During your turn, increases allies',
    },
    vowBeneathThornedBloom: {
      name: 'Lisandria Signature: Vow Beneath the Thorned Bloom',
      type: 'Signature',
      description:
        'During combat, reduces Healing Output by 40% and decreases AP cost of Basic ATK by 16%. Grants the [Shatterbloom] effect. When using the skill',
    },
  },
  'luise-weapon': {
    inferno: {
      name: 'Inferno',
      type: 'Unique',
      description:
        'Increases Critical Rate by 40% during combat. For every 1 point below 100 base Movement Speed, increases Critical Damage by 6%. At the start of any random turn, gains [Sunlit Ember]. [Sunlit Ember]: Increases Heat Boost by 32%, stacking up to 5 times. Expires at the end of the user',
    },
    flare: {
      name: 'Luise Signature: Flare',
      type: 'Signature',
      description:
        'Reduces AP cost for Flame Arrow (-15), Fireball (-30), and Ascending Flame (-75). If attacking with any skill except',
    },
  },
  'mahari-weapon': {
    hammerAndAnvil: {
      name: 'Hammer and Anvil',
      type: 'Unique',
      description:
        'During battle, Melee ATK increases by 24%, and all DEF increases by 360. At the end of own turn, if the character has a shield effect, all allies are granted the [Origin of Resolve] effect for 1R. [Origin of Resolve]: CRIT DMG increases by 14%, and additionally increases by 32% of the caster',
    },
    maharSignature: {
      name: 'Mahari Signature: Rank Formation',
      type: 'Signature',
      description: 'Once per round, at the end of an ally',
    },
  },
  'marhim-weapon': {
    theCrimsonExecutioner: {
      name: 'The Crimson Executioner',
      type: 'Unique',
      description:
        'Increases Pierce Boost by 40% during battle. On attack, temporarily increases melee ATK proportionally based on the distance moved in a straight line this turn, up to 2m, increasing by 80%.',
    },
    theBloodbath: {
      name: 'Marhim Signature: The Bloodbath',
      type: 'Character Signature',
      description: 'Using the',
    },
  },
  'matrotho-weapon': {
    gleamblade: {
      name: 'Gleamblade',
      type: 'Unique',
      description:
        'At the start of each round, increases CRIT rate by 0.8% for each amount of AP Recovery exceeding 100. If current HP is 100% at the start of the round, CRIT rate increases by an additional 16%.',
    },
    theWindblade: {
      name: 'Matrotho Signature: The Windblade',
      type: 'Character Signature',
      description: 'Once per round, performs a support attack on successful attack.',
    },
  },
  'min-eun-sol-weapon': {
    darkGuardianship: {
      name: 'Dark Guardianship',
      type: 'Unique',
      description:
        'During battle, increases magic ATK by 24% of max HP. Recovers 24% of HP each time an enemy on the battlefield is defeated.',
    },
    blackPulse: {
      name: 'Black Pulse',
      type: 'Min Eun-sol Signature',
      description: 'At the start of any turn, if you have the [King',
    },
  },
  'nari-weapon': {
    skill1: {
      name: 'Star Shooter',
      type: 'Unique',
      description:
        'During battle, Pierce Boost increases by 40%. At the start of your turn, Critical Rate increases by 40%. This effect is removed at the end of the turn or upon moving.',
    },
    skill2: {
      name: 'Nari Exclusive: Aether Bullet Sharpshooter',
      type: 'Signature',
      description: 'During combat, the AP consumption of the',
    },
  },
  'nika-weapon': {
    deathSentence: {
      name: 'Death Sentence',
      type: 'Unique',
      description:
        'Increases Poison Boost by 80%. On successful attack, deals additional Poison DMG equal to 120% of ACC.',
    },
    venomousFragrance: {
      name: 'Nika Signature: Venomous Fragrance',
      type: 'Character Signature',
      description:
        'At the start of any turn and when casting own skill, intoxicates enemies within 5m range. If a target under the [Necrotoxin] effect ends their turn, deals additional Poison DMG equal to 20% of the accumulated [Necrotoxin].',
    },
  },
  'nymset-weapon': {
    mighty: {
      name: 'Mighty',
      type: 'Unique',
      description:
        'During battle, increases SPD by 32% and Aggro Adjustment by 40. If an enemy within 5m attacks you, temporarily decreases their All ATK by 58%.',
    },
    seraph: {
      name: 'Nymset Signature: Seraph',
      type: 'Character Signature',
      description: 'During battle, increases the attack radius of the',
    },
  },
  'olivia-weapon': {
    phenomenon: {
      name: 'Phenomenon',
      type: 'Unique',
      description:
        'Reduces CRIT Damage dealt by 40%, but increases Melee ATK by 40% while in combat. At the start of your turn, gain 1 stack of [Blade Resonance]. (This effect does not trigger if you used Standby in your previous turn.) Upon reaching 3 stacks of [Blade Resonance], gain [Grand Echo] for 2 turns. [Blade Resonance]: Increases Basic ATK DMG and Combat Skill DMG by 12%, stacking up to 3 times. [Grand Echo]: Increases Slash Boost by 20%. (All [Blade Resonance] stacks reset when [Grand Echo] ends.)',
    },
    novaStrike: {
      name: 'Nova Strike',
      type: 'Olivia Signature',
      description: 'After using',
    },
  },
  'osla-weapon': {
    verdictOfTheHistory: {
      name: 'Verdict of the History',
      type: 'Unique',
      description:
        'During battle, movement speed increases by 32% and Aggro Adjustment increases by 40. For any enemy that initiates an attack on the unit, all support counterattacks, counterattacks, or additional attacks directed at that enemy during the same turn are treated as Weak Point Attacks (provided the skill used is eligible for Weak Point Attacks). When attacked, allied units—except the unit under attack—receive the [Primordial Spirit',
    },
    ancientSpiritsCore: {
      name: 'Ancient Spirit',
      type: 'Osla Signature',
      description: 'During battle, the probability of applying the [Taunt] effect from the',
    },
  },
  'pantheri-weapon': {
    flowingArc: {
      name: 'Flowing Arc',
      type: 'Unique',
      description:
        'Increases movement speed during combat by 40%, and Aggro Adjustment by 18. When an ally successfully dodges, the wielder gains 1 stack of [Sword Wave], up to 6 stacks. At the start of each round, grants either [Deep Trench] or [High Crest] to all allies except the wielder for 1 round. All [Sword Wave] stacks are consumed. Effects granted by',
    },
    tidalFlowerDance: {
      name: 'Pantheri Signature: Tidal Flower Dance',
      type: 'Signature',
      description:
        'Gain 1 stack of [Sword Wave] on each attack. When using a combat skill, restore HP equal to 8% of your Evasion stat for 1 round upon dodging. When using',
    },
  },
  'platina-weapon': {
    symbolOfImmortality: {
      name: 'Symbol of Immortality',
      type: 'Unique',
      description:
        'Each time attacked by an enemy, increases AP Recovery by 24%, and increases Slash DEF, Crush DEF, and Pierce DEF by 480 until the start of the next round. Can stack up to 5 times.',
    },
    thePlatinumKnight: {
      name: 'The Platinum Knight',
      type: 'Platina Signature',
      description: 'Upon starting the battle, gains the [Gravity Focus] effect.',
    },
  },
  'samarika-weapon': {
    skill1: {
      name: 'Silent Wings',
      type: 'Unique',
      description:
        'During combat, Crit Rate increases by 40%. While it is your turn, enemies afflicted with [Slow] are visible. If you attack and at least one enemy has the [Slow] effect, your Slash Boost and Poison Boost each increase by 80% until the end of the turn.',
    },
    skill2: {
      name: 'Samarika Signature: Owl Huntress',
      type: 'Signature',
      description:
        'During combat, Poison Boost increases by 85% of base Slash Boost, and Slash Boost increases by 85% of base Poison Boost. When successfully attacking an enemy with the [Slow] effect during your turn, deals Additional Poison DMG equal to 9% of base Melee ATK × the amount of AP spent on skills that turn. This Additional Poison DMG can crit. After using Fang of the Swamp, its cooldown is reduced by 2R. On a successful hit, restores 30 AP.',
    },
  },
  'so-joo-hee-weapon': {
    traceOfVanity: {
      name: 'Trace of Vanity',
      type: 'Unique',
      description:
        'On Weakness Attack, grants one stack of [Mark of Vanity] that lasts for 2 Rounds. Additionally, on successful attack, grants the target an additional stack of [Mark of Vanity] and increases ally ACC by 40%. [Mark of Vanity]: Reduces all DEF of the target by 320 and further reduces Pierce DEF by an additional 280. Can stack up to 2 times.',
    },
    magnifique: {
      name: 'Character Signature: Magnifique',
      type: 'Signature',
      description: '[Mark of Vanity] effect',
    },
  },
  'tx-manticore-weapon': {
    overwhelmingBody: {
      name: 'Overwhelming Body',
      type: 'Unique',
      description:
        'During battle, All DEF increases by 400. When self counterattacks, Ranged ATK increases by 60% for 1R. Applies the [Fatigue Issue] effect to enemies hit by self',
    },
    oppressor: {
      name: 'TX - Manticore Signature: Oppressor',
      type: 'TX - Manticore Signature',
      description: 'The [Fatigue Issue] effect',
    },
  },
  'valeta-weapon': {
    bloodOnTheEdge: {
      name: 'Blood on the Edge',
      type: 'Unique',
      description:
        'During battle, increases Immaterial Boost by 48%. On a successful attack, has a 100% chance to deal Additional Immaterial DMG equal to 200% of magic ATK. If you defeat an enemy, restores HP of all allies by 160% of magic ATK at the end of the turn.',
    },
    thornwhipOfCondemnation: {
      name: 'Voleta Signature: Thornwhip of Condemnation',
      type: 'Voleta Signature',
      description:
        'During battle, the AP cost of basic attack skills decreases by 5. Gains 3 stacks of [Judgment] at the start of the battle.',
    },
  },
  'vlissing-weapon': {
    theGreatFlood: {
      name: 'The Great Flood',
      type: 'Unique',
      description:
        'Reduces AP cost of Basic ATK by 32%. When targeting an ally with a skill, increases their All DEF by 320 for 1 Round. When targeting an enemy with a skill, reduces their All DEF by 720 for 2 Rounds.',
    },
    sacredFlow: {
      name: 'Vlissing Signature: Sacred Flow',
      type: 'Character Signature',
      description: 'During combat, Max HP +8% and Additional DMG Boost +36%. Changes',
    },
  },
  'yeon-chae-young-weapon': {
    eliteAgentsDignity: {
      name: 'An Elite Agent',
      type: 'Unique',
      description:
        'During combat Crit DMG +44% and SPD +36%. When allies other than yourself take their turn and land a Weak Point Attack, gain [Briefing] (stacks up to 2 times). At the start of your turn, if [Briefing] is at max stacks, gain [Keen Insight]. [Keen Insight]: Increases Pierce Boost by 56%.',
    },
    commenceOperation: {
      name: 'Yeon Chae-young Signature: Commence Operation',
      type: 'Signature',
      description:
        'Increases Ranged ATK +10% during combat. When Crit Rate exceeds 100%, half of the excess value is temporarily converted into Crit DMG. At the start of your turn, if you have [Keen Insight], gain [Extra Action] once, and the AP cost of',
    },
  },
  'yeonwoo-weapon': {
    munchMunchAgain: {
      name: 'Munch Munch Again',
      type: 'Unique',
      description:
        'Increases Critical Rate by 24% and Critical DMG by 32% during battle. When receiving an HP Recovery effect, gains the [Gained Weight] effect for 1 round. [Gained Weight]: Increases Crush Boost by 80%.',
    },
    everythingsTastyAndHappy: {
      name: 'Yeonwoo Signature: Everything',
      type: 'Yeonwoo Signature',
      description: 'If Munch O',
    },
  },
  'yui-weapon': {
    lockOnFromBeyond: {
      name: 'Lock-on from Beyond',
      type: 'Unique',
      description:
        'Increases Pierce Boost by 40% during combat. On attack, gain the [Keen Lock-on] effect applied only to that attack. [Keen Lock-on]: Increases your Crit DMG and Ranged ATK by 10% for each ally on the field (excluding yourself), up to a maximum of 8 allies.',
    },
    soulResonance: {
      name: 'Yui Signature: Soul Resonance',
      type: 'Yui Signature',
      description:
        'During battle, increases Basic ATK DMG of both the user and their summons by 16%. The Weak Point Hit chance triggered by the Anarchic Barrage skill is doubled. When Anarchic Barrage targets 2 or fewer enemies: Against 2 enemies: temporarily increases Combat Skill DMG by 18% and restores 12 AP. Against 1 enemy: temporarily increases Combat Skill DMG by 36% and restores 24 AP.',
    },
  },
  'yvonna-weapon': {
    frozenTears: {
      name: 'Frozen Tears',
      type: 'Unique',
      description:
        'Increases Cold Boost by 40%. Each time an ally attacks during battle, increases own magic ATK by 32% for 1 round. Can stack up to 5 times.',
    },
    frozenSmile: {
      name: 'Yvonna Signature: Frozen Smile',
      type: 'Yvonna Signature',
      description:
        'When successfully attacking with an action other than a response, gains an additional [Chill] effect at the end of the turn.',
    },
  },
};
