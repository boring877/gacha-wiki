// Data validation utilities for ensuring data integrity
// Helps catch data issues early in development

// Types are available for future expansion when needed
// import type { ZoneNovaCharacter, SilverBloodCharacter, ZoneNovaMemory, GameUpdate, ZoneNovaRift, RedeemCode } from '../types/characters';

/**
 * Validation result interface
 */
interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates Zone Nova character data
 */
export function validateZoneNovaCharacter(character: any): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!character.id || typeof character.id !== 'number') {
    errors.push('Character ID is required and must be a number');
  }

  if (!character.name || typeof character.name !== 'string') {
    errors.push('Character name is required and must be a string');
  }

  if (!character.slug || typeof character.slug !== 'string') {
    errors.push('Character slug is required and must be a string');
  }

  if (!character.detailUrl || typeof character.detailUrl !== 'string') {
    errors.push('Character detailUrl is required and must be a string');
  }

  if (!character.image || typeof character.image !== 'string') {
    errors.push('Character image is required and must be a string');
  }

  // Rarity validation
  const validRarities = ['SSR', 'SR', 'R'];
  if (!validRarities.includes(character.rarity)) {
    errors.push(`Character rarity must be one of: ${validRarities.join(', ')}`);
  }

  // Element validation
  const validElements = ['Fire', 'Wind', 'Holy', 'Chaos', 'Ice'];
  if (!validElements.includes(character.element)) {
    errors.push(`Character element must be one of: ${validElements.join(', ')}`);
  }

  // Role validation
  const validRoles = ['DPS', 'Tank', 'Support', 'Healer', 'Buffer', 'Debuffer'];
  if (!validRoles.includes(character.role)) {
    errors.push(`Character role must be one of: ${validRoles.join(', ')}`);
  }

  // Stats validation
  if (!character.stats || typeof character.stats !== 'object') {
    errors.push('Character stats are required and must be an object');
  } else {
    const requiredStats = ['hp', 'attack', 'defense', 'energyRecovery', 'critRate', 'critDmg'];
    for (const stat of requiredStats) {
      if (typeof character.stats[stat] !== 'number') {
        errors.push(`Character stat '${stat}' is required and must be a number`);
      }
    }

    // Stat value warnings
    if (character.stats.hp < 1000 || character.stats.hp > 50000) {
      warnings.push('Character HP seems unusual (expected range: 1000-50000)');
    }

    if (character.stats.attack < 100 || character.stats.attack > 5000) {
      warnings.push('Character attack seems unusual (expected range: 100-5000)');
    }
  }

  // Slug format validation
  if (character.slug && !/^[a-z0-9-]+$/.test(character.slug)) {
    errors.push('Character slug must contain only lowercase letters, numbers, and hyphens');
  }

  // URL validation
  if (character.detailUrl && !character.detailUrl.startsWith('/guides/zone-nova/characters/')) {
    errors.push('Character detailUrl must start with "/guides/zone-nova/characters/"');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validates Silver and Blood character data
 */
export function validateSilverBloodCharacter(character: any): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Basic validation (same as Zone Nova)
  const basicValidation = validateZoneNovaCharacter(character);
  errors.push(...basicValidation.errors.filter(e => !e.includes('element') && !e.includes('role')));

  // Class validation
  const validClasses = ['Warrior', 'Assassin', 'Defender', 'Marksman', 'Sorcerer', 'Enchanter'];
  if (!validClasses.includes(character.class)) {
    errors.push(`Character class must be one of: ${validClasses.join(', ')}`);
  }

  // Faction validation
  const validFactions = ['Kingdom', 'Ancestors', 'Church', 'Bloodborn'];
  if (!validFactions.includes(character.faction)) {
    errors.push(`Character faction must be one of: ${validFactions.join(', ')}`);
  }

  // Equipment validation
  const validEquipment = ['Light', 'Medium', 'Heavy'];
  if (!validEquipment.includes(character.equipment)) {
    errors.push(`Character equipment must be one of: ${validEquipment.join(', ')}`);
  }

  // Stats validation (Silver and Blood specific)
  if (character.stats) {
    const requiredStats = [
      'hp',
      'attack',
      'physicalDefense',
      'magicalDefense',
      'attackSpeed',
      'bloodsoulRecovery',
      'critRate',
      'critDamage',
    ];

    for (const stat of requiredStats) {
      if (typeof character.stats[stat] !== 'number') {
        errors.push(`Character stat '${stat}' is required and must be a number`);
      }
    }
  }

  // Skills validation
  if (character.skills && Array.isArray(character.skills)) {
    character.skills.forEach((skill: any, index: number) => {
      if (!skill.name || typeof skill.name !== 'string') {
        errors.push(`Skill ${index + 1} name is required and must be a string`);
      }

      const validSkillTypes = ['Normal Attack', 'Special', 'Passive', 'Ultimate'];
      if (!validSkillTypes.includes(skill.type)) {
        errors.push(`Skill ${index + 1} type must be one of: ${validSkillTypes.join(', ')}`);
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validates memory data
 */
export function validateMemory(memory: any): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!memory.id || typeof memory.id !== 'number') {
    errors.push('Memory ID is required and must be a number');
  }

  if (!memory.name || typeof memory.name !== 'string') {
    errors.push('Memory name is required and must be a string');
  }

  if (!memory.slug || typeof memory.slug !== 'string') {
    errors.push('Memory slug is required and must be a string');
  }

  // Rarity validation
  const validRarities = ['SSR', 'SR', 'R'];
  if (!validRarities.includes(memory.rarity)) {
    errors.push(`Memory rarity must be one of: ${validRarities.join(', ')}`);
  }

  // Type validation
  const validTypes = ['Attack', 'Defense', 'Support', 'Special'];
  if (!validTypes.includes(memory.type)) {
    errors.push(`Memory type must be one of: ${validTypes.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validates game update data
 */
export function validateGameUpdate(update: any): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!update.id || typeof update.id !== 'string') {
    errors.push('Update ID is required and must be a string');
  }

  if (!update.title || typeof update.title !== 'string') {
    errors.push('Update title is required and must be a string');
  }

  if (!update.slug || typeof update.slug !== 'string') {
    errors.push('Update slug is required and must be a string');
  }

  // Type validation
  const validTypes = ['maintenance', 'announcement', 'event', 'patch'];
  if (!validTypes.includes(update.type)) {
    errors.push(`Update type must be one of: ${validTypes.join(', ')}`);
  }

  // Date validation
  if (!update.date || typeof update.date !== 'string') {
    errors.push('Update date is required and must be a string');
  } else {
    const date = new Date(update.date);
    if (isNaN(date.getTime())) {
      errors.push('Update date must be a valid date string');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validates array of data items
 */
export function validateDataArray<T>(
  items: T[],
  validator: (_item: T) => ValidationResult,
  itemName: string
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!Array.isArray(items)) {
    errors.push(`${itemName} must be an array`);
    return { isValid: false, errors, warnings };
  }

  items.forEach((_item, index) => {
    const result = validator(_item);
    if (!result.isValid) {
      errors.push(`${itemName} ${index + 1}: ${result.errors.join(', ')}`);
    }
    if (result.warnings.length > 0) {
      warnings.push(`${itemName} ${index + 1}: ${result.warnings.join(', ')}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Checks for duplicate IDs in character arrays
 */
export function checkForDuplicateIds(items: { id: number }[]): string[] {
  const errors: string[] = [];
  const ids = new Set<number>();

  items.forEach((item, index) => {
    if (ids.has(item.id)) {
      errors.push(`Duplicate ID ${item.id} found at index ${index}`);
    } else {
      ids.add(item.id);
    }
  });

  return errors;
}

/**
 * Checks for duplicate slugs in arrays
 */
export function checkForDuplicateSlugs(items: { slug: string }[]): string[] {
  const errors: string[] = [];
  const slugs = new Set<string>();

  items.forEach((item, index) => {
    if (slugs.has(item.slug)) {
      errors.push(`Duplicate slug '${item.slug}' found at index ${index}`);
    } else {
      slugs.add(item.slug);
    }
  });

  return errors;
}

/**
 * Validates image paths exist and follow naming conventions
 */
export function validateImagePaths(items: { image: string; name: string }[]): string[] {
  const errors: string[] = [];

  items.forEach((item, index) => {
    if (!item.image.startsWith('/images/')) {
      errors.push(`Item ${index + 1} (${item.name}): Image path should start with '/images/'`);
    }

    if (!item.image.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
      errors.push(
        `Item ${index + 1} (${item.name}): Image should have a valid extension (.jpg, .png, .webp, .avif)`
      );
    }
  });

  return errors;
}
