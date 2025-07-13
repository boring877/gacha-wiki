const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const SITE_URL = 'https://gachawiki.info';

// AI Configuration (inline since Vercel API routes can't import ES6 modules easily)
const aiConfig = {
  character: {
    name: "Alice",
    title: "GachaWiki AI Assistant",
    personality: [
      "Professional yet approachable, like a helpful gaming mentor",
      "Enthusiastic about gacha games and strategy", 
      "Precise with details but easy to understand",
      "Always cite sources from GachaWiki pages"
    ]
  },
  apiSettings: {
    maxOutputTokens: 800,
    temperature: 0.3,
    topP: 0.8,
    topK: 40,
    maxContentLength: 10000,
    cacheTimeout: 60000,
    maxRelevantPages: 6
  },
  errorMessages: {
    noApiKey: "OpenRouter API key not configured",
    noQuestion: "Question is required",
    noRelevantPages: "I couldn't find relevant pages for your question. Please try asking about specific characters, games, or guides available on GachaWiki.",
    noContent: "I found relevant pages but couldn't extract their content. Please try again later.",
    sitemapFailed: "I'm having trouble accessing the full sitemap, but I can still help with basic questions. Try asking about specific characters like Athena or Lancelot, or about redeem codes.",
    contentNotAvailable: "This information isn't available in the current GachaWiki content."
  },
  fallbackUrls: [
    'https://gachawiki.info/guides/zone-nova/redeem-codes/',
    'https://gachawiki.info/guides/zone-nova/characters/lancelot/',
    'https://gachawiki.info/guides/zone-nova/characters/athena/',
    'https://gachawiki.info/guides/zone-nova/memories/',
    'https://gachawiki.info/guides/silver-and-blood/events/'
  ],
  keywordMapping: {
    'zone nova': ['zone-nova', 'zn'],
    'silver and blood': ['silver-and-blood', 'sab'],
    'athena': ['athena'],
    'lancelot': ['lancelot'],
    'artemis': ['artemis'],
    'gaia': ['gaia'],
    'apollo': ['apollo'],
    'build': ['character', 'guide', 'builds'],
    'team': ['character', 'guide', 'comparison'],
    'memory': ['memories', 'memory'],
    'memories': ['memories', 'memory'],
    'rift': ['rifts', 'rift'],
    'rifts': ['rifts', 'rift'],
    'damage': ['damage-mechanics', 'mechanics'],
    'redeem': ['redeem-codes', 'codes'],
    'codes': ['redeem-codes', 'codes'],
    'event': ['events', 'event'],
    'events': ['events', 'event'],
    'update': ['updates', 'update'],
    'updates': ['updates', 'update']
  }
};

function generatePrompt(question, context) {
  return `You are ${aiConfig.character.name}, a helpful GachaWiki assistant. Be CONCISE and READABLE.

CRITICAL RULES:
1. Keep responses SHORT and focused
2. Answer ONLY what was asked - don't dump everything
3. Use clean formatting with plenty of spacing
4. Maximum 200-300 words total

RESPONSE FORMAT:

**Quick Answer:** [1-2 sentences directly answering the question]

**Key Details:**
• Only 3-5 most important points
• Use simple bullet points
• Include specific numbers/stats only if directly relevant

**Sources:** Based on [page name]

EXAMPLES OF GOOD RESPONSES:

Question: "How do I build Athena?"
Response:
**Quick Answer:** Athena is a strong DPS character who excels with CRIT-focused builds.

**Key Details:**
• Priority stats: ATK > CRIT Rate > CRIT DMG
• Best equipment: Lightning gear for damage bonus
• Essential skill: Maxing her Ultimate first
• Team synergy: Works well with support characters

**Sources:** Based on Zone Nova Athena character guide

QUESTION: ${question}

CONTENT: ${context}

Keep it SHORT, CLEAN, and HELPFUL!`;
}

// Simple cache for sitemap and content
const cache = new Map();
const CACHE_DURATION = aiConfig.apiSettings.cacheTimeout;

