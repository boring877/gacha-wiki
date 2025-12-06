// Horizon Walker Character Build Configurations
// Centralized import point for individual character build configurations

import {
  juhaBuildConfig,
  vlissingBuildConfig,
  oliviaBuildConfig,
  emiliaBuildConfig,
  defaultBuildConfig,
} from './characters/index.js';

export const characterBuildConfigs = {
  juha: juhaBuildConfig,
  vlissing: vlissingBuildConfig,
  olivia: oliviaBuildConfig,
  emilia: emiliaBuildConfig,
  default: defaultBuildConfig,
};

// Helper function to get character build configuration
export function getCharacterBuildConfig(characterSlug) {
  return characterBuildConfigs[characterSlug] || characterBuildConfigs.default;
}
