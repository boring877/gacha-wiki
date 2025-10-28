// Rift XIV Data
export const rift14Data = {
  id: 'rift-14',
  name: 'Rift XIV',
  status: 'active',
  startDate: '2025-10-28T00:00:00+08:00',
  endDate: '2025-11-24T23:59:59+08:00',
  eventPeriod: 'October 28 - November 24, 2025',
  shortDescription:
    'Ice-focused rift featuring 50% ice damage amplification, critical defense reduction, and mitigation-based team enhancement mechanics.',
  fullDescription:
    'The fourteenth rift introduces powerful Ice damage mechanics with critical hit synergy. Ice damage dealers receive massive amplification with post-kill bonus damage, while critical hits significantly reduce enemy defenses. Mitigation-based mechanics provide stacking energy recovery and damage amplification for the entire team, creating a defensive playstyle with offensive rewards.',
  focus: 'Ice Damage & Critical Synergy',
  lawEffects: [
    'Ice property damage dealt by our characters increases by 50%, and ice property damage dealt after killing an enemy increases by 100%, lasting 10 seconds, stacking up to 1 layer.',
    "After our critical hit, the target's defense decreases by 30%, lasting 10 seconds, stacking up to 1 layer.",
    'Each time 【Resolve/Mitigation or null dmg】 succeeds, deals damage equal to 30% of own defense to nearby enemies centered on self. Can trigger at most once every 0.5 seconds.',
    "Each time our character successfully uses 【Resolve/Mitigation or null dmg】, the entire team's energy recovery speed increases by 1%, stacking up to 50 layers.",
    "Each time our character successfully uses 【Resolve/Mitigation or null dmg】, the entire team's damage dealt increases by 2%, stacking up to 25 layers.",
  ],
};
