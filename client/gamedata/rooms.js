/*  Area structure with corresponding IDs
 *		  
 *					              013
 *					               |
 *					         012--014--015 
 *					          |    |
 *					          |   016
 *					          |
 *					          |   017
 *					          |    |
 *					         011--018--019
 *	   				          |    |
 *       030--029--028        |   020
 *			        |		  |
 *			       027		  |   021
 *			        |		  |    |
 *		           026--025--010--022--023
 *					          |    |
 *					          |   024
 *					          |
 *		    	   001--002--003--004--005--006
 *			         	      |
 *			            007--008--009
 */

//Create a new local minimongo instance
Rooms = new Mongo.Collection();

//***********************************************************//
Rooms.insert({
	_id: 'r001',
	title: 'A Cobblestoned Courtyard',
	desc: 'A worn stone courtyard sits right outside of the militia outpost.  A faint militia banner wavers in the distant.  You see small groups of militia leisurely swinging their swords. Rush-strewn training dummies line the courtyard.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down: ''
	},
	mobs: [Mobs.findOne({_id: 'm001'})],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r002',
	title: 'A Militia Outpost',
	desc: 'The stone building serves as a gathering point for the local militia in this area. Serving the small villages throughout this province, this is where most of the recruiting takes place for the imperial army.',
	exits: {
		east: '',
		west: 'r001',
		south: '',
		north: '',
		up: '',
		down: ''
	},
	mobs: [Mobs.findOne({_id: 'm002'}),Mobs.findOne({_id: 'm003'}),Mobs.findOne({_id: 'm004'})],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r003',
	title: 'The Village Square',
	desc: 'Villagers congregate and sit around the stone well that supplies the lifeline of this village.  The local military academy sits to the west. A hovel lined path to the north and the largest hovel in the village to the south.  A road to the east disappears outside of the village.',
	exits: {
		east: 'r004',
		west: 'r002',
		south: 'r008',
		north: 'r010',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r004',
	title: 'A Path to the Village',
	desc: 'Dirt is kicked up as you travel this bare path.  The village proper lies to the west.  This road doesn’t seem to be traveled much.  Evidence of a very remote village.',
	exits: {
		east: 'r005',
		west: 'r003',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r005',
	title: 'Outside a Village',
	desc: 'The border between man and nature is evident here.  To the east are the wild plains and to the west is a small remote village.  You begin to feel quite lonely, but the pastoral scene ahead comforts you.',
	exits: {
		east: 'r006',
		west: 'r004',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r006',
	title: 'Into the Wild Plains',
	desc: 'With only a barely traveled path as your guide, you look around and see expansive rolling plains covered with dried out tall-grass. You wonder what adventures await you in the distance.',
	exits: {
		east: '',
		west: 'r005',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r007',
	title: 'A Resting Room',
	desc: 'A platform to place your shoes before entering the room greets you. It’s a comfortable looking room lined with the finest furs invites you to take a rest and relax here. Frequented by villagers who discuss matters with the Elders.',
	exits: {
		east: 'r008',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r008',
	title: 'A Large Hovel',
	desc: 'A spacious interior with a smooth stone foundation stretches from corner to corner. Intricately carved wooden furniture adorn the space. Fur carpets line the floor.',
	exits: {
		east: 'r009',
		west: 'r007',
		south: '',
		north: 'r003',
		up: '',
		down:''
	},
	mobs: [Mobs.findOne({_id: 'm100'})],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r009',
	title: 'Ancestral Hall',
	desc: 'A quiet wooden hallway is bathed in plumes of smoke rising from incense that are maintained around the clock.  Wooden carved murals of the ruling lineage of the village are etched into the walls with miniature thuribles below them.',
	exits: {
		east: '',
		west: 'r008',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r010',
	title: 'A Well-Traveled Dirt Path',
	desc: 'A beaten path extends from the village square to the south, distancing itself from the hubbub of the common village areas. The greenery of the shrubs and trees seem to be a little denser to the west.  A small hovel sits to the east.',
	exits: {
		east: 'r022',
		west: 'r025',
		south: 'r003',
		north: 'r011',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r011',
	title: 'A Dirt Path',
	desc: 'A well traveled path lined with bushes runs to the north and south.  A villagers abode sits to the east of this path and the village square is barely visible to the south.',
	exits: {
		east: 'r018',
		west: '',
		south: 'r010',
		north: 'r012',
		up: '',
		down:''
	},
	mobs: [],
	items: [],
	roomEnterTrigger: 's029'
});
//***********************************************************//
Rooms.insert({
	_id: 'r012',
	title: 'End of a Dirt Path',
	desc: 'The last stretch of a well-traveled dirt path.  Beyond here is barely-ventured wilderness.  A modest but inviting hovel sits to the east.',
	exits: {
		east: 'r014',
		west: '',
		south: 'r011',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r013',
	title: 'An All Too Familiar Room',
	desc: 'Just a small but comfortable crawlspace for you to go to sleep.  A rush bed is pushed against the side stone wall below a tiny circular window.  Light streams through during the daytime.',
	exits: {
		east: '',
		west: '',
		south: 'r014',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: [Items.findOne({_id: 'i002'})]
});
//***********************************************************//
Rooms.insert({
	_id: 'r014',
	title: 'A Warm and Homely Hovel',
	desc: 'A modest but well-constructed hovel warmly invites you to relax.  The wood-colored arrangements and earthy tones create a dark but inviting abode. Candles and a modest lamp dot the walls and tables. Various knick-knacks accumulate in nooks and crannies.',
	exits: {
		east: 'r015',
		west: 'r012',
		south: 'r016',
		north: 'r013',
		up: '',
		down:''
	},
	mobs: [Mobs.findOne({_id: 'm006'}),Mobs.findOne({_id: 'm007'})],
	items: [],
	roomEnterTrigger: 's020'
});
//***********************************************************//
Rooms.insert({
	_id: 'r015',
	title: 'A Lush Vegetable Garden',
	desc: 'Wooden planting boxes line the area as various vegetables, herbs and flowers of bright colors sprout everywhere. A small shack occupies the corner of the garden plot.  Birds, bees and butterflies flitter about.',
	exits: {
		east: '',
		west: 'r014',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r016',
	title: 'An Open-Air Kitchen',
	desc: 'A modest stone oven sits prominently in this cooking area, exposed to the outdoors. All manner of wooden cooking utensils with the rare steel cutting blade scatter the area.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: 'r014',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r017',
	title: 'A Stone Storage Room',
	desc: 'Rough rocks make up the walls of this storage area.  Various steel blades and what looks to be standard issue militia equipment line the walls and tables.',
	exits: {
		east: '',
		west: '',
		south: 'r018',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r018',
	title: 'A Well-Kept Hovel',
	desc: 'The stone foundations of this clean hovel signifies a family of relatively moderate status.  Steel and brass odds and ends line the windowsills.  Pristine hand-crafted furniture invites you to take a rest.',
	exits: {
		east: 'r019',
		west: 'r011',
		south: 'r020',
		north: 'r017',
		up: '',
		down:''
	},
	mobs: [Mobs.findOne({_id: 'm008'})],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r019',
	title: 'A Large Garden',
	desc: 'Perfectly trimmed hedges line the large plot.  All manners of decorative flowers form patterns around this man-made botanical wonder. A finely crafted wooden gazebo sits in the center of the garden.',
	exits: {
		east: '',
		west: 'r018',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r020',
	title: 'A Nice Bedroom',
	desc: 'Wooden armoires and a closet line the wall.  A giant bed with immaculate linens quietly sits here. Several houseplants in a corner here and there accent the room.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: 'r018',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r021',
	title: 'A Sitting Room',
	desc: 'A guest room made for injured patients to relax and recuperate. Poultices, jars of liquid and dried herbs sprawl on an old wooden oak table. A small resting bed lies comfortably against the north wooden wall.',
	exits: {
		east: '',
		west: '',
		south: 'r022',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r022',
	title: 'A Small Hovel',
	desc: 'One of the smaller hovels of the village.  Entirely made of branches, rush and dried leaves. A rush bed lays in the corner.  Although small, this hovel seems to receive the most visitors.  The liveliness makes up for the cramped quarters.',
	exits: {
		east: 'r023',
		west: 'r010',
		south: 'r024',
		north: 'r021',
		up: '',
		down:''
	},
	mobs: [Mobs.findOne({_id: 'm009'})],
	items: [],
	roomEnterTrigger: 's032'
});
//***********************************************************//
Rooms.insert({
	_id: 'r023',
	title: 'A Small Herb Garden',
	desc: 'Piles of stones create spiral herb gardens that the healers use. Dried herbs occupy the woven baskets, ready to be crushed into powder.  The small garden is home to most of the villages curative herbs.',
	exits: {
		east: '',
		west: 'r022',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r024',
	title: 'A Medical Pantry',
	desc: 'You’re careful not to bump into the racks and rows of vials containing different types of plant powders and liquids. Various musky odors clash to form an herbal medicinal aroma.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: 'r022',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r025',
	title: 'A Forest Path',
	desc: 'A myriad of birds chirp and rustling of trees signify that this is the outskirts of a lush forest leading into a valley. All of the sudden you feel relaxed.  You see a giant majestic tree in a clearing to the distant west.',
	exits: {
		east: 'r010',
		west: 'r026',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r026',
	title: 'Under a Giant Fig Tree',
	desc: 'The shade of a luminescent fig tree embraces you with its graceful protection from the wild pastoral woods. Beams of sunlight cast rays through the treetops onto flittering harmless creatures. The massive trunk and roots stabilizing this towering guardian of the forest protects both man and nature with motherly solitude.',
	exits: {
		east: 'r025',
		west: '',
		south: '',
		north: 'r027',
		up: '',
		down:''
	},
	mobs: [],
	items: [],
	roomEnterTrigger: 's033'
});
//***********************************************************//
Rooms.insert({
	_id: 'r027',
	title: 'Deeper Into the Forest',
	desc: 'Towering trees of various lengths densely pack this rarely traveled path.  You feel an ominous unfamiliarity with this place.  Almost lost in this sea of green, you look around and barely make out a path to the north.',
	exits: {
		east: '',
		west: '',
		south: 'r026',
		north: 'r028',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r028',
	title: 'Near a Forest Stream',
	desc: 'You hear a babbling brook meandering through the area.  It temporarily relieves your anxiety of being in an unfamiliar place. You hear sounds of wildlife.  Oddly you don’t feel threatened.',
	exits: {
		east: '',
		west: 'r029',
		south: 'r027',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
});
//***********************************************************//
Rooms.insert({
	_id: 'r029',
	title: 'Deep in a Forest',
	desc: 'The deeper you venture, the stranger the plants become.  Everything takes on a life of its own.  You feel as if you’re a guest in a kingless kingdom of the forest.',
	exits: {
		east: 'r028',
		west: 'r030',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: [],
});
//***********************************************************//
Rooms.insert({
	_id: 'r030',
	title: 'Deep in a Forest Valley',
	desc: 'You lose track of time as you stumble upon a lush valley.  A sacred-like feeling encompasses you.  Its animals stare at you, acknowledging that you are not a threat to their forest kingdom, they leisurely continue on their way.',
	exits: {
		east: 'r029',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [Mobs.findOne({_id: 'm010'})],
	items: [],
	roomEnterTrigger: 's035'
});

