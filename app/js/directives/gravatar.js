'use strict';

eventsApp.directive('gravatar', function (gravatarUrlBuilder) {
  return {
    restrict: 'E',
    template: '<img />',
    replace: true,
    link: function (scope, element, attrs, controller) {
      attrs.$observe('email', function (newValue, oldValue) { // observes changes to an attribute on an element
        if (newValue !== oldValue) {
          attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue)); // we set the 'src' on the replacing image element not the gravatar element
        }
      });
    }
  }
});