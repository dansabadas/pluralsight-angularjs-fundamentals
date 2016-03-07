'use strict';

eventsApp.directive('repeatX', function ($compile) {
  return {
    //link: function (scope, element, attrs, controller) {
    //  for (var i = 0; i < Number(attrs.repeatX) - 1; i++) {
    //    element.after($compile(element.clone().attr('repeat-x', 0))(scope));  // compile is expensive (DOM to be traversed, etc)
    //  }
    //}
    compile: function (element, attrs) {  //runs only once, link runs individually for each directive (when manipulating DOM we suggest using compile func)
      for (var i = 0; i < Number(attrs.repeatX) - 1; i++) {
        element.after(element.clone().attr('repeat-x', 0));  // compile is expensive (DOM to be traversed, etc)
      }

      return function (scope, element, attrs, controller) { // compile returns the link function
        console.log('test');
        attrs.$observe('text', function (newValue) {
          if (newValue === 'Hello World')
          {
            element.css('color', 'red');
          }
        });
      };
    }
  };
});