'use strict';

angular.module('brewApp')
.controller('ProductsCreateCtrl', ['$scope', '$http', '$state', '$timeout', 'Upload', 'AdminProductService', 'ToastSimpleService', function($scope, $http, $state, $timeout, Upload, AdminProductService, ToastSimpleService) {
    $scope.product = {};
    $scope.errors = {};
    $scope.tastes = [ 'leicht', 'schlank', 'weich', 'süffig', 'abgerundet', 'sortentypisch', 'vollmundig', 'malzaromatisch',
      'röstmalzaromatisch', 'schwer', 'würzeartig', 'ausgewogen', 'harmonisch ausklingend', 'rund', 'kräftig betont', 'trocken', 'nicht anhängend', 'feinherb', 'feinbitter' ];
    $scope.vanities = [ '', 'Lagerbier', 'Spezialbier', 'Dunkles Bier', 'Naturtrübes Bier', 'Alkoholfreies Bier', 'Altbier',
      'Pale Ale', 'Festbier (Bockbier)', 'Porter', 'Schwarzbier', 'Stout', 'Kohlenhydratarmes Bier', 'Leichtbier (alkoholarm)',
      'Mais-, Reisbier', 'Mehrkornbier', 'Starkbier', 'Holzfassgereifte Biere', 'Weizenbier (Weissbier)', 'Biermischgetränke' ];
    $scope.states = [ '', 'Schweiz', 'Deutschland', 'Tschechien', 'Britannien', 'Irland', 'Belgien', 'Holland', 'Dänemark',
      'Frankreich', 'Österreich', 'USA', 'Kanada', 'Mexico' ];

    //ToDo Pic Upload
    // submit
    $scope.create = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        AdminProductService.create($scope.product).$promise.then(function() {
          $state.go('admin.product-list');
          ToastSimpleService('Produkt erfolgreich erstellt');
        })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
      }
    };
    $scope.uploadFiles = function(file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
        file.upload = Upload.upload({
          url: 'api/products',
          data: {file: file}
        });

        file.upload.then(function (response) {
          $timeout(function () {
            file.result = response.data;
          });
        }, function (response) {
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          file.progress = Math.min(100, parseInt(100.0 *
            evt.loaded / evt.total));
        });
      }
    }
  }]);
