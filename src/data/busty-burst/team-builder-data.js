/**
 * Busty Burst Fantasy - Team Builder Data
 * Imports skill data from character-skills.js and adds category assignments for conflict detection
 *
 * BUFF CATEGORIES:
 * A - Single Target Ultimate buffs
 * B - Multiple Target Ultimate buffs (2+ allies)
 * C - Single Target Skill buffs
 * D - Multiple Target Skill buffs (2+ allies)
 *
 * DEBUFF CATEGORIES:
 * A - ALL Ultimate debuffs (regardless of target count)
 * B - Single Target Skill debuffs
 * C - Multiple Target Skill debuffs (2+ enemies)
 */

import { BUSTY_BURST_CHARACTER_SKILLS } from './character-skills.js';

// Buff category definitions (colors handled by CSS)
export const BUFF_CATEGORIES = {
  A: { name: 'Single Target Ultimate', cssClass: 'buff-cat-a' },
  B: { name: 'Multiple Target Ultimate', cssClass: 'buff-cat-b' },
  C: { name: 'Single Target Skill', cssClass: 'buff-cat-c' },
  D: { name: 'Multiple Target Skill', cssClass: 'buff-cat-d' },
};

// Debuff category definitions (colors handled by CSS)
export const DEBUFF_CATEGORIES = {
  A: { name: 'All Ultimate Debuffs', cssClass: 'debuff-cat-a' },
  B: { name: 'Single Target Skill Debuff', cssClass: 'debuff-cat-b' },
  C: { name: 'Multiple Target Skill Debuff', cssClass: 'debuff-cat-c' },
};

// Character image mapping (character ID -> image filename)
const CHARACTER_IMAGES = {
  festive_attire_estiriel: 'Festive_Attire_Estiriel.jpg',
  liesel: 'Liesel.jpg',
  frey: 'Frey.jpg',
  messeria: 'Trance_Dancer_Messeria.jpg',
  teresia: 'Teresia.jpg',
  dark_knight: 'The_Dark_Knight.jpg',
  shaty: 'Shaty.png',
  artia: 'Artia.jpg',
  gemini: 'Gemini.jpg',
  luca: 'Luca.jpg',
  festival_empress_shamshel: 'Festival_Empress_Shamshel.jpg',
  elegant_shamshel: 'Elegant_Portrait_Shamshel.jpg',
  nerys: 'Messenge_of_Stone_soldiers_Nerys.jpg',
  soltina: 'Soltina.jpg',
  estiriel: 'Estiriel.jpg',
  hildis: 'Hildis.jpg',
  marina: 'Marina.jpg',
  stenlina: 'Stenlina.jpg',
  hisara: 'Hisara.jpg',
  bianca: 'Bianca.jpg',
  natasha: 'Natasha.jpg',
  venus: 'Venus.jpg',
  artemis: 'Artemis.jpg',
  queen_of_pies_and_cookies_aphrodia: 'Queen_of_Pies_and_Cookies_Aphrodia.jpg',
  luceria: 'Magical Princess Luceria.jpg',
  ishtovia: 'Pious_Healer_Ishtovia.jpg',
  nora: 'Nora.jpg',
  sobrina: 'Swift-Chant_Sorceress_Sobrina.jpg',
  meinias: 'Meinias.jpg',
  yu_lima_elka: 'Yu_Lima_Elka.jpg',
  festive_natasha: 'Festive_Costume_Natasha.jpg',
  holy_night_succubus_yu_rima_elca: 'Holy_Night_Succubus_Yu_Rima_Elca.jpg',
  magical_holy_night_festival_kaguya: 'Magical_Holy_Night_Festival_Kaguya.jpg',
};

