'use strict';

describe('Controller: ProductDestroyCtrl', function () {

  // load the controller's module
  beforeEach(module('brewApp'));

  var ProductsDestroyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsDestroyCtrl = $controller('ProductsDestroyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
