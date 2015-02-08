//Game Engine - handles data manipulation and where the bulk of the API resides.

engine = {};

//Helper: echoes a message to the player log. Defaults to player p001
//if no parameter is passed to player.
engine.echoPlayerEventLog = function(msg, player) {
	if (!player) {player = "p001"};
	Player.update( { _id: player },{ $push: {eventLog: msg}});
  Tracker.afterFlush(function() {   
    $('.eventDisplay').scrollTop($('.eventDisplay')[0].scrollHeight);
  });
};

//Helper: clears the players eventLog. Default parameter for player is p001
//if nothing passed through function.
engine.clearPlayerEventLog = function(player) {
	if (!player) {player = "p001"};
	Player.update( {_id: player },{ $set: {eventLog: []} });
};

//Helper: Returns the players current room Id
engine.playerCurrentRoom = function() {
  return Player.findOne({_id: 'p001'},{'roomAt': 1}).roomAt;
};

//Helper: Returns a mobs current room Id
engine.mobCurrentRoom = function(mobId) {
  return Mobs.findOne({_id: mobId},{'roomAt': 1}).roomAt;
};

//Helper: Checks if an exit relative to the room exists. Takes in RoomId and Cardinal Direction
engine.hasExit = function(roomId,direction) {
  return (Rooms.findOne({_id:roomId},{exit: 1}).exits[direction].length === 4)
};

//Teleports player to location.  Pass the room _id to the roomTo parameter.
//If no arguement is passed to playerId, it will default to "p001"
engine.teleportPlayer = function(roomTo, playerId) {
  if (!playerId) {playerId = "p001"};
  Rooms.update({_id: engine.playerCurrentRoom()},{$pull:{'mobs':playerId}});
  Rooms.update({_id: roomTo},{$push:{'mobs':playerId}});
  Player.update({_id: playerId},{$set:{'roomAt': roomTo}});
  $('.dialogueResponse').hide()
};

engine.teleportMob = function(roomTo, mobId) {
  Rooms.update({_id: engine.mobCurrentRoom(mobId)},{$pull:{'mobs': {_id: mobId}}});
  Rooms.update({_id: roomTo},{$push:{'mobs':Mobs.findOne({_id: mobId})}});
  Mobs.update({_id:mobId},{$set:{'roomAt':roomTo}});
};

//Moves a mob in any cardinal direction, if player is in the room that mob is leaving or entering,
//mobs movement will be echoe'd to the player's eventLog
engine.moveMob = function(mobId, direction) {
  var direction = direction.toLowerCase();
  var mobNextRoom = Rooms.findOne({_id:engine.mobCurrentRoom(mobId)},{'exits': 1}).exits[direction];

  
  //check if player is in currentRoom, if he is, logs echo of mob leaving to player
  if (engine.hasExit(engine.mobCurrentRoom(mobId),direction)) {  
    if (engine.playerCurrentRoom() === engine.mobCurrentRoom(mobId)) {
      var mobShortDesc = Mobs.findOne({_id:mobId},{'shortDesc': 1}).shortDesc;
      var msg = mobShortDesc + " " + "leaves to the " + direction + ".";
      engine.echoPlayerEventLog(msg);
    };
    //check if player is in mobs Next ROom, if so echoes an enter message.
    if (engine.playerCurrentRoom() === mobNextRoom) {
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
  engine.roomEnterQuest()
};

//Takes a packed or unpacked string eg. '2e4nse8s' and moves the player with a delay for each step
//variance in delay is optional.
engine.autowalk = function(dirs,delay,variance) {
  
  //first validate string, if not throw error
  try {
    if (dirs.match(/[^newsud\d+]/gi)) throw "Not a valid direction string";
  }
  catch(err) {
    return console.log(err);
  }

  //unpack the directions and turn into array
  var newdirs = dirs.replace(/(\d+)([a-z])/gi,function(match, p1, p2){
    return Array(parseInt(p1)+1).join(p2)
  }).toLowerCase().split("");

  //turn single direction letters into full words
  newdirs = newdirs.map(function(v,i){
    if (v === 'e') {return 'east'};
    if (v === 'w') {return 'west'};
    if (v === 'n') {return 'north'};
    if (v === 's') {return 'south'};
    if (v === 'u') {return 'up'};
    if (v === 'd') {return 'down'};
    return v;
  });

  //set delay variance to 0 if no parameter is passed.
  if (variance === undefined) {variance = 0};

  for (var i = 0; i < newdirs.length; i++) {
    //wrap in closure
    moveOnce = function (array,i) {
       return Meteor.setTimeout(function(){
          console.log('moving...')
          //wrap in closure
          engineMove = function(array,i) {
            return engine.movePlayer(array[i])}(array,i);
        },(i+1)*(delay+(Math.floor(Math.random()*(variance*2+1)-(variance/2))))  )
    }(newdirs,i);
  }
};

//checks to see if an event is triggered upon room enter
engine.roomEnterQuest = function () {
  var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
  var roomEnterTrigger = Rooms.findOne({_id: currentRoom}).roomEnterTrigger;
  if (roomEnterTrigger) {
    questEngine[roomEnterTrigger].s1();
  }

}




