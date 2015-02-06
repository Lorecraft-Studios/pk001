Items = new Mongo.Collection();

Items.insert({
	_id: 'i001',
	shortDesc: 'a handful of vegetables',
	longDesc:'A variety of vegetables neatly organized in a garden.',
	questTrigger: 's023'
});

Items.insert({
	_id: 'i002',
	shortDesc: 'a bed',
	longDesc:'A modest bed invites you with its blankets and furs.',
	questTrigger: 's028'
})