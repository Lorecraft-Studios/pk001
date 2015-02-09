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
        response: [9]
    },
    8: {
        _id: 8,
        convo: '(Continue...)',
        next1: [7],
        response: [],
        hasScript: 's003'
    },
    9: {
        _id: 9,
        convo: '(Continue...)',
        next1: [10],
        response: []
    },
    10: {
        _id: 10,
        convo: 'The Old Sergeant says, \“Alright time to spar them and you folks can go home! Remember, graceful, but with force!\”',
        next1: [],
        response: [11,12]
    },
    11: {
        _id: 11,
        convo: 'You reply, \“No problem sarge!\”',
        next1: [14],
        response: []
    },
    12: {
        _id: 12,
        convo: 'You reply, \“But.. but.. i\’m not ready to fight yet!\”',
        next1: [13],
        response: []
    },
    13: {
        _id: 13,
        convo: 'The Old Seargent exclaims, \“A warrior must always be at the ready! Now unsheathe your wooden practice sword!\”',
        next1: [14],
        response: []
    },
    15: {
        _id: 15,
        convo: 'The Old Seargent says, \“Great job.  You\'re the most promising recruit I\'ve seen.  Go home and tell your family that you\'ll be a squad leader.\”',
        next1: [],
        response: [],
        hasScript: 's009'
    },
    diaStatus: [1]
});

Dialogue.insert({
    _id: 'm002',
    1: {
        _id: 1,
        convo: '\“You\'ll NEVER be our leader!  Crawl under us or we\'ll beat you up!\”, taunts Romulus.',
        next1: [],
        response: [2,3]
    },
    2: {
        _id: 2,
        convo: 'Crawl Under',
        next1: [4],
        response: [],
        hasScript: 's010'
    },
    3: {
        _id: 3,
        convo: 'Fight',
        next1: [4],
        response: [],
        hasScript: 's010'
    },
    4: {
        _id: 4,
        convo: '\"Go home and cry to your mommy and daddy\", teases Romulus.',
        next1: [],
        response: []
    },
    10: {
        _id: 10,
        convo: '',
        next1: [],
        response: [11]
    },
    11: {
        _id: 11,
        convo: '\'What happened?\"',
        next1: [12],
        response: []
    },
    12: {
        _id: 12,
        convo: '\“It was the apples in the grove. I think something\’s wrong with them…\”, groans Romulus.',
        next1: [],
        response: [],
        hasScript: 's030'
    },
    diaStatus: [0]
});

Dialogue.insert({
    _id: 'm006',
    1: {
        _id: 1,
        convo: '\“What happened to you??? Let me see those wounds!”, says your concerned mother.',
        next1: [],
        response: [2,3]
    },
    2: {
        _id: 2,
        convo: '\“It\’s nothing, I just fell in training that\’s all\”, you reply.',
        next1: [4],
        response: []
    },
    3: {
        _id: 3,
        convo: '\“Uhmm… Romulus and Remus.. they…\”, you mutter.',
        next1: [4],
        response: []
    },
    4: {
        _id: 4,
        convo: '\“Here let me see, come closer.  I\’ll dress them for you\” says your mother. ',
        next1: [],
        response: [5,6],
        hasScript: 's021'
    },
    5: {
        _id: 5,
        convo: '\“Okay thanks mom\”, you reply.',
        next1: [0],
        response: [],
        hasScript: 's022'
    },
    6: {
        _id: 6,
        convo: '\“Finally, dinnertime!\”, you excitedly reply.',
        next1: [0],
        response: [],
        hasScript: 's022'
    },
    7: {
        _id: 7,
        convo: '\“Wonderful, they\’re all ripe and ready to eat!\” says mother.',
        next1: [],
        response: [],
        hasScript: 's024'
    },
    diaStatus: [1]
})

