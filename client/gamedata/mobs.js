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
    },
  roomAt:'r001'
});

Mobs.insert({
  _id: 'm002',
  shortDesc: 'Romulus',
	longDesc: {
    part1: 'A ',
    part2: 'brazen kid known as ',
    part3: ' stands here looking for trouble.',
    clickPart1: '',
    clickPart2: 'Romulus',
    clickPart3: '',
  },
  roomAt:'r002'
});

Mobs.insert({
  _id: 'm003',
	shortDesc: 'Remus',
	longDesc: {
    part1: '',
    part2: 'the mischievious kid',
    part3: ' runs around causing trouble.',
    clickPart1: 'Remus ',
    clickPart2: '',
    clickPart3: '',
   },
  roomAt:'r002'
});

Mobs.insert({
  _id: 'm004',
  shortDesc: 'Aerus',
    longDesc: {
    part1: '',
    part2: 'the shy little girl',
    part3: ' looks around uneasily.',
    clickPart1: 'Aerus ',
    clickPart2: '',
    clickPart3: '',
    },
  roomAt:'r002'
});

Mobs.insert({
  _id: 'm005',
  shortDesc: 'Training Dummy',
    longDesc: {
    part1: 'A ',
    part2: '',
    part3: ' hangs here staring at you blankly.',
    clickPart1: '',
    clickPart2: 'straw-filled humanoid ',
    clickPart3: '',
    },
  roomAt:'',
  attackTrigger: 's004'
});



