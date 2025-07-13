# GachaWiki AI Chatbot

This chatbot implementation provides AI-powered assistance using only content from GachaWiki.info.

## Setup

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Environment Variables:**
   Create a `.env` file with:
   ```
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

3. **Get Gemini API Key:**
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Add it to your environment variables

## How It Works

### Architecture
- **Frontend**: `/chatbot` - Simple chat interface
- **API**: `/api/chatbot` - Astro API route
- **AI**: Google Gemini 2.5 Flash model

### Process Flow
1. User asks a question
2. System fetches site sitemap
3. Finds 3-5 most relevant pages based on keywords
4. Downloads and cleans page content
5. Sends question + content to Gemini API
6. Returns AI answer with source citations

### Cost Management
- **Free Tier**: 200 requests/day, 15 req/min, 1M tokens/min
- **Paid Tier**: $0.10 input / $0.40 output per 1M tokens
- **Caching**: 60-second content cache reduces API calls
- **Content Limiting**: Max 8000 chars per page to control token usage

### Rate Limiting
Current implementation has basic rate limiting through Gemini's API limits:
- Free: 15 requests/minute
- Paid: Much higher limits

For high traffic (500k prompts/day), consider adding:
- Redis cache for common questions
- User-side rate limiting
- Queue system for busy periods

## Files Added/Modified

### New Files
- `src/pages/api/chatbot.js` - API endpoint
- `src/pages/chatbot.astro` - Chat interface
- `CHATBOT.md` - This documentation

### Modified Files
- `package.json` - Added Google Generative AI dependency
- `astro.config.mjs` - Changed to hybrid mode for API routes
- `src/components/DesktopHeader.astro` - Added AI Assistant link
- `src/components/MobileMenu.astro` - Added AI Assistant link

## Usage

1. Visit `/chatbot` on your site
2. Ask questions about gacha games
3. Get answers sourced from your wiki content

## Example Questions

- "How do I build Athena in Zone Nova?"
- "What are the best memories for Lancelot?"
- "Tell me about Silver and Blood events"
- "What are the redeem codes for Zone Nova?"

## Deployment

The chatbot works with your existing Vercel deployment. Just make sure to:

1. Add `GEMINI_API_KEY` to Vercel environment variables
2. Deploy with `vercel --prod`

## Cost Estimation

For 500k prompts/month:
- Average 200 tokens output = 100M tokens/month
- Cost: ~$40/month (very reasonable for this traffic)
- Free tier covers 6k requests/month ($0)

## Monitoring

Monitor usage in:
- Google AI Studio console
- Vercel function logs
- Add analytics if needed for user behavior

## Improvements

Potential future enhancements:
1. **Better content relevance** - Pre-index content for smarter page selection
2. **Response caching** - Cache similar questions to reduce API calls
3. **User feedback** - Thumbs up/down on responses
4. **Advanced rate limiting** - Redis-based user limits
5. **Streaming responses** - Real-time answer generation