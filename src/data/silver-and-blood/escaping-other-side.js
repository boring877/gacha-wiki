// Data for Escaping the Other Side - Roguelike exploration mode with Soulshards

export const escapingOtherSideInfo = {
  overview: {
    title: 'Escaping the Other Side',
    description:
      'A roguelike exploration mode where players navigate grid-based maps, collect Soulshards, and battle enemies to escape. Equip Soulshards to gain powerful buffs for your Vassals during exploration.',
  },

  mechanics: [
    {
      id: 'soulshards',
      title: 'Soulshards',
      description:
        'Character-specific equippable buffs that provide various combat bonuses. Come in 4 rarities: Flawed, Ordinary, Fine, and Pristine. Place in Soulshard Slots to activate effects during battle.',
    },
    {
      id: 'maps',
      title: 'Exploration Maps',
      description:
        'Navigate through grid-based maps with varying difficulty. Each map has a set number of steps to reach the escape point. Higher difficulty maps require minimum equipment scores.',
    },
    {
      id: 'stamina',
      title: 'Stamina System',
      description:
        'Movement and actions consume Stamina. Use Travel Rations and Portable Delicacies to restore Stamina during exploration.',
    },
    {
      id: 'inventory',
      title: 'Inventory Management',
      description:
        'Collect items during exploration. Expand inventory with Suitcases, protect valuable items with Secure Caches, and manage your loadout with Joyce\'s Knapsacks.',
    },
    {
      id: 'currency',
      title: 'Otherworldly Luminescence',
      description:
        'Exclusive currency for Escaping the Other Side. Obtain by selling items in the Warehouse. Use to purchase items and rewards in the Shop.',
    },
    {
      id: 'ranking',
      title: 'Ranking Rewards',
      description:
        'Compete for rankings to earn bonus rewards including Primogems and other valuable resources.',
    },
  ],
};

// Rarity configuration
export const rarityConfig = {
  1: { name: 'Flawed', color: '#9e9e9e', bgColor: 'rgba(158, 158, 158, 0.15)' },
  2: { name: 'Ordinary', color: '#4caf50', bgColor: 'rgba(76, 175, 80, 0.15)' },
  3: { name: 'Fine', color: '#2196f3', bgColor: 'rgba(33, 150, 243, 0.15)' },
  4: { name: 'Pristine', color: '#9c27b0', bgColor: 'rgba(156, 39, 176, 0.15)' },
};

// Format description with placeholders replaced by actual values
function formatDescription(desc, descNum) {
  if (!desc || !descNum) return desc;
  // Remove quotes and parse the array
  const cleanDesc = desc.replace(/^"|"$/g, '');
  let values = [];
  try {
    values = JSON.parse(descNum);
  } catch {
    return cleanDesc;
  }

  // Replace {0}, {1}, etc. with actual values
  let result = cleanDesc;
  values.forEach((val, idx) => {
    result = result.replace(new RegExp(`\\{${idx}\\}`, 'g'), val.toString());
  });

  // Clean up style tags
  result = result.replace(/<style=Highlight>/g, '<span class="highlight">');
  result = result.replace(/<\/style>/g, '</span>');

  return result;
}

// Parse icon path to get icon ID
function getIconId(iconPath) {
  if (!iconPath) return null;
  const match = iconPath.match(/(\d+)/);
  return match ? match[1] : null;
}

