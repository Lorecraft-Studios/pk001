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
				Dialogue.update({_id: 'm004'}, {$set: {diaStatus: [0]}});
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
	questDone: 'no',
	s1: function() {
		if (questEngine.s009.questDone === 'no') {
			//Update room to show east exit
			Rooms.update({_id: 'r001'}, {$set: {'exits.east': 'r002'}});
			engine.echoPlayerEventLog('Remus whispers, \"We\'ll be waiting for you outside.\"')
			engine.moveMob('m002', 'east');
			engine.moveMob('m003', 'east');
			//Allows player to SPEAK with Romulus and Remus
			Dialogue.update({_id: 'm002'}, {$set: {diaStatus: [1]}});
			questEngine.s009.questDone = 'yes';
		}
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
		//Picks up the vegetables
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
				engine.teleportMob('r028', 'm003');
				engine.teleportMob('r030', 'm004');
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
	movedHome: 'no',
	s1:function() {
		if (questEngine.s031.movedHome === 'no') {
			//moves mother and romulus out of room to their home
			engine.moveMob('m002', 'east');
			engine.moveMob('m008', 'east');
			Dialogue.update({_id: 'm002'}, {$set: {diaStatus: [0]}});
			Dialogue.update({_id: 'm008'}, {$set: {diaStatus: [0]}});
			questEngine.s031.movedHome = 'yes';
		}
	}
}

questEngine.s032 = {
	returnRemus: 'no',
	savedAerus: 'no',
	s1:function() {
		if (questEngine.s032.returnRemus === 'yes' && questEngine.s032.savedAerus === 'yes') {
			Session.set('clickId', 'm009');
			engine.echoPlayerEventLog('\“Thank you so much! You found Aerus! She\’s happier than ever now!\”, says Aerus\’ Mother.');
			Dialogue.update({_id: 'm009'}, {$set: {diaStatus: [5]}});
			$('.dialogueResponse').show(); 
		} else if (questEngine.s029.playerSleep ==='yes' && questEngine.s032.savedAerus === 'no'){
			//start Aerus mother quest
			engine.echoPlayerEventLog('Aerus\’ Mother heaves a heavy sigh, \“Where is she, she hasn\’t come home yet.  Oh my Aerus.  Would you happen to know what happened to her?\”')
			Session.set('clickId', 'm009');
			Dialogue.update({_id: 'm009'}, {$set: {diaStatus: [1]}});
			$('.dialogueResponse').show(); 
		}
	}
}

questEngine.s033 = {
	//Aerus crying quest
	cryingAerus:'yes',
	s1:function() {
		if (questEngine.s033.cryingAerus === 'yes' && questEngine.s029.playerSleep === 'yes') {
			engine.teleportMob('r026', 'm004');
			Dialogue.update({_id: 'm004	'}, {$set: {diaStatus: [1]}});
			var aerusCry = Meteor.setInterval(function(){
				engine.echoPlayerEventLog('Aerus sobs quietly to herself.');
				if (Dialogue.findOne({_id: 'm004'}).diaStatus[0] >= 6) {
					Meteor.clearInterval(aerusCry);
				}
			}, 3000)
		}
	}
}

questEngine.s034 = {
	s1:function() {
		Dialogue.update({_id: 'm004	'}, {$set: {diaStatus: [0]}});
		engine.echoPlayerEventLog('Aerus stops sobbing.');
		engine.echoPlayerEventLog('\“Thanks! I\’m going to learn to make hurt people all better!\”, says Aerus excitedly.');
		engine.echoPlayerEventLog('Aerus faces the tree, closes her eyes and makes a solemn and silent wish, \“Big big tree, my wish is to make sure all the hurt people I come across feel better.  Please grant me my wish.\”');
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Glowing insects start flittering about, surrounding Aerus.')}, 3000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('The leaves of the tree start rustling and rustling.')}, 6000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('The wind calms down and flowers begin to bloom unnaturally fast on the forest floor.');
			engine.echoPlayerEventLog('Aerus says, \“I\’m going to go home and tell mommy that I want to help all the hurt people in the world!\”');
		}, 9000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Aerus drops her wooden sword.')}, 12000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“Thanks for helping me out! I\’m going home now!\”, says Aerus');
			engine.moveMob('m004', 'east');
			engine.teleportMob('r022', 'm004');
			questEngine.s032.savedAerus = 'yes';
			questEngine.s033.cryingAerus = 'no';
			Dialogue.update({_id: 'm004	'}, {$set: {diaStatus: [0]}});
		}, 15000);
	}
}

