// Horizon Walker Character Database Filter Bar JavaScript

// Character filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  
  const filterInputs = document.querySelectorAll('[data-filter]');
  const resetButton = document.getElementById('reset-filters');
  const characterTable = document.querySelector('.character-table tbody');
  const characterCards = document.querySelectorAll('.character-card');
  
  
  // Store original character data for filtering
  let characters = [];
  
  // Sort functionality
  const sortButtons = document.querySelectorAll('.sort-btn');
  let sortState = { column: null, direction: 'neutral' }; // neutral, desc (highest), asc (lowest)
  
  // Initialize characters array from DOM
  if (characterTable) {
    const rows = characterTable.querySelectorAll('tr');
    characters = Array.from(rows).map(row => ({
      element: row,
      name: row.dataset.name || '',
      rarity: row.dataset.rarity || '',
      tags: (row.dataset.tags || '').split(',').map(tag => tag.trim()).filter(tag => tag)
    }));
  } else {
    characters = Array.from(characterCards).map(card => ({
      element: card,
      name: card.dataset.name || '',
      rarity: card.dataset.rarity || '',
      tags: (card.dataset.tags || '').split(',').map(tag => tag.trim()).filter(tag => tag)
    }));
  }
  
  
  // Filter function
  function filterCharacters() {
    const filters = {};
    
    filterInputs.forEach(input => {
      const filterType = input.dataset.filter;
      const value = input.value.toLowerCase().trim();
      if (value) {
        filters[filterType] = value;
      }
    });
    
    characters.forEach(character => {
      let show = true;
      
      // Apply each filter
      Object.entries(filters).forEach(([filterType, filterValue]) => {
        if (filterType === 'search') {
          const name = character.name.toLowerCase();
          if (!name.includes(filterValue)) {
            show = false;
          }
        } else if (filterType === 'tag') {
          const hasTag = character.tags.some(tag => 
            tag.toLowerCase() === filterValue
          );
          if (!hasTag) {
            show = false;
          }
        } else {
          const characterValue = character[filterType].toLowerCase();
          if (characterValue !== filterValue) {
            show = false;
          }
        }
      });
      
      // Show/hide character
      character.element.style.display = show ? '' : 'none';
    });
    
    // Update results count
    const visibleCount = characters.filter(char => 
      char.element.style.display !== 'none'
    ).length;
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('charactersFiltered', {
      detail: { count: visibleCount }
    }));
  }
  
  // Reset filters function
  function resetFilters() {
    
    filterInputs.forEach(input => {
      input.value = '';
    });
    
    characters.forEach(character => {
      character.element.style.display = '';
    });
    
    // Clear sort states
    sortButtons.forEach(b => {
      b.classList.remove('active');
      b.removeAttribute('data-direction');
    });
    sortState = { column: null, direction: 'neutral' };
    
    // Restore original order
    restoreOriginalOrder();
    
    // Dispatch reset event
    window.dispatchEvent(new CustomEvent('filtersReset'));
  }
  
  // Add event listeners
  filterInputs.forEach(input => {
    if (input.type === 'text') {
      input.addEventListener('input', filterCharacters);
    } else {
      input.addEventListener('change', filterCharacters);
    }
  });
  
  // Add reset button event listener with debugging
  if (resetButton) {
    resetButton.addEventListener('click', resetFilters);
  }
  
  function sortTable(column, direction) {
    const table = document.querySelector('.character-table');
    if (!table || direction === 'neutral') return;
    
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const multiplier = direction === 'asc' ? 1 : -1; // asc = lowest to highest, desc = highest to lowest
    
    rows.sort((a, b) => {
      const aCell = a.querySelector(`[data-sort-key="${column}"]`);
      const bCell = b.querySelector(`[data-sort-key="${column}"]`);
      
      if (!aCell || !bCell) return 0;
      
      const aValue = parseFloat(aCell.textContent.replace(/[, %]/g, ''));
      const bValue = parseFloat(bCell.textContent.replace(/[, %]/g, ''));
      
      return (aValue - bValue) * multiplier;
    });
    
    rows.forEach(row => tbody.appendChild(row));
  }

  function restoreOriginalOrder() {
    const table = document.querySelector('.character-table');
    if (!table) return;
    
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // Sort by original document order (by character name or index)
    rows.sort((a, b) => {
      const aName = a.dataset.name || '';
      const bName = b.dataset.name || '';
      return aName.localeCompare(bName);
    });
    
    rows.forEach(row => tbody.appendChild(row));
  }
  
  sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const column = btn.dataset.sort;
      
      // Cycle through three states: neutral → desc (highest ↑) → asc (lowest ↓) → neutral
      let newDirection;
      if (sortState.column !== column || sortState.direction === 'neutral') {
        newDirection = 'desc'; // First click: highest first (↑)
      } else if (sortState.direction === 'desc') {
        newDirection = 'asc'; // Second click: lowest first (↓)
      } else {
        newDirection = 'neutral'; // Third click: back to neutral
      }
      
      // Update sort state
      sortState.column = newDirection === 'neutral' ? null : column;
      sortState.direction = newDirection;
      
      // Update button states
      sortButtons.forEach(b => {
        b.classList.remove('active');
        b.removeAttribute('data-direction');
      });
      
      if (newDirection !== 'neutral') {
        btn.classList.add('active');
        btn.setAttribute('data-direction', newDirection);
      }
      
      // Sort the table or restore original order
      if (newDirection === 'neutral') {
        restoreOriginalOrder();
      } else {
        sortTable(column, newDirection);
      }
    });
  });
});