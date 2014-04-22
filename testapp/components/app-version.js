'use strict';

angular.module('myApp.appVersion', []).
  factory('version', function($http) {
    $http.get('/version');
    return 0.1;
  }).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
