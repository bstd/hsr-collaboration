'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('brewApp'));

  var MainCtrl,
      scope,
      $httpBackend,
      assetRequestHandler;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    assetRequestHandler = $httpBackend.whenGET(/\/assets/).respond('');// assume all assets working

    $httpBackend.expectGET('api/products').respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of products to the scope', function() {
    $httpBackend.flush();
    expect(scope.products.length).toBe(4);
  });
});
