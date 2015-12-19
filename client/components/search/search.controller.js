'use strict';

angular.module('brewApp')
.controller('HeaderSearchCtrl', ['$scope', '$state', '$log', '$mdUtil', 'ProductService', function($scope, $state, $log, $mdUtil, ProductService) {
  var self = this,
      filteredResults = [];

  // exclude inactve products
  filteredResults = ProductService.query(function(results) {
    _.remove(results, function(result) {
      return result.active === false;
    });
  });

  // md-autocomplete
  self.repos              = filteredResults;
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
    $log.debug('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    $log.debug('Item changed to ' + JSON.stringify(item));
  }


  /*
   * SUBMIT
   */
  $scope.search = function(form) {
    $log.debug('scope searchForm:',form);
    $log.debug('form.q:',form.q);
    $log.debug('form.q.$modelValue:',form.q.$modelValue);

    // https://github.com/angular/material/issues/3287
    $mdUtil.enableScrolling();

    $state.go('result', { query: form.q.$modelValue });
  };
}]);
