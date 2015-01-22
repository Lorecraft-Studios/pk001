//Initialize a new local minimongo instance
Mobs = new Mongo.Collection();

Mobs.insert({
    _id: 'm001',
	shortDesc: 'The old trainer',
	longDesc: {
    part1: 'An ',
    part2: '',
    part3: ' weathered by war stands here ready to train his recruits.',
    clickPart1: '',
    clickPart2: 'old man',
    clickPart3: '',
    roomAt:''
  }
});

Mobs.insert({
    _id: 'm002',
	shortDesc: 'Romulus',
	longDesc: {
    part1: 'A ',
    part2: '',
    part3: ' stands here looking for trouble.',
    clickPart1: '',
    clickPart2: 'brazen kid known as Romulus',
    clickPart3: '',
    roomAt:''
  }

});

Mobs.insert({
    _id: 'm002',
	shortDesc: 'Remus',
	longDesc: {
    part1: '',
    part2: '',
    part3: ' runs around causing trouble.',
    clickPart1: 'Remus ',
    clickPart2: 'the mischievious kid',
    clickPart3: '',
    roomAt:''
   }
});

Mobs.insert({
    _id: 'm003',
    shortDesc: 'Aerus',
    longDesc: {
    part1: '',
    part2: '',
    part3: ' looks around uneasily.',
    clickPart1: 'Aerus ',
    clickPart2: 'the shy little girl',
    clickPart3: '',
    roomAt:''
   }
});



