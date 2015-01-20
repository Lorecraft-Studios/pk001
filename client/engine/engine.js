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


//Teleports player to location.  Pass the room _id to the roomTo parameter.
//If no arguement is passed to playerId, it will default to "p001"
engine.teleportPlayer = function(roomTo, playerId) {

  //set default playerId to "p991" if no playerId parameter was passed through		
  if (!playerId) {playerId = "p001"};

  //Set roomAt to the ID of the room the player is currently in.
  var roomAt = Player.findOne({_id: playerId},{'roomAt': 1}).roomAt;

  //Remove the player ID from the room that player is currently in.
  Rooms.update({_id: roomAt},{$pull:{'mobs':playerId}});

  //Push the player ID to the room that he will be teleported to.
  Rooms.update({_id: roomTo},{$push:{'mobs':playerId}});

  //Update the players roomAt key with the new room he's in.
  Player.update({_id: playerId},{$set:{'roomAt': roomTo}});
};











