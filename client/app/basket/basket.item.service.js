﻿'use strict';
// TODO cleanup factory
angular.module('brewApp')
.factory('BasketItem', ['$log', function($log) {
  var item = function(id, name, price, qty) {
//console.log('BasketItem item:',id,name,price,qty);
    this.setId(id);
    this.setName(name);
    this.setPrice(price);
    this.setQuantity(qty);
  };

  item.prototype.setId = function(id) {
    if (id) {
      this._id = id;
    }
    else {
      $log.error('An ID must be provided');
    }
  };
  item.prototype.getId = function() {
    return this._id;
  };

  item.prototype.setName = function(name) {
    if (name) {
      this._name = name;
    }
    else {
      $log.error('A name must be provided');
    }
  };
  item.prototype.getName = function() {
    return this._name;
  };

  item.prototype.setPrice = function(price) {
    var priceFloat = parseFloat(price);

    if (priceFloat) {
      if (priceFloat <= 0) {
        $log.error('A price must be over 0');
      } else {
        this._price = (priceFloat);
      }
    } else {
      $log.error('A price must be provided');
    }
  };
  item.prototype.getPrice = function() {
    return this._price;
  };

  item.prototype.setQuantity = function(qty, relative) {
//console.log('BasketItem setqty:',qty,relative);
    var qtyInt = parseInt(qty, 10);
//console.log('qtyInt',qtyInt);
    if (qtyInt % 1 === 0) {
      if (relative === true) {
        this._qty  += qtyInt;
      }
      else {
        this._qty = qtyInt;
      }
      if (this._qty < 1) {
        this._qty = 1;
      }
    }
    else {
      this._qty = 1;
      $log.info('Quantity must be an integer and was defaulted to 1');
    }
  };

  item.prototype.getQuantity = function() {
    return this._qty;
  };

  item.prototype.getTotal = function() {
//console.log('item.prototype.getTotal:');
//console.log(+parseFloat(this.getQuantity() * this.getPrice()).toFixed(2));
    return +parseFloat(this.getQuantity() * this.getPrice()).toFixed(2);
  };


  return item;
}]);