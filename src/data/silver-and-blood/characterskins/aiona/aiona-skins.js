// Aiona Skins Data
// New scalable structure for character skins

export const aionaSkinsData = {
  id: 'aiona',
  character: 'Starry-Eyed Aiona',
  image: '/images/games/silver-and-blood/characters/Starry_Eyed_Aiona.jpg', // Update with proper image URL when available

  skins: [
    {
      id: 'aiona-default',
      name: 'Default Battle Outfit',
      type: 'image',
      mediaUrl: '/images/games/silver-and-blood/characters/Starry_Eyed_Aiona.jpg', // Update with proper image URL
      thumbnailUrl: '/images/games/silver-and-blood/characters/Starry_Eyed_Aiona.jpg', // Update with proper image URL
      description: 'Starry-Eyed Aiona in her standard battle attire.',
      tags: ['default', 'battle'],
    },
    {
      id: 'aiona-pearlescent-dreams',
      name: 'Pearlescent Dreams',
      type: 'mp4',
      mediaUrl:
        'https://res.cloudinary.com/dtiiaqlah/video/upload/v1752616267/AionaSkin1_cjsgpe.mp4',
      thumbnailUrl:
        'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752617181/New_Outfit_Starry_Eyed_Aiona_Pearlescent_Dreams_vsqbmi.webp',
      description: 'Starry-Eyed Aiona in her stunning Pearlescent Dreams outfit.',
      tags: ['pearlescent-dreams', 'special'],
    },
  ],
};

export default aionaSkinsData;
