export const buildConfig = {
  meta: {
    title: 'BBB Busty - Character Builds',
    description: 'Explore character builds and team compositions for Busty Burst Fantasy',
    gameTitle: 'Character Builds',
  },

  // Characters with builds available
  characters: [
    {
      id: 'festive_attire_estiriel',
      name: 'Festive Attire Estiriel',
      fileName: 'Festive_Attire_Estiriel',
      rarity: 'SSR',
      element: 'Light',
      role: 'Support',
      skills: ['Heal', 'Buff'],
      actionSpeed: 'Normal',
      tier: 'SSS',
      buildLink: '/guides/busty-burst/build/festive-attire-estiriel',
    },
    {
      id: 'shaty',
      name: 'Shaty',
      fileName: 'Shaty',
      imageExt: 'png',
      rarity: 'SSR',
      element: 'Wind',
      role: 'DPS',
      skills: ['Physical'],
      actionSpeed: 'Normal',
      tier: 'SS',
      buildLink: '/guides/busty-burst/build/shaty',
    },
    {
      id: 'kaguya',
      name: 'Kaguya',
      fileName: 'kaguya',
      rarity: 'SSR',
      element: 'Dark',
      role: 'DPS',
      skills: ['Magic', 'Debuff'],
      actionSpeed: 'Slightly Fast',
      tier: 'SS',
      buildLink: '/guides/busty-burst/build/kaguya',
    },
  ],
};
