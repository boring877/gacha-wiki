import { baseStats } from '../base-stats.js';

export const bella = {
  id: 'bella',
  name: 'Bella',
  title: 'Puppet Association',
  subtitle: '',
  description: 'A powerful SSR defender from the Bloodborn faction who specializes in summoning puppets and providing support to allied summons.',
  image: '/images/games/silver-and-blood/characters/Bella.jpg',
  tags: ['Mid-Range', 'Summon'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Defender',
  faction: 'Bloodborn',
  equipmentType: 'Medium',
  moonPhase: 'New Moon',
  attackType: 'M.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['bella'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'String Weaving',
      type: 'Normal Attack',
      description: 'Deals 204.0% ATK (M. DMG) to the target.'
    },
    {
      name: 'Muses\' Masquerade',
      type: 'Special',
      description: 'When the battle begins, Bella summons 2 Animated Puppets every 8 sec for 20 sec. The puppets will have 68.0% of Bella\'s ATK, as well as 68.0% of her DEF and HP, and will be targeted in place of Bella. Animated Puppet: A summon that performs Basic ATK. Only 3 can exist at the same time.'
    },
    {
      name: 'Soulbound Covenant',
      type: 'Passive',
      description: 'Every 2 sec, allied summons gain Healing equal to 5.0% of Bella\'s Max HP.'
    },
    {
      name: 'Joyce\'s Ballad',
      type: 'Ultimate',
      cost: 5,
      description: 'Summons Joyce the Miser at a select location, dealing 816.0% of Bella\'s ATK (M. DMG) to all enemies in a circle, inflicting Stun for 1 sec, and becoming the target(s). Joyce inherits 80.0% of Bella\'s base attributes and lasts for 15 sec. Only 1 Joyce can be present. Joyce the Miser: A summon that performs Basic ATK on enemies ahead in a cone. Only 1 can exist at the same time.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'New Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced summoning abilities and puppet control.',
    attackTypeInfo: 'M.DMG: Magical damage through puppet manipulation and sorcery. Reduced by M.DEF. Enhanced by summoning mechanics.',
    equipmentNote: 'Medium Equipment: Balanced stats for both defense and summoning support, ideal for sustained puppet control.'
  }
};