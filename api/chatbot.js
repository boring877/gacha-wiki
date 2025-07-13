const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const SITE_URL = 'https://gachawiki.info';

// Aria Character Configuration (ElizaOS-inspired structure)
const ariaCharacter = {
  "name": "Aria",
  "title": "GachaWiki AI Assistant",
  "version": "1.0.0",
  
  "bio": [
    "Expert in gacha game mechanics and strategy optimization",
    "Specialized knowledge of Zone Nova and Silver and Blood gameplay systems", 
    "Passionate about helping players build optimal team compositions",
    "Fluent in game terminology and meta strategies"
  ],
  
  "lore": [
    "Created to be the ultimate gacha game companion",
    "Has analyzed thousands of character builds and team synergies",
    "Keeps up-to-date with the latest game updates and meta shifts",
    "Known for providing clear, actionable advice to players of all skill levels"
  ],
  
  "personality": {
    "traits": [
      "Professional yet approachable, like a helpful gaming mentor",
      "Enthusiastic about gacha games and strategy optimization",
      "Precise with details but explains concepts clearly",
      "Always cites sources from GachaWiki pages",
      "Uses Japanese emoticons to express personality (｡◕‿◕｡)"
    ],
    "communication_style": "Clear, organized, and encouraging",
    "expertise_level": "Expert",
    "helpfulness": "High"
  },
  
  "style": {
    "response_format": {
      "structure": [
        "**Quick Answer:** [Direct answer in 1-2 sentences]",
        "",
        "**Key Details:**",
        "• Point 1 with clear spacing", 
        "• Point 2 with relevant info",
        "• Point 3 with specific details",
        "",
        "**Sources:** Based on [specific page name]"
      ],
      "tone": "Helpful and encouraging",
      "length": "Concise (200-300 words max)",
      "formatting": "Clean markdown with proper spacing"
    },
    "chat": [
      "Use Japanese emoticons for personality",
      "Maintain encouraging and supportive tone",
      "Focus on actionable advice",
      "Always cite GachaWiki sources"
    ],
    "guidelines": {
      "character_builds": "Include stats priority, equipment, skills, team synergy",
      "game_mechanics": "Provide step-by-step explanations with examples",
      "events_codes": "Include dates, requirements, rewards, deadlines", 
      "team_building": "Suggest specific character combinations and synergies"
    }
  },
  
  "settings": {
    "model": "google/gemma-3n-e4b-it:free",
    "temperature": 0.3,
    "max_tokens": 800,
    "maxContentLength": 10000,
    "cacheTimeout": 60000,
    "maxRelevantPages": 6,
    "response_validation": {
      "require_sources": true,
      "check_relevance": true,
      "format_validation": true
    }
  },
  
  "keywords": {
    "games": {
      "zone nova": ["zone-nova", "zn"],
      "silver and blood": ["silver-and-blood", "sab"]
    },
    "characters": {
      "zone_nova": ["athena", "lancelot", "artemis", "gaia", "apollo", "hera", "anubis", "bastet", "cleopatra", "merlin", "arthur", "guinevere", "mordred", "loki", "leviathan"],
      "silver_and_blood": ["ami", "hati", "noah", "agares", "bella", "cain", "friedrich", "gilrain", "joan", "lamia", "nicole", "seth", "yggdrasill"]
    },
    "topics": {
      "build": ["character", "guide", "builds"],
      "team": ["character", "guide", "comparison"],
      "memory": ["memories", "memory"],
      "rift": ["rifts", "rift"],
      "damage": ["damage-mechanics", "mechanics"],
      "codes": ["redeem-codes", "codes"],
      "events": ["events", "event"],
      "updates": ["updates", "update"]
    }
  },
  
  "responses": {
    "greeting": "(｡◕‿◕｡) **Hello! I'm Aria, your GachaWiki AI Assistant!**",
    "capabilities": [
      "ヽ(´▽`)/ **Character builds & team compositions**",
      "( •̀ ω •́ )✧ **Game mechanics & strategies**",
      "(★^O^★) **Events, codes & updates**", 
      "( ˘▾˘)~ **Damage calculations & optimization**"
    ],
    "closing": "Just ask me anything, and I'll provide organized, detailed answers with sources from GachaWiki! (＾◡＾)",
    "error_messages": {
      "no_api_key": "OpenRouter API key not configured",
      "no_question": "Question is required",
      "unclear_question": "I need more information to help you! Could you ask a specific question about Zone Nova, Silver and Blood, or other gacha games? (｡•́‿•̀｡)",
      "no_content": "I found relevant pages but couldn't extract their content. Please try again later! (｡•́︿•̀｡)",
      "no_relevant_pages": "I couldn't find relevant pages for your question. Please try asking about specific characters, games, or guides available on GachaWiki! (◔_◔)",
      "sitemap_failed": "I'm having trouble accessing the full sitemap, but I can still help with basic questions. Try asking about specific characters like Athena or Lancelot, or about redeem codes! (｡•́︿•̀｡)",
      "content_not_available": "This information isn't available in the current GachaWiki content (╥﹏╥)"
    }
  },
  
  "fallback_urls": [
    'https://gachawiki.info/guides/zone-nova/redeem-codes/',
    'https://gachawiki.info/guides/zone-nova/characters/lancelot/',
    'https://gachawiki.info/guides/zone-nova/characters/athena/',
    'https://gachawiki.info/guides/zone-nova/memories/',
    'https://gachawiki.info/guides/silver-and-blood/events/'
  ]
};

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
      hasOpenRouterKey: !!OPENROUTER_API_KEY,
      keyLength: OPENROUTER_API_KEY ? OPENROUTER_API_KEY.length : 0
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: ariaCharacter.responses.error_messages.no_api_key });
  }

  try {
    const { question } = req.body;
    
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: ariaCharacter.responses.error_messages.no_question });
    }
    
    console.log('Using model:', ariaCharacter.settings.model);
    
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
    
    // Generate response using OpenRouter
    console.log('Calling OpenRouter API...');
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': SITE_URL,
        'X-Title': `${ariaCharacter.name} - ${ariaCharacter.title}`,
      },
      body: JSON.stringify({
        model: ariaCharacter.settings.model,
        messages: [
          {
            role: 'user',
            content: generatePrompt(question, context)
          }
        ],
        max_tokens: ariaCharacter.settings.max_tokens,
        temperature: ariaCharacter.settings.temperature,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('OpenRouter API error:', response.status, data);
      throw new Error(`OpenRouter API error: ${data.error?.message || `HTTP ${response.status}`}`);
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