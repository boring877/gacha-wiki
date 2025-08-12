// Zone Nova Survey Data
// Official surveys and their translations

export const ZONE_NOVA_SURVEYS = [
  {
    id: 'popularity-voting-1',
    title: 'ZoneNova 1st Best Popularity Award Voting',
    slug: 'popularity-voting-1',
    url: '/guides/zone-nova/surveys/popularity-voting-1/',
    description:
      'The first ZoneNova popularity voting event where players vote for their favorite characters. Includes reward information and voting guidelines.',
    meta: '1 Question • Character Popularity Voting',
    icon: '',
    status: 'active',
    totalQuestions: 1,
    externalLink: 'https://www.surveycake.com/s/lGYe1',
    image: 'survey3.jpg',
    endDate: '2025/08/26 23:59 (UTC+8)',
    reward: 'Energy Cube x1',
    sections: [
      {
        id: 'voting-info',
        title: 'Popularity Voting Information',
        questionCount: 1,
        questions: [
          {
            id: 1,
            title: 'Please select your favorite character to vote for',
            type: 'external',
            externalLink: 'https://www.surveycake.com/s/lGYe1',
            note: 'Click the link above to access the official voting form',
          },
        ],
      },
    ],
  },
  {
    id: 'player-survey-1',
    title: 'General Player Survey #1',
    slug: 'player-survey-1',
    url: '/guides/zone-nova/surveys/player-survey-1/',
    description:
      'Comprehensive survey covering player demographics, character preferences, content preferences, gameplay experience, and improvement suggestions. Includes adult content preferences section.',
    meta: '23 Questions • Demographics, Preferences, Gameplay',
    icon: '',
    status: 'active',
    totalQuestions: 23,
    sections: [
      {
        id: 'demographic',
        title: 'Demographic Information',
        questionCount: 2,
        questions: [
          {
            id: 1,
            title: 'Please select your gender',
            type: 'single',
            options: ['Male', 'Female', 'Other'],
          },
          {
            id: 2,
            title: 'Please select your age group',
            type: 'single',
            options: [
              '18-20 years old',
              '21-25 years old',
              '26-30 years old',
              '31-35 years old',
              '36-40 years old',
              '40+ years old',
            ],
          },
        ],
      },
      {
        id: 'character-preferences',
        title: 'Character Preferences',
        questionCount: 4,
        questions: [
          {
            id: 3,
            title: 'Which character personalities do you like (1/2)? [Multiple choice]',
            type: 'multiple',
            options: [
              'Beautiful girl',
              'Big sister type',
              'Mature woman',
              'Arrogant',
              'Weak/frail',
              'Strong/tough',
              'Adventurous',
              'Sickly',
              'Natural/airhead',
              'Dark/scheming',
            ],
          },
          {
            id: 4,
            title: 'Which character personalities do you like (2/2)? [Multiple choice]',
            type: 'multiple',
            options: [
              'Poor/impoverished',
              'Busty',
              'Perverted woman',
              'Gentle',
              'Natural cute',
              'Little devil type',
              'Chuunibyou',
              'Inhuman',
              'Other',
            ],
          },
          {
            id: 5,
            title: 'Which female character body types do you like (1/2)? [Multiple choice]',
            type: 'multiple',
            options: [
              'Flat chest',
              'Normal bust',
              'Busty',
              'Super busty',
              'Hidden busty',
              'A4 waist',
              'Small belly',
              'Fair skin',
              'Childbearing type',
              'Beautiful buttocks',
            ],
          },
          {
            id: 6,
            title: 'Which female character body types do you like (2/2)? [Multiple choice]',
            type: 'multiple',
            options: [
              'Plump buttocks',
              'Plump body type',
              'Tall',
              'Big thighs',
              'Muscular woman',
              'Other',
            ],
          },
        ],
      },
      {
        id: 'content-preferences',
        title: 'Content Preferences',
        questionCount: 2,
        adultContent: true,
        questions: [
          {
            id: 7,
            title: 'Do you like R18 content (1/2)? [Multiple choice]',
            type: 'multiple',
            adult: true,
            options: [
              'Kissing',
              'Anal',
              'Oral',
              'Breast play',
              'Footjob',
              'Deep throat',
              'Facial',
              'Oral climax',
              'Squirting',
              'Submission',
            ],
          },
          {
            id: 8,
            title: 'Do you like R18 content (2/2)? [Multiple choice]',
            type: 'multiple',
            adult: true,
            options: [
              'Creampie',
              'Exhibitionism',
              'Training/domination',
              'Multiple partners',
              'Other',
            ],
          },
        ],
      },
      {
        id: 'gameplay-experience',
        title: 'Gameplay Experience',
        questionCount: 9,
        questions: [
          {
            id: 9,
            title: "How much time do you spend on 'ZONE NOVA' daily?",
            type: 'single',
            options: ['Under 5 minutes', '5-15 minutes', '15-30 minutes', 'Over 30 minutes'],
          },
          {
            id: 10,
            title: "How did you learn about 'ZONE NOVA'?",
            type: 'single',
            options: [
              'Gaming platforms (EROLABS/JS GAME/H365/etc.)',
              'SNS platforms (Facebook/Weibo/X/etc.)',
              'Online advertising',
              'Friend recommendation',
              'Other',
            ],
          },
          {
            id: 11,
            title: "Which part of 'ZONE NOVA' interests you most?",
            type: 'single',
            options: [
              'Game type (4-person team battles)',
              'Character design',
              'Story/worldview',
              'R18 content',
              'Other',
            ],
          },
          {
            id: 12,
            title: "How do you feel about 'ZONE NOVA's' battle controls?",
            type: 'single',
            options: [
              'Simple and intuitive for using skills and switching characters',
              'Understandable, operations are fairly smooth',
              'Hard to understand, controls are clunky',
              "Completely don't understand",
            ],
          },
          {
            id: 13,
            title: 'What battle modes do you like? [Max 3 choices]',
            type: 'multiple',
            maxChoices: 3,
            options: [
              'Main story',
              'Dungeons',
              'Arena',
              'Fang Mie battles',
              'Space-time rifts',
              'Trials',
              'Competitive arena',
            ],
          },
          {
            id: 14,
            title: "How do you feel about 'ZONE NOVA's' overall battle difficulty?",
            type: 'single',
            options: [
              'Very easy',
              'Somewhat easy',
              'Just right',
              'Somewhat difficult',
              'Very difficult',
            ],
          },
          {
            id: 15,
            title: "Do you understand 'ZONE NOVA's' tutorial explanations?",
            type: 'single',
            options: [
              'Simple and easy to understand',
              'Just right',
              'Can understand',
              'Hard to understand',
              "Completely don't understand",
            ],
          },
          {
            id: 16,
            title: "Can you do what you want daily in 'ZONE NOVA'?",
            type: 'single',
            options: ['Not enough', 'Too little', 'Just right', 'Somewhat too much', 'Too much'],
          },
          {
            id: 17,
            title: "How do you feel about 'ZONE NOVA's' new character release frequency?",
            type: 'single',
            options: [
              "Too fast, I haven't learned existing characters yet",
              'A bit fast, I only get basic understanding before new ones arrive',
              'Just right',
              'A bit slow, I have plenty of time to learn new characters',
              'Too slow, I want to see new characters faster',
            ],
          },
        ],
      },
      {
        id: 'improvement-monetization',
        title: 'Improvement & Monetization',
        questionCount: 2,
        questions: [
          {
            id: 18,
            title: "What should 'ZONE NOVA' prioritize improving? [Max 2 choices]",
            type: 'multiple',
            maxChoices: 2,
            options: [
              'Story presentation',
              'R18 content',
              'Battle effects and presentation',
              'Interface optimization',
              'Level difficulty balance',
              'Other',
            ],
          },
          {
            id: 19,
            title: 'If requiring payment, what items do you most hope to see? [Max 3 choices]',
            type: 'multiple',
            maxChoices: 3,
            options: [
              'Display decorations (avatars, frames, cards)',
              'Powerful characters and memories',
              'Captivating independent storylines',
              'Faster character growth to max stats',
              'Faster character development to unlock full stories',
              'Character skins',
            ],
          },
        ],
      },
      {
        id: 'ratings',
        title: 'Ratings',
        questionCount: 3,
        questions: [
          {
            id: 20,
            title: "Please rate 'ZONE NOVA's' character design (5★ highest)",
            type: 'rating',
            scale: 5,
            options: [
              '★ (1 star)',
              '★★ (2 stars)',
              '★★★ (3 stars)',
              '★★★★ (4 stars)',
              '★★★★★ (5 stars)',
            ],
          },
          {
            id: 21,
            title: "Please rate 'ZONE NOVA's' interface design (5★ highest)",
            type: 'rating',
            scale: 5,
            options: [
              '★ (1 star)',
              '★★ (2 stars)',
              '★★★ (3 stars)',
              '★★★★ (4 stars)',
              '★★★★★ (5 stars)',
            ],
          },
          {
            id: 22,
            title: "Please rate 'ZONE NOVA' overall (5★ highest)",
            type: 'rating',
            scale: 5,
            options: [
              '★ (1 star)',
              '★★ (2 stars)',
              '★★★ (3 stars)',
              '★★★★ (4 stars)',
              '★★★★★ (5 stars)',
            ],
          },
        ],
      },
      {
        id: 'additional-feedback',
        title: 'Additional Feedback',
        questionCount: 1,
        questions: [
          {
            id: 23,
            title:
              "Thank you for your support and encouragement. To make 'ZONE NOVA' better, we will do our best. If you have any opinions or thoughts, please tell us. (Optional)",
            type: 'text',
            optional: true,
          },
        ],
      },
    ],
  },
  {
    id: 'player-survey-2',
    title: 'Game Mode & Guild Survey #2',
    slug: 'player-survey-2',
    url: '/guides/zone-nova/surveys/player-survey-2/',
    description:
      'Survey focused on Guild Raids, Arena, Events, and player preferences for different game modes and future update directions.',
    meta: '31 Questions • Guild Activities, Arena, Events, Preferences',
    icon: '',
    status: 'active',
    totalQuestions: 31,
    sections: [
      {
        id: 'daily-usage',
        title: 'Daily Usage',
        questionCount: 1,
        questions: [
          {
            id: 1,
            title: "How many hours would you like to spend in 'ZONE NOVA' each day?",
            type: 'single',
            options: [
              'Under 5 minutes',
              '5-15 minutes',
              '15-30 minutes',
              '30-60 minutes',
              'Over 60 minutes',
            ],
          },
        ],
      },
      {
        id: 'guild-activities',
        title: 'Guild Activities',
        questionCount: 9,
        questions: [
          {
            id: 2,
            title: 'Have you joined a guild?',
            type: 'single',
            options: ['Yes', 'No'],
          },
          {
            id: 3,
            title:
              "Have you participated in 'Guild Raid'? (Guild members working together to challenge bosses)",
            type: 'single',
            options: ['Yes', 'No', "I don't know what Guild Raid is"],
          },
          {
            id: 4,
            title: "What do you think the workload of 'Guild Raid' is?",
            type: 'single',
            options: [
              'Too much',
              'Slightly too much',
              'Moderate',
              'Slightly too little',
              'Too little',
              "I don't know what Guild Raid is",
            ],
          },
          {
            id: 5,
            title: "Do you think 3 'Guild Raids' per day is too much operation?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Guild Raid is",
            ],
          },
          {
            id: 6,
            title: "How many days per week would you like to participate in 'Guild Raid'?",
            type: 'single',
            options: [
              '1 day',
              '2 days',
              '3 days',
              '4 days',
              '5 days',
              '6 days',
              '7 days',
              "I don't know what Guild Raid is",
            ],
          },
          {
            id: 7,
            title:
              "Do you think the difficulty of obtaining rewards from 'Guild Raid' is too high?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Guild Raid is",
            ],
          },
          {
            id: 8,
            title: "Do you find the rewards from 'Guild Raid' attractive?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Guild Raid is",
            ],
          },
          {
            id: 9,
            title: "What would you rate 'Guild Raid' overall?",
            type: 'rating',
            scale: 5,
            options: ['1', '2', '3', '4', '5', "I don't know what Guild Raid is"],
          },
          {
            id: 10,
            title: "What would you rate the fun factor of 'Guild Raid'?",
            type: 'rating',
            scale: 5,
            options: ['1', '2', '3', '4', '5', "I don't know what Guild Raid is"],
          },
        ],
      },
      {
        id: 'arena-activities',
        title: 'Arena Activities',
        questionCount: 7,
        questions: [
          {
            id: 11,
            title: "Have you participated in 'Arena'? (Competing with other players' teams)",
            type: 'single',
            options: ['Yes', 'No', "I don't know what Arena is"],
          },
          {
            id: 12,
            title: "What do you think the workload of 'Arena' is?",
            type: 'single',
            options: [
              'Too much',
              'Slightly too much',
              'Moderate',
              'Slightly too little',
              'Too little',
              "I don't know what Arena is",
            ],
          },
          {
            id: 13,
            title: "Do you think 5 'Arena' battles per day is too much operation?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Arena is",
            ],
          },
          {
            id: 14,
            title: "Do you think the difficulty of obtaining rewards from 'Arena' is too high?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Arena is",
            ],
          },
          {
            id: 15,
            title: "Do you find the rewards from 'Arena' attractive?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Arena is",
            ],
          },
          {
            id: 16,
            title: "What would you rate 'Arena' overall?",
            type: 'rating',
            scale: 5,
            options: ['1', '2', '3', '4', '5', "I don't know what Arena is"],
          },
          {
            id: 17,
            title: "What would you rate the fun factor of 'Arena'?",
            type: 'rating',
            scale: 5,
            options: ['1', '2', '3', '4', '5', "I don't know what Arena is"],
          },
        ],
      },
      {
        id: 'event-activities',
        title: 'Event Activities',
        questionCount: 6,
        questions: [
          {
            id: 18,
            title:
              "Have you participated in 'Events'? (Limited-time challenges against enemies and viewing storylines outside the main plot)",
            type: 'single',
            options: ['Yes', 'No', "I don't know what Events are"],
          },
          {
            id: 19,
            title: "What do you think the workload of 'Events' is?",
            type: 'single',
            options: [
              'Too much',
              'Slightly too much',
              'Moderate',
              'Slightly too little',
              'Too little',
              "I don't know what Events are",
            ],
          },
          {
            id: 20,
            title: "Do you think the difficulty of obtaining rewards from 'Events' is too high?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Events are",
            ],
          },
          {
            id: 21,
            title: "Do you find the rewards from 'Events' attractive?",
            type: 'single',
            options: [
              'Strongly disagree',
              'Disagree',
              'Agree',
              'Strongly agree',
              "I don't know what Events are",
            ],
          },
          {
            id: 22,
            title: "What would you rate 'Events' overall?",
            type: 'rating',
            scale: 5,
            options: ['1', '2', '3', '4', '5', "I don't know what Events are"],
          },
          {
            id: 23,
            title: "What would you rate the fun factor of 'Events'?",
            type: 'rating',
            scale: 5,
            options: ['1', '2', '3', '4', '5', "I don't know what Events are"],
          },
        ],
      },
      {
        id: 'player-preferences',
        title: 'Player Preferences',
        questionCount: 7,
        questions: [
          {
            id: 24,
            title: 'Do you like guild-based group activities?',
            type: 'single',
            options: ['Strongly dislike', 'Dislike', 'Like', 'Strongly like'],
          },
          {
            id: 25,
            title: 'Do you like player vs player combat activities (PVP)?',
            type: 'single',
            options: ['Strongly dislike', 'Dislike', 'Like', 'Strongly like'],
          },
          {
            id: 26,
            title: 'Are you looking forward to other PVP game modes?',
            type: 'single',
            options: [
              'Not looking forward at all',
              'Not looking forward',
              'Looking forward',
              'Very much looking forward',
            ],
          },
          {
            id: 27,
            title: 'Would you look forward to a PVP system between guild members? (Guild War)',
            type: 'single',
            options: [
              'Not looking forward at all',
              'Not looking forward',
              'Looking forward',
              'Very much looking forward',
            ],
          },
          {
            id: 28,
            title: 'What type of battle modes do you like? [Maximum 3 selections]',
            type: 'multiple',
            maxChoices: 3,
            options: [
              'Main story (watch storylines and unlock systems)',
              'Dungeons (challenge enemies, collect enhancement and promotion materials)',
              'Historic Battles (challenge bosses, collect advanced promotion materials)',
              'Annihilation (limited-time boss challenges, test team stats)',
              'Space-Time Rifts (limited-time enemy challenges, collect Orundum)',
              'Trials (test different faction teams, quickly collect materials)',
              "Arena (compete with other players' teams)",
              'Event Stories (limited-time enemy challenges and view storylines outside main plot)',
              'Event Challenges (limited-time boss challenges)',
              'Guild Raids (guild members cooperatively challenge bosses)',
            ],
          },
          {
            id: 29,
            title: 'What type of battle modes do you NOT like? [Maximum 3 selections]',
            type: 'multiple',
            maxChoices: 3,
            options: [
              'Main story (watch storylines and unlock systems)',
              'Dungeons (challenge enemies, collect enhancement and promotion materials)',
              'Historic Battles (challenge bosses, collect advanced promotion materials)',
              'Annihilation (limited-time boss challenges, test team stats)',
              'Space-Time Rifts (limited-time enemy challenges, collect Orundum)',
              'Trials (test different faction teams, quickly collect materials)',
              "Arena (compete with other players' teams)",
              'Event Stories (limited-time enemy challenges and view storylines outside main plot)',
              'Event Challenges (limited-time boss challenges)',
              'Guild Raids (guild members cooperatively challenge bosses)',
            ],
          },
          {
            id: 30,
            title:
              'What future update directions do you look forward to for the game? [Maximum 4 selections]',
            type: 'multiple',
            maxChoices: 4,
            options: [
              'More main storyline',
              'More enemy bosses',
              'Add different casual gameplay like mini-games',
              'More different battle gameplay (like survive 1 minute, kill specific targets)',
              'More modes for competing with other players',
              'More modes to play with guild members',
              'Release more different characters',
              'Release existing characters with different attributes, classes or rarity',
              'More 18+ content',
              'More character interaction gameplay',
            ],
          },
        ],
      },
      {
        id: 'final-feedback',
        title: 'Final Feedback',
        questionCount: 1,
        questions: [
          {
            id: 31,
            title:
              "Thank you for your support and encouragement. We will do our best to make 'ZONE NOVA' better. If you have any opinions or ideas, please let us know! (Optional)",
            type: 'text',
            optional: true,
          },
        ],
      },
    ],
  },
];