// Soulshards data - grouped by character
export const soulshards = [
  // Aiona
  {
    id: '30010001',
    character: 'Aiona',
    rarity: 1,
    name: 'Flawed Soulshard: Aiona',
    description: 'When a New Moon Vassal casts an Ultimate, all allied units gain 5% Lifesteal Rate and 10% ATK SPD Up for 10 sec.',
    shopPrice: 100,
    equipScore: 100,
    iconId: '70040',
  },
  {
    id: '30010002',
    character: 'Aiona',
    rarity: 2,
    name: 'Ordinary Soulshard: Aiona',
    description: 'When a New Moon Vassal casts an Ultimate, all allied units gain 10% Lifesteal Rate and 20% ATK SPD Up for 10 sec.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70040',
  },
  {
    id: '30010003',
    character: 'Aiona',
    rarity: 3,
    name: 'Fine Soulshard: Aiona',
    description: 'When a New Moon Vassal casts an Ultimate, all allied units gain 15% Lifesteal Rate and 30% ATK SPD Up for 10 sec.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70040',
  },
  // Noah
  {
    id: '30010011',
    character: 'Noah',
    rarity: 1,
    name: 'Flawed Soulshard: Noah',
    description: 'When a Crescent Moon Vassal uses Ultimate, all allies gain 10% CRIT Rate and 10% CRIT DMG for 10 sec.',
    shopPrice: 100,
    equipScore: 100,
    iconId: '70010',
  },
  {
    id: '30010012',
    character: 'Noah',
    rarity: 2,
    name: 'Ordinary Soulshard: Noah',
    description: 'When a Crescent Moon Vassal uses Ultimate, all allies gain 20% CRIT Rate and 20% CRIT DMG for 10 sec.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70010',
  },
  {
    id: '30010013',
    character: 'Noah',
    rarity: 3,
    name: 'Fine Soulshard: Noah',
    description: 'When a Crescent Moon Vassal uses Ultimate, all allies gain 30% CRIT Rate and 30% CRIT DMG for 10 sec.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70010',
  },
  {
    id: '30010014',
    character: 'Noah',
    rarity: 4,
    name: 'Pristine Soulshard: Noah',
    description: 'When a Crescent Moon Vassal uses Ultimate, all allies gain 40% CRIT Rate and 40% CRIT DMG for 10 sec.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70010',
  },
  // Setti
  {
    id: '30010024',
    character: 'Setti',
    rarity: 4,
    name: 'Pristine Soulshard: Setti',
    description: 'When a Full Moon Vassal uses Ultimate, all allies gain 60% All DMG Up for 10 sec.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70050',
  },
  // Starry-Eyed Aiona
  {
    id: '30010034',
    character: 'Starry-Eyed Aiona',
    rarity: 4,
    name: 'Pristine Soulshard: Starry-Eyed Aiona',
    description: 'When a Vassal gains a Shield or Healing, they gain 60% P. DMG Up and 60% M. DMG Up for 8 sec.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70290',
  },
  // Empousa
  {
    id: '30010043',
    character: 'Empousa',
    rarity: 3,
    name: 'Fine Soulshard: Empousa',
    description: 'Increases Vassal\'s All DMG Bonus by 45%.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70030',
  },
  {
    id: '30010044',
    character: 'Empousa',
    rarity: 4,
    name: 'Pristine Soulshard: Empousa',
    description: 'Increases Vassal\'s All DMG Bonus by 60%.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70030',
  },
  // Jestel
  {
    id: '30010051',
    character: 'Jestel',
    rarity: 1,
    name: 'Flawed Soulshard: Jestel',
    description: 'Increases Vassal\'s All DMG Reduction by 10%.',
    shopPrice: 100,
    equipScore: 100,
    iconId: '70020',
  },
  {
    id: '30010052',
    character: 'Jestel',
    rarity: 2,
    name: 'Ordinary Soulshard: Jestel',
    description: 'Increases Vassal\'s All DMG Reduction by 20%.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70020',
  },
  {
    id: '30010054',
    character: 'Jestel',
    rarity: 4,
    name: 'Pristine Soulshard: Jestel',
    description: 'Increases Vassal\'s All DMG Reduction by 40%.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70020',
  },
  // Seth
  {
    id: '30010062',
    character: 'Seth',
    rarity: 2,
    name: 'Ordinary Soulshard: Seth',
    description: 'After the battle begins, every 20 sec, all allies heal for 20% of their Max HP and are purified once.',
    shopPrice: 450,
    equipScore: 200,
    iconId: '70220',
  },
  // Cain
  {
    id: '30010072',
    character: 'Cain',
    rarity: 2,
    name: 'Ordinary Soulshard: Cain',
    description: 'Increases the Vassal\'s Bloodsoul Recovery by 200.',
    shopPrice: 450,
    equipScore: 200,
    iconId: '70090',
  },
  {
    id: '30010073',
    character: 'Cain',
    rarity: 3,
    name: 'Fine Soulshard: Cain',
    description: 'Increases the Vassal\'s Bloodsoul Recovery by 300.',
    shopPrice: 1500,
    equipScore: 300,
    iconId: '70090',
  },
  {
    id: '30010074',
    character: 'Cain',
    rarity: 4,
    name: 'Pristine Soulshard: Cain',
    description: 'Increases the Vassal\'s Bloodsoul Recovery by 400.',
    shopPrice: 3000,
    equipScore: 500,
    iconId: '70090',
  },
  // Yggdrasill
  {
    id: '30010082',
    character: 'Yggdrasill',
    rarity: 2,
    name: 'Ordinary Soulshard: Yggdrasill',
    description: 'Increases the Vassal\'s Max HP by 30%.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70470',
  },
  {
    id: '30010084',
    character: 'Yggdrasill',
    rarity: 4,
    name: 'Pristine Soulshard: Yggdrasill',
    description: 'Increases the Vassal\'s Max HP by 60%.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70470',
  },
  // Darcias
  {
    id: '30010092',
    character: 'Darcias',
    rarity: 2,
    name: 'Ordinary Soulshard: Darcias',
    description: 'Increases the DMG of Continuous DMG effects inflicted by allies by 30%. When allies inflict Continuous DMG on enemies, there is a 2% chance to gain 1 Bloodsoul.',
    shopPrice: 450,
    equipScore: 200,
    iconId: '70170',
  },
  // Goldland
  {
    id: '30010101',
    character: 'Goldland',
    rarity: 1,
    name: 'Flawed Soulshard: Goldland',
    description: 'After the Vassal uses a Basic ATK, increases ATK Speed by 2%. Stacks up to 10 times.',
    shopPrice: 150,
    equipScore: 100,
    iconId: '70520',
  },
  {
    id: '30010102',
    character: 'Goldland',
    rarity: 2,
    name: 'Ordinary Soulshard: Goldland',
    description: 'After the Vassal uses a Basic ATK, increases ATK Speed by 4%. Stacks up to 10 times.',
    shopPrice: 450,
    equipScore: 200,
    iconId: '70520',
  },
  // Van Helsing
  {
    id: '30010111',
    character: 'Van Helsing',
    rarity: 1,
    name: 'Flawed Soulshard: Van Helsing',
    description: 'Increases the Vassal\'s CRIT Rate by 20%.',
    shopPrice: 100,
    equipScore: 100,
    iconId: '70400',
  },
  {
    id: '30010112',
    character: 'Van Helsing',
    rarity: 2,
    name: 'Ordinary Soulshard: Van Helsing',
    description: 'Increases the Vassal\'s CRIT Rate by 40%.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70400',
  },
  {
    id: '30010113',
    character: 'Van Helsing',
    rarity: 3,
    name: 'Fine Soulshard: Van Helsing',
    description: 'Increases the Vassal\'s CRIT Rate by 60%.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70400',
  },
  // Hati
  {
    id: '30010122',
    character: 'Hati',
    rarity: 2,
    name: 'Ordinary Soulshard: Hati',
    description: 'Increases the Vassal\'s CRIT DMG by 40%.',
    shopPrice: 450,
    equipScore: 200,
    iconId: '70130',
  },
  {
    id: '30010123',
    character: 'Hati',
    rarity: 3,
    name: 'Fine Soulshard: Hati',
    description: 'Increases the Vassal\'s CRIT DMG by 60%.',
    shopPrice: 1500,
    equipScore: 300,
    iconId: '70130',
  },
  {
    id: '30010124',
    character: 'Hati',
    rarity: 4,
    name: 'Pristine Soulshard: Hati',
    description: 'Increases the Vassal\'s CRIT DMG by 80%.',
    shopPrice: 3000,
    equipScore: 500,
    iconId: '70130',
  },
  // Jones
  {
    id: '30010131',
    character: 'Jones',
    rarity: 1,
    name: 'Flawed Soulshard: Jones',
    description: 'Increases Vassal P. DEF by 15%.',
    shopPrice: 100,
    equipScore: 100,
    iconId: '70260',
  },
  {
    id: '30010132',
    character: 'Jones',
    rarity: 2,
    name: 'Ordinary Soulshard: Jones',
    description: 'Increases Vassal P. DEF by 30%.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70260',
  },
  {
    id: '30010133',
    character: 'Jones',
    rarity: 3,
    name: 'Fine Soulshard: Jones',
    description: 'Increases Vassal P. DEF by 45%.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70260',
  },
  // Katherine
  {
    id: '30010141',
    character: 'Katherine',
    rarity: 1,
    name: 'Flawed Soulshard: Katherine',
    description: 'Increases Vassal M. DEF by 15%.',
    shopPrice: 100,
    equipScore: 100,
    iconId: '70240',
  },
  {
    id: '30010142',
    character: 'Katherine',
    rarity: 2,
    name: 'Ordinary Soulshard: Katherine',
    description: 'Increases Vassal M. DEF by 30%.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70240',
  },
  {
    id: '30010143',
    character: 'Katherine',
    rarity: 3,
    name: 'Fine Soulshard: Katherine',
    description: 'Increases Vassal M. DEF by 45%.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70240',
  },
  {
    id: '30010144',
    character: 'Katherine',
    rarity: 4,
    name: 'Pristine Soulshard: Katherine',
    description: 'Increases Vassal M. DEF by 60%.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70240',
  },
  // Leo
  {
    id: '30010153',
    character: 'Leo',
    rarity: 3,
    name: 'Fine Soulshard: Leo',
    description: 'Increases Vassal P. DMG Bonus by 45%.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70550',
  },
  {
    id: '30010154',
    character: 'Leo',
    rarity: 4,
    name: 'Pristine Soulshard: Leo',
    description: 'Increases Vassal P. DMG Bonus by 60%.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70550',
  },
  // Jennie
  {
    id: '30010162',
    character: 'Jennie',
    rarity: 2,
    name: 'Ordinary Soulshard: Jennie',
    description: 'Increases Vassal M. DMG Bonus by 30%.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70540',
  },
  {
    id: '30010163',
    character: 'Jennie',
    rarity: 3,
    name: 'Fine Soulshard: Jennie',
    description: 'Increases Vassal M. DMG Bonus by 45%.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70540',
  },
  // Spectral Gilrain
  {
    id: '30010173',
    character: 'Spectral Gilrain',
    rarity: 3,
    name: 'Fine Soulshard: Spectral Gilrain',
    description: 'Increases Vassal Dodge Rate by 30%.',
    shopPrice: 1000,
    equipScore: 300,
    iconId: '70140',
  },
  {
    id: '30010174',
    character: 'Spectral Gilrain',
    rarity: 4,
    name: 'Pristine Soulshard: Spectral Gilrain',
    description: 'Increases Vassal Dodge Rate by 40%.',
    shopPrice: 2000,
    equipScore: 500,
    iconId: '70140',
  },
  // Ottavia
  {
    id: '30010181',
    character: 'Ottavia',
    rarity: 1,
    name: 'Flawed Soulshard: Ottavia',
    description: 'Increases Vassal Lifesteal Rate by 5%.',
    shopPrice: 100,
    equipScore: 100,
    iconId: '70430',
  },
  {
    id: '30010182',
    character: 'Ottavia',
    rarity: 2,
    name: 'Ordinary Soulshard: Ottavia',
    description: 'Increases Vassal Lifesteal Rate by 10%.',
    shopPrice: 300,
    equipScore: 200,
    iconId: '70430',
  },
  // Limine
  {
    id: '30010191',
    character: 'Limine',
    rarity: 1,
    name: 'Flawed Soulshard: Limine',
    description: 'Increases Vassal Final DMG Bonus by 15%, and increases Vassal Ultimate Bloodsoul Cost by 1.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70570',
  },
  {
    id: '30010192',
    character: 'Limine',
    rarity: 2,
    name: 'Ordinary Soulshard: Limine',
    description: 'Increases Vassal Final DMG Bonus by 30%, and increases Vassal Ultimate Bloodsoul Cost by 1.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70570',
  },
  // Ressa
  {
    id: '30010201',
    character: 'Ressa',
    rarity: 1,
    name: 'Flawed Soulshard: Ressa',
    description: 'Increases allied heroes\' Ultimate DMG by 15% and reduces All DMG Reduction by 10%.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70160',
  },
  // Seraphina
  {
    id: '30010211',
    character: 'Seraphina',
    rarity: 1,
    name: 'Flawed Soulshard: Seraphina',
    description: 'When an allied hero deals CRIT DMG, increases ATK by 1% and reduces Max HP by 1%. Stacks up to 10 times.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70720',
  },
  {
    id: '30010213',
    character: 'Seraphina',
    rarity: 3,
    name: 'Fine Soulshard: Seraphina',
    description: 'When an allied hero deals CRIT DMG, increases ATK by 3% and reduces Max HP by 1%. Stacks up to 10 times.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70720',
  },
  {
    id: '30010214',
    character: 'Seraphina',
    rarity: 4,
    name: 'Pristine Soulshard: Seraphina',
    description: 'When an allied hero deals CRIT DMG, increases ATK by 4% and reduces Max HP by 1%. Stacks up to 10 times.',
    shopPrice: 4000,
    equipScore: 500,
    iconId: '70720',
  },
  // Gadric
  {
    id: '30010221',
    character: 'Gadric',
    rarity: 1,
    name: 'Flawed Soulshard: Gadric',
    description: 'Allied heroes take 15% less DMG from non-Basic ATK, but take 15% more DMG from Basic ATK.',
    shopPrice: 150,
    equipScore: 100,
    iconId: '70200',
  },
  {
    id: '30010224',
    character: 'Gadric',
    rarity: 4,
    name: 'Pristine Soulshard: Gadric',
    description: 'Allied heroes take 60% less DMG from non-Basic ATK, but take 60% more DMG from Basic ATK.',
    shopPrice: 3000,
    equipScore: 500,
    iconId: '70200',
  },
  // Nicole
  {
    id: '30010232',
    character: 'Nicole',
    rarity: 2,
    name: 'Ordinary Soulshard: Nicole',
    description: 'Allied heroes gain 20% Dodge Rate. Each successful Dodge increases Dodge Rate by 2% and causes the hero to lose 1% Max HP per sec. Stacks up to 5 times.',
    shopPrice: 450,
    equipScore: 200,
    iconId: '70330',
  },
  {
    id: '30010233',
    character: 'Nicole',
    rarity: 3,
    name: 'Fine Soulshard: Nicole',
    description: 'Allied heroes gain 30% Dodge Rate. Each successful Dodge increases Dodge Rate by 2% and causes the hero to lose 1% Max HP per sec. Stacks up to 5 times.',
    shopPrice: 1500,
    equipScore: 300,
    iconId: '70330',
  },
  {
    id: '30010234',
    character: 'Nicole',
    rarity: 4,
    name: 'Pristine Soulshard: Nicole',
    description: 'Allied heroes gain 40% Dodge Rate. Each successful Dodge increases Dodge Rate by 2% and causes the hero to lose 1% Max HP per sec. Stacks up to 5 times.',
    shopPrice: 3000,
    equipScore: 500,
    iconId: '70330',
  },
  // Julius
  {
    id: '30010241',
    character: 'Julius',
    rarity: 1,
    name: 'Flawed Soulshard: Julius',
    description: 'Increases allied heroes\' P. DMG by 20%, and reduces P. DEF by 10% and M. DEF by 10%.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70710',
  },
  {
    id: '30010242',
    character: 'Julius',
    rarity: 2,
    name: 'Ordinary Soulshard: Julius',
    description: 'Increases allied heroes\' P. DMG by 40%, and reduces P. DEF by 20% and M. DEF by 20%.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70710',
  },
  {
    id: '30010243',
    character: 'Julius',
    rarity: 3,
    name: 'Fine Soulshard: Julius',
    description: 'Increases allied heroes\' P. DMG by 60%, and reduces P. DEF by 30% and M. DEF by 30%.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70710',
  },
  {
    id: '30010244',
    character: 'Julius',
    rarity: 4,
    name: 'Pristine Soulshard: Julius',
    description: 'Increases allied heroes\' P. DMG by 80%, and reduces P. DEF by 40% and M. DEF by 40%.',
    shopPrice: 4000,
    equipScore: 500,
    iconId: '70710',
  },
  // Letitia
  {
    id: '30010252',
    character: 'Letitia',
    rarity: 2,
    name: 'Ordinary Soulshard: Letitia',
    description: 'When Letitia\'s Dodge Rate reaches 100%, All DMG Bonus increases by 50%.',
    shopPrice: 450,
    equipScore: 200,
    iconId: '70730',
  },
  {
    id: '30010253',
    character: 'Letitia',
    rarity: 3,
    name: 'Fine Soulshard: Letitia',
    description: 'When Letitia\'s Dodge Rate reaches 100%, All DMG Bonus increases by 75%.',
    shopPrice: 1500,
    equipScore: 300,
    iconId: '70730',
  },
  {
    id: '30010254',
    character: 'Letitia',
    rarity: 4,
    name: 'Pristine Soulshard: Letitia',
    description: 'When Letitia\'s Dodge Rate reaches 100%, All DMG Bonus increases by 100%.',
    shopPrice: 3000,
    equipScore: 500,
    iconId: '70730',
  },
  // Alene
  {
    id: '30010261',
    character: 'Alene',
    rarity: 1,
    name: 'Flawed Soulshard: Alene',
    description: 'When an allied Vassal\'s Phantom Blood is fully charged, their ATK increases by 10%, while their P. DEF decreases by 10% and M. DEF decreases by 10%.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70410',
  },
  {
    id: '30010262',
    character: 'Alene',
    rarity: 2,
    name: 'Ordinary Soulshard: Alene',
    description: 'When an allied Vassal\'s Phantom Blood is fully charged, their ATK increases by 20%, while their P. DEF decreases by 20% and M. DEF decreases by 20%.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70410',
  },
  {
    id: '30010264',
    character: 'Alene',
    rarity: 4,
    name: 'Pristine Soulshard: Alene',
    description: 'When an allied Vassal\'s Phantom Blood is fully charged, their ATK increases by 40%, while their P. DEF decreases by 40% and M. DEF decreases by 40%.',
    shopPrice: 4000,
    equipScore: 500,
    iconId: '70410',
  },
  // Lamia
  {
    id: '30010274',
    character: 'Lamia',
    rarity: 4,
    name: 'Pristine Soulshard: Lamia',
    description: 'Increases allied Lifesteal Rate by 40%, but reduces CRIT DMG Dealt by 40%.',
    shopPrice: 3000,
    equipScore: 500,
    iconId: '70110',
  },
  // Dalcarlo
  {
    id: '30010291',
    character: 'Dalcarlo',
    rarity: 1,
    name: 'Flawed Soulshard: Dalcarlo',
    description: 'While Blood Moon is active, allies gain 15% All DMG Bonus, but Max HP is reduced by 10%.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70230',
  },
  {
    id: '30010293',
    character: 'Dalcarlo',
    rarity: 3,
    name: 'Fine Soulshard: Dalcarlo',
    description: 'While Blood Moon is active, allies gain 45% All DMG Bonus, but Max HP is reduced by 10%.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70230',
  },
  // Baphomet
  {
    id: '30010301',
    character: 'Baphomet',
    rarity: 1,
    name: 'Flawed Soulshard: Baphomet',
    description: 'While Blood Moon is active, allied Vassals\' Ultimate DMG increases by 15%.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70490',
  },
  {
    id: '30010302',
    character: 'Baphomet',
    rarity: 2,
    name: 'Ordinary Soulshard: Baphomet',
    description: 'While Blood Moon is active, allied Vassals\' Ultimate DMG increases by 30%.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70490',
  },
  {
    id: '30010304',
    character: 'Baphomet',
    rarity: 4,
    name: 'Pristine Soulshard: Baphomet',
    description: 'While Blood Moon is active, allied Vassals\' Ultimate DMG increases by 60%.',
    shopPrice: 4000,
    equipScore: 500,
    iconId: '70490',
  },
  // Alexi
  {
    id: '30010311',
    character: 'Alexi',
    rarity: 1,
    name: 'Flawed Soulshard: Alexi',
    description: 'When Alexi\'s Lifesteal Rate reaches 30%, All DMG Dealt increases by 25%.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70740',
  },
  {
    id: '30010313',
    character: 'Alexi',
    rarity: 3,
    name: 'Fine Soulshard: Alexi',
    description: 'When Alexi\'s Lifesteal Rate reaches 30%, All DMG Dealt increases by 75%.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70740',
  },
  // Albrecht
  {
    id: '30010324',
    character: 'Albrecht',
    rarity: 4,
    name: 'Pristine Soulshard: Albrecht',
    description: 'When an allied Vassal inflicts a Debuff or Control Effect, their ATK increases by 5%. Stacks up to 10 times.',
    shopPrice: 4000,
    equipScore: 500,
    iconId: '70600',
  },
  // Transcendent Noah
  {
    id: '30010331',
    character: 'Transcendent Noah',
    rarity: 1,
    name: 'Flawed Soulshard: Transcendent Noah',
    description: 'When an allied Vassal uses a Special, increases their ATK SPD by 4% and reduces their P. DEF by 2% and M. DEF by 2%. Stacks up to 5 times.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70390',
  },
  // Joan
  {
    id: '30010342',
    character: 'Joan',
    rarity: 2,
    name: 'Ordinary Soulshard: Joan',
    description: 'When an allied Vassal\'s HP drops below 60% for the first time, increases CRIT Rate by 50% and CRIT DMG by 50%, and reduces All DMG Reduction by 20% for 30 sec.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70420',
  },
  {
    id: '30010343',
    character: 'Joan',
    rarity: 3,
    name: 'Fine Soulshard: Joan',
    description: 'When an allied Vassal\'s HP drops below 60% for the first time, increases CRIT Rate by 75% and CRIT DMG by 75%, and reduces All DMG Reduction by 30% for 30 sec.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70420',
  },
  // Theophane
  {
    id: '30010352',
    character: 'Theophane',
    rarity: 2,
    name: 'Ordinary Soulshard: Theophane',
    description: 'When an allied Vassal performs a Basic ATK, increases their All DMG Bonus by 5% and reduces their Max HP by 2%. Stacks up to 10 times.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70190',
  },
  {
    id: '30010353',
    character: 'Theophane',
    rarity: 3,
    name: 'Fine Soulshard: Theophane',
    description: 'When an allied Vassal performs a Basic ATK, increases their All DMG Bonus by 7% and reduces their Max HP by 3%. Stacks up to 10 times.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70190',
  },
  // Acappella
  {
    id: '30010362',
    character: 'Acappella',
    rarity: 2,
    name: 'Ordinary Soulshard: Acappella',
    description: 'For each type of Debuff on the enemy, increases Allied Ultimate DMG by 8%.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70210',
  },
  {
    id: '30010364',
    character: 'Acappella',
    rarity: 4,
    name: 'Pristine Soulshard: Acappella',
    description: 'For each type of Debuff on the enemy, increases Allied Ultimate DMG by 15%.',
    shopPrice: 4000,
    equipScore: 500,
    iconId: '70210',
  },
  // Ethereal Joan
  {
    id: '30010371',
    character: 'Ethereal Joan',
    rarity: 1,
    name: 'Flawed Soulshard: Ethereal Joan',
    description: 'When Ethereal Joan triggers Thunderflow, immediately gains 45% Electro Capacity.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70760',
  },
  {
    id: '30010373',
    character: 'Ethereal Joan',
    rarity: 3,
    name: 'Fine Soulshard: Ethereal Joan',
    description: 'When Ethereal Joan triggers Thunderflow, immediately gains 85% Electro Capacity.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70760',
  },
  // Ami
  {
    id: '30010381',
    character: 'Ami',
    rarity: 1,
    name: 'Flawed Soulshard: Ami',
    description: 'Increases the Vassal\'s ATK by 8%.',
    shopPrice: 200,
    equipScore: 100,
    iconId: '70060',
  },
  {
    id: '30010382',
    character: 'Ami',
    rarity: 2,
    name: 'Ordinary Soulshard: Ami',
    description: 'Increases the Vassal\'s ATK by 15%.',
    shopPrice: 600,
    equipScore: 200,
    iconId: '70060',
  },
  {
    id: '30010383',
    character: 'Ami',
    rarity: 3,
    name: 'Fine Soulshard: Ami',
    description: 'Increases the Vassal\'s ATK by 22%.',
    shopPrice: 2000,
    equipScore: 300,
    iconId: '70060',
  },
];

