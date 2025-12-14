// Consolidated character upgrade requirements for Stella Sora
// This file contains all upgrade and skill upgrade requirements for each character

// ============================================
// UPGRADE ITEMS DATABASE
// ============================================

export const upgradeItems = {
  20003: { id: 20003, name: "Forest Elf Fang", image: "forest-elf-fang" },
  20013: { id: 20013, name: "Crimson Tempter", image: "crimson-tempter" },
  20023: { id: 20023, name: "Colossus Core", image: "colossus-core" },
  20043: { id: 20043, name: "Wrath Beauty", image: "wrath-beauty" },
  20053: { id: 20053, name: "Radiant Feather Crown", image: "radiant-feather-crown" },
  20063: { id: 20063, name: "Nightlit Haven", image: "nightlit-haven" },
  20071: { id: 20071, name: "Backstage Ragged Hat", image: "backstage-ragged-hat" },
  20072: { id: 20072, name: "Spotlight Bowler", image: "spotlight-bowler" },
  20073: { id: 20073, name: "Exeunt Bowler", image: "exeunt-bowler" },
  20081: { id: 20081, name: "Count's Rewards", image: "counts-rewards" },
  20082: { id: 20082, name: "Count's Cellaring", image: "counts-cellaring" },
  20083: { id: 20083, name: "Count's Gift", image: "counts-gift" },
  20091: { id: 20091, name: "Faint Wick", image: "faint-wick" },
  20092: { id: 20092, name: "Lumen Essence", image: "lumen-essence" },
  20093: { id: 20093, name: "Eternal Gloom Core", image: "eternal-gloom-core" },
  21003: { id: 21003, name: "Forest Elf Essence", image: "forest-elf-essence" },
  21013: { id: 21013, name: "Evil Bloom Essence", image: "evil-bloom-essence" },
  21023: { id: 21023, name: "Colossus Essence", image: "colossus-essence" },
  21043: { id: 21043, name: "Wind Essence", image: "wind-essence" },
  21053: { id: 21053, name: "Radiant Crown Essence", image: "radiant-crown-essence" },
  21063: { id: 21063, name: "Tidal Essence", image: "tidal-essence" },
  32000: { id: 32000, name: "Chess Piece of Skill", image: "chess-piece-of-skill" },
  32001: { id: 32001, name: "Tapping Game Cartridge", image: "tapping-game-cartridge" },
  32002: { id: 32002, name: "Rhythm Game Cartridge", image: "rhythm-game-cartridge" },
  32003: { id: 32003, name: "Magic Sound Game Cartridge", image: "magic-sound-game-cartridge" },
  32011: { id: 32011, name: "Shooter Game Cartridge", image: "shooter-game-cartridge" },
  32012: { id: 32012, name: "Barrage Game Cartridge", image: "barrage-game-cartridge" },
  32013: { id: 32013, name: "Demon Bee Game Cartridge", image: "demon-bee-game-cartridge" },
  32021: { id: 32021, name: "Kung Fu Game Cartridge", image: "kung-fu-game-cartridge" },
  32022: { id: 32022, name: "Fighting Game Cartridge", image: "fighting-game-cartridge" },
  32023: { id: 32023, name: "Phantom Game Cartridge", image: "phantom-game-cartridge" },
};

// ============================================
// CHARACTER UPGRADES
// ============================================

