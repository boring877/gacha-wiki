import { aiConfig, generatePrompt } from '../src/data/ai-config.js';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SITE_URL = 'https://gachawiki.info';

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
      hasGeminiKey: !!GEMINI_API_KEY,
      keyLength: GEMINI_API_KEY ? GEMINI_API_KEY.length : 0
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GEMINI_API_KEY) {
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
                text: generatePrompt(question, context)
              }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: aiConfig.apiSettings.maxOutputTokens,
          temperature: aiConfig.apiSettings.temperature,
          topP: aiConfig.apiSettings.topP,
          topK: aiConfig.apiSettings.topK,
        }
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Gemini API error: ${data.error?.message || 'Unknown error'}`);
    }

    const answer = data.candidates[0].content.parts[0].text;
    console.log('Got response from Gemini');
    
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