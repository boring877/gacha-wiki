// Journey event choices data - all 46 non-NPC/Bunny reward events with requirements, rewards, and best choice analysis

export const JOURNEY_EVENTS = [
  {
    id: 'noa-breaktime',
    category: 'Choice',
    name: 'Rare Day Off',
    description: 'It was a rare day off, but nothing in particular came to mind to do.',
    choices: [
      {
        text: "Let's go try that limited-time dessert!",
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Condition', label: 'Condition +2', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'How about watching the new movie that came out?',
        best: true,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: "Should we pack some sandwiches and go on a picnic?",
        best: false,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's just take it easy and rest today.",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-aida-00a',
    category: 'Random Aida',
    name: "Aida's Surprise Encounter",
    description: 'Muhuhu. What a surprise meeting you here.',
    choices: [
      {
        text: 'The ominously glowing red potion.',
        best: true,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Focus +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Stat', label: 'Power -10', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality -10', outcome: 'failure' },
          { type: 'Stat', label: 'Endurance -10', outcome: 'failure' },
          { type: 'Stat', label: 'Focus -10', outcome: 'failure' },
          { type: 'Stat', label: 'Protect -10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'Item', label: 'Item +1', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Red Potion)', outcome: 'failure' },
        ],
      },
      {
        text: 'The chilling blue potion.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Blue Potion)', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -20', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'Item', label: 'Item +1', outcome: 'failure' },
        ],
      },
      {
        text: 'The dazzling golden-yellow potion.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Buff', label: 'Debuff (Yellow Potion)', outcome: 'failure' },
          { type: 'Item', label: 'Item +1', outcome: 'failure' },
        ],
      },
      {
        text: 'The plain-looking drink sitting to the side.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-charm-00a',
    category: 'Random Charm',
    name: 'Unusual Quest Board Posting',
    description: 'While checking the quest board at Candle Square, I found a rather unusual posting.',
    choices: [
      {
        text: 'Accept the trade.',
        best: true,
        requirement: { type: 'item', label: 'Item x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Coins', label: 'Coins +50', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-cheer-00a',
    category: 'Random Cheer',
    name: 'Cool Towel Delivery',
    description: 'I brought you a cool towel.',
    choices: [
      {
        text: "Throw all I've got into training and believe it pays off!",
        best: true,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Buff', label: 'Buff (Cheer Success)', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +5', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Cheer Failure)', outcome: 'failure' },
        ],
      },
      {
        text: 'Train a bit more than usual.',
        best: false,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-encounter-00a',
    category: 'Random Encounter',
    name: 'Street Covered in Slimes',
    description: 'The entire street was covered in slimes!',
    choices: [
      {
        text: "Let's help drive out the slimes.",
        best: true,
        requirement: { type: 'stat', stat: 'Focus', threshold: 60 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Power +5', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +5', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +5', outcome: 'success' },
        ],
      },
      {
        text: "Let's assist with the evacuation.",
        best: false,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00a',
    category: 'Random Find',
    name: 'Mysterious Dig Site',
    description: 'Maybe we got too caught up in training -- before we knew it, the entire training ground floor had been dug up.',
    choices: [
      {
        text: "It'll take some effort... but let's dig it up!",
        best: true,
        requirement: { type: 'stamina', cost: 10 },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-lisseth-00a',
    category: 'Random Lisseth',
    name: "Lisseth's Box Game",
    description: 'Right or left? Please pick the box you like!',
    choices: [
      {
        text: 'Insert the ticket in the left box.',
        best: true,
        requirement: { type: 'item', label: 'Ticket x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +150', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Insert the ticket in the right box.',
        best: false,
        requirement: { type: 'item', label: 'Ticket x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +150', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-supply-00a',
    category: 'Random Supply',
    name: 'Observer Supply Delivery',
    description: 'When I returned to Candle Square after finishing the day\'s schedule, an unfamiliar Observer greeted me.',
    choices: [
      {
        text: 'Ask for supplements.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Ask for the soft pillow.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Ask for spicy food.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-training-00a',
    category: 'Random Training',
    name: 'Underwhelming Journey Progress',
    description: 'Lately, our progress in the [Journey] has been underwhelming.',
    choices: [
      {
        text: 'How to master the punching machine.',
        best: true,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Punch Training)', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'How to run without tiring.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Running Training)', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-aida-00b',
    category: 'Random Aida',
    name: 'Suspicious Outsider at Training',
    description: 'While we were deeply focused on training, a suspicious outsider appeared.',
    choices: [
      {
        text: "Guess we're drinking it, then!",
        best: true,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'Stat', label: 'Power -10', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality -10', outcome: 'failure' },
          { type: 'Stat', label: 'Endurance -10', outcome: 'failure' },
        ],
      },
      {
        text: "I'll take the normal drink.",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-encounter-00b',
    category: 'Random Encounter',
    name: 'Leaf-Covered Trap',
    description: 'We fell straight into a trap covered with leaves!',
    choices: [
      {
        text: "Let's teach them a lesson!",
        best: true,
        requirement: { type: 'stat', stat: 'Power', threshold: 300 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's try talking them down.",
        best: false,
        requirement: { type: 'pp', cost: 10 },
        rewards: [
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00b',
    category: 'Random Find',
    name: 'Old Box Notice',
    description: 'While checking the quest board, I found a notice seeking an old box.',
    choices: [
      {
        text: "Let's open it.",
        best: true,
        requirement: { type: 'item', label: 'Old Box x1' },
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-supply-00b',
    category: 'Random Supply',
    name: 'Observer Satisfaction Survey',
    description: 'The Observer from the [Journey] support department, whom I\'d met before, came by again.',
    choices: [
      {
        text: 'Survey Response: Good',
        best: false,
        rewards: [
          { type: 'Coins', label: 'Coins +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
      {
        text: 'Survey Response: Average',
        best: true,
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
        ],
      },
      {
        text: 'Survey Response: Poor',
        best: false,
        rewards: [
          { type: 'Coins', label: 'Coins +20', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-training-00b',
    category: 'Random Training',
    name: 'Secret Training Graduation',
    description: "It's been quite some time since we began the secret training from hell.",
    choices: [
      {
        text: "I won't forget what I've learned.",
        best: true,
        requirement: { type: 'item', label: 'Training Item x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-encounter-00c',
    category: 'Random Encounter',
    name: 'Surrounded by Armed Knights',
    description: 'Suddenly, we found ourselves surrounded by armed knights.',
    choices: [
      {
        text: "Let's take them down!",
        best: true,
        requirement: { type: 'stat', stat: 'Health', threshold: 300 },
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
        ],
      },
      {
        text: 'I hope this helps our future cooperation.',
        best: false,
        requirement: { type: 'coin', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00c',
    category: 'Random Find',
    name: 'Mysterious Statue',
    description: 'On the way to complete a quest, we came across a statue we\'d never seen before.',
    choices: [
      {
        text: 'Pray to the woman holding the sword.',
        best: true,
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality -20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Pray to the woman holding the flowers.',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Power -20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-training-00c',
    category: 'Random Training',
    name: 'Secret Training Completion',
    description: "It's been quite some time since we began the secret training from hell.",
    choices: [
      {
        text: "I won't forget what I've learned.",
        best: true,
        requirement: { type: 'item', label: 'Training Item x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00c',
    category: 'Random Weather',
    name: 'Perfect Weather',
    description: 'The weather couldn\'t be better today.',
    choices: [
      {
        text: 'I have to enjoy the peace and quiet while I can.',
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +15', outcome: 'failure' },
        ],
      },
      {
        text: "I shouldn't deviate from my plans.",
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +5', outcome: 'success' },
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-find-00d',
    category: 'Random Find',
    name: 'Glowing Flower in Supplies',
    description: 'While organizing supplies, a faint, unfamiliar light began to shine from the back of the room.',
    choices: [
      {
        text: 'Pick up the flower.',
        best: true,
        requirement: { type: 'item', label: 'Flower x1' },
        rewards: [
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +20', outcome: 'failure' },
          { type: 'Stat', label: 'Power +10', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Flower Curse)', outcome: 'failure' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00d',
    category: 'Random Weather',
    name: 'Thick Training Fog',
    description: 'During training, a thick fog rolled in, dense enough to make it hard to see even a few steps ahead.',
    choices: [
      {
        text: "It's just a little less visibility, that's all!",
        best: true,
        rewards: [
          { type: 'Stat', label: 'Focus +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'failure' },
          { type: 'Stat', label: 'Protect +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
      {
        text: 'We should head back to the quarters since it\'s dangerous.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00d-current',
    category: 'Random Weather',
    name: 'Thick Training Fog (Current)',
    description: 'Dense fog during training -- same event but triggers mid-run.',
    choices: [
      {
        text: "It's just a little less visibility, that's all!",
        best: true,
        rewards: [
          { type: 'Stat', label: 'Focus +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'failure' },
          { type: 'Stat', label: 'Protect +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
        ],
      },
      {
        text: 'We should head back to the quarters since it\'s dangerous.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-find-00e',
    category: 'Random Find',
    name: 'Glowing Sword in Supplies',
    description: 'While organizing supplies, a faint, unfamiliar light began to shine from the back of the room.',
    choices: [
      {
        text: 'Pick up the sword.',
        best: true,
        requirement: { type: 'item', label: 'Sword x1' },
        rewards: [
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +20', outcome: 'success' },
          { type: 'Stat', label: 'Power +20', outcome: 'failure' },
          { type: 'Stat', label: 'Vitality +10', outcome: 'failure' },
          { type: 'Buff', label: 'Debuff (Sword Curse)', outcome: 'failure' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00e',
    category: 'Random Weather',
    name: 'Thunder and Lightning',
    description: 'During training, thunder suddenly roared and lightning flashed across the sky overhead.',
    choices: [
      {
        text: "I'm not backing down from a little thunder and lightning!",
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
        ],
      },
      {
        text: 'We should find shelter instead of pushing ourselves.',
        best: false,
        rewards: [
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00e-current',
    category: 'Random Weather',
    name: 'Thunder and Lightning (Current)',
    description: 'Thunder and lightning during training -- same event but triggers mid-run.',
    choices: [
      {
        text: "I'm not backing down from a little thunder and lightning!",
        best: true,
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
          { type: 'PP', label: 'PP +30', outcome: 'failure' },
        ],
      },
      {
        text: 'We should find shelter instead of pushing ourselves.',
        best: false,
        rewards: [
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-find-00f',
    category: 'Random Find',
    name: 'Captain, May I Have a Moment?',
    description: 'Captain, may I have a moment of your time?',
    choices: [
      {
        text: 'Sell the relic to the Order.',
        best: true,
        requirement: { type: 'item', label: 'Relic x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +80', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00g2',
    category: 'Random Weather',
    name: 'Suffocating Heat (Bound)',
    description: 'The suffocating heat wrapped around the quarters like a thick blanket.',
    choices: [
      {
        text: "Let's use a handy fan.",
        best: true,
        requirement: { type: 'item', label: 'Fan x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: "I'll power through it.",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-find-00g',
    category: 'Random Find',
    name: "Aida's Relic",
    description: 'Muhuhu. You caught me.',
    choices: [
      {
        text: 'Strike it with moderate force.',
        best: true,
        requirement: { type: 'item', label: 'Relic x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
        ],
      },
      {
        text: 'Hit it with full power.',
        best: false,
        requirement: { type: 'item', label: 'Relic x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
        ],
      },
      {
        text: 'Say that relics need to be handled with care.',
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'random-weather-00g',
    category: 'Random Weather',
    name: 'Suffocating Heat',
    description: 'The suffocating heat wrapped around the quarters like a thick blanket.',
    choices: [
      {
        text: "Let's use a handy fan.",
        best: true,
        requirement: { type: 'item', label: 'Fan x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: "I'll power through it.",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition -1', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00h2',
    category: 'Random Weather',
    name: 'Heavy Snowfall (Bound)',
    description: 'The temperature suddenly plummeted, and a heavy snowfall began.',
    choices: [
      {
        text: "Let's use a hand warmer.",
        best: true,
        requirement: { type: 'item', label: 'Hand Warmer x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: 'Enduring the cold... could be its own kind of training!',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'random-weather-00h',
    category: 'Random Weather',
    name: 'Heavy Snowfall',
    description: 'The temperature suddenly plummeted, and a heavy snowfall began.',
    choices: [
      {
        text: "Let's use a hand warmer.",
        best: true,
        requirement: { type: 'item', label: 'Hand Warmer x1' },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'Stat', label: 'Protect +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
      {
        text: 'Enduring the cold... could be its own kind of training!',
        best: false,
        rewards: [
          { type: 'Stat', label: 'Endurance +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Remove Buff', label: 'Remove Positive Buff', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-06-apocalypse',
    category: 'Standby',
    name: 'Apocalypse Part-Time Help',
    description: 'With the [basic trial] looming ahead, I stopped by [Apocalypse].',
    choices: [
      {
        text: "Let's help her.",
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Apocalypse Worker)', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-09-crowd',
    category: 'Standby',
    name: 'Crowd at the Quest',
    description: 'On the way to fulfill a quest, I spotted a crowd gathered ahead.',
    choices: [
      {
        text: 'Buy one.',
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +15', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Look for a weak spot.',
        best: false,
        requirement: { type: 'stat', stat: 'Focus', threshold: 30 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +15', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Take on the challenge.',
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Buff', label: 'Buff (Legend Savior PP)', outcome: 'success' },
          { type: 'Stat', label: 'Power +20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'Just walk past.',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-12-sale',
    category: 'Standby',
    name: 'Lisa\'s Cosmetics Sale',
    description: 'Welcome! Today we\'re holding a special cosmetics sale!',
    choices: [
      {
        text: 'Buy it for her.',
        best: true,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'Item', label: 'Item +1 (Cosmetic A)', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1 (Cosmetic B)', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Item', label: 'Item +1 (Cosmetic C)', outcome: 'success' },
          { type: 'Stat', label: 'Protect +5', outcome: 'success' },
          { type: 'Stat', label: 'Focus +5', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-18-boulder',
    category: 'Standby',
    name: 'Labyrinth Boulder',
    description: 'While tracking traces of the ancient construct deep into the labyrinth, I found the passage blocked by a massive boulder.',
    choices: [
      {
        text: 'Would this amount be enough?',
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +20', outcome: 'success' },
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: 'What if I operate the crane myself?',
        best: true,
        requirement: { type: 'stat', stat: 'Protect', threshold: 50 },
        rewards: [
          { type: 'Stat', label: 'Endurance +20', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-19-underground',
    category: 'Standby',
    name: 'Underground Construct Sensing',
    description: 'While searching for traces of the ancient construct deep underground, I sensed something strange.',
    choices: [
      {
        text: 'Use the terrain to evade it.',
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'SE Potential', label: 'SE Potential #20004', outcome: 'success' },
        ],
      },
      {
        text: 'Stay calm and focus on defense.',
        best: false,
        requirement: { type: 'stat', stat: 'Endurance', threshold: 125 },
        rewards: [
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-26-lisette',
    category: 'Standby',
    name: 'Lisette Wants Cotton Candy',
    description: 'Ah! Welcome! What can I get you?',
    choices: [
      {
        text: 'Well, wandering around to find it sounds fun in itself.',
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'Stat', label: 'Focus +30', outcome: 'success' },
          { type: 'Stat', label: 'Protect +15', outcome: 'success' },
          { type: 'Buff', label: 'Buff (Sweet Taste)', outcome: 'success' },
        ],
      },
      {
        text: "There's a place nearby.",
        best: false,
        rewards: [
          { type: 'Stat', label: 'Focus +8', outcome: 'success' },
          { type: 'Stat', label: 'Protect +8', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-31a-florian',
    category: 'Standby',
    name: 'Florian Tourist Challenge',
    description: "Haven't seen your faces before. Tourists?",
    choices: [
      {
        text: "Target the opponent's weak spots.",
        best: true,
        requirement: { type: 'stat', stat: 'Power', threshold: 200 },
        rewards: [
          { type: 'Stat', label: 'Vitality +10', outcome: 'success' },
          { type: 'Stat', label: 'Focus +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "Play to our team's strengths.",
        best: false,
        requirement: { type: 'stat', stat: 'Focus', threshold: 100 },
        rewards: [
          { type: 'Stat', label: 'Vitality +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Overwhelm them with momentum.',
        best: false,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Focus +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "...We'll figure it out somehow!",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-31b-kheldor',
    category: 'Standby',
    name: 'Kheldor Festival',
    description: 'Hey! I told you this pillar should go a little more to the right!',
    choices: [
      {
        text: "Can't say no to a bear!",
        best: true,
        requirement: { type: 'stat', stat: 'Health', threshold: 200 },
        rewards: [
          { type: 'Stat', label: 'Power +10', outcome: 'success' },
          { type: 'Stat', label: 'Protect +10', outcome: 'success' },
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "It's traditional food time!",
        best: false,
        requirement: { type: 'stat', stat: 'Protect', threshold: 100 },
        rewards: [
          { type: 'Stat', label: 'Power +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'We should head to our quarters now.',
        best: false,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'Stat', label: 'Protect +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Time to run for it!',
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-32a-florian-waiting',
    category: 'Standby',
    name: 'Waiting Room Visitor',
    description: 'While we were resting in the waiting room, someone approached us.',
    choices: [
      {
        text: 'Grab a good meal first.',
        best: false,
        requirement: { type: 'coin', cost: 80 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +40', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: 'Take a few deep breaths to relax.',
        best: true,
        requirement: { type: 'stat', stat: 'Focus', threshold: 125 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Power +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: 'Do our best, like always.',
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-32b-kheldor-monsters',
    category: 'Standby',
    name: 'Prowling Monsters',
    description: 'Among the monsters that swarmed here before, some are still prowling around this area.',
    choices: [
      {
        text: 'What if we lure them with bait?',
        best: false,
        requirement: { type: 'coin', cost: 80 },
        rewards: [
          { type: 'Stamina', label: 'Stamina +40', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
      {
        text: "Let's find out why they won't leave.",
        best: true,
        requirement: { type: 'stat', stat: 'Protect', threshold: 125 },
        rewards: [
          { type: 'Condition', label: 'Condition +1', outcome: 'success' },
          { type: 'Stat', label: 'Vitality +30', outcome: 'success' },
          { type: 'PP', label: 'PP +20', outcome: 'success' },
        ],
      },
      {
        text: "Let's team up with the locals.",
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-37-safe-key',
    category: 'Standby',
    name: 'Lost Safe Key',
    description: 'I was supposed to finish the settlement report and contact the head office today, but I lost the key to the safe. I can\'t open it.',
    choices: [
      {
        text: "Could this be the safe key you're looking for?",
        best: true,
        requirement: { type: 'item', label: 'Safe Key x1' },
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
      {
        text: 'How about calling a skilled locksmith?',
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +15', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-hard-future',
    category: 'Standby',
    name: 'Fierce-Looking Woman',
    description: 'As I walked along, a woman with a fierce look approached and spoke to me.',
    choices: [
      {
        text: "I'll hold onto it.",
        best: true,
        rewards: [
          { type: 'Item', label: 'Item +1', outcome: 'success' },
        ],
      },
      {
        text: "I'll pass.",
        best: false,
        rewards: [
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-hard-mystery',
    category: 'Standby',
    name: 'Mysterious Tome Merchant',
    description: "It's a pleasure to meet you, Journey Captain. Is there anything you're looking for?",
    choices: [
      {
        text: 'A tome suited for offense.',
        best: true,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21001', outcome: 'success' },
        ],
      },
      {
        text: 'A tome focused on survival.',
        best: false,
        requirement: { type: 'coin', cost: 30 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21002', outcome: 'success' },
        ],
      },
      {
        text: 'Is there one useful in any situation?',
        best: false,
        requirement: { type: 'coin', cost: 50 },
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21004', outcome: 'success' },
        ],
      },
      {
        text: "I don't need anything.",
        best: false,
        rewards: [
          { type: 'SE Potential', label: 'SE Potential #21008', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'standby-hard-select01',
    category: 'Standby',
    name: 'Journey Strategy Discussion',
    description: 'Captain! Have you brainstormed any plans for progressing through the [Journey]?',
    choices: [
      {
        text: 'A training manual that helps with offense',
        best: true,
        rewards: [
          { type: 'Item', label: 'Item +1 (Offense Manual)', outcome: 'success' },
        ],
      },
      {
        text: 'A training manual that helps with survival',
        best: false,
        rewards: [
          { type: 'Item', label: 'Item +1 (Survival Manual)', outcome: 'success' },
        ],
      },
      {
        text: 'A training manual that helps in various situations',
        best: false,
        rewards: [
          { type: 'Item', label: 'Item +1 (Versatile Manual)', outcome: 'success' },
        ],
      },
    ],
    hasRisk: false,
  },
  {
    id: 'request-defeat',
    category: 'Request',
    name: 'Quest Failure Recovery',
    description: '[CHARACTER_NAME] looked unwell after failing the quest.',
    choices: [
      {
        text: "Let's head back...",
        best: false,
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -10', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
        ],
      },
      {
        text: 'Hand out a Vitality Potion.',
        best: true,
        requirement: { type: 'item', label: 'Vitality Potion x1' },
        rewards: [
          { type: 'Coins', label: 'Coins +30', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
          { type: 'Coins', label: 'Coins +30', outcome: 'failure' },
          { type: 'PP', label: 'PP +10', outcome: 'failure' },
          { type: 'Stamina', label: 'Stamina -5', outcome: 'failure' },
        ],
      },
    ],
    hasRisk: true,
  },
  {
    id: 'training-failure',
    category: 'Training Failure',
    name: 'Training Gone Wrong',
    description: 'As Captain, what should I do?',
    choices: [
      {
        text: "Let's call it a day.",
        best: false,
        rewards: [
          { type: 'Stamina', label: 'Stamina +5', outcome: 'success' },
          { type: 'Stamina', label: 'Stamina +5', outcome: 'failure' },
          { type: 'Condition', label: 'Condition -1', outcome: 'failure' },
        ],
      },
      {
        text: "Let's train safely.",
        best: true,
        requirement: { type: 'stamina', cost: 20 },
        rewards: [
          { type: 'PP', label: 'PP +15', outcome: 'success' },
          { type: 'Buff', label: 'Buff (Training Success Up)', outcome: 'success' },
          { type: 'PP', label: 'PP +15', outcome: 'failure' },
        ],
      },
      {
        text: 'Hand out a Vitality Potion.',
        best: false,
        requirement: { type: 'item', label: 'Vitality Potion x1' },
        rewards: [
          { type: 'Stamina', label: 'Stamina +30', outcome: 'success' },
          { type: 'PP', label: 'PP +10', outcome: 'success' },
        ],
      },
    ],
    hasRisk: true,
  },
];
