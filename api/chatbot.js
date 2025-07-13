const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SITE_URL = 'https://gachawiki.info';

// Simple cache for sitemap and content
const cache = new Map();
const CACHE_DURATION = 60 * 1000; // 60 seconds

async function fetchSitemap() {
  const cacheKey = 'sitemap';
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    const response = await fetch(`${SITE_URL}/sitemap-index.xml`);
    const text = await response.text();
    
    // Extract URLs from sitemap
    const urlMatches = text.matchAll(/<loc>(.*?)<\/loc>/g);
    const urls = Array.from(urlMatches, match => match[1]);
    
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
    
    // Basic HTML cleaning - remove nav, footer, scripts, styles
    let cleanText = html
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Limit content length to avoid token limits
    cleanText = cleanText.substring(0, 8000);
    
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
  
  // Game-specific keywords mapping
  const gameKeywords = {
    'zone nova': ['zone-nova', 'zn'],
    'silver and blood': ['silver-and-blood', 'sab'],
    'athena': ['athena'],
    'build': ['character', 'guide', 'builds'],
    'team': ['character', 'guide', 'comparison'],
    'memory': ['memories', 'memory'],
    'rift': ['rifts', 'rift'],
    'damage': ['damage-mechanics', 'mechanics']
  };
  
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
    .slice(0, 6)
    .map(item => item.url);
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
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
      return res.status(400).json({ error: 'Question is required' });
    }
    
    // Get all URLs from sitemap
    const urls = await fetchSitemap();
    
    if (urls.length === 0) {
      return res.status(500).json({ error: 'Could not fetch sitemap' });
    }
    
    // Find most relevant pages
    const relevantUrls = findRelevantPages(urls, question);
    console.log('Question:', question);
    console.log('Total URLs found:', urls.length);
    console.log('Relevant URLs:', relevantUrls.length);
    console.log('Sample URLs:', urls.slice(0, 5));
    
    if (relevantUrls.length === 0) {
      return res.json({
        answer: "I couldn't find relevant pages for your question. Please try asking about specific characters, games, or guides available on GachaWiki.",
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
      return res.json({
        answer: "I found relevant pages but couldn't extract their content. Please try again later.",
        sources: relevantUrls
      });
    }
    
    // Prepare context for Gemini
    const context = validPages
      .map(page => `Source: ${page.url}\nContent: ${page.content}`)
      .join('\n\n---\n\n');
    
    const prompt = `You are a helpful assistant that answers questions about gacha games using only the provided content from GachaWiki.info.

IMPORTANT RULES:
- Only use information from the provided content below
- If the answer isn't in the provided content, say so clearly
- Always cite which page(s) your answer comes from
- Be concise but helpful
- Focus on factual information about characters, game mechanics, events, etc.

User Question: ${question}

Available Content:
${context}

Please provide a helpful answer based only on the content above, and cite your sources.`;
    
    // Generate response using Google Gemini
    console.log('Calling Gemini API...');
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful assistant that answers questions about gacha games using only the provided content from GachaWiki.info.

IMPORTANT RULES:
- Only use information from the provided content below
- If the answer isn't in the provided content, say so clearly
- Always cite which page(s) your answer comes from
- Be concise but helpful
- Focus on factual information about characters, game mechanics, events, etc.

User Question: ${question}

Available Content:
${context}

Please provide a helpful answer based only on the content above, and cite your sources.`
              }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        }
      }),
    });

    const data = await response.json();
    const answer = data.candidates[0].content.parts[0].text;
    console.log('Got response from Gemini');
    
    return res.json({
      answer,
      sources: validPages.map(page => page.url)
    });
    
  } catch (error) {
    console.error('Chatbot error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}