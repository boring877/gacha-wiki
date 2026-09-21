// TCG Shop page data: featured trading card sets and referral store links.
// Fill in AFFILIATE_IDS below once you join each referral program.
// An empty string means the plain (non referral) link is used instead.

export const AFFILIATE_IDS = {
  // Amazon Associates tracking id, appended to every Amazon link as ?tag=<id>.
  // Sign up: https://affiliate-program.amazon.com/ (US) or https://affiliate-program.amazon.co.jp/ (JP)
  amazonTag: 'gachawiki-20',

  // Separate tag for the Amazon.co.jp program (amazonJpTag), since Japan runs its
  // own Associates program with its own tracking id (format like gachawiki-22).
  amazonJpTag: '',

  // Full tracked URL from your Impact dashboard that replaces the TCGplayer search link.
  // Sign up: https://docs.tcgplayer.com/ (the TCGplayer program runs through impact.com)
  tcgplayerUrl: '',

  // Personal Play-Asia affiliate link that replaces the Play-Asia search link.
  // Sign up: https://www.play-asia.com/en/affiliate/join
  playAsiaUrl: '',

  // eBay Partner Network tracked URL that replaces the eBay search link.
  // Sign up: https://partnernetwork.ebay.com/
  ebayUrl: '',

  // Cardmarket referral link that replaces the Cardmarket search link.
  // See the partner/affiliate section of your Cardmarket account page.
  cardmarketUrl: '',
};

// Featured sets, newest first. Every link supports an optional referral replacement.
export const featuredSets = [
  {
    id: 'nikke-vol2',
    name: 'GODDESS OF VICTORY: NIKKE Vol.2',
    game: 'Weiss Schwarz',
    tagline: 'WSに勝利の女神の祝福を。',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/shop/nikke-ws-vol2-box.webp',
    imageAlt: 'Weiss Schwarz GODDESS OF VICTORY: NIKKE Vol.2 booster box art',
    imageWidth: 400,
    imageHeight: 400,
    blurb:
      'The second Weiss Schwarz set for NIKKE. Features Rapi: Red Hood, Cinderella, Grave and more, with hot-stamped sign cards from 40 cast members and newly drawn illustrator art. The Japanese and Korean editions are out now, and the English edition is up for preorder.',
    specs: [
      '8 cards per pack, 440 yen per pack (tax included)',
      '10 packs per booster box (the box size changed from 12 packs in Vol.1)',
      '112 normal card types plus 112 or more parallel types',
      'Sign cards from 40 voice actors, including 9 SSP and 31 SP types',
    ],
    releases: [
      { region: 'English', date: '2026-09-25', status: 'preorder' },
      { region: 'Japanese', date: '2026-09-19', status: 'out' },
      { region: 'Korean', date: '2026-09-19', status: 'out' },
    ],
    links: [
      {
        store: 'TCGplayer',
        url: 'https://www.tcgplayer.com/search/product/product?ProductLineName=weiss-schwarz&q=Goddess%20of%20Victory%20NIKKE',
        note: 'English boxes and singles',
        referralKey: 'tcgplayerUrl',
      },
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=goddess+of+victory+nikke+weiss+schwarz',
        note: 'EN and JP boxes, fast shipping',
        referralKey: 'amazonTag',
      },
      {
        store: 'Amazon (JP)',
        url: 'https://www.amazon.co.jp/s?k=%E3%83%B4%E3%82%A1%E3%82%A4%E3%82%B9%E3%82%B7%E3%83%A5%E3%83%B4%E3%82%A1%E3%83%AB%E3%83%84+NIKKE',
        note: 'Japanese edition',
        referralKey: 'amazonTag',
      },
      {
        store: 'Play-Asia',
        url: 'https://www.play-asia.com/search/weiss_schwarz_nikke',
        note: 'Japanese boxes, worldwide shipping',
        referralKey: 'playAsiaUrl',
      },
      {
        store: 'Cardmarket',
        url: 'https://www.cardmarket.com/en/WeissSchwarz/Products/Search?searchString=NIKKE',
        note: 'European marketplace',
        referralKey: 'cardmarketUrl',
      },
    ],
  },
  {
    id: 'nikke-vol1',
    name: 'GODDESS OF VICTORY: NIKKE (Vol.1) + Trial Deck',
    game: 'Weiss Schwarz',
    tagline: '勝利の女神：NIKKE',
    image: 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/shop/nikke-ws-vol1-pack.webp',
    imageAlt: 'Weiss Schwarz GODDESS OF VICTORY: NIKKE Vol.1 booster pack art',
    imageWidth: 400,
    imageHeight: 647,
    blurb:
      'The first Weiss Schwarz set for NIKKE and the Trial Deck that lets new players start playing right away. The English booster box was reprinted in April 2025, so sealed boxes and singles are still easy to find.',
    specs: [
      '8 cards per pack, 12 packs per booster box',
      'English reprint available (April 2025, 115 card types)',
      'Trial Deck: prebuilt yellow and red deck, great for beginners',
    ],
    releases: [
      { region: 'English', date: '2024-12-13', status: 'out' },
      { region: 'Japanese', date: '2024-12-13', status: 'out' },
    ],
    links: [
      {
        store: 'TCGplayer',
        url: 'https://www.tcgplayer.com/search/product/product?ProductLineName=weiss-schwarz&q=Goddess%20of%20Victory%20NIKKE',
        note: 'English boxes and singles',
        referralKey: 'tcgplayerUrl',
      },
      {
        store: 'Amazon (US)',
        url: 'https://www.amazon.com/s?k=goddess+of+victory+nikke+weiss+schwarz',
        note: 'EN and JP boxes',
        referralKey: 'amazonTag',
      },
      {
        store: 'Amazon (JP)',
        url: 'https://www.amazon.co.jp/s?k=%E3%83%B4%E3%82%A1%E3%82%A4%E3%82%B9%E3%82%B7%E3%83%A5%E3%83%B4%E3%82%A1%E3%83%AB%E3%83%84+NIKKE',
        note: 'Japanese edition and Trial Deck',
        referralKey: 'amazonTag',
      },
      {
        store: 'Play-Asia',
        url: 'https://www.play-asia.com/search/weiss_schwarz_nikke',
        note: 'Japanese boxes, worldwide shipping',
        referralKey: 'playAsiaUrl',
      },
    ],
  },
];

// Resolve a link to its referral URL when configured, otherwise the plain URL.
// Amazon links get the Associates tag appended automatically: the .co.jp links
// use amazonJpTag, all other Amazon domains use amazonTag.
export function shopLink(link) {
  if (!link.referralKey) return link.url;
  if (link.referralKey === 'amazonTag') {
    const isJp = link.url.startsWith('https://www.amazon.co.jp');
    const tag = isJp ? AFFILIATE_IDS.amazonJpTag : AFFILIATE_IDS.amazonTag;
    if (tag) return `${link.url}${link.url.includes('?') ? '&' : '?'}tag=${tag}`;
    return link.url;
  }
  const ref = AFFILIATE_IDS[link.referralKey];
  return ref || link.url;
}
