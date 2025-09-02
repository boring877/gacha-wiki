// Silver and Blood - Recast Slot Machine Logic
// Handles the slot machine interactions and animations

document.addEventListener('DOMContentLoaded', () => {
  initializeSlotMachine();
});

function initializeSlotMachine() {
  // Check if we're on the right page
  const slotContainer = document.querySelector('.slot-machine-container');
  if (!slotContainer) return;

  // Game state
  const gameState = {
    hammersUsed: 0,
    currentSlots: 0,
    currentBlessings: [],
    lockedBlessings: [],
    lockedSlots: [], // Which slot positions are locked
    isSpinning: false,
    history: [],
    stats: {
      totalHammers: 0,
      timesGot3Slots: 0,
      timesLost3Slots: 0,
      bestResult: null,
    },
  };

  // All available blessings with rates
  const blessingPool = [
    { name: 'Bloodsoul Recovery', rate: 10.0, priority: 1, color: '#ff4444' },
    { name: 'All DMG Bonus', rate: 11.0, priority: 2, color: '#ff8844' },
    { name: 'All DMG Reduction', rate: 11.0, priority: 2, color: '#ffaa44' },
    { name: 'ATK SPD', rate: 10.0, priority: 2, color: '#ffcc44' },
    { name: 'P. DMG Bonus', rate: 12.0, priority: 3, color: '#44ff44' },
    { name: 'M. DMG Bonus', rate: 12.0, priority: 3, color: '#44ffaa' },
    { name: 'CRIT DMG', rate: 12.0, priority: 3, color: '#44aaff' },
    { name: 'Received Healing', rate: 10.0, priority: 3, color: '#4444ff' },
    { name: 'CRIT Rate', rate: 12.0, priority: 4, color: '#aa44ff' },
  ];

  // Functions
  function rollSlots(lockedCount = 0) {
    // If we have locked slots, those are guaranteed
    let slots = Math.max(1, lockedCount); // At minimum, we get locked slots or 1

    // Only roll for additional slots beyond locked ones
    if (lockedCount < 3) {
      // First unlocked slot (could be slot 1, 2, or 3 depending on locks)
      if (lockedCount === 0) {
        slots = 1; // Slot 1 is guaranteed when nothing is locked
      }

      // Roll for slot 2 if not locked
      if (lockedCount < 2 && Math.random() < 0.5) {
        slots = Math.max(slots, 2); // 50% chance for slot 2

        // Roll for slot 3 if not locked and slot 2 succeeded
        if (lockedCount < 3 && Math.random() < 0.3) {
          slots = 3; // 30% chance for slot 3
        }
      }
    }

    return slots;
  }

  function rollBlessings(numSlots, currentBlessings = [], lockedBlessings = []) {
    const newBlessings = [...lockedBlessings];
    const excludedBlessings = [...new Set([...currentBlessings])];
    const availablePool = blessingPool.filter(b => !excludedBlessings.includes(b.name));

    if (availablePool.length === 0) {
      return newBlessings.slice(0, numSlots);
    }

    const totalRate = availablePool.reduce((sum, b) => sum + b.rate, 0);
    const slotsToFill = numSlots - lockedBlessings.length;

    for (
      let i = 0;
      i < slotsToFill && availablePool.length > newBlessings.length - lockedBlessings.length;
      i++
    ) {
      const roll = Math.random() * totalRate;
      let accumulated = 0;

      for (const blessing of availablePool) {
        accumulated += blessing.rate;
        if (roll <= accumulated && !newBlessings.includes(blessing.name)) {
          newBlessings.push(blessing.name);
          break;
        }
      }
    }

    return newBlessings.slice(0, numSlots);
  }

  function spinSlots() {
    if (gameState.isSpinning) return;
    gameState.isSpinning = true;

    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = true;

    // Store previous state
    const previousSlots = gameState.currentSlots;

    // Calculate hammer cost: 1 base, 2 for 1 lock, 4 for 2 locks
    const hammerCost =
      gameState.lockedBlessings.length === 0 ? 1 : gameState.lockedBlessings.length === 1 ? 2 : 4;

    // Roll for new results - locked slots are guaranteed
    const newSlots = rollSlots(gameState.lockedBlessings.length);
    const newBlessings = rollBlessings(
      newSlots,
      gameState.currentBlessings,
      gameState.lockedBlessings
    );

    // Create spinning effect for each slot
    animateSlots(newSlots, newBlessings, () => {
      // Update game state after animation
      gameState.currentSlots = newSlots;
      gameState.currentBlessings = newBlessings;
      gameState.hammersUsed += hammerCost;
      gameState.stats.totalHammers += hammerCost;

      if (newSlots === 3) {
        gameState.stats.timesGot3Slots++;
      }
      if (previousSlots === 3 && newSlots < 3) {
        gameState.stats.timesLost3Slots++;
      }

      // Update best result
      if (!gameState.stats.bestResult || newSlots > gameState.stats.bestResult) {
        gameState.stats.bestResult = newSlots;
      }

      // Update display
      updateDisplay();

      // Add to history
      addToHistory(previousSlots, newSlots);

      // Re-enable spin button
      gameState.isSpinning = false;
      spinBtn.disabled = false;
    });
  }

  function animateSlots(numSlots, blessings, callback) {
    const slots = [1, 2, 3];
    let completedAnimations = 0;

    slots.forEach((slotNum, index) => {
      const reel = document.getElementById(`reel-${slotNum}`);
      const slotWindow = document.getElementById(`slot-${slotNum}`);
      const isLocked = gameState.lockedSlots.includes(slotNum);

      if (isLocked && slotNum <= gameState.currentSlots) {
        // Skip animation for locked slots
        completedAnimations++;
        if (completedAnimations === 3 && callback) {
          callback();
        }
        return;
      }

      // Clear existing content
      reel.innerHTML = '';

      // Add random blessings for spinning effect
      for (let i = 0; i < 20; i++) {
        const randomBlessing = blessingPool[Math.floor(Math.random() * blessingPool.length)];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'slot-item';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'slot-item-content';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'blessing-name';
        nameDiv.style.color = randomBlessing.color;
        nameDiv.textContent = randomBlessing.name;

        const rateDiv = document.createElement('div');
        rateDiv.className = 'blessing-rate';
        rateDiv.textContent = `${randomBlessing.rate}%`;

        contentDiv.appendChild(nameDiv);
        contentDiv.appendChild(rateDiv);
        itemDiv.appendChild(contentDiv);
        reel.appendChild(itemDiv);
      }

      // Add final result
      const finalItem = document.createElement('div');
      finalItem.className = 'slot-item final';

      if (slotNum <= numSlots && blessings[index]) {
        const blessing = blessingPool.find(b => b.name === blessings[index]);
        const contentDiv = document.createElement('div');
        contentDiv.className = 'slot-item-content';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'blessing-name';
        nameDiv.style.color = blessing.color;
        nameDiv.textContent = blessing.name;

        const rateDiv = document.createElement('div');
        rateDiv.className = 'blessing-rate';
        rateDiv.textContent = `${blessing.rate}%`;

        contentDiv.appendChild(nameDiv);
        contentDiv.appendChild(rateDiv);
        finalItem.appendChild(contentDiv);
      } else {
        finalItem.classList.add('empty');
        const placeholder = document.createElement('div');
        placeholder.className = 'tier-placeholder';
        placeholder.textContent = '-';
        finalItem.appendChild(placeholder);
      }

      reel.appendChild(finalItem);
      reel.style.transform = 'translateY(0)';

      // Start spinning animation with delay
      setTimeout(
        () => {
          reel.style.transition = `transform ${1.5 + index * 0.3}s cubic-bezier(0.17, 0.67, 0.12, 0.99)`;
          reel.style.transform = 'translateY(-2400px)';

          // Show result after animation
          setTimeout(
            () => {
              if (slotNum <= numSlots) {
                slotWindow.classList.add('winning-slot');
                slotWindow.style.borderColor = '#4caf50';
              } else {
                slotWindow.style.borderColor = '#666';
              }

              completedAnimations++;
              if (completedAnimations === 3 && callback) {
                setTimeout(callback, 500);
              }
            },
            1500 + index * 300
          );
        },
        100 + index * 100
      );
    });
  }

  function toggleLock(slotNum) {
    const blessing = gameState.currentBlessings[slotNum - 1];
    if (!blessing) return;

    const lockIndex = gameState.lockedSlots.indexOf(slotNum);
    const blessingLockIndex = gameState.lockedBlessings.indexOf(blessing);

    if (lockIndex === -1) {
      // Try to lock
      if (gameState.lockedSlots.length >= 2) {
        // Can't lock more than 2
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
    // Update counters
    document.getElementById('hammers-used').textContent = gameState.hammersUsed;
    document.getElementById('current-slots').textContent = gameState.currentSlots;
    document.getElementById('best-result').textContent = gameState.stats.bestResult || '-';

    // Update hammer cost: 1 base, 2 for 1 lock, 4 for 2 locks
    const hammerCost =
      gameState.lockedSlots.length === 0 ? 1 : gameState.lockedSlots.length === 1 ? 2 : 4;
    document.getElementById('hammer-cost').textContent = hammerCost;

    const hammerPlural = document.getElementById('hammer-plural');
    if (hammerPlural) {
      if (hammerCost === 1) {
        hammerPlural.classList.add('hidden');
      } else {
        hammerPlural.classList.remove('hidden');
      }
    }

    // Update lock counter
    document.getElementById('lock-counter').textContent =
      `Locked: ${gameState.lockedSlots.length}/2`;

    // Show/hide lock controls
    const lockControls = document.getElementById('lock-controls');
    if (lockControls) {
      if (gameState.currentSlots > 0) {
        lockControls.classList.remove('hidden');
      } else {
        lockControls.classList.add('hidden');
      }
    }

    // Update lock buttons and indicators
    [1, 2, 3].forEach(slotNum => {
      const btn = document.querySelector(`.slot-lock-btn[data-slot="${slotNum}"]`);
      const indicator = document.getElementById(`lock-${slotNum}`);
      const isLocked = gameState.lockedSlots.includes(slotNum);
      const hasBlessing = gameState.currentBlessings[slotNum - 1];

      if (btn) {
        btn.style.display = slotNum <= gameState.currentSlots ? 'block' : 'none';
        btn.textContent = isLocked ? `Unlock Slot ${slotNum}` : `Lock Slot ${slotNum}`;
        if (isLocked) {
          btn.classList.add('locked');
        } else {
          btn.classList.remove('locked');
        }
        btn.disabled = !hasBlessing;
        btn.style.opacity = hasBlessing ? '1' : '0.3';
      }

      if (indicator) {
        if (isLocked) {
          indicator.classList.remove('hidden');
          indicator.style.display = 'block';
        } else {
          indicator.classList.add('hidden');
          indicator.style.display = 'none';
        }
      }
    });
  }

  function addToHistory(prevSlots, newSlots) {
    const historyLog = document.getElementById('history-log');
    if (!historyLog) return;

    // Clear initial message if present
    const emptyMsg = historyLog.querySelector('.history-empty');
    if (emptyMsg) {
      emptyMsg.remove();
    }

    const entry = document.createElement('div');
    entry.className = 'history-entry';
    entry.style.marginBottom = '0.5rem';
    entry.style.padding = '0.5rem';
    entry.style.background = 'rgba(255, 255, 255, 0.05)';
    entry.style.borderLeft = `3px solid ${newSlots === 3 ? '#4caf50' : newSlots < prevSlots ? '#ff6b6b' : '#666'}`;

    let text = `Spin #${gameState.hammersUsed}: `;
    if (prevSlots === 0) {
      text += `Got ${newSlots} slot${newSlots > 1 ? 's' : ''}`;
    } else {
      text += `${prevSlots} → ${newSlots} slot${newSlots !== 1 ? 's' : ''}`;
    }

    entry.textContent = text;
    entry.style.color = 'rgba(255, 255, 255, 0.8)';

    historyLog.insertBefore(entry, historyLog.firstChild);

    // Keep only last 20 entries
    while (historyLog.children.length > 20) {
      historyLog.removeChild(historyLog.lastChild);
    }
  }

  function reset() {
    gameState.currentSlots = 0;
    gameState.currentBlessings = [];
    gameState.lockedBlessings = [];
    gameState.lockedSlots = [];
    gameState.hammersUsed = 0;
    gameState.history = [];

    // Reset slot displays
    [1, 2, 3].forEach(slotNum => {
      const reel = document.getElementById(`reel-${slotNum}`);
      const slotWindow = document.getElementById(`slot-${slotNum}`);
      if (reel) {
        reel.innerHTML = '';
        const emptyItem = document.createElement('div');
        emptyItem.className = 'slot-item empty';
        const placeholder = document.createElement('div');
        placeholder.className = 'tier-placeholder';
        placeholder.textContent = '-';
        emptyItem.appendChild(placeholder);
        reel.appendChild(emptyItem);
        reel.style.transform = 'translateY(0)';
      }
      if (slotWindow) {
        slotWindow.style.borderColor = '#666';
        slotWindow.classList.remove('winning-slot');
      }
    });

    const historyLog = document.getElementById('history-log');
    if (historyLog) {
      historyLog.innerHTML = '';
      const emptyMsg = document.createElement('div');
      emptyMsg.className = 'history-empty';
      emptyMsg.textContent = 'No spins yet...';
      historyLog.appendChild(emptyMsg);
    }

    updateDisplay();
  }

  // Event listeners
  const spinBtn = document.getElementById('spin-btn');
  if (spinBtn) {
    spinBtn.addEventListener('click', spinSlots);
  }

  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', reset);
  }

  document.querySelectorAll('.slot-lock-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const slotNum = parseInt(e.target.dataset.slot);
      toggleLock(slotNum);
    });
  });

  // Initialize
  updateDisplay();
}
