'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        console.log('absUrl:', $location.absUrl());
        console.log('protocol:', $location.protocol());
        console.log('port:', $location.port());
        console.log('host:', $location.host());

      //the last 4 below are read-write properties the ones above are read-only
        console.log('path:', $location.path());
        console.log('search:', $location.search());
        console.log('hash:', $location.hash());
        console.log('url:', $location.url());
        $scope.createEvent = function() {
            $location.replace();
            $location.url('/newEvent');
        }
    })