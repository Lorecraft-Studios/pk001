
/*******************************
 * DEVELOPMENT HELPER FUNCTIONS
 *******************************/

 dev = {};

//Function to reset the Rooms.mobs array to empty. Used for clearing ghosted mob IDs in a room.
dev.clearRoomMobArray = function(roomId) {
  Rooms.update( {_id: roomId },{ $set: {mobs: []} });
}
