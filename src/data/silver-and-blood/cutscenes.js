// Silver and Blood Cutscenes Database
// Simple structure: just character name, image, and video

export const cutscenes = [
  {
    id: 'dalcarlo',
    character: 'Dalcarlo',
    image: '/images/games/silver-and-blood/characters/Dalcarlo.jpg',
    videoLink: 'https://www.youtube.com/watch?v=Ecqrw0LMDK8'
  }
  // Add more cutscenes here: { id: 'character-name', character: 'Name', image: '/path/to/image', videoLink: 'youtube-watch-url' }
];

// Simple utility function
export function getAllCutscenes() {
  return cutscenes;
}

export default cutscenes;