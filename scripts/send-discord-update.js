#!/usr/bin/env node

/**
 * Manual Discord Update Sender
 *
 * This script allows you to manually send Discord notifications for Zone Nova updates.
 * Useful for testing the webhook integration or sending notifications for existing updates.
 *
 * Usage:
 *   bun run scripts/send-discord-update.js [options]
 *
 * Options:
 *   --test              Send a test notification
 *   --file <path>       Send notification for specific update file
 *   --latest            Send notification for the latest update
 *   --all               Send notifications for all updates (use with caution!)
 *   --webhook <url>     Use specific webhook URL (overrides environment)
 *
 * Environment Variables:
 *   ZONE_NOVA_UPDATES - Discord webhook URL (required unless --webhook is used)
 *
 * Examples:
 *   bun run scripts/send-discord-update.js --test
 *   bun run scripts/send-discord-update.js --file src/data/zone-nova/updates/maintenance-july-8-2025.js
 *   bun run scripts/send-discord-update.js --latest
 */

import { readFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// Parse command line arguments
const args = process.argv.slice(2);
const options = {};

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg.startsWith('--')) {
    const key = arg.slice(2);
    if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
      options[key] = args[i + 1];
      i++; // Skip next argument
    } else {
      options[key] = true;
    }
  }
}

/**
 * Get Discord webhook URL from options or environment
 */
function getWebhookUrl() {
  const webhookUrl = options.webhook || process.env.ZONE_NOVA_UPDATES;

  if (!webhookUrl) {
    console.error('❌ Discord webhook URL not provided');
    console.error('   Set ZONE_NOVA_UPDATES environment variable or use --webhook option');
    process.exit(1);
  }

  return webhookUrl;
}

/**
 * Import and send a single update
 */
async function sendUpdateFromFile(filePath, webhookUrl) {
  try {
    const fullPath = resolve(projectRoot, filePath);

    // Dynamic import for ES modules
    const updateModule = await import(fullPath);

    // Try different export patterns
    let updateData = null;

    if (updateModule.default) {
      updateData = updateModule.default;
    } else if (updateModule.updateData) {
      updateData = updateModule.updateData;
    } else {
      // Look for any export that looks like update data
      for (const [, value] of Object.entries(updateModule)) {
        if (value && typeof value === 'object' && value.title && value.date) {
          updateData = value;
          break;
        }
      }
    }

    if (!updateData) {
      console.error(`❌ No valid update data found in ${filePath}`);
      return false;
    }

    // Import Discord webhook utilities
    const { sendDiscordNotification, validateUpdateData } = await import(
      '../src/utils/discord-webhook.js'
    );

    if (!validateUpdateData(updateData)) {
      console.error(`❌ Invalid update data in ${filePath}`);
      console.error('   Required fields: title, date, type, url');
      return false;
    }

    console.log(`📤 Sending Discord notification for: ${updateData.title}`);

    const success = await sendDiscordNotification(webhookUrl, updateData);

    if (success) {
      console.log(`✅ Successfully sent notification for: ${updateData.title}`);
      return true;
    } else {
      console.log(`❌ Failed to send notification for: ${updateData.title}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Get all update files from the Zone Nova updates directory
 */
function getAllUpdateFiles() {
  const updatesDir = join(projectRoot, 'src/data/zone-nova/updates');

  try {
    const files = readdirSync(updatesDir)
      .filter(file => file.endsWith('.js') && !file.includes('Template'))
      .map(file => join('src/data/zone-nova/updates', file));

    return files;
  } catch (error) {
    console.error('❌ Error reading updates directory:', error.message);
    return [];
  }
}

/**
 * Get the latest update file (by modification time)
 */
function getLatestUpdateFile() {
  const files = getAllUpdateFiles();

  if (files.length === 0) {
    return null;
  }

  // Sort by modification time (newest first)
  const sortedFiles = files
    .map(file => ({
      path: file,
      mtime: readFileSync(resolve(projectRoot, file), { encoding: 'utf8' }).length, // Simple heuristic
    }))
    .sort((a, b) => b.mtime - a.mtime);

  return sortedFiles[0].path;
}

/**
 * Send test notification
 */
async function sendTestNotification(webhookUrl) {
  try {
    console.log('📤 Sending test Discord notification...');

    const { sendTestNotification } = await import('../src/utils/discord-webhook.js');

    const success = await sendTestNotification(webhookUrl);

    if (success) {
      console.log('✅ Test notification sent successfully!');
      return true;
    } else {
      console.log('❌ Failed to send test notification');
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending test notification:', error.message);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🤖 Discord Update Sender for Zone Nova\n');

  const webhookUrl = getWebhookUrl();

  // Handle different options
  if (options.test) {
    await sendTestNotification(webhookUrl);
    return;
  }

  if (options.file) {
    await sendUpdateFromFile(options.file, webhookUrl);
    return;
  }

  if (options.latest) {
    const latestFile = getLatestUpdateFile();

    if (!latestFile) {
      console.error('❌ No update files found');
      return;
    }

    console.log(`📄 Latest update file: ${latestFile}`);
    await sendUpdateFromFile(latestFile, webhookUrl);
    return;
  }

  if (options.all) {
    const files = getAllUpdateFiles();

    if (files.length === 0) {
      console.error('❌ No update files found');
      return;
    }

    console.log(`📚 Found ${files.length} update files. Sending notifications...`);
    console.log('⚠️  This will send multiple Discord messages. Continue? (Ctrl+C to cancel)');

    // Wait a moment for user to cancel if needed
    await new Promise(resolve => setTimeout(resolve, 3000));

    let sent = 0;
    let failed = 0;

    for (const file of files) {
      console.log(`\n📄 Processing: ${file}`);

      const success = await sendUpdateFromFile(file, webhookUrl);

      if (success) {
        sent++;
      } else {
        failed++;
      }

      // Add delay between notifications to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log(`\n📊 Summary: ${sent} sent, ${failed} failed`);
    return;
  }

  // No options provided, show help
  console.log('Usage: bun run scripts/send-discord-update.js [options]\n');
  console.log('Options:');
  console.log('  --test              Send a test notification');
  console.log('  --file <path>       Send notification for specific update file');
  console.log('  --latest            Send notification for the latest update');
  console.log('  --all               Send notifications for all updates');
  console.log('  --webhook <url>     Use specific webhook URL\n');
  console.log('Examples:');
  console.log('  bun run scripts/send-discord-update.js --test');
  console.log('  bun run scripts/send-discord-update.js --latest');
  console.log(
    '  bun run scripts/send-discord-update.js --file src/data/zone-nova/updates/maintenance-july-8-2025.js'
  );
}

// Run the script
main().catch(console.error);
