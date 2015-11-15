'use strict';

describe('Controller: BasketCtrl', function () {

  // load the controller's module
  beforeEach(module('brewApp'));

  var BasketCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasketCtrl = $controller('BasketCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
