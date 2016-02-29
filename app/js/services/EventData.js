//'use strict';
eventsApp.factory('eventData', function ($resource) { //$http
  var resource = $resource('/data/event/:id', { id: '@id' });
    return {
      getEvent: function() {
        //return $http({ method: 'GET', url: '/data/event/1' });
        return resource.get({ id: 1 });  // this is for REST services, works like a promise but is not a promise as it returns synchronously!
      },
      save: function (event) {
        event.id = '0';
        return resource.save(event);
      },
      getAllEvents: function () {
        return resource.query();
      }
    };
});