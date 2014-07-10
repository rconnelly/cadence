'use strict';

angular.module('mean.customers').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('customers', {
            url: '/customers',
            templateUrl: 'customers/views/index.html'
        });
    }
]);
