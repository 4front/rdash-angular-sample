'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Need to do this so 4front knows this is a XHR request
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/dashboard.html'
      })
      .state('tables', {
        url: '/tables',
        templateUrl: 'templates/tables.html'
      })
      .state('charts', {
        url: '/charts',
        templateUrl: 'templates/charts.html'
      });
  }
]);
