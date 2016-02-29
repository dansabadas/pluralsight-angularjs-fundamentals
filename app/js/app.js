'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']) //, 'ngCookies' //for example with cookies i need to add this dependency
  .config(function ($routeProvider) {
    $routeProvider.when('/newEvent', {
      templateUrl: 'templates/NewEvent.html',
      controller: 'EditEventController'
    }).when('/events', {
      templateUrl: 'templates/EventList.html',
      controller: 'EventListController'
    }).when('/event/:eventId', {
      templateUrl: 'templates/EventDetails.html',
      controller: 'EventController'
    });
  })
  .factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', { capacity: 3 });
  });
