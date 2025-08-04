// Clock Landing Page Script - Simple and clean

/**
 * Add smooth hover effects to game cards
 */
function initializeCardAnimations() {
  const gameCards = document.querySelectorAll('.game-card');

  gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

/**
 * Initialize the clock landing page
 */
function initClockLanding() {
  // Initialize card animations
  initializeCardAnimations();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initClockLanding);
} else {
  initClockLanding();
}
