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
				engine.teleportPlayer((Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.north))
			}
		},
		'click .eastexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.east) {
				engine.teleportPlayer((Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.east))
			}
		},
		'click .southexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.south) {
				engine.teleportPlayer((Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.south))
			}
		},
		'click .westexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.west) {
				engine.teleportPlayer((Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.west))
			}
		},
		'click .upexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.up) {
				engine.teleportPlayer((Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.up))
			}
		},
		'click .downexit':function() {
			if (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.down) {
				engine.teleportPlayer((Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].exits.down))
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
    	var status = Dialogue.find({_id: Session.get('clickId')}).fetch()[0].status;
    	for (var i = 0; i < status.length;i++){
    		engine.echoPlayerEventLog(Dialogue.find({_id: Session.get('clickId')}).fetch()[0].dialogue[status[i]].text)
    	}
    	$('#menu').fadeToggle();
    	//Dialogue.find({_id: Session.get('clickId')})
    	//engine.echoPlayerEventLog(Mobs.find({_id: this._id)}))
    }
	}),
	Template.dialogueReponse.helpers({
		dialogueResponse:function(){
			return Dialogue.find({_id: 'p001'});
		}
	})


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
