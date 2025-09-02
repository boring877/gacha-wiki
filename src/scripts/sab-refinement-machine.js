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
    currentTiers: [],
    lockedSlots: [], // Track which slots are locked
    isSpinning: false,
    history: [],
    stats: {
      totalHammers: 0,
      timesGotT15: 0,
      averageTier: 0,
      bestTier: 0,
    },
  };

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
    const blessings = [];
    const tiers = [];

    for (let i = 1; i <= 3; i++) {
      const select = document.getElementById(`blessing-select-${i}`);
      if (select && select.value) {
        blessings.push(select.value);
        // Start with random tier using weighted probabilities
        tiers.push(rollSingleTier());
      }
    }

    if (blessings.length === 0) {
      // Could show an error message in the UI instead of alert
      console.warn('Please select at least one blessing to refine!');
      return;
    }

    gameState.currentBlessings = blessings;
    gameState.currentTiers = tiers;

    // Hide setup, show refinement
    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('refinement-display').classList.remove('hidden');

    // Setup displays
    updateRefinementDisplay();
  }

  function updateRefinementDisplay() {
    // Update lock buttons
    const lockButtonsContainer = document.getElementById('refinement-lock-buttons');
    if (lockButtonsContainer) {
      // Clear existing buttons
      while (lockButtonsContainer.firstChild) {
        lockButtonsContainer.removeChild(lockButtonsContainer.firstChild);
      }

      gameState.currentBlessings.forEach((_, index) => {
        const slotNum = index + 1;
        const lockBtn = document.createElement('button');
        lockBtn.className = 'refinement-lock-btn';
        lockBtn.dataset.slot = slotNum;
        lockBtn.textContent = `Lock Slot ${slotNum}`;
        lockBtn.onclick = () => toggleRefinementLock(slotNum);
        lockButtonsContainer.appendChild(lockBtn);
      });
    }

    updateLockDisplay();

    gameState.currentBlessings.forEach((blessing, index) => {
      const slotNum = index + 1;
      const slot = document.getElementById(`tier-slot-${slotNum}`);
      const nameEl = document.getElementById(`blessing-name-${slotNum}`);
      const currentTierEl = document.getElementById(`current-tier-${slotNum}`);
      const reel = document.getElementById(`tier-reel-${slotNum}`);

      if (slot && blessing) {
        slot.style.display = 'block'; // Override tier-slot default display: none
        nameEl.textContent = blessingTierData[blessing].fullName; // Show full name
        currentTierEl.textContent = `T${gameState.currentTiers[index]}`;

        const data = blessingTierData[blessing];
        if (!data) {
          console.error('No data found for blessing:', blessing);
          return;
        }
        const tierLevel = gameState.currentTiers[index];
        const value = data.values[tierLevel - 1];

        // Clear and create tier item
        reel.innerHTML = '';
        const tierItem = document.createElement('div');
        tierItem.className = 'tier-item';

        const tierValue = document.createElement('div');
        tierValue.className = tierLevel === 15 ? 'tier-value tier-value-max' : 'tier-value';
        tierValue.textContent = `T${tierLevel}`;

        const tierStat = document.createElement('div');
        tierStat.className = 'tier-stat';
        tierStat.style.color = data.color;
        tierStat.textContent = `${value}${data.unit}`;

        tierItem.appendChild(tierValue);
        tierItem.appendChild(tierStat);
        reel.appendChild(tierItem);

        // Add max tier effect
        const window = slot.querySelector('.tier-window');
        if (tierLevel === 15) {
          window.classList.add('tier-max');
        } else {
          window.classList.remove('tier-max');
        }
      }
    });

    // Update stats
    document.getElementById('refinement-hammers').textContent = gameState.hammersUsed;
    const t15Count = gameState.currentTiers.filter(t => t === 15).length;
    document.getElementById('t15-count').textContent = t15Count;

    if (gameState.currentTiers.length > 0) {
      const avgTier = (
        gameState.currentTiers.reduce((a, b) => a + b, 0) / gameState.currentTiers.length
      ).toFixed(1);
      document.getElementById('avg-tier').textContent = avgTier;
    }
  }

  function rollNewTiers() {
    const newTiers = [];
    for (let i = 0; i < gameState.currentBlessings.length; i++) {
      // Use the helper function to roll with weighted probabilities
      newTiers.push(rollSingleTier());
    }
    return newTiers;
  }

  function animateRefinement() {
    if (gameState.isSpinning) return;
    gameState.isSpinning = true;

    const refineBtn = document.getElementById('refine-btn');
    refineBtn.disabled = true;

    // Calculate hammer cost
    const hammerCost =
      gameState.lockedSlots.length === 0 ? 1 : gameState.lockedSlots.length === 1 ? 2 : 4;

    // Store originals
    const originalTiers = [...gameState.currentTiers];
    const newTiers = rollNewTiers();

    // Animate each slot
    let completedAnimations = 0;

    gameState.currentBlessings.forEach((blessing, index) => {
      const slotNum = index + 1;
      const isLocked = gameState.lockedSlots.includes(slotNum);

      // Skip animation for locked slots
      if (isLocked) {
        completedAnimations++;
        if (completedAnimations === gameState.currentBlessings.length) {
          setTimeout(() => {
            showRefinementResults(originalTiers, newTiers, hammerCost);
          }, 500);
        }
        return;
      }

      const reel = document.getElementById(`tier-reel-${slotNum}`);
      const window = document.getElementById(`tier-slot-${slotNum}`).querySelector('.tier-window');
      const data = blessingTierData[blessing];

      if (!data) {
        console.error('No data found for blessing in animation:', blessing);
        completedAnimations++;
        if (completedAnimations === gameState.currentBlessings.length) {
          setTimeout(() => {
            showRefinementResults(originalTiers, newTiers, hammerCost);
          }, 500);
        }
        return;
      }

      // Clear reel and build spinning items
      reel.innerHTML = '';

      // Add random tiers for spinning effect
      for (let i = 0; i < 15; i++) {
        const randomTier = Math.floor(Math.random() * 15) + 1;
        const randomValue = data.values[randomTier - 1];

        const tierItem = document.createElement('div');
        tierItem.className = 'tier-item';

        const tierValue = document.createElement('div');
        tierValue.className = randomTier === 15 ? 'tier-value tier-value-max' : 'tier-value';
        tierValue.textContent = `T${randomTier}`;

        const tierStat = document.createElement('div');
        tierStat.className = 'tier-stat';
        tierStat.style.color = data.color;
        tierStat.textContent = `${randomValue}${data.unit}`;

        tierItem.appendChild(tierValue);
        tierItem.appendChild(tierStat);
        reel.appendChild(tierItem);
      }

      // Add final result
      const finalTier = newTiers[index];
      const finalValue = data.values[finalTier - 1];

      const finalItem = document.createElement('div');
      finalItem.className = 'tier-item final';

      const finalTierValue = document.createElement('div');
      finalTierValue.className = finalTier === 15 ? 'tier-value tier-value-max' : 'tier-value';
      finalTierValue.textContent = `T${finalTier}`;

      const finalTierStat = document.createElement('div');
      finalTierStat.className = 'tier-stat';
      finalTierStat.style.color = data.color;
      finalTierStat.textContent = `${finalValue}${data.unit}`;

      finalItem.appendChild(finalTierValue);
      finalItem.appendChild(finalTierStat);
      reel.appendChild(finalItem);
      reel.style.transform = 'translateY(0)';

      // Start animation
      setTimeout(
        () => {
          reel.style.transition = `transform ${1.5 + index * 0.2}s cubic-bezier(0.17, 0.67, 0.12, 0.99)`;
          reel.style.transform = 'translateY(-2100px)';

          setTimeout(
            () => {
              window.classList.add('tier-success');
              if (finalTier === 15) {
                window.classList.add('tier-max');
              }

              completedAnimations++;
              if (completedAnimations === gameState.currentBlessings.length) {
                setTimeout(() => {
                  showRefinementResults(originalTiers, newTiers, hammerCost);
                }, 500);
              }
            },
            1500 + index * 200
          );
        },
        100 + index * 100
      );
    });
  }

  function showRefinementResults(originalTiers, newTiers, hammerCost) {
    gameState.hammersUsed += hammerCost;
    gameState.stats.totalHammers += hammerCost;
    document.getElementById('refinement-hammers').textContent = gameState.hammersUsed;

    const keepOriginal = document.getElementById('keep-original');
    const refineBtn = document.getElementById('refine-btn');

    // Only show keep/discard if any slots were actually refined (not locked)
    const hasUnlockedSlots = gameState.currentBlessings.some(
      (_, i) => !gameState.lockedSlots.includes(i + 1)
    );

    if (hasUnlockedSlots) {
      keepOriginal.classList.remove('hidden');

      // Clear any existing handlers and setup new ones
      const keepNewBtn = document.getElementById('keep-new-btn');
      const keepOriginalBtn = document.getElementById('keep-original-btn');

      // Clone buttons to remove all event listeners
      const newKeepNewBtn = keepNewBtn.cloneNode(true);
      const newKeepOriginalBtn = keepOriginalBtn.cloneNode(true);
      keepNewBtn.parentNode.replaceChild(newKeepNewBtn, keepNewBtn);
      keepOriginalBtn.parentNode.replaceChild(newKeepOriginalBtn, keepOriginalBtn);

      // Setup keep/discard handlers
      document.getElementById('keep-new-btn').onclick = () => {
        // Apply new tiers only to unlocked slots
        gameState.currentBlessings.forEach((_, index) => {
          const slotNum = index + 1;
          if (!gameState.lockedSlots.includes(slotNum)) {
            gameState.currentTiers[index] = newTiers[index];
          }
        });

        // Add to history
        addToRefinementHistory(originalTiers, gameState.currentTiers, hammerCost, 'kept');

        updateRefinementDisplay();
        keepOriginal.classList.add('hidden');
        gameState.isSpinning = false;
        refineBtn.disabled = false;
        refineBtn.style.opacity = '';

        // Update stats
        if (newTiers.includes(15)) {
          gameState.stats.timesGotT15++;
        }
      };

      document.getElementById('keep-original-btn').onclick = () => {
        // Keep original tiers
        // Add to history
        addToRefinementHistory(originalTiers, originalTiers, hammerCost, 'discarded');

        updateRefinementDisplay();
        keepOriginal.classList.add('hidden');
        gameState.isSpinning = false;
        refineBtn.disabled = false;
        refineBtn.style.opacity = '';
      };
    } else {
      // All slots were locked, nothing to choose
      // Add to history even if all locked
      addToRefinementHistory(originalTiers, originalTiers, hammerCost, 'all-locked');

      gameState.isSpinning = false;
      refineBtn.disabled = false;
      refineBtn.style.opacity = '';
    }
  }

  function toggleRefinementLock(slotNum) {
    const lockIndex = gameState.lockedSlots.indexOf(slotNum);

    if (lockIndex === -1) {
      // Try to lock
      if (gameState.lockedSlots.length >= 2) {
        return; // Can't lock more than 2
      }
      gameState.lockedSlots.push(slotNum);
    } else {
      // Unlock
      gameState.lockedSlots.splice(lockIndex, 1);
    }

    updateLockDisplay();
  }

  function updateLockDisplay() {
    // Update hammer cost: 1 base, 2 for 1 lock, 4 for 2 locks
    const hammerCost =
      gameState.lockedSlots.length === 0 ? 1 : gameState.lockedSlots.length === 1 ? 2 : 4;
    document.getElementById('refinement-hammer-cost').textContent = hammerCost;
    const hammerPlural = document.getElementById('hammer-plural');
    if (hammerCost === 1) {
      hammerPlural.classList.add('hidden');
    } else {
      hammerPlural.classList.remove('hidden');
    }

    // Update lock counter
    document.getElementById('refinement-lock-counter').textContent =
      `Locked: ${gameState.lockedSlots.length}/2`;

    // Update lock buttons and indicators
    gameState.currentBlessings.forEach((_, index) => {
      const slotNum = index + 1;
      const btn = document.querySelector(`.refinement-lock-btn[data-slot="${slotNum}"]`);
      const indicator = document.getElementById(`lock-indicator-ref-${slotNum}`);
      const isLocked = gameState.lockedSlots.includes(slotNum);

      if (btn) {
        btn.textContent = isLocked ? `Unlock Slot ${slotNum}` : `Lock Slot ${slotNum}`;
        if (isLocked) {
          btn.classList.add('locked');
        } else {
          btn.classList.remove('locked');
        }
      }

      if (indicator) {
        if (isLocked) {
          indicator.classList.remove('hidden');
        } else {
          indicator.classList.add('hidden');
        }
      }
    });
  }

  function addToRefinementHistory(oldTiers, newTiers, hammerCost, action) {
    const historyLog = document.getElementById('refinement-history-log');
    if (!historyLog) return;

    // Clear initial message if present
    const emptyMsg = historyLog.querySelector('.history-empty');
    if (emptyMsg) {
      emptyMsg.remove();
    }

    const entry = document.createElement('div');
    entry.className = 'history-entry';

    // Calculate tier changes
    const tierChanges = [];
    gameState.currentBlessings.forEach((_, index) => {
      const slotNum = index + 1;
      if (!gameState.lockedSlots.includes(slotNum)) {
        const oldTier = oldTiers[index];
        const newTier = newTiers[index];
        if (oldTier !== newTier) {
          const change = newTier - oldTier;
          const changeStr = change > 0 ? `+${change}` : `${change}`;
          tierChanges.push(`Slot ${slotNum}: T${oldTier}→T${newTier} (${changeStr})`);

          // Add color based on change
          if (newTier === 15) {
            entry.classList.add('tier-max');
          } else if (newTier > oldTier) {
            entry.classList.add('tier-up');
          } else if (newTier < oldTier) {
            entry.classList.add('tier-down');
          }
        }
      }
    });

    let text = `Refinement #${gameState.hammersUsed}: `;
    if (action === 'discarded') {
      text += `Used ${hammerCost} hammer${hammerCost > 1 ? 's' : ''} - Kept original`;
    } else if (action === 'all-locked') {
      text += `Used ${hammerCost} hammer${hammerCost > 1 ? 's' : ''} - All slots locked`;
    } else if (tierChanges.length > 0) {
      text += tierChanges.join(', ');
    } else {
      text += `No changes`;
    }

    entry.textContent = text;
    entry.style.color = 'rgba(255, 255, 255, 0.8)';

    historyLog.insertBefore(entry, historyLog.firstChild);

    // Keep only last 20 entries
    while (historyLog.children.length > 20) {
      historyLog.removeChild(historyLog.lastChild);
    }
  }

  function backToSetup() {
    document.getElementById('setup-section').classList.remove('hidden');
    document.getElementById('refinement-display').classList.add('hidden');
    document.getElementById('keep-original').classList.add('hidden');

    // Clear history
    const historyLog = document.getElementById('refinement-history-log');
    if (historyLog) {
      historyLog.innerHTML = '<div class="history-empty">No refinements yet...</div>';
    }

    // Reset state
    gameState.currentBlessings = [];
    gameState.currentTiers = [];
    gameState.lockedSlots = [];
    gameState.hammersUsed = 0;
    gameState.isSpinning = false;
  }

  // Prevent duplicate selections
  function updateSelectOptions() {
    const selects = document.querySelectorAll('.blessing-select');
    const selected = Array.from(selects)
      .map(s => s.value)
      .filter(v => v);

    selects.forEach(select => {
      const currentValue = select.value;
      Array.from(select.options).forEach(option => {
        if (option.value && option.value !== currentValue) {
          option.disabled = selected.includes(option.value);
        }
      });
    });
  }

  // Event listeners
  const setupBtn = document.getElementById('setup-btn');
  if (setupBtn) {
    setupBtn.addEventListener('click', setupRefinement);
  }

  const refineBtn = document.getElementById('refine-btn');
  if (refineBtn) {
    refineBtn.addEventListener('click', animateRefinement);
  }

  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', backToSetup);
  }

  document.querySelectorAll('.blessing-select').forEach(select => {
    select.addEventListener('change', updateSelectOptions);
  });
}
