/* Note: Since this file is not explicitly stated to be on the
 * client or server, Meteor will ship everything to both the client and server.
 */


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

var rooms = {};

//***********************************************************//
//There is an 'a' in front of every room ID because object properties have to start with an alphabet character.
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
rooms.a004 = {
	title: 'A Path to the Village',
	desc: 'Dirt is kicked up as you travel this bare path.  The village proper lies to the west.  This road doesn’t seem to be traveled much.  Evidence of a very remote village.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a005 = {
	title: 'Outside a Village',
	desc: 'The border between man and nature is evident here.  To the east are the wild plains and to the west is a small remote village.  You begin to feel quite lonely, but the pastoral scene ahead comforts you.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a006 = {
	title: 'Into the Wild Plains',
	desc: 'With only a barely traveled path as your guide, you look around and see expansive rolling plains covered with dried out tall-grass. You wonder what adventures await you in the distance.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a007 = {
	title: 'A Resting Room',
	desc: 'A platform to place your shoes before entering the room greets you. It’s a comfortable looking room lined with the finest furs invites you to take a rest and relax here. Frequented by villagers who discuss matters with the Elders.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a008 = {
	title: 'A Large Hovel',
	desc: 'A spacious interior with a smooth stone foundation stretches from corner to corner. Intricately carved wooden furniture adorn the space. Fur carpets line the floor.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a009 = {
	title: 'Ancestral Hall',
	desc: 'A quiet wooden hallway is bathed in plumes of smoke rising from incense that are maintained around the clock.  Wooden carved murals of the ruling lineage of the village are etched into the walls with miniature thuribles below them.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a010 = {
	title: 'A Well-Traveled Dirt Path',
	desc: 'A beaten path extends from the village square to the south, distancing itself from the hubbub of the common village areas. The greenery of the shrubs and trees seem to be a little denser to the west.  A small hovel sits to the east.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a011 = {
	title: 'A Dirt Path',
	desc: 'A well traveled path lined with bushes runs to the north and south.  A villagers abode sits to the east of this path and the village square is barely visible to the south.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a012 = {
	title: 'End of a Dirt Path',
	desc: 'The last stretch of a well-traveled dirt path.  Beyond here is barely-ventured wilderness.  A modest but inviting hovel sits to the east.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a013 = {
	title: 'An All Too Familiar Room',
	desc: 'Just a small but comfortable crawlspace for you to go to sleep.  A rush bed is pushed against the side stone wall below a tiny circular window.  Light streams through during the daytime.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a014 = {
	title: 'A Warm and Homely Hovel',
	desc: 'A modest but well-constructed hovel warmly invites you to relax.  The wood-colored arrangements and earthy tones create a dark but inviting abode. Candles and a modest lamp dot the walls and tables. Various knick-knacks accumulate in nooks and crannies.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a015 = {
	title: 'A Lush Vegetable Garden',
	desc: 'Wooden planting boxes line the area as various vegetables, herbs and flowers of bright colors sprout everywhere. A small shack occupies the corner of the garden plot.  Birds, bees and butterflies flitter about.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a016 = {
	title: 'An Open-Air Kitchen',
	desc: 'A modest stone oven sits prominently in this cooking area, exposed to the outdoors. All manner of wooden cooking utensils with the rare steel cutting blade scatter the area.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a017 = {
	title: 'A Stone Storage Room',
	desc: 'Rough rocks make up the walls of this storage area.  Various steel blades and what looks to be standard issue militia equipment line the walls and tables.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a018 = {
	title: 'A Well-Kept Hovel',
	desc: 'The stone foundations of this clean hovel signifies a family of relatively moderate status.  Steel and brass odds and ends line the windowsills.  Pristine hand-crafted furniture invites you to take a rest.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a019 = {
	title: 'A Large Garden',
	desc: 'Perfectly trimmed hedges line the large plot.  All manners of decorative flowers form patterns around this man-made botanical wonder. A finely crafted wooden gazebo sits in the center of the garden.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a020 = {
	title: 'A Nice Bedroom',
	desc: 'Wooden armoires and a closet line the wall.  A giant bed with immaculate linens quietly sits here. Several houseplants in a corner here and there accent the room.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a021 = {
	title: 'A Sitting Room',
	desc: 'A guest room made for injured patients to relax and recuperate. Poultices, jars of liquid and dried herbs sprawl on an old wooden oak table. A small resting bed lies comfortably against the north wooden wall.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a022 = {
	title: 'A Small Hovel',
	desc: 'One of the smaller hovels of the village.  Entirely made of branches, rush and dried leaves. A rush bed lays in the corner.  Although small, this hovel seems to receive the most visitors.  The liveliness makes up for the cramped quarters.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a023 = {
	title: 'A Small Herb Garden',
	desc: 'Piles of stones create spiral herb gardens that the healers use. Dried herbs occupy the woven baskets, ready to be crushed into powder.  The small garden is home to most of the villages curative herbs.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a024 = {
	title: 'A Medical Pantry',
	desc: 'You’re careful not to bump into the racks and rows of vials containing different types of plant powders and liquids. Various musky odors clash to form an herbal medicinal aroma.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a025 = {
	title: 'A Forest Path',
	desc: 'A myriad of birds chirp and rustling of trees signify that this is the outskirts of a lush forest leading into a valley. All of the sudden you feel relaxed.  You see a giant majestic tree in a clearing to the distant west.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a026 = {
	title: 'Under a Giant Fig Tree',
	desc: 'The shade of a luminescent fig tree embraces you with its graceful protection from the wild pastoral woods. Beams of sunlight cast rays through the treetops onto flittering harmless creatures. The massive trunk and roots stabilizing this towering guardian of the forest protects both man and nature with motherly solitude.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a027 = {
	title: 'Deeper Into the Forest',
	desc: 'Towering trees of various lengths densely pack this rarely traveled path.  You feel an ominous unfamiliarity with this place.  Almost lost in this sea of green, you look around and barely make out a path to the north.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a028 = {
	title: 'Near a Forest Stream',
	desc: 'You hear a babbling brook meandering through the area.  It temporarily relieves your anxiety of being in an unfamiliar place. You hear sounds of wildlife.  Oddly you don’t feel threatened.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a029 = {
	title: 'Deep in a Forest',
	desc: 'The deeper you venture, the stranger the plants become.  Everything takes on a life of its own.  You feel as if you’re a guest in a kingless kingdom of the forest.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};
//***********************************************************//
rooms.a030 = {
	title: 'Deep in a Forest Valley',
	desc: 'You lose track of time as you stumble upon a lush valley.  A sacred-like feeling encompasses you.  Its animals stare at you, acknowledging that you are not a threat to their forest kingdom, they leisurely continue on their way.',
	exits: {
		east: '',
		west: '',
		south: '',
		north: '',
		up: '',
		down:''
	},
	mobs: [],
	items: []
};

