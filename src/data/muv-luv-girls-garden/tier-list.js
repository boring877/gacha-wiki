// Muv-Luv Girls Garden student tier list from the Japanese community source
// kamigame.jp (最強キャラランキング, updated 2026-09-16), mapped to student slugs
// in characters.js by JP display name (variant prefixes like 周年/水着 resolved
// to the student). Each placement = the student's best-ranked card in that category.
// Coverage note: the Sep 15, 2026 duo unit ニーナジーナ (Nina Zina) is ranked SS
// Overall on the source but is not in the student list yet.
export const TIER_ORDER = ['SS', 'S+', 'S', 'A+', 'A', 'B', 'C'];

export const TIER_CATEGORIES = [
  { key: 'overall', jp: '総合評価', en: 'Overall' },
  { key: 'maze', jp: 'メイズ探索（複数）', en: 'Maze Exploration' },
  { key: 'exercise', jp: '戦術演習（単体）', en: 'Tactical Exercise' },
  { key: 'nolb', jp: '無凸', en: 'No Limit Break' },
];

export const TIER_SOURCE = {
  name: 'kamigame.jp',
  url: 'https://kamigame.jp/muvluv-gg/page/385590674579286554.html',
  updated: '2026-09-16',
  secondary: { name: 'Gamerch', url: 'https://gamerch.com/muvluv-girls-garden/' },
};

export const TIER_NOTES = [
  'The September 15, 2026 duo unit Nina Zina (ニーナジーナ) ranks SS Overall on the source but is not in the student list yet.',
  'A placement reflects the highest-ranked card of a student: kamigame scores individual Style Cards, so a student with several ranked cards takes the highest one here.',
];

