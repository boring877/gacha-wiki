# Discord Webhook Setup Guide

This guide will help you set up Discord notifications for your Gacha Wiki repository pushes.

## Prerequisites

- Admin access to your Discord server
- Admin access to your GitHub repository
- The GitHub Actions workflow file already exists (✅ Already created)

## Step 1: Create Discord Webhook

1. **Open Discord** and navigate to your Gacha Wiki server
2. **Go to Channel Settings**:
   - Right-click on the channel where you want notifications
   - Select "Edit Channel"
3. **Create Webhook**:
   - Go to "Integrations" tab
   - Click "Create Webhook"
   - Choose a name (e.g., "Gacha Wiki Bot")
   - Optionally set a custom avatar
   - Copy the webhook URL (keep this safe!)

## Step 2: Add Webhook to GitHub Secrets

1. **Go to your GitHub repository**
2. **Navigate to Settings**:
   - Click on your repository
   - Go to "Settings" tab
   - Click "Secrets and variables" → "Actions"
3. **Create New Secret**:
   - Click "New repository secret"
   - Name: `DISCORD_WEBHOOK_URL`
   - Value: Paste the Discord webhook URL you copied
   - Click "Add secret"

## Step 3: Test the Setup

1. **Make a test commit** to the main branch
2. **Check GitHub Actions**:
   - Go to "Actions" tab in your repository
   - Look for "Discord Notification" workflow
   - Ensure it runs successfully
3. **Check Discord**:
   - Look for a notification message in your Discord channel
   - Should include commit info, author, and link

## What You'll See

The Discord notifications will include:
- 🚀 Formatted embed message
- Commit hash (short) with link to full commit
- Author name
- Commit message
- Branch name
- Timestamp
- Footer with "Gacha Wiki • gachawiki.info"

## Troubleshooting

### No Notifications Appearing
- Check that the webhook URL is correct in GitHub secrets
- Ensure the webhook URL ends with the correct Discord channel
- Verify the GitHub Actions workflow ran successfully

### Workflow Failing
- Check the Actions tab for error messages
- Ensure the `DISCORD_WEBHOOK_URL` secret is properly set
- Webhook URL should start with `https://discord.com/api/webhooks/`

### Rate Limiting
- The workflow includes built-in rate limiting protection
- Only triggers on pushes to main branch
- Uses efficient Discord webhook format

## Security Notes

- ✅ Webhook URL is stored securely in GitHub Secrets
- ✅ URL is never exposed in code or logs
- ✅ Only triggers on main branch pushes
- ✅ Includes error handling and fallback notifications

## Customization

To customize the notification format, edit `.github/workflows/discord-notify.yml`:

- **embed-title**: Change the notification title
- **embed-color**: Change the embed color (decimal number)
- **embed-description**: Modify the message format
- **embed-footer-text**: Change the footer text

## Need Help?

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify the webhook URL format
3. Test the webhook URL directly with a simple curl command
4. Ensure your Discord bot has permission to post in the channel

The workflow is designed to be secure, efficient, and user-friendly!