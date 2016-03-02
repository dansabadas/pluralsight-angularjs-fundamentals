'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData, $anchorScroll, $log, $routeParams, $route) {
    $scope.sortorder = 'name';
    //eventData.getEvent()    // getEvent is returning a promise when using $http
    //  .success(function (event) { $scope.event = event; })
    //  .error(function (data, status, headers, config) {
    //    $log.warn(data, status, headers, config);
    //  });

    //$scope.event = eventData.getEvent();

    //eventData.getEvent()
    //  .$promise.then(
    //    function (event) { $scope.event = event; },
    //    function (response) { console.log(response); });

    //eventData.getEvent($routeParams.eventId)
    //  .$promise
    //    .then(function (event) { $scope.event = event; })
    //    .catch(function (response) { console.log(response); });

    $scope.event = $route.current.locals.event; // for this to work we need to use .resolve in app.js routing (route-provider .when)

    console.log($route.current.foo, $route.current.params.foo2, $route.current.params.eventId, $route.current.pathParams.eventId, $route.current.pathParams.foo2);

    $scope.reload = function () {
      $route.reload();
    };

    $scope.upVoteSession = function (session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
      session.upVoteCount--;
    };

    $scope.scrollToSession = function () {
      console.log('hit');
      $anchorScroll();
    };
  });