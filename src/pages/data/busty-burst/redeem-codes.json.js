// Busty Burst Redeem Codes API Endpoint
// Generates /data/busty-burst/redeem-codes.json

import { redeemCodes } from '../../../data/busty-burst/redeem-codes.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Busty Burst',
    type: 'redeem-codes',
    description: 'Active gift codes for free in-game rewards',
    lastUpdated: new Date().toISOString().split('T')[0],
    activeCodes: redeemCodes.map(code => ({
      code: code.code,
      validThrough: code.validThrough,
    })),
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800',
    },
  });
}
