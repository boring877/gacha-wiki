import { baseStats } from '../base-stats.js';

export const joan = {
  id: 'joan',
  name: 'Joan',
  title: 'War Fighter',
  subtitle: '',
  description: 'A powerful SSR warrior from the Church faction who specializes in AoE damage, crowd control, and electric induction effects.',
  image: '/images/games/silver-and-blood/characters/Joan.jpg',
  tags: ['Melee', 'AoE DMG', 'Control'],
  
  // Game Mechanics
  rarity: 'SSR',
  class: 'Warrior',
  faction: 'Church',
  equipmentType: 'Medium',
  moonPhase: 'Crescent Moon',
  attackType: 'P.DMG',
  
  // Base Stats (fetched from shared map)
  stats: baseStats['joan'],
  
  // Skills (exact descriptions from game)
  skills: [
    {
      name: 'Sweep',
      type: 'Normal Attack',
      description: 'Deals 105.0% ATK (P. DMG) to enemies ahead in a cone.'
    },
    {
      name: 'Silver Flash Strike',
      type: 'Special',
      description: 'Activates once every 4 Basic ATK(s). Stuns the target for 2 sec. While Joan is Electrified, this skill triggers automatically, dealing additional 450.0% ATK (P. DMG). Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect.'
    },
    {
      name: 'High-Powered Armament',
      type: 'Passive',
      description: 'During the Electrified state, Joan\'s Basic ATK applies Induction to the target. When Joan is attacked, she also applies 1 stack of Induction to the attacker. This effect can be triggered once per sec. Induction: When applied, deals 60.0% ATK (P. DMG) to a random target within 3.5 meters. After reaching 8 stack(s), converts to a 3 sec Stun effect. Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect.'
    },
    {
      name: 'Electric Incarceration',
      type: 'Ultimate',
      cost: 5,
      description: 'Joan combines her shield and spear to form a long circular saw, then enters the Electrified state for 15 sec, dealing 1500.0% ATK (P. DMG) to enemies in a cone. Each hit has a 50.0% chance to apply 1 stack of Induction to both the hit targets and 1 random enemy within range. Induction: When applied, deals 60.0% ATK (P. DMG) to a random target within 3.5 meters. After reaching 8 stack(s), converts to a 3 sec Stun effect. Stun: Control: Strong. The carrier stops and remains unable to cast Ultimate, Specials, Basic ATKs, or move during the effect.'
    }
  ],
  
  // Game Mechanics Information
  mechanics: {
    moonPhaseEffect: 'Crescent Moon: Ultimate Bloodsoul Cost -1, +25% DMG. Enhanced electrified state and induction effects.',
    attackTypeInfo: 'P.DMG: Physical damage through electrified weapons. Reduced by P.DEF. Enhanced by cone attacks and electrified state.',
    equipmentNote: 'Medium Equipment: Balanced stats for both offense and survival, ideal for sustained AoE combat.',
    specialAbilities: 'Electrified: Basic ATK transforms into an electrified circular saw. ATK SPD is increased during this time. Induction: Stacking debuff that deals damage and converts to stun at 8 stacks.'
  }
};