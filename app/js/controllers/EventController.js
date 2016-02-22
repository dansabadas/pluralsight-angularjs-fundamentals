'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData, $anchorScroll, $log) {
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

    eventData.getEvent()
      .$promise
        .then(function (event) { $scope.event = event; })
        .catch(function (response) { console.log(response); });

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