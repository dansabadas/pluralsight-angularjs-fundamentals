'use strict';

eventsApp
  .directive('greeting', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      //priority: -1,
      template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
      //controller: '@', //or simply 'GreetingController' instead of @
      //name: 'ctrl'
      controller: function ($scope) { //we can use either inline controller, or explicitly named one in the master HTML as above
        var greetings = ['hello'];    // advantage of inline controller is that it can be referenced by other directives
        $scope.sayHello = function () {
          alert(greetings.join());
        };
        this.addGreeting = function (greeting) {
          greetings.push(greeting);
        };
      }
    };
  })
  .directive('finnish', function () {
    return {
      restrict: 'A',
      //priority: -1,
      //terminal: true, // no directive with a lower priority will execute
      require: 'greeting',  // we use the controller from another directive (it requires to be on the same element as the original directive greeting, not nested inside!)
      link: function (scope, element, attrs, controller) {
        controller.addGreeting('hei');
      }
    };
  })
  .directive('hindi', function () {
    return {
      restrict: 'A',
      //priority: -2,
      require: '^greeting', // directive is nested and we want to share controller of a parent directive. parent must use transclusion
      link: function (scope, element, attrs, controller) {
        controller.addGreeting('namaste');
      }
    };
  });

eventsApp.controller('GreetingController', function GreetingController($scope) {
  var greetings = ['hello'];
  $scope.sayHello = function () {
    alert(greetings.join());
  };
  this.addGreeting = function (greeting) {
    greetings.push(greeting);
  };
});// it can be defined just everywhere this controller