questEngine.s035 = {
	boarDead: 'no',
	s1:function() {
		if (questEngine.s035.boarDead === 'no'){
			Mobs.update({_id: 'm003'}, {$set: {longDesc: {part1: '', part2: ' is here pinned down by a wild boar.', part3: '', clickPart1: 'Remus', clickPart2: '', clickPart3: ''}}});
			engine.teleportMob('r030', 'm003');
			engine.echoPlayerEventLog('\“Help!! Help!!\”, exclaims Remus.')
		}
	}
}

questEngine.s036 = {
	s1:function() {
		engine.echoPlayerEventLog('You quickly dislodge the boars tusk with your practice wooden sword and it goes fleeing into the woods.');
		questEngine.s035.boarDead = 'yes';
		//Remove the boar
		Rooms.update({_id: 'r030'}, {$pull: {mobs: {_id: 'm010'}}});
		//Allows Remus dialogue
		Dialogue.update({_id: 'm003'}, {$set: {diaStatus: [1]}});
		//update remus description
		Mobs.update({_id: 'm003'}, {$set: {longDesc: {part1: '', part2: ' is here, tired from the encounter with the boar', part3: '', clickPart1: 'Remus', clickPart2: '', clickPart3: ''}}});
	}
}

questEngine.s037 = {
	s1:function() {
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“I\’m sorry for what me and my brother did to you yesterday...\”');
			Dialogue.update({_id: 'm003'}, {$set: {diaStatus: [2]}});
			$('.dialogueResponse').show();
		},2000)
	}
}

questEngine.s038 = {
	s1:function() {
		Meteor.setTimeout(function(){
			engine.echoPlayerEventLog('\“I\’ll take you home Remus, we\’ll go back together\”, you say.');
			engine.echoPlayerEventLog('\“Thank you so much.  Hey don\’t forget about the herbs.  We need to bring the herbs back.\", reminds Remus."');
			//spawn herbs
			Rooms.update({_id: 'r030'}, {$push: {'items': Items.findOne({_id: 'i003'})}});
			Dialogue.update({_id: 'm003'}, {$set: {diaStatus: [0]}});
		},2200)
	}
}

questEngine.s039 = {
	//picks up herbs
	s1:function () {
		var currentItem = Session.get('itemId');
    	var currentRoom = Player.findOne({_id: 'p001'}).roomAt;
		//Picks up the herbs
		engine.echoPlayerEventLog('You pick up ' + Items.findOne({_id: currentItem}).shortDesc + '.');
		//pulls/removes items from the room
    	Rooms.update({_id: currentRoom}, {$pull: {items: {_id: currentItem}}});
    	engine.echoPlayerEventLog('Remus beings to follow you.');
    	//removes Remus from the room
    	Rooms.update({_id: 'r030'},{$pull:{'mobs': {_id: 'm003'}}});
    	Meteor.setTimeout(function () {engine.echoPlayerEventLog('\“Alright lets get back home before it gets dark\”, says Remus.');},3000);
    	questEngine.s040.playerHerbs = 'yes';
    	engine.teleportMob('r018', 'm002');
    	engine.teleportMob('r018', 'm008');
	}
}