// Consumables data
export const consumables = [
  // Travel Rations
  {
    id: '30020001',
    name: 'Travel Rations (Minor)',
    category: 'Stamina',
    rarity: 1,
    description: 'Use during exploration to restore 5 Stamina.',
    shopPrice: 75,
    iconId: '800021',
  },
  {
    id: '30020002',
    name: 'Travel Rations (Moderate)',
    category: 'Stamina',
    rarity: 1,
    description: 'Use during exploration to restore 8 Stamina.',
    shopPrice: 150,
    iconId: '800022',
  },
  {
    id: '30020003',
    name: 'Travel Rations (Major)',
    category: 'Stamina',
    rarity: 2,
    description: 'Use during exploration to restore 10 Stamina.',
    shopPrice: 225,
    iconId: '800023',
  },
  // Portable Delicacy
  {
    id: '30020004',
    name: 'Portable Delicacy (Minor)',
    category: 'Stamina',
    rarity: 3,
    description: 'Use during exploration to restore 15 Stamina.',
    shopPrice: 300,
    iconId: '800031',
  },
  {
    id: '30020005',
    name: 'Portable Delicacy (Moderate)',
    category: 'Stamina',
    rarity: 3,
    description: 'Use during exploration to restore 20 Stamina.',
    shopPrice: 375,
    iconId: '800032',
  },
  {
    id: '30020006',
    name: 'Portable Delicacy (Major)',
    category: 'Stamina',
    rarity: 4,
    description: 'Use during exploration to restore 30 Stamina.',
    shopPrice: 450,
    iconId: '800033',
  },
  // Wolfsbane Powder
  {
    id: '30021001',
    name: 'Wolfsbane Powder (Minor)',
    category: 'Revival',
    rarity: 2,
    description: 'Use to revive 1 fallen Vassal unable to continue fighting.',
    shopPrice: 250,
    iconId: '500006',
  },
  {
    id: '30021002',
    name: 'Wolfsbane Powder (Major)',
    category: 'Revival',
    rarity: 3,
    description: 'Use to revive all fallen Vassals unable to continue fighting.',
    shopPrice: 1000,
    iconId: '500006',
  },
  // Stimulant Mix
  {
    id: '30022002',
    name: 'Stimulant Mix (Major)',
    category: 'Recovery',
    rarity: 3,
    description: 'Use to recover all Vassals with 0 Vigor unable to continue fighting.',
    shopPrice: 500,
    iconId: '800013',
  },
  // Clock of Reversion
  {
    id: '30023001',
    name: 'Clock of Reversion',
    category: 'Special',
    rarity: 4,
    description: 'Automatically used after Defeat to revert 1 failed evacuation attempt and return to the position before the last battle.',
    shopPrice: 2000,
    iconId: '500083',
  },
];

