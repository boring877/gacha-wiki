/**
 * Horizon Walker Character Data Validation Utility
 * Provides security validation for character data to prevent XSS and ensure data integrity
 */

/**
 * Advanced HTML/XSS sanitization function
 * @param {string} input - The input string to sanitize
 * @param {boolean} isTrustedContent - Whether the content is from trusted sources (default: false)
 * @returns {string} Sanitized string safe for HTML output
 */
export function sanitizeHTML(input, isTrustedContent = false) {
  if (typeof input !== 'string') {
    return '';
  }

  let sanitized;

  if (isTrustedContent) {
    // For trusted content (like character data), only sanitize actual threats
    sanitized = input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Preserve quotes and apostrophes in trusted content
  } else {
    // For untrusted content, apply full HTML entity encoding
    sanitized = input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  // Remove potentially dangerous patterns regardless of trust level
  sanitized = sanitized
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/style\s*=/gi, '')
    .replace(/expression\s*\(/gi, '');

  return sanitized;
}

/**
 * Validates character data structure for security and completeness
 * @param {Object} characterData - Character data object to validate
 * @returns {Object} Validation result with isValid flag and errors array
 */
export function validateCharacterData(characterData) {
  const errors = [];

  if (!characterData || typeof characterData !== 'object') {
    return { isValid: false, errors: ['Character data must be an object'] };
  }

  // Required string fields validation
  const requiredStringFields = ['name', 'rarity', 'description'];
  requiredStringFields.forEach(field => {
    if (!characterData[field] || typeof characterData[field] !== 'string') {
      errors.push(`${field} is required and must be a string`);
    } else if (characterData[field].length > 1000) {
      errors.push(`${field} exceeds maximum length of 1000 characters`);
    }
  });

  // Validate numeric fields
  if (characterData.cost !== undefined) {
    if (
      typeof characterData.cost !== 'number' ||
      characterData.cost < 0 ||
      characterData.cost > 20
    ) {
      errors.push('Cost must be a number between 0 and 20');
    }
  }

  // Validate stats object
  if (characterData.stats && typeof characterData.stats === 'object') {
    Object.entries(characterData.stats).forEach(([key, value]) => {
      if (typeof value !== 'string' && typeof value !== 'number') {
        errors.push(`Stat ${key} must be a string or number`);
      }
      // Validate stat values are reasonable (prevent injection via large numbers)
      // Some stats like rangedAtk can be negative
      const allowNegative = ['rangedAtk', 'rangedatk'].includes(key);
      const minValue = allowNegative ? -999 : 0;
      const maxValue = 999999;
      if (typeof value === 'number' && (value < minValue || value > maxValue)) {
        errors.push(`Stat ${key} must be between ${minValue} and ${maxValue}`);
      }
    });
  }

  // Validate skills structure
  if (characterData.skills && typeof characterData.skills === 'object') {
    Object.entries(characterData.skills).forEach(([skillKey, skill]) => {
      if (!skill || typeof skill !== 'object') {
        errors.push(`Skill ${skillKey} must be an object`);
        return;
      }

      if (!skill.name || typeof skill.name !== 'string') {
        errors.push(`Skill ${skillKey} must have a name`);
      }

      if (!skill.description || typeof skill.description !== 'string') {
        errors.push(`Skill ${skillKey} must have a description`);
      } else if (skill.description.length > 2000) {
        errors.push(`Skill ${skillKey} description exceeds maximum length`);
      }

      // Validate AP cost
      if (skill.apCost !== undefined) {
        if (typeof skill.apCost !== 'number' || skill.apCost < 0 || skill.apCost > 200) {
          errors.push(`Skill ${skillKey} AP cost must be between 0 and 200`);
        }
      }
    });
  }

  // Validate highlighting patterns for security
  if (characterData.highlightPatterns) {
    Object.entries(characterData.highlightPatterns).forEach(([key, pattern]) => {
      if (pattern instanceof RegExp) {
        // Check for potentially dangerous regex patterns
        const patternSource = pattern.source;
        if (patternSource.includes('(?:') && patternSource.includes(')*')) {
          errors.push(`Highlighting pattern ${key} may contain dangerous nested quantifiers`);
        }
        if (patternSource.length > 500) {
          errors.push(`Highlighting pattern ${key} is too complex`);
        }
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}

/**
 * Sanitizes character data by cleaning all text fields
 * @param {Object} characterData - Character data to sanitize
 * @param {boolean} isTrustedContent - Whether the character data is from trusted sources (default: true)
 * @returns {Object} Sanitized character data
 */
export function sanitizeCharacterData(characterData, isTrustedContent = true) {
  if (!characterData || typeof characterData !== 'object') {
    return {};
  }

  const sanitized = { ...characterData };

  // Sanitize string fields using trusted content flag
  ['name', 'description', 'story'].forEach(field => {
    if (sanitized[field] && typeof sanitized[field] === 'string') {
      sanitized[field] = sanitizeHTML(sanitized[field], isTrustedContent);
    }
  });

  // Sanitize skills
  if (sanitized.skills) {
    sanitized.skills = Object.fromEntries(
      Object.entries(sanitized.skills).map(([key, skill]) => [
        key,
        {
          ...skill,
          name: sanitizeHTML(skill.name || '', isTrustedContent),
          description: sanitizeHTML(skill.description || '', isTrustedContent),
        },
      ])
    );
  }

  // Sanitize traits
  if (sanitized.uniqueTraits) {
    sanitized.uniqueTraits = Object.fromEntries(
      Object.entries(sanitized.uniqueTraits).map(([key, trait]) => [
        key,
        {
          ...trait,
          name: sanitizeHTML(trait.name || '', isTrustedContent),
          description: sanitizeHTML(trait.description || '', isTrustedContent),
        },
      ])
    );
  }

  // Sanitize weapon skills
  if (sanitized.weapon && sanitized.weapon.uniqueSkills) {
    sanitized.weapon.uniqueSkills = Object.fromEntries(
      Object.entries(sanitized.weapon.uniqueSkills).map(([key, skill]) => [
        key,
        {
          ...skill,
          name: sanitizeHTML(skill.name || '', isTrustedContent),
          description: sanitizeHTML(skill.description || '', isTrustedContent),
        },
      ])
    );
  }

  return sanitized;
}

/**
 * Validates and sanitizes highlighting patterns
 * @param {Object} patterns - Highlighting patterns to validate
 * @returns {Object} Safe highlighting patterns
 */
export function sanitizeHighlightPatterns(patterns) {
  if (!patterns || typeof patterns !== 'object') {
    return {};
  }

  const safePatternsKeys = [
    'damage',
    'effects',
    'buffsDebuffs',
    'percentages',
    'statChanges',
    'keywords',
    'attributes',
    'numbers',
  ];

  const sanitizedPatterns = {};

  Object.entries(patterns).forEach(([key, pattern]) => {
    // Only allow known safe pattern keys
    if (safePatternsKeys.includes(key) && pattern instanceof RegExp) {
      // Additional safety checks for regex patterns
      const source = pattern.source;
      if (source.length <= 500 && !source.includes('(?:.*)*') && !source.includes('(.*)*')) {
        sanitizedPatterns[key] = pattern;
      }
    }
  });

  return sanitizedPatterns;
}
