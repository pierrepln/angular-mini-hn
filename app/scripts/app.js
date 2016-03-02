'use strict';

/**
 * @ngdoc overview
 * @name miniHackerNewsApp
 * @description
 * # miniHackerNewsApp
 *
 * Main module of the application.
 */
angular
  .module('miniHackerNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
