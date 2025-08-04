// Zone Nova Team Synergy Database Utilities
// Client-side logic for filtering, sorting, and displaying team data

import {
  ZONE_NOVA_TEAMS,
  filterTeams,
  sortTeams,
  getTeamTypeText,
  getTeamTierText,
  truncateText,
} from './team-synergy.js';

import { ZONE_NOVA_CHARACTERS } from './characters.js';

// Helper function to get character element
function getCharacterElement(characterName) {
  const character = ZONE_NOVA_CHARACTERS.find(
    char => char.name.toLowerCase() === characterName.toLowerCase()
  );
  return character ? character.element : null;
}

// Global state for the team database
let currentTeams = [...ZONE_NOVA_TEAMS];
let currentFilters = {
  type: '',
  tier: '',
  searchTerm: '',
};
let currentSort = {
  key: 'name',
  direction: 'asc',
};

// Initialize the team database functionality
export function initializeTeamDatabase() {
  // Set up event listeners
  setupFilterListeners();
  setupSortListeners();
  setupResetListener();

  // Initial render
  renderTeams();
  updateTeamCount();
}

// Set up filter event listeners
function setupFilterListeners() {
  const teamTypeFilter = document.getElementById('teamTypeFilter');
  const teamTierFilter = document.getElementById('teamTierFilter');

  if (teamTypeFilter) {
    teamTypeFilter.addEventListener('change', e => {
      currentFilters.type = e.target.value;
      applyFiltersAndSort();
    });
  }

  if (teamTierFilter) {
    teamTierFilter.addEventListener('change', e => {
      currentFilters.tier = e.target.value;
      applyFiltersAndSort();
    });
  }
}

// Set up sort button listeners
function setupSortListeners() {
  const sortButtons = document.querySelectorAll('.sort-btn[data-sort]');

  sortButtons.forEach(button => {
    button.addEventListener('click', e => {
      const sortKey = e.target.getAttribute('data-sort');

      // Toggle sort direction if same key is clicked
      if (currentSort.key === sortKey) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.key = sortKey;
        currentSort.direction = 'asc';
      }

      // Update button states
      updateSortButtonStates();

      // Apply sort
      applyFiltersAndSort();
    });
  });
}

// Set up reset button listener
function setupResetListener() {
  const resetButton = document.getElementById('resetFilters');

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      // Reset filters
      currentFilters = {
        type: '',
        tier: '',
        searchTerm: '',
      };

      // Reset sort
      currentSort = {
        key: 'name',
        direction: 'asc',
      };

      // Reset form elements
      resetFilterElements();
      updateSortButtonStates();

      // Re-render
      applyFiltersAndSort();
    });
  }
}

// Reset filter form elements
function resetFilterElements() {
  const teamTypeFilter = document.getElementById('teamTypeFilter');
  const teamTierFilter = document.getElementById('teamTierFilter');

  if (teamTypeFilter) teamTypeFilter.value = '';
  if (teamTierFilter) teamTierFilter.value = '';
}

// Update sort button active states
function updateSortButtonStates() {
  const sortButtons = document.querySelectorAll('.sort-btn[data-sort]');

  sortButtons.forEach(button => {
    const sortKey = button.getAttribute('data-sort');

    if (sortKey === currentSort.key) {
      button.classList.add('active');
      button.textContent = `${button.textContent.replace(' ↑', '').replace(' ↓', '')} ${currentSort.direction === 'asc' ? '↑' : '↓'}`;
    } else {
      button.classList.remove('active');
      button.textContent = button.textContent.replace(' ↑', '').replace(' ↓', '');
    }
  });
}

// Apply current filters and sort
function applyFiltersAndSort() {
  // Filter teams
  currentTeams = filterTeams(ZONE_NOVA_TEAMS, currentFilters);

  // Sort teams
  currentTeams = sortTeams(currentTeams, currentSort.key, currentSort.direction);

  // Render updated teams
  renderTeams();
  updateTeamCount();
}

// Render teams in both desktop table and mobile cards
function renderTeams() {
  renderDesktopTable();
  renderMobileCards();
}

