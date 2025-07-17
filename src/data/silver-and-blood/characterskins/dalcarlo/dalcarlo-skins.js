// Dalcarlo Skins Data
// New scalable structure for character skins

export const dalcarloSkinsData = {
  id: 'dalcarlo',
  character: 'Dalcarlo',
  image: 'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752693269/Dalcarlo_z0hadq.jpg',
  
  skins: [
    {
      id: 'dalcarlo-default',
      name: 'Default Battle Outfit',
      type: 'image',
      mediaUrl: 'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752693269/Dalcarlo_z0hadq.jpg',
      thumbnailUrl: 'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752693269/Dalcarlo_z0hadq.jpg',
      description: 'Dalcarlo in her iconic battle attire, ready for combat.',
      tags: ['default', 'battle'],
    },
    {
      id: 'dalcarlo-paradise-lost',
      name: 'Paradise Lost',
      type: 'mp4',
      mediaUrl: 'https://res.cloudinary.com/dtiiaqlah/video/upload/v1752618825/New_Outfit_Dalcarlo_Paradise_Lost_bimajc.mp4',
      thumbnailUrl: 'https://res.cloudinary.com/dtiiaqlah/image/upload/v1752618915/ImgNew_Outfit_Dalcarlo_Paradise_Lost_q5szkn.jpg',
      description: 'Dalcarlo in her stunning Paradise Lost outfit.',
      tags: ['paradise-lost', 'special'],
    },
  ]
};

export default dalcarloSkinsData;