// category -> tier -> student slugs (roster order)
export const MLGG_TIER_PLACEMENTS = 
{
  "overall": {
    "SS": [
      "nanairo-narutaki",
      "julia-barnes",
      "layla-jenkins",
      "uruu-namise",
      "kei-ayamine",
      "dorothea-kirkland",
      "sumika-kagami",
      "evi-leenhardt",
      "hiiro-sakakino"
    ],
    "S+": [
      "anis-bennett",
      "elena-pastelkova",
      "saya-shiun",
      "cuilan-liu",
      "kotoha",
      "mikoto-yoroi",
      "rami-kuchiba",
      "kurara-kira",
      "fee-drese",
      "meiya-mitsurugi"
    ],
    "S": [
      "chiyuru-tsukigase",
      "rosie-hughes",
      "lydia-eldridge",
      "xiaohua-jiang",
      "maia-yunagi",
      "yui-takamura",
      "olga-volkova",
      "karina-gentile",
      "sienna-clark",
      "shirona-ichijo",
      "meru-momozono",
      "chizuru-sakaki",
      "julie-stacy",
      "luna-mellow",
      "flute-melville"
    ],
    "A+": [
      "mao-taiga",
      "aoi-ikoma",
      "tarisa-manandal",
      "stella-bremer",
      "harriet-mills",
      "nadya-volkova",
      "lilly-lavoix",
      "lucie-moorcroft",
      "senka-himekawa",
      "shinka-himukai"
    ],
    "A": [
      "tatiana-drozdova",
      "miriam-hayward",
      "laura-kuromori",
      "tama-tamase",
      "noelle-arouet"
    ],
    "B": [
      "kate-fournier",
      "reivel-brightleaf"
    ]
  },
  "maze": {
    "SS": [
      "nanairo-narutaki",
      "rosie-hughes",
      "lydia-eldridge",
      "uruu-namise",
      "kei-ayamine",
      "sumika-kagami",
      "evi-leenhardt",
      "hiiro-sakakino"
    ],
    "S+": [
      "julia-barnes",
      "layla-jenkins",
      "anis-bennett",
      "elena-pastelkova",
      "saya-shiun",
      "sienna-clark",
      "kotoha",
      "meru-momozono",
      "mikoto-yoroi",
      "dorothea-kirkland",
      "julie-stacy",
      "rami-kuchiba",
      "flute-melville"
    ],
    "S": [
      "xiaohua-jiang",
      "mao-taiga",
      "maia-yunagi",
      "stella-bremer",
      "harriet-mills",
      "olga-volkova",
      "cuilan-liu",
      "lilly-lavoix",
      "shirona-ichijo",
      "chizuru-sakaki",
      "kurara-kira",
      "senka-himekawa",
      "fee-drese",
      "luna-mellow",
      "meiya-mitsurugi",
      "shinka-himukai"
    ],
    "A+": [
      "chiyuru-tsukigase",
      "tatiana-drozdova",
      "aoi-ikoma",
      "tarisa-manandal",
      "yui-takamura",
      "miriam-hayward",
      "kate-fournier",
      "karina-gentile",
      "lucie-moorcroft",
      "laura-kuromori",
      "tama-tamase"
    ],
    "A": [
      "nadya-volkova",
      "noelle-arouet"
    ],
    "B": [
      "reivel-brightleaf"
    ]
  },
  "exercise": {
    "SS": [
      "nanairo-narutaki",
      "julia-barnes",
      "uruu-namise",
      "kotoha",
      "dorothea-kirkland",
      "sumika-kagami",
      "evi-leenhardt",
      "hiiro-sakakino"
    ],
    "S+": [
      "layla-jenkins",
      "anis-bennett",
      "elena-pastelkova",
      "tarisa-manandal",
      "yui-takamura",
      "olga-volkova",
      "saya-shiun",
      "sienna-clark",
      "kei-ayamine",
      "mikoto-yoroi",
      "rami-kuchiba",
      "fee-drese",
      "meiya-mitsurugi"
    ],
    "S": [
      "chiyuru-tsukigase",
      "xiaohua-jiang",
      "maia-yunagi",
      "stella-bremer",
      "harriet-mills",
      "cuilan-liu",
      "karina-gentile",
      "shirona-ichijo",
      "meru-momozono",
      "chizuru-sakaki",
      "lucie-moorcroft",
      "julie-stacy",
      "kurara-kira",
      "luna-mellow"
    ],
    "A+": [
      "lydia-eldridge",
      "mao-taiga",
      "aoi-ikoma",
      "nadya-volkova",
      "lilly-lavoix",
      "senka-himekawa",
      "flute-melville",
      "noelle-arouet"
    ],
    "A": [
      "rosie-hughes",
      "tatiana-drozdova",
      "miriam-hayward",
      "kate-fournier",
      "laura-kuromori",
      "reivel-brightleaf",
      "shinka-himukai"
    ],
    "B": [
      "tama-tamase"
    ]
  },
  "nolb": {
    "SS": [
      "nanairo-narutaki",
      "julia-barnes",
      "uruu-namise",
      "kotoha",
      "dorothea-kirkland",
      "kurara-kira",
      "fee-drese",
      "sumika-kagami",
      "evi-leenhardt",
      "hiiro-sakakino"
    ],
    "S+": [
      "rosie-hughes",
      "olga-volkova",
      "meru-momozono"
    ],
    "S": [
      "anis-bennett",
      "xiaohua-jiang",
      "elena-pastelkova",
      "yui-takamura",
      "mikoto-yoroi",
      "luna-mellow",
      "meiya-mitsurugi",
      "flute-melville"
    ],
    "A+": [
      "chiyuru-tsukigase",
      "mao-taiga",
      "maia-yunagi",
      "aoi-ikoma",
      "saya-shiun",
      "lilly-lavoix",
      "shirona-ichijo",
      "kei-ayamine",
      "julie-stacy"
    ],
    "A": [
      "layla-jenkins",
      "lydia-eldridge",
      "tatiana-drozdova",
      "tarisa-manandal",
      "harriet-mills",
      "nadya-volkova",
      "cuilan-liu",
      "karina-gentile",
      "lucie-moorcroft",
      "laura-kuromori",
      "rami-kuchiba",
      "senka-himekawa",
      "tama-tamase"
    ],
    "B": [
      "stella-bremer",
      "kate-fournier",
      "chizuru-sakaki",
      "reivel-brightleaf"
    ],
    "C": [
      "miriam-hayward",
      "sienna-clark",
      "shinka-himukai",
      "noelle-arouet"
    ]
  }
};
