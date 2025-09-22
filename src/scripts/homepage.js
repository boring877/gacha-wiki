// Homepage Clock and Showcase Logic
import { createManagedTimeout, createManagedInterval } from '../utils/memory-cleanup.js';

export function initializeHomepage(clockGames, showcaseGames) {
  // State management
  let currentGameIndex = 0;
  let currentShowcaseIndex = 0;
  let isAutoRotating = true;
  let autoRotateInterval = null;
  let clockUpdateInterval = null;

  // DOM elements - Master Clock
  const clockGameImage = document.getElementById('clockGameImage');
  const clockGameName = document.getElementById('clockGameName');
  const clockHours = document.getElementById('clockHours');
  const clockMinutes = document.getElementById('clockMinutes');
  const clockSeconds = document.getElementById('clockSeconds');
  const resetTimeDisplay = document.getElementById('resetTimeDisplay');
  const gameIndicators = document.getElementById('gameIndicators');
  const prevBtn = document.getElementById('prevGame');
  const nextBtn = document.getElementById('nextGame');
  const rotationToggle = document.getElementById('rotationToggle');
  const masterClock = document.getElementById('masterClock');

  // DOM elements for showcase
  const showcaseGameImage = document.getElementById('showcaseGameImage');
  const showcaseTitle = document.getElementById('showcaseTitle');
  const showcaseDescription = document.getElementById('showcaseDescription');
  const showcaseFeatures = document.getElementById('showcaseFeatures');
  const showcaseLink = document.getElementById('showcaseLink');

  // Calculate time until reset
  function getTimeUntilReset(resetHour) {
    const now = new Date();
    const utcHour = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();

    let hoursUntilReset = resetHour - utcHour;
    let minutesUntilReset = 60 - utcMinutes - 1;
    let secondsUntilReset = 60 - utcSeconds;

    // Handle when current time is past reset time
    if (hoursUntilReset < 0 || (hoursUntilReset === 0 && minutesUntilReset < 0)) {
      hoursUntilReset += 24;
    }

    // Adjust for negative minutes
    if (minutesUntilReset < 0) {
      minutesUntilReset += 60;
      hoursUntilReset -= 1;
    }

    // Handle seconds overflow
    if (secondsUntilReset === 60) {
      secondsUntilReset = 0;
    } else {
      minutesUntilReset -= 1;
      if (minutesUntilReset < 0) {
        minutesUntilReset = 59;
        hoursUntilReset -= 1;
      }
    }

    return {
      hours: Math.max(0, hoursUntilReset),
      minutes: Math.max(0, minutesUntilReset),
      seconds: Math.max(0, secondsUntilReset),
    };
  }

  // Update master clock display
  function updateClock() {
    const currentGame = clockGames[currentGameIndex];
    const time = getTimeUntilReset(currentGame.resetHour);

    if (clockHours) clockHours.textContent = String(time.hours).padStart(2, '0');
    if (clockMinutes) clockMinutes.textContent = String(time.minutes).padStart(2, '0');
    if (clockSeconds) clockSeconds.textContent = String(time.seconds).padStart(2, '0');
  }

  // Switch master clock to a specific game with smooth animation
  function switchToGame(index, direction = 'next') {
    if (index < 0 || index >= clockGames.length) return;

    currentGameIndex = index;
    const game = clockGames[currentGameIndex];

    // Fade out image
    if (clockGameImage) {
      clockGameImage.style.opacity = '0';
    }

    // Fade out text slightly
    if (clockGameName) {
      clockGameName.style.opacity = '0.5';
      clockGameName.style.transform = 'translateY(10px)';
    }

    createManagedTimeout(() => {
      // Update content
      if (clockGameImage && game.image) {
        clockGameImage.src = game.image;
        clockGameImage.alt = game.name;
        clockGameImage.style.opacity = '1';
      }
      if (clockGameName) {
        clockGameName.textContent = game.name;
        clockGameName.style.opacity = '1';
        clockGameName.style.transform = 'translateY(0)';
      }

      // Update reset time display
      if (resetTimeDisplay) {
        const resetTime = game.resetHour === 0 ? '0:00' : `${game.resetHour}:00`;
        resetTimeDisplay.textContent = resetTime;
      }

      // Update indicators
      updateIndicators();

      // Update clock immediately
      updateClock();
    }, 300);

    // Save preference only for manual interactions (not auto-rotation)
    if (direction !== 'auto') {
      localStorage.setItem('master-clock-game', game.id);
      localStorage.setItem('master-clock-last-interaction', Date.now().toString());
    }
  }

  // Update showcase content - SIMPLIFIED
  function updateShowcase(index) {
    if (index < 0 || index >= showcaseGames.length) return;

    currentShowcaseIndex = index;
    const game = showcaseGames[currentShowcaseIndex];

    // Simple update without complex animations
    updateShowcaseContent(game);

    // Ensure all elements are visible
    const elements = [
      showcaseTitle,
      showcaseDescription,
      showcaseFeatures,
      document.querySelector('.showcase-actions'),
    ];
    elements.forEach(el => {
      if (el) el.classList.add('active');
    });
  }

  // Update showcase content elements - SIMPLIFIED
  function updateShowcaseContent(game) {
    // Update image
    if (showcaseGameImage) {
      showcaseGameImage.src = game.image;
      showcaseGameImage.alt = game.name;
    }

    // Update text content
    if (showcaseTitle) showcaseTitle.textContent = game.name;
    if (showcaseDescription) showcaseDescription.textContent = game.description;
    if (showcaseLink) showcaseLink.href = game.url;

    // Update features - SECURE approach
    if (showcaseFeatures) {
      // Clear existing content safely
      while (showcaseFeatures.firstChild) {
        showcaseFeatures.removeChild(showcaseFeatures.firstChild);
      }
      game.features.forEach(feature => {
        const tag = document.createElement('div');
        tag.className = 'showcase-feature-tag';
        tag.textContent = feature; // Using textContent is safe
        showcaseFeatures.appendChild(tag);
      });
    }
  }

  // Create indicator dots for master clock
  function createIndicators() {
    if (!gameIndicators) return;

    // Clear existing content safely
    while (gameIndicators.firstChild) {
      gameIndicators.removeChild(gameIndicators.firstChild);
    }
    clockGames.forEach((game, index) => {
      const dot = document.createElement('div');
      dot.className = 'indicator-dot';
      dot.setAttribute('data-index', index);
      dot.setAttribute('title', game.name);

      dot.addEventListener('click', () => {
        stopAutoRotation();
        const direction = index > currentGameIndex ? 'next' : 'prev';
        switchToGame(index, direction);
        // Sync showcase with clock
        updateShowcase(index);
      });

      gameIndicators.appendChild(dot);
    });

    updateIndicators();
  }

  // Update indicator states
  function updateIndicators() {
    if (!gameIndicators) return;

    const dots = gameIndicators.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentGameIndex);
    });
  }

  // Start auto-rotation for master clock
  function startAutoRotation() {
    if (autoRotateInterval) clearInterval(autoRotateInterval);

    autoRotateInterval = createManagedInterval(() => {
      const nextIndex = (currentGameIndex + 1) % clockGames.length;
      switchToGame(nextIndex, 'auto');
      // Sync showcase with clock
      updateShowcase(nextIndex);
    }, 6000); // Switch every 6 seconds - TODO: import from timing-constants.ts
  }

  // Stop auto-rotation
  function stopAutoRotation() {
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
    }
    isAutoRotating = false;
    updateRotationToggle();
  }

  // Toggle auto-rotation
  function toggleAutoRotation() {
    if (isAutoRotating) {
      stopAutoRotation();
    } else {
      isAutoRotating = true;
      startAutoRotation();
      updateRotationToggle();
    }
  }

  // Update rotation toggle button
  function updateRotationToggle() {
    if (!rotationToggle) return;

    const playIcon = rotationToggle.querySelector('.play-icon');
    const pauseIcon = rotationToggle.querySelector('.pause-icon');

    rotationToggle.classList.toggle('active', isAutoRotating);

    if (isAutoRotating) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  }

  // Load saved game preference
  function loadSavedGame() {
    // Start with Silver & Blood to ensure it shows up
    let savedIndex = 1; // Silver & Blood is index 1

    if (clockGames.length <= 1) {
      savedIndex = 0; // Fallback to first game if only one exists
    }

    // Only respect saved preference if user manually interacted recently
    const savedGameId = localStorage.getItem('master-clock-game');
    const lastInteraction = localStorage.getItem('master-clock-last-interaction');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000; // TODO: import from timing-constants.ts

    if (savedGameId && lastInteraction && now - parseInt(lastInteraction) < oneHour) {
      const foundIndex = clockGames.findIndex(game => game.id === savedGameId);
      if (foundIndex !== -1) {
        savedIndex = foundIndex;
      }
    }

    switchToGame(savedIndex, 'next');
  }

  // Setup event listeners
  function setupEventListeners() {
    // Navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopAutoRotation();
        const prevIndex = currentGameIndex === 0 ? clockGames.length - 1 : currentGameIndex - 1;
        switchToGame(prevIndex, 'prev');
        // Sync showcase with clock
        updateShowcase(prevIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopAutoRotation();
        const nextIndex = (currentGameIndex + 1) % clockGames.length;
        switchToGame(nextIndex, 'next');
        // Sync showcase with clock
        updateShowcase(nextIndex);
      });
    }

    // Auto-rotation toggle
    if (rotationToggle) {
      rotationToggle.addEventListener('click', toggleAutoRotation);
    }

    // Pause auto-rotation on hover
    if (masterClock) {
      masterClock.addEventListener('mouseenter', () => {
        if (isAutoRotating && autoRotateInterval) {
          clearInterval(autoRotateInterval);
        }
      });

      masterClock.addEventListener('mouseleave', () => {
        if (isAutoRotating) {
          startAutoRotation();
        }
      });
    }
  }

  // Initialize the master clock
  function initializeClock() {
    createIndicators();
    loadSavedGame();
    setupEventListeners();
    updateRotationToggle();

    // Initialize reset time display
    const currentGame = clockGames[currentGameIndex];
    if (resetTimeDisplay) {
      const resetTime = currentGame.resetHour === 0 ? '0:00' : `${currentGame.resetHour}:00`;
      resetTimeDisplay.textContent = resetTime;
    }

    // Start clock updates
    updateClock();
    clockUpdateInterval = createManagedInterval(updateClock, 1000); // TODO: import from timing-constants.ts

    // Start auto-rotation
    if (isAutoRotating) {
      startAutoRotation();
    }
  }

  // Initialize showcase
  function initializeShowcase() {
    // Preload images
    showcaseGames.forEach(game => {
      const img = new Image();
      img.src = game.image;
    });

    // Sync with clock's initial game
    updateShowcase(currentGameIndex);
  }

  // Initialize everything
  initializeClock();
  initializeShowcase();

  // Return cleanup function
  return function cleanup() {
    if (autoRotateInterval) clearInterval(autoRotateInterval);
    if (clockUpdateInterval) clearInterval(clockUpdateInterval);
  };
}
