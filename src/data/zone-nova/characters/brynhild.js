// Brynhild - Zone Nova Character Data
// SSR Warrior from A.S.A faction with Holy element
// Generated from decrypted live master data (2026-09-03); skills at max level (Lv.10)
export const brynhildData = {
  name: "Brynhild",
  image: "Brynhild.png",
  rarity: 'SSR',
  element: "Holy",
  class: "Warrior",
  role: "DPS",
  faction: "A.S.A",
  stats: {
    hp: "6,600",
    attack: "480",
    defense: "690",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
  },
  skills: {
    normal: {
      name: "Cold Radiance Slash",
      cooldown: "2.0s",
      description: "Deals holy damage equal to 100% of own DEF to the nearest enemy unit.",
    },
    auto: {
      name: "Soul Guidance",
      cooldown: "0.1s",
      description: "Performs 3 leaping dashes toward the farthest enemy unit. Each dash deals holy damage equal to 195% of own DEF to all enemies within 1.5 meters of self and inflicts [Nethermark].\nAfter the third dash, gains a shield equal to 180% of own DEF.\nNormal attacks and ultimate skills can be used between the three dashes.\nCD:0.1/0.1/5s\n[Nethermark]: Healing received is reduced by 130% and shields received are reduced by 53%. Takes holy damage equal to 56% of Brynhild's DEF every second for 7 seconds. Does not stack.",
    },
    ultimate: {
      name: "Einherjar Judgment",
      energyCost: "4",
      cooldown: "3.0s",
      description: "Targets the enemy unit with the lowest current HP percentage and leaps above it, first inflicting [Nethermark], then bringing down a giant sword to deal holy damage equal to 880% of own DEF. Remains beside the target after landing.\nIf the target's HP before the damage is dealt is no higher than 50%, this ultimate skill gains 195% increased damage, 94% increased DEF Penetration Rate, and 77% increased holy Resistance Penetration.\nIf the target has a death prevention effect after this ultimate skill's damage is resolved, inflicts [Pending Judgment].\n[Pending Judgment]: Does not stack and lasts until triggered. When the bearer no longer has a death prevention effect, it immediately takes another instance of [Einherjar Judgment] damage.\nRegardless of its HP at that time, this damage applies the damage increase and penetration bonuses above, then removes [Pending Judgment]. This effect remains active after Brynhild dies.",
    },
    passive: {
      name: "Soul Spectrum Analysis",
      description: "After being attacked, permanently gains 1 stacks of [Soul Hue] based on the attacker's innate element.\nEach element can grant up to 1 stacks every 5 seconds, with separate timers for each element. Enemies without an element share one timer.\n[Soul Hue] stacks up to 12 times. No more stacks can be gained at the cap.\nEach stack of [Soul Hue] increases own DEF by 6% and shields received by 4.1%.\nWhen Brynhild is attacked, each stack of [Soul Hue] reduces the attack's DEF Penetration Rate against her by 2.9%.\nAny reduction below 0% is treated as additional DEF for Brynhild against that instance of damage.",
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "Own DEF increases by 10%.\nAt the start of battle, every 500 DEF increases own holy damage by 5%, up to 6 times.",
    requirements: {
      faction: "A.S.A",
      element: "Holy",
      alternativeConditions: "Team contains 2 A.S.A characters or 2 Holy characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "Each time 1 stack of [Soul Hue] is successfully gained, gains an additional shield equal to 67% of own DEF.",
    },
    {
      level: 2,
      effect: "Own damage over time increases by 29%. When attacked by a unit with [Pending Judgment], damage dealt by that unit is reduced by 51%.",
    },
    {
      level: 3,
      effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
    },
    {
      level: 4,
      effect: "Holy damage increases by 46%.",
    },
    {
      level: 5,
      effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
    },
    {
      level: 6,
      effect: "All damage penetrates 45% Holy Resistance.\nWhen Brynhild is attacked, each stack of [Soul Hue] additionally reduces the attack's Resistance Penetration against her by 5.5%. Any reduction below 0% is treated as additional Resistance for Brynhild against that instance of damage.",
    },
  ],
  memoryCard: {
    name: "Afternoon Waiting",
    image: "Brynhildcard.png",
    stats: {
      hp: "6,000",
      attack: "600",
      defense: "600",
    },
    effects: [
      "DEF increases by 69%.",
      "The wearer's Holy damage increases by 33%.",
      "After casting an ultimate skill, the wearer gains a shield equal to 53% of their Max HP. This effect can trigger at most once every 3 seconds.",
    ],
    restriction: "Only effective for Warrior",
  },
  tags: [
    "Shield",
    "Anti-Heal",
    "DOT",
    "Holy Damage",
  ],
};

export const brynhildSEO = {
  title: `Brynhild - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Brynhild, a SSR Holy Warrior in Zone Nova. Includes skills, awakenings, the Afternoon Waiting memory card, and optimal build strategies.`,
};

export default brynhildData;