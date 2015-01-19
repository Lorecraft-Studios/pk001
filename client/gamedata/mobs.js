//Initialize a new local minimongo instance
Mobs = Mongo.Collection();

Mobs.insert({
	shortDesc: 'The old trainer',
	longDesc: {
    part1: 'An ',
    part2: '',
    part3: ' weathered by war stands here ready to train his recruits.',
    clickPart1: '',
    clickPart2: 'old man',
    clickPart3: ''
  }
});

Mobs.insert({
	shortDesc: 'Romulus',
	longDesc: {
    part1: 'A ',
    part2: '',
    part3: ' stands here looking for trouble.',
    clickPart1: '',
    clickPart2: 'brazen kid known as Romulus',
    clickPart3: ''
  }

});

Mobs.insert({
	shortDesc: 'Remus',
	longDesc: {
    part1: '',
    part2: '',
    part3: ' runs around causing trouble.',
    clickPart1: 'Remus ',
    clickPart2: 'the mischievious kid',
    clickPart3: ''
   }
});

Mobs.insert({
    shortDesc: 'Aerus',
    longDesc: {
    part1: '',
    part2: '',
    part3: ' looks around uneasily.',
    clickPart1: 'Aerus ',
    clickPart2: 'the shy little girl',
    clickPart3: ''
   }
});



