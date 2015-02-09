//Sergeant attacking dummy quest.
questEngine = {};

questEngine.s001 = {
	s1: function() {
		//Training Dummy enters room for quest
		Rooms.update({_id: 'r001'}, {$push:{'mobs':Mobs.findOne({_id: 'm005'})}});
		//To prevent talking to the trainer repeatedly.
		//Stop multiple spawns of training dummys.
		Dialogue.update({_id: 'm001'}, {$set: {diaStatus: [0]}});
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
		var currentMob =Session.get('clickId')
		var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 0) {
			engine.echoPlayerEventLog('You gracefully slash the dummy, it falls to the ground in bits.');
			//Removes Target dummy from the room
			Rooms.update({_id: currentRoom}, {$pull: {mobs: {_id: currentMob}}});
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
			if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 14 || Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 13 ) {
				engine.echoPlayerEventLog('You quickly overpower Romolus with your new training.');
				engine.echoPlayerEventLog('Romolus spits, \"You got lucky, I slipped on the dirt.\"');
				questEngine.s005.attacked = 'yes';
			}
		}
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
			if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 14 || Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 13 ) {
				engine.echoPlayerEventLog('You gracefully use Remus\' force against him.  He falls face first into the ground.' );
				engine.echoPlayerEventLog('Romolus spits, \"Cheater, what poor technique.\"');
				questEngine.s006.attacked = 'yes';
			}
		}
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
			if (Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 14 || Dialogue.findOne({_id: 'm001'}).diaStatus[0] === 13 ) {
				engine.echoPlayerEventLog('You begin to approach Aerus.');
				engine.echoPlayerEventLog('Aerus beings to cry...');
				Rooms.update({_id: 'r001'}, {$set: {'exits.east': 'r002'}});
				engine.moveMob('m004', 'east');
				Rooms.update({_id: 'r001'}, {$set: {'exits.east': ''}});
				questEngine.s007.attacked = 'yes';
			}
		}
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
		Rooms.update({_id: 'r001'}, {$set: {'exits.east': 'r002'}});
		engine.echoPlayerEventLog('Remus whispers, \"We\'ll be waiting for you outside.\"')
		engine.moveMob('m002', 'east');
		engine.moveMob('m003', 'east');
		//Allows player to SPEAK with Romulus and Remus
		Dialogue.update({_id: 'm002'}, {$set: {diaStatus: [1]}});
	}
};

//Opens to exit east to go home after getting beaten by Romulus and Remus
questEngine.s010 = {
	s1: function() {
		Rooms.update({_id: 'r002'}, {$set: {'exits.east': 'r003'}});
	}
}

//entering your home for the first time, mom will start a conversation.
questEngine.s020 = {
	enteredOnce: "no",
	playerSleep: "no",
	s1: function() {
		if (questEngine.s020.enteredOnce === 'no') {
			engine.echoPlayerEventLog('Your mom welcomes you home with a hug.');
			engine.echoPlayerEventLog('She has a concerned look on her face.');
			questEngine.s020.enteredOnce = 'yes';
		}
		if (questEngine.s020.playerSleep === 'yes') {
			engine.echoPlayerEventLog('Mother: \“Have a good day at training now!\”');
			engine.echoPlayerEventLog('Father: \“Remember to treat your enemies with honor and respect!\”');
			questEngine.s020.playerSleep = 'no';
		}
	}
}

questEngine.s021 = {
	s1:function() {
		$('.dialogueResponse').hide();
		Meteor.setTimeout(function() {
			engine.echoPlayerEventLog('Your mother tightly bandages the wounds and you feel as good as new.');
		}, 2000);
		Meteor.setTimeout(function() {
			engine.echoPlayerEventLog('\“Okay all set! It\’s time for dinner now.  Can you help me get some vegetables in the garden?\” asks mother.');
			$('.dialogueResponse').show();
		}, 4000);
	}
}

questEngine.s022 = {
	//Spawns the vegetables into the garden
	s1:function() {
		Rooms.update({_id: 'r015'}, {$push: {'items': Items.findOne({_id: 'i001'})}});
	}
}

questEngine.s023 = {
	//moves mother dialogue forward after picking up vegetables
	s1:function () {
		var currentItem = Session.get('itemId');
    	var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		Dialogue.update({_id: 'm006'}, {$set: {diaStatus: [7]}});
		//Picks up the bed
		engine.echoPlayerEventLog('You pick up ' + Items.findOne({_id: currentItem}).shortDesc + '.');
		//pulls/removes items from the room
    	Rooms.update({_id: currentRoom}, {$pull: {items: {_id: currentItem}}});
	}
}

