'use strict';

angular.module('brewApp')
.factory('AdminOrderConfirmDeleteService', ['$mdDialog', function($mdDialog) {
  return function(order) {
    var confirm = $mdDialog.confirm()
      .title('Bestätigen: Bestellung löschen')
      .htmlContent('Wollen Sie Bestellung<br>' + order._id + ', für ' + order.userEmail + '<br>wirklich löschen?')
      .ariaLabel('Bestätigen: Bestellung löschen')
      .ok('Ok')
      .cancel('Abbrechen');
    return $mdDialog.show(confirm);
  };
}]);
