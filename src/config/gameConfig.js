// src/config/gameConfig.js

export const GAME_CONFIG = {
  zoneNova: {
    name: "Zone Nova",
    imageBasePath: import.meta.env.PUBLIC_IMAGE_BASE_URL || "/images/Character Database/",
    characterPath: "/guides/zone-nova/characters/",
    
    // Game-specific constants
    maxLevel: 80,
    maxAscension: 6,
    
    // Default stats
    defaultCritRate: 0,
    defaultCritDmg: 50,
    defaultEnergyRecovery: 0.25,
  }
};
