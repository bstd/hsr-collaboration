'use strict';

angular.module('brewApp')
.controller('AdminOrderListCtrl', ['$scope', '$log', '$q', '$state', '$mdDialog', 'AdminOrderService', 'AdminConfirmDeleteService', 'ProductService', function($scope, $log, $q, $state, $mdDialog, AdminOrderService, AdminConfirmDeleteService, ProductService) {
  $scope.products = [];
  $scope.orders = [];

  // confirm dialog
  $scope.confirmDelete = function(order) {
    AdminConfirmDeleteService('Bestellung', order.orderId).then(function() {
      $state.go('admin.order-destroy', { id: order._id });
    });
  };


  // promise helper for products in orders
  function doQuery(productId) {
    var d = $q.defer();
    var result = ProductService.get({ id: productId }, function() {
      d.resolve(result);
    });

    return d.promise;
  }

  // fetch orders
  $scope.orders = AdminOrderService.query(function(results) {
    var productsInOrders = [],
        productIds = [],
        uniqueIds = [],
        promises = [];

    // extract unique eans from order results callback using lodash
    // TODO exclude done orders as performance improvement
    angular.forEach(results, function(orderResource) {
      productsInOrders.push(orderResource.products);
    });

    angular.forEach(productsInOrders, function(products) {
      productIds.push(
        _(products)
        .pluck('_id')
        .value()
      );
    });

    // flatten and unique productIds in nested array
    uniqueIds = _.uniq(_.flatten(productIds));

    angular.forEach(uniqueIds, function(id) {
      promises.push(doQuery(id));// promises.push(ProductService.get({ id: id }));
    });

    $q.all(promises).then(function(data) {
      $scope.productsWithOrders = data;
      $log.debug('stock ready:',$scope.productsWithOrders);
    });

  });
}]);
