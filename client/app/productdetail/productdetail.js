'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('productdetail', {
    url: '/productdetail/:id',
    title: 'Produktdetail',
    templateUrl: 'app/productdetail/productdetail.html',
    controller: 'ProductDetailCtrl'
  });
});
