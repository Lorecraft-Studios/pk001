Dialogue = new Mongo.Collection();

Dialogue.insert({
    _id: 'm001',
    1: {
        _id: 1,
        convo: '\“Remember to steady the hand while you\’re swinging!  Graceful but with force!  Okay, swing at that dummy once more!\”, exclaims the old sergeant.',
        next1: [],
        response: [2]
        },
    2: {
        _id: 2,
        convo: '\“Okay i\’ll do my best!\”, you reply.',
        next1: [],
        response: [],
        hasScript: 's001',
        },
    3: {
        _id: 3,
        convo: '\“Good job, I haven\’t seen a swing like that in years.  You\’ll surely make the ancients proud.\”, says the old sergeant.',
        next1: [],
        response: [4,5]
    },
    4: {
        _id: 4,
        convo: '\“Who are the ancients?\”, you ask.',
        next1: [6],
        response: []
    },
    5: {
        _id: 5,
        convo: '\“How long until training is done for the day?\”, you ask.',
        next1: [7],
        response: [],
        hasScript: 's003'
    },
    6: {
        _id: 6,
        convo: 'With dignity and pride, the Old Sergeant replies, \“Why they\’re our ancestors of course.  Mighty warriors who protected the empire thousands of years ago.  It\’s in our blood, to defend... to follow the martial craft, the warriors way.\”',
        next1: [],
        response: [8]
    },
    7: {
        _id: 7,
        convo: 'The old sergeant warmly replies, \“You\’ll be done after a sparring session with each of the other juniors in your group.”',
        next1: [],
        response: []
    },
    8: {
        _id: 7,
        convo: 'Continue...',
        next1: [],
        response: [],
        hasScript: 's003'
    },
    diaStatus: [1]
});

