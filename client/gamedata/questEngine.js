//Sergeant attacking dummy quest.
questEngine = {};

questEngine.s001 = {
	s1: function() {
		Rooms.update({_id: 'r001'}, {$push:{'mobs':'m005'}});
	}
};

questEngine.s002 = {
	dummyDead: false,
	s1: function() {
		questEngine.s002.dummDead = true;
		Dialogue.update({_id: 'm001'}, {$set: {diaStatus: [3]}});
	}
};

questEngine.s003 = {
	s1: function() {
		engine.moveMob('m002', 'west');
		engine.moveMob('m003', 'west');
		engine.moveMob('m004', 'west');
	}
};
