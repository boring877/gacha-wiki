const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SITE_URL = 'https://gachawiki.info';

// Load Aria Character Configuration from JSON file
const ariaCharacterPath = path.join(process.cwd(), 'src', 'data', 'aria-character.json');
const ariaCharacter = JSON.parse(fs.readFileSync(ariaCharacterPath, 'utf8'));

// Helper function to generate prompt using character data
function generatePrompt(question, context) {
  const { name, personality, style } = ariaCharacter;
  
  return `You are ${name}, a helpful GachaWiki assistant.

CRITICAL RULES:
1. If the question is unclear, vague, or just a number/single word, ask for clarification
2. Do NOT make up answers from random content
3. Only answer if there's a clear, specific question about gacha games
4. If you can't understand what the user wants, say so clearly

PERSONALITY TRAITS:
${personality.traits.map(trait => `- ${trait}`).join('\n')}

COMMUNICATION STYLE: ${personality.communication_style}

RESPONSE FORMAT:
${style.response_format.structure.join('\n')}

STYLE GUIDELINES:
${style.chat.map(guideline => `- ${guideline}`).join('\n')}

CONTENT GUIDELINES:
- Character builds: ${style.guidelines.character_builds}
- Game mechanics: ${style.guidelines.game_mechanics}
- Events/codes: ${style.guidelines.events_codes}
- Team building: ${style.guidelines.team_building}

QUESTION VALIDATION:
- Valid: "How do I build Athena?", "What are Zone Nova redeem codes?", "Tell me about Lancelot"
- Invalid: "1", "help", "hello", random words

USER QUESTION: "${question}"

AVAILABLE CONTENT: ${context}

If the question is clear and specific, provide a helpful answer using the format above. If it's unclear, ask for clarification with a Japanese emoticon and encouraging tone.`;
}

// Simple cache for sitemap and content
const cache = new Map();
const CACHE_DURATION = ariaCharacter.settings.cacheTimeout;

async function fetchSitemap() {
  const cacheKey = 'sitemap';
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    console.log('Fetching sitemap-0.xml directly...');
    const response = await fetch(`${SITE_URL}/sitemap-0.xml`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const text = await response.text();
    console.log('Sitemap response length:', text.length);
    
    const urlMatches = text.matchAll(/<loc>(.*?)<\/loc>/g);
    const urls = Array.from(urlMatches, match => match[1]);
    
    console.log(`Found ${urls.length} URLs in sitemap`);
    cache.set(cacheKey, { data: urls, timestamp: Date.now() });
    return urls;
  } catch (error) {
    console.error('Failed to fetch sitemap:', error);
    return [];
  }
}

async function fetchPageContent(url) {
  const cacheKey = `content-${url}`;
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    let cleanText = html
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<h[1-6][^>]*>/gi, '\n### ')
      .replace(/<\/h[1-6]>/gi, '\n')
      .replace(/<li[^>]*>/gi, '\n• ')
      .replace(/<\/li>/gi, '')
      .replace(/<p[^>]*>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<br[^>]*>/gi, '\n')
      .replace(/<div[^>]*>/gi, '\n')
      .replace(/<\/div>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/[ \t]+/g, ' ')
      .trim();
    
    if (cleanText.length > ariaCharacter.settings.maxContentLength) {
      cleanText = cleanText.substring(0, ariaCharacter.settings.maxContentLength);
      const lastSentence = cleanText.lastIndexOf('.');
      if (lastSentence > 8000) {
        cleanText = cleanText.substring(0, lastSentence + 1);
      }
    }
    
    cache.set(cacheKey, { data: cleanText, timestamp: Date.now() });
    return cleanText;
  } catch (error) {
    console.error(`Failed to fetch content from ${url}:`, error);
    return '';
  }
}

