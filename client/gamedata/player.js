//Create a new local minimongo database on the client only
Player = new Mongo.Collection();

Player.insert({
	_id: "p001",
	userName: "",
	roomAt: "",
	inv:[],
	eventLog: []
});

