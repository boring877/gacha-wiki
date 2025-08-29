// Horizon Walker Character Table Utilities
// Complete stat utility collection for all character stats

/**
 * Gets a formatted stat value
 * @param {Object} stats - Character stats object
 * @param {string} statKey - The stat key to retrieve
 * @returns {string} Formatted stat value or 'N/A'
 */
export const getStatValue = (stats, statKey) => {
  if (!stats || !stats[statKey]) return 'N/A';
  return stats[statKey];
};

// ===== BASIC ATTRIBUTE STATS =====
/**
 * Gets formatted Strength value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted strength value or 'N/A'
 */
export const getStrengthValue = stats => {
  return getStatValue(stats, 'strength');
};

/**
 * Gets formatted Technic value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted technic value or 'N/A'
 */
export const getTechnicValue = stats => {
  return getStatValue(stats, 'technic');
};

/**
 * Gets formatted Intelligence value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted intelligence value or 'N/A'
 */
export const getIntelligenceValue = stats => {
  return getStatValue(stats, 'intelligence');
};

/**
 * Gets formatted Vitality value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted vitality value or 'N/A'
 */
export const getVitalityValue = stats => {
  return getStatValue(stats, 'vitality');
};

/**
 * Gets formatted Agility value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted agility value or 'N/A'
 */
export const getAgilityValue = stats => {
  return getStatValue(stats, 'agility');
};

// ===== COMBAT STATS =====
/**
 * Gets formatted Melee Attack value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted melee attack value or 'N/A'
 */
export const getMeleeAtkValue = stats => {
  return getStatValue(stats, 'meleeAtk');
};

/**
 * Gets formatted Ranged Attack value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted ranged attack value or 'N/A'
 */
export const getRangedAtkValue = stats => {
  return getStatValue(stats, 'rangedAtk');
};

/**
 * Gets formatted Magic Attack value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted magic attack value or 'N/A'
 */
export const getMagicAtkValue = stats => {
  return getStatValue(stats, 'magicAtk');
};

/**
 * Gets formatted Max HP value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted max HP value or 'N/A'
 */
export const getMaxHpValue = stats => {
  return getStatValue(stats, 'maxHp');
};

/**
 * Gets formatted Speed value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted speed value or 'N/A'
 */
export const getSpeedValue = stats => {
  return getStatValue(stats, 'spd');
};

/**
 * Gets formatted Starting AP value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted starting AP value or 'N/A'
 */
export const getStartingApValue = stats => {
  return getStatValue(stats, 'startingAp');
};

/**
 * Gets formatted AP Recovery value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted AP recovery value or 'N/A'
 */
export const getApRecoveryValue = stats => {
  return getStatValue(stats, 'apRecovery');
};

/**
 * Gets formatted Accuracy value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted accuracy value or 'N/A'
 */
export const getAccuracyValue = stats => {
  return getStatValue(stats, 'accuracy');
};

/**
 * Gets formatted Evade value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted evade value or 'N/A'
 */
export const getEvadeValue = stats => {
  return getStatValue(stats, 'evade');
};

/**
 * Gets formatted Critical Rate value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted critical rate value or 'N/A'
 */
export const getCritRateValue = stats => {
  return getStatValue(stats, 'critRate');
};

/**
 * Gets formatted Critical Damage value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted critical damage value or 'N/A'
 */
export const getCritDmgValue = stats => {
  return getStatValue(stats, 'critDmg');
};

// ===== CALCULATED STATS =====
/**
 * Gets the highest attack stat from a character's stats
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted highest attack value or 'N/A'
 */
export const getHighestAttack = stats => {
  if (!stats) return 'N/A';

  const meleeAtk = parseInt(stats.meleeAtk?.replace(/,/g, '')) || 0;
  const rangedAtk = parseInt(stats.rangedAtk?.replace(/,/g, '')) || 0;
  const magicAtk = parseInt(stats.magicAtk?.replace(/,/g, '')) || 0;

  const highestAtk = Math.max(meleeAtk, rangedAtk, magicAtk);

  return highestAtk > 0 ? highestAtk.toLocaleString() : 'N/A';
};

/**
 * Gets the attack type with highest value (for display)
 * @param {Object} stats - Character stats object
 * @returns {string} Attack type name or 'N/A'
 */
export const getHighestAttackType = stats => {
  if (!stats) return 'N/A';

  const meleeAtk = parseInt(stats.meleeAtk?.replace(/,/g, '')) || 0;
  const rangedAtk = parseInt(stats.rangedAtk?.replace(/,/g, '')) || 0;
  const magicAtk = parseInt(stats.magicAtk?.replace(/,/g, '')) || 0;

  const highest = Math.max(meleeAtk, rangedAtk, magicAtk);

  if (highest === 0) return 'N/A';
  if (highest === meleeAtk) return 'Melee';
  if (highest === rangedAtk) return 'Ranged';
  if (highest === magicAtk) return 'Magic';

  return 'N/A';
};

/**
 * Gets all basic attributes in an object
 * @param {Object} stats - Character stats object
 * @returns {Object} Object with all basic attributes
 */
export const getBasicAttributes = stats => {
  return {
    strength: getStrengthValue(stats),
    technic: getTechnicValue(stats),
    intelligence: getIntelligenceValue(stats),
    vitality: getVitalityValue(stats),
    agility: getAgilityValue(stats),
  };
};

/**
 * Gets all combat stats in an object
 * @param {Object} stats - Character stats object
 * @returns {Object} Object with all combat stats
 */
export const getCombatStats = stats => {
  return {
    meleeAtk: getMeleeAtkValue(stats),
    rangedAtk: getRangedAtkValue(stats),
    magicAtk: getMagicAtkValue(stats),
    maxHp: getMaxHpValue(stats),
    spd: getSpeedValue(stats),
    startingAp: getStartingApValue(stats),
    apRecovery: getApRecoveryValue(stats),
    accuracy: getAccuracyValue(stats),
    evade: getEvadeValue(stats),
    critRate: getCritRateValue(stats),
    critDmg: getCritDmgValue(stats),
  };
};
