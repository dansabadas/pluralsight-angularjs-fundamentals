'use strict';

eventsApp.directive('greeting', function() {
  return {
    restrict: 'E',
    replace: true,
    template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
    controller: '@', //or simply 'GreetingController' instead of @
    name: 'ctrl'
  };
});

eventsApp.controller('GreetingController', function GreetingController($scope) {
  $scope.sayHello = function () {
    alert('Hello');
  };
});// it can be defined just everywhere this controller