// Stella Sora Redeem Codes API Endpoint
// Generates /data/stella-sora/redeem-codes.json

import { stellaSoraRedeemCodes } from '../../../data/stella-sora/redeem-codes.js';

export const prerender = true;

export async function GET() {
  const response = {
    game: 'Stella Sora',
    type: 'redeem-codes',
    description: 'Active and expired redeem codes with redemption instructions',
    lastUpdated: stellaSoraRedeemCodes.meta.lastUpdated.toISOString().split('T')[0],
    activeCount: stellaSoraRedeemCodes.availableCodes.length,
    expiredCount: stellaSoraRedeemCodes.expiredCodes.length,
    availableCodes: stellaSoraRedeemCodes.availableCodes,
    expiredCodes: stellaSoraRedeemCodes.expiredCodes,
    redeemInstructions: stellaSoraRedeemCodes.redeemInstructions,
    warnings: stellaSoraRedeemCodes.warnings,
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=1800', // Shorter cache for frequently changing data
    },
  });
}
