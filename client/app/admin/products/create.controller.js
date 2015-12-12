'use strict';

angular.module('brewApp')
  .controller('ProductsCreateCtrl', ['$scope', '$http', '$state', '$timeout', 'Upload', 'AdminProductService', 'ToastSimpleService', function ($scope, $http, $state, $timeout, Upload, AdminProductService, ToastSimpleService) {
    $scope.product = {
      active: true
    };
    $scope.errors = {};

    $scope.tastes = ['leicht', 'schlank', 'weich', 'süffig', 'abgerundet', 'sortentypisch', 'vollmundig', 'malzaromatisch',
      'röstmalzaromatisch', 'schwer', 'würzeartig', 'ausgewogen', 'harmonisch ausklingend', 'rund', 'kräftig betont', 'trocken', 'nicht anhängend', 'feinherb', 'feinbitter'];
    $scope.vanities = ['', 'Lagerbier', 'Spezialbier', 'Dunkles Bier', 'Naturtrübes Bier', 'Alkoholfreies Bier', 'Altbier',
      'Pale Ale', 'Festbier (Bockbier)', 'Porter', 'Schwarzbier', 'Stout', 'Kohlenhydratarmes Bier', 'Leichtbier (alkoholarm)',
      'Mais-, Reisbier', 'Mehrkornbier', 'Starkbier', 'Holzfassgereifte Biere', 'Weizenbier (Weissbier)', 'Biermischgetränke'];
    $scope.states = ['', 'Schweiz', 'Deutschland', 'Tschechien', 'Britannien', 'Irland', 'Belgien', 'Holland', 'Dänemark',
      'Frankreich', 'Österreich', 'USA', 'Kanada', 'Mexico'];



    //ToDo Pic Upload
    // submit
    $scope.create = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        /*AdminProductService.create($scope.product).$promise.then(function() {
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
         });*/
        form.upload = Upload.upload({
          url: 'api/products',
          data: {
            file: $scope.product.file,
            ean: $scope.product.ean,
            active: $scope.product.active,
            name: $scope.product.name,
            price: $scope.product.price,
            info: $scope.product.info,
            stock: $scope.product.stock,
            vanity: $scope.product.vanity,
            country: $scope.product.country
          }
        });

        form.upload.then(function (response) {
          $state.go('admin.product-list');
          ToastSimpleService('Produkt erfolgreich erstellt');
          $timeout(function () {
            form.result = response.data;
          });
        },
        function (response) {
          if (response.status > 0) {
            $scope.errorMsg = response.status + ': ' + response.data;
          }
        },
        function (evt) {
          // Math.min is to fix IE which reports 200% sometimes
          form.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });

      }
    };

  }]);
