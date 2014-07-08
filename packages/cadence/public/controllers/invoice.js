'use strict';

angular.module('mean.cadence').controller('InvoiceController', ['$scope', 'Global', 'Cadence',
  function($scope, Global, Cadence) {
    $scope.global = Global;
    $scope.package = {
      name: 'cadence'
    };
  }
]);
