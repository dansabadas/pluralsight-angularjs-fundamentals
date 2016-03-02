'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']) //, 'ngCookies' //for example with cookies i need to add this dependency
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/newEvent', {
      templateUrl: 'templates/NewEvent.html',
      controller: 'EditEventController'
    }).when('/events', {
      templateUrl: 'templates/EventList.html',
      controller: 'EventListController'
    }).when('/event/:eventId', {
      foo:'bar',
      templateUrl: 'templates/EventDetails.html',
      controller: 'EventController',
      resolve: {    // resolve is good only if we don't want to get partially rendered pages
        event: function ($route, eventData) {
          var promise = eventData.getEvent($route.current.pathParams.eventId).$promise;
          console.log(promise);
          return promise;
        }
      }
    }).otherwise({ redirectTo: '/events' });

    $locationProvider.html5Mode(true);
  })
  .factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', { capacity: 3 });
  });
