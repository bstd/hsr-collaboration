'use strict';

angular.module('brewApp')
.factory('BasketItem', ['$log', function($log) {
  var item = function(id, ean, name, price, qty) {
    this.setId(id);
    this.setEan(ean);
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

  item.prototype.setEan = function(ean) {
    if (ean) {
      this._ean = ean;
    }
    else {
      $log.error('An EAN must be provided');
    }
  };
  item.prototype.getEan = function() {
    return this._ean;
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
    var qtyInt = parseInt(qty, 10);

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
    return +parseFloat(this.getQuantity() * this.getPrice()).toFixed(2);
  };


  return item;
}]);
