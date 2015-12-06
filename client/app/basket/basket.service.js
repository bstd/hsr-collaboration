'use strict';
// TODO cleanup
angular.module('brewApp')
.service('BasketService', ['$log', 'BasketItem', function($log, BasketItem) {
  var items = [];
  var Basket = {};


  Basket.addItem = function(id, ean, name, price, quantity) {
    var inBasket = Basket.getItemById(id);
//console.log('Basket.addItem:',id, ean, name, price, quantity);
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
//console.log('Basket.getItemById:',itemId);
//console.log('items:',items);
    angular.forEach(items, function(item) {
      if (item.getId() === itemId) {
        foundInItems = item;
      }
    });

    return foundInItems;
  };


  Basket.items = function() {
//console.log('Basket.items:',items);
    return items;
  };


  Basket.removeItem = function(item) {
    var index = items.indexOf(item);
//console.log('Basket.removeItem:',item);
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
//console.log('Basket.isEmpty - length:',length);
    return length === 0;
  };


  Basket.clear = function() {
//console.log('Basket.clear');
    items = [];
  };


  return Basket;
}]);
