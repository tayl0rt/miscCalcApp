'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
	'myApp.homeview',
  'myApp.investment_calc',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
