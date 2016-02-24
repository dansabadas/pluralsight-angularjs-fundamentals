'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource']) //, 'ngCookies' //for example with cookies i need to add this dependency
  .factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', { capacity: 3 });
  });
