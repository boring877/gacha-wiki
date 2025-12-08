export const characterBuilds = {
  'festive-attire-estiriel': {
    slug: 'festive-attire-estiriel',
    character: {
      name: 'Festive Attire Estiriel',
      fileName: 'Festive_Attire_Estiriel',
    },
    weapon: {
      name: 'Annihilation Grenade',
      image: 'Magic_Grenade_of_annihilation.png',
      effect: 'MP Regeneration+ Self gains MP Regeneration 200 for 3 seconds',
    },
    accessory: {
      name: 'Emerald 4 Set + 1 Random Rainbow',
      images: [
        'Emerald_Ring.png',
        'Emerald_Bracelet.png',
        'Emerald_Necklace.png',
        'Emerald_Earrings.png',
      ],
      setEffects: [
        { pieces: 2, effect: 'Block +15' },
        { pieces: 4, effect: 'Action speed +15%' },
      ],
    },
  },
};
