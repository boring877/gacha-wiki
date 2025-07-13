import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SITE_URL = 'https://gachawiki.info';

// Initialize Google AI
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

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
    if (cleanText.length > 10000) {
      cleanText = cleanText.substring(0, 10000);
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
  
  // Game-specific keywords mapping
  const gameKeywords = {
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

export async function POST({ request }) {
  // Test if API route is working at all
  console.log('=== POST request received ===');
  
  if (!GEMINI_API_KEY) {
    console.log('No GEMINI_API_KEY found');
    return new Response(JSON.stringify({ error: 'Gemini API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { question } = await request.json();
    console.log('Question received:', question);
    
    if (!question || typeof question !== 'string') {
      return new Response(JSON.stringify({ error: 'Question is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Get all URLs from sitemap
    const urls = await fetchSitemap();
    console.log('Sitemap fetch completed, URLs:', urls.length);
    
    if (urls.length === 0) {
      // Fallback with some known URLs if sitemap fails
      const fallbackUrls = [
        'https://gachawiki.info/guides/zone-nova/redeem-codes/',
        'https://gachawiki.info/guides/zone-nova/characters/lancelot/',
        'https://gachawiki.info/guides/zone-nova/characters/athena/',
        'https://gachawiki.info/guides/zone-nova/memories/',
        'https://gachawiki.info/guides/silver-and-blood/events/'
      ];
      console.log('Using fallback URLs');
      return new Response(JSON.stringify({
        answer: "I'm having trouble accessing the full sitemap, but I can still help with basic questions. Try asking about specific characters like Athena or Lancelot, or about redeem codes.",
        sources: fallbackUrls
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Find most relevant pages
    const relevantUrls = findRelevantPages(urls, question);
    console.log('Question:', question);
    console.log('Total URLs found:', urls.length);
    console.log('Relevant URLs:', relevantUrls.length);
    console.log('Sample URLs:', urls.slice(0, 5));
    
    if (relevantUrls.length === 0) {
      return new Response(JSON.stringify({
        answer: "I couldn't find relevant pages for your question. Please try asking about specific characters, games, or guides available on GachaWiki.",
        sources: []
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
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
      return new Response(JSON.stringify({
        answer: "I found relevant pages but couldn't extract their content. Please try again later.",
        sources: relevantUrls
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Prepare context for Gemini
    const context = validPages
      .map(page => `Source: ${page.url}\nContent: ${page.content}`)
      .join('\n\n---\n\n');
    
    // Generate response using Google Generative AI SDK
    console.log('Calling Gemini API...');
    console.log('Has Gemini API Key:', !!GEMINI_API_KEY);
    console.log('Gemini API Key length:', GEMINI_API_KEY ? GEMINI_API_KEY.length : 0);
    
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      
      const prompt = `You are GachaWiki AI, an expert assistant for gacha games. Answer questions using ONLY the provided content from GachaWiki.info.

RESPONSE GUIDELINES:
1. **Be Direct & Helpful**: Give clear, actionable answers
2. **Use Game Terminology**: Use proper character names, game terms, and mechanics
3. **Structure Information**: Use bullet points, numbers, or sections for clarity
4. **Cite Sources**: Always mention which page(s) contain the information
5. **Stay In-Scope**: Only use provided content - if info isn't available, say so clearly

ANSWER FORMAT:
- For character builds: Include stats, equipment, skills, team compositions
- For game mechanics: Explain step-by-step with examples
- For events/codes: Include dates, requirements, rewards
- For team building: Suggest specific character combinations and synergies

USER QUESTION: ${question}

AVAILABLE CONTENT:
${context}

Provide a comprehensive answer using the format above. Include specific details like numbers, percentages, and exact names when available.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const answer = response.text();
      
      console.log('Got response from Gemini SDK');
      console.log('Response length:', answer.length);
      
      return new Response(JSON.stringify({
        answer,
        sources: validPages.map(page => page.url)
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (geminiError) {
      console.error('Gemini API error:', geminiError);
      throw new Error(`Gemini API error: ${geminiError.message}`);
    }
    
  } catch (error) {
    console.error('Chatbot error:', error);
    console.error('Error stack:', error.stack);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error.message,
      details: error.stack
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ 
    status: 'API is working',
    hasGeminiKey: !!GEMINI_API_KEY,
    keyLength: GEMINI_API_KEY ? GEMINI_API_KEY.length : 0
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}