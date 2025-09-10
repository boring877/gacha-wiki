// Silver and Blood - Refinement Slot Machine Logic
// Handles refinement tier level changes and animations

document.addEventListener('DOMContentLoaded', () => {
  initializeRefinementMachine();
});

function initializeRefinementMachine() {
  // Check if we're on the right page
  const refinementContainer = document.querySelector('.refinement-container');
  if (!refinementContainer) return;

  // Game state
  const gameState = {
    hammersUsed: 0,
    currentBlessings: [],
    currentTiers: [], // The actual current tiers (after applying results)
    displayedCurrentTiers: [], // What shows in the "Current" column (before refinement)
    displayedNewTiers: [], // What shows in the "New" column (after refinement)
    lockedSlots: [], // Track which slots are locked
    isSpinning: false,
    stats: {
      totalHammers: 0,
      timesGotT15: 0,
      averageTier: 0,
      bestTier: 0,
    },
  };

  // Performance optimizations - cache frequently used elements
  const elementCache = {
    setupSection: null,
    refinementDisplay: null,
    lockButtonsContainer: null,
    lockCounter: null,
    hammerCostEl: null,
    hammerPluralEl: null,
    refineBtn: null,
    keepOriginal: null,
    hammersUsedEl: null,
    t15CountEl: null,
    avgTierEl: null,
  };

  // Animation cleanup tracking
  const activeTimers = new Set();
  const activeAnimations = new Map();

  function addTimer(callback, delay) {
    const timerId = setTimeout(() => {
      activeTimers.delete(timerId);
      callback();
    }, delay);
    activeTimers.add(timerId);
    return timerId;
  }

  function clearAllTimers() {
    activeTimers.forEach(timerId => clearTimeout(timerId));
    activeTimers.clear();
  }

  function clearAllAnimations() {
    activeAnimations.forEach((_animation, element) => {
      if (element && element.style) {
        element.style.transition = '';
        element.style.transform = '';
        element.classList.remove('tier-success', 'tier-max');
      }
    });
    activeAnimations.clear();
  }

  // Initialize element cache
  function initializeElementCache() {
    elementCache.setupSection = document.getElementById('setup-section');
    elementCache.refinementDisplay = document.getElementById('refinement-display');
    elementCache.lockButtonsContainer = document.getElementById('refinement-lock-buttons');
    elementCache.lockCounter = document.getElementById('refinement-lock-counter');
    elementCache.hammerCostEl = document.getElementById('refinement-hammer-cost');
    elementCache.hammerPluralEl = document.getElementById('hammer-plural');
    elementCache.refineBtn = document.getElementById('refine-btn');
    elementCache.keepOriginal = document.getElementById('keep-original');
    elementCache.hammersUsedEl = document.getElementById('refinement-hammers');
    elementCache.t15CountEl = document.getElementById('t15-count');
    elementCache.avgTierEl = document.getElementById('avg-tier');
  }

  // Blessing tier data - correct values from game data
  const blessingTierData = {
    'Blood R.': {
      // Shortened from Bloodsoul Recovery
      values: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      unit: '',
      color: '#ff4444',
      fullName: 'Bloodsoul Recovery',
    },
    'All DMG': {
      // Shortened from All DMG Bonus
      values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      unit: '%',
      color: '#ff8844',
      fullName: 'All DMG Bonus',
    },
    'All DMG Red.': {
      // Shortened from All DMG Reduction
      values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      unit: '%',
      color: '#ffaa44',
      fullName: 'All DMG Reduction',
    },
    'ATK SPD': {
      values: [6.6, 7.6, 8.6, 9.6, 10.4, 11.4, 12.4, 13.4, 14.2, 15.2, 16.2, 17.2, 18, 19, 20],
      unit: '%',
      color: '#ffcc44',
      fullName: 'ATK SPD',
    },
    'P. DMG': {
      // Shortened from P. DMG Bonus
      values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      unit: '%',
      color: '#44ff44',
      fullName: 'P. DMG Bonus',
    },
    'M. DMG': {
      // Shortened from M. DMG Bonus
      values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      unit: '%',
      color: '#44ffaa',
      fullName: 'M. DMG Bonus',
    },
    'CRIT DMG': {
      values: [6.7, 7.6, 8.6, 9.5, 10.5, 11.4, 12.4, 13.3, 14.3, 15.2, 16.2, 17.1, 18.1, 19, 20],
      unit: '%',
      color: '#44aaff',
      fullName: 'CRIT DMG',
    },
    Healing: {
      // Shortened from Received Healing Bonus
      values: [6.7, 7.6, 8.6, 9.5, 10.5, 11.4, 12.4, 13.3, 14.3, 15.2, 16.2, 17.1, 18.1, 19, 20],
      unit: '%',
      color: '#4444ff',
      fullName: 'Received Healing Bonus',
    },
    'CRIT Rate': {
      values: [4, 4.6, 5.1, 5.7, 6.3, 6.9, 7.4, 8, 8.6, 9.1, 9.7, 10.3, 10.9, 11.4, 12],
      unit: '%',
      color: '#aa44ff',
      fullName: 'CRIT Rate',
    },
  };

  // Helper function to roll a single tier with weighted probabilities
  function rollSingleTier() {
    const roll = Math.random() * 100;
    let tier;

    if (roll < 60) {
      // T1-T5 (60% total, 12% each)
      tier = Math.floor(roll / 12) + 1;
    } else if (roll < 95) {
      // T6-T10 (35% total, 7% each)
      tier = Math.floor((roll - 60) / 7) + 6;
    } else {
      // T11-T15 (5% total, 1% each)
      tier = Math.floor((roll - 95) / 1) + 11;
    }

    // Ensure tier is within bounds (1-15)
    return Math.min(15, Math.max(1, tier));
  }

  // Functions
  function setupRefinement() {
    const blessings = [null, null, null]; // Initialize with nulls to maintain slot positions
    const tiers = [null, null, null];
    let hasAnyBlessing = false;

    for (let i = 1; i <= 3; i++) {
      const blessingSelect = document.getElementById(`blessing-select-${i}`);
      const tierSelect = document.getElementById(`tier-select-${i}`);

      if (blessingSelect && blessingSelect.value && tierSelect && tierSelect.value) {
        blessings[i - 1] = blessingSelect.value; // Store at correct index
        tiers[i - 1] = parseInt(tierSelect.value);
        hasAnyBlessing = true;
      }
    }

    if (!hasAnyBlessing) {
      console.warn('Please select at least one blessing and tier to refine!');
      return;
    }

    gameState.currentBlessings = blessings;
    gameState.currentTiers = tiers;

    // Hide setup, show refinement using cached elements
    if (elementCache.setupSection) {
      elementCache.setupSection.classList.add('hidden');
    }
    if (elementCache.refinementDisplay) {
      elementCache.refinementDisplay.classList.remove('hidden');
    }

    // Update element cache now that refinement display is visible
    elementCache.refineBtn = document.getElementById('refine-btn');
    elementCache.keepOriginal = document.getElementById('keep-original');
    elementCache.hammersUsedEl = document.getElementById('refinement-hammers');
    elementCache.t15CountEl = document.getElementById('t15-count');
    elementCache.avgTierEl = document.getElementById('avg-tier');

    // Setup refine button event listener now that it's visible
    if (elementCache.refineBtn) {
      elementCache.refineBtn.addEventListener('click', animateRefinement);
    } else {
      console.error('Refine button not found after showing refinement display!');
    }

    // Setup displays
    updateRefinementDisplay();
  }

  function updateRefinementDisplay() {
    // Update lock buttons using cached element and document fragment
    if (elementCache.lockButtonsContainer) {
      // Clear existing buttons
      elementCache.lockButtonsContainer.innerHTML = '';

      // Use document fragment for efficient DOM operations
      const fragment = document.createDocumentFragment();

      gameState.currentBlessings.forEach((blessing, index) => {
        if (blessing !== null) {
          // Only create buttons for slots with blessings
          const slotNum = index + 1;
          const lockBtn = document.createElement('button');
          lockBtn.className = 'refinement-lock-btn';
          lockBtn.dataset.slot = slotNum;
          lockBtn.textContent = `Lock Slot ${slotNum}`;
          lockBtn.onclick = () => toggleRefinementLock(slotNum);
          fragment.appendChild(lockBtn);
        }
      });

      elementCache.lockButtonsContainer.appendChild(fragment);
    }

    updateLockDisplay();

    // Update all 3 gear slots, showing only those with blessings
    for (let slotIndex = 0; slotIndex < 3; slotIndex++) {
      const slotNum = slotIndex + 1;
      const blessing = gameState.currentBlessings[slotIndex];
      const gearSlot = document.getElementById(`gear-slot-${slotNum}`);
      const nameEl = document.getElementById(`blessing-name-${slotNum}`);

      if (gearSlot) {
        if (blessing !== null) {
          // Show and populate this gear slot
          gearSlot.style.display = 'block';
          if (nameEl) {
            nameEl.textContent = blessingTierData[blessing].fullName;
          }

          const data = blessingTierData[blessing];
          if (!data) {
            console.error('No data found for blessing:', blessing);
            continue;
          }

          if (!data.values || !Array.isArray(data.values)) {
            console.error('Invalid blessing data structure for:', blessing);
            continue;
          }
          const tierLevel = gameState.currentTiers[slotIndex];
          if (tierLevel < 1 || tierLevel > 15 || tierLevel > data.values.length) {
            console.error('Invalid tier level:', tierLevel, 'for blessing:', blessing);
            continue;
          }

          // Update both current and new tier displays
          const currentTierValue = document.getElementById(`current-tier-${slotNum}`);
          const currentTierStat = document.getElementById(`current-stat-${slotNum}`);
          const newTierValue = document.getElementById(`new-tier-${slotNum}`);
          const newTierStat = document.getElementById(`new-stat-${slotNum}`);

          // Set current values (what was there before refinement)
          const displayedCurrentTier = gameState.displayedCurrentTiers[slotIndex] || tierLevel;
          if (displayedCurrentTier < 1 || displayedCurrentTier > data.values.length) {
            console.error('Invalid displayed current tier:', displayedCurrentTier);
            continue;
          }
          const currentValue = data.values[displayedCurrentTier - 1];

          if (currentTierValue) {
            currentTierValue.textContent = `T${displayedCurrentTier}`;
            currentTierValue.className =
              displayedCurrentTier === 15
                ? 'refinement-tier-value tier-value-max'
                : 'refinement-tier-value';
          }

          if (currentTierStat) {
            currentTierStat.textContent = `${currentValue}${data.unit}`;
            currentTierStat.style.color = data.color;
          }

          // Set new values (current results)
          const displayedNewTier = gameState.displayedNewTiers[slotIndex] || tierLevel;
          if (displayedNewTier < 1 || displayedNewTier > data.values.length) {
            console.error('Invalid displayed new tier:', displayedNewTier);
            continue;
          }
          const newValue = data.values[displayedNewTier - 1];

          if (newTierValue) {
            newTierValue.textContent = `T${displayedNewTier}`;
            newTierValue.className =
              displayedNewTier === 15
                ? 'refinement-tier-value tier-value-max'
                : 'refinement-tier-value';
          }

          if (newTierStat) {
            newTierStat.textContent = `${newValue}${data.unit}`;
            newTierStat.style.color = data.color;
          }

          // Add/remove max tier styling for gear slot
          gearSlot.classList.toggle('tier-max', tierLevel === 15);
        } else {
          // Hide empty gear slot
          gearSlot.style.display = 'none';
        }
      }
    }

    // Update stats using cached elements
    if (elementCache.hammersUsedEl) {
      elementCache.hammersUsedEl.textContent = gameState.hammersUsed;
    }

    const validTiers = gameState.currentTiers.filter(t => t !== null);
    const t15Count = validTiers.filter(t => t === 15).length;
    if (elementCache.t15CountEl) {
      elementCache.t15CountEl.textContent = t15Count;
    }

    if (validTiers.length > 0 && elementCache.avgTierEl) {
      const avgTier = (validTiers.reduce((a, b) => a + b, 0) / validTiers.length).toFixed(1);
      elementCache.avgTierEl.textContent = avgTier;
    }
  }

  function rollNewTiers() {
    const newTiers = [];
    for (let i = 0; i < gameState.currentBlessings.length; i++) {
      if (gameState.currentBlessings[i] !== null) {
        // Use the helper function to roll with weighted probabilities
        newTiers.push(rollSingleTier());
      } else {
        // Keep null for empty slots
        newTiers.push(null);
      }
    }
    return newTiers;
  }

  function animateRefinement() {
    if (gameState.isSpinning) {
      return;
    }

    gameState.isSpinning = true;

    // Clear any existing animations and stale timers
    clearAllAnimations();
    // Only clear timers if this is a fresh start (not from a previous incomplete animation)
    if (activeTimers.size > 0) {
      clearAllTimers();
    }

    const refineBtn = elementCache.refineBtn;
    if (refineBtn) {
      refineBtn.disabled = true;
    }

    // Calculate hammer cost: 1/2/3/4 for 0/1/2/3 locks
    const hammerCost = gameState.lockedSlots.length + 1;

    // Store originals and set display states
    const originalTiers = [...gameState.currentTiers];
    const newTiers = rollNewTiers();

    // Set the "Current" display to show what we had before this refinement
    gameState.displayedCurrentTiers = [...gameState.currentTiers];
    // The "New" display will be set during animation and results

    // Animate each slot
    let completedAnimations = 0;
    // Count slots that have blessings AND are not locked (only these need animation)
    const unlockedSlotsWithBlessings = gameState.currentBlessings.filter((blessing, index) => {
      const slotNum = index + 1;
      return blessing !== null && !gameState.lockedSlots.includes(slotNum);
    }).length;

    // Count locked slots with blessings (these complete immediately)
    const lockedSlotsWithBlessings = gameState.currentBlessings.filter((blessing, index) => {
      const slotNum = index + 1;
      return blessing !== null && gameState.lockedSlots.includes(slotNum);
    }).length;

    const totalSlotsToComplete = unlockedSlotsWithBlessings + lockedSlotsWithBlessings;

    gameState.currentBlessings.forEach((blessing, index) => {
      const slotNum = index + 1;
      const isLocked = gameState.lockedSlots.includes(slotNum);

      // Skip animation for null/empty slots or locked slots
      if (blessing === null) {
        return; // Just skip null slots, don't count them
      }

      if (isLocked) {
        // Locked slots with blessings complete immediately
        completedAnimations++;
        if (completedAnimations === totalSlotsToComplete) {
          addTimer(() => {
            showRefinementResults(originalTiers, newTiers, hammerCost);
          }, 100);
        }
        return;
      }

      const reel = document.getElementById(`tier-reel-${slotNum}`);
      const data = blessingTierData[blessing];

      if (!data) {
        console.error('No data found for blessing:', blessing);
        completedAnimations++;
        if (completedAnimations === totalSlotsToComplete) {
          addTimer(() => {
            showRefinementResults(originalTiers, newTiers, hammerCost);
          }, 100);
        }
        return;
      }

      // Animate only the "new" side
      const newTierValue = document.getElementById(`new-tier-${slotNum}`);
      const newTierStat = document.getElementById(`new-stat-${slotNum}`);

      if (!newTierValue || !newTierStat) {
        console.error('Missing new tier display elements for slot', slotNum);
        completedAnimations++;
        if (completedAnimations === totalSlotsToComplete) {
          addTimer(() => {
            showRefinementResults(originalTiers, newTiers, hammerCost);
          }, 100);
        }
        return;
      }

      // Track this animation
      if (reel) {
        activeAnimations.set(reel, { newTierValue, newTierStat, finalTier: newTiers[index] });
      }

      // Simplified animation approach using setTimeout
      const animationDelay = 100 + index * 100;
      const animationDuration = 1500 + index * 200;

      // Add spinning class for visual feedback
      if (reel) {
        reel.classList.add('spinning');
      }

      // Use a more reliable timeout-based approach
      addTimer(() => {
        // Simulate spinning by quickly changing values a few times
        let spinStep = 0;
        const totalSpinSteps = 10;

        const doSpin = () => {
          if (spinStep < totalSpinSteps) {
            const randomTier = Math.floor(Math.random() * 15) + 1;
            const randomValue = data.values[randomTier - 1];

            newTierValue.textContent = `T${randomTier}`;
            newTierValue.className =
              randomTier === 15 ? 'refinement-tier-value tier-value-max' : 'refinement-tier-value';
            newTierStat.textContent = `${randomValue}${data.unit}`;
            newTierStat.style.color = data.color;

            spinStep++;
            addTimer(doSpin, animationDuration / totalSpinSteps);
          } else {
            // Show final result
            const finalTier = newTiers[index];
            const finalValue = data.values[finalTier - 1];

            newTierValue.textContent = `T${finalTier}`;
            newTierValue.className =
              finalTier === 15 ? 'refinement-tier-value tier-value-max' : 'refinement-tier-value';
            newTierStat.textContent = `${finalValue}${data.unit}`;
            newTierStat.style.color = data.color;

            if (reel) {
              reel.classList.remove('spinning');
              if (finalTier === 15) {
                reel.classList.add('tier-max-result');
              }
            }

            completedAnimations++;
            if (completedAnimations === totalSlotsToComplete) {
              addTimer(() => {
                showRefinementResults(originalTiers, newTiers, hammerCost);
              }, 200);
            }
          }
        };

        doSpin(); // Start the spinning
      }, animationDelay);
    });

    // Safeguard: ensure button gets re-enabled even if something goes wrong
    addTimer(() => {
      if (gameState.isSpinning) {
        console.warn('Animation timeout - force enabling refine button');
        showRefinementResults(originalTiers, newTiers, hammerCost);
      }
    }, 5000); // 5 second timeout
  }

  function showRefinementResults(originalTiers, newTiers, hammerCost) {
    gameState.hammersUsed += hammerCost;
    gameState.stats.totalHammers += hammerCost;

    if (elementCache.hammersUsedEl) {
      elementCache.hammersUsedEl.textContent = gameState.hammersUsed;
    }

    // Set the "New" display to show the refinement results
    gameState.displayedNewTiers = [...newTiers];

    // Automatically apply new tiers to unlocked slots with blessings
    gameState.currentBlessings.forEach((blessing, index) => {
      const slotNum = index + 1;
      if (blessing !== null && !gameState.lockedSlots.includes(slotNum)) {
        gameState.currentTiers[index] = newTiers[index];
      }
    });

    // Update stats
    const validNewTiers = newTiers.filter(t => t !== null);
    if (validNewTiers.includes(15)) {
      gameState.stats.timesGotT15++;
    }

    // Update display with new results
    updateRefinementDisplay();

    // Reset spinning state and re-enable refine button immediately
    gameState.isSpinning = false;
    const refineBtn = elementCache.refineBtn || document.getElementById('refine-btn');
    if (refineBtn) {
      refineBtn.disabled = false;
      refineBtn.style.opacity = '';
      refineBtn.style.backgroundColor = '';
    }

    // Setup optional "Keep Original" button for users who want to undo
    const keepOriginalBtn = document.getElementById('keep-original-btn');
    if (keepOriginalBtn) {
      // Enable the optional revert button
      keepOriginalBtn.disabled = false;
      keepOriginalBtn.textContent = 'Undo (Keep Original)';

      // Remove existing event listener properly
      keepOriginalBtn.onclick = null;

      // Setup undo handler
      document.getElementById('keep-original-btn').onclick = () => {
        // Revert to original tiers
        gameState.currentBlessings.forEach((blessing, index) => {
          const slotNum = index + 1;
          if (blessing !== null && !gameState.lockedSlots.includes(slotNum)) {
            gameState.currentTiers[index] = originalTiers[index];
          }
        });

        // Update the "New" display to show the reverted (original) tiers
        gameState.displayedNewTiers = [...originalTiers];

        updateRefinementDisplay();

        // Disable the undo button after use
        document.getElementById('keep-original-btn').disabled = true;
        document.getElementById('keep-original-btn').textContent = 'Keep Original';
      };
    }

    // Hide the "Keep New" button since results are auto-applied
    const keepNewBtn = document.getElementById('keep-new-btn');
    if (keepNewBtn) {
      keepNewBtn.style.display = 'none';
    }
  }

  function toggleRefinementLock(slotNum) {
    const lockIndex = gameState.lockedSlots.indexOf(slotNum);

    if (lockIndex === -1) {
      // Try to lock
      if (gameState.lockedSlots.length >= 3) {
        return; // Can't lock more than 3
      }
      gameState.lockedSlots.push(slotNum);
    } else {
      // Unlock
      gameState.lockedSlots.splice(lockIndex, 1);
    }

    updateLockDisplay();
  }

  function updateLockDisplay() {
    // Update hammer cost: 1/2/3/4 for 0/1/2/3 locks
    const hammerCost = gameState.lockedSlots.length + 1;
    if (elementCache.hammerCostEl) {
      elementCache.hammerCostEl.textContent = hammerCost;
    }

    if (elementCache.hammerPluralEl) {
      elementCache.hammerPluralEl.classList.toggle('hidden', hammerCost === 1);
    }

    // Update lock counter
    if (elementCache.lockCounter) {
      elementCache.lockCounter.textContent = `Locked: ${gameState.lockedSlots.length}/3`;
    }

    // Update lock buttons and indicators
    gameState.currentBlessings.forEach((blessing, index) => {
      if (blessing !== null) {
        // Only update slots with blessings
        const slotNum = index + 1;
        const btn = document.querySelector(`.refinement-lock-btn[data-slot="${slotNum}"]`);
        const indicator = document.getElementById(`lock-indicator-ref-${slotNum}`);
        const gearSlot = document.getElementById(`gear-slot-${slotNum}`);
        const isLocked = gameState.lockedSlots.includes(slotNum);

        // Update gear slot locked state
        if (gearSlot) {
          gearSlot.classList.toggle('locked', isLocked);
        }

        if (btn) {
          btn.textContent = isLocked ? `Unlock Slot ${slotNum}` : `Lock Slot ${slotNum}`;
          btn.classList.toggle('locked', isLocked);
        }

        if (indicator) {
          indicator.classList.toggle('hidden', !isLocked);
          indicator.style.display = isLocked ? 'block' : 'none';
        }
      }
    });
  }

  function backToSetup() {
    // Clear all active timers and animations when going back to setup
    clearAllTimers();
    clearAllAnimations();

    // IMPORTANT: Reset spinning state first to prevent stuck state
    gameState.isSpinning = false;

    // Re-enable refine button if it was disabled
    const refineBtn = elementCache.refineBtn || document.getElementById('refine-btn');
    if (refineBtn) {
      refineBtn.disabled = false;
      refineBtn.style.opacity = '';
      refineBtn.style.backgroundColor = '';
    }

    // Reset choice buttons to disabled state and restore original labels
    const keepNewBtn = document.getElementById('keep-new-btn');
    const keepOriginalBtn = document.getElementById('keep-original-btn');
    if (keepNewBtn) {
      keepNewBtn.disabled = true;
      keepNewBtn.style.display = 'none';
    }
    if (keepOriginalBtn) {
      keepOriginalBtn.disabled = true;
      keepOriginalBtn.textContent = 'Keep Original';
    }

    // Use cached elements for UI changes
    if (elementCache.setupSection) {
      elementCache.setupSection.classList.remove('hidden');
    }
    if (elementCache.refinementDisplay) {
      elementCache.refinementDisplay.classList.add('hidden');
    }
    if (elementCache.keepOriginal) {
      elementCache.keepOriginal.classList.add('hidden');
    }

    // Reset all gear slots to hidden state
    for (let i = 1; i <= 3; i++) {
      const gearSlot = document.getElementById(`gear-slot-${i}`);
      if (gearSlot) {
        gearSlot.style.display = 'none';
        gearSlot.classList.remove('tier-max', 'tier-max-result');
      }

      // Reset tier displays
      const tierReel = document.getElementById(`tier-reel-${i}`);
      if (tierReel) {
        tierReel.classList.remove('spinning', 'tier-max-result');
        tierReel.style.transform = '';
        tierReel.style.transition = '';
      }
    }

    // Clear all select values
    for (let i = 1; i <= 3; i++) {
      const blessingSelect = document.getElementById(`blessing-select-${i}`);
      const tierSelect = document.getElementById(`tier-select-${i}`);
      if (blessingSelect) blessingSelect.value = '';
      if (tierSelect) {
        tierSelect.value = '';
        tierSelect.disabled = true;
      }
    }

    // Reset state completely
    gameState.currentBlessings = [];
    gameState.currentTiers = [];
    gameState.displayedCurrentTiers = [];
    gameState.displayedNewTiers = [];
    gameState.lockedSlots = [];
    gameState.hammersUsed = 0;
    gameState.stats = {
      totalHammers: 0,
      timesGotT15: 0,
      averageTier: 0,
      bestTier: 0,
    };

    // Update select options to reset duplicate prevention
    updateSelectOptions();
  }

  // Enable/disable tier selects and prevent duplicate blessing selections
  function updateSelectOptions() {
    const blessingSelects = document.querySelectorAll('.blessing-select');
    const selected = Array.from(blessingSelects)
      .map(s => s.value)
      .filter(v => v);

    blessingSelects.forEach((select, index) => {
      const slotNum = index + 1;
      const tierSelect = document.getElementById(`tier-select-${slotNum}`);
      const currentValue = select.value;

      // Enable/disable tier select based on blessing selection
      if (tierSelect) {
        if (currentValue) {
          tierSelect.disabled = false;
          if (!tierSelect.value) {
            tierSelect.value = '1'; // Default to T1
          }
        } else {
          tierSelect.disabled = true;
          tierSelect.value = '';
        }
      }

      // Prevent duplicate blessing selections
      Array.from(select.options).forEach(option => {
        if (option.value && option.value !== currentValue) {
          option.disabled = selected.includes(option.value);
        }
      });
    });
  }

  // Initialize everything
  initializeElementCache();

  // Event listeners
  const setupBtn = document.getElementById('setup-btn');
  if (setupBtn) {
    setupBtn.addEventListener('click', setupRefinement);
  } else {
    console.error('Setup button not found!');
  }

  // Note: Refine button listener is now added in setupRefinement() when the section becomes visible

  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', backToSetup);
  } else {
    console.warn('Back button not found during initialization');
  }

  // Add event listeners for both blessing and tier selects
  const blessingSelects = document.querySelectorAll('.blessing-select');
  const tierSelects = document.querySelectorAll('.tier-select');

  if (blessingSelects.length === 0) {
    console.error('No blessing select elements found!');
  }
  if (tierSelects.length === 0) {
    console.error('No tier select elements found!');
  }

  blessingSelects.forEach(select => {
    select.addEventListener('change', updateSelectOptions);
  });

  tierSelects.forEach(select => {
    select.addEventListener('change', updateSelectOptions);
  });

  // Initialize select states
  updateSelectOptions();
}
