'use strict';

angular.module('brewApp')
.service('BasketService', ['$log', 'BasketItem', function($log, BasketItem) {
  var items = [];
  var Basket = {};


  Basket.addItem = function(id, ean, name, price, quantity) {
    var inBasket = Basket.getItemById(id);

    if (typeof inBasket === 'object') {
      inBasket.setQuantity(quantity, true);// use relative increase (+1)
    }
    else {
      var newItem = new BasketItem(id, ean, name, price, quantity);

      items.push(newItem);
    }
  };


  Basket.getItemById = function(itemId) {
    var items = Basket.items(),
        foundInItems = false;

    angular.forEach(items, function(item) {
      if (item.getId() === itemId) {
        foundInItems = item;
      }
    });

    return foundInItems;
  };


  Basket.items = function() {
    return items;
  };


  Basket.removeItem = function(item) {
    var index = items.indexOf(item);

    items.splice(index, 1);
  };


  Basket.total = function() {
    var items = Basket.items(),
        sum = 0;

    angular.forEach(items, function(item) {
        sum += item.getTotal();
    });

    return +parseFloat(sum).toFixed(2);
  };


  Basket.isEmpty = function(length) {
    return length === 0;
  };


  Basket.clear = function() {
    items = [];
  };


  return Basket;
}]);
