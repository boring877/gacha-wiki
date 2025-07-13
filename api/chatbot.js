import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SITE_URL = 'https://gachawiki.info';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

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
  // Simple keyword matching to find most relevant pages
  const questionLower = question.toLowerCase();
  const keywords = questionLower.split(' ').filter(word => word.length > 2);
  
  const scored = urls.map(url => {
    let score = 0;
    const urlLower = url.toLowerCase();
    
    // Score based on keyword matches in URL
    keywords.forEach(keyword => {
      if (urlLower.includes(keyword)) {
        score += 2;
      }
    });
    
    // Boost specific sections
    if (urlLower.includes('/characters/')) score += 1;
    if (urlLower.includes('/guides/')) score += 1;
    if (urlLower.includes('/zone-nova/') || urlLower.includes('/silver-and-blood/')) score += 1;
    
    return { url, score };
  });
  
  // Return top 3-5 most relevant pages
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
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
  
  console.log('GEMINI_API_KEY present:', !!GEMINI_API_KEY);
  console.log('GEMINI_API_KEY length:', GEMINI_API_KEY ? GEMINI_API_KEY.length : 0);
  
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ 
      error: 'API key not configured',
      debug: {
        hasKey: !!GEMINI_API_KEY,
        envKeys: Object.keys(process.env).filter(k => k.includes('GEMINI'))
      }
    });
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
    
    // Generate response using Gemini
    const result = await model.generateContent(prompt);
    const answer = result.response.text();
    
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