Dialogue = new Mongo.Collection();

Dialogue.insert({
    _id: 'm001',
    dialogue: [
        {_id:1, text:'Are you ready for your training?', next:[2,3]},
        {_id:2, text:"No I haven't had my breakfast yet.", next:[4]},
        {_id:3, text:'Yes sir!  Ready to go!', next:[5]},
        {_id:4, text:'Go and get something to eat, speak with me again.', next:[5]},
        {_id:5, text:'Go to the training dummy and attack it.', next:[7]},
        {_id:6, text:'Are you deaf?! I said attack the dummy!'},
        {_id:7, text:'Great job.'}
    ],
    status: [1]
});

Dialogue.insert({
    _id: 'p001',
    response: ['test1', 'test2']
})