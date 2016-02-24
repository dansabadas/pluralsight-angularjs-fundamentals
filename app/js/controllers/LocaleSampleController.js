'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale) {

        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

        throw { message: 'error message' }; // throwing this error will stop binding info above to be displayed in the page
    }
);