Messages = new Meteor.Collection('messages');

if (Meteor.is_client){
  Template.messages.messages = function(){
    return Messages.find({}, {sort: {time: -1}});
  }
}

if (Meteor.is_server){

}