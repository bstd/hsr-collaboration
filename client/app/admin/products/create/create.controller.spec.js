'use strict';

describe('Controller: ProductsCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('brewApp'));

  var ProductsCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsCreateCtrl = $controller('ProductsCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
