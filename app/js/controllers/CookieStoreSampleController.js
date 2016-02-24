'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {
      var i = 1;
        $scope.event = {id: i, name:"My Event"};

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function() {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function() {
            $cookieStore.remove('event');
        };
    }
);