Dialogue = new Mongo.Collection();

Dialogue.insert({
    //sarge
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
    _id: 'm003',
    1: {
        _id: 1,
        convo: '\“Thanks for saving me!\”, says Remus.',
        next1: [],
        response: [],
        hasScript: 's037'
    },
    2: {
        _id: 2,
        convo: '\“I\’m sorry for what me and my brother did to you yesterday...\”',
        next1: [],
        response: [3,4]
    },
    3: {
        _id: 3,
        convo: '\“It’s okay, you guys were just playing around anyway\”, you reply.',
        next1: [5],
        response: []
    },
    4: {
        _id: 4,
        convo: '\“Well, I would feel the same way too, you two are better fighters anyway\”, you reply.',
        next1: [5],
        response: []
    },
    5: {
        _id: 5,
        convo: 'Remus looks down sheepishly.',
        next1: [],
        response: [6,7]
    },
    6: {
        _id: 6,
        convo: '\“What were you doing here anyway?\”, you ask.',
        next1: [8],
        response: []
    },
    7: {
        _id: 7,
        convo: '\“Were you here for the herbs for Romulus?\”, you ask.',
        next1: [8],
        response: []
    },
    8: {
        _id: 8,
        convo: '\“Yeah I was trying to pick the herbs and the boar attacked me, thank goodness you came in time\”, Remus replies.',
        next1: [],
        response: []
    },
    9: {
        _id: 9,
        convo: '\“Were you here for the herbs for Romulus?\”, you ask.',
        next1: [],
        response: []
    },
    diaStatus: [0]
});

