if (Meteor.isClient) {
	Template.welcome.events({
		'click #enter':function() {
			Player.update({_id: 'p001'}, {$set: {roomAt: 'r001'}});
			$('#enter').remove();
			$('.welcome').remove();
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
	Template.roomExits.events({
		'click .northexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.north) {
				engine.clearPlayerEventLog();
				engine.movePlayer('north');
			}
		},
		'click .eastexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.east) {
				engine.clearPlayerEventLog();
				engine.movePlayer('east');			}
		},
		'click .southexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.south) {
				engine.clearPlayerEventLog();
				engine.movePlayer('south');
			}
		},
		'click .westexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.west) {
				engine.clearPlayerEventLog();
				engine.movePlayer('west');
			}
		},
		'click .upexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.up) {
				engine.clearPlayerEventLog();
				engine.movePlayer('up');
			}
		},
		'click .downexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.down) {
				engine.clearPlayerEventLog();
				engine.movePlayer('down');
			}
		},
	})
	Template.roomMobs.helpers({
		roomMobs:function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].mobs.length >= 1) {
				return Mobs.find({_id: Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].mobs[0]});
			}
		}
	}),
	Template.eventDisplay.helpers({
		eventDisplay: function(){
			return Player.find({_id: 'p001'}).fetch()[0].eventLog
		}

	}),
	Template.eventDisplay.events({
		'click .eventDisplay':function(){
			Session.set('click2', this._id);
			console.log('test')
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
    	var status = Dialogue.find({_id: Session.get('clickId')}).fetch()[0].status[0];
    	console.log(status);
    	engine.echoPlayerEventLog(Dialogue.find({_id: Session.get('clickId')}).fetch()[0][status].text);
    	$('#menu').fadeToggle();
    	if (Dialogue.find({_id: Session.get('clickId')}).fetch()[0][status].response.length >= 1) {
    		$('.dialogueResponse').show()
    	}
    	//Makes the overflow scroll to the bottom.
    	$(".eventDisplay").scrollTop($(".eventDisplay")[0].scrollHeight);
    }
	}),
	Template.dialogueResponse.helpers({
		dialogueResponse:function(){
			var status = Dialogue.find({_id: Session.get('clickId')}).fetch()[0].status[0];
			var response = Dialogue.find({_id: Session.get('clickId')}).fetch()[0][status].response;
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
			console.log(currentMob);
			Session.set('rclick', this._id);
			var responseClicked = Session.get('rclick');
			console.log(Session.get('rclick'));
			Dialogue.update({_id: currentMob}, {$set: {status: [Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].next]}});
			$('.dialogueResponse').hide();
			engine.echoPlayerEventLog(Dialogue.find({_id: currentMob}).fetch()[0][responseClicked].text);

		}
	})


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
