// Night Assault Suspect - Thor Memory Data
export const nightAssaultSuspectData = {
  id: 'night-assault-suspect',
  slug: 'night-assault-suspect',
  name: 'Night Assault Suspect',
  character: 'Thor',
  rarity: 'SSR',
  element: 'Holy',
  class: 'Guardian', // Thor is a Guardian class character
  image: '/images/games/zone-nova/memories/Thorcard.jpg',

  // Level 80 Stats
  stats: {
    hp: 6600,
    attack: 480,
    defense: 690,
  },

  // Memory Effects
  effects: [
    'Defense increased by 64%',
    'When allied characters with shields take damage, Defense increased by 64%',
    'When the equipper deals continuous damage to enemy targets, increase damage taken by the target by 15% for 5 seconds',
  ],
};

export default nightAssaultSuspectData;