// Render desktop table
function renderDesktopTable() {
  const tableBody = document.getElementById('teamTableBody');
  if (!tableBody) return;

  if (currentTeams.length === 0) {
    tableBody.innerHTML = `
      <tr class="no-teams-message">
        <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-secondary); font-style: italic;">
          ${
            ZONE_NOVA_TEAMS.length === 0
              ? 'Team database is currently being populated. Check back soon for comprehensive team compositions!'
              : 'No teams match the current filters. Try adjusting your filter criteria.'
          }
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = currentTeams
    .map(
      team => `
    <tr>
      <td><strong>${team.name}</strong></td>
      <td><span class="team-type-badge ${team.type}">${getTeamTypeText(team.type)}</span></td>
      <td><span class="team-tier-badge ${team.tier}">${getTeamTierText(team.tier)}</span></td>
      ${team.characters
        .map(char => {
          const element = getCharacterElement(char.name);
          return `
          <td>
            <div class="character-cell">
              <img src="${char.image}" alt="${char.name}" class="character-portrait" loading="lazy" />
              <span class="character-name">${char.name}</span>
              ${element ? `<span class="element-badge element-${element.toLowerCase()}">${element}</span>` : ''}
            </div>
          </td>
        `;
        })
        .join('')}
      ${team.characters.length < 4 ? '<td>-</td>'.repeat(4 - team.characters.length) : ''}
      <td>${truncateText(team.notes, 150)}</td>
    </tr>
  `
    )
    .join('');
}

// Render mobile cards
function renderMobileCards() {
  const mobileContainer = document.getElementById('teamMobileCards');
  if (!mobileContainer) return;

  if (currentTeams.length === 0) {
    mobileContainer.innerHTML = `
      <div class="no-teams-message-mobile">
        ${
          ZONE_NOVA_TEAMS.length === 0
            ? 'Team database is currently being populated. Check back soon for comprehensive team compositions!'
            : 'No teams match the current filters. Try adjusting your filter criteria.'
        }
      </div>
    `;
    return;
  }

  mobileContainer.innerHTML = currentTeams
    .map(
      team => `
    <div class="mobile-team-card">
      <div class="mobile-card-header">
        <h3 class="mobile-card-title">${team.name}</h3>
        <div class="mobile-card-badges">
          <span class="team-type-badge ${team.type}">${getTeamTypeText(team.type)}</span>
          <span class="team-tier-badge ${team.tier}">${getTeamTierText(team.tier)}</span>
        </div>
      </div>
      
      <div class="mobile-card-characters">
        ${team.characters
          .map(char => {
            const element = getCharacterElement(char.name);
            return `
            <div class="mobile-character-item">
              <img src="${char.image}" alt="${char.name}" class="mobile-character-portrait" loading="lazy" />
              <span class="mobile-character-name">${char.name}</span>
              ${element ? `<span class="element-badge element-${element.toLowerCase()}">${element}</span>` : ''}
            </div>
          `;
          })
          .join('')}
      </div>
      
      ${team.notes ? `<div class="mobile-card-notes">${truncateText(team.notes, 100, 80)}</div>` : ''}
    </div>
  `
    )
    .join('');
}

// Update team count display (if needed)
function updateTeamCount() {
  // This function can be extended to show team count in the UI
  // For now, it's a placeholder for future enhancements
  // Displaying ${currentTeams.length} of ${ZONE_NOVA_TEAMS.length} teams
}

// Utility function to get current filter state (for debugging)
export function getCurrentState() {
  return {
    teams: currentTeams,
    filters: currentFilters,
    sort: currentSort,
  };
}

// Utility function to manually set filters (for programmatic use)
export function setFilters(filters) {
  currentFilters = { ...currentFilters, ...filters };
  applyFiltersAndSort();
}

// Utility function to manually set sort (for programmatic use)
export function setSort(key, direction = 'asc') {
  currentSort = { key, direction };
  updateSortButtonStates();
  applyFiltersAndSort();
}

// Function to handle responsive table/card switching
function handleResponsiveDisplay() {
  const tableContainer = document.querySelector('.team-table-container');
  const mobileContainer = document.querySelector('.mobile-card-view');

  if (!tableContainer || !mobileContainer) return;

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    tableContainer.style.display = 'none';
    mobileContainer.style.display = 'block';
  } else {
    tableContainer.style.display = 'block';
    mobileContainer.style.display = 'none';
  }
}

// Set up responsive display handling
if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResponsiveDisplay);
  document.addEventListener('DOMContentLoaded', handleResponsiveDisplay);
}
