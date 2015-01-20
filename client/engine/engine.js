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
  if (!playerId) {playerId = "p001"};
  var roomAt = Player.findOne({_id: playerId},{'roomAt': 1}).roomAt._id;
  Rooms.update({_id: roomAt},{$pull:{'mobs':playerId}});
  Rooms.update({_id: roomTo},{$push:{'mobs':playerId}});
  Player.update({_id: playerId},{$set:{'roomAt': roomTo}});
}
//currently the above funtion ghosts and theres no way to check if the ID is already in that room, so 
//sometimes it'll have the same ID's multiple times in the same room.


//copy paste above function to create teleportItem and teleportMob