// Skill buff/debuff category assignments
// Format: { characterId: { skillKey: { type: 'buff'|'debuff', category: 'A'|'B'|'C'|'D', effects: [...] } } }
const SKILL_CATEGORIES = {
  festive_attire_estiriel: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical DEF', value: '+15%+200' },
        { stat: 'Magic DEF', value: '+15%+200' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Action Speed', value: '+14%' },
        { stat: 'Accuracy', value: '+19' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Debuff Resistance', value: '+60%' },
        { stat: 'Block', value: '+20' },
      ],
    },
  },
  liesel: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical ATK', value: '+10%+120' },
        { stat: 'Magic ATK', value: '+10%+120' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical DEF', value: '+15%+200' },
        { stat: 'Magic DEF', value: '+15%+200' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'MP Regen', value: '+50' },
        { stat: 'Action Speed', value: '+15%+15' },
      ],
    },
  },
  frey: {
    skill2: { type: 'buff', category: 'D', effects: [{ stat: 'HP Regen', value: '+5%+150' }] },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical Shield', value: '-50% (5 hits)' },
        { stat: 'Magic Shield', value: '-50% (5 hits)' },
      ],
    },
  },
  messeria: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '-21%-240' },
        { stat: 'Accuracy', value: '-24' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical ATK', value: '+15%+530' },
        { stat: 'Phys Crit Damage', value: '+540' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: '+20%+20' },
        { stat: 'Block', value: '+20' },
      ],
    },
  },
  teresia: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Magic DEF', value: '-18%-230' }] },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Magic ATK', value: '+18%+735' },
        { stat: 'Magic Crit', value: '+750' },
      ],
    },
    ultimate: { type: 'buff', category: 'A', effects: [{ stat: 'Mind Type ATK', value: '+20%' }] },
  },
  dark_knight: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Magic DEF', value: '-21%-240' },
        { stat: 'Magic Type DEF', value: '-10%' },
      ],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: '-12%-230' },
        { stat: 'Magic ATK', value: '-12%-230' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Curse', value: 'no HP/MP regen' },
        { stat: 'Fear', value: 'MP -100/s, Block 0' },
      ],
    },
  },
  shaty: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [{ stat: 'Wind Type ATK', value: '+20%+940' }],
    },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Wind Type DEF', value: '-21%-240' },
        { stat: 'Block', value: '-24' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [
        { stat: 'Wind Type ATK', value: '+50%' },
        { stat: 'Hit Damage', value: '+140% (6 hits)' },
      ],
    },
  },
  artia: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Block', value: '+33' }] },
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Accuracy', value: '-33' }] },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [
        { stat: 'Shield', value: '-60% (unlimited hits)' },
        { stat: 'Taunt', value: 'active' },
      ],
    },
  },
  gemini: {
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [{ stat: 'Physical DEF', value: '-18%-230' }],
    },
  },
  luca: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Physical ATK', value: '+18%+735' }] },
    skill3: {
      type: 'debuff',
      category: 'B',
      effects: [{ stat: 'Physical Crit Damage', value: '-960' }],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical ATK', value: '-30%' },
        { stat: 'Accuracy', value: '-30' },
      ],
    },
  },
  festival_empress_shamshel: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Magic ATK', value: '+18%+735' }] },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Action Speed', value: '+20%' }] },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Charm', value: '3 seconds' },
        { stat: 'Magic DEF', value: '-25%' },
      ],
    },
  },
  elegant_shamshel: {
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Charm', value: '3 seconds' }] },
  },
  nerys: {
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Magic DEF', value: '-21%-240' }] },
    ultimate: { type: 'debuff', category: 'A', effects: [{ stat: 'Stun', value: '3 seconds' }] },
  },
  soltina: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Paralysis', value: '6 seconds' }] },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Physical DEF', value: '+30%+490' }] },
  },
  estiriel: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Physical DEF', value: '-18%-230' },
        { stat: 'Magic DEF', value: '-18%-230' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'HP Regen', value: '+3%+50' },
        { stat: 'Block', value: '+19' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Block', value: '-20' },
        { stat: 'Action Speed', value: '-20%-20' },
      ],
    },
  },
  hildis: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Physical DEF', value: '-30%-110' },
        { stat: 'Burn', value: '12 seconds' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+15%+530' },
        { stat: 'Action Speed', value: '+14%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical DEF', value: '-25%' },
        { stat: 'Block', value: '-25' },
      ],
    },
  },
  marina: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: '-20%' },
        { stat: 'Block', value: '-28' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Crit Damage', value: '+540' },
        { stat: 'Magic Crit', value: '+540' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Action Speed', value: '+20%+20' },
        { stat: 'Shield', value: '-40% (unlimited, 6s)' },
      ],
    },
  },
  stenlina: {
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '-9%-220' },
        { stat: 'Magic ATK', value: '-9%-220' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Physical Crit', value: '-20%' },
        { stat: 'Magic Crit', value: '-20%' },
      ],
    },
  },
  hisara: {
    skill2: { type: 'debuff', category: 'C', effects: [{ stat: 'Action Speed', value: '-20%' }] },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [{ stat: 'Action Speed', value: '+30%+30' }],
    },
  },
  bianca: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+20%+940' },
        { stat: 'Mind Type ATK', value: '+10%' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Silence', value: '6 seconds' },
        { stat: 'Curse', value: '3 seconds' },
      ],
    },
  },
  natasha: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Stun', value: '2.5 seconds' },
        { stat: 'Action Speed', value: '-17%' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical DEF', value: '+40%+600' },
        { stat: 'Taunt', value: 'active' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [{ stat: 'Physical Reflect Shield', value: '500%+5000/lv (unlimited hits)' }],
    },
  },
  venus: {
    skill2: {
      type: 'buff',
      category: 'C',
      effects: [{ stat: 'Physical Crit Damage', value: '+540' }],
    },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Physical DEF', value: '+20%+340' }] },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: '+35%' },
        { stat: 'Magic ATK', value: '+35%' },
      ],
    },
  },
  artemis: {
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+18%+735' },
        { stat: 'Action Speed', value: '+14%+14' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [{ stat: 'Wind Type DEF', value: '-30%' }],
    },
  },
  queen_of_pies_and_cookies_aphrodia: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Poison', value: '8 seconds' }] },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [{ stat: 'Hit-Based Damage', value: '+18%+735' }],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Action Speed', value: '-30%-30' },
        { stat: 'Block', value: '-30' },
      ],
    },
  },
  luceria: {
    skill2: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical ATK', value: '+12%+325' },
        { stat: 'Physical DEF', value: '+15%+200' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical ATK', value: 'UP' },
        { stat: 'Block', value: 'UP' },
      ],
    },
  },
  ishtovia: {
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Magic DEF', value: 'DOWN' },
        { stat: 'Silence', value: '10 seconds' },
      ],
    },
  },
  nora: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical Crit', value: '-750' },
        { stat: 'Magic Crit', value: '-750' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'D',
      effects: [
        { stat: 'Physical Crit Damage', value: '+750' },
        { stat: 'Shield', value: 'active' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Stun', value: '2 seconds' },
        { stat: 'Action Speed', value: '-20%-20' },
      ],
    },
  },
  sobrina: {
    skill2: { type: 'buff', category: 'C', effects: [{ stat: 'Block', value: '+19' }] },
    skill3: { type: 'buff', category: 'C', effects: [{ stat: 'Physical DEF', value: '+20%+340' }] },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [{ stat: 'Debuff Resistance', value: '+30%' }],
    },
  },
  meinias: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Accuracy', value: '-24' },
        { stat: 'Block', value: '-24' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '+18%+735' },
        { stat: 'Block', value: '+24' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'A',
      effects: [{ stat: 'Hit-Based Damage', value: '+200% (5 hits)' }],
    },
  },
  yu_lima_elka: {
    skill2: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Physical ATK', value: '-9%-220' },
        { stat: 'Magic ATK', value: '-9%-220' },
      ],
    },
    skill3: { type: 'debuff', category: 'B', effects: [{ stat: 'Charm', value: '3 seconds' }] },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Paralysis', value: '8 seconds' },
        { stat: 'Curse', value: '8 seconds (no HP/MP regen, Speed -50%)' },
      ],
    },
  },
  festive_natasha: {
    skill2: { type: 'debuff', category: 'B', effects: [{ stat: 'Poison', value: '8 seconds' }] },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Block', value: '+28' },
        { stat: 'Taunt', value: 'active' },
      ],
    },
    ultimate: {
      type: 'debuff',
      category: 'A',
      effects: [
        { stat: 'Confusion', value: 'active' },
        { stat: 'Fear', value: '10 seconds' },
      ],
    },
  },
  holy_night_succubus_yu_rima_elca: {
    skill2: { type: 'debuff', category: 'C', effects: [{ stat: 'Burn', value: '12 seconds' }] },
    skill3: {
      type: 'debuff',
      category: 'C',
      effects: [
        { stat: 'Charm', value: '1 second' },
        { stat: 'Magic DEF', value: '-18%-230' },
      ],
    },
    ultimate: { type: 'debuff', category: 'A', effects: [{ stat: 'Dispel', value: '3 seconds' }] },
  },
  magical_holy_night_festival_kaguya: {
    skill2: {
      type: 'debuff',
      category: 'B',
      effects: [
        { stat: 'Poison', value: 'active' },
        { stat: 'Block', value: 'DOWN' },
      ],
    },
    skill3: {
      type: 'buff',
      category: 'C',
      effects: [
        { stat: 'Healing Shield', value: '-30%+90 (heals 40% absorbed, 9 hits)' },
        { stat: 'Block', value: '+28' },
      ],
    },
    ultimate: {
      type: 'buff',
      category: 'B',
      effects: [
        { stat: 'Physical DEF', value: '+40%+500' },
        { stat: 'Magic DEF', value: '+40%+500' },
      ],
    },
  },
};