export const amberUpgrades = {
  name: "Amber",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const annUpgrades = {
  name: "Ann",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const canaceUpgrades = {
  name: "Canace",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20043,
                  "name": "Wrath Beauty",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const caramelUpgrades = {
  name: "Caramel",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const chitoseUpgrades = {
  name: "Chitose",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const chixiaUpgrades = {
  name: "Chixia",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const coronisUpgrades = {
  name: "Coronis",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const cosetteUpgrades = {
  name: "Cosette",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20013,
                  "name": "Crimson Tempter",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const floraUpgrades = {
  name: "Flora",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const freesiaUpgrades = {
  name: "Freesia",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const fuyukaUpgrades = {
  name: "Fuyuka",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20023,
                  "name": "Colossus Core",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const gerieUpgrades = {
  name: "Gerie",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21003,
                  "name": "Forest Elf Essence",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21003,
                  "name": "Forest Elf Essence",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21003,
                  "name": "Forest Elf Essence",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21003,
                  "name": "Forest Elf Essence",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const irisUpgrades = {
  name: "Iris",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const jinglinUpgrades = {
  name: "Jinglin",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const kasimiraUpgrades = {
  name: "Kasimira",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21023,
                  "name": "Colossus Essence",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const laruUpgrades = {
  name: "Laru",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const minovaUpgrades = {
  name: "Minova",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32021,
                  "name": "Kung Fu Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 1
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 2
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 3
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 6
              },
              {
                  "id": 32022,
                  "name": "Fighting Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32023,
                  "name": "Phantom Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const mistiqueUpgrades = {
  name: "Mistique",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21013,
                  "name": "Evil Bloom Essence",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const nanohaUpgrades = {
  name: "Nanoha",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const nazukaUpgrades = {
  name: "Nazuka",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const nazunaUpgrades = {
  name: "Nazuna",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const noyaUpgrades = {
  name: "Noya",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21043,
                  "name": "Wind Essence",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const ridgeUpgrades = {
  name: "Ridge",
  upgrades: [
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 5
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 10
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 15
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 20
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20091,
                  "name": "Faint Wick",
                  "quantity": 30
              },
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 55
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 75
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20092,
                  "name": "Lumen Essence",
                  "quantity": 95
              },
              {
                  "id": 20093,
                  "name": "Eternal Gloom Core",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20003,
                  "name": "Forest Elf Fang",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const shiaUpgrades = {
  name: "Shia",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20053,
                  "name": "Radiant Feather Crown",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const shimiaoUpgrades = {
  name: "Shimiao",
  upgrades: [
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 5
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 10
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 15
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 20
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20071,
                  "name": "Backstage Ragged Hat",
                  "quantity": 30
              },
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 55
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 75
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20072,
                  "name": "Spotlight Bowler",
                  "quantity": 95
              },
              {
                  "id": 20073,
                  "name": "Exeunt Bowler",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32011,
                  "name": "Shooter Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 1
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 2
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 3
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21063,
                  "name": "Tidal Essence",
                  "quantity": 6
              },
              {
                  "id": 32012,
                  "name": "Barrage Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32013,
                  "name": "Demon Bee Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const teresaUpgrades = {
  name: "Teresa",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 20063,
                  "name": "Nightlit Haven",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

export const tiliaUpgrades = {
  name: "Tilia",
  upgrades: [
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              }
          ],
          "currency": {
              "dorra": 7900
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 5
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 19800
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 10
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 15
              }
          ],
          "currency": {
              "dorra": 44400
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 15
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 25
              }
          ],
          "currency": {
              "dorra": 66600
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 20
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 40
              }
          ],
          "currency": {
              "dorra": 146100
          }
      },
      {
          "items": [
              {
                  "id": 20081,
                  "name": "Count's Rewards",
                  "quantity": 30
              },
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 55
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 20
              }
          ],
          "currency": {
              "dorra": 291600
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 75
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 30
              }
          ],
          "currency": {
              "dorra": 560200
          }
      },
      {
          "items": [
              {
                  "id": 20082,
                  "name": "Count's Cellaring",
                  "quantity": 95
              },
              {
                  "id": 20083,
                  "name": "Count's Gift",
                  "quantity": 50
              }
          ],
          "currency": {
              "dorra": 1121300
          }
      },
      {
          "items": [],
          "currency": {
              "dorra": 1121300
          }
      }
  ],
  skillUpgrades: [
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 2
              }
          ],
          "currency": {
              "dorra": 13300
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 12
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 6
              }
          ],
          "currency": {
              "dorra": 17600
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 24
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 3
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 10
              }
          ],
          "currency": {
              "dorra": 49800
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 38
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 8
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 24
              }
          ],
          "currency": {
              "dorra": 100000
          }
      },
      {
          "items": [
              {
                  "id": 32001,
                  "name": "Tapping Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 14
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 6
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 55
              }
          ],
          "currency": {
              "dorra": 400000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 1
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 18
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 232
              }
          ],
          "currency": {
              "dorra": 900000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 2
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 90
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 34
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 323
              }
          ],
          "currency": {
              "dorra": 1600000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 3
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 140
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 50
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 478
              }
          ],
          "currency": {
              "dorra": 2300000
          }
      },
      {
          "items": [
              {
                  "id": 21053,
                  "name": "Radiant Crown Essence",
                  "quantity": 6
              },
              {
                  "id": 32002,
                  "name": "Rhythm Game Cartridge",
                  "quantity": 200
              },
              {
                  "id": 32003,
                  "name": "Magic Sound Game Cartridge",
                  "quantity": 70
              },
              {
                  "id": 32000,
                  "name": "Chess Piece of Skill",
                  "quantity": 927
              }
          ],
          "currency": {
              "dorra": 3400000
          }
      }
  ]
};

// ============================================
// COMBINED EXPORTS
// ============================================

export const allCharacterUpgrades = {
  amber: amberUpgrades,
  ann: annUpgrades,
  canace: canaceUpgrades,
  caramel: caramelUpgrades,
  chitose: chitoseUpgrades,
  chixia: chixiaUpgrades,
  coronis: coronisUpgrades,
  cosette: cosetteUpgrades,
  flora: floraUpgrades,
  freesia: freesiaUpgrades,
  fuyuka: fuyukaUpgrades,
  gerie: gerieUpgrades,
  iris: irisUpgrades,
  jinglin: jinglinUpgrades,
  kasimira: kasimiraUpgrades,
  laru: laruUpgrades,
  minova: minovaUpgrades,
  mistique: mistiqueUpgrades,
  nanoha: nanohaUpgrades,
  nazuka: nazukaUpgrades,
  nazuna: nazunaUpgrades,
  noya: noyaUpgrades,
  ridge: ridgeUpgrades,
  shia: shiaUpgrades,
  shimiao: shimiaoUpgrades,
  teresa: teresaUpgrades,
  tilia: tiliaUpgrades,
};

// Helper function to get character upgrades by name
export const getCharacterUpgrades = (name) => {
  const key = name.toLowerCase();
  return allCharacterUpgrades[key] || null;
};

// Helper function to get item info by ID
export const getUpgradeItem = (id) => {
  return upgradeItems[id] || null;
};

export default allCharacterUpgrades;
