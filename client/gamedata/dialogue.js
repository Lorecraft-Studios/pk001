Dialogue = new Mongo.Collection();

Dialogue.insert({
    _id: 'm001',
1: {
    _id: 1,
    text: 'Are you ready for your training?',
    next: [],
    response: [2,3]
    },
2: {
    _id: 2,
    text: "No, I haven't had my breakfast yet.",
    next: [4],
    response: []
    },
3: {
    _id: 3,
    text: "Yes sir! Ready to go!",
    next: [5],
    response: []
},
4: {
    _id: 4,
    text: 'Go get something to eat, then speak with me again.',
    next: [5],
    response: []
},
5: {
    _id: 5,
    text: 'Go to the training dummy and attack it.',
    next: [],
    response: []
    },
    status: [1]
});

