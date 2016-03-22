'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, eventData) {  //$location,
        $scope.events = eventData.getAllEvents();
    }
);