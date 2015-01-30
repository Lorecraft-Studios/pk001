//Sergeant attacking dummy quest.
questEngine = {};

questEngine.s001 = {
	s1: function() {
		Rooms.update({_id: 'r001'}, {$push:{'mobs':'m005'}});
	}
};


questEngine.s003 = {
	s1: function() {
		engine.moveMob('m002', 'west');
		engine.moveMob('m003', 'west');
		engine.moveMob('m004', 'west');
	}
};

questEngine.s004 = {
	s1: function() {
		var currentMob = Session.get('clickId');
		var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 1 || Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 11 ) {
			engine.echoPlayerEventLog('You gracefully slash the dummy, it falls to the ground in bits.');
			Rooms.update({_id: currentRoom}, {$pull: {mobs: currentMob}});
			Dialogue.update({_id: 'm001'}, {$set: {diaStatus: [3]}});
		}
	}
};