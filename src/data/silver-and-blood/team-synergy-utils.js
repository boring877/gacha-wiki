// Silver and Blood Team Synergy Database Utilities
// Client-side logic for filtering, sorting, and displaying team data

import {
  SILVER_AND_BLOOD_TEAMS,
  filterTeams,
  sortTeams,
  getTeamTypeText,
  getTeamTierText,
  truncateText,
} from './team-synergy.js';

import { characters } from './characters.js';

// Helper function to get character faction, class, and moon phase
function getCharacterDetails(characterName) {
  const character = characters.find(
    char => char.name.toLowerCase() === characterName.toLowerCase()
  );
  return character
    ? {
        faction: character.faction,
        class: character.class,
        moonPhase: character.moonPhase,
        rarity: character.rarity,
        image: character.image,
      }
    : null;
}

// Helper function to get shorter display names for long character names
function getDisplayName(characterName) {
  const shortNames = {
    'Starry-eyed Aiona': 'S.Aiona',
    'Transcendent Ami': 'T.Ami',
    'Fleeting Bella': 'F.Bella',
    'Jinxed Selena': 'J.Selena',
    'Timeless Aiona': 'T.Aiona',
    'Van Helsing': 'Van H.',
    'Incendiary Agares': 'I.Agares',
  };

  return shortNames[characterName] || characterName;
}

// Helper function to get character page URL
function getCharacterUrl(characterName) {
  // Convert character name to slug format (lowercase, replace spaces with hyphens)
  const slug = characterName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return `/guides/silver-and-blood/characters/${slug}`;
}

// Global state for the team database
let currentTeams = [...SILVER_AND_BLOOD_TEAMS];
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

  // Apply default sorting and render
  applyFiltersAndSort();
  updateSortButtonStates();
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

      // Reset sort to default alphabetical by name
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
  currentTeams = filterTeams(SILVER_AND_BLOOD_TEAMS, currentFilters);

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
        <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-secondary); font-style: italic;">
          ${
            SILVER_AND_BLOOD_TEAMS.length === 0
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
          const details = getCharacterDetails(char.name);
          return `
          <td>
            <div class="character-cell">
              ${details && details.image ? `<img src="${details.image}" alt="${char.name}" class="character-portrait" loading="lazy" />` : ''}
              <a href="${getCharacterUrl(char.name)}" class="character-name-link">
                <span class="character-name">${getDisplayName(char.name)}</span>
              </a>
            </div>
          </td>
        `;
        })
        .join('')}
      ${team.characters.length < 5 ? '<td>-</td>'.repeat(5 - team.characters.length) : ''}
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
          SILVER_AND_BLOOD_TEAMS.length === 0
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
          .map((char, index) => {
            const details = getCharacterDetails(char.name);
            return `
            <div class="mobile-character-item">
              <div class="character-position">${index + 1}</div>
              ${details && details.image ? `<img src="${details.image}" alt="${char.name}" class="mobile-character-portrait" loading="lazy" />` : ''}
              <a href="${getCharacterUrl(char.name)}" class="mobile-character-name-link">
                <span class="mobile-character-name">${getDisplayName(char.name)}</span>
              </a>
            </div>
          `;
          })
          .join('')}
      </div>
      
      ${team.notes ? `<div class="mobile-card-notes">${team.notes}</div>` : ''}
    </div>
  `
    )
    .join('');
}

// Update team count display
function updateTeamCount() {
  // This function can be extended to show team count in the UI
  // For now, it's a placeholder for future enhancements
  // Displaying ${currentTeams.length} of ${SILVER_AND_BLOOD_TEAMS.length} teams
}

// Responsive display is now handled entirely by CSS media queries
// No JavaScript needed for responsive switching
