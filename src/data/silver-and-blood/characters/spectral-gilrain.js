import { baseStats } from '../base-stats.js';

export const spectralGilrain = {
  id: 'spectral-gilrain',
  name: 'Spectral Gilrain',
  title: 'Blood-eyed Phantom',
  subtitle: '',
  description: 'A powerful SSR assassin from the Bloodborn faction who specializes in melee combat, teleportation, and summoning shadowy apparitions.',
  image: '/images/games/silver-and-blood/characters/Spectral_Gilrain.jpg',
  tags: ['Melee', 'Teleport'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Assassin',
  faction: 'Bloodborn',
  equipmentType: 'Light',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['spectral-gilrain'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Spectral Ripper',
      type: 'Normal Attack',
      description: 'Deals 128.0% ATK (P. DMG) to the target.'
    },
    {
      name: 'Shadowy Apparition',
      type: 'Special',
      description: 'When the battle begins, Gilrain Teleports to the farthest enemy in range of target, dealing 450.0% ATK (P. DMG) and marking them as the new target. Then summons a Shadowy Apparition which inherits 50.0% of Gilrain\'s base attributes. Shadowy Apparition: Summons up to 2 units that perform Basic ATKs on Spectral Gilrain\'s target.'
    },
    {
      name: 'Shadowcast Redux',
      type: 'Passive',
      description: 'When Gilrain\'s HP falls below 50.0%, sacrifices one Shadowy Apparition to restore 25.0% of Max HP and become untargetable for 2 sec.'
    },
    {
      name: 'Killing Moon',
      type: 'Ultimate',
      cost: 4,
      description: 'Deals 1050.0% ATK (P. DMG) to enemies in a cone (2100.0% ATK for non-Boss units below 15.0% HP, and 1350.0% ATK for Boss units). For each Shadowy Apparitions present, this value will increase by 5.0%. If any enemy is eliminated by this skill, Gilrain summons 1 Shadowy Apparition which inherits 50.0% of Gilrain\'s base Attributes. Shadowy Apparition: Summons up to 2 units that perform Basic ATKs on Spectral Gilrain\'s target.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced teleportation abilities and apparition summoning.',
    attackTypeInfo: 'P.DMG: Physical damage through spectral attacks and phantom strikes. Reduced by P.DEF. Enhanced by apparition synergies and teleportation positioning.',
    equipmentNote: 'Light Equipment: Attack-focused gear with high offensive stats, ideal for maximum assassination damage and mobility.'
  }
};