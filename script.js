var app = angular.module('myApp', []);

app.controller('MyController', function($http){
var controller = this;
controller.message = ''
controller.messages = [];


controller.hiddenMessage = false;


controller.showMessage = function(){
  controller.messages.push(controller.message);
  controller.hiddenMessage = true;
   controller.firstMessage = controller.message;
   console.log(controller.firstMessage);
  controller.previousMessage = controller.messages;
  console.log(controller.previousMessage);
  controller.message = '';
  };
});
