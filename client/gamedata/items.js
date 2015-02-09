Items = new Mongo.Collection();

Items.insert({
	_id: 'i001',
	shortDesc: 'a handful of vegetables',
	longDesc:'A variety of vegetables neatly organized in a garden.',
	longDesc: {
    part1: 'A ',
    part2: '',
    part3: ' neatly organized in a garden.',
    clickPart1: '',
    clickPart2: 'variety of vegetables',
    clickPart3: '',
  },
	questTrigger: 's023'
});

Items.insert({
	_id: 'i002',
	shortDesc: 'a bed',
	longDesc: {
    part1: 'A ',
    part2: '',
    part3: ' invites you with its blankets and furs.',
    clickPart1: '',
    clickPart2: 'modest bed',
    clickPart3: '',
  },
	questTrigger: 's028'
})