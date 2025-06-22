// Zone Nova Update Data Template
// ===============================
// 
// This template provides a standardized structure for all Zone Nova updates.
// Copy this file to your update directory and modify the data as needed.
// 
// INSTRUCTIONS:
// 1. Copy this file in the same directory: src/pages/guides/zone-nova/updates/
// 2. Rename it to match your update (e.g., "maintenance-june-2025.js")
// 3. Fill in all the required fields with your update information
// 4. Create a corresponding .astro file that imports this data
// 5. Use UpdatePageTemplate.astro for consistent styling
//
// EXAMPLE .astro FILE:
// ---
// import UpdatePageTemplate from '../../../../templates/UpdatePageTemplate.astro';
// import { yourUpdateData, yourUpdateSEO } from './your-update-file.js';
// ---
// <UpdatePageTemplate updateData={yourUpdateData} seoData={yourUpdateSEO} />

export const updateDataTemplate = {
  // ===== BASIC INFORMATION =====
  // These fields control the main title and metadata
  
  title: 'Update Title Here', 
  // The main title shown at the top of the page
  // Examples: "June 2025 Maintenance", "Thunder King Event", "500K Downloads Celebration"
  
  date: 'YYYY-MM-DD', 
  // Date of the update/announcement in YYYY-MM-DD format
  // Examples: "2025-06-10", "2025-05-28"
  
  type: 'update-type', 
  // Type of update - this appears in the subtitle
  // Common types: 'maintenance', 'event', 'announcement', 'milestone', 'recruitment', 'bugfix'
  
  // ===== OPTIONAL DATA SECTION =====
  // Use this to display key information in a grid format
  // If you don't need this section, remove it entirely or set to null
  
  data: {
    // This creates a grid of key-value pairs displayed prominently
    // Each key becomes a label, each value becomes the displayed data
    // Examples:
    'Duration': '2 hours',
    'Compensation': '300 Quartz',
    'New Characters': '2',
    'Event Period': 'June 1-15, 2025'
    // Add or remove fields as needed
  },
  
  // ===== TL;DR SECTION =====
  // Optional quick summary section - keep it concise (around 100 words)
  // This appears before the main content with special teal styling
  // If you don't want TL;DR, remove this field entirely
  
  tldr: [
    'Write a concise summary paragraph here that captures the key points of your update. Keep it around 100 words total and focus on the most important information players need to know.'
  ],
  
  // ===== OFFICIAL UPDATE SECTION =====
  // This is the main content area - REQUIRED
  
  officialUpdate: {
    // Optional greeting - common for announcements
    greeting: 'Dear Captains:', 
    // Use for formal announcements. Remove if not needed.
    
    // Main content paragraphs - REQUIRED
    content: [
      'First paragraph of your official update content goes here. This should contain the main announcement or information.',
      
      'Second paragraph with additional details. You can have as many paragraphs as needed.',
      
      'For lists or special formatting, you can use:',
      '',  // Empty string creates a line break
      'Rewards:', // Section headers
      '• Item 1 ×5',
      '• Item 2 ×10', 
      '• Item 3 ×3',
      '',
      'Additional Information:',
      'Include eligibility requirements, distribution methods, or other important details here.',
      '',
      'Closing paragraph with thank you message or future commitments.'
    ]
    
    // NOTE: The 'closing' field has been removed - include closing messages
    // directly in the content array above for better flow
  },
  
  // ===== SOURCE INFORMATION =====
  // Information about where this update/announcement came from
  
  sourceInfo: {
    source: 'Official ZONE NOVA announcement',
    // Text that appears as the source attribution
    // Examples: "Official ZONE NOVA announcement", "Official Discord", "In-game notice"
    
    verified: true,
    // Boolean - adds a checkmark (✓) if true
    // Use true for official sources, false for community/unofficial sources
    
    gameUrl: 'https://game.erolabsshare.net/app/f302f717/Zone_Nova'
    // Optional - makes the entire source section clickable
    // Use the game URL from zone-nova.js for consistency
    // Remove this field if you don't want the source to be clickable
  }
};

// ===== SEO DATA =====
// Search engine optimization data for the page
// This controls how the page appears in search results and social media

export const updateSEOTemplate = {
  title: `${updateDataTemplate.title} - Zone Nova - GachaWiki`,
  // Page title for SEO - automatically includes the update title
  
  description: `${updateDataTemplate.title} for Zone Nova. Latest updates and information for Zone Nova players.`
  // Meta description for search engines - keep under 160 characters
  // Automatically includes the update title for consistency
};

// ===== USAGE EXAMPLES =====
// 
// MAINTENANCE UPDATE:
// type: 'maintenance'
// Include: duration, compensation, fixes, improvements
// 
// EVENT ANNOUNCEMENT:
// type: 'event' 
// Include: event period, rewards, mechanics, requirements
// 
// CHARACTER RECRUITMENT:
// type: 'recruitment'
// Include: character details, recruitment period, rates
// 
// MILESTONE CELEBRATION:
// type: 'milestone'
// Include: achievement details, celebration rewards, thank you message
//
// BUG FIX UPDATE:
// type: 'bugfix'
// Include: bugs fixed, improvements, compensation if applicable

// ===== STYLING NOTES =====
// 
// The UpdatePageTemplate.astro provides consistent styling:
// - TL;DR section has teal accent styling
// - Official Update section has amber accent styling  
// - All sections have hover effects and animations
// - Responsive design works on mobile and desktop
// - Source section is clickable if gameUrl is provided

// Export default for easy importing
export default updateDataTemplate; 