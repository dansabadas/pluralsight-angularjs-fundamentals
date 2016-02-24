'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {

        //var promise = $timeout(function() {
        //    $scope.name = "John Doe";
        //}, 3000);

        setTimeout(function () {
          $scope.name = "John Doe"; // this happens on a different thread!
        }, 3000);

        $scope.cancel = function() {
            $timeout.cancel(promise);
        }
    }
);