//Game Engine - handles data manipulation and where the bulk of the API resides.

engine = {};

engine.test = console.log('testing engine.test Hello');

//echoes a message to the player log. Defaults to player p001
//if no parameter is passed to player.
engine.echoPlayerEventLog = function(msg, player) {
	if (!player) {player = "p001"};
	Player.update( { _id: player },{ $push: {eventLog: msg} } );
};


//clears the players eventLog. Default parameter for player is p001
//if nothing passed through function.
engine.clearPlayerEventLog = function(player) {
	if (!player) {player = "p001"};
	Player.update( {_id: player },{ $set: {eventLog: []} });
};