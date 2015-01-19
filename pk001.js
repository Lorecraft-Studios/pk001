if (Meteor.isClient) {
	Template.welcome.events({
		'click #enter':function() {
			Player.update({_id: 'p001'}, {$set: {roomAt: Rooms.find({_id: 'r001'}).fetch()[0]}});
			$('#enter').remove();
			$('.welcome').remove();
		}
	}),
	Template.roomTitle.helpers({
		roomTitle:function() {
			return Player.find({_id: 'p001'}).fetch()[0].roomAt.title;
		}
	}),
	Template.roomDesc.helpers({
		roomDesc:function() {
			return Player.find({_id: 'p001'}).fetch()[0].roomAt.desc;
		}
	}),
	Template.roomExits.helpers({
		roomExits:function() {
			var exitsArray = []
			for (var key in Player.find({_id: 'p001'}).fetch()[0].roomAt.exits) {
				if (Player.find({_id: 'p001'}).fetch()[0].roomAt.exits[key])
					exitsArray.push(key.charAt(0).toUpperCase() + key.slice(1));
			}
			return exitsArray
		}
	}),
	Template.roomMobs.helpers({
		roomMobs:function() {
			if (Player.find({_id: 'p001'}).fetch()[0].roomAt.mobs.length > 1) {
				return Player.find({_id: 'p001'}).fetch()[0].roomAt.mobs;
			}
		}
	}),
	Template.roomItems.helpers({
		roomItems:function() {
			if  (Player.find({_id: 'p001'}).fetch()[0].roomAt.items.length > 1) {
				return Player.find({_id: 'p001'}).fetch()[0].roomAt.items;
			}
		}
	})
//test comment



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
