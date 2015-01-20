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
	Template.roomItems.helpers({
		roomItems:function() {
			if  (Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].items.length >= 1) {
				return Mobs.find({_id: Rooms.find({_id: Player.find({_id: 'p001'}).fetch()[0].roomAt}).fetch()[0].items[0]});
			}
		}
	})


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
