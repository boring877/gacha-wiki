// Stella Sora Gift Preferences API Endpoint
// Generates /data/stella-sora/gift-preferences.json

import { giftPreferences } from '../../../data/stella-sora/gift-preferences.js';
import { gifts } from '../../../data/stella-sora/gifts.js';

export const prerender = true;

export async function GET() {
  // Build a reverse lookup: which characters love/hate each gift
  const giftIndex = {};
  gifts.forEach(gift => {
    giftIndex[gift.name] = {
      gift: {
        id: gift.id,
        name: gift.name,
        slug: gift.slug,
        category: gift.category,
        rarity: gift.rarity,
      },
      lovedBy: [],
      hatedBy: [],
    };
  });

  // Populate the reverse lookup
  Object.entries(giftPreferences).forEach(([characterName, prefs]) => {
    prefs.loves.forEach(giftName => {
      if (giftIndex[giftName]) {
        giftIndex[giftName].lovedBy.push(characterName);
      }
    });
    prefs.hates.forEach(giftName => {
      if (giftIndex[giftName]) {
        giftIndex[giftName].hatedBy.push(characterName);
      }
    });
  });

  const response = {
    game: 'Stella Sora',
    type: 'gift-preferences',
    description:
      'Character gift preferences with loved and hated gifts, plus reverse lookup by gift',
    characterCount: Object.keys(giftPreferences).length,
    lastUpdated: new Date().toISOString().split('T')[0],
    characters: Object.entries(giftPreferences).map(([name, prefs]) => ({
      name,
      loves: prefs.loves,
      hates: prefs.hates,
      neutral: prefs.neutral,
    })),
    giftIndex: Object.values(giftIndex),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
