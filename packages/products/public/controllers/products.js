'use strict';

angular.module('mean.products').controller('ProductsController', ['$scope', 'Global', 'Products',
    function($scope, Global, Products) {
        $scope.global = Global;
        $scope.package = {
            name: 'products'
        };
    }
]);