// Equipment items (Suitcases, Caches, etc.)
export const equipment = [
  // Suitcases
  {
    id: '30030001',
    name: 'Flawed Suitcase',
    category: 'Inventory',
    rarity: 1,
    description: 'Place in the Inventory Expansion Slot to add 4 Inventory slots.',
    shopPrice: 500,
    iconId: '30001',
  },
  {
    id: '30030002',
    name: 'Ordinary Suitcase',
    category: 'Inventory',
    rarity: 2,
    description: 'Place in the Inventory Expansion Slot to add 8 Inventory slots.',
    shopPrice: 1000,
    iconId: '30002',
  },
  {
    id: '30030003',
    name: 'Fine Suitcase',
    category: 'Inventory',
    rarity: 3,
    description: 'Place in the Inventory Expansion Slot to add 12 Inventory slots.',
    shopPrice: 1500,
    iconId: '30003',
  },
  {
    id: '30030004',
    name: 'Pristine Suitcase',
    category: 'Inventory',
    rarity: 4,
    description: 'Place in the Inventory Expansion Slot to add 16 Inventory slots.',
    shopPrice: 2500,
    iconId: '30004',
  },
  // Secure Caches
  {
    id: '30031001',
    name: 'Flawed Secure Cache',
    category: 'Cache',
    rarity: 1,
    description: 'Place in the Secure Cache Expansion Slot to add 2 Secure Cache slots.',
    shopPrice: 3000,
    iconId: '31012',
  },
  {
    id: '30031002',
    name: 'Ordinary Secure Cache',
    category: 'Cache',
    rarity: 2,
    description: 'Place in the Secure Cache Expansion Slot to add 4 Secure Cache slots.',
    shopPrice: 6000,
    iconId: '31012',
  },
  // Joyce's Knapsack
  {
    id: '30032004',
    name: 'Pristine Joyce\'s Knapsack',
    category: 'Soulshard',
    rarity: 4,
    description: 'Place in the Soulshard Expansion Slot to add 10 Soulshard Slots.',
    shopPrice: 3000,
    iconId: '500149',
  },
  // Resting Caskets
  {
    id: '30033001',
    name: 'Flawed Resting Casket',
    category: 'Lineup',
    rarity: 1,
    description: 'Place in the Lineup Expansion Slot during preparation to increase Lineup capacity by 2 Vassals.',
    shopPrice: 750,
    iconId: '31011',
  },
  {
    id: '30033003',
    name: 'Fine Resting Casket',
    category: 'Lineup',
    rarity: 3,
    description: 'Place in the Lineup Expansion Slot during preparation to increase Lineup capacity by 7 Vassals.',
    shopPrice: 2250,
    iconId: '31012',
  },
];