Dialogue.insert({
    _id: 'm004',
    1: {
        _id: 1,
        convo: 'Aerus sniffles, \“I\’ll never be a good warrior.. what am I going to do?  I just can\’t stand people getting hurt.\”',
        next1:  [],
        response: [2,3]
    },
    2: {
        _id: 2,
        convo: 'You comfort Aerus.',
        next1: [4],
        response: []
    },
    3: {
        _id: 3,
        convo: '\“Well you can always choose to be something else yanno\”, you reply.',
        next1: [4],
        response: []
    },
    4: {
        _id: 4,
        convo: '\“But what am I going to do? What am I going to be?  I just can\’t stand the sight of people being hurt.  War and fighting is terrible!\”, exclaims Aerus.',
        next1: [],
        response: [5]
    },
    5: {
        _id: 5,
        convo: '\“How about helping all the hurt people get better?\”, you suggest.',
        next1: [6],
        response: []
    },
    6: {
        _id: 6,
        convo: '\“Hey that\’s a good idea!\”, says Aerus.\"',
        next1: [],
        response: [],
        hasScript: 's034'
    },
    diaStatus: [1]
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
    100: {
        _id: 100,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    101: {
        _id: 101,
        convo: '\"Youre\' home early\", says mother.',
        next1: [],
        response: [102],
        hasScript: ''
    },
    102: {
        _id: 102,
        convo: '\“The Village Elder told me to tell you guys that I\’m leaving..\”, you reply.',
        next1: [103],
        response: [],
        hasScript: ''
    },
    103: {
        _id: 103,
        convo: '\“Oh boy.. that\’s what we feared…\” says Mother.',
        next1: [],
        response: [],
        hasScript: 's102'
    },
    104: {
        _id: 104,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    100: {
        _id: 105,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    105: {
        _id: 105,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    106: {
        _id: 106,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    107: {
        _id: 107,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    108: {
        _id: 108,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
     109: {
        _id: 109,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
     110: {
        _id: 110,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
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
     100: {
        _id: 100,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    101: {
        _id: 101,
        convo: '\“Yes son?\”, says father.',
        next1: [],
        response: [102],
        hasScript: ''
    },
    102: {
        _id: 102,
        convo: '\“The Village Elder says I need to leave the village…\”, you reply.',
        next1: [103],
        response: [],
        hasScript: ''
    },
    103: {
        _id: 103,
        convo: '\“I’m so proud of you son.  You’ll be following the footsteps of your ancestors.\”, says father.',
        next1: [],
        response: [],
        hasScript: 's103'
    },
    104: {
        _id: 104,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    100: {
        _id: 105,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    105: {
        _id: 105,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    106: {
        _id: 106,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    107: {
        _id: 107,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    108: {
        _id: 108,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
     109: {
        _id: 109,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
     110: {
        _id: 110,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
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
        response: []
    },
    3: {
        _id: 3,
        convo: '\“No way he bullied me the other day!\”, you reply.',
        next1: [5],
        response: []
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

Dialogue.insert({
    _id: 'm009',
    1: {
        _id: 1,
        convo: 'Aerus\’ Mother heaves a heavy sigh, \“Where is she, she hasn\’t come home yet.  Oh my Aerus.  Would you happen to know what happened to her?\”',
        next1: [],
        response: [2]
    },
    2: {
        _id: 2,
        convo: '\“Well she was with Romulus and Remus after training yesterday. That’s the last time I saw her\”, you reply.',
        next1: [3],
        response: []
    },
    3: {
        _id: 3,
        convo: '\“Oh my I hope she isn\’t in any kind of trouble.  She always disliked going to training.. She never liked swordplay or any of that sort.  Always careful and attentive to her herbs.  Would you be so kind as to help me find my daughter?\”, asks Aerus\’ Mother.',
        next1: [],
        response: [4]
    },
    4: {
        _id: 4,
        convo: '\“Sure thing!”, you reply.',
        next1: [],
        response: []
    },
    diaStatus: [0]
});


//Village Elder
Dialogue.insert({
    _id: 'm100',
    1: {
        _id: 1,
        convo: '\"Come closer... Let me see your face,\" says the Village Elder.',
        next1: [],
        response: [],
        hasScript: 's100'
    },
    2: {
        _id: 2,
        convo: '\“Oh how many Aeons, the circle of eternity cycles through.. the dance of eternity you shall embark on… beneath that childhood innocence of yours is the heart of a true warrior\”, says the Village Elder',
        next1: [],
        response: [4,5]
    },
    3: {
        _id: 3,
        convo: '',
        next1: [],
        response: []
    },
    4: {
        _id: 4,
        convo: '\“Huh..?\”, you reply.',
        next1: [6],
        response: []
    },
    5: {
        _id: 5,
        convo: '\“But I didn’t do anything…\”, you reply.',
        next1: [6],
        response: []
    },
    6: {
        _id: 6,
        convo: '\“Go home at once to tell your mother and father that you will be leaving. Then return here once again to speak with me.  Your fate is not in this village\”, commands the Village Elder.',
        next1: [],
        response: [],
        hasScript: 's101'
    },

    //After player has final convo with parents
    7: {
        _id: 7,
        convo: '\“Ahh good.. good.. you will soon be rightfully donning your family armor\”, says the Village Elder.',
        next1: [],
        response: [],
        hasScript: 's104'
    },

    8: {
        _id: 8,
        convo: '\“Having the heart of a warrior, you are now ready to inherit the Blade of Whispering Time\", says the Village Elder.',
        next1: [],
        response: [9,10],
        hasScript: ''
    },
    9: {
        _id: 9,
        convo: '\“Wow… it’s beautiful\”, you reply.   ',
        next1: [11],
        response: []
    },
    10: {
        _id: 10,
        convo: '\“I can’t! That belongs to the Elder lineage!\”, you reply',
        next1: [11],
        response: [],
        hasScript: ''
    },
    11: {   
        _id: 11,
        convo: '\“It was only ours to hold onto until the heart of a true warrior is able to wield it..  how many generations we have waited.  Everything is as it should be.  This is your blade now\”, says the Village Elder.',
        next1: [],
        response: [],
        hasScript: 's105'
    },
    12: {
        _id: 12,
        convo: '\“The time has come for you to journey eastwards, out of the confines of this village\”, says the Village Elder, \“As a sword is tempered by the anvil and hammer, so shall your spirit be tempered by the long journey ahead to the town of Kaimuki where you will receive further training.\”',
        next1: [],
        response: [13,14],
        hasScript: ''
    },
    13: {
        _id: 13,
        convo: '\“Further training…?\”, you ask.',
        next1: [15],
        response: [],
        hasScript: ''
    },
    14: {
        _id: 14,
        convo: '\“But i’ve never gone beyond the village!\”, you reply.',
        next1: [15],
        response: []
    },
     15: {
        _id: 15,
        convo: '\“It has already been written in the threads of time.  An empire long united must divide, long divided, it must unite again.  Your fate will be out there to help turn the wheels of nature\”, says the Village Elder.',
        next1: [],
        response: [],
        hasScript: 's106'
    },
    16: {
        _id: 16,
        convo: '\“Quickly, you must waste no time! Romulus Remus and Aerus will stay here for further training.  Fate will have them meet you once again in the future!\” says the Village Elder.',
        next1: [],
        response: [17],
        hasScript: ''
    },
    17: {
        _id: 17,
        convo: '\“I’m going by to Kaimuki by myself?  But I don’t even know where it is..\”, you reply',
        next1: [18],
        response: [],
        hasScript: ''
    },
    18: {
        _id: 18,
        convo: '\“This, you must face.. Alone. \“, replies the Village Elder',
        next1: [],
        response: [],
        hasScript: 's107'
    },
    19: {
        _id: 19,
        convo: '\"Quickly! You must travel Eastwards to the town of Kaimuki to further your training!\", says the Village Elder.',
        next1: [],
        response: [],
        hasScript: ''
    },
    20: {
        _id: 20,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    21: {
        _id: 21,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    22: {
        _id: 22,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    23: {
        _id: 23,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    24: {
        _id: 24,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
     25: {
        _id: 25,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
     26: {
        _id: 26,
        convo: '',
        next1: [],
        response: [],
        hasScript: ''
    },
    diaStatus: [1]
});


