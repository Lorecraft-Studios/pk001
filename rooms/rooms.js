//All room data is stored here.

var rooms = {};

//***********************************************************//
rooms.a001 = {
	title: 'A Cobblestoned Courtyard',
	desc: 'A worn stone courtyard sits right outside of the militia outpost.  A faint militia banner wavers in the distant.  You see small groups of militia leisurely swinging their swords. Rush-strewn training dummies line the courtyard.',
	exits: {
		east: 'a002',
		west: '',
		south: '',
		north: '',
		up: '',
		down: ''
	},
	mobs: [],
	items: []
};
//***********************************************************//

//***********************************************************//
rooms.a002 = {
	title: 'A Militia Outpost',
	desc: 'The stone building serves as a gathering point for the local militia in this area. Serving the small villages throughout this province, this is where most of the recruiting takes place for the imperial army.',
	exits: {
		east: 'a003',
		west: 'a001',
		south: '',
		north: '',
		up: '',
		down: ''
	},
	mobs: [],
	items: []
};
//***********************************************************//

//***********************************************************//
rooms.a003 = {
	title: 'The Village Square',
	desc: 'Villagers congregate and sit around the stone well that supplies the lifeline of this village.  The local military academy sits to the west. A hovel lined path to the north and the largest hovel in the village to the south.  A road to the east disappears outside of the village.',
	exits: {
		east: '',
		west: 'a002',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//

