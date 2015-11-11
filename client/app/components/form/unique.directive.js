'use strict';

angular.module('projekt2App')
.directive('uniqueEmail', ['$q', 'CheckUniqueService', function($q, CheckUniqueService) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			var emailIsUnique = false;

			ctrl.$asyncValidators.unique = function(modelValue, viewValue) {
				if (ctrl.$isEmpty(modelValue)) {
					// empty = valid
					return $q.when();
				}

				var deferred = $q.defer();


				// check email constrain
				CheckUniqueService.get({ id: 'user', property: 'email', value: modelValue }).$promise.then(function(result) {
					emailIsUnique = !result.duplicate;

					if (emailIsUnique) {
						deferred.resolve();
					} else {
						deferred.reject();
					}
				});

				return deferred.promise;
			};
		}
	};
}]);
