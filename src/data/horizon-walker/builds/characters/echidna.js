// Echidna Build Configuration - Horizon Walker
export const echidnaBuildConfig = {
    damageScaling: 'Magic ATK',
    buildStrategyTitle: 'Poorly Designed Mechanics - Team Dependent',
    recommendedStigma: 'Mixed 2-Set: The Wind that Wanders the World + The Eternal Battle',
    buildStrategy: [
        {
            title: 'Confusing Mechanics - Heavy Team Reliance',
            description:
                "Echidna's poison scales with Accuracy, but you cannot apply poison DOT without teammates hitting the target first to trigger her follow-up attacks. Her ultimate requires 3 teammate hits to activate properly. She is fundamentally weak on her own and completely reliant on teammates to function. The mechanics don't make sense for a standalone unit.",
        },
        {
            title: 'Full AP Build is Not Viable',
            description:
                "Building full AP seems theoretically good since DOT ticks at turn end, but you need 6 stacks minimum (2+ turns) of consistent single-target hits to make it work. This is too slow and unreliable for actual combat. The payoff isn't worth the setup required.",
        },
        {
            title: 'Only Viable Build: Full Accuracy',
            description:
                "The only build that somewhat works is stacking Accuracy with Bottom and Left pieces from The Eternal Battle and The Wind that Wanders the World. Even trying to maximize her ultimate damage is weak because everything hinges on Accuracy to land hits. She remains a difficult and underwhelming character to build effectively.",
        },
    ],
    recommendedSubstats: [
        { stat: 'Accuracy', scale: '3% - 5%', priority: 'Best' },
        { stat: 'Accuracy', scale: '3% - 5%', priority: 'Best' },
        { stat: 'Accuracy', scale: '3% - 5%', priority: 'Best' },
        { stat: 'Magic ATK', scale: '3% - 5%', priority: 'Alternative' },
    ],
    substatsPriority: 'Accuracy (3 slots) → Magic ATK (if Accuracy unavailable)',
    traitsType: 'Magic Poison/DoT',
    recommendedTraits: [
        {
            name: 'Precise',
            effects: ['Accuracy: +5%'],
            priority: 'Best',
        },
        {
            name: 'Venomous',
            effects: ['Poison Boost: +8%'],
            priority: 'Best',
        },
        {
            name: 'Paranoid',
            effects: ['Immaterial DEF: -100', 'Accuracy: +7%'],
            priority: 'Best',
        },
        {
            name: 'Harsh',
            effects: ['Poison Boost: +6%'],
            priority: 'Best',
        },
        {
            name: 'Accurate',
            effects: ['Accuracy: +4%'],
            priority: 'Best',
        },
        {
            name: 'Mysterious',
            effects: ['Magic ATK: +5%'],
            priority: 'Alternative',
        },
        {
            name: 'Rational',
            effects: ['Crit Rate: -2%', 'Magic ATK: +6%'],
            priority: 'Alternative',
        },
        {
            name: 'Bright',
            effects: ['Magic ATK: +4%'],
            priority: 'Alternative',
        },
    ],
    traitRecommendation:
        'Precise → Venomous → Paranoid → Harsh → Accurate (Core Accuracy + Poison build: +16% Accuracy, +14% Poison Boost) → Alternatives: Mysterious, Rational, Bright for Magic ATK if Accuracy/Poison unavailable',
};
