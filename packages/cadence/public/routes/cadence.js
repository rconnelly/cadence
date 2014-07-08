'use strict';

angular.module('mean.cadence').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('cadence example page', {
            url: '/cadence/example',
            templateUrl: 'cadence/views/index.html'
        });
    }
]);
