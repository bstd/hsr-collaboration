'use strict';

angular.module('brewApp')
.factory('AdminConfirmDeleteService', ['$mdDialog', function($mdDialog) {
  return function(strTarget, strInfo) {
    var confirm = $mdDialog.confirm()
      .title('Bestätigen: ' + strTarget + ' löschen')
      .htmlContent('<p>Wollen Sie ' + strTarget + '</p><p class=\"brew__confirm md-body-2\">' + strInfo + '</p><p>wirklich löschen?</p>')
      .ariaLabel('Bestätigen: ' + strTarget + ' löschen')
      .ok('Löschen')
      .cancel('Abbrechen');
    return $mdDialog.show(confirm);
  };
}]);
