'use strict';
// TODO
angular.module('brewApp')
.factory('BasketService', ['$mdDialog', function($mdDialog) {
  var items = [];
  var Basket = {};


  Basket.addItem = function(item) {
console.log('Basket.addItem:',item);
    var id = item._id,
        isInBasket = Basket.getItemById(id);

    if (typeof isInBasket === 'object') {
console.log('todo quantity increase');
      // increase quantity of item already in basket
    }
    else {
      items.push(item);
    }
  };


  Basket.removeItem = function(item) {
    var index = items.indexOf(item);

    items.splice(index, 1);
  };


  Basket.items = function() {
    return items;
  };


  Basket.getItemById = function(itemId) {
    var items = Basket.items(),
        foundInItems = false;

    angular.forEach(items, function(item) {
      if (item._id === itemId) {
        foundInItems = item;
      }
    });

    return foundInItems;
  };

  return Basket;
}]);
