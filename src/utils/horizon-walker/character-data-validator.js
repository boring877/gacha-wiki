/**
 * Character Data Validation for Horizon Walker
 * Provides comprehensive validation for character data structures
 */

/**
 * Validates character skill data structure
 * @param {Object} characterData - The character data to validate
 * @returns {Object} { isValid: boolean, errors: string[], warnings: string[] }
 */
export function validateCharacterData(characterData) {
  const errors = [];
  const warnings = [];

  // Basic structure validation
  if (!characterData || typeof characterData !== 'object') {
    errors.push('Character data must be a valid object');
    return { isValid: false, errors, warnings };
  }

  // Required fields validation
  const requiredFields = ['name', 'rarity', 'cost', 'stats'];
  requiredFields.forEach(field => {
    if (!characterData[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Name validation
  if (characterData.name) {
    if (typeof characterData.name !== 'string' || characterData.name.trim().length === 0) {
      errors.push('Character name must be a non-empty string');
    } else if (characterData.name.length > 100) {
      warnings.push('Character name is very long');
    }
  }

  // Rarity validation
  if (characterData.rarity) {
    const validRarities = ['EX', 'SS', 'S', 'A', 'B'];
    if (!validRarities.includes(characterData.rarity)) {
      errors.push(
        `Invalid rarity: ${characterData.rarity}. Must be one of: ${validRarities.join(', ')}`
      );
    }
  }

  // Cost validation
  if (characterData.cost !== undefined) {
    if (
      !Number.isInteger(characterData.cost) ||
      characterData.cost < 0 ||
      characterData.cost > 10
    ) {
      errors.push('Deployment cost must be an integer between 0 and 10');
    }
  }

  // Skills validation
  if (characterData.skills) {
    const skillValidation = validateSkills(characterData.skills);
    errors.push(...skillValidation.errors);
    warnings.push(...skillValidation.warnings);
  }

  // Unique traits validation
  if (characterData.uniqueTraits) {
    const traitsValidation = validateUniqueTraits(characterData.uniqueTraits);
    errors.push(...traitsValidation.errors);
    warnings.push(...traitsValidation.warnings);
  }

  // Weapon validation
  if (characterData.weapon) {
    const weaponValidation = validateWeapon(characterData.weapon);
    errors.push(...weaponValidation.errors);
    warnings.push(...weaponValidation.warnings);
  }

  // Stats validation
  if (characterData.stats) {
    const statsValidation = validateStats(characterData.stats);
    errors.push(...statsValidation.errors);
    warnings.push(...statsValidation.warnings);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validates skills data structure
 * @param {Object} skills - Skills object to validate
 * @returns {Object} { errors: string[], warnings: string[] }
 */
export function validateSkills(skills) {
  const errors = [];
  const warnings = [];

  if (!skills || typeof skills !== 'object') {
    errors.push('Skills must be a valid object');
    return { errors, warnings };
  }

  Object.keys(skills).forEach(skillKey => {
    const skill = skills[skillKey];

    if (!skill || typeof skill !== 'object') {
      errors.push(`Skill ${skillKey} must be a valid object`);
      return;
    }

    // Required skill fields
    if (!skill.name || typeof skill.name !== 'string') {
      errors.push(`Skill ${skillKey} missing valid name`);
    }

    if (!skill.type || !['Skill', 'Passive', 'Unique', 'Signature'].includes(skill.type)) {
      errors.push(`Skill ${skillKey} has invalid type: ${skill.type}`);
    }

    // AP Cost validation
    if (skill.apCost !== undefined) {
      if (!Number.isInteger(skill.apCost) || skill.apCost < 0 || skill.apCost > 200) {
        errors.push(`Skill ${skillKey} has invalid AP cost: ${skill.apCost}`);
      }
    }

    // Cooldown validation
    if (skill.cooldown !== undefined) {
      if (!Number.isInteger(skill.cooldown) || skill.cooldown < 0 || skill.cooldown > 10) {
        errors.push(`Skill ${skillKey} has invalid cooldown: ${skill.cooldown}`);
      }
    }

    // Description validation
    if (skill.description) {
      if (typeof skill.description !== 'string') {
        errors.push(`Skill ${skillKey} description must be a string`);
      } else if (skill.description.length > 2000) {
        warnings.push(`Skill ${skillKey} description is very long`);
      } else if (skill.description.length < 10) {
        warnings.push(`Skill ${skillKey} description is very short`);
      }
    }

    // Damage validation
    if (skill.damage) {
      if (!skill.damage.type || (!skill.damage.value && !skill.damage.target)) {
        errors.push(`Skill ${skillKey} damage must have both type and value or target`);
      }
    }

    // Skill replacement validation
    if (skill.isReplacement && skill.replaces) {
      if (!skills[skill.replaces]) {
        errors.push(`Skill ${skillKey} replaces non-existent skill: ${skill.replaces}`);
      }
    }

    if (skill.replacedBy && !skills[skill.replacedBy]) {
      errors.push(`Skill ${skillKey} is replaced by non-existent skill: ${skill.replacedBy}`);
    }
  });

  return { errors, warnings };
}

/**
 * Validates unique traits data structure
 * @param {Object} traits - Traits object to validate
 * @returns {Object} { errors: string[], warnings: string[] }
 */
export function validateUniqueTraits(traits) {
  const errors = [];
  const warnings = [];

  if (!traits || typeof traits !== 'object') {
    errors.push('Unique traits must be a valid object');
    return { errors, warnings };
  }

  Object.keys(traits).forEach(traitKey => {
    const trait = traits[traitKey];

    if (!trait || typeof trait !== 'object') {
      errors.push(`Trait ${traitKey} must be a valid object`);
      return;
    }

    if (!trait.name || typeof trait.name !== 'string') {
      errors.push(`Trait ${traitKey} missing valid name`);
    }

    if (!trait.description || typeof trait.description !== 'string') {
      errors.push(`Trait ${traitKey} missing valid description`);
    } else if (trait.description.length > 1000) {
      warnings.push(`Trait ${traitKey} description is very long`);
    }
  });

  return { errors, warnings };
}

/**
 * Validates weapon data structure
 * @param {Object} weapon - Weapon object to validate
 * @returns {Object} { errors: string[], warnings: string[] }
 */
export function validateWeapon(weapon) {
  const errors = [];
  const warnings = [];

  if (!weapon || typeof weapon !== 'object') {
    errors.push('Weapon must be a valid object');
    return { errors, warnings };
  }

  if (!weapon.name || typeof weapon.name !== 'string') {
    errors.push('Weapon missing valid name');
  }

  if (weapon.type && typeof weapon.type !== 'string') {
    errors.push('Weapon type must be a string');
  }

  if (weapon.rarity) {
    const validRarities = ['EX', 'SS', 'S', 'A', 'B'];
    if (!validRarities.includes(weapon.rarity)) {
      errors.push(`Invalid weapon rarity: ${weapon.rarity}`);
    }
  }

  // Weapon skills validation
  if (weapon.uniqueSkills) {
    const skillsValidation = validateSkills(weapon.uniqueSkills);
    errors.push(...skillsValidation.errors);
    warnings.push(...skillsValidation.warnings);
  }

  return { errors, warnings };
}

/**
 * Validates stats data structure
 * @param {Object} stats - Stats object to validate
 * @returns {Object} { errors: string[], warnings: string[] }
 */
export function validateStats(stats) {
  const errors = [];
  const warnings = [];

  if (!stats || typeof stats !== 'object') {
    errors.push('Stats must be a valid object');
    return { errors, warnings };
  }

  // Core stats validation
  const coreStats = ['strength', 'technic', 'intelligence', 'vitality', 'agility'];
  coreStats.forEach(stat => {
    if (stats[stat] !== undefined) {
      const value = parseInt(stats[stat]);
      if (isNaN(value) || value < 0 || value > 30) {
        errors.push(`Invalid ${stat} value: ${stats[stat]}. Must be between 0 and 30`);
      }
    }
  });

  // Combat stats validation
  const combatStats = ['meleeAtk', 'rangedAtk', 'magicAtk', 'maxHp', 'spd'];
  combatStats.forEach(stat => {
    if (stats[stat] !== undefined) {
      const value = parseInt(stats[stat]);
      if (isNaN(value) || value < 0 || value > 9999) {
        errors.push(`Invalid ${stat} value: ${stats[stat]}. Must be between 0 and 9999`);
      }
    }
  });

  return { errors, warnings };
}

/**
 * Validates skill replacement relationships
 * @param {Object} skills - Skills object to validate
 * @returns {Object} { isValid: boolean, errors: string[] }
 */
export function validateSkillReplacements(skills) {
  const errors = [];
  const processedSkills = new Set();

  if (!skills || typeof skills !== 'object') {
    return { isValid: false, errors: ['Invalid skills object'] };
  }

  Object.keys(skills).forEach(skillKey => {
    const skill = skills[skillKey];

    if (skill.replaces && !skills[skill.replaces]) {
      errors.push(`Skill ${skillKey} replaces non-existent skill: ${skill.replaces}`);
    }

    if (skill.replacedBy && !skills[skill.replacedBy]) {
      errors.push(`Skill ${skillKey} is replaced by non-existent skill: ${skill.replacedBy}`);
    }

    // Check for circular replacements
    if (skill.replaces) {
      let current = skill.replaces;
      const visited = new Set([skillKey]);

      while (current && skills[current]) {
        if (visited.has(current)) {
          errors.push(`Circular replacement detected: ${skillKey} -> ${current}`);
          break;
        }
        visited.add(current);
        current = skills[current].replaces;
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Performance monitoring wrapper for validation
 * @param {Function} validationFunction - The validation function to monitor
 * @returns {Function} Wrapped function with performance tracking
 */
export function withValidationMonitoring(validationFunction) {
  return function (...args) {
    const startTime = performance.now();
    const result = validationFunction.apply(this, args);
    const endTime = performance.now();

    const executionTime = endTime - startTime;

    // Log performance warnings
    if (executionTime > 50) {
      // 50ms threshold for validation
      console.warn(`Validation took ${executionTime.toFixed(2)}ms - consider optimization`);
    }

    return {
      ...result,
      performance: {
        executionTime: executionTime.toFixed(2) + 'ms',
      },
    };
  };
}

// Export performance-monitored versions
export const validateCharacterDataWithMonitoring = withValidationMonitoring(validateCharacterData);
export const validateSkillsWithMonitoring = withValidationMonitoring(validateSkills);
