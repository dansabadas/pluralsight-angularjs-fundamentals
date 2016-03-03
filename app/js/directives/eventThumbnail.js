'use strict';

eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope: {
          event: "=myEvent" // myEvent is specified as attribute my-event in the html template
          //it could have been specified as event: "=" instead of event: "=event"
        }
    }
});
