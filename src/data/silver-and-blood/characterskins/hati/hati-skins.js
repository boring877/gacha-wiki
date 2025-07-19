// Hati Skins Data
// New scalable structure for character skins

export const hatiSkinsData = {
  id: 'hati',
  character: 'Hati',
  image: '/images/games/silver-and-blood/characters/Hati.jpg', // Update with proper image URL when available

  skins: [
    {
      id: 'hati-default',
      name: 'Wolf Guardian',
      type: 'image',
      mediaUrl: '/images/games/silver-and-blood/characters/Hati.jpg', // Update with proper image URL
      thumbnailUrl: '/images/games/silver-and-blood/characters/Hati.jpg', // Update with proper image URL
      description: 'Hati in her traditional wolf guardian attire.',
      tags: ['default', 'guardian', 'wolf'],
    },
    {
      id: 'hati-midnight-lotus',
      name: 'Midnight Lotus',
      type: 'mp4',
      mediaUrl:
        'https://res.cloudinary.com/dtiiaqlah/video/upload/v1752619763/Hati_Outfit__Midnight_Lotus_tzs21c.mp4',
      thumbnailUrl:
        'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752619839/Hati_s_Outfit__Midnight_Lotus_ibl8xi.jpg',
      description: 'Hati in her enchanting Midnight Lotus outfit.',
      tags: ['midnight-lotus', 'special'],
    },
  ],
};

export default hatiSkinsData;
