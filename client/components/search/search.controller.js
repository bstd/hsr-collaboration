'use strict';
// TODO submit and refactoring
angular.module('brewApp')
.controller('SearchCtrl', ['$scope', '$location', '$log', 'ProductService', function($scope, $location, $log, ProductService) {
  var self = this;

    self.repos              = ProductService.query();
    self.querySearch        = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

  // search query
  function querySearch(query) {
    var results = query ? self.repos.filter(createFilterFor(query)) : [];

    return results;
  }

  /**
    * Create filter function for a query string
    * filter based on item.name (case insensitive)
    */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(item) {
      var toMatch = angular.lowercase(item.name);

      return (toMatch.indexOf(lowercaseQuery) !== -1);
    };
  }


  // debug helper
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }


  /*
   * SUBMIT
   */
  $scope.search = function(form) {
    $log.debug('scope searchForm:',form);
    $location.path('/results');
  };
}]);
