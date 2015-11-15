'use strict';

describe('Controller: IconsCtrl', function () {

  // load the controller's module
  beforeEach(module('brewApp'));

  var IconsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IconsCtrl = $controller('IconsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