// Survey metadata for landing page
export const SURVEY_METADATA = {
  totalSurveys: ZONE_NOVA_SURVEYS.length,
  activeSurveys: ZONE_NOVA_SURVEYS.filter(survey => survey.status === 'active').length,
  totalQuestions: ZONE_NOVA_SURVEYS.reduce((total, survey) => total + survey.totalQuestions, 0),
  categories: [
    'Demographics',
    'Character Preferences',
    'Content Preferences',
    'Gameplay',
    'Feedback',
  ],
  lastUpdated: '2024-12-15',
};

// Helper functions
export function getSurveyById(id) {
  return ZONE_NOVA_SURVEYS.find(survey => survey.id === id);
}

export function getSurveyBySlug(slug) {
  return ZONE_NOVA_SURVEYS.find(survey => survey.slug === slug);
}

export function getActiveSurveys() {
  return ZONE_NOVA_SURVEYS.filter(survey => survey.status === 'active');
}

export function getSurveyStats() {
  return {
    totalSurveys: ZONE_NOVA_SURVEYS.length,
    activeSurveys: getActiveSurveys().length,
    totalQuestions: ZONE_NOVA_SURVEYS.reduce((total, survey) => total + survey.totalQuestions, 0),
    sectionsCount: ZONE_NOVA_SURVEYS.reduce((total, survey) => total + survey.sections.length, 0),
  };
}