questEngine.s040 = {
	//did player pick up herbs
	playerHerbs: 'no',
	s1:function() {
		if (questEngine.s040.playerHerbs === 'yes' && questEngine.s045.poulticeMade === 'no') {
			Dialogue.update({_id: 'm008'}, {$set: {diaStatus: [8]}});
			Session.set('clickId', 'm008');
			engine.echoPlayerEventLog('Remus stops following you.');
			//Shows remus in the room
			engine.teleportMob('r018', 'm003');
			engine.echoPlayerEventLog('\“Thank god you found Remus, he\’s safe!  You\’ve got the herbs too!\”, says Romulus\’ mother.');
			engine.echoPlayerEventLog('\“Can you take these to Aerus\’ mother next door?\”, asks Romulus\’ mother,  \“I\’m afraid I don\’t know how to make a proper poultice with this complicated herb.\”');
			$('.dialogueResponse').show();
		}
	}
}

questEngine.s041 = {
	s1:function() {
		questEngine.s032.returnRemus = 'yes';
	}
}

questEngine.s042 = {
	s1:function() {
		Dialogue.update({_id: 'm004'}, {$set: {diaStatus: [7]}});
	}
}

questEngine.s043 = {
	s1:function() {
		engine.echoPlayerEventLog('\“Here let me take a look at that…\” says Aerus as she looks over the herbs.');
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('“Hmmm looks like Feverfew.. grandma used to make poultices for me if I had headaches or just felt sick”, says Aerus.')}, 2000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Aerus grabs a cloth bandage and makes a poultice out of the Feverfew.')}, 4000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('“Here you go, just put it on his forehead and he should be good as new”, says Aerus excitedly.');
			Dialogue.update({_id: 'm004'}, {$set: {diaStatus: [10]}});
			$('.dialogueResponse').show();
		}, 6000);
	}
}

questEngine.s044 = {
	s1:function() {
		engine.echoPlayerEventLog('Aerus now follows you.');
		Rooms.update({_id: 'r022'},{$pull:{'mobs': {_id: 'm004'}}});
		questEngine.s045.poulticeMade = 'yes'
	}
}

questEngine.s045 = {
	poulticeMade: 'no',
	s1:function() {
		if (questEngine.s045.poulticeMade === 'yes') {
			engine.echoPlayerEventLog('You gently place the poultice on Romulus’ head.');
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('A few moments pass…')}, 2000);
			Meteor.setTimeout(function() {engine.echoPlayerEventLog('Romulus seems to get a little better.');
				engine.echoPlayerEventLog('“Thanks... for saving me... and my brother”, says Romulus.');
				Dialogue.update({_id: 'm002'}, {$set: {diaStatus: [13]}});
				$('.dialogueResponse').show();
			}, 4000);
		}
	}
}

questEngine.s046 = {
	s1:function() {
		engine.echoPlayerEventLog('Both Romulus and Remus salute you.');
		engine.echoPlayerEventLog('Romulus now follows you.');
		Rooms.update({_id: 'r018'},{$pull:{'mobs': {_id: 'm002'}}});
		engine.echoPlayerEventLog('Remus now follows you.');
		Rooms.update({_id: 'r018'},{$pull:{'mobs': {_id: 'm003'}}});
		engine.echoPlayerEventLog('You receive a warm smile from their mother before heading out.');
		Dialogue.update({_id: 'm001'}, {$set: {diaStatus: [101]}});
		Dialogue.update({_id: 'm100'}, {$set: {diaStatus: [1]}});
	}
}

questEngine.s047 = {
	s1:function() {
		engine.echoPlayerEventLog('Romulus Remus and Aerus look up to you in wonderment.');	
		engine.teleportMob('r001','m002');
		engine.teleportMob('r001','m003');
		engine.teleportMob('r001','m004');
	}
}