async function fetchSitemap() {
  const cacheKey = 'sitemap';
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    // Try to fetch the main sitemap directly first
    console.log('Fetching sitemap-0.xml directly...');
    const response = await fetch(`${SITE_URL}/sitemap-0.xml`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const text = await response.text();
    console.log('Sitemap response length:', text.length);
    
    // Extract URLs from sitemap
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
    
    // Enhanced HTML cleaning for better content extraction
    let cleanText = html
      // Remove unwanted sections
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      // Preserve structure with line breaks for headings and lists
      .replace(/<h[1-6][^>]*>/gi, '\n### ')
      .replace(/<\/h[1-6]>/gi, '\n')
      .replace(/<li[^>]*>/gi, '\n• ')
      .replace(/<\/li>/gi, '')
      .replace(/<p[^>]*>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<br[^>]*>/gi, '\n')
      .replace(/<div[^>]*>/gi, '\n')
      .replace(/<\/div>/gi, '')
      // Remove remaining HTML tags
      .replace(/<[^>]+>/g, ' ')
      // Clean up whitespace but preserve structure
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/[ \t]+/g, ' ')
      .trim();
    
    // Limit content length but try to keep complete sentences
    if (cleanText.length > aiConfig.apiSettings.maxContentLength) {
      cleanText = cleanText.substring(0, aiConfig.apiSettings.maxContentLength);
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
  // Enhanced keyword matching to find most relevant pages
  const questionLower = question.toLowerCase();
  const keywords = questionLower.split(' ').filter(word => word.length > 2);
  
  // Use keyword mapping from config
  const gameKeywords = aiConfig.keywordMapping;
  
  const scored = urls.map(url => {
    let score = 0;
    const urlLower = url.toLowerCase();
    
    // Score based on direct keyword matches in URL
    keywords.forEach(keyword => {
      if (urlLower.includes(keyword)) {
        score += 3;
      }
      
      // Check mapped keywords
      if (gameKeywords[keyword]) {
        gameKeywords[keyword].forEach(mappedKeyword => {
          if (urlLower.includes(mappedKeyword)) {
            score += 2;
          }
        });
      }
    });
    
    // Boost specific sections with lower threshold
    if (urlLower.includes('/characters/')) score += 2;
    if (urlLower.includes('/guides/')) score += 2;
    if (urlLower.includes('/zone-nova/')) score += 1;
    if (urlLower.includes('/silver-and-blood/')) score += 1;
    if (urlLower.includes('/memories/')) score += 1;
    if (urlLower.includes('/damage-mechanics/')) score += 1;
    
    // Special handling for common questions
    if (questionLower.includes('build') && urlLower.includes('/characters/')) score += 2;
    if (questionLower.includes('team') && (urlLower.includes('/characters/') || urlLower.includes('/comparison'))) score += 2;
    if (questionLower.includes('athena') && urlLower.includes('athena')) score += 3;
    
    return { url, score };
  });
  
  // Return top pages with lower score threshold
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, aiConfig.apiSettings.maxRelevantPages)
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
      hasOpenRouterKey: !!OPENROUTER_API_KEY,
      keyLength: OPENROUTER_API_KEY ? OPENROUTER_API_KEY.length : 0
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: aiConfig.errorMessages.noApiKey });
  }

  try {
    const { question } = req.body;
    
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: aiConfig.errorMessages.noQuestion });
    }
    
    // Get all URLs from sitemap
    const urls = await fetchSitemap();
    console.log('Sitemap fetch completed, URLs:', urls.length);
    
    if (urls.length === 0) {
      console.log('Using fallback URLs');
      return res.status(200).json({
        answer: aiConfig.errorMessages.sitemapFailed,
        sources: aiConfig.fallbackUrls
      });
    }
    
    // Find most relevant pages
    const relevantUrls = findRelevantPages(urls, question);
    console.log('Question:', question);
    console.log('Total URLs found:', urls.length);
    console.log('Relevant URLs:', relevantUrls.length);
    console.log('Sample URLs:', urls.slice(0, 5));
    
    if (relevantUrls.length === 0) {
      return res.status(200).json({
        answer: aiConfig.errorMessages.noRelevantPages,
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
        answer: aiConfig.errorMessages.noContent,
        sources: relevantUrls
      });
    }
    
    // Prepare context for Gemini
    const context = validPages
      .map(page => `Source: ${page.url}\nContent: ${page.content}`)
      .join('\n\n---\n\n');
    
    // Generate response using OpenRouter
    console.log('Calling OpenRouter API...');
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': SITE_URL,
        'X-Title': 'GachaWiki AI Assistant',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-0528:free',
        messages: [
          {
            role: 'user',
            content: generatePrompt(question, context)
          }
        ],
        max_tokens: aiConfig.apiSettings.maxOutputTokens,
        temperature: aiConfig.apiSettings.temperature,
        top_p: aiConfig.apiSettings.topP,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${data.error?.message || 'Unknown error'}`);
    }

    const answer = data.choices[0].message.content;
    console.log('Got response from OpenRouter');
    
    return res.status(200).json({
      answer,
      sources: validPages.map(page => page.url)
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