function findRelevantPages(urls, question) {
  const questionLower = question.toLowerCase();
  const keywords = questionLower.split(' ').filter(word => word.length > 2);
  
  // Determine which game is being asked about
  let targetGame = null;
  if (questionLower.includes('zone nova') || questionLower.includes('zone-nova')) {
    targetGame = 'zone-nova';
  } else if (questionLower.includes('silver and blood') || questionLower.includes('silver-and-blood')) {
    targetGame = 'silver-and-blood';
  }
  
  // Use keyword mapping from character config
  const allKeywords = {
    ...ariaCharacter.keywords.games,
    ...ariaCharacter.keywords.topics
  };
  
  // Flatten character keywords
  const characterKeywords = {};
  ariaCharacter.keywords.characters.zone_nova.forEach(char => {
    characterKeywords[char] = [char];
  });
  ariaCharacter.keywords.characters.silver_and_blood.forEach(char => {
    characterKeywords[char] = [char];
  });
  
  const gameKeywords = { ...allKeywords, ...characterKeywords };
  
  const scored = urls.map(url => {
    let score = 0;
    const urlLower = url.toLowerCase();
    
    // If a specific game is mentioned, heavily prioritize that game's pages
    if (targetGame) {
      if (urlLower.includes(`/${targetGame}/`)) {
        score += 10; // Heavy boost for correct game
      } else if (urlLower.includes('/zone-nova/') || urlLower.includes('/silver-and-blood/')) {
        score -= 5; // Penalty for wrong game
      }
    }
    
    keywords.forEach(keyword => {
      if (urlLower.includes(keyword)) {
        score += 3;
      }
      
      if (gameKeywords[keyword]) {
        gameKeywords[keyword].forEach(mappedKeyword => {
          if (urlLower.includes(mappedKeyword)) {
            score += 2;
          }
        });
      }
    });
    
    // Boost specific sections
    if (urlLower.includes('/characters/')) score += 2;
    if (urlLower.includes('/guides/')) score += 2;
    if (urlLower.includes('/zone-nova/')) score += 1;
    if (urlLower.includes('/silver-and-blood/')) score += 1;
    if (urlLower.includes('/memories/')) score += 1;
    if (urlLower.includes('/damage-mechanics/')) score += 1;
    
    // Special handling for common questions
    if (questionLower.includes('build') && urlLower.includes('/characters/')) score += 2;
    if (questionLower.includes('team') && (urlLower.includes('/characters/') || urlLower.includes('/comparison'))) score += 2;
    
    return { url, score };
  });
  
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, ariaCharacter.settings.maxRelevantPages)
    .map(item => item.url);
}

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ 
      status: 'API is working',
      character: ariaCharacter.name,
      version: ariaCharacter.version,
      model: ariaCharacter.settings.model,
      hasGeminiKey: !!GEMINI_API_KEY,
      keyLength: GEMINI_API_KEY ? GEMINI_API_KEY.length : 0
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Gemini API key not configured' });
  }

  try {
    const { question } = req.body;
    
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: ariaCharacter.responses.error_messages.no_question });
    }
    
    console.log('Using model:', ariaCharacter.settings.model);
    console.log('Has Gemini API Key:', !!GEMINI_API_KEY);
    console.log('Gemini API Key length:', GEMINI_API_KEY ? GEMINI_API_KEY.length : 0);
    
    // Get all URLs from sitemap
    const urls = await fetchSitemap();
    console.log('Sitemap fetch completed, URLs:', urls.length);
    
    if (urls.length === 0) {
      console.log('Using fallback URLs');
      return res.status(200).json({
        answer: ariaCharacter.responses.error_messages.sitemap_failed,
        sources: ariaCharacter.fallback_urls
      });
    }
    
    // Find most relevant pages
    const relevantUrls = findRelevantPages(urls, question);
    console.log('Question:', question);
    console.log('Total URLs found:', urls.length);
    console.log('Relevant URLs:', relevantUrls.length);
    
    if (relevantUrls.length === 0) {
      return res.status(200).json({
        answer: ariaCharacter.responses.error_messages.no_relevant_pages,
        sources: []
      });
    }
    
    // Fetch content from relevant pages
    const contentPromises = relevantUrls.map(async url => {
      const content = await fetchPageContent(url);
      return { url, content };
    });
    
    const pages = await Promise.all(contentPromises);
    const validPages = pages.filter(page => page.content.length > 100);
    
    if (validPages.length === 0) {
      return res.status(200).json({
        answer: ariaCharacter.responses.error_messages.no_content,
        sources: relevantUrls
      });
    }
    
    // Prepare context for AI
    const context = validPages
      .map(page => `Source: ${page.url}\nContent: ${page.content}`)
      .join('\n\n---\n\n');
    
    // Generate response using Google Gemini API
    console.log('Calling Google Gemini API...');
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${ariaCharacter.settings.model}:generateContent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: generatePrompt(question, context)
              }
            ]
          }
        ],
        generationConfig: {
          temperature: ariaCharacter.settings.temperature,
          maxOutputTokens: ariaCharacter.settings.max_tokens,
        }
      }),
    });

    const responseText = await response.text();
    console.log('Gemini API response status:', response.status);
    console.log('Gemini API response preview:', responseText.substring(0, 200));
    
    if (!response.ok) {
      console.error('Gemini API error:', response.status, responseText);
      throw new Error(`Gemini API error: HTTP ${response.status} - ${responseText.substring(0, 100)}`);
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Gemini response as JSON:', parseError);
      console.error('Response was:', responseText);
      throw new Error('Invalid JSON response from Gemini API');
    }

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      console.error('Unexpected Gemini response structure:', data);
      throw new Error('Unexpected response structure from Gemini API');
    }

    const answer = data.candidates[0].content.parts[0].text;
    const usage = data.usageMetadata || {};
    console.log('Got response from Gemini');
    console.log('Token usage:', usage);
    
    return res.status(200).json({
      answer,
      sources: validPages.map(page => page.url),
      usage: {
        prompt_tokens: usage.promptTokenCount || 0,
        completion_tokens: usage.candidatesTokenCount || 0,
        total_tokens: usage.totalTokenCount || 0
      }
    });
    
  } catch (error) {
    console.error('Chatbot error:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      details: error.stack
    });
  }
}