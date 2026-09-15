// MAJO skill formula resolver: converts the game's runtime formula tokens in
// skill detail text ({DAMAGE:damageAdjust+60}, {STACKABLEBUFF:...}, etc.) to
// the display numbers. The +N in each token IS the displayed value (the adjust
// keys resolve to 0 in the game's static detail text), with one exception:
// {COST:...} values are stored x100 (32000 -> 320 charge, sensible against the
// "charge below 400" thresholds in the same sentences). Stackable per-stack
// values were extracted from character_assets.ab / character_prefabs (Effect
// data values are stored x100). Dayu's interference charge-speed stack and her
// auto-defense stack are not resolvable to a sane display value from client
// data, so they render as "?".

const STACKABLE_VALUES = {
  P0001_InterferenceSkillEffects_ExtraDamage_Lv1: 6,
  P0008_InterferenceSkillEffects_AtkDown_Lv1: 5,
  'P0008_ExInterferenceSkillEffects_AtkDown_Lv1': 7,
  P0009_InterferenceSkillEffects_AtkUp_Lv1: 2.4,
  'P0011_ExInterferenceSkillEffects_MagicPierceUp_Lv1': 2.1,
  P0015_InterferenceSkillEffects_PhysicsPierceUp_Lv1: 3,
  P0015_PassiveSkillEffects_DefUp_Lv1: 16,
  P0016_InterferenceSkillEffects_AtkSpeedUp_Lv1: 9,
  P0018_InterferenceSkillEffects_CriRateUp_Lv1: 5,
  P0022_InterferenceSkillEffects_ExtraHeal_Lv1: 19,
  P0028_InterferenceSkillEffects_Lv1: null, // charge-speed stack; raw 700000, scale unknown
  P0034_PassiveSkillEffectsEx_PhysicsPierceUp_Lv1: 7.5,
  P0039_PassiveSkillEffects_AtkSpeedUp_Lv1: 32,
  'P0039_PassiveSkillEffectsEx_AtkSpeedUp_Lv1': 38,
  P0045_PassiveSkillEffects_ExtraDamage_Lv1: 3.2,
  'P0045_PassiveSkillEffectsEx_ExtraDamage_Lv1': 4.2,
  StackableBuff_P0028_AutoSkill_1_Lv1: null, // value not in client data
  StackableBuff_P0037_PassiveSkill_2_Lv1: 11,
};

export function resolveSkillFormula(text = '') {
  if (!text.includes('{')) return text;
  return text
    // {STACKABLEBUFF:<id>:<adjustKey>:<fallback>} -> per-stack value
    .replace(/\{STACKABLEBUFF:([^:]+):[^:]*:([-+]?[\d.]+)\}/g, (m, id, fallback) => {
      const v = STACKABLE_VALUES[id];
      if (v === undefined) return fallback;
      if (v === null) return '?';
      return String(v);
    })
    // {COST:...+32000} -> 320 (stored x100, charge units match the cost bar)
    .replace(/\{COST:[^{}]*?(-?[\d.]+)\}/g, (m, n) => String(Number(n) / 100))
    // {DAMAGE:...+60} {HEAL:...+25} {BUFF:...+16} {STACKDURATION:...+7.5}
    // {CDELAPSED:...+7} {BUFFDURATION:...+N} -> number
    .replace(/\{[A-Z]+:[^{}]*?(-?[\d.]+)\}/g, '$1');
}
