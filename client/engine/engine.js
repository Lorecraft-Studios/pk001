//Game Engine - handles data manipulation and where the bulk of the API resides.

engine = {};

engine.test = console.log('testing engine.test Hello')

//echoes a message to the player log. Defaults to player p001
//if no parameter is passed to player.
engine.echo = function(msg, player) {
	if (!player) {player = "p001"};
	Player.update( { _id: player },{ $push: {eventLog: msg} } );
};

