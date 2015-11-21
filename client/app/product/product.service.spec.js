'use strict';

describe('Service: product', function() {

  // load the service's module
  beforeEach(module('brewApp'));

  var $httpBackend,
      assetRequestHandler;

  beforeEach(inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    assetRequestHandler = $httpBackend.whenGET(/\/assets/).respond('');// assume all assets working
  }));

  afterEach(inject(function($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  it('mock http call to product api (GET /api/products/:id) - should return single product ', inject(function($httpBackend, ProductService) {
    var product = ProductService.get({ id: 'abc' });

    // Create an expectation for the correct url, and respond with a mock object
    $httpBackend.expectGET('/api/products/abc').respond(200, JSON.stringify({
      id: 'abc',
      name: 'test'
    }));

    //Because we're mocking an async action, ngMock provides a method for us to explicitly flush the request
    $httpBackend.flush();

    expect(product.name).toBe('test');
  }));


  it('mock http call to product api (GET /api/products) - should return list of products', inject(function($httpBackend, ProductService) {
    var products = ProductService.query();

    $httpBackend.expectGET('api/products').respond(200, JSON.stringify([
      {
        id: 'abc',
        name: 'test'
      },
      {
        id: 'def',
        name: 'test2'
      }
    ]));

    $httpBackend.flush();

    expect(products.length).toBe(2);
  }));
});
