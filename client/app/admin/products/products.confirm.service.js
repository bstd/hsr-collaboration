'use strict';

angular.module('brewApp')
  .factory('AdminProductConfirmDeleteService', ['$mdDialog', function($mdDialog) {
    return function(product) {
      var confirm = $mdDialog.confirm()
        .title('Bestätigen: Produkt löschen')
        .htmlContent('Wollen Sie Product<br>' + product.name + '<br>wirklich löschen?')
        .ariaLabel('Bestätigen: Produkt löschen')
        .ok('Ok')
        .cancel('Abbrechen');
      return $mdDialog.show(confirm);
    };
  }]);