// Build team builder characters from character-skills.js
function buildTeamBuilderCharacters() {
  const characters = {};

  for (const [charId, charData] of Object.entries(BUSTY_BURST_CHARACTER_SKILLS)) {
    const skillCategories = SKILL_CATEGORIES[charId] || {};
    const buffs = [];
    const debuffs = [];

    // Process each skill
    ['skill2', 'skill3', 'ultimate'].forEach(skillKey => {
      const skill = charData[skillKey];
      const categoryInfo = skillCategories[skillKey];

      if (skill && categoryInfo) {
        const skillEntry = {
          skillType:
            skillKey === 'skill2' ? 'Skill 2' : skillKey === 'skill3' ? 'Skill 3' : 'Ultimate',
          skillName: skill.name,
          description: skill.description,
          category: categoryInfo.category,
          effects: categoryInfo.effects,
          target: skill.target,
          duration: skill.description?.match(/for (\d+ seconds)/)?.[1] || 'varies',
        };

        if (categoryInfo.type === 'buff') {
          buffs.push(skillEntry);
        } else {
          debuffs.push(skillEntry);
        }
      }
    });

    characters[charId] = {
      id: charId,
      name: charData.name,
      image: CHARACTER_IMAGES[charId] || `${charId}.jpg`,
      rarity: charData.rarity,
      element: charData.element,
      role: charData.role,
      buffs,
      debuffs,
      passives: [
        { name: 'Passive 1', effects: charData.passive1 || 'None' },
        { name: 'Passive 2', effects: charData.passive2 || 'None' },
      ],
    };
  }

  return characters;
}

// Export the built characters
export const TEAM_BUILDER_CHARACTERS = buildTeamBuilderCharacters();

// Helper functions
export const getCharacterById = id => TEAM_BUILDER_CHARACTERS[id] || null;
export const getAllCharacters = () => Object.values(TEAM_BUILDER_CHARACTERS);
export const getCharactersByRole = role => getAllCharacters().filter(c => c.role === role);
export const getCharactersByElement = element =>
  getAllCharacters().filter(c => c.element === element);
export const getCharactersByRarity = rarity => getAllCharacters().filter(c => c.rarity === rarity);
export const getAllCharacterIds = () => Object.keys(TEAM_BUILDER_CHARACTERS);