questEngine.s100 = {
	s1: function(){
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“Ahh so it is…  It is you..\”, says the Village Elder with a calm smile.')}, 2000);
		Meteor.setTimeout(function() {
				Dialogue.update({_id: 'm100'}, {$set: {diaStatus: [2]}});
				$('.dialogueResponse').show();
			}, 4000);
	}
}

questEngine.s101 = {
	s1: function(){
		//set father and mothers dialogue to the part after player speaks to village elder for first time
		Dialogue.update({_id: 'm006'}, {$set: {diaStatus: [101]}}); //mother
		console.log('Setting mother\'s diaStatus to 101');
		Dialogue.update({_id: 'm007'}, {$set: {diaStatus: [101]}});//father
		console.log('Setting father\'s diaStatus to 101') ;

	}
}


questEngine.s102 = {
	s1: function(){
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“If it’s your fate, then so be it.  There’s nothing we can do to interfere with the weaving of the cycles of time.  The Village Elder knows best\”, says Mother, \“Here take this, for your journey.\”')}, 2000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Mother gives you a few portions of homecooked meals for the journey.')}, 4000);
		Dialogue.update({_id: 'm006'}, {$set: {diaStatus: [104]}});
	}
}


questEngine.s103 = {
	s1: function(){
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“Never forget what the heart of a true warrior is, and you will be protected during your travels\”, says father.')}, 2000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“We are a humble family.  I have no wealth to hand to you.  I can only hand you down the armor that has been passed down in our family for generations.\”')}, 4000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('\“It’s a bit big for you right now, but you’ll grow into it soon enough\”, says father.')}, 6000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Father hands you the suit of ancestral leather armor.')}, 8500);
		Dialogue.update({_id: 'm007'}, {$set: {diaStatus: [104]}});
		Dialogue.update({_id: 'm100'}, {$set: {diaStatus: [7]}});

	}
}

questEngine.s104 = {
	s1: function(){
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('The Village Elder carefully unwraps intricately woven silk cloth from a sword.')}, 2000);
		
		Meteor.setTimeout(function() {
				Dialogue.update({_id: 'm100'}, {$set: {diaStatus: [8]}});
				$('.dialogueResponse').show();
			}, 6000);
	}
}

questEngine.s105 = {
	s1: function(){
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('The Village Elder hands you the Blade of Whispering Time.')}, 2000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('The blade feels cool to the touch, but quickly warms up and feels as if you’ve had it for a very long time.')}, 4000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('')}, 6000);
		Meteor.setTimeout(function() {
				Dialogue.update({_id: 'm100'}, {$set: {diaStatus: [12]}});
				$('.dialogueResponse').show();
			}, 6000);

	}
}

questEngine.s106 = {
	s1: function(){
				Meteor.setTimeout(function() {
					Dialogue.update({_id: 'm100'}, {$set: {diaStatus: [16]}});
					$('.dialogueResponse').show();
					}, 2000);
				}
}

questEngine.s107 = {
	s1: function(){
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Romulus, Remus and Aerus simultaneously look to the ground, disappointed.')}, 2000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Romulus, Remus and Aerus stop following you.')}, 3000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Remus says, \“Here, you can have my buckler for the journey.\”')}, 5000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Remus hands you his leather hide buckler.')}, 7000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Romulus says, \“You can have my waterskin.  Papa gave this to me.  It’s yours now\”.')}, 9000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Romulus hands you a leather waterskin.')}, 11000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Aerus says, \“Here you can have some bandages in case you get hurt.\”')}, 14000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Aerus hands you some bandages.')}, 16000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('Aerus says,\"We\'re going to miss you...\"')}, 17000);
		Meteor.setTimeout(function() {engine.echoPlayerEventLog('The Village Elder says, \“Swiftly now! Off you go! To the East towards Kaimuki!\”')}, 20000);
				Meteor.setTimeout(function() {
					Dialogue.update({_id: 'm100'}, {$set: {diaStatus: [19]}});
					$('.dialogueResponse').show();
					}, 20000);
				}

}