if (Meteor.isClient) {
	Template.welcome.events({
		'click #enter':function() {
			Player.update({_id: 'p001'}, {$set: {roomAt: 'r001'}});
			$('#enter').remove();
			$('.welcome').remove();
			$('.exits').show();
		}
	}),
	Template.roomTitle.helpers({
		roomTitle:function() {
			return Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].title;
		}
	}),
	Template.roomDesc.helpers({
		roomDesc:function() {
			return Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].desc;
		}
	}),
	Template.roomExits.helpers({
		roomExits:function() {
			for (var key in Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits) {
				var targetExit = '.' + key + 'exit';
				if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits[key]) {
					$(targetExit).removeClass('exitTrue');
					$(targetExit).removeClass('exitFalse');
					$(targetExit).addClass('exitTrue');
				} else {
					$(targetExit).removeClass('exitTrue');
					$(targetExit).removeClass('exitFalse');
					$(targetExit).addClass('exitFalse');
				}
			}
		}
	}),

	//Various helpers for Template.roomExits.events


	Template.roomExits.events({
		'click .northexit':function() {
			if (engine.hasExit(engine.playerCurrentRoom(),'north')) {
				engine.clearPlayerEventLog();
				engine.movePlayer('north');
			}
		},
		'click .eastexit':function() {
			if (engine.hasExit(engine.playerCurrentRoom(),'east')) {
				engine.clearPlayerEventLog();
				engine.movePlayer('east');			
			}
		},
		'click .southexit':function() {
			if (engine.hasExit(engine.playerCurrentRoom(),'south')) {
				engine.clearPlayerEventLog();
				engine.movePlayer('south');
			}
		},
		'click .westexit':function() {
			if (engine.hasExit(engine.playerCurrentRoom(),'west')) {
				engine.clearPlayerEventLog();
				engine.movePlayer('west');
			}
		},
		'click .upexit':function() {
			if (engine.hasExit(engine.playerCurrentRoom(),'up')) {
				engine.clearPlayerEventLog();
				engine.movePlayer('up');
			}
		},
		'click .downexit':function() {
			if (engine.hasExit(engine.playerCurrentRoom(),'down')) {
				engine.clearPlayerEventLog();
				engine.movePlayer('down');
			}
		},
	})
	Template.roomMobs.helpers({
		roomMobs:function() {
			var mobsArray = Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].mobs;
			var mobsObject = [];
			for (i=0; i < mobsArray.length; i++){
				mobsObject.push(Mobs.find({_id: mobsArray[i]}).fetch()[0])
			}
			return mobsObject;
		}
	}),
	Template.eventDisplay.helpers({
		eventDisplay: function(){
			return Player.find({_id: 'p001'}).fetch()[0].eventLog
		}

	}),
	Template.roomMobs.events({
    'click span.mobclick':function(event) {
      $('#menu').css('left', event.pageX+5);
      $('#menu').css('top', event.pageY+5);
      $('#menu').fadeToggle();
      Session.set('clickId', this._id)
    }
	}),
	Template.roomItems.helpers({
		roomItems:function() {
			if  (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].items.length >= 1) {
				return Mobs.find({_id: Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].items[0]});
			}
		}
	}),
	Template.contextMenu.events({
    'click .menuItemCancel':function() {
      $('#menu').fadeToggle();
    },
    'click .menuItemSpeak':function(){
    	$('#menu').fadeToggle();
    	var currentMob = Session.get('clickId');
    	var diaStatus = Dialogue.find({_id: currentMob}).fetch()[0].diaStatus[0];
    	// If mob has dialogue, echo in event log
    	if (Dialogue.find({_id: currentMob}).fetch()[0][diaStatus].convo) {
    		engine.echoPlayerEventLog(Dialogue.find({_id: currentMob}).fetch()[0][diaStatus].convo);
    	}
    	//If there is a script to run, run from quest engine
    	if (Dialogue.find({_id: currentMob}).fetch()[0][diaStatus].hasScript) {
				questEngine[Dialogue.find({_id: currentMob}).fetch()[0][diaStatus].hasScript].s1();
			}
		//If dialogue requires player input, show the dialogue response div
    	if (Dialogue.find({_id: currentMob}).fetch()[0][diaStatus].response.length >= 1) {
    		$('.dialogueResponse').show();
    	}
    	//If dialogue doesn't require input and needs to move, move status to next convo
    	if (Dialogue.find({_id: currentMob}).fetch()[0][diaStatus].next1.length >= 1) {
    		Dialogue.update({_id: currentMob}, {$set: {diaStatus: Dialogue.find({_id: currentMob}).fetch()[0][diaStatus].next1}});
    	}
    },
    'click .menuItemAttack':function () {
    	$('#menu').fadeToggle();
    	var currentRoom = Player.find({_id: 'p001'}).fetch()[0].roomAt;
    	var currentMob = Session.get('clickId');
    	var currentMobHp = Mobs.find({_id: currentMob}).fetch()[0].hp;
    	Mobs.update({_id: currentMob}, {$set: {hp: currentMobHp-100}});
    	if (Mobs.find({_id: currentMob}).fetch()[0].hp <= 0) {
    		engine.mobDeath();
    	}
    }
	}),
	Template.dialogueResponse.helpers({
		dialogueResponse:function(){
			var diaStatus = Dialogue.find({_id: Session.get('clickId')}).fetch()[0].diaStatus[0];
			var response = Dialogue.find({_id: Session.get('clickId')}).fetch()[0][diaStatus].response;
			var responseText = [];
			for (i=0;i<response.length;i++) {
				responseText.push(Dialogue.find({_id: Session.get('clickId')}).fetch()[0][response[i]])
			}
			return responseText;

		}
	}),
	Template.dialogueResponse.events({
		'click .rclick ':function() {
			var currentMob = Session.get('clickId');
			Session.set('rclick', this._id);
			var responseClicked = Session.get('rclick');
			var diaStatus = Dialogue.find({_id: currentMob}).fetch()[0].diaStatus[0];
			//Echos response clicked to event log.
			engine.echoPlayerEventLog(Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].convo);
			//Hides the dialogue response div
			$('.dialogueResponse').hide();
			//If the response has a script, run the script from quest engine
			if (Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].hasScript) {
				questEngine[Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].hasScript].s1();
			}
			//Update the status of the convo
			if (Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].next1.length >=1) {
				Dialogue.update({_id: currentMob}, {$set: {diaStatus: [Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].next1]}});
			}
			//If the convo continues with a response, echo to event log
			if (Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].next1.length >=1 ) {
				var nextConvo = Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].next1[0];
				engine.echoPlayerEventLog(Dialogue.find({_id: currentMob}).fetch()[0][nextConvo].convo);
				//If there is another response, show response
				if (Dialogue.find({_id: currentMob}).fetch()[0][nextConvo].response.length >= 1) {
					$('.dialogueResponse').show();
					console.log('test1234');
				}				
			}
				//If there is another response, continue.
				//if (Dialogue.find({_id: currentMob}).fetch()[0][nextConvo].response.length >= 1) {
			//		$('.dialogueResponse').hide();
					

			//	}
		}
	})


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
