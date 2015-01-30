//Sergeant attacking dummy quest.
questEngine = {};

questEngine.s001 = {
	s1: function() {
		//Training Dummy enters room for quest
		Rooms.update({_id: 'r001'}, {$push:{'mobs':'m005'}});
	}
};


questEngine.s003 = {
	s1: function() {
		//Romolus Remus and Aerus enter the room
		engine.moveMob('m002', 'west');
		engine.moveMob('m003', 'west');
		engine.moveMob('m004', 'west');
	}
};

questEngine.s004 = {
	s1: function() {
		var currentMob = Session.get('clickId');
		var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 1) {
			engine.echoPlayerEventLog('You gracefully slash the dummy, it falls to the ground in bits.');
			//Removes Target dummy from the room
			Rooms.update({_id: currentRoom}, {$pull: {mobs: currentMob}});
			//Moves Sarge dialogue along
			Dialogue.update({_id: 'm001'}, {$set: {diaStatus: [3]}});
		}
	}
};

questEngine.s005 = {
	//var to track if player has attacked mob, to prevent player from attacking
	//more than once to prevent spam
	attacked: 'no',
	s1: function() {
		var currentMob = Session.get('clickId');
		var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		if (questEngine.s005.attacked === 'no') {
			if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 10 || Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 13 ) {
				engine.echoPlayerEventLog('You quickly overpower Romolus with your new training.');
				engine.echoPlayerEventLog('Romolus spits, \"You got lucky, I slipped on the dirt.\"');			
			}
		}
		questEngine.s005.attacked = 'yes';
		//conditional to check if all three mobs have been attacked
		questEngine.s008.s1();
	}
};

questEngine.s006 = {
	//var to track if player has attacked mob, to prevent player from attacking
	//more than once to prevent spam
	attacked: 'no',
	s1: function() {
		var currentMob = Session.get('clickId');
		var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		if (questEngine.s006.attacked === 'no') {
			if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 10 || Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 13 ) {
				engine.echoPlayerEventLog('You gracefully use Remus\' force against him.  He falls face first into the ground.' );
				engine.echoPlayerEventLog('Romolus spits, \"Cheater, what poor technique.\"');
			}
		}
		questEngine.s006.attacked = 'yes';
		//conditional to check if all three mobs have been attacked
		questEngine.s008.s1();
	}
};

questEngine.s007 = {
	//var to track if player has attacked mob, to prevent player from attacking
	//more than once to prevent spam
	attacked: 'no',
	s1: function() {
		var currentMob = Session.get('clickId');
		var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		if (questEngine.s007.attacked === 'no') {
			if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 10 || Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 13 ) {
				engine.echoPlayerEventLog('You begin to approach Aerus.');
				engine.echoPlayerEventLog('Aerus beings to cry...');
				Rooms.update({_id: 'r001'}, {$set: {exits: {east: 'r002'}}});
				engine.moveMob('m004', 'east');
				Rooms.update({_id: 'r001'}, {$set: {exits: {east: ''}}});
			}
		}
		questEngine.s007.attacked = 'yes';
		//conditional to check if all three mobs have been attacked
		questEngine.s008.s1();
	}
};

//conditional to check if all three mobs have been attacked.
//moves dialogue along if true
//speak to sarge to continue
questEngine.s008 = {
	s1: function() {
		if (questEngine.s005.attacked === 'yes' && questEngine.s006.attacked === 'yes' && questEngine.s007.attacked === 'yes') {
			Dialogue.update({_id: 'm001'}, {$set: {diaStatus: [15]}});
		}
	}
};

//After completing quest, Romulus and Remus move east and threaten player
questEngine.s009 = {
	s1: function() {
		//Update room to show east exit
		Rooms.update({_id: 'r001'}, {$set: {exits: {east: 'r002'}}});
		engine.echoPlayerEventLog('Remus whispers, \"We\'ll be waiting for you outside.\"')
		engine.moveMob('m002', 'east');
		engine.moveMob('m003', 'east');
		
	}
}





