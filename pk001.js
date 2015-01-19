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
			return Player.find({_id: 'p001'}).fetch()[0].roomAt.exits;
		}
	}),
	Template.roomMobs.helpers({
		roomMobs:function() {
			return Player.find({_id: 'p001'}).fetch()[0].roomAt.mobs;
		}
	}),
	Template.roomItems.helpers({
		roomItems:function() {
			return Player.find({_id: 'p001'}).fetch()[0].roomAt.items;
		}
	})




}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
