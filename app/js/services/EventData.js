//'use strict';
eventsApp.factory('eventData', function ($http, $log) {
    return {
      getEvent: function(successcn) {
        $http({ method: 'GET', url: '/data/event/1' })
        .success(function (data, status, headers, config) {
          successcn(data);
        })
        .error(function (data, status, headers, config) {
          $log.warn(data, status, headers, config);
        });
      }
    };
});