questEngine.s024 = {
	s1:function () {
		engine.echoPlayerEventLog('Mother moseys on over to the kitchen and starts the fire.');
		Meteor.setTimeout(function() {
			engine.echoPlayerEventLog('A waft of spiced stew reaches your nose.');
		}, 2000);
		Meteor.setTimeout(function() {
			engine.echoPlayerEventLog('\“Here give this spoonful of stew to your father to taste\”, says mother.');
			Dialogue.update({_id: 'm006'}, {$set: {diaStatus: [0]}});
		}, 4000);
		Meteor.setTimeout(function() {
			engine.echoPlayerEventLog('Father lifts the spoon to his mouth to taste the stew.');
			//enables to speak with father
			Dialogue.update({_id: 'm007'}, {$set: {diaStatus: [1]}});
		}, 5000);
	}
}

questEngine.s025 = {
	s1:function() {
		Meteor.setTimeout(function() {
			engine.echoPlayerEventLog('\“So tell me more about the fight with the kids\”, says father calmly.');
			Dialogue.update({_id: 'm007'}, {$set: {diaStatus: [2]}});
			$('.dialogueResponse').show();
		}, 2000);
	}
}

questEngine.s026 = {
	s1:function() {
		$('.dialogueResponse').hide();
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“Your great-great-great grandfather was a general in the army.\”')}, 2000);
		Meteor.setTimeout(function() {
			engine.echoPlayerEventLog('\“He had the heart and courage of a lion.  Do you know how he amassed his army?\”, asks dad.');
			Dialogue.update({_id: 'm007'}, {$set: {diaStatus: [8]}});
			$('.dialogueResponse').show(); 
		}, 4000);
	}
}

questEngine.s027 = {
	s1:function() {
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“He treated even his greatest enemies with respect.\”, says dad.  \“Often caring for them after battles and helping their families out.\"')}, 2000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“Because of that, eventually his enemies joined him in battle, and he united the fragmented empire\”, says father.')}, 4000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“I hope you can be just like him.  That\’s the way of the warrior, to win their hearts.  The sword and the shield, they\’re important, but not as important as the heart of a true warrior\”, says father.')}, 6000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“It\’s getting late, I\'ll slowly tell you more about our family.  You should get some sleep now.  Mother changed the bedsheets today.  You should be well-rested for tomorrows training\”, says father.')}, 8000);
		Dialogue.update({_id: 'm007'}, {$set: {diaStatus: [0]}}); 
	}
}

questEngine.s028 = {
	bedClicked: 'no',
	s1:function() {
		if (questEngine.s028.bedClicked === 'no') {
			//close south exit so player can't leave room
			Rooms.update({_id: 'r013'}, {$set: {'exits.south': ''}});
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('You pull up the furs to cover yourself from the biting cold.')}, 2000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Your mind wanders deep into the night…')}, 4000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Deeper and deeper you fall…')}, 6000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Into the sleep beyond night…')}, 8000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Fully immersed into the dream world…')}, 12000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('You hear faint beating of hooves from a distance…')}, 14000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Pangs of metal clashing…')}, 16000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('You feel on edge as a field comes into focus…')}, 18000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Hundreds of thousands of troops lined up…')}, 20000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('A blow of the horn…')}, 22000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Banners waving in the raspy cold wind…')}, 24000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Sunlight starts streaming into the room…')}, 28000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('The field begins to disappear as you begin to open your eyes.')}, 30000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('You think about the dream.  A familiar one.  This wasn’t the first time.')}, 32000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('You wonder if your parents are awake yet.');
				//reopens south exit when player wakes up
				Rooms.update({_id: 'r013'}, {$set: {'exits.south': 'r014'}});
				//changes Romulus description and location
				Mobs.update({_id: 'm002'}, {$set: {longDesc: {part1: '', part2: ' is here hunching over, not feeling too well.', part3: '', clickPart1: 'Romulus', clickPart2: '', clickPart3: '',}}});
				engine.teleportMob('r011', 'm002');
			}, 34000);
		}
		questEngine.s028.bedClicked = 'yes';
		questEngine.s020.playerSleep = 'yes';
		questEngine.s029.playerSleep = 'yes';
	}
}

questEngine.s029 = {
	enteredOnce: "no",
	playerSleep: "no",
	s1: function() {
		if (questEngine.s029.enteredOnce === 'no' && questEngine.s029.playerSleep === 'yes') {
			engine.moveMob('m008', 'west');
			engine.teleportMob('r011', 'm002') //remove after testing
			engine.echoPlayerEventLog('“Oh no, Romulus what sickness has befallen you?”');
			engine.echoPlayerEventLog('Romulus groans painfully.')
			questEngine.s029.enteredOnce = 'yes';
			Session.set('clickId', 'm002')
			Dialogue.update({_id: 'm002'}, {$set: {diaStatus: [10]}});
			$('.dialogueResponse').show(); 
		}
	}
}

questEngine.s030 = {
	s1:function() {
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Romulus glances at his mother.');
			Session.set('clickId', 'm008');
			Dialogue.update({_id: 'm008'}, {$set: {diaStatus: [1]}});
			$('.dialogueResponse').show(); 
		}, 2000);
	}
}

questEngine.s031 = {
	s1:function() {
		engine.moveMob('m002', 'east');
		engine.moveMob('m008', 'east');
	}
}