Dialogue.insert({
    _id: 'm007',
    1: {
        _id: 1,
        convo: '\“Mmm tasty, as usual.  We\’ll have a great dinner tonight.  So I heard the good news boy.  I\’m proud of you. It\’s tough being a leader you know.\” says father. ',
        next1: [],
        response: [],
        hasScript: 's025'
    },
    2: {
        _id: 2,
        convo: '\“So tell me more about the fight with the kids\”, says father calmly.',
        next1: [],
        response: [3,4,5]
    },
    3: {
        _id: 3,
        convo: '\“I don\'t know…\”, you reply.',
        next1: [6],
        response: []
    },
    4: {
        _id: 4,
        convo: '\“They started it!\”, you reply.',
        next1: [6],
        response: []
    },
    5: {
        _id: 5,
        convo: '\“They had metal weapons…\”, you reply.',
        next1: [6],
        response: []
    },
    6: {
        _id: 6,
        convo: '\“Well what you did was good.  You let it go.  A real warrior has a heart that can accommodate all under the sky,\” says father.',
        next1: [],
        response: [7]
    },
    7: {
        _id: 7,
        convo: '\“Father, you\’re not even a warrior, how would you know?\”, you reply.',
        next1: [8],
        response: []
    },
    8: {
        _id: 8,
        convo: '\“Ah it’s high time for me to tell you about about your family lineage\”, says dad.',
        next1: [],
        response: [9,10,11],
        hasScript: 's026'
    },
    9: {
        _id: 9,
        convo: '\“Really, we have a general in our family?\”, you reply.',
        next1: [12],
        response: []
    },
    10: {
        _id: 10,
        convo: '\“Tell me dad, tell me!\”, you reply.',
        next1: [],
        response: [],
        hasScript: 's027'
    },
    11: {
        _id: 11,
        convo: '\“Are you making this story up?\”, you ask.',
        next1: [13],
        response: []
    },
    12: {
        _id: 12,
        convo: '\“Yes, he help usher in the golden age of our empire through his kind deeds,\” father replies.',
        next1: [],
        response: [14],
        hasScript: 's027'
    },
    13: {
        _id: 13,
        convo: '\“No, we\’ve kept this secret from you for many years.  But I think it\’s time you should know now\”, replies father.',
        next1: [],
        response: [],
        hasScript: 's027'
    },
    14: {
        _id: 14,
        convo: '\“He treated even his greatest enemies with respect.\”, says dad.  \“Often caring for them after battles and helping their families out.',
        next1: [],
        response: []
    },
    diaStatus: [0]
});

Dialogue.insert({
    _id: 'm008',
    1: {
        _id: 1,
        convo: '\“Oh please, you\’ve got to help my son!\’, says Romulus\’ mother. ',
        next1: [],
        response: [2,3]
    },
    2: {
        _id: 2,
        convo: '\“What can I do ma\’am?\”, you reply.',
        next1: [4],
        response: [],
        hasScript: ''
    },
    3: {
        _id: 3,
        convo: '\“No way he bullied me the other day!\”, you reply.',
        next1: [5],
        response: [],
        hasScript: ''
    },
    4: {
        _id: 4,
        convo: '\“Thank goodness.  I sent Remus to get some herbs for Romulus in the valley but he hasn\’t been back in a while.  Can you see what happened to him and bring the herbs back?\”, asks Romulus\’ mother frantically.',
        next1: [],
        response: [6]
    },
    5: {
        _id: 5,
        convo: 'Romulus\’ mother sighs,  \“Oh please, can you please help us.  There\’s nothing I can do right now.  Remus hasn\’t come back after I sent him to the valley to get some herbs for Romulus.  Please help me find Remus and the herbs.  I would be forever indebted to you.\”',
        next1: [],
        response: [6]
    },
    6: {
        _id: 6,
        convo: '\“I\’ll definately see what I can do!\”, you reply.',
        next1: [7],
        response: []
    },
    7: {
        _id: 7,
        convo: '\“Thank the heavens! Please be careful yourself!\”, says Romulus\’ mother while holding onto him.',
        next1: [],
        response: [],
        hasScript: 's031'
    },
    diaStatus: [0]
});





