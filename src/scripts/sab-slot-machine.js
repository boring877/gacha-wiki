// Silver and Blood - Recast Slot Machine Logic
// Handles the slot machine interactions and animations

// Import data
import { gearUpgradesData } from '../data/silver-and-blood/gear-upgrades.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeSlotMachine();
});

function initializeSlotMachine() {
  // Check if we're on the right page - look for both types of containers
  const slotContainer =
    document.querySelector('.slot-machine-container') ||
    document.querySelector('.recast-slot-machine-container');
  if (!slotContainer) return;

  // Cache DOM elements to avoid repeated queries
  const cachedElements = {
    spinBtn: document.getElementById('spin-btn'),
    resetBtn: document.getElementById('reset-btn'),
    hammersUsed: document.getElementById('hammers-used'),
    currentSlots: document.getElementById('current-slots'),
    bestResult: document.getElementById('best-result'),
    hammerCost: document.getElementById('hammer-cost'),
    hammerPlural: document.getElementById('hammer-plural'),
    lockCounter: document.getElementById('lock-counter'),
    lockControls: document.getElementById('lock-controls'),
    reels: {
      1: document.getElementById('reel-1'),
      2: document.getElementById('reel-2'),
      3: document.getElementById('reel-3'),
    },
    slotWindows: {
      1: document.getElementById('slot-1'),
      2: document.getElementById('slot-2'),
      3: document.getElementById('slot-3'),
    },
    lockButtons: {
      1: document.querySelector('.recast-slot-lock-btn[data-slot="1"]'),
      2: document.querySelector('.recast-slot-lock-btn[data-slot="2"]'),
      3: document.querySelector('.recast-slot-lock-btn[data-slot="3"]'),
    },
    lockIndicators: {
      1: document.getElementById('lock-1'),
      2: document.getElementById('lock-2'),
      3: document.getElementById('lock-3'),
    },
  };

  // Game state with cleanup tracking
  const gameState = {
    hammersUsed: 0,
    currentSlots: 0, // For backward compatibility
    activeSlots: [], // Array of active slot numbers [1], [1,2], [1,3], [1,2,3], etc.
    currentBlessings: [],
    lockedBlessings: [],
    lockedSlots: [], // Which slot positions are locked
    isSpinning: false,
    stats: {
      totalHammers: 0,
      timesGot3Slots: 0,
      timesLost3Slots: 0,
      bestResult: null,
    },
    // Track active timers for cleanup
    activeTimers: new Set(),
    // Track if component is destroyed
    isDestroyed: false,
    // Store event listener references for proper cleanup
    eventListeners: new Map(),
  };

  // Use actual blessing data from the data file with added colors
  const blessingPool = gearUpgradesData.blessings.list.map(blessing => ({
    ...blessing,
    // Add colors based on priority for visual variety
    color:
      {
        1: '#ff4444', // High priority - red
        2: '#ff8844', // Medium-high priority - orange
        3: '#44ff44', // Medium priority - green
        4: '#4444ff', // Lower priority - blue
      }[blessing.priority] || '#888888',
  }));

  // Functions
  function rollSlots(lockedSlots = []) {
    // Each slot has independent probability
    // Slot 1: 100%, Slot 2: 50%, Slot 3: 30%
    const activeSlots = [];

    // Slot 1 is always guaranteed (100%)
    activeSlots.push(1);

    // Slot 2 has independent 50% chance
    if (Math.random() < 0.5) {
      activeSlots.push(2);
    }

    // Slot 3 has independent 30% chance
    if (Math.random() < 0.3) {
      activeSlots.push(3);
    }

    // Ensure locked slots are always included
    lockedSlots.forEach(slotNum => {
      if (!activeSlots.includes(slotNum)) {
        activeSlots.push(slotNum);
      }
    });

    // Sort the active slots
    activeSlots.sort((a, b) => a - b);

    return activeSlots;
  }

  function rollBlessings(activeSlots, currentBlessings = []) {
    const newBlessings = [];
    const excludedBlessings = new Set(currentBlessings);
    const usedBlessings = new Set(); // Track blessings used in this roll

    // Fill blessings for each active slot
    for (let i = 0; i < activeSlots.length; i++) {
      const slotNum = activeSlots[i];

      // Check if this slot has a locked blessing
      const lockedIndex = gameState.lockedSlots.indexOf(slotNum);
      if (lockedIndex !== -1 && gameState.lockedBlessings[lockedIndex]) {
        const lockedBlessing = gameState.lockedBlessings[lockedIndex];
        newBlessings.push(lockedBlessing);
        usedBlessings.add(lockedBlessing);
        continue;
      }

      // Get available blessings (not excluded and not used in this roll)
      const availablePool = blessingPool.filter(
        b => !excludedBlessings.has(b.name) && !usedBlessings.has(b.name)
      );

      if (availablePool.length === 0) {
        newBlessings.push(null);
        continue;
      }

      // Calculate weighted random selection
      const totalRate = availablePool.reduce((sum, b) => sum + b.rate, 0);
      const roll = Math.random() * totalRate;
      let accumulated = 0;
      let selectedBlessing = null;

      for (const blessing of availablePool) {
        accumulated += blessing.rate;
        if (roll <= accumulated) {
          selectedBlessing = blessing.name;
          break;
        }
      }

      newBlessings.push(selectedBlessing);
      if (selectedBlessing) {
        usedBlessings.add(selectedBlessing);
      }
    }

    return newBlessings;
  }

  function spinSlots() {
    if (gameState.isSpinning) return;
    gameState.isSpinning = true;

    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = true;

    // Store previous state
    const previousSlots = gameState.activeSlots || [];

    // Calculate hammer cost: 1 base, 2 for 1 lock, 3 for 2 locks, 4 for 3 locks
    const hammerCost =
      gameState.lockedSlots.length === 0
        ? 1
        : gameState.lockedSlots.length === 1
          ? 2
          : gameState.lockedSlots.length === 2
            ? 3
            : 4;

    // Roll for new results - pass locked slots
    const newActiveSlots = rollSlots(gameState.lockedSlots);
    const newBlessings = rollBlessings(newActiveSlots, gameState.currentBlessings);

    // Create spinning effect for each slot
    animateSlots(newActiveSlots, newBlessings, () => {
      // Update game state after animation
      gameState.activeSlots = newActiveSlots;
      gameState.currentSlots = newActiveSlots.length; // For backward compatibility
      gameState.currentBlessings = newBlessings;
      gameState.hammersUsed += hammerCost;
      gameState.stats.totalHammers += hammerCost;

      if (newActiveSlots.includes(3)) {
        gameState.stats.timesGot3Slots++;
      }
      if (previousSlots.includes(3) && !newActiveSlots.includes(3)) {
        gameState.stats.timesLost3Slots++;
      }

      // Update best result - use highest slot number
      const maxSlot = Math.max(...newActiveSlots);
      if (!gameState.stats.bestResult || maxSlot > gameState.stats.bestResult) {
        gameState.stats.bestResult = maxSlot;
      }

      // Update display
      updateDisplay();

      // Re-enable spin button
      gameState.isSpinning = false;
      spinBtn.disabled = false;
    });
  }

  // Simple text-based animation like refinement machine
  function animateSlots(activeSlots, blessings, callback) {
    if (gameState.isDestroyed) return;

    const allSlots = [1, 2, 3];
    let completedAnimations = 0;

    allSlots.forEach(slotNum => {
      const reel = cachedElements.reels[slotNum];
      const slotWindow = cachedElements.slotWindows[slotNum];
      const isLocked = gameState.lockedSlots.includes(slotNum);
      const isActive = activeSlots.includes(slotNum);
      const blessingIndex = activeSlots.indexOf(slotNum);

      if (isLocked && gameState.activeSlots && gameState.activeSlots.includes(slotNum)) {
        // Skip locked slots that already have results
        completedAnimations++;
        if (completedAnimations === 3 && callback) callback();
        return;
      }

      // Clear existing content and reset styles
      reel.innerHTML = '';
      reel.style.animation = '';
      reel.style.transform = '';
      reel.style.transition = '';
      reel.style.removeProperty('--final-position');

      // Create the simple slot item content structure
      const slotItem = document.createElement('div');
      slotItem.className = 'recast-slot-item';

      const contentDiv = document.createElement('div');
      contentDiv.className = 'slot-item-content';

      const nameDiv = document.createElement('div');
      nameDiv.className = 'blessing-name';

      const rateDiv = document.createElement('div');
      rateDiv.className = 'blessing-rate';

      contentDiv.appendChild(nameDiv);
      contentDiv.appendChild(rateDiv);
      slotItem.appendChild(contentDiv);
      reel.appendChild(slotItem);

      // Start animation - similar to refinement machine
      const animationDelay = 100 + (slotNum - 1) * 150;
      const animationDuration = 1500 + (slotNum - 1) * 200;

      const startTimer = setTimeout(() => {
        if (gameState.isDestroyed) return;

        // Add spinning class for visual effects
        slotWindow.classList.add('spinning');

        let spinStep = 0;
        const totalSpinSteps = 12;

        const doSpin = () => {
          if (spinStep < totalSpinSteps) {
            // Show random blessing during spin
            const randomBlessing = blessingPool[Math.floor(Math.random() * blessingPool.length)];
            nameDiv.textContent = randomBlessing.name;
            nameDiv.style.color = randomBlessing.color;
            rateDiv.textContent = `${randomBlessing.rate}%`;

            spinStep++;
            const nextTimer = setTimeout(doSpin, animationDuration / totalSpinSteps);
            gameState.activeTimers.add(nextTimer);
          } else {
            // Show final result
            slotWindow.classList.remove('spinning');

            if (isActive && blessings[blessingIndex]) {
              const finalBlessing = blessingPool.find(b => b.name === blessings[blessingIndex]);
              if (finalBlessing && finalBlessing.rate !== undefined) {
                nameDiv.textContent = finalBlessing.name;
                nameDiv.style.color = finalBlessing.color || '#888888';
                rateDiv.textContent = `${finalBlessing.rate}%`;
                slotWindow.classList.add('winning-slot');
                slotWindow.style.borderColor = '#4caf50';
              } else {
                nameDiv.textContent = '-';
                nameDiv.style.color = 'rgba(255, 255, 255, 0.4)';
                rateDiv.textContent = '';
              }
            } else {
              nameDiv.textContent = '-';
              nameDiv.style.color = 'rgba(255, 255, 255, 0.4)';
              rateDiv.textContent = '';
              slotWindow.classList.remove('winning-slot');
              slotWindow.style.borderColor = 'rgba(192, 107, 107, 0.3)';
            }

            completedAnimations++;
            if (completedAnimations === 3 && callback) {
              const callbackTimer = setTimeout(() => {
                if (!gameState.isDestroyed && callback) callback();
              }, 100);
              gameState.activeTimers.add(callbackTimer);
            }
          }
        };

        doSpin();
        gameState.activeTimers.delete(startTimer);
      }, animationDelay);

      gameState.activeTimers.add(startTimer);
    });
  }

  function toggleLock(slotNum) {
    const blessingIndex = gameState.activeSlots.indexOf(slotNum);
    if (blessingIndex === -1) return; // Slot not active

    const blessing = gameState.currentBlessings[blessingIndex];
    if (!blessing) return;

    const lockIndex = gameState.lockedSlots.indexOf(slotNum);
    const blessingLockIndex = gameState.lockedBlessings.indexOf(blessing);

    if (lockIndex === -1) {
      // Try to lock
      if (gameState.lockedSlots.length >= 3) {
        // Can't lock more than 3
        return;
      }
      gameState.lockedSlots.push(slotNum);
      if (blessingLockIndex === -1) {
        gameState.lockedBlessings.push(blessing);
      }
    } else {
      // Unlock
      gameState.lockedSlots.splice(lockIndex, 1);
      if (blessingLockIndex !== -1) {
        gameState.lockedBlessings.splice(blessingLockIndex, 1);
      }
    }

    updateDisplay();
  }

  function updateDisplay() {
    if (gameState.isDestroyed) return;

    // Update counters using cached elements
    if (cachedElements.hammersUsed) {
      cachedElements.hammersUsed.textContent = gameState.hammersUsed;
    }
    if (cachedElements.currentSlots) {
      cachedElements.currentSlots.textContent = gameState.activeSlots.length || 0;
    }
    if (cachedElements.bestResult) {
      cachedElements.bestResult.textContent = gameState.stats.bestResult || '-';
    }

    // Update hammer cost: 1 base, 2 for 1 lock, 3 for 2 locks, 4 for 3 locks
    const hammerCost =
      gameState.lockedSlots.length === 0
        ? 1
        : gameState.lockedSlots.length === 1
          ? 2
          : gameState.lockedSlots.length === 2
            ? 3
            : 4;

    if (cachedElements.hammerCost) {
      cachedElements.hammerCost.textContent = hammerCost;
    }

    if (cachedElements.hammerPlural) {
      if (hammerCost === 1) {
        cachedElements.hammerPlural.classList.add('hidden');
      } else {
        cachedElements.hammerPlural.classList.remove('hidden');
      }
    }

    // Update lock counter
    if (cachedElements.lockCounter) {
      cachedElements.lockCounter.textContent = `Locked: ${gameState.lockedSlots.length}/3`;
    }

    // Show/hide lock controls
    if (cachedElements.lockControls) {
      if (gameState.activeSlots.length > 0) {
        cachedElements.lockControls.classList.remove('hidden');
      } else {
        cachedElements.lockControls.classList.add('hidden');
      }
    }

    // Update lock buttons and indicators using cached elements
    [1, 2, 3].forEach(slotNum => {
      const btn = cachedElements.lockButtons[slotNum];
      const indicator = cachedElements.lockIndicators[slotNum];
      const slotWindow = cachedElements.slotWindows[slotNum];
      const isLocked = gameState.lockedSlots.includes(slotNum);
      const isActive = gameState.activeSlots.includes(slotNum);
      const blessingIndex = gameState.activeSlots.indexOf(slotNum);
      const hasBlessing = blessingIndex !== -1 && gameState.currentBlessings[blessingIndex];

      // Update slot window locked state
      if (slotWindow) {
        slotWindow.classList.toggle('locked', isLocked);
      }

      if (btn) {
        btn.style.display = isActive ? 'block' : 'none';
        btn.textContent = isLocked ? `Unlock Slot ${slotNum}` : `Lock Slot ${slotNum}`;
        btn.classList.toggle('locked', isLocked);
        btn.disabled = !hasBlessing;
        btn.style.opacity = hasBlessing ? '1' : '0.3';
      }

      if (indicator) {
        indicator.classList.toggle('hidden', !isLocked);
        indicator.style.display = isLocked ? 'block' : 'none';
      }
    });
  }

  // Add cleanup function for memory management
  function cleanup() {
    gameState.isDestroyed = true;

    // Clear all active timers
    gameState.activeTimers.forEach(timer => {
      clearTimeout(timer);
    });
    gameState.activeTimers.clear();

    // Remove all tracked event listeners
    gameState.eventListeners.forEach((listener, element) => {
      if (element && listener.event && listener.handler) {
        element.removeEventListener(listener.event, listener.handler);
      }
    });
    gameState.eventListeners.clear();
  }

  function reset() {
    // Clean up active timers first
    gameState.activeTimers.forEach(timer => {
      clearTimeout(timer);
    });
    gameState.activeTimers.clear();

    // Reset game state
    gameState.currentSlots = 0; // For backward compatibility
    gameState.activeSlots = [];
    gameState.currentBlessings = [];
    gameState.lockedBlessings = [];
    gameState.lockedSlots = [];
    gameState.hammersUsed = 0;
    gameState.isSpinning = false;

    // Reset slot displays using cached elements
    [1, 2, 3].forEach(slotNum => {
      const reel = cachedElements.reels[slotNum];
      const slotWindow = cachedElements.slotWindows[slotNum];

      if (reel) {
        // Clear all animations and custom properties
        reel.style.animation = '';
        reel.style.transform = '';
        reel.style.transition = '';
        reel.style.removeProperty('--final-position');

        // Create simple empty slot structure
        reel.innerHTML = '';
        // Reset to initial structure
        reel.innerHTML = `
          <div class="recast-slot-item recast-empty">
            <div class="slot-item-content">
              <div class="blessing-name">-</div>
              <div class="blessing-rate"></div>
            </div>
          </div>
        `;
      }

      if (slotWindow) {
        slotWindow.style.borderColor = 'rgba(192, 107, 107, 0.3)';
        slotWindow.classList.remove('winning-slot');
        slotWindow.classList.remove('spinning');
      }
    });

    updateDisplay();
  }

  // Create lock button click handler to avoid memory leaks
  function createLockClickHandler(slotNum) {
    return function () {
      if (gameState.isDestroyed) return;
      toggleLock(slotNum);
    };
  }

  // Setup event listeners using cached elements
  function setupEventListeners() {
    // Helper to add tracked event listeners
    function addTrackedListener(element, event, handler) {
      if (element) {
        element.addEventListener(event, handler);
        gameState.eventListeners.set(element, { event, handler });
      } else {
        console.warn('Element not found for event listener setup:', { event });
      }
    }

    // Main button listeners
    if (!cachedElements.spinBtn) {
      console.error('Spin button not found during setup!');
    }
    if (!cachedElements.resetBtn) {
      console.error('Reset button not found during setup!');
    }

    addTrackedListener(cachedElements.spinBtn, 'click', spinSlots);
    addTrackedListener(cachedElements.resetBtn, 'click', reset);

    // Setup lock button listeners with proper cleanup tracking
    Object.entries(cachedElements.lockButtons).forEach(([slotNum, btn]) => {
      if (btn) {
        const handler = createLockClickHandler(parseInt(slotNum));
        addTrackedListener(btn, 'click', handler);
      } else {
        console.warn(`Lock button ${slotNum} not found during setup`);
      }
    });
  }

  // Page unload cleanup
  function handlePageUnload() {
    cleanup();
  }

  // Setup cleanup on page unload
  window.addEventListener('beforeunload', handlePageUnload);
  window.addEventListener('unload', handlePageUnload);

  // Initialize the slot machine
  try {
    setupEventListeners();
    updateDisplay();
  } catch (error) {
    console.error('Error initializing slot machine:', error);
  }

  // Return cleanup function for manual cleanup if needed
  return cleanup;
}
