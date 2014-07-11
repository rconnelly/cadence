'use strict';

angular.module('mean.products').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('products', {
            url: '/products/example',
            templateUrl: 'products/views/index.html'
        });
    }
]);
