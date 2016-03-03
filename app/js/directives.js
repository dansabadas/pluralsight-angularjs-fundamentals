'use strict';

eventsApp.directive('mySample', function () {
  return {
    restrict: 'CE',  // by default is A
    template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
    //link: function (scope, element, attrs, controller) {  // no need to the link function is this contrived example, template property above would suffice
    //  var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
    //  angular.element(element).html($compile(markup)(scope)); //the scope is the parent scope. for the SampleDirective template
    //  //element is the div element (the the .html directive)
    //}
  };
});