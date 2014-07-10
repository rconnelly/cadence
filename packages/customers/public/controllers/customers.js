'use strict';

angular.module('mean.customers').controller('CustomersController', ['$scope', 'Global', 'Customers',
    function($scope, Global, Customers) {
        $scope.global = Global;
        $scope.package = {
            name: 'customers'
        };
    }
]);
