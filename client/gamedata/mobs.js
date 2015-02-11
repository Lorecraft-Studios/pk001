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
  roomAt:'r002',
  attackTrigger: 's005'
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
  roomAt:'r002',
  attackTrigger: 's006'
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
  roomAt:'r002',
  attackTrigger: 's007'
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

Mobs.insert({
  _id: 'm006',
  shortDesc: 'your mother',
  longDesc: {
    part1: 'A ',
    part2: '',
    part3: ' stands here, looking at you lovingly.',
    clickPart1: '',
    clickPart2: 'mother',
    clickPart3: '',
    },
  roomAt:'r014'
});

Mobs.insert({
  _id: 'm007',
  shortDesc: 'your father',
  longDesc: {
    part1: 'A ',
    part2: '',
    part3: ' lounges around, looking for something to do.',
    clickPart1: '',
    clickPart2: 'father',
    clickPart3: '',
    },
  roomAt:'r014'
});




Mobs.insert({
  _id: 'm008',
  shortDesc: 'Remus and Romulus\' mother',
  longDesc: {
    part1: '',
    part2: ' stands here.',
    part3: '',
    clickPart1: 'Remus and Romulus\' mother',
    clickPart2: '',
    clickPart3: '',
    },
  roomAt:'r018'
});

Mobs.insert({
  _id: 'm009',
  shortDesc: 'Aerus\' Mother',
  longDesc: {
    part1: '',
    part2: ' stands here.',
    part3: '',
    clickPart1: 'Aerus\' Mother',
    clickPart2: '',
    clickPart3: '',
    },
  roomAt:'r022'
});

Mobs.insert({
  _id: 'm100',
  shortDesc: 'The Village Elder',
  longDesc: {
    part1: 'The ',
    part2: '',
    part3: 'silently waits here in a deep trance.',
    clickPart1: 'Village Elder ',
    clickPart2: '',
    clickPart3: '',
    },
  roomAt:'r008'
});



