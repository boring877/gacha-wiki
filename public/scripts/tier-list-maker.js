// Tier List Maker - Lightweight Drag & Drop Handler
// Adds interactivity to server-rendered character pool and tier zones

(function () {
  'use strict';

  let selectedCharacter = null; // For mobile tap selection
  let isMobile = false;

  function init() {
    // Detect mobile
    isMobile = window.innerWidth <= 768;

    // Setup drag and drop handlers
    setupDraggables();
    setupDropZones();
    setupPoolDropZone();
    setupResetButton();

    // Load saved state from localStorage
    loadFromStorage();
  }

  // Setup draggable cards
  function setupDraggables() {
    const cards = document.querySelectorAll('.tier-character-card[draggable="true"]');

    cards.forEach(card => {
      if (isMobile) {
        // Mobile: tap to select
        card.addEventListener('click', handleMobileSelect);
      } else {
        // Desktop: drag and drop
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
      }
    });
  }

  // Handle drag start
  function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.dataset.character);
    e.target.classList.add('dragging');
  }

  // Handle drag end
  function handleDragEnd(e) {
    e.target.classList.remove('dragging');
  }

  // Handle mobile tap selection
  function handleMobileSelect(e) {
    e.preventDefault();
    e.stopPropagation();

    const card = e.currentTarget;

    // Clear previous selection
    document.querySelectorAll('.tier-character-card').forEach(c => {
      c.classList.remove('selected');
    });

    // Select this card
    card.classList.add('selected');
    selectedCharacter = card.dataset.character;

    // Highlight drop zones
    document.querySelectorAll('.tier-characters.droppable').forEach(zone => {
      zone.classList.add('awaiting-placement');
    });
  }

  // Setup drop zones (tier rows)
  function setupDropZones() {
    const tierZones = document.querySelectorAll('.tier-characters.droppable');

    tierZones.forEach(zone => {
      if (isMobile) {
        // Mobile: tap to place
        zone.addEventListener('click', handleMobileDrop);
      } else {
        // Desktop: drag and drop
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
      }
    });
  }

  // Handle drag over
  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drag-over');
  }

  // Handle drag leave
  function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
  }

  // Handle drop
  function handleDrop(e) {
    e.preventDefault();
    const zone = e.currentTarget;
    zone.classList.remove('drag-over');

    const characterName = e.dataTransfer.getData('text/plain');
    const card = document.querySelector(`[data-character="${characterName}"]`);

    if (card) {
      moveCardToZone(card, zone);
    }
  }

  // Handle mobile drop
  function handleMobileDrop(e) {
    if (!selectedCharacter) return;

    e.stopPropagation();
    const zone = e.currentTarget;
    const card = document.querySelector(`[data-character="${selectedCharacter}"]`);

    if (card) {
      moveCardToZone(card, zone);

      // Clear selection
      document.querySelectorAll('.tier-character-card').forEach(c => {
        c.classList.remove('selected');
      });
      document.querySelectorAll('.tier-characters.droppable').forEach(z => {
        z.classList.remove('awaiting-placement');
      });
      selectedCharacter = null;
    }
  }

  // Move card to zone
  function moveCardToZone(card, zone) {
    // Remove hint if present
    const hint = zone.querySelector('.drop-zone-hint');
    if (hint) {
      hint.remove();
    }

    // Disable onclick for navigation when in tier
    card.removeAttribute('onclick');

    // Add remove button if not present
    if (!card.querySelector('.remove-btn')) {
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.title = 'Remove from tier';
      removeBtn.textContent = '×';
      removeBtn.addEventListener('click', handleRemove);
      card.appendChild(removeBtn);
    }

    // Move card
    zone.appendChild(card);

    // Save state
    saveToStorage();
  }

  // Setup pool drop zone
  function setupPoolDropZone() {
    const pool = document.getElementById('character-pool');
    if (!pool) return;

    if (!isMobile) {
      pool.addEventListener('dragover', handleDragOver);
      pool.addEventListener('dragleave', handleDragLeave);
      pool.addEventListener('drop', handlePoolDrop);
    }
  }

  // Handle drop back to pool
  function handlePoolDrop(e) {
    e.preventDefault();
    const pool = e.currentTarget;
    pool.classList.remove('drag-over');

    const characterName = e.dataTransfer.getData('text/plain');
    const card = document.querySelector(`[data-character="${characterName}"]`);

    if (card) {
      moveCardToPool(card);
    }
  }

  // Move card back to pool
  function moveCardToPool(card) {
    const pool = document.getElementById('character-pool');
    if (!pool) return;

    // Remove remove button
    const removeBtn = card.querySelector('.remove-btn');
    if (removeBtn) {
      removeBtn.remove();
    }

    // Restore onclick for navigation
    const detailUrl = getCharacterDetailUrl(card.dataset.character);
    if (detailUrl) {
      card.setAttribute('onclick', `window.location.href='${detailUrl}'`);
    }

    // Move back to pool
    pool.appendChild(card);

    // Save state
    saveToStorage();
  }

  // Handle remove button click
  function handleRemove(e) {
    e.preventDefault();
    e.stopPropagation();

    const card = e.target.closest('.tier-character-card');
    if (card) {
      moveCardToPool(card);
    }
  }

  // Get character detail URL from data
  function getCharacterDetailUrl(characterName) {
    // This is a simple implementation - could be enhanced
    const card = document.querySelector(`[data-character="${characterName}"]`);
    const onclick = card?.getAttribute('onclick');
    if (onclick) {
      const match = onclick.match(/window\.location\.href='([^']+)'/);
      return match ? match[1] : null;
    }
    return null;
  }

  // Setup reset button
  function setupResetButton() {
    const resetBtn = document.getElementById('reset-tier-list');
    if (resetBtn) {
      resetBtn.addEventListener('click', handleReset);
    }
  }

  // Handle reset
  function handleReset() {
    if (!confirm('Reset tier list? This will move all characters back to the pool.')) {
      return;
    }

    // Move all cards back to pool
    const cards = document.querySelectorAll('.tier-characters.droppable .tier-character-card');
    cards.forEach(card => {
      moveCardToPool(card);
    });

    // Restore hints
    document.querySelectorAll('.tier-characters.droppable').forEach(zone => {
      if (zone.children.length === 0) {
        const hint = document.createElement('div');
        hint.className = 'drop-zone-hint';
        hint.textContent = 'Drop characters here';
        zone.appendChild(hint);
      }
    });

    // Clear storage
    localStorage.removeItem('sab-custom-tier-list');
  }

  // Save state to localStorage
  function saveToStorage() {
    const state = {
      tiers: {},
    };

    // Get characters in each tier
    document.querySelectorAll('.tier-characters.droppable').forEach(zone => {
      const tier = zone.dataset.tier;
      const characters = Array.from(zone.querySelectorAll('.tier-character-card')).map(
        card => card.dataset.character
      );
      state.tiers[tier] = characters;
    });

    localStorage.setItem('sab-custom-tier-list', JSON.stringify(state));
  }

  // Load state from localStorage
  function loadFromStorage() {
    const stored = localStorage.getItem('sab-custom-tier-list');
    if (!stored) return;

    try {
      const state = JSON.parse(stored);

      // Restore characters to tiers
      Object.entries(state.tiers).forEach(([tier, characterNames]) => {
        const zone = document.querySelector(`.tier-characters.droppable[data-tier="${tier}"]`);
        if (!zone) return;

        characterNames.forEach(characterName => {
          const card = document.querySelector(`[data-character="${characterName}"]`);
          if (card) {
            moveCardToZone(card, zone);
          }
        });
      });
    } catch (e) {
      console.error('Failed to load tier list from storage:', e);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
