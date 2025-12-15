// Stella Sora Dating Events API Endpoint
// Generates /data/stella-sora/dating.json

import { datingEvents, datingLocations } from '../../../data/stella-sora/dating.js';

export const prerender = true;

export async function GET() {
  // Count total events
  const totalEvents = datingEvents.reduce((sum, char) => sum + char.events.length, 0);

  const response = {
    game: 'Stella Sora',
    type: 'dating',
    description: 'Dating events database with character events and location information',
    characterCount: datingEvents.length,
    totalEvents,
    lastUpdated: new Date().toISOString().split('T')[0],
    locations: datingLocations,
    characters: datingEvents.map(char => ({
      id: char.id,
      character: char.character,
      slug: char.slug,
      events: char.events.map(event => ({
        index: event.index,
        name: event.name,
        icon: event.icon,
        image: event.image,
        clue: event.clue,
        secondChoice: event.secondChoice,
      })),
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
