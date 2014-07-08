'use strict';

angular.module('mean.cadence').controller('CadenceController', ['$scope', 'Global', 'Cadence',
    function($scope, Global, Cadence) {
        $scope.global = Global;
        $scope.package = {
            name: 'cadence'
        };
    }
]);
