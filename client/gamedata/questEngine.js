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
		engine.echoPlayerEventLog('Romulus enters from the east with a mischievous grin on his face.');
		engine.echoPlayerEventLog('Remus enters the room, ready to cause trouble.');
		engine.echoPlayerEventLog('Aerus enters the room panting and out of breath.')
	}
};
