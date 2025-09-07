/**
 * ═══════════════════════════════════════════════════════════════════════
 *                HORIZON WALKER CHARACTER GIFTS FUNCTIONALITY
 *              Interactive features for the character gift preferences page
 * ═══════════════════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', function () {
  // Character search functionality
  const searchInput = document.getElementById('character-search');
  const characterGrid = document.getElementById('character-grid');
  const characterCards = characterGrid?.querySelectorAll('.hw-character-card');
  const rarityButtons = document.querySelectorAll('.hw-rarity-btn');

  let currentRarityFilter = 'all';

  // Function to filter characters
  function filterCharacters() {
    if (!characterCards) return;

    const searchTerm = searchInput?.value?.toLowerCase() || '';

    characterCards.forEach(card => {
      const characterName = card.querySelector('.hw-character-name')?.textContent?.toLowerCase();
      const characterRarity = card.dataset.rarity;

      const matchesSearch = !searchTerm || characterName?.includes(searchTerm);
      const matchesRarity =
        currentRarityFilter === 'all' || characterRarity === currentRarityFilter;

      const shouldShow = matchesSearch && matchesRarity;

      if (shouldShow) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Search input event listener
  if (searchInput) {
    searchInput.addEventListener('input', filterCharacters);
  }

  // Rarity filter event listeners
  rarityButtons.forEach(button => {
    button.addEventListener('click', e => {
      // Remove active class from all buttons
      rarityButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      e.target.classList.add('active');

      // Update current filter
      currentRarityFilter = e.target.dataset.rarity;

      // Filter characters
      filterCharacters();
    });
  });

  // Optional: Add loading states or other interactive features
  console.log('Character Gifts page loaded with', characterCards?.length || 0, 'characters');
});
