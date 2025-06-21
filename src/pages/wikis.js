// wikis.js - Dynamic game list rendering for wikis page

// Wait for DOM to be ready and only run on client side
if (typeof document !== 'undefined') {
  // Wait for DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing games...');
    
    const games = [
      {
        name: "Zone Nova",
        url: "/guides/zone-nova/",
        image: "/images/zonenova1.jpg",
        description: "Characters • Runes • Events • Rifts • Crafting • Updates"
      },
      // Add more games here easily
      // {
      //   name: "Another Game",
      //   url: "/guides/another-game/",
      //   image: "/images/another-game.jpg",
      //   description: "Game description here"
      // }
    ];

    const gamesList = document.getElementById('games-list');
    console.log('Games list element:', gamesList);

    if (gamesList) {
      console.log('Rendering', games.length, 'games...');
      
      games.forEach((game, index) => {
        console.log('Rendering game:', game.name);
        
        const a = document.createElement('a');
        a.href = game.url;
        a.className = 'game-link';

        a.innerHTML = `
          <article class="game-card">
            <div class="game-header">
              <div class="game-icon">
                <img src="${game.image}" alt="${game.name}" width="80" height="80" />
              </div>
              <div class="game-info">
                <h2 class="game-title">${game.name}</h2>
                <p class="game-description">${game.description}</p>
              </div>
              <div class="game-arrow">→</div>
            </div>
          </article>
        `;
        gamesList.appendChild(a);
      });
      
      console.log('Games rendering complete!');
    } else {
      console.error('games-list element not found!');
    }
  });
} 