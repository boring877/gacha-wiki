// Discord Webhook Utility
// Handles sending Zone Nova update notifications to Discord

/**
 * Discord embed colors for different update types
 */
const DISCORD_COLORS = {
  maintenance: 0x4a90e2, // Zone Nova blue
  event: 0xff6b35, // Orange for events
  recruitment: 0xffb700, // Gold for character recruitment
  announcement: 0x00d4aa, // Teal for announcements
  milestone: 0x9c27b0, // Purple for milestones
  bugfix: 0x4caf50, // Green for bug fixes
  default: 0x4a90e2, // Default Zone Nova blue
};

/**
 * Emojis for different update types
 */
const DISCORD_EMOJIS = {
  maintenance: '🔧',
  event: '🎉',
  recruitment: '⭐',
  announcement: '📢',
  milestone: '🎊',
  bugfix: '🛠️',
  default: '📄',
};

/**
 * Format update data into Discord embed format
 * @param {Object} updateData - The update data object
 * @param {string} websiteUrl - Base website URL
 * @returns {Object} Discord embed object
 */
export function formatUpdateEmbed(updateData, websiteUrl = 'https://gachawiki.info') {
  const { title, date, type, summary, data, tldr, url, discord = {} } = updateData;

  // Check if Discord notifications are disabled for this update
  if (discord.enabled === false) {
    return null;
  }

  // Get color and emoji for this update type (with Discord overrides)
  const color = discord.customColor
    ? parseInt(discord.customColor.replace('#', ''), 16)
    : DISCORD_COLORS[type] || DISCORD_COLORS.default;
  const emoji = discord.customEmoji || DISCORD_EMOJIS[type] || DISCORD_EMOJIS.default;

  // Create the embed object
  const embed = {
    title: `${emoji} ${title}`,
    description: summary || 'New Zone Nova update available!',
    color: color,
    url: `${websiteUrl}${url}`,
    timestamp: new Date(date).toISOString(),
    footer: {
      text: 'GachaWiki • Zone Nova',
      icon_url: `${websiteUrl}/images/about.jpg`,
    },
    fields: [],
  };

  // Add TL;DR section if available
  if (tldr && tldr.length > 0) {
    embed.fields.push({
      name: '📝 TL;DR',
      value: tldr.join('\n').substring(0, 1024), // Discord field limit
      inline: false,
    });
  }

  // Add data fields if available
  if (data && typeof data === 'object') {
    const dataEntries = Object.entries(data);

    // Add up to 3 data fields inline
    dataEntries.slice(0, 3).forEach(([key, value]) => {
      embed.fields.push({
        name: key,
        value: String(value),
        inline: true,
      });
    });

    // If there are more than 3 data fields, add them as a single field
    if (dataEntries.length > 3) {
      const remainingData = dataEntries
        .slice(3)
        .map(([key, value]) => `**${key}**: ${value}`)
        .join('\n');

      embed.fields.push({
        name: 'Additional Info',
        value: remainingData.substring(0, 1024),
        inline: false,
      });
    }
  }

  // Add update type as a field
  embed.fields.push({
    name: 'Type',
    value: type.charAt(0).toUpperCase() + type.slice(1),
    inline: true,
  });

  return embed;
}

/**
 * Send Discord webhook notification
 * @param {string} webhookUrl - Discord webhook URL
 * @param {Object} updateData - Update data object
 * @param {string} websiteUrl - Base website URL
 * @returns {Promise<boolean>} Success status
 */
export async function sendDiscordNotification(
  webhookUrl,
  updateData,
  websiteUrl = 'https://gachawiki.info'
) {
  if (!webhookUrl) {
    console.warn('Discord webhook URL not provided');
    return false;
  }

  try {
    const discord = updateData.discord || {};

    // Check if Discord notifications are disabled for this update
    if (discord.enabled === false) {
      console.log('Discord notifications disabled for this update');
      return true; // Return true since this is intentional
    }

    const embed = formatUpdateEmbed(updateData, websiteUrl);

    if (!embed) {
      console.log('No embed generated for this update');
      return true;
    }

    const payload = {
      username: 'GachaWiki Updates',
      avatar_url: `${websiteUrl}/images/about.jpg`,
    };

    // Handle role mentions
    if (discord.mentionRoles && discord.mentionRoles.length > 0) {
      const mentions = discord.mentionRoles.join(' ');
      payload.content = mentions;
    }

    // Handle suppress embeds (plain text mode)
    if (discord.suppressEmbeds) {
      const plainText = `🔔 **${updateData.title}**\n\n${updateData.summary || 'New Zone Nova update available!'}\n\n🔗 Read more: ${websiteUrl}${updateData.url}`;
      payload.content = (payload.content || '') + '\n' + plainText;
    } else {
      payload.embeds = [embed];
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.status} ${response.statusText}`);
    }

    console.log('Discord notification sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
    return false;
  }
}

/**
 * Send multiple Discord notifications (for batch updates)
 * @param {string} webhookUrl - Discord webhook URL
 * @param {Array} updateDataArray - Array of update data objects
 * @param {string} websiteUrl - Base website URL
 * @returns {Promise<Object>} Results object with success/failure counts
 */
export async function sendBatchDiscordNotifications(
  webhookUrl,
  updateDataArray,
  websiteUrl = 'https://gachawiki.info'
) {
  const results = {
    sent: 0,
    failed: 0,
    errors: [],
  };

  for (const updateData of updateDataArray) {
    try {
      const success = await sendDiscordNotification(webhookUrl, updateData, websiteUrl);
      if (success) {
        results.sent++;
      } else {
        results.failed++;
      }

      // Add delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      results.failed++;
      results.errors.push({
        update: updateData.title || 'Unknown',
        error: error.message,
      });
    }
  }

  return results;
}

/**
 * Validate update data for Discord notification
 * @param {Object} updateData - Update data object
 * @returns {boolean} Is valid
 */
export function validateUpdateData(updateData) {
  if (!updateData || typeof updateData !== 'object') {
    return false;
  }

  const required = ['title', 'date', 'type', 'url'];
  return required.every(field => updateData[field]);
}

/**
 * Create a test Discord notification
 * @param {string} webhookUrl - Discord webhook URL
 * @returns {Promise<boolean>} Success status
 */
export async function sendTestNotification(webhookUrl) {
  const testUpdate = {
    title: 'Discord Webhook Test',
    date: new Date().toISOString().split('T')[0],
    type: 'announcement',
    summary:
      'Testing the Discord webhook integration for Zone Nova updates. If you see this message, the webhook is working correctly!',
    url: '/guides/zone-nova/updates/',
    data: {
      'Test Status': 'Success ✅',
      Integration: 'Discord Webhook',
      Game: 'Zone Nova',
    },
    tldr: ['This is a test notification to verify the Discord webhook is functioning properly.'],
  };

  return await sendDiscordNotification(webhookUrl, testUpdate);
}

// Export all functions
export default {
  formatUpdateEmbed,
  sendDiscordNotification,
  sendBatchDiscordNotifications,
  validateUpdateData,
  sendTestNotification,
  DISCORD_COLORS,
  DISCORD_EMOJIS,
};