// Junk items (sellable for currency)
export const junkItems = [
  {
    id: '30040000',
    name: 'Stale Bread',
    rarity: 1,
    description: 'A trinket of little value. Can be sold in the Warehouse for Otherworldly Luminescence.',
    shopPrice: 50,
    iconId: '500121',
  },
  {
    id: '30040001',
    name: 'Tattered Book',
    rarity: 1,
    description: 'A trinket of little value. Can be sold in the Warehouse for Otherworldly Luminescence.',
    shopPrice: 45,
    iconId: '1412',
  },
  {
    id: '30040002',
    name: 'Raptor Feather',
    rarity: 1,
    description: 'A trinket of little value. Can be sold in the Warehouse for Otherworldly Luminescence.',
    shopPrice: 55,
    iconId: '30061',
  },
];

// Maps data
export const maps = [
  {
    id: '1001',
    name: 'Wilderness of Crossroads',
    steps: 20,
    minEquipScore: null,
    mapType: 'Normal',
    gridSize: { width: 9, height: 7 },
    description: 'A beginner-friendly map perfect for learning the exploration mechanics.',
  },
  {
    id: '1002',
    name: 'Endless Desert',
    steps: 30,
    minEquipScore: 500,
    mapType: 'Normal',
    gridSize: { width: 15, height: 11 },
    description: 'A vast desert with multiple escape routes and challenging encounters.',
  },
  {
    id: '1003',
    name: 'Vast Snowfield',
    steps: 40,
    minEquipScore: 1000,
    mapType: 'Normal',
    gridSize: { width: 21, height: 15 },
    description: 'A treacherous snowfield with numerous obstacles and high rewards.',
  },
  {
    id: '1004',
    name: 'End of the World',
    steps: null,
    minEquipScore: null,
    mapType: 'Special',
    gridSize: { width: 3, height: 5 },
    description: 'A unique challenge map with special rules and encounters.',
  },
];

// Ranking rewards data
export const rankingRewards = [
  { rank: '1-5', primogems: 1500, currency: 5000, ticket: 1 },
  { rank: '6-10', primogems: 1400, currency: 4950, ticket: 1 },
  { rank: '11-20', primogems: 1300, currency: 4900, ticket: 1 },
  { rank: '21-50', primogems: 1200, currency: 4850, ticket: 1 },
  { rank: '51-100', primogems: 1100, currency: 4800, ticket: 1 },
  { rank: '101-200', primogems: 1000, currency: 4750, ticket: 1 },
  { rank: 'Top 5%', primogems: 900, currency: 4700, ticket: 1 },
  { rank: 'Top 10%', primogems: 800, currency: 4650, ticket: 1 },
  { rank: 'Top 20%', primogems: 700, currency: 4600, ticket: 1 },
  { rank: 'Top 30%', primogems: 600, currency: 4550, ticket: 1 },
  { rank: 'Top 50%', primogems: 500, currency: 4500, ticket: 1 },
  { rank: 'Top 70%', primogems: 450, currency: 4450, ticket: 1 },
  { rank: 'Top 100%', primogems: 430, currency: 4400, ticket: 1 },
];

// Helper functions
export function getSoulshardsGroupedByCharacter() {
  const grouped = {};
  soulshards.forEach(shard => {
    if (!grouped[shard.character]) {
      grouped[shard.character] = [];
    }
    grouped[shard.character].push(shard);
  });
  // Sort each character's shards by rarity
  Object.values(grouped).forEach(shards => {
    shards.sort((a, b) => a.rarity - b.rarity);
  });
  return grouped;
}

export function getUniqueCharacters() {
  const characters = [...new Set(soulshards.map(s => s.character))];
  return characters.sort();
}

export function getSoulshardsbyRarity(rarity) {
  return soulshards.filter(s => s.rarity === rarity);
}

export function getConsumablesByCategory() {
  const grouped = {};
  consumables.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
}

export function getEquipmentByCategory() {
  const grouped = {};
  equipment.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
}

export function getRarityInfo(rarity) {
  return rarityConfig[rarity] || rarityConfig[1];
}

// Get buy price (2x sell price)
export function getBuyPrice(sellPrice) {
  return sellPrice * 2;
}
