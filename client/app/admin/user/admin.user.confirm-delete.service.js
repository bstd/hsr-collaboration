'use strict';

angular.module('brewApp')
.factory('AdminUserConfirmDeleteService', ['$mdDialog', function($mdDialog) {
  return function(user) {
    var confirm = $mdDialog.confirm()
      .title('Bestätigen: Benutzer löschen')
      .htmlContent('Wollen Sie Benutzer<br>' + user.name + ', ' + user.email + '<br>wirklich löschen?')
      .ariaLabel('Bestätigen: Benutzer löschen')
      .ok('Ok')
      .cancel('Abbrechen');
    return $mdDialog.show(confirm);
  };
}]);
