'use strict';

eventsApp.directive('upvote', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/directives/upvote.html',
    scope: {
      upvote: "&",  //this ampersand '&' means method will be executed in the context of the parent scope (not isolated scope!)
      downvote: "&",
      count: "="  //if we used '@' then we must evaluate first in the html using {{}} because @ implies it expects a string (we are talking about the master html)
    }
  }
});