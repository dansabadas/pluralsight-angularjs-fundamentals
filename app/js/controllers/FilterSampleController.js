'use strict';

eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, durationsFilter) {  //$filter durationsFilter
        $scope.data = {};

        $scope.data.duration1 = durationsFilter(1);
        $scope.data.duration2 = durationsFilter(2);
        $scope.data.duration3 = durationsFilter(3);
        $scope.data.duration4 = durationsFilter(4);

        //var durationsFilter = $filter('durations');
        //$scope.data.duration1 = durationsFilter(1);
        //$scope.data.duration2 = durationsFilter(2);
        //$scope.data.duration3 = durationsFilter(3);
        //$scope.data.duration4 = durationsFilter(4);
    }
);