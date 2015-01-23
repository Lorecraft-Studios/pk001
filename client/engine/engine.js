//Game Engine - handles data manipulation and where the bulk of the API resides.

engine = {};

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

//Returns the players current room Id
engine.playerCurrentRoom = function() {
  return Player.findOne({_id: 'p001'},{'roomAt': 1}).roomAt;
};

//Returns a mobs current room Id
engine.mobCurrentRoom = function(mobId) {
  return Mobs.findOne({_id: mobId},{'roomAt': 1}).roomAt;
};

//Teleports player to location.  Pass the room _id to the roomTo parameter.
//If no arguement is passed to playerId, it will default to "p001"
engine.teleportPlayer = function(roomTo, playerId) {
  if (!playerId) {playerId = "p001"};
  var roomAt = Player.findOne({_id: playerId},{'roomAt': 1}).roomAt;
  Rooms.update({_id: roomAt},{$pull:{'mobs':playerId}});
  Rooms.update({_id: roomTo},{$push:{'mobs':playerId}});
  Player.update({_id: playerId},{$set:{'roomAt': roomTo}});
};

engine.teleportMob = function(roomTo, mobId) {
  var mobCurrentRoom = Mobs.findOne({_id: mobId},{'roomAt': 1}).roomAt;
  Rooms.update({_id: mobCurrentRoom},{$pull:{'mobs':mobId}});
  Rooms.update({_id: roomTo},{$push:{'mobs':mobId}});
  Mobs.update({_id:mobId},{$set:{'roomAt':roomTo}});
};

//Moves a mob in any cardinal direction, if player is in the room that mob is leaving or entering,
//mobs movement will be echoe'd to the player's eventLog
engine.moveMob = function(mobId, direction) {
  var direction = direction.toLowerCase();
  var playerCurrentRoom = Player.findOne({_id: 'p001'},{'roomAt': 1}).roomAt;
  var mobCurrentRoom = Mobs.findOne({_id: mobId},{'roomAt': 1}).roomAt;
  var mobNextRoom = Rooms.findOne({_id:mobCurrentRoom},{'exits': 1}).exits[direction];

  
  //check if player is in currentRoom, if he is, logs echo of mob leaving to player
  if (mobNextRoom.length === 4) {  
    if (playerCurrentRoom === mobCurrentRoom) {
      var mobShortDesc = Mobs.findOne({_id:mobId},{'shortDesc': 1}).shortDesc;
      var msg = mobShortDesc + " " + "leaves to the " + direction + ".";
      engine.echoPlayerEventLog(msg);
    };
    //check if player is in mobs Next ROom, if so echoes an enter message.
    if (playerCurrentRoom === mobNextRoom) {
      var oppositeDirection = {
        north: 'south',
        south: 'north',
        east: 'west',
        west: 'east',
        up: 'below',
        down: 'above'
      };
      var mobShortDesc = Mobs.findOne({_id:mobId},{'shortDesc': 1}).shortDesc;
      var msg = mobShortDesc + " " + "comes in from the " + oppositeDirection[direction] + ".";
      engine.echoPlayerEventLog(msg);
    };
    engine.teleportMob(mobNextRoom,mobId);
  } else {
    console.log("Invalid Direction");
  }
};

//moving the player any cardinal direction.
engine.movePlayer = function(direction) {
  var direction = direction.toLowerCase();
  var playerCurrentRoom = Player.findOne({_id: 'p001'},{'roomAt': 1}).roomAt;
  var playerNextRoom = Rooms.findOne({_id:playerCurrentRoom},{'exits': 1}).exits[direction];

  if (playerNextRoom.length === 4) {
    engine.teleportPlayer(playerNextRoom,'p001');
  } else {
    engine.echoPlayerEventLog("Alas, you cannot go that way.");
  